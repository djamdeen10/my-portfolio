import { skillIcons } from '../../data/skillIcons.js';
import { Code, SkillIcon } from './Icons.jsx';

const skillsByLabel = new Map(skillIcons.map((skill) => [skill.label, skill]));

// Certains libellés d'affichage diffèrent du nom d'icône Simple Icons.
const iconAliases = {
  React: 'React.js',
  HonoJS: 'Hono',
};

const chipClass =
  'glass-chip relative inline-flex select-none items-center gap-1.5 rounded-sm px-1 py-0.25 text-xs font-medium text-neutral-600 dark:text-neutral-300';

export function StackChip({ label, hover = false, className }) {
  const skill = skillsByLabel.get(iconAliases[label] ?? label);
  if (!skill && !label) return null;

  const classes = [chipClass, hover ? 'chip-spring' : '', className].filter(Boolean).join(' ');

  return (
    <span className={classes} aria-label={label}>
      <span className="flex h-3 w-3 items-center justify-center" aria-hidden="true">
        {skill ? (
          <SkillIcon paths={skill.paths} className="h-3 w-3" />
        ) : (
          <Code className="h-3 w-3" />
        )}
      </span>
      <span className="leading-none">{label}</span>
    </span>
  );
}
