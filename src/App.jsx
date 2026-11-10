import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ThemeProvider } from './components/ThemeProvider.jsx';
import { QuickNav } from './components/QuickNav.jsx';
import {
  Blog,
  Contact,
  Education,
  Hero,
  Interests,
  Intro,
  Projects,
  SiteNav,
  Skills,
} from './components/Sections.jsx';
import { blogPosts, education, interests, profile, projects, quote } from './data/content.js';
import { useAppRouter } from './lib/router.js';

const PAGE_EASE = [0.16, 1, 0.3, 1];

function HomeContent({ onNavigate }) {
  const goToProjects = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate('/projet');
  };

  return (
    <>
      <Hero onNavigate={onNavigate} />
      <Intro />
      <Skills />
      <Education education={education} />
      <Interests interests={interests} />
      <div className="mt-8 flex justify-center">
        <a
          href="/projet"
          onClick={goToProjects}
          className="inline-flex items-center gap-1 rounded-sm border border-neutral-200 px-3 py-1.5 text-sm text-neutral-700 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
        >
          Découvrir mes projets -&gt;
        </a>
      </div>
    </>
  );
}

function PageContent({ route, onNavigate }) {
  switch (route.id) {
    case 'projet':
      return <Projects projects={projects} standalone />;
    case 'contact':
      return <Contact standalone />;
    case 'blog':
      return <Blog posts={blogPosts} standalone />;
    default:
      return <HomeContent onNavigate={onNavigate} />;
  }
}

export default function App() {
  const { route, navigate } = useAppRouter();

  useEffect(() => {
    document.title =
      route.id === 'accueil'
        ? `${profile.name} — Backend Developer & AI-Powered Builder`
        : `${route.title} — ${profile.name}`;
  }, [route]);

  return (
    <ThemeProvider>
      <div className="min-h-dvh">
        <main className="min-h-dvh bg-grid pb-32 pt-6 dark:bg-neutral-950">
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
                    <PageContent route={route} onNavigate={navigate} />
                  </div>
                </article>

                <div className="mt-8 flex justify-center rounded-xl py-2 border border-neutral-200 bg-white shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
                  <div className="section-lines p-4 text-center">
                    <p className="text-sm font-semibold italic leading-relaxed text-violet-700 dark:text-violet-300">
                      {quote.text}
                    </p>
                    <p className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-600 dark:text-neutral-400">
                      {quote.author}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <QuickNav active={route.id} onNavigate={navigate} />
        </main>
      </div>
    </ThemeProvider>
  );
}
