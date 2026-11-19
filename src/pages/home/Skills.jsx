import { useI18n } from '../../i18n/LanguageProvider.jsx';
import { skillIcons } from '../../data/skillIcons.js';
import { SlideUp } from '../../components/ui/Animations.jsx';
import { StackChip } from '../../components/ui/StackChip.jsx';

export default function Skills() {
  const { t } = useI18n();

  return (
    <SlideUp delay={0.3}>
      <section className="mt-5 section-lines p-4">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">
            {t('skills.title')}
          </h2>
          <div className="pointer-events-none hidden text-[10px] text-neutral-600 dark:text-neutral-400 sm:block">
            {t('skills.hint')}
          </div>
        </div>
        <div className="relative flex flex-wrap gap-2">
          {skillIcons.map(({ label }) => (
            <StackChip key={label} label={label} hover />
          ))}
        </div>
      </section>
    </SlideUp>
  );
}
