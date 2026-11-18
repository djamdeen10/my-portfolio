import { useEffect, useMemo, useState } from 'react';
import { Moon, Sun } from './Icons.jsx';
import { useTheme } from '../ThemeProvider.jsx';
import { useI18n } from '../../i18n/LanguageProvider.jsx';

function useReducedMotionPreference() {
  const [reduced, setReduced] = useState(() =>
    typeof window === 'undefined'
      ? false
      : window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = () => setReduced(media.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  return reduced;
}

export function TimeCounter({ className, timeZone, title }) {
  const { language, t } = useI18n();
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  // One Intl formatter per locale/time zone instead of constructing a new one
  // on every clock tick.
  const formatter = useMemo(() => {
    const options = { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };

    try {
      return new Intl.DateTimeFormat(
        language.locale,
        timeZone ? { ...options, timeZone } : options,
      );
    } catch {
      return new Intl.DateTimeFormat(language.locale, options);
    }
  }, [language.locale, timeZone]);

  const formatted = formatter.format(time);

  return (
    <span
      className={className}
      title={title ?? (timeZone ? `${t('time.local')} · ${timeZone}` : t('time.local'))}
      suppressHydrationWarning
    >
      {formatted}
    </span>
  );
}

/**
 * Shimmer driven by CSS instead of a Framer Motion loop: one declaration,
 * no requestAnimationFrame tick and no React state while the page is idle.
 */
export function TextShimmer({ children, as: Tag = 'p', className, duration = 1.5, spread = 4 }) {
  const spreadPx = useMemo(
    () => (typeof children === 'string' ? children.length * spread : 0),
    [children, spread],
  );

  return (
    <Tag
      className={['text-shimmer relative inline-block', className].filter(Boolean).join(' ')}
      style={{
        '--shimmer-spread': `${spreadPx}px`,
        '--shimmer-duration': `${duration}s`,
      }}
    >
      {children}
    </Tag>
  );
}

export function Typewriter({
  text,
  speed = 50,
  initialDelay = 0,
  waitTime = 2000,
  deleteSpeed = 30,
  loop = true,
  className,
  showCursor = true,
  hideCursorOnType = false,
  cursorChar = '|',
  cursorClassName = 'ms-1',
}) {
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeIndex, setTypeIndex] = useState(0);
  const reducedMotion = useReducedMotionPreference();

  const phrases = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);
  const currentText = phrases[typeIndex];

  useEffect(() => {
    if (reducedMotion) return undefined;

    let timeout;

    const step = () => {
      if (isDeleting) {
        if (displayText === '') {
          setIsDeleting(false);
          if (typeIndex === phrases.length - 1 && !loop) return;
          setTypeIndex((index) => (index + 1) % phrases.length);
          setCharIndex(0);
          timeout = setTimeout(() => {}, waitTime);
        } else {
          timeout = setTimeout(() => setDisplayText((value) => value.slice(0, -1)), deleteSpeed);
        }
      } else if (charIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText((value) => value + currentText[charIndex]);
          setCharIndex((index) => index + 1);
        }, speed);
      } else if (phrases.length > 1) {
        timeout = setTimeout(() => setIsDeleting(true), waitTime);
      }
    };

    if (charIndex !== 0 || isDeleting || displayText !== '') {
      step();
    } else {
      timeout = setTimeout(step, initialDelay);
    }

    return () => clearTimeout(timeout);
  }, [
    charIndex,
    displayText,
    isDeleting,
    speed,
    deleteSpeed,
    waitTime,
    phrases,
    typeIndex,
    currentText,
    loop,
    initialDelay,
    reducedMotion,
  ]);

  const visibleText = reducedMotion ? phrases[0] : displayText;

  return (
    <div className={`inline whitespace-pre-wrap tracking-tight ${className ?? ''}`}>
      <span>{visibleText}</span>
      {showCursor && !reducedMotion && (
        <span
          className={`typewriter-cursor${cursorClassName}${hideCursorOnType && (charIndex < currentText.length || isDeleting) ? ' hidden' : ''}`}
          aria-hidden="true"
        >
          {cursorChar}
        </span>
      )}
    </div>
  );
}

export function ThemeToggle() {
  const { t } = useI18n();
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return <span aria-hidden="true" className="inline-block h-8 w-8" />;

  // Always toggle from the theme that is actually applied. Using the raw
  // preference here broke the first click when it was still "system".
  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      aria-label={isDark ? t('theme.light') : t('theme.dark')}
      title={isDark ? t('theme.light') : t('theme.dark')}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="glass-chip glass-interactive inline-flex h-8 w-8 items-center justify-center rounded-full text-foreground transition-transform duration-150 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40 dark:focus-visible:ring-neutral-100/50"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="sr-only">{isDark ? t('theme.light') : t('theme.dark')}</span>
    </button>
  );
}
