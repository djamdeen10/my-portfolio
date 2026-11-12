import { blogPosts } from '../../data/content.js';
import { FadeInText, SlideInLeft, SlideInRight, SlideUp } from '../../components/ui/Animations.jsx';
import { badgeClass, cardClass } from '../../components/ui/styles.js';
import BlogEmptyState from './BlogEmptyState.jsx';

function BlogPostCard({ post }) {
  return (
    <a
      href={post.href ?? '#'}
      className={`${cardClass} block transition-colors hover:bg-neutral-50 dark:hover:bg-neutral-900`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
          {post.title}
        </h3>
        {post.tag ? <span className={badgeClass}>{post.tag}</span> : null}
      </div>
      <p className="mt-2 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
        {post.excerpt}
      </p>
      <p className="mt-2 text-[10px] font-medium uppercase tracking-[0.14em] text-neutral-500 dark:text-neutral-400">
        {[post.date, post.readTime].filter(Boolean).join(' · ')}
      </p>
    </a>
  );
}

export default function BlogPage() {
  return (
    <SlideUp delay={0.2}>
      <section className="section-lines p-4">
        <FadeInText delay={0.1}>
          <div className="mb-4 flex items-center justify-between gap-2">
            <h1 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">Blog.</h1>
            <span className={badgeClass}>
              {blogPosts.length
                ? `${blogPosts.length} article${blogPosts.length > 1 ? 's' : ''}`
                : 'bientôt'}
            </span>
          </div>
        </FadeInText>

        {blogPosts.length > 0 ? (
          <ul className="space-y-2">
            {blogPosts.map((post, index) => {
              const Reveal = index % 2 === 0 ? SlideInLeft : SlideInRight;
              return (
                <Reveal key={post.title} delay={0.1}>
                  <li>
                    <BlogPostCard post={post} />
                  </li>
                </Reveal>
              );
            })}
          </ul>
        ) : (
          <BlogEmptyState />
        )}
      </section>
    </SlideUp>
  );
}
