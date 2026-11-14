import { motion } from 'framer-motion';
import { ROUTES } from '../../lib/router.js';
import { House, LayoutGrid, Mail, NotebookPen } from '../ui/Icons.jsx';

const TAB_ICONS = {
  accueil: House,
  projet: LayoutGrid,
  contact: Mail,
  blog: NotebookPen,
};

export function QuickNav({ active = 'accueil', onNavigate }) {
  const handleClick = (event, path) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate?.(path);
  };

  return (
    <motion.div
      initial={{ y: 90, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 380, damping: 30, delay: 0.25 }}
      className="pointer-events-none fixed inset-x-0 bottom-0 z-50 flex justify-center px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
    >
      <nav
        aria-label="Navigation principale"
        className="liquid-glass pointer-events-auto grid w-full max-w-sm grid-cols-4 gap-1 rounded-[26px] p-1.5"
      >
        {ROUTES.map((route) => {
          const Icon = TAB_ICONS[route.id];
          const isActive = active === route.id;

          return (
            <motion.a
              key={route.id}
              href={route.path}
              aria-label={route.label}
              aria-current={isActive ? 'page' : undefined}
              onClick={(event) => handleClick(event, route.path)}
              whileTap={{ scale: 0.92 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="group relative flex select-none flex-col items-center justify-center gap-1 rounded-[19px] py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40 dark:focus-visible:ring-neutral-100/50"
            >
              {isActive && (
                <motion.span
                  layoutId="bottom-nav-pill"
                  transition={{ type: 'spring', stiffness: 500, damping: 38 }}
                  className="tab-pill absolute inset-0 rounded-[19px]"
                />
              )}
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
                  {route.label}
                </span>
              </span>
            </motion.a>
          );
        })}
      </nav>
    </motion.div>
  );
}
