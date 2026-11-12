import { quote } from '../../data/content.js';

export function QuoteCard() {
  return (
    <figure className="mt-8 rounded-xl border border-neutral-200 bg-white px-5 py-6 text-center shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
      <blockquote className="text-sm font-semibold italic leading-relaxed text-neutral-700 dark:text-neutral-200">
        {quote.text}
      </blockquote>
      <figcaption className="mt-2 text-[11px] font-medium uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400">
        {quote.author}
      </figcaption>
    </figure>
  );
}
