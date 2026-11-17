import { interests } from '../../data/content.js';
import { FadeInText, SlideInLeft, SlideInRight, SlideUp } from '../../components/ui/Animations.jsx';
import { badgeClass, cardClass } from '../../components/ui/styles.js';

function InterestCard({ item }) {
  return (
    <li>
      <article className={`${cardClass} h-full`}>
        <div className="flex items-start justify-between gap-2">
          <h4 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50 flex-1 min-w-0">
            {item.title}
          </h4>
          <span className={badgeClass}>{item.badge}</span>
        </div>
        <p className="mt-2 text-xs leading-relaxed text-neutral-700 dark:text-neutral-300">
          {item.description}
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
        <ul className="grid gap-2 lg:grid-cols-2 2xl:grid-cols-4">
          {interests.map((item, index) => {
            const Reveal = index % 2 === 0 ? SlideInLeft : SlideInRight;
            return (
              <Reveal key={item.title} delay={0.1}>
                <InterestCard item={item} />
              </Reveal>
            );
          })}
        </ul>
      </section>
    </SlideUp>
  );
}
