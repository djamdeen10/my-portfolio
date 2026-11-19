import { useI18n } from '../../i18n/LanguageProvider.jsx';
import { ArrowRight, LayoutGrid, NotebookPen } from './Icons.jsx';

const backButtonClass =
  'glass-chip glass-interactive inline-flex h-9 items-center gap-1.5 rounded-sm px-3 text-xs font-medium text-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40 dark:text-neutral-200 dark:focus-visible:ring-neutral-100/50';

const contactButtonClass =
  'glass-primary glass-interactive inline-flex h-9 items-center gap-1.5 rounded-sm px-3 text-xs font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40 dark:focus-visible:ring-neutral-100/50';

/**
 * Footer navigation for the project and blog detail pages: one prominent
 * related-content card, then compact back and contact buttons.
 */
export function PageLinks({ related, relatedPath, backPath, backLabel, onNavigate }) {
  const { dir, localizedPath, t } = useI18n();
  const RelatedIcon = related?.kind === 'article' ? NotebookPen : LayoutGrid;
  const arrowClass = dir === 'rtl' ? 'h-4 w-4 rotate-180' : 'h-4 w-4';
  const backArrowClass = dir === 'rtl' ? 'h-3.5 w-3.5' : 'h-3.5 w-3.5 rotate-180';
  const arrowShiftClass = dir === 'rtl' ? 'group-hover:-translate-x-0.5' : 'group-hover:translate-x-0.5';
  const backText = backLabel.replace(/^\s*[←→]\s*/, '');

  const handleClick = (event, path) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate?.(path);
  };

  return (
    <nav
      aria-label={t('sidebar.nav')}
      className="mt-8 max-w-[72ch] border-t border-neutral-200 pt-5 dark:border-neutral-800"
    >
      {related ? (
        <a
          href={localizedPath(relatedPath)}
          onClick={(event) => handleClick(event, relatedPath)}
          className="group flex items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50/70 p-3.5 transition-[background-color,border-color,box-shadow] duration-200 hover:border-neutral-300 hover:bg-white hover:shadow-sm dark:border-neutral-800 dark:bg-neutral-900/60 dark:hover:border-neutral-700 dark:hover:bg-neutral-900"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-neutral-200 bg-white text-neutral-600 shadow-sm dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-300">
            <RelatedIcon className="h-4 w-4" />
          </span>

          <span className="min-w-0 flex-1">
            <span className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
              {related.eyebrow}
            </span>
            <span className="mt-0.5 block truncate text-sm font-semibold text-neutral-900 dark:text-neutral-50">
              {related.title}
            </span>
          </span>

          <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border border-neutral-200 bg-white text-neutral-500 transition-[transform,color] duration-200 ${arrowShiftClass} group-hover:text-neutral-900 dark:border-neutral-700 dark:bg-neutral-950 dark:text-neutral-400 dark:group-hover:text-neutral-100`}>
            <ArrowRight className={arrowClass} />
          </span>
        </a>
      ) : null}

      <div className="mt-3 flex flex-wrap items-center gap-2">
        <a
          href={localizedPath(backPath)}
          onClick={(event) => handleClick(event, backPath)}
          className={backButtonClass}
        >
          <ArrowRight className={backArrowClass} />
          {backText}
        </a>
        <a
          href={localizedPath('/contact')}
          onClick={(event) => handleClick(event, '/contact')}
          className={contactButtonClass}
        >
          {t('nav.contact')}
          <ArrowRight className={arrowClass} />
        </a>
      </div>
    </nav>
  );
}
