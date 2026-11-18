import { useI18n } from '../i18n/LanguageProvider.jsx';
import { FadeInText, SlideUp } from '../components/ui/Animations.jsx';

export default function NotFoundPage() {
  const { localizedPath, t } = useI18n();

  return (
    <SlideUp delay={0.1}>
      <section className="section-lines p-6 text-center">
        <FadeInText delay={0.05}>
          <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
            404
          </p>
          <h1 className="mt-2 text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-50">
            {t('notFound.title')}
          </h1>
          <p className="mx-auto mt-2 max-w-sm text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
            {t('notFound.text')}
          </p>
          <a
            href={localizedPath('/')}
            className="glass-primary glass-interactive mt-5 inline-flex h-8 items-center rounded-sm px-3 text-xs font-medium"
          >
            {t('notFound.home')}
          </a>
        </FadeInText>
      </section>
    </SlideUp>
  );
}
