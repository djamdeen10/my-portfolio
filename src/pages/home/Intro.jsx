import { useI18n } from '../../i18n/LanguageProvider.jsx';
import { FadeInText } from '../../components/ui/Animations.jsx';

const linkClass =
  'font-medium text-neutral-900 underline decoration-neutral-400 underline-offset-[3px] transition-colors hover:decoration-neutral-900 dark:text-neutral-100 dark:decoration-neutral-500 dark:hover:decoration-neutral-100';

function Segment({ segment }) {
  if (!segment) return null;

  if (segment.href) {
    return (
      <a href={segment.href} target="_blank" rel="noreferrer" className={linkClass}>
        {segment.text}
      </a>
    );
  }

  if (segment.mark) {
    return (
      <span className="rounded-md bg-neutral-200/70 px-1.5 py-0.5 text-[12px] font-medium text-neutral-900 dark:bg-white/10 dark:text-neutral-100">
        {segment.text}
      </span>
    );
  }

  if (segment.strong) {
    return (
      <span className="font-medium text-neutral-900 dark:text-neutral-100">{segment.text}</span>
    );
  }

  return segment.text;
}

export default function Intro() {
  const { content } = useI18n();
  const { intro } = content.ui;

  return (
    <FadeInText delay={0.3}>
      <section className="m-2 mt-4 text-[13px] leading-6 text-neutral-600 lg:max-w-[72ch] xl:max-w-none dark:text-neutral-300">
        <p className="text-sm font-medium text-neutral-900 dark:text-neutral-100">
          {intro.greeting}
        </p>

        <div className="mt-2 [&>p]:mb-3 [&>p]:break-inside-avoid [&>p:last-child]:mb-0 xl:mt-3 xl:columns-2 xl:gap-10 2xl:columns-3 2xl:gap-12">
          {(intro.paragraphs ?? []).map((paragraph, index) => (
            <p key={index}>
              {paragraph.map((segment, segmentIndex) => (
                <Segment key={segmentIndex} segment={segment} />
              ))}
            </p>
          ))}
        </div>
      </section>
    </FadeInText>
  );
}
