import { useI18n } from '../../i18n/LanguageProvider.jsx';
import { FadeInText, SlideInLeft, SlideInRight, SlideUp } from '../../components/ui/Animations.jsx';
import { badgeClass, cardClass } from '../../components/ui/styles.js';

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const linkClass =
  'font-medium text-neutral-900 underline decoration-neutral-400 underline-offset-2 transition-colors hover:decoration-neutral-900 dark:text-neutral-100 dark:decoration-neutral-500 dark:hover:decoration-neutral-100';

function Description({ item, tmdbLabel }) {
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
            title={tmdbLabel(part)}
            aria-label={tmdbLabel(part)}
            className={linkClass}
          >
            {part}
          </a>
        );
      })}
    </>
  );
}

function InterestCard({ item, tmdbLabel }) {
  return (
    <li className="h-full">
      <article className={`${cardClass} flex h-full flex-col justify-center gap-3 md:px-5 md:py-4`}>
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
          <h4 className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
            {item.title}
          </h4>
          <span className={`${badgeClass} shrink-0`}>{item.badge}</span>
        </div>
        <p className="text-start text-[13px] leading-relaxed text-neutral-600 dark:text-neutral-300">
          <Description item={item} tmdbLabel={tmdbLabel} />
        </p>
      </article>
    </li>
  );
}

export default function Interests() {
  const { content, t } = useI18n();
  const { interests } = content;

  const tmdbLabel = (name) => t('interests.tmdb', { name });

  return (
    <SlideUp delay={0.3}>
      <section className="mt-8 section-lines p-4">
        <FadeInText delay={0.1}>
          <h3 className="mb-4 text-sm font-semibold text-neutral-900 dark:text-neutral-50">
            {t('interests.title')}
          </h3>
        </FadeInText>
        <ul className="interests-mosaic grid gap-2">
          {interests.map((item, index) => {
            const Reveal = index % 2 === 0 ? SlideInLeft : SlideInRight;
            return (
              <Reveal key={item.title} delay={0.1} className="h-full">
                <InterestCard item={item} tmdbLabel={tmdbLabel} />
              </Reveal>
            );
          })}
        </ul>
      </section>
    </SlideUp>
  );
}
