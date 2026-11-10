import { motion } from 'framer-motion';
import { profile } from '../data/content.js';
import { skillIcons } from '../data/skillIcons.js';
import { FadeInText, SlideInLeft, SlideInRight, SlideUp } from './Animations.jsx';
import { ThemeToggle, TimeCounter, TextShimmer, Typewriter } from './Effects.jsx';
import { Github, Mail, NotebookPen, SkillIcon, Twitter } from './Icons.jsx';
import {
  badgeClass,
  buttonBase,
  cardActionClass,
  cardClass,
  contactButtonClass,
  iconButtonClass,
  primaryButtonClass,
  socialButtonClass,
  tagClass,
} from './styles.js';

export function SiteNav({ onNavigate }) {
  const goHome = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate?.('/');
  };

  return (
    <FadeInText>
      <nav className="mx-auto mb-4 flex w-full max-w-xl items-center justify-between px-4 text-xs text-neutral-600 dark:text-neutral-300 md:px-6 lg:px-8">
        <a
          href="/"
          onClick={goHome}
          className="font-semibold text-neutral-900 dark:text-neutral-50"
        >
          {profile.handle}.
        </a>
        <ThemeToggle />
      </nav>
    </FadeInText>
  );
}

export function Hero({ onNavigate }) {
  const goToProjects = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate?.('/projet');
  };

  return (
    <SlideUp>
      <header id="accueil" className="space-y-2 section-lines p-4 scroll-mt-4">
        <FadeInText delay={0.1}>
          <div className="flex items-center justify-between">
            <TextShimmer as="p" className="text-xs" duration={2.2} spread={1.2}>
              bonjour, je suis
            </TextShimmer>
            <TimeCounter className="text-xs text-neutral-500 dark:text-neutral-400 font-mono" />
          </div>
        </FadeInText>
        <SlideInLeft delay={0.2}>
          <div className="flex items-center gap-3">
            <div className="h-16 w-16 ring-2 ring-neutral-200 dark:ring-neutral-900 rounded-full overflow-hidden">
              <img
                src="/avatar.jpg"
                alt={profile.avatarAlt}
                className="h-full w-full object-cover scale-115 -translate-x-0.5"
              />
            </div>
            <h1 className="text-2xl md:text-3xl font-medium tracking-tight text-neutral-900 dark:text-neutral-50">
              {profile.name}
            </h1>
          </div>
        </SlideInLeft>
        <SlideUp delay={0.3}>
          <div className="flex flex-wrap items-center mt-3 gap-2 sm:gap-4 text-xs text-neutral-600 dark:text-neutral-300">
            <span>{profile.role}</span>
            <span className="hidden sm:inline">||</span>
            <span className="max-w-[38ch]">
              <Typewriter
                text={profile.roles}
                speed={90}
                waitTime={2000}
                deleteSpeed={80}
                className="text-neutral-600 dark:text-neutral-300"
                cursorChar="|"
                showCursor
              />{' '}
              {profile.location}
            </span>
          </div>
        </SlideUp>
        <SlideInRight delay={0.4}>
          <div className="mt-5 flex flex-wrap items-center gap-2 sm:gap-4">
            <a
              href="/projet"
              onClick={goToProjects}
              aria-label="Voir mes projets"
              className={`${buttonBase} ${primaryButtonClass}`}
            >
              Projets
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Envoyer un email"
              className={`${buttonBase} ${iconButtonClass}`}
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={profile.links.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Ouvrir X"
              className={`${buttonBase} ${iconButtonClass}`}
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Ouvrir GitHub"
              className={`${buttonBase} ${iconButtonClass}`}
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </SlideInRight>
      </header>
    </SlideUp>
  );
}

export function Intro() {
  return (
    <FadeInText delay={0.5}>
      <section className="mt-4 m-2 justify-center items-center text-[13px] leading-6 text-neutral-600 dark:text-neutral-300">
        <p>
          Dev backend, adepte des nuits calmes, des grosses idées et du code qui marche du premier
          coup.{' '}
          <span className="rounded bg-yellow-200 px-1.5 py-0.5 text-[12px] font-medium text-neutral-900">
            J'aime les outils utiles et cools — parfois même jolis — et je laisse l'IA faire le gros
            du travail.
          </span>{' '}
          Je construis des trucs qui réfléchissent et je garde le process aussi chill que possible.
        </p>
      </section>
    </FadeInText>
  );
}

export function Projects({ projects, standalone = false }) {
  return (
    <SlideUp delay={0.2}>
      <section
        id="projects"
        className={`${standalone ? '' : 'mt-8 '}section-lines p-4 scroll-mt-4`}
      >
        <FadeInText delay={0.1}>
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 mb-4">Projets.</h3>
        </FadeInText>
        <div className="space-y-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              direction={index === 1 ? 'right' : 'left'}
              delay={index === 2 ? 0.2 : 0.1}
            />
          ))}
        </div>
        <FadeInText delay={0.2}>
          <div className="mt-3 flex justify-center">
            <a
              href={profile.links.repos}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-sm border border-neutral-200 px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
            >
              Voir tous les repos {'->'}
            </a>
          </div>
        </FadeInText>
      </section>
    </SlideUp>
  );
}

function ProjectCard({ project, direction, delay }) {
  const Reveal = direction === 'right' ? SlideInRight : SlideInLeft;

  return (
    <Reveal delay={delay}>
      <article className={cardClass}>
        <header className="flex flex-wrap items-center gap-2">
          <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">{project.title}</h4>
          {project.status ? <span className={badgeClass}>{project.status}</span> : null}
          <div className="ml-auto flex gap-2">
            {project.demo ? (
              <a href={project.demo} target="_blank" rel="noreferrer" className={cardActionClass}>
                aperçu en ligne -&gt;
              </a>
            ) : null}
            {project.github ? (
              <a href={project.github} target="_blank" rel="noreferrer" className={cardActionClass}>
                {project.linkLabel ?? 'github'} -&gt;
              </a>
            ) : null}
          </div>
        </header>
        <ul className="mt-2 list-disc space-y-1 pl-5 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
          {project.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className={tagClass}>
              {tag}
            </span>
          ))}
        </div>
      </article>
    </Reveal>
  );
}

export function Skills() {
  return (
    <SlideUp delay={0.3}>
      <section className="mt-5 section-lines p-4">
        <div>
          <div className="mb-2 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-slate-900 dark:text-slate-100">Stack</h3>
            <div className="pointer-events-none hidden text-[10px] text-slate-500 dark:text-slate-400 sm:block">
              survolez les tags
            </div>
          </div>
          <div className="relative flex flex-wrap gap-2">
            {skillIcons.map(({ label, paths }) => (
              <motion.div
                key={label}
                className="relative select-none inline-flex items-center gap-1.5 rounded-sm border px-1 py-0.25 text-xs font-medium bg-white text-neutral-600 border-neutral-200 dark:bg-neutral-950 dark:text-neutral-300 dark:border-neutral-800"
                whileHover={{ scale: 1.15 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                aria-label={label}
              >
                <div className="h-3 w-3 flex items-center justify-center" aria-hidden="true">
                  <SkillIcon paths={paths} className="h-3 w-3" />
                </div>
                <span className="leading-none">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </SlideUp>
  );
}

export function Education({ education }) {
  return (
    <SlideUp delay={0.3}>
      <section className="mt-8 section-lines p-4">
        <FadeInText delay={0.1}>
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 mb-4">Formation.</h3>
        </FadeInText>
        <ul className="space-y-2">
          <SlideInLeft delay={0.1}>
            <TimelineItem item={education[0]} />
          </SlideInLeft>
          <SlideInRight delay={0.1}>
            <TimelineItem item={education[1]} />
          </SlideInRight>
        </ul>
      </section>
    </SlideUp>
  );
}

export function Interests({ interests }) {
  return (
    <SlideUp delay={0.3}>
      <section id="interests" className="mt-8 section-lines p-4">
        <FadeInText delay={0.1}>
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 mb-4">
            Centres d'interet &amp; Soft Skills.
          </h3>
        </FadeInText>
        <ul className="space-y-2">
          {interests.map((item, index) => {
            const Reveal = index % 2 === 0 ? SlideInLeft : SlideInRight;
            return (
              <Reveal key={item.title} delay={0.1}>
                <TimelineItem item={{ title: item.title, period: item.badge, description: item.description }} />
              </Reveal>
            );
          })}
        </ul>
      </section>
    </SlideUp>
  );
}

function TimelineItem({ item }) {
  return (
    <li>
      <article className={cardClass}>
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 flex-1 min-w-0">
            {item.title}
          </h4>
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className={badgeClass}>{item.period}</span>
          </div>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
          {item.description}
        </p>
      </article>
    </li>
  );
}

export function Contact({ standalone = false }) {
  return (
    <SlideUp delay={0.3}>
      <section
        id="contact"
        className={`${standalone ? '' : 'mt-8 '}text-center section-lines p-6 scroll-mt-4`}
      >
        <FadeInText delay={0.1}>
          <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
            Travaillons ensemble.
          </h2>
        </FadeInText>
        <FadeInText delay={0.1}>
          <p className="mx-auto mt-2 max-w-xl text-xs text-neutral-500 dark:text-neutral-400">
            Une idée, un projet ambitieux ou juste envie d'échanger ? Je suis toujours partant pour
            les conversations qui finissent en prototype.
          </p>
        </FadeInText>
        <SlideInLeft delay={0.1}>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <a
              href={`mailto:${profile.email}`}
              aria-label="Me contacter par email"
              className={`${buttonBase} ${contactButtonClass}`}
            >
              <span className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>Me contacter</span>
              </span>
            </a>
          </div>
        </SlideInLeft>
        <SlideInRight delay={0.1}>
          <div className="mt-4 flex items-center justify-center gap-2 sm:gap-4 text-neutral-600 dark:text-neutral-300">
            <a
              href={profile.links.twitter}
              target="_blank"
              rel="noreferrer"
              aria-label="Ouvrir X"
              className={socialButtonClass}
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className={socialButtonClass}
            >
              <Github className="h-4 w-4" />
            </a>
          </div>
        </SlideInRight>
        <FadeInText delay={0.1}>
          <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
            Ouvert aux collaborations, aux projets cools et aux idées qui réfléchissent.
          </p>
          <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
            Le plus simple : un email ou un DM sur X.
          </p>
        </FadeInText>
      </section>
    </SlideUp>
  );
}

export function Blog({ posts = [], standalone = false }) {
  return (
    <SlideUp delay={0.3}>
      <section
        id="blog"
        className={`${standalone ? '' : 'mt-8 '}section-lines p-4 scroll-mt-4`}
      >
        <FadeInText delay={0.1}>
          <div className="mb-4 flex items-center justify-between gap-2">
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">Blog.</h3>
            <span className={badgeClass}>{posts.length ? `${posts.length} article${posts.length > 1 ? 's' : ''}` : 'bientôt'}</span>
          </div>
        </FadeInText>

        {posts.length > 0 ? (
          <ul className="space-y-2">
            {posts.map((post, index) => {
              const Reveal = index % 2 === 0 ? SlideInLeft : SlideInRight;
              return (
                <Reveal key={post.title} delay={0.1}>
                  <li>
                    <a
                      href={post.href ?? '#'}
                      className={`${cardClass} block transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900`}
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                          {post.title}
                        </h4>
                        {post.tag ? <span className={badgeClass}>{post.tag}</span> : null}
                      </div>
                      <p className="mt-2 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
                        {post.excerpt}
                      </p>
                      <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
                        {[post.date, post.readTime].filter(Boolean).join(' · ')}
                      </p>
                    </a>
                  </li>
                </Reveal>
              );
            })}
          </ul>
        ) : (
          <FadeInText delay={0.15}>
            <div className="flex flex-col items-center rounded-xl border border-dashed border-neutral-200 px-5 py-9 text-center dark:border-neutral-800">
              <div className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
                <NotebookPen className="h-5 w-5" />
              </div>
              <p className="mt-3 text-sm font-medium text-neutral-900 dark:text-neutral-50">
                Les premiers articles arrivent bientôt.
              </p>
              <p className="mt-1 max-w-[34ch] text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
                Coulisses d'AgentMob, notes de dev et idées IA. En attendant, écris-moi si un sujet
                te tente.
              </p>
              <a
                href={`mailto:${profile.email}?subject=Idee%20d%27article`}
                className="mt-4 inline-flex items-center gap-1 rounded-sm border border-neutral-200 px-3 py-1.5 text-xs text-neutral-700 transition-colors hover:bg-neutral-50 dark:border-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-900"
              >
                Suggérer un sujet -&gt;
              </a>
            </div>
          </FadeInText>
        )}
      </section>
    </SlideUp>
  );
}
