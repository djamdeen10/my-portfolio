import { motion } from 'framer-motion';
import { ROUTES } from '../../lib/router.js';
import { ThemeToggle } from '../ui/Effects.jsx';
import { Cat, Code, Football, House, LayoutGrid, Mail, NotebookPen, Sparkles } from '../ui/Icons.jsx';
import { VisitorCountry } from './VisitorCountry.jsx';

const TAB_ICONS = {
  accueil: House,
  projet: LayoutGrid,
  contact: Mail,
  blog: NotebookPen,
};

const BIO = [
  { icon: Code, label: 'Backend Dev' },
  { icon: Sparkles, label: 'AI Powered Builder' },
  { icon: Football, label: 'FC Barcelona Fan' },
  { icon: Cat, label: 'Cats Lover' },
];

/**
 * Desktop-only left panel: logo and short bio on top, navigation in the
 * middle, visitor country and theme switch at the bottom. Hidden below `lg`.
 */
export function DesktopSidebar({ active = 'accueil', onNavigate }) {
  const handleClick = (event, path) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate?.(path);
  };

  return (
    <aside className="fixed bottom-12 left-[26px] top-12 z-40 hidden w-[209px] flex-col rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950 lg:flex xl:w-[235px]">
      <a
        href="/"
        onClick={(event) => handleClick(event, '/')}
        className="px-5 pb-1 pt-7 text-center text-[22px] font-semibold tracking-tight text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40 dark:text-neutral-50 dark:focus-visible:ring-neutral-100/50"
      >
        djamdeen
      </a>

      {/* The bio sits lower in its own framed block. Its extra height is pulled
          back with a negative bottom margin so the centred nav does not move. */}
      <div className="mx-4 mt-4 -mb-3 rounded-xl border border-neutral-200/80 bg-neutral-50/70 px-3.5 py-2.5 dark:border-white/[0.07] dark:bg-white/[0.03]">
        <ul className="flex flex-col gap-1 text-[12px] leading-[18px] text-neutral-500 dark:text-neutral-400">
          {BIO.map(({ icon: Icon, label }) => (
            <li key={label} className="flex items-center gap-2">
              <Icon className="h-3.5 w-3.5 shrink-0 text-neutral-400 dark:text-neutral-500" />
              <span className="whitespace-nowrap">{label}</span>
            </li>
          ))}
        </ul>
      </div>

      <nav aria-label="Navigation principale" className="flex flex-1 flex-col justify-center gap-1 px-3 py-4">
        {ROUTES.map((route) => {
          const Icon = TAB_ICONS[route.id];
          const isActive = active === route.id;

          return (
            <motion.a
              key={route.id}
              href={route.path}
              aria-current={isActive ? 'page' : undefined}
              onClick={(event) => handleClick(event, route.path)}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="group relative flex h-11 items-center gap-3 rounded-xl px-3 text-sm font-medium transition-colors hover:bg-neutral-100/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40 dark:hover:bg-white/[0.04] dark:focus-visible:ring-neutral-100/50"
            >
              {isActive && (
                <motion.span
                  layoutId="desktop-nav-pill"
                  transition={{ type: 'spring', stiffness: 500, damping: 38 }}
                  className="absolute inset-0 rounded-xl bg-neutral-100 ring-1 ring-inset ring-black/[0.04] dark:bg-white/[0.07] dark:ring-white/10"
                />
              )}
              <Icon
                className={[
                  'relative z-10 h-5 w-5 shrink-0 transition-colors',
                  isActive
                    ? 'text-neutral-950 dark:text-white'
                    : 'text-neutral-500 group-hover:text-neutral-900 dark:text-neutral-400 dark:group-hover:text-neutral-100',
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
                {route.label}
              </span>
            </motion.a>
          );
        })}
      </nav>

      <div className="flex items-center justify-between gap-2 px-5 pb-6 pt-4">
        <VisitorCountry />
        <ThemeToggle />
      </div>
    </aside>
  );
}
