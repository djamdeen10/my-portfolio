import { SlideInLeft, SlideInRight } from '../../components/ui/Animations.jsx';
import { ExternalLink, Github } from '../../components/ui/Icons.jsx';
import { StackChip } from '../../components/ui/StackChip.jsx';

const actionClass =
  'glass-chip glass-interactive inline-flex h-7 w-7 items-center justify-center rounded-sm text-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40 dark:text-neutral-200 dark:focus-visible:ring-neutral-100/50';

export default function ProjectCard({ project, direction = 'left', delay = 0.1 }) {
  const Reveal = direction === 'right' ? SlideInRight : SlideInLeft;

  return (
    <Reveal delay={delay}>
      <article className="group overflow-hidden rounded-xl border border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-950">
        {project.cover ? (
          <div className="relative aspect-[16/9] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
            <img
              src={project.cover}
              alt={`Aperçu de ${project.title}`}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10" />
          </div>
        ) : null}

        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <h3 className="min-w-0 truncate text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
              {project.title}
            </h3>
            <div className="flex shrink-0 items-center gap-1.5">
              {project.demo ? (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Voir ${project.title} en ligne`}
                  title="Voir le projet en ligne"
                  className={actionClass}
                >
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ) : null}
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Voir le code de ${project.title} sur GitHub`}
                  title="Voir le code sur GitHub"
                  className={actionClass}
                >
                  <Github className="h-3.5 w-3.5" />
                </a>
              ) : null}
            </div>
          </div>

          <p className="mt-2 text-xs leading-relaxed text-neutral-600 dark:text-neutral-300">
            {project.description}
          </p>

          {project.stack?.length ? (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {project.stack.map((label) => (
                <StackChip key={label} label={label} />
              ))}
            </div>
          ) : null}
        </div>
      </article>
    </Reveal>
  );
}
