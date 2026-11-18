import { useI18n } from '../../i18n/LanguageProvider.jsx';

export function QuoteCard() {
  const { content } = useI18n();
  const { quote } = content;

  return (
    <figure className="mt-8 rounded-xl border border-neutral-200 bg-white px-5 py-6 text-center shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
      <blockquote className="text-sm font-semibold italic leading-relaxed text-neutral-800 dark:text-neutral-200">
        {quote.text}
      </blockquote>
      <figcaption className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-600 dark:text-neutral-400">
        {quote.author}
      </figcaption>
    </figure>
  );
}
