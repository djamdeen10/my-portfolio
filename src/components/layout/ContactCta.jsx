import { useI18n } from '../../i18n/LanguageProvider.jsx';
import { Mail } from '../ui/Icons.jsx';

const primaryActionClass =
  'glass-primary glass-interactive inline-flex h-9 items-center justify-center gap-2 rounded-sm px-5 text-xs font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40 dark:focus-visible:ring-neutral-100/50';

const secondaryActionClass =
  'glass-chip glass-interactive inline-flex h-9 items-center justify-center gap-2 rounded-sm px-4 text-xs font-medium text-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40 dark:text-neutral-200 dark:focus-visible:ring-neutral-100/50';

export function ContactCta({ onNavigate }) {
  const { content, localizedPath, t } = useI18n();
  const { profile } = content;

  const goToContact = (event) => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    onNavigate?.('/contact');
  };

  return (
    <section
      aria-labelledby="contact-cta-title"
      className="mt-8 rounded-b-2xl border-t border-neutral-200 bg-neutral-50/70 px-5 py-8 text-center md:px-7 dark:border-neutral-800 dark:bg-neutral-900/40"
    >
      <h2
        id="contact-cta-title"
        className="text-base font-semibold tracking-tight text-neutral-900 sm:text-lg dark:text-neutral-50"
      >
        {t('contactCta.title')}
      </h2>

      <p className="mx-auto mt-1.5 max-w-md text-xs leading-relaxed text-neutral-600 sm:text-sm dark:text-neutral-400">
        {t('contactCta.text')}
      </p>

      <div className="mt-5 flex items-center justify-center gap-2">
        <a href={`mailto:${profile.email}`} className={primaryActionClass}>
          <Mail className="h-4 w-4" />
          {t('contactCta.write')}
        </a>
        <a href={localizedPath('/contact')} onClick={goToContact} className={secondaryActionClass}>
          {t('contactCta.other')}
        </a>
      </div>
    </section>
  );
}
