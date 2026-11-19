import { useI18n } from '../../i18n/LanguageProvider.jsx';
import { FadeInText, SlideUp } from '../../components/ui/Animations.jsx';
import { CoverArt } from '../../components/ui/CoverArt.jsx';
import { PageLinks } from '../../components/ui/PageLinks.jsx';
import { ExternalLink, Github } from '../../components/ui/Icons.jsx';
import { StackChip } from '../../components/ui/StackChip.jsx';

const primaryActionClass =
  'glass-primary glass-interactive inline-flex h-8 items-center gap-1 whitespace-nowrap rounded-sm px-2 text-[11px] font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40 sm:gap-1.5 sm:px-3 sm:text-xs dark:focus-visible:ring-neutral-100/50';

const secondaryActionClass =
  'glass-chip glass-interactive inline-flex h-8 items-center gap-1 whitespace-nowrap rounded-sm px-2 text-[11px] font-medium text-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40 sm:gap-1.5 sm:px-3 sm:text-xs dark:text-neutral-200 dark:focus-visible:ring-neutral-100/50';

const sectionLabelClass =
  'mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-600 dark:text-neutral-400';

export default function ProjectDetailPage({ slug, onNavigate }) {
  const { content, localizedPath, t } = useI18n();
  const { projects } = content;
  const project = projects.find((item) => item.slug === slug);
  const relatedPost = project
    ? content.blogPosts.find((post) => post.id === project.id)
    : null;

  const goBack = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate?.('/projet');
  };

  const backLink = (
    <a
      href={localizedPath('/projet')}
      onClick={goBack}
      className="inline-flex items-center gap-1 text-xs font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
    >
      {t('project.back')}
    </a>
  );

  if (!project) {
    return (
      <SlideUp delay={0.2}>
        <section className="section-lines p-4">
          <FadeInText delay={0.1}>{backLink}</FadeInText>
          <FadeInText delay={0.15}>
            <h1 className="mt-4 text-sm font-semibold text-neutral-900 dark:text-neutral-50">
              {t('project.notFound')}
            </h1>
            <p className="mt-1 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
              {t('project.notFoundText')}
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
              <h1 className="mt-3 text-lg font-semibold tracking-tight text-neutral-900 xl:text-xl dark:text-neutral-50">
                {project.title}
              </h1>
            </FadeInText>

            {project.cover ? (
              <FadeInText delay={0.2}>
                <div className="mt-3 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
                  <div className="relative" style={{ aspectRatio: project.coverAspect ?? 16 / 9 }}>
                    <CoverArt
                      variant={project.cover}
                      alt={t('project.preview', { title: project.title })}
                      className="absolute inset-0 h-full w-full"
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
                    {t('project.view')}
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
                    {t('project.source')}
                    <Github className="h-3.5 w-3.5" />
                  </a>
                ) : null}
              </div>

              <h2 className={sectionLabelClass}>{t('project.about')}</h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
                {project.description}
              </p>
            </FadeInText>

            {project.stack?.length ? (
              <FadeInText delay={0.3}>
                <h2 className={sectionLabelClass}>{t('project.stack')}</h2>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.stack.map((label) => (
                    <StackChip key={label} label={label} />
                  ))}
                </div>
              </FadeInText>
            ) : null}

            {project.highlights?.length ? (
              <FadeInText delay={0.35}>
                <h2 className={sectionLabelClass}>{t('project.bricks')}</h2>
                <dl className="mt-2 grid gap-2 sm:grid-cols-2">
                  {project.highlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-lg border border-neutral-200 bg-neutral-50/60 px-3 py-2 dark:border-neutral-800 dark:bg-neutral-900/60"
                    >
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-600 dark:text-neutral-400">
                        {item.label}
                      </dt>
                      <dd className="mt-0.5 text-xs font-medium text-neutral-900 dark:text-neutral-100">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </FadeInText>
            ) : null}
          </div>
        </div>

        {project.body?.length ? (
          <FadeInText delay={0.35}>
            <div className="mt-6 max-w-[72ch] border-t border-neutral-200 pt-5 dark:border-neutral-800">
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-600 dark:text-neutral-400">
                {t('project.body')}
              </h2>
              {project.body.map((paragraph, index) => (
                <p
                  key={index}
                  className="mt-3 text-sm leading-relaxed text-neutral-600 first:mt-2 dark:text-neutral-300"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </FadeInText>
        ) : null}

        <FadeInText delay={0.4}>
          <PageLinks
            related={
              relatedPost
                ? {
                    kind: 'article',
                    eyebrow: t('routeTitles.blogDetail'),
                    title: relatedPost.title,
                  }
                : null
            }
            relatedPath={relatedPost ? `/blog/${relatedPost.slug}` : undefined}
            backPath="/projet"
            backLabel={t('project.back')}
            onNavigate={onNavigate}
          />
        </FadeInText>
      </section>
    </SlideUp>
  );
}
