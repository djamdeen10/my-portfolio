import { useI18n } from '../../i18n/LanguageProvider.jsx';
import { FadeInText } from '../../components/ui/Animations.jsx';
import { NotebookPen } from '../../components/ui/Icons.jsx';

export default function BlogEmptyState() {
  const { content, t } = useI18n();
  const { profile } = content;
  const subject = encodeURIComponent(t('blog.subject'));

  return (
    <FadeInText delay={0.15}>
      <div className="flex flex-col items-center rounded-xl border border-dashed border-neutral-200 px-5 py-9 text-center dark:border-neutral-800">
        <div className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-neutral-50 text-neutral-600 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-300">
          <NotebookPen className="h-5 w-5" />
        </div>
        <p className="mt-3 text-sm font-medium text-neutral-900 dark:text-neutral-50">
          {t('blog.emptyTitle')}
        </p>
        <p className="mt-1 max-w-[34ch] text-xs leading-relaxed text-neutral-600 dark:text-neutral-400">
          {t('blog.emptyText')}
        </p>
        <a
          href={`mailto:${profile.email}?subject=${subject}`}
          className="glass-chip glass-interactive mt-4 inline-flex items-center gap-1 rounded-sm px-3 py-1.5 text-xs text-neutral-700 dark:text-neutral-200"
        >
          {t('blog.suggest')} -&gt;
        </a>
      </div>
    </FadeInText>
  );
}
