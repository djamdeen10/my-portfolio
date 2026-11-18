import { useI18n } from '../../i18n/LanguageProvider.jsx';
import { SlideUp } from '../../components/ui/Animations.jsx';
import { CoverArt } from '../../components/ui/CoverArt.jsx';
import { Clock } from '../../components/ui/Icons.jsx';

function dateParts(value, locale) {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return null;

  return {
    day: new Intl.DateTimeFormat(locale, { day: '2-digit' }).format(date),
    month: new Intl.DateTimeFormat(locale, { month: 'short' }).format(date).replace('.', ''),
    year: new Intl.DateTimeFormat(locale, { year: 'numeric' }).format(date),
  };
}

export default function LatestPost({ onNavigate }) {
  const { content, language, localizedPath, t } = useI18n();
  const { blogPosts } = content;

  const latest = blogPosts
    .filter((post) => post.section !== 'notes')
    .sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime())[0];
  if (!latest) return null;

  const rawHref = latest.href && latest.href !== '#' ? latest.href : `/blog/${latest.slug}`;
  const external = /^https?:/i.test(rawHref);
  const href = external ? rawHref : localizedPath(rawHref);
  const date = dateParts(latest.date, language.locale);

  const openPost = (event) => {
    if (external) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate?.(rawHref);
  };

  const goToBlog = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate?.('/blog');
  };

  const linkProps = external
    ? { href, target: '_blank', rel: 'noreferrer' }
    : { href, onClick: openPost };

  return (
    <SlideUp delay={0.2}>
      <section className="mt-8 section-lines p-4 lg:p-5">
        <div className="mb-4 flex flex-wrap items-start justify-between gap-x-3 gap-y-1">
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
              {t('latestPost.title')}
            </h3>
            <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
              {t('latestPost.subtitle')}
            </p>
          </div>
          <a
            href={localizedPath('/blog')}
            onClick={goToBlog}
            className="group/all inline-flex shrink-0 items-center gap-1.5 py-1 text-xs font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
          >
            {t('latestPost.all')}
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover/all:translate-x-0.5 rtl:group-hover/all:-translate-x-0.5"
            >
              →
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-4 border-t border-neutral-200 pt-4 xl:grid-cols-[88px_minmax(0,1fr)_320px] xl:items-center xl:gap-6 2xl:grid-cols-[96px_minmax(0,1fr)_360px] dark:border-neutral-800">
          {date ? (
            <div className="order-2 flex items-center justify-between gap-3 xl:order-none xl:block">
              <p className="flex items-baseline gap-2 xl:block">
                <span className="text-2xl font-semibold tracking-tight text-neutral-900 xl:text-4xl dark:text-neutral-50">
                  {date.day}
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-600 xl:mt-1 xl:block dark:text-neutral-400">
                  {date.month}{' '}
                  <span className="text-neutral-500">{date.year}</span>
                </span>
              </p>
              <span
                className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-600 xl:hidden dark:text-neutral-400"
                title={t('latestPost.readingTime')}
              >
                <Clock className="h-3 w-3" />
                {latest.readTime}
              </span>
            </div>
          ) : null}

          <div className="order-3 xl:order-none">
            <div className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-600 dark:text-neutral-400">
              <span>{latest.theme}</span>
              <span
                className="hidden text-neutral-400 xl:inline dark:text-neutral-600"
                aria-hidden="true"
              >
                ·
              </span>
              <span
                className="hidden items-center gap-1 xl:inline-flex"
                title={t('latestPost.readingTime')}
              >
                <Clock className="h-3 w-3" />
                {latest.readTime}
              </span>
            </div>

            <a
              {...linkProps}
              className="group mt-1.5 block focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40 dark:focus-visible:ring-neutral-100/50"
            >
              <h4 className="text-lg font-semibold tracking-tight text-neutral-900 underline-offset-4 group-hover:underline xl:text-2xl dark:text-neutral-50">
                {latest.title}
              </h4>
            </a>

            <p className="mt-2 max-w-[60ch] text-xs leading-relaxed text-neutral-600 lg:text-[13px] dark:text-neutral-300">
              {latest.excerpt}
            </p>

            <a
              {...linkProps}
              className="group/link mt-3 inline-flex items-center gap-1.5 py-1 text-xs font-semibold text-neutral-900 dark:text-neutral-100"
            >
              {t('latestPost.read')}
              <span
                aria-hidden="true"
                className="transition-transform duration-200 group-hover/link:translate-x-0.5 rtl:group-hover/link:-translate-x-0.5"
              >
                →
              </span>
            </a>
          </div>

          <a
            {...linkProps}
            aria-label={t('latestPost.readAria', { title: latest.title })}
            className="group/img relative order-1 block overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 xl:order-none dark:border-neutral-800 dark:bg-neutral-900"
            style={{ aspectRatio: latest.coverAspect ?? 16 / 9 }}
          >
            <CoverArt
              variant={latest.cover}
              alt={t('latestPost.preview', { title: latest.title })}
              className="absolute inset-0 h-full w-full transition-transform duration-500 ease-out group-hover/img:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10" />
          </a>
        </div>
      </section>
    </SlideUp>
  );
}
