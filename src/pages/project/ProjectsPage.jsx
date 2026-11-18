import { useI18n } from '../../i18n/LanguageProvider.jsx';
import { FadeInText, SlideUp } from '../../components/ui/Animations.jsx';
import { badgeClass } from '../../components/ui/styles.js';
import ProjectCard from './ProjectCard.jsx';

export default function ProjectsPage({ onNavigate }) {
  const { content, t, tp } = useI18n();
  const { profile, projects } = content;

  return (
    <SlideUp delay={0.2}>
      <section className="section-lines p-4">
        <FadeInText delay={0.1}>
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <h1 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                {t('projects.title')}
              </h1>
              <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                {t('projects.subtitle')}
              </p>
            </div>
            <span className={badgeClass}>{tp('projects.count', projects.length)}</span>
          </div>
        </FadeInText>

        <div className="mt-3 grid gap-3 lg:grid-cols-2 2xl:grid-cols-4">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.slug ?? project.title}
              project={project}
              direction={index % 2 === 1 ? 'right' : 'left'}
              delay={index === 0 ? 0.1 : 0.2}
              onNavigate={onNavigate}
            />
          ))}
        </div>

        <FadeInText delay={0.2}>
          <div className="mt-3 flex justify-center">
            <a
              href={profile.links.repos}
              target="_blank"
              rel="noreferrer"
              className="glass-chip glass-interactive inline-flex items-center gap-1 rounded-sm px-3 py-1.5 text-sm text-neutral-700 dark:text-neutral-200"
            >
              {t('projects.repos')} -&gt;
            </a>
          </div>
        </FadeInText>
      </section>
    </SlideUp>
  );
}
