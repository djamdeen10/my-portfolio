import { ROUTES } from '../../lib/router.js';
import { useI18n } from '../../i18n/LanguageProvider.jsx';
import { ThemeToggle } from '../ui/Effects.jsx';
import { House, LayoutGrid, Mail, NotebookPen } from '../ui/Icons.jsx';
import { LanguageSelector } from './LanguageSelector.jsx';
import { VisitorCountry } from './VisitorCountry.jsx';

const TAB_ICONS = {
  accueil: House,
  projet: LayoutGrid,
  contact: Mail,
  blog: NotebookPen,
};

/**
 * Desktop-only left panel: logo on top, navigation centred in the available
 * space, visitor country and theme switch at the bottom. Hidden below `lg`.
 */
export function DesktopSidebar({ active = 'accueil', onNavigate }) {
  const { content, localizedPath, t } = useI18n();
  const activeIndex = Math.max(0, ROUTES.findIndex((route) => route.id === active));

  const handleClick = (event, path) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate?.(path);
  };

  return (
    <aside className="desktop-sidebar fixed bottom-12 left-[26px] top-12 z-40 hidden w-[209px] flex-col rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950 lg:flex xl:w-[235px]">
      <div className="flex items-center justify-between gap-2 px-3 pb-1 pt-7 xl:px-4">
        <a
          href={localizedPath('/')}
          onClick={(event) => handleClick(event, '/')}
          className="min-w-0 truncate text-start text-[18px] font-semibold tracking-tight text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40 xl:text-[20px] dark:text-neutral-50 dark:focus-visible:ring-neutral-100/50"
        >
          {content.profile.wordmark}
        </a>
        <LanguageSelector />
      </div>

      <nav
        aria-label={t('sidebar.nav')}
        className="flex flex-1 flex-col justify-center px-3 py-4"
      >
        <div className="relative flex flex-col gap-1">
          {/* One pill slides between items with a composited transform; the
              nav items themselves stay plain links. */}
          <span
            aria-hidden="true"
            className="nav-pill-slide pointer-events-none absolute inset-x-0 top-0 h-11 rounded-xl bg-neutral-100 ring-1 ring-inset ring-black/[0.04] dark:bg-white/[0.07] dark:ring-white/10"
            style={{ transform: `translateY(${activeIndex * 48}px)` }}
          />

          {ROUTES.map((route) => {
            const Icon = TAB_ICONS[route.id];
            const isActive = active === route.id;

            return (
              <a
                key={route.id}
                href={localizedPath(route.path)}
                aria-current={isActive ? 'page' : undefined}
                onClick={(event) => handleClick(event, route.path)}
                className="group relative flex h-11 items-center gap-3 rounded-xl px-3 text-sm font-medium transition-[transform,background-color,color] duration-200 hover:bg-neutral-100/70 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40 dark:hover:bg-white/[0.04] dark:focus-visible:ring-neutral-100/50"
              >
                <Icon
                  className={[
                    'relative z-10 h-5 w-5 shrink-0 transition-colors',
                    isActive
                      ? 'text-neutral-950 dark:text-white'
                      : 'text-neutral-600 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-neutral-100',
                  ].join(' ')}
                />
                <span
                  className={[
                    'relative z-10 transition-colors',
                    isActive
                      ? 'font-semibold text-neutral-950 dark:text-white'
                      : 'text-neutral-600 group-hover:text-neutral-900 dark:text-neutral-300 dark:group-hover:text-neutral-50',
                  ].join(' ')}
                >
                  {t(route.labelKey)}
                </span>
              </a>
            );
          })}
        </div>
      </nav>

      <div className="flex items-center justify-between gap-2 px-5 pb-6 pt-4">
        <VisitorCountry />
        <ThemeToggle />
      </div>
    </aside>
  );
}
