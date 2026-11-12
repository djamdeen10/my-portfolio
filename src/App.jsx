import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './components/ThemeProvider.jsx';
import { SiteNav } from './components/layout/SiteNav.jsx';
import { QuickNav } from './components/layout/QuickNav.jsx';
import { QuoteCard } from './components/layout/QuoteCard.jsx';
import HomePage from './pages/home/HomePage.jsx';
import ProjectsPage from './pages/project/ProjectsPage.jsx';
import ContactPage from './pages/contact/ContactPage.jsx';
import BlogPage from './pages/blog/BlogPage.jsx';
import { profile } from './data/content.js';
import { useAppRouter } from './lib/router.js';

const PAGE_EASE = [0.16, 1, 0.3, 1];

const PAGES = {
  accueil: HomePage,
  projet: ProjectsPage,
  contact: ContactPage,
  blog: BlogPage,
};

export default function App() {
  const { route, navigate } = useAppRouter();
  const Page = PAGES[route.id] ?? HomePage;

  useEffect(() => {
    document.title =
      route.id === 'accueil'
        ? `${profile.name} — Backend Developer & AI-Powered Builder`
        : `${route.title} — ${profile.name}`;
  }, [route]);

  return (
    <ThemeProvider>
      <div className="usw-liquid min-h-dvh">
        <main className="bg-grid min-h-dvh pb-32 pt-6 dark:bg-neutral-950">
          <SiteNav onNavigate={navigate} />

          <div className="mx-auto max-w-xl px-4 md:px-6 lg:px-8">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={route.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: PAGE_EASE }}
              >
                <article
                  aria-label={route.title}
                  className="relative rounded-2xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950"
                >
                  <div className="p-4 md:p-6 lg:p-6">
                    <Page onNavigate={navigate} />
                  </div>
                </article>

                <QuoteCard />
              </motion.div>
            </AnimatePresence>
          </div>

          <QuickNav active={route.id} onNavigate={navigate} />
        </main>
      </div>
    </ThemeProvider>
  );
}
