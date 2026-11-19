import { lazy, Suspense, useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { AnimatePresence, m } from 'framer-motion';
import { ThemeProvider } from './components/ThemeProvider.jsx';
import { SiteNav } from './components/layout/SiteNav.jsx';
import { DesktopSidebar } from './components/layout/DesktopSidebar.jsx';
import { QuickNav } from './components/layout/QuickNav.jsx';
import { QuoteCard } from './components/layout/QuoteCard.jsx';
import { ContactCta } from './components/layout/ContactCta.jsx';
import HomePage from './pages/home/HomePage.jsx';

// Keep the landing page in the critical bundle. Every other route is split
// so a visitor reading the home page never downloads the project, blog,
// contact and 404 implementations before they need them.
const ProjectsPage = lazy(() => import('./pages/project/ProjectsPage.jsx'));
const ProjectDetailPage = lazy(() => import('./pages/project/ProjectDetailPage.jsx'));
const ContactPage = lazy(() => import('./pages/contact/ContactPage.jsx'));
const BlogPage = lazy(() => import('./pages/blog/BlogPage.jsx'));
const BlogPostPage = lazy(() => import('./pages/blog/BlogPostPage.jsx'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'));
import { useI18n } from './i18n/LanguageProvider.jsx';
import { useAppRouter } from './lib/router.js';
import { buildPageSeo } from './lib/seo.js';
import { applySeo } from './lib/seoDom.js';

const PAGE_EASE = [0.16, 1, 0.3, 1];

const PAGES = {
  accueil: HomePage,
  projet: ProjectsPage,
  'projet-detail': ProjectDetailPage,
  contact: ContactPage,
  blog: BlogPage,
  'blog-detail': BlogPostPage,
  'not-found': NotFoundPage,
};

export default function App() {
  const { route, navigate } = useAppRouter();
  const { content, locale, t } = useI18n();
  const firstPageRender = useRef(true);
  const { blogPosts, projects } = content;

  const Page = PAGES[route.id] ?? NotFoundPage;
  const project =
    route.id === 'projet-detail' && route.slug
      ? projects.find((item) => item.slug === route.slug)
      : null;
  const post =
    route.id === 'blog-detail' && route.slug
      ? blogPosts.find((item) => item.slug === route.slug)
      : null;
  const activeSection =
    route.id === 'not-found'
      ? null
      : route.id === 'projet-detail'
        ? 'projet'
        : route.id === 'blog-detail'
          ? 'blog'
          : route.id;

  const pageLabel =
    route.id === 'not-found'
      ? t('notFound.title')
      : project?.title ?? post?.title ?? t(route.titleKey);

  const seo = useMemo(
    () => buildPageSeo({ route, content, locale, project, post }),
    [route, content, locale, project, post],
  );

  useLayoutEffect(() => {
    applySeo(seo);
  }, [seo]);

  useEffect(() => {
    firstPageRender.current = false;
  }, []);

  return (
    <ThemeProvider>
      <div className="usw-liquid min-h-dvh">
        <DesktopSidebar active={activeSection} onNavigate={navigate} />

        <main className="app-shell-main bg-grid min-h-dvh pb-32 pt-6 dark:bg-neutral-950 lg:pb-16 lg:pl-[261px] lg:pr-[26px] lg:pt-12 xl:pl-[287px]">
          <SiteNav onNavigate={navigate} />

          <div className="mx-auto max-w-xl px-4 md:px-6 lg:max-w-none lg:px-0">
            <AnimatePresence mode="wait" initial={false}>
              <m.div
                key={`${route.id}:${route.slug ?? ''}`}
                initial={firstPageRender.current ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.2, ease: PAGE_EASE }}
              >
                <article
                  aria-label={pageLabel}
                  className="relative rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
                >
                  <div className="p-4 md:p-6 lg:p-7">
                    <Suspense fallback={<div className="min-h-[40vh]" aria-busy="true" />}>
                      <Page onNavigate={navigate} slug={route.slug} />
                    </Suspense>
                  </div>

                  {route.id !== 'contact' && route.id !== 'not-found' ? (
                    <ContactCta onNavigate={navigate} />
                  ) : null}
                </article>

                {route.id !== 'not-found' ? <QuoteCard /> : null}
              </m.div>
            </AnimatePresence>
          </div>

          <QuickNav active={activeSection} onNavigate={navigate} />
        </main>
      </div>
    </ThemeProvider>
  );
}
