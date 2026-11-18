import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { runStateTransition } from '../lib/transitions.js';

const ThemeContext = createContext(null);
const STORAGE_KEY = 'app-theme';

function getSystemTheme() {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function readStoredTheme() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system';
  } catch {
    return 'system';
  }
}

function applyTheme(resolved) {
  const root = document.documentElement;

  // Les couleurs sont animées (`transition-colors`) pour les survols. Au
  // changement de thème, le fond bascule instantanément : sans ce verrou, les
  // textes passent par un état clair sur fond clair (ou l'inverse) pendant
  // ~150 ms. On coupe les transitions le temps d'appliquer la nouvelle palette.
  if (applyTheme.ready) {
    root.classList.add('theme-switching');
    window.clearTimeout(applyTheme.timer);
    applyTheme.timer = window.setTimeout(() => {
      root.classList.remove('theme-switching');
    }, 120);
  }
  applyTheme.ready = true;

  root.classList.remove('light', 'dark');
  root.classList.add(resolved);
  root.style.colorScheme = resolved;

  // Keep the browser chrome (mobile address bar) in the same palette.
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', resolved === 'dark' ? '#0a0a0a' : '#fafafa');
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(readStoredTheme);
  const [systemTheme, setSystemTheme] = useState(getSystemTheme);
  const themeRef = useRef(theme);

  const resolvedTheme = theme === 'system' ? systemTheme : theme;

  useEffect(() => {
    themeRef.current = theme;
  }, [theme]);

  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');
    const onChange = () => {
      const next = getSystemTheme();
      // The OS switched while the user follows the system: animate that state
      // change instead of snapping the whole page.
      if (themeRef.current === 'system') {
        runStateTransition(() => {
          applyTheme(next);
          setSystemTheme(next);
        });
      } else {
        setSystemTheme(next);
      }
    };
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    applyTheme(resolvedTheme);
  }, [resolvedTheme]);

  const setThemeValue = useCallback((next) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }

    const resolved = next === 'system' ? getSystemTheme() : next;

    // Apply the class inside the snapshot so the transition cross-fades the
    // real new palette, then update React state in the same commit.
    runStateTransition(() => {
      applyTheme(resolved);
      setTheme(next);
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme: setThemeValue, resolvedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error('useTheme must be used within a ThemeProvider');
  return context;
}
