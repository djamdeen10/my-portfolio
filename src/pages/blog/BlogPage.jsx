import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { m, useAnimationControls, useReducedMotion } from 'framer-motion';
import { useI18n } from '../../i18n/LanguageProvider.jsx';
import { FadeInText, SlideInLeft, SlideInRight, SlideUp } from '../../components/ui/Animations.jsx';
import { CoverArt } from '../../components/ui/CoverArt.jsx';
import { Clock, Search } from '../../components/ui/Icons.jsx';
import { badgeClass } from '../../components/ui/styles.js';
import BlogEmptyState from './BlogEmptyState.jsx';

const normalize = (value) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f\u064b-\u065f\u0670]/g, '')
    .toLowerCase();

function readInitialQuery() {
  try {
    return new URLSearchParams(window.location.search).get('q') ?? '';
  } catch {
    return '';
  }
}

function PostCard({ post, direction = 'left', featured = false, onNavigate }) {
  const { t, formatDate, localizedPath } = useI18n();
  const Reveal = direction === 'right' ? SlideInRight : SlideInLeft;
  const publishedOn = formatDate(post.date);
  const rawHref = post.href && post.href !== '#' ? post.href : `/blog/${post.slug}`;
  const href = localizedPath(rawHref);

  const openPost = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate?.(rawHref);
  };

  return (
    <Reveal delay={0.1}>
      <article
        className={[
          'group flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950',
          featured ? 'lg:flex-row' : '',
        ].join(' ')}
      >
        <a
          href={href}
          onClick={openPost}
          aria-label={t('blog.readAria', { title: post.title })}
          className={[
            'relative block overflow-hidden bg-neutral-100 dark:bg-neutral-900',
            featured ? 'lg:w-[46%] lg:shrink-0' : '',
          ].join(' ')}
          style={{ aspectRatio: post.coverAspect ?? 16 / 9 }}
        >
          <CoverArt
            variant={post.cover}
            alt={t('blog.preview', { title: post.title })}
            className="absolute inset-0 h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10" />
        </a>

        <div className={['flex flex-1 flex-col p-4', featured ? 'lg:justify-center lg:p-8' : ''].join(' ')}>
          <h3
            className={[
              'text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-50',
              featured ? 'lg:text-2xl' : '',
            ].join(' ')}
          >
            {post.title}
          </h3>
          <div className="mt-1 flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-600 sm:justify-start dark:text-neutral-400">
            {publishedOn ? (
              <>
                <time dateTime={post.date}>{publishedOn}</time>
                <span className="hidden sm:inline" aria-hidden="true">
                  ·
                </span>
              </>
            ) : null}
            <span className="inline-flex items-center gap-1" title={t('blog.readingTime')}>
              <Clock className="h-3 w-3" />
              {post.readTime}
            </span>
          </div>
          <div className={['mt-auto pt-3', featured ? 'lg:mt-6 lg:pt-0' : ''].join(' ')}>
            <a
              href={href}
              onClick={openPost}
              className="glass-primary glass-interactive inline-flex h-8 w-full items-center justify-center rounded-sm px-3 text-xs font-medium"
            >
              {t('blog.read')}
            </a>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function SectionLabel({ id, children }) {
  return (
    <h2
      id={id}
      className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-600 dark:text-neutral-400"
    >
      {children}
    </h2>
  );
}

export default function BlogPage({ onNavigate }) {
  const { content, locale, t, tp } = useI18n();
  const { blogPosts } = content;

  const [query, setQuery] = useState(readInitialQuery);
  // `null` means "all themes"; translated theme names are content, not keys.
  const [theme, setTheme] = useState(null);
  const reduceMotion = useReducedMotion();

  const barRef = useRef(null);
  const tabRefs = useRef(new Map());
  const [pill, setPill] = useState({ x: 0, width: 0, ready: false });

  const pillTransition = reduceMotion
    ? { duration: 0 }
    : { type: 'spring', stiffness: 420, damping: 36, mass: 0.7 };

  // Measures the active tab in the bar's own (unzoomed) coordinate space, so
  // the sliding pill stays exact even with the global body zoom.
  const measureTab = useCallback((name) => {
    const bar = barRef.current;
    const tab = tabRefs.current.get(name);
    if (!bar || !tab) return null;

    const barRect = bar.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();
    const zoom = bar.offsetWidth ? barRect.width / bar.offsetWidth : 1;

    return {
      x: (tabRect.left - barRect.left) / zoom - bar.clientLeft + bar.scrollLeft,
      width: tabRect.width / zoom,
    };
  }, []);

  useLayoutEffect(() => {
    const next = measureTab(theme);
    if (next) setPill({ ...next, ready: true });
  }, [theme, measureTab]);

  useEffect(() => {
    const update = () => {
      const next = measureTab(theme);
      if (next) setPill({ ...next, ready: true });
    };

    window.addEventListener('resize', update);
    const observer =
      typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(update);
    if (observer && barRef.current) observer.observe(barRef.current);
    document.fonts?.ready.then(update).catch(() => {});

    return () => {
      window.removeEventListener('resize', update);
      observer?.disconnect();
    };
  }, [theme, measureTab]);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (query.trim()) url.searchParams.set('q', query);
    else url.searchParams.delete('q');

    const next = `${url.pathname}${url.search}${url.hash}`;
    if (next !== `${window.location.pathname}${window.location.search}${window.location.hash}`) {
      window.history.replaceState(window.history.state, '', next);
    }
  }, [query]);

  const selectTheme = (name) => {
    setTheme(name);

    const bar = barRef.current;
    const tab = tabRefs.current.get(name);
    if (!bar || !tab) return;

    const left = tab.offsetLeft;
    const right = left + tab.offsetWidth;
    if (left < bar.scrollLeft || right > bar.scrollLeft + bar.clientWidth) {
      bar.scrollTo({ left: Math.max(0, left - 8), behavior: reduceMotion ? 'auto' : 'smooth' });
    }
  };

  const sorted = useMemo(
    () =>
      [...blogPosts].sort(
        (a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime(),
      ),
    [blogPosts],
  );

  const themes = useMemo(() => [...new Set(sorted.map((post) => post.theme))], [sorted]);

  // The translated theme names change with the language: start again on "all"
  // rather than keeping a filter that no longer exists. A layout effect keeps
  // this reset inside the language view-transition snapshot.
  useLayoutEffect(() => {
    setQuery('');
    setTheme(null);
  }, [locale]);

  useEffect(() => {
    if (theme !== null && !themes.includes(theme)) setTheme(null);
  }, [theme, themes]);

  const visible = useMemo(() => {
    const needle = normalize(query.trim());
    return sorted.filter((post) => {
      const matchesTheme = theme === null || post.theme === theme;
      const matchesQuery = !needle || normalize(post.title).includes(needle);
      return matchesTheme && matchesQuery;
    });
  }, [sorted, theme, query]);

  const [latest, ...others] = visible;
  const hasPosts = sorted.length > 0;

  // A short, composited fade masks the result swap without remounting cards
  // (so scroll reveals do not replay on every keystroke).
  const resultsControls = useAnimationControls();
  const resultsKey = visible.map((post) => post.slug).join('|');
  const firstResults = useRef(true);
  const lastResultsKey = useRef(resultsKey);

  useEffect(() => {
    if (firstResults.current) {
      firstResults.current = false;
      lastResultsKey.current = resultsKey;
      return;
    }
    if (lastResultsKey.current === resultsKey) return;
    lastResultsKey.current = resultsKey;

    if (reduceMotion) return;
    resultsControls.start({
      opacity: [0.55, 1],
      transition: { duration: 0.22, ease: [0.16, 1, 0.3, 1] },
    });
  }, [resultsKey, reduceMotion, resultsControls]);

  return (
    <SlideUp delay={0.2}>
      <section className="section-lines p-4">
        <FadeInText delay={0.1}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <h1 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                {t('blog.title')}
              </h1>
              <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                {t('blog.subtitle')}
              </p>
            </div>
            <span className={badgeClass}>
              {blogPosts.length ? tp('blog.count', blogPosts.length) : t('blog.soon')}
            </span>
          </div>
        </FadeInText>

        {hasPosts ? (
          <>
            <div className="xl:mt-4 xl:flex xl:items-center xl:gap-3">
              <FadeInText delay={0.1} className="xl:order-2 xl:ms-auto xl:w-72 xl:shrink-0 2xl:w-80">
                <div className="mt-4 flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2.5 transition-[border-color,box-shadow] duration-200 focus-within:border-neutral-400 focus-within:ring-2 focus-within:ring-neutral-900/10 xl:mt-0 dark:border-neutral-800 dark:bg-neutral-900 dark:focus-within:border-neutral-600 dark:focus-within:ring-neutral-100/10">
                  <Search className="h-4 w-4 shrink-0 text-neutral-500" />
                  <input
                    type="text"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder={t('blog.searchPlaceholder')}
                    aria-label={t('blog.search')}
                    className="w-full bg-transparent text-sm text-neutral-900 outline-none placeholder:text-neutral-500 dark:text-neutral-100 dark:placeholder:text-neutral-500"
                  />
                </div>
              </FadeInText>

              <FadeInText delay={0.1} className="xl:order-1 xl:min-w-0">
                <div
                  ref={barRef}
                  className="relative mt-2 flex gap-1 overflow-x-auto rounded-full border border-neutral-200 bg-neutral-100/70 p-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden xl:mt-0 dark:border-neutral-800 dark:bg-neutral-900/70"
                >
                  {pill.ready ? (
                    <m.span
                      aria-hidden="true"
                      initial={false}
                      animate={{ x: pill.x, width: pill.width }}
                      transition={pillTransition}
                      className="pointer-events-none absolute bottom-1 left-0 top-1 rounded-full bg-white shadow-sm ring-1 ring-black/5 dark:bg-neutral-800 dark:ring-white/10"
                    />
                  ) : null}

                  {[null, ...themes].map((name) => {
                    const active = name === theme;
                    const label = name ?? t('blog.all');

                    return (
                      <button
                        key={name ?? '__all__'}
                        ref={(node) => {
                          if (node) tabRefs.current.set(name, node);
                          else tabRefs.current.delete(name);
                        }}
                        type="button"
                        onClick={() => selectTheme(name)}
                        aria-pressed={active}
                        className={[
                          'relative z-10 inline-flex shrink-0 items-center whitespace-nowrap rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/30 dark:focus-visible:ring-neutral-100/40',
                          active
                            ? 'text-neutral-900 dark:text-neutral-50'
                            : 'text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100',
                        ].join(' ')}
                      >
                        {label}
                      </button>
                    );
                  })}
                </div>
              </FadeInText>
            </div>

            <m.div animate={resultsControls} initial={{ opacity: 1 }}>
              {visible.length > 0 ? (
                <div className="mt-5 space-y-5">
                  <section aria-labelledby="blog-latest">
                    <SectionLabel id="blog-latest">{t('blog.latest')}</SectionLabel>
                    <PostCard
                      key={latest.slug}
                      post={latest}
                      direction="left"
                      featured
                      onNavigate={onNavigate}
                    />
                  </section>

                  {others.length > 0 ? (
                    <section aria-labelledby="blog-others">
                      <SectionLabel id="blog-others">{t('blog.others')}</SectionLabel>
                      <div className="grid gap-3 lg:grid-cols-2">
                        {others.map((post, index) => (
                          <PostCard
                            key={post.slug}
                            post={post}
                            direction={index % 2 === 0 ? 'right' : 'left'}
                            onNavigate={onNavigate}
                          />
                        ))}
                      </div>
                    </section>
                  ) : null}
                </div>
              ) : (
                <div className="mt-4 rounded-xl border border-dashed border-neutral-200 px-5 py-8 text-center dark:border-neutral-800">
                  <p className="text-sm font-medium text-neutral-900 dark:text-neutral-50">
                    {t('blog.noResults')}
                  </p>
                  <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                    {t('blog.noResultsHint')}
                  </p>
                </div>
              )}
            </m.div>
          </>
        ) : (
          <BlogEmptyState />
        )}
      </section>
    </SlideUp>
  );
}
