import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { getContent } from '../data/content.js';
import { runStateTransition } from '../lib/transitions.js';
import { getVisitorGeo, readCachedVisitorGeo } from '../lib/visitor.js';
import { splitLocalePath, withLocalePath } from '../lib/localePath.js';
import { languageForCountry } from './countryLanguages.js';
import {
  DEFAULT_LANGUAGE,
  LANGUAGE_CODES,
  browserLanguage,
  getLanguage,
  isLanguageCode,
} from './languages.js';
import {
  BASE_TRANSLATIONS,
  getLoadedTranslation,
  loadTranslation,
} from './translations/index.js';

const STORAGE_KEY = 'djamdeen:language';
// Keep the branded boot short: after 1.5 s, fall back to the browser language
// instead of holding the first paint hostage to a slow IP lookup.
const DETECTION_TIMEOUT = 1500;

const I18nContext = createContext(null);

function readStoredLanguage() {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return isLanguageCode(stored) ? stored : null;
  } catch {
    return null;
  }
}

function readUrlLanguage() {
  try {
    const fromPath = splitLocalePath(window.location.pathname).locale;
    if (isLanguageCode(fromPath)) return fromPath;

    const value = new URLSearchParams(window.location.search).get('lang');
    return isLanguageCode(value) ? value : null;
  } catch {
    return null;
  }
}

function persistLanguage(code) {
  try {
    window.localStorage.setItem(STORAGE_KEY, code);
  } catch {
    // Storage can be unavailable (private mode, quota): the choice stays in memory.
  }
}

function syncUrlLanguage(code) {
  try {
    const url = new URL(window.location.href);
    const { pathname } = splitLocalePath(url.pathname);
    const nextPath = withLocalePath(pathname, code);

    // The path is now the source of truth; drop the legacy query parameter.
    url.searchParams.delete('lang');

    window.history.replaceState(
      window.history.state,
      '',
      `${nextPath}${url.search}${url.hash}`,
    );
  } catch {
    // A malformed URL should never block the language switch.
  }
}

function resolveInitialState() {
  const fromUrl = readUrlLanguage();
  if (fromUrl) return { status: 'ready', locale: fromUrl, source: 'url' };

  const { pathname } = splitLocalePath(window.location.pathname);

  // A prefix-less deep link is an English URL by definition. This keeps
  // `/blog` and `/projet` canonical and avoids a language flash on shared
  // links; the visitor's stored preference only applies to the entry page.
  if (pathname !== '/') {
    return { status: 'ready', locale: DEFAULT_LANGUAGE, source: 'path' };
  }

  const stored = readStoredLanguage();
  if (stored) return { status: 'ready', locale: stored, source: 'stored' };

  // A country already resolved in this browser session lets us paint the right
  // language on the very first frame, without waiting on the network.
  const cached = readCachedVisitorGeo();
  const fromCache = languageForCountry(cached?.countryCode);
  if (fromCache) return { status: 'ready', locale: fromCache, source: 'geo-cache' };

  return {
    status: 'detecting',
    locale: browserLanguage() ?? DEFAULT_LANGUAGE,
    source: 'browser',
  };
}

function lookup(source, path) {
  if (!source || !path) return undefined;
  return path.split('.').reduce((value, key) => (value == null ? undefined : value[key]), source);
}

function interpolate(template, values) {
  if (typeof template !== 'string') return template;
  if (!values) return template;

  return template.replace(/\{(\w+)\}/g, (match, key) =>
    Object.prototype.hasOwnProperty.call(values, key) ? String(values[key]) : match,
  );
}

function LanguageBoot() {
  return (
    <div
      className="bg-grid flex min-h-dvh items-center justify-center"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-4">
        <span className="text-[15px] font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
          djamdeen.
        </span>
        <span className="flex items-end gap-1" aria-hidden="true">
          {[0, 1, 2].map((index) => (
            <span
              key={index}
              className="language-boot-bar h-1.5 w-1.5 rounded-full bg-neutral-400 dark:bg-neutral-500"
              style={{ animationDelay: `${index * 140}ms` }}
            />
          ))}
        </span>
      </div>
    </div>
  );
}

export function LanguageProvider({ children }) {
  const [state, setState] = useState(resolveInitialState);
  // English is bundled, so it is always available. Other locales are loaded on
  // demand (and prefetched on idle) to keep the first payload small.
  const [translations, setTranslations] = useState(() => ({ en: BASE_TRANSLATIONS.en }));
  const requestRef = useRef(0);

  const language = getLanguage(state.locale);
  const translation = translations[language.code] ?? null;
  const content = useMemo(
    () => getContent(language.code, translation ?? undefined),
    [language.code, translation],
  );
  const ready = state.status === 'ready' && Boolean(translation);

  // A ?lang= URL is an explicit choice: keep it for the next visits.
  useEffect(() => {
    if (state.source === 'url') persistLanguage(state.locale);
  }, [state.source, state.locale]);

  // First visit without a stored choice: ask the IP geolocation for a country,
  // then map that country to one of the eight languages. The browser language
  // is the fallback when the request fails or the country is not mapped.
  // Load its chunk in parallel so the boot screen can disappear immediately
  // when the lookup resolves.
  useEffect(() => {
    if (state.status !== 'detecting') return undefined;
    loadTranslation(language.code);

    let active = true;

    const finish = (locale, source) => {
      if (!active) return;
      setState({ status: 'ready', locale, source });
    };

    getVisitorGeo({ timeout: DETECTION_TIMEOUT })
      .then((geo) => {
        const detected = languageForCountry(geo?.countryCode);
        if (detected) finish(detected, 'geo');
        else finish(browserLanguage() ?? DEFAULT_LANGUAGE, 'browser');
      })
      .catch(() => {
        finish(browserLanguage() ?? DEFAULT_LANGUAGE, 'browser');
      });

    return () => {
      active = false;
    };
  }, [state.status, language.code]);

  // The active locale needs its chunk before the interface can be painted.
  useEffect(() => {
    if (state.status !== 'ready' || translation) return undefined;

    let active = true;
    loadTranslation(language.code).then((loaded) => {
      if (!active) return;
      setTranslations((current) => ({ ...current, [language.code]: loaded }));
    });

    return () => {
      active = false;
    };
  }, [state.status, language.code, translation]);

  // Warm the other locales once the page is idle. This keeps the first load
  // light while making a language switch effectively instant afterwards.
  useEffect(() => {
    if (!ready) return undefined;

    const connection = navigator.connection;
    if (connection?.saveData || /(^|-)2g$/.test(connection?.effectiveType ?? '')) {
      return undefined;
    }

    let cancelled = false;
    const prefetch = () => {
      for (const code of LANGUAGE_CODES) {
        if (cancelled || code === language.code || getLoadedTranslation(code)) continue;
        loadTranslation(code);
      }
    };

    let idleHandle;
    if (typeof window.requestIdleCallback === 'function') {
      idleHandle = window.requestIdleCallback(prefetch, { timeout: 2500 });
    } else {
      idleHandle = window.setTimeout(prefetch, 1800);
    }

    return () => {
      cancelled = true;
      if (typeof window.cancelIdleCallback === 'function') window.cancelIdleCallback(idleHandle);
      else window.clearTimeout(idleHandle);
    };
  }, [ready, language.code]);

  // Keep the document itself in sync before paint: `lang` drives fonts,
  // hyphenation, screen readers and the UA's own language handling; `dir`
  // mirrors RTL for Arabic. A layout effect also means the new direction is
  // part of the view-transition snapshot when the language changes.
  useLayoutEffect(() => {
    const root = document.documentElement;
    root.lang = language.locale;
    root.dir = language.dir;
    root.dataset.language = language.code;
  }, [language]);

  const setLocale = useCallback(
    (code) => {
      if (!isLanguageCode(code) || code === language.code) return;
      persistLanguage(code);
      syncUrlLanguage(code);

      const requestId = ++requestRef.current;

      const commit = (loaded) => {
        if (requestId !== requestRef.current) return;
        runStateTransition(() => {
          setTranslations((current) => (current[code] ? current : { ...current, [code]: loaded }));
          setState({ status: 'ready', locale: code, source: 'manual' });
        });
      };

      const loaded = translations[code] ?? getLoadedTranslation(code);
      if (loaded) {
        commit(loaded);
        return;
      }

      loadTranslation(code).then(commit);
    },
    [language.code, translations],
  );

  // Normalise the address bar to the path-based locale URL. A visitor who
  // follows an old `?lang=fr` link, or whose preference is stored while on the
  // root, gets one canonical, crawlable URL (`/fr`, `/fr/blog`).
  useLayoutEffect(() => {
    if (state.status !== 'ready') return;
    const { pathname } = splitLocalePath(window.location.pathname);
    if (withLocalePath(pathname, state.locale) !== window.location.pathname) {
      syncUrlLanguage(state.locale);
    }
  }, [state.status, state.locale]);

  // Browser history can move between locale prefixes. Keep the rendered
  // language in sync with the address the visitor actually navigated to.
  useEffect(() => {
    const onPopState = () => {
      const desired = readUrlLanguage() ?? DEFAULT_LANGUAGE;
      if (desired !== language.code) setLocale(desired);
    };

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, [language.code, setLocale]);

  const localizedPath = useCallback(
    (to = '/') => withLocalePath(splitLocalePath(to).pathname, language.code),
    [language.code],
  );

  const t = useCallback(
    (key, values) => {
      const value =
        lookup(content.ui, key) ??
        lookup(content, key) ??
        lookup(content.ui, key.replace(/^ui\./, ''));
      return interpolate(value, values) ?? key;
    },
    [content],
  );

  // Plural-aware lookup: `tp('projects.count', 2)` reads `projects.countOther`
  // in English, `projects.countFew` in Russian, `projects.countTwo` in Arabic…
  const pluralRules = useMemo(
    () => new Intl.PluralRules(language.locale),
    [language.locale],
  );

  const tp = useCallback(
    (key, count) => {
      const form = pluralRules.select(count);
      const suffix = form.charAt(0).toUpperCase() + form.slice(1);

      const value =
        lookup(content.ui, `${key}${suffix}`) ??
        lookup(content.ui, `${key}Other`) ??
        lookup(content.ui, `${key}One`) ??
        lookup(content.ui, key);

      return interpolate(value, { count }) ?? key;
    },
    [content, language.locale, pluralRules],
  );

  const formatDate = useCallback(
    (value, options = { day: 'numeric', month: 'short', year: 'numeric' }) => {
      const date = value instanceof Date ? value : new Date(`${value}T00:00:00`);
      if (Number.isNaN(date.getTime())) return null;

      return new Intl.DateTimeFormat(language.locale, options).format(date);
    },
    [language.locale],
  );

  const value = useMemo(
    () => ({
      locale: language.code,
      language,
      dir: language.dir,
      isRtl: language.dir === 'rtl',
      ready,
      source: state.source,
      content,
      t,
      tp,
      formatDate,
      localizedPath,
      setLocale,
    }),
    [language, ready, state.source, content, t, tp, formatDate, localizedPath, setLocale],
  );

  if (!ready) return <LanguageBoot />;

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used within a LanguageProvider');
  return context;
}
