import { projects } from '../../data/content.js';
import { FadeInText, SlideUp } from '../../components/ui/Animations.jsx';
import { ExternalLink, Github } from '../../components/ui/Icons.jsx';
import { StackChip } from '../../components/ui/StackChip.jsx';

const primaryActionClass =
  'glass-primary glass-interactive inline-flex h-8 items-center gap-1 whitespace-nowrap rounded-sm px-2 text-[11px] font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40 sm:gap-1.5 sm:px-3 sm:text-xs dark:focus-visible:ring-neutral-100/50';

const secondaryActionClass =
  'glass-chip glass-interactive inline-flex h-8 items-center gap-1 whitespace-nowrap rounded-sm px-2 text-[11px] font-medium text-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40 sm:gap-1.5 sm:px-3 sm:text-xs dark:text-neutral-200 dark:focus-visible:ring-neutral-100/50';

const sectionLabelClass =
  'mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400';

export default function ProjectDetailPage({ slug, onNavigate }) {
  const project = projects.find((item) => item.slug === slug);

  const goBack = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate?.('/projet');
  };

  const backLink = (
    <a
      href="/projet"
      onClick={goBack}
      className="inline-flex items-center gap-1 text-xs font-medium text-neutral-500 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
    >
      &lt;- Tous les projets
    </a>
  );

  if (!project) {
    return (
      <SlideUp delay={0.2}>
        <section className="section-lines p-4">
          <FadeInText delay={0.1}>{backLink}</FadeInText>
          <FadeInText delay={0.15}>
            <h2 className="mt-4 text-sm font-semibold text-neutral-900 dark:text-neutral-50">
              Projet introuvable.
            </h2>
            <p className="mt-1 text-xs leading-relaxed text-neutral-500 dark:text-neutral-400">
              Ce projet n'existe pas ou n'est plus en ligne.
            </p>
          </FadeInText>
        </section>
      </SlideUp>
    );
  }

  return (
    <SlideUp delay={0.2}>
      <section className="section-lines p-4 lg:p-5">
        <FadeInText delay={0.1}>{backLink}</FadeInText>

        <div className="xl:mt-1 xl:grid xl:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] xl:items-start xl:gap-6">
          <div className="xl:min-w-0">
            <FadeInText delay={0.15}>
              <h2 className="mt-3 text-lg font-semibold tracking-tight text-neutral-900 xl:text-xl dark:text-neutral-50">
                {project.title}
              </h2>
            </FadeInText>

            {project.cover ? (
              <FadeInText delay={0.2}>
                <div className="mt-3 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
                  <div className="relative aspect-[16/9] xl:max-h-[460px]">
                    <img
                      src={project.cover}
                      alt={`Aperçu de ${project.title}`}
                      loading="eager"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10" />
                  </div>
                </div>
              </FadeInText>
            ) : null}
          </div>

          <div className="xl:mt-3 xl:min-w-0">
            <FadeInText delay={0.25}>
              <div className="mt-3 flex flex-wrap items-center gap-2 xl:mt-0">
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className={primaryActionClass}
                  >
                    Voir le projet
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                ) : null}
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

              <h3 className={sectionLabelClass}>À propos</h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                {project.description}
              </p>
            </FadeInText>

            {project.stack?.length ? (
              <FadeInText delay={0.3}>
                <h3 className={sectionLabelClass}>Stack</h3>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.stack.map((label) => (
                    <StackChip key={label} label={label} />
                  ))}
                </div>
              </FadeInText>
            ) : null}
          </div>
        </div>
      </section>
    </SlideUp>
  );
}
