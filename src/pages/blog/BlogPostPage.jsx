import { useI18n } from '../../i18n/LanguageProvider.jsx';
import { FadeInText, SlideUp } from '../../components/ui/Animations.jsx';
import { CoverArt } from '../../components/ui/CoverArt.jsx';
import { Clock } from '../../components/ui/Icons.jsx';

// Rendu très léger : paragraphes, titres (##) et gras (**texte**).
function InlineText({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) =>
    part.startsWith('**') && part.endsWith('**') ? (
      <strong key={index} className="font-semibold text-neutral-900 dark:text-neutral-100">
        {part.slice(2, -2)}
      </strong>
    ) : (
      <span key={index}>{part}</span>
    ),
  );
}

function ArticleBody({ content }) {
  const blocks = content
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean);

  return blocks.map((block, index) =>
    block.startsWith('## ') ? (
      <h2
        key={index}
        className="mt-7 text-base font-semibold tracking-tight text-neutral-900 dark:text-neutral-50"
      >
        {block.slice(3)}
      </h2>
    ) : (
      <p
        key={index}
        className="mt-4 text-sm leading-relaxed text-neutral-600 first:mt-0 dark:text-neutral-300"
      >
        <InlineText text={block} />
      </p>
    ),
  );
}

export default function BlogPostPage({ slug, onNavigate }) {
  const { content, localizedPath, t, formatDate } = useI18n();
  const { blogPosts, profile } = content;
  const post = blogPosts.find((item) => item.slug === slug);
  const relatedProject = post ? content.projects.find((item) => item.id === post.id) : null;
  const publishedOn = post ? formatDate(post.date, { day: 'numeric', month: 'long', year: 'numeric' }) : null;

  const goBack = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate?.('/blog');
  };

  const backLink = (
    <a
      href={localizedPath('/blog')}
      onClick={goBack}
      className="inline-flex items-center gap-1 text-xs font-medium text-neutral-600 transition-colors hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
    >
      {t('blog.back')}
    </a>
  );

  if (!post) {
    return (
      <SlideUp delay={0.2}>
        <section className="section-lines p-4">
          <FadeInText delay={0.1}>{backLink}</FadeInText>
          <FadeInText delay={0.15}>
            <h1 className="mt-4 text-sm font-semibold text-neutral-900 dark:text-neutral-50">
              {t('blog.notFound')}
            </h1>
            <p className="mt-1 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
              {t('blog.notFoundText')}
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

        {post.cover ? (
          <FadeInText delay={0.15}>
            <div className="mt-3 overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900">
              <div className="relative" style={{ aspectRatio: post.coverAspect ?? 16 / 9 }}>
                <CoverArt
                  variant={post.cover}
                  alt={t('blog.illustration', { title: post.title })}
                  className="absolute inset-0 h-full w-full"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/5 dark:ring-white/10" />
              </div>
            </div>
          </FadeInText>
        ) : null}

        <FadeInText delay={0.2}>
          <div className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-600 dark:text-neutral-400">
            <p>{post.theme}</p>
            <div className="mt-1 flex items-center justify-between gap-3 sm:justify-start sm:gap-2">
              {publishedOn ? <time dateTime={post.date}>{publishedOn}</time> : <span />}
              <span className="hidden sm:inline" aria-hidden="true">
                ·
              </span>
              <span className="inline-flex items-center gap-1" title={t('blog.readingTime')}>
                <Clock className="h-3 w-3" />
                {post.readTime}
              </span>
            </div>
          </div>
          <h1 className="mt-2 text-lg font-semibold tracking-tight text-neutral-900 xl:text-2xl dark:text-neutral-50">
            {post.title}
          </h1>
        </FadeInText>

        {post.content ? (
          <FadeInText delay={0.25}>
            <div className="mt-6 max-w-[68ch] border-t border-neutral-200 pt-6 dark:border-neutral-800">
              <ArticleBody content={post.content} />
            </div>
          </FadeInText>
        ) : (
          <FadeInText delay={0.25}>
            <div className="mt-5 rounded-xl border border-dashed border-neutral-200 px-5 py-8 text-center dark:border-neutral-800">
              <p className="text-sm font-medium text-neutral-900 dark:text-neutral-50">
                {t('blog.preparing')}
              </p>
              <p className="mt-1 text-xs text-neutral-600 dark:text-neutral-400">
                {t('blog.preparingText')}
              </p>
            </div>
          </FadeInText>
        )}

        <FadeInText delay={0.3}>
          <div className="mt-8 flex max-w-[68ch] items-center gap-3 rounded-xl border border-neutral-200 bg-neutral-50/60 p-4 dark:border-neutral-800 dark:bg-neutral-900/50">
            <img
              src="/avatar.jpg"
              alt={profile.avatarAlt}
              width="40"
              height="40"
              loading="lazy"
              decoding="async"
              className="h-10 w-10 shrink-0 rounded-full object-cover ring-1 ring-black/10 dark:ring-white/15"
            />
            <div className="min-w-0">
              <a
                href={localizedPath('/')}
                rel="author"
                className="text-sm font-semibold text-neutral-900 hover:underline dark:text-neutral-50"
              >
                {profile.name}
              </a>
              <p className="mt-0.5 text-xs text-neutral-600 dark:text-neutral-400">
                {profile.role} · {profile.location}
              </p>
            </div>
          </div>

          <div className="mt-4 flex max-w-[68ch] flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium text-neutral-600 dark:text-neutral-400">
            <a
              href={localizedPath('/projet')}
              className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              {t('nav.projet')}
              {relatedProject ? ` · ${relatedProject.title}` : ''} →
            </a>
            <a
              href={localizedPath('/blog')}
              className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              {t('blog.back')}
            </a>
            <a
              href={localizedPath('/contact')}
              className="transition-colors hover:text-neutral-900 dark:hover:text-neutral-100"
            >
              {t('nav.contact')} →
            </a>
          </div>
        </FadeInText>
      </section>
    </SlideUp>
  );
}
