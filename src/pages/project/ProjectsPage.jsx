import { profile, projects } from '../../data/content.js';
import { FadeInText, SlideUp } from '../../components/ui/Animations.jsx';
import { badgeClass } from '../../components/ui/styles.js';
import ProjectCard from './ProjectCard.jsx';

export default function ProjectsPage({ onNavigate }) {
  return (
    <SlideUp delay={0.2}>
      <section className="section-lines p-4">
        <FadeInText delay={0.1}>
          <div className="mb-4 flex items-start justify-between gap-3">
            <div>
              <h2 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
                Projets.
              </h2>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                Ce sur quoi je passe mes nuits.
              </p>
            </div>
            <span className={badgeClass}>
              {projects.length} projet{projects.length > 1 ? 's' : ''}
            </span>
          </div>
        </FadeInText>

        <div className="space-y-3">
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
              Voir tous les repos -&gt;
            </a>
          </div>
        </FadeInText>
      </section>
    </SlideUp>
  );
}
