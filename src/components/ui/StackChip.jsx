import { motion } from 'framer-motion';
import { skillIcons } from '../../data/skillIcons.js';
import { SkillIcon } from './Icons.jsx';

const skillsByLabel = new Map(skillIcons.map((skill) => [skill.label, skill]));

const chipClass =
  'glass-chip relative inline-flex select-none items-center gap-1.5 rounded-sm px-1 py-0.25 text-xs font-medium text-neutral-600 dark:text-neutral-300';

export function StackChip({ label, hover = false, className }) {
  const skill = skillsByLabel.get(label);
  if (!skill) return null;

  const classes = className ? `${chipClass} ${className}` : chipClass;

  const content = (
    <>
      <span className="flex h-3 w-3 items-center justify-center" aria-hidden="true">
        <SkillIcon paths={skill.paths} className="h-3 w-3" />
      </span>
      <span className="leading-none">{label}</span>
    </>
  );

  if (!hover) {
    return (
      <span className={classes} aria-label={label}>
        {content}
      </span>
    );
  }

  return (
    <motion.span
      className={classes}
      whileHover={{ scale: 1.15 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      aria-label={label}
    >
      {content}
    </motion.span>
  );
}
