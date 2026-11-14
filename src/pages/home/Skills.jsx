import { skillIcons } from '../../data/skillIcons.js';
import { SlideUp } from '../../components/ui/Animations.jsx';
import { StackChip } from '../../components/ui/StackChip.jsx';

export default function Skills() {
  return (
    <SlideUp delay={0.3}>
      <section className="mt-5 section-lines p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-50">Stack</h3>
          <div className="pointer-events-none hidden text-[10px] text-neutral-500 dark:text-neutral-400 sm:block">
            survolez les tags
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
