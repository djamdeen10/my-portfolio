import { useState } from 'react';
import { useI18n } from '../../i18n/LanguageProvider.jsx';
import { SlideUp } from '../../components/ui/Animations.jsx';

/**
 * Visible FAQ. It is also the source of the FAQPage JSON-LD (same questions,
 * same answers), so the structured data always matches what a visitor reads.
 * Only English and French have a reviewed FAQ for now; other locales keep the
 * rest of the page unchanged instead of showing an untranslated block.
 */
export default function FaqSection() {
  const { content, locale } = useI18n();
  const faq = content.faq;
  const [openIndex, setOpenIndex] = useState(null);

  if (!faq?.items?.length || !['en', 'fr'].includes(locale)) return null;

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <SlideUp delay={0.2}>
      <section
        id="faq"
        aria-labelledby="faq-title"
        className="mt-8 section-lines overflow-hidden p-5 sm:p-6 lg:p-8"
      >
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-14">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-500 dark:text-neutral-400">
              FAQ
            </p>
            <h2
              id="faq-title"
              className="faq-title mt-3 max-w-[13ch] text-[2.55rem] leading-[0.94] tracking-[-0.04em] text-neutral-900 sm:text-5xl dark:text-neutral-50"
            >
              {faq.title}
            </h2>
            <p className="mt-5 max-w-[34ch] text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
              {faq.subtitle}
            </p>
            <a
              href={`mailto:${content.profile.email}`}
              className="mt-4 inline-flex items-center border-b border-neutral-400 pb-0.5 text-xs font-medium text-neutral-900 transition-colors hover:border-neutral-900 hover:text-neutral-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40 dark:border-neutral-600 dark:text-neutral-100 dark:hover:border-neutral-100 dark:focus-visible:ring-neutral-100/50"
            >
              {content.profile.email}
            </a>
          </div>

          <div className="border-t border-neutral-200 dark:border-neutral-800">
            {faq.items.map((item, index) => {
              const open = openIndex === index;
              const triggerId = `faq-trigger-${index}`;
              const panelId = `faq-panel-${index}`;

              return (
                <div
                  key={item.q}
                  className={`border-b border-neutral-200 dark:border-neutral-800 ${open ? 'faq-item-open' : ''}`}
                >
                  <h3>
                    <button
                      id={triggerId}
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => toggle(index)}
                      className="group flex w-full items-center justify-between gap-6 py-4 text-start text-[13px] font-semibold leading-snug text-neutral-900 transition-colors hover:text-neutral-950 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40 focus-visible:ring-offset-4 focus-visible:ring-offset-white sm:py-5 dark:text-neutral-100 dark:hover:text-white dark:focus-visible:ring-neutral-100/50 dark:focus-visible:ring-offset-neutral-950"
                    >
                      <span>{item.q}</span>
                      <span
                        className="faq-plus shrink-0 text-neutral-500 transition-colors group-hover:text-neutral-800 dark:text-neutral-400 dark:group-hover:text-neutral-100"
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={triggerId}
                    aria-hidden={!open}
                    className={`faq-panel ${open ? 'is-open' : ''}`}
                  >
                    <div className="faq-panel-inner">
                      <p className="max-w-[58ch] pb-5 pe-6 text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </SlideUp>
  );
}
