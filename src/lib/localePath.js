import { LANGUAGE_BY_CODE } from '../i18n/languages.js';

/**
 * Locale paths
 * ------------
 * English lives at the root (`/`, `/blog`). Every other language gets a
 * stable, crawlable prefix (`/fr`, `/fr/blog`, `/ar/projet/agentmob`).
 *
 * Keeping the locale in the path (instead of `?lang=`) gives search engines
 * one canonical URL per language, real hreflang targets, and static HTML
 * shells that can be generated at build time.
 */
const LOCALE_CODES = new Set(LANGUAGE_BY_CODE.keys());

export function splitLocalePath(pathname = '/') {
  const clean = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const segments = clean.split('/').filter(Boolean);
  const first = segments[0];

  if (first && LOCALE_CODES.has(first)) {
    const rest = segments.slice(1);
    return {
      locale: first,
      pathname: rest.length ? `/${rest.join('/')}` : '/',
    };
  }

  const normalized = clean.length > 1 ? clean.replace(/\/+$/, '') : '/';
  return { locale: null, pathname: normalized || '/' };
}

export function withLocalePath(pathname = '/', locale = 'en') {
  const clean = pathname.startsWith('/') ? pathname : `/${pathname}`;
  const path = clean === '/' ? '' : clean.replace(/\/+$/, '') || '';

  if (!locale || locale === 'en') return path || '/';
  return `/${locale}${path}`;
}

export function localeFromPath(pathname) {
  return splitLocalePath(pathname).locale;
}
