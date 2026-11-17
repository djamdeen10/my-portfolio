import { currentWork, projects } from '../../data/content.js';
import { SlideUp } from '../../components/ui/Animations.jsx';
import { Github } from '../../components/ui/Icons.jsx';
import { StackChip } from '../../components/ui/StackChip.jsx';
import { badgeClass } from '../../components/ui/styles.js';

const primaryActionClass =
  'glass-primary glass-interactive inline-flex h-9 items-center justify-center gap-1.5 rounded-sm px-4 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40 dark:focus-visible:ring-neutral-100/50';

const secondaryActionClass =
  'glass-chip glass-interactive inline-flex h-9 items-center justify-center gap-1.5 rounded-sm px-3 text-sm font-medium text-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40 dark:text-neutral-200 dark:focus-visible:ring-neutral-100/50';

export default function CurrentWork({ onNavigate }) {
  const project = projects.find((item) => item.slug === currentWork.slug) ?? projects[0];
  if (!project) return null;

  const detailsHref = project.slug ? `/projet/${project.slug}` : '/projet';

  const openDetails = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate?.(detailsHref);
  };

  const goToProjects = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate?.('/projet');
  };

  return (
    <SlideUp delay={0.2}>
      <section className="mt-8 section-lines p-4 lg:p-5">
        <div className="mb-4 flex items-start justify-between gap-3">
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
              En ce moment
            </h3>
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
              Ce sur quoi je bosse actuellement.
            </p>
          </div>
          <span className={`${badgeClass} inline-flex items-center gap-1.5`}>
            <span
              className="h-1.5 w-1.5 rounded-full bg-neutral-900 dark:bg-neutral-100"
              aria-hidden="true"
            />
            {currentWork.status}
          </span>
        </div>

        <article className="group overflow-hidden rounded-xl border border-neutral-200 bg-white xl:flex dark:border-neutral-800 dark:bg-neutral-950">
          <a
            href={detailsHref}
            onClick={openDetails}
            aria-label={`Voir ${project.title}`}
            className="relative block aspect-[16/9] overflow-hidden bg-neutral-100 xl:aspect-auto xl:w-[46%] xl:shrink-0 dark:bg-neutral-900"
          >
            <img
              src={project.cover}
              alt={`Aperçu de ${project.title}`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10" />
          </a>

          <div className="flex flex-1 flex-col p-4 xl:justify-center xl:p-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
              Projet actuel
            </p>
            <h4 className="mt-1 text-base font-semibold tracking-tight text-neutral-900 xl:text-xl dark:text-neutral-50">
              {project.title}
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-neutral-600 lg:text-[13px] dark:text-neutral-300">
              {project.description}
            </p>

            {project.stack?.length ? (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {project.stack.map((label) => (
                  <StackChip key={label} label={label} />
                ))}
              </div>
            ) : null}

            <div className="mt-4 flex flex-wrap items-center gap-2">
              <a href={detailsHref} onClick={openDetails} className={primaryActionClass}>
                Voir le projet
              </a>
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className={secondaryActionClass}
                >
                  Code source
                  <Github className="h-3.5 w-3.5" />
                </a>
              ) : null}
            </div>
          </div>
        </article>

        <div className="mt-4">
          <a
            href="/projet"
            onClick={goToProjects}
            className="glass-chip glass-interactive inline-flex w-full items-center justify-center gap-1 rounded-sm px-4 py-2 text-sm font-medium text-neutral-700 sm:w-auto dark:text-neutral-200"
          >
            Voir tous mes projets -&gt;
          </a>
        </div>
      </section>
    </SlideUp>
  );
}
