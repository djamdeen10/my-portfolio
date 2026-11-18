import { m } from 'framer-motion';
import { ROUTES } from '../../lib/router.js';
import { useI18n } from '../../i18n/LanguageProvider.jsx';
import { House, LayoutGrid, Mail, NotebookPen } from '../ui/Icons.jsx';

const TAB_ICONS = {
  accueil: House,
  projet: LayoutGrid,
  contact: Mail,
  blog: NotebookPen,
};

export function QuickNav({ active = 'accueil', onNavigate }) {
  const { dir, localizedPath, t } = useI18n();
  const activeIndex = Math.max(0, ROUTES.findIndex((route) => route.id === active));
  const offset = dir === 'rtl' ? -activeIndex : activeIndex;

  const handleClick = (event, path) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate?.(path);
  };

  return (
    <m.div
      initial={{ y: 70, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 380, damping: 32, delay: 0.2 }}
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] lg:hidden"
    >
      <nav
        aria-label={t('sidebar.nav')}
        className="liquid-glass pointer-events-auto relative grid w-full max-w-sm grid-cols-4 gap-1 rounded-[26px] p-1.5"
      >
        {/* The active pill is measured once and slides with a composited
            transform, so changing tab never triggers a layout animation. */}
        <span
          aria-hidden="true"
          className="tab-pill quicknav-pill nav-pill-slide absolute rounded-[19px]"
          style={{ transform: `translateX(calc(${offset} * (100% + 4px)))` }}
        />

        {ROUTES.map((route) => {
          const Icon = TAB_ICONS[route.id];
          const isActive = active === route.id;
          const label = t(route.labelKey);

          return (
            <a
              key={route.id}
              href={localizedPath(route.path)}
              aria-label={label}
              aria-current={isActive ? 'page' : undefined}
              onClick={(event) => handleClick(event, route.path)}
              className="group relative flex select-none flex-col items-center justify-center gap-1 rounded-[19px] py-1.5 transition-transform duration-150 active:scale-[0.94] focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40 dark:focus-visible:ring-neutral-100/50"
            >
              <span className="relative z-10 flex flex-col items-center gap-0.5">
                <Icon
                  className={[
                    'h-[19px] w-[19px] transition-transform duration-200',
                    isActive
                      ? 'scale-105 text-neutral-950 dark:text-white'
                      : 'text-neutral-600 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-neutral-100',
                  ].join(' ')}
                />
                <span
                  className={[
                    'text-[10px] font-medium leading-none tracking-tight transition-colors',
                    isActive
                      ? 'text-neutral-950 dark:text-white'
                      : 'text-neutral-600 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-neutral-100',
                  ].join(' ')}
                >
                  {label}
                </span>
              </span>
            </a>
          );
        })}
      </nav>
    </m.div>
  );
}
