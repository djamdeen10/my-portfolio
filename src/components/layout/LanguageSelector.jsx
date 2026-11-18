import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { LANGUAGES } from '../../i18n/languages.js';
import { useI18n } from '../../i18n/LanguageProvider.jsx';
import { prefersReducedMotion } from '../../lib/transitions.js';
import { ChevronDown, Translate } from '../ui/Icons.jsx';

const EASE = [0.16, 1, 0.3, 1];

export function LanguageSelector() {
  const { language, setLocale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const [pendingLocale, setPendingLocale] = useState(null);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const others = LANGUAGES.filter((item) => item.code !== language.code);
  const currentLabel = language.native;

  const choose = (code) => {
    if (code === language.code) {
      setOpen(false);
      return;
    }

    if (prefersReducedMotion()) {
      setOpen(false);
      setLocale(code);
      return;
    }

    // Wait for the menu to finish closing before cross-fading the page: two
    // short, readable movements instead of one busy frame.
    setPendingLocale(code);
    setOpen(false);
  };

  const onExitComplete = () => {
    if (!pendingLocale) return;
    setLocale(pendingLocale);
    setPendingLocale(null);
  };

  const toggleMenu = () => {
    // Re-opening during the short exit animation cancels a queued switch.
    if (!open) setPendingLocale(null);
    setOpen(!open);
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={toggleMenu}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('language.current', { language: currentLabel })}
        title={t('language.current', { language: currentLabel })}
        className={[
          'glass-chip glass-interactive inline-flex h-8 cursor-pointer items-center gap-1 rounded-sm px-1.5 text-[11px] font-medium text-neutral-700 transition-[opacity,transform] duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40 dark:text-neutral-200 dark:focus-visible:ring-neutral-100/50',
          open ? 'pointer-events-none opacity-0' : 'opacity-100',
        ].join(' ')}
      >
        <Translate className="h-3.5 w-3.5 shrink-0" />
        <span className="whitespace-nowrap">{currentLabel}</span>
        <ChevronDown className="h-3 w-3 shrink-0 opacity-60" />
      </button>

      <AnimatePresence initial={false} onExitComplete={onExitComplete}>
        {open ? (
          <m.div
            key="language-menu"
            initial={{ opacity: 0, y: -4, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -3, scale: 0.985 }}
            transition={{ duration: 0.16, ease: EASE }}
            className="language-popover absolute right-0 top-0 z-50 w-48 origin-top-right overflow-hidden rounded-sm border border-neutral-200 bg-white shadow-xl dark:border-neutral-700 dark:bg-neutral-950"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t('language.close')}
              className="flex h-8 w-full cursor-pointer items-center gap-1.5 px-2 text-start text-[11px] font-semibold text-neutral-900 focus:outline-none dark:text-neutral-50"
            >
              <Translate className="h-4 w-4 shrink-0" />
              <span className="flex-1 whitespace-nowrap">{currentLabel}</span>
              <ChevronDown className="h-3 w-3 shrink-0 rotate-180 opacity-70" />
            </button>

            <ul
              role="listbox"
              aria-label={t('language.menu')}
              className="language-menu max-h-64 border-t border-neutral-200 py-1 dark:border-neutral-800"
            >
              {others.map((item, index) => (
                <m.li
                  key={item.code}
                  initial={{ opacity: 0, x: -4 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.16, ease: EASE, delay: 0.02 + index * 0.014 }}
                >
                  <button
                    type="button"
                    role="option"
                    aria-selected="false"
                    onClick={() => choose(item.code)}
                    className="flex w-full cursor-pointer items-center gap-2 px-2.5 py-1.5 text-start text-xs text-neutral-600 transition-colors hover:bg-neutral-100 focus:bg-neutral-100 focus:outline-none dark:text-neutral-300 dark:hover:bg-white/[0.06] dark:focus:bg-white/[0.06]"
                  >
                    <span dir={item.dir} lang={item.locale} className="flex-1 whitespace-nowrap">
                      {item.native}
                    </span>
                    <span className="shrink-0 font-mono text-[9px] uppercase tracking-[0.08em] text-neutral-500">
                      {item.code}
                    </span>
                  </button>
                </m.li>
              ))}
            </ul>
          </m.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
