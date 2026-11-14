import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { blogPosts } from '../../data/content.js';
import { FadeInText, SlideInLeft, SlideInRight, SlideUp } from '../../components/ui/Animations.jsx';
import { Search } from '../../components/ui/Icons.jsx';
import { badgeClass } from '../../components/ui/styles.js';
import BlogEmptyState from './BlogEmptyState.jsx';

const normalize = (value) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();

function PostCard({ post, direction = 'left' }) {
  const Reveal = direction === 'right' ? SlideInRight : SlideInLeft;

  return (
    <Reveal delay={0.1}>
      <article className="group overflow-hidden rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
        <a
          href={post.href ?? '#'}
          aria-label={`Lire ${post.title}`}
          className="relative block aspect-[16/9] overflow-hidden bg-neutral-100 dark:bg-neutral-900"
        >
          <img
            src={post.cover}
            alt={`Aperçu de ${post.title}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
          />
          <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10" />
        </a>

        <div className="p-4">
          <h3 className="text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
            {post.title}
          </h3>
          <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
            {post.readTime} de lecture
          </p>
          <a
            href={post.href ?? '#'}
            className="glass-primary glass-interactive mt-3 inline-flex h-8 items-center rounded-sm px-3 text-xs font-medium"
          >
            Lire l'article
          </a>
        </div>
      </article>
    </Reveal>
  );
}

function SectionLabel({ id, children }) {
  return (
    <h2
      id={id}
      className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400"
    >
      {children}
    </h2>
  );
}

export default function BlogPage() {
  const [query, setQuery] = useState('');
  const [theme, setTheme] = useState('Tous');
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
    [],
  );

  const themes = useMemo(
    () => ['Tous', ...new Set(sorted.map((post) => post.theme))],
    [sorted],
  );

  const visible = useMemo(() => {
    const needle = normalize(query.trim());
    return sorted.filter((post) => {
      const matchesTheme = theme === 'Tous' || post.theme === theme;
      const matchesQuery = !needle || normalize(post.title).includes(needle);
      return matchesTheme && matchesQuery;
    });
  }, [sorted, theme, query]);

  const [latest, ...others] = visible;
  const hasPosts = sorted.length > 0;

  return (
    <SlideUp delay={0.2}>
      <section className="section-lines p-4">
        <FadeInText delay={0.1}>
          <div className="flex items-start justify-between gap-3">
            <div>
              <h1 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">Blog.</h1>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                Notes de dev, coulisses et idées, écrites quand j'ai quelque chose à dire.
              </p>
            </div>
            <span className={badgeClass}>
              {blogPosts.length
                ? `${blogPosts.length} article${blogPosts.length > 1 ? 's' : ''}`
                : 'bientôt'}
            </span>
          </div>
        </FadeInText>

        {hasPosts ? (
          <>
            <FadeInText delay={0.1}>
              <div className="mt-4 flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-2.5 transition-colors focus-within:border-neutral-400 focus-within:ring-2 focus-within:ring-neutral-900/10 dark:border-neutral-800 dark:bg-neutral-900 dark:focus-within:border-neutral-600 dark:focus-within:ring-neutral-100/10">
                <Search className="h-4 w-4 shrink-0 text-neutral-400" />
                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Rechercher un article"
                  aria-label="Rechercher un article"
                  className="w-full bg-transparent text-sm text-neutral-900 outline-none placeholder:text-neutral-400 dark:text-neutral-100 dark:placeholder:text-neutral-500"
                />
              </div>
            </FadeInText>

            <FadeInText delay={0.1}>
              <div
                ref={barRef}
                className="relative mt-2 flex gap-1 overflow-x-auto rounded-full border border-neutral-200 bg-neutral-100/70 p-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden dark:border-neutral-800 dark:bg-neutral-900/70"
              >
                {pill.ready ? (
                  <motion.span
                    aria-hidden="true"
                    initial={false}
                    animate={{ x: pill.x, width: pill.width }}
                    transition={pillTransition}
                    className="pointer-events-none absolute bottom-1 left-0 top-1 rounded-full bg-white shadow-sm ring-1 ring-black/5 dark:bg-neutral-800 dark:ring-white/10"
                  />
                ) : null}

                {themes.map((name) => {
                  const active = name === theme;
                  return (
                    <button
                      key={name}
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
                          : 'text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100',
                      ].join(' ')}
                    >
                      {name}
                    </button>
                  );
                })}
              </div>
            </FadeInText>

            {visible.length > 0 ? (
              <div className="mt-5 space-y-5">
                <section aria-labelledby="blog-latest">
                  <SectionLabel id="blog-latest">Dernier article</SectionLabel>
                  <PostCard key={latest.slug} post={latest} direction="left" />
                </section>

                {others.length > 0 ? (
                  <section aria-labelledby="blog-others">
                    <SectionLabel id="blog-others">Les autres articles</SectionLabel>
                    <div className="space-y-3">
                      {others.map((post, index) => (
                        <PostCard
                          key={post.slug}
                          post={post}
                          direction={index % 2 === 0 ? 'right' : 'left'}
                        />
                      ))}
                    </div>
                  </section>
                ) : null}
              </div>
            ) : (
              <FadeInText delay={0.1}>
                <div className="mt-4 rounded-xl border border-dashed border-neutral-200 px-5 py-8 text-center dark:border-neutral-800">
                  <p className="text-sm font-medium text-neutral-900 dark:text-neutral-50">
                    Aucun article trouvé.
                  </p>
                  <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                    Essaie un autre titre ou change de thème.
                  </p>
                </div>
              </FadeInText>
            )}
          </>
        ) : (
          <BlogEmptyState />
        )}
      </section>
    </SlideUp>
  );
}
