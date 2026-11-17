import { interests } from '../../data/content.js';
import { FadeInText, SlideInLeft, SlideInRight, SlideUp } from '../../components/ui/Animations.jsx';
import { badgeClass, cardClass } from '../../components/ui/styles.js';

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const linkClass =
  'font-medium text-neutral-900 underline decoration-neutral-400 underline-offset-2 transition-colors hover:decoration-neutral-900 dark:text-neutral-100 dark:decoration-neutral-500 dark:hover:decoration-neutral-100';

function Description({ item }) {
  const links = item.links ?? [];
  if (!links.length) return <>{item.description}</>;

  const pattern = new RegExp(`(${links.map((link) => escapeRegExp(link.label)).join('|')})`, 'g');

  return (
    <>
      {item.description.split(pattern).map((part, index) => {
        const link = links.find((entry) => entry.label === part);
        if (!link) return <span key={index}>{part}</span>;

        return (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            title={`${part} sur TMDB`}
            aria-label={`${part} sur TMDB`}
            className={linkClass}
          >
            {part}
          </a>
        );
      })}
    </>
  );
}

function InterestCard({ item }) {
  return (
    <li className="h-full">
      <article className={`${cardClass} h-full`}>
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 flex-1 min-w-0">
            {item.title}
          </h4>
          <span className={badgeClass}>{item.badge}</span>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
          <Description item={item} />
        </p>
      </article>
    </li>
  );
}

export default function Interests() {
  return (
    <SlideUp delay={0.3}>
      <section className="mt-8 section-lines p-4">
        <FadeInText delay={0.1}>
          <h3 className="mb-4 text-sm font-semibold text-neutral-900 dark:text-neutral-50">
            Centres d'intérêt &amp; soft skills.
          </h3>
        </FadeInText>
        <ul className="grid gap-2 lg:grid-cols-2 xl:grid-cols-3">
          {interests.map((item, index) => {
            const Reveal = index % 2 === 0 ? SlideInLeft : SlideInRight;
            return (
              <Reveal key={item.title} delay={0.1} className="h-full">
                <InterestCard item={item} />
              </Reveal>
            );
          })}
        </ul>
      </section>
    </SlideUp>
  );
}
