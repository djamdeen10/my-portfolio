import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun } from './Icons.jsx';
import { useTheme } from '../ThemeProvider.jsx';

export function TimeCounter({ className, timeZone }) {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formatted = useMemo(() => {
    const options = { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' };

    try {
      return time.toLocaleTimeString('en-US', timeZone ? { ...options, timeZone } : options);
    } catch {
      return time.toLocaleTimeString('en-US', options);
    }
  }, [time, timeZone]);

  return (
    <span
      className={className}
      title={timeZone ? `Heure locale · ${timeZone}` : 'Heure locale'}
      suppressHydrationWarning
    >
      {formatted}
    </span>
  );
}

export function TextShimmer({ children, as: Tag = 'p', className, duration = 1.5, spread = 4 }) {
  const MotionTag = useMemo(() => motion.create(Tag), [Tag]);
  const spreadPx = useMemo(() => children.length * spread, [children, spread]);

  return (
    <MotionTag
      className={[
        'relative inline-block bg-[length:250%_100%,auto] bg-clip-text',
        'text-transparent [--base-color:#a1a1aa] [--base-gradient-color:#000000]',
        '[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))] [background-repeat:no-repeat,padding-box]',
        'dark:[--base-color:#71717a] dark:[--base-gradient-color:#ffffff] dark:[--bg:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--base-gradient-color),#0000_calc(50%+var(--spread)))]',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      initial={{ backgroundPosition: '100% center' }}
      animate={{ backgroundPosition: '0% center' }}
      transition={{ repeat: Infinity, duration, ease: 'linear' }}
      style={{
        '--spread': `${spreadPx}px`,
        backgroundImage: 'var(--bg), linear-gradient(var(--base-color), var(--base-color))',
      }}
    >
      {children}
    </MotionTag>
  );
}

const cursorVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.01, repeat: Infinity, repeatDelay: 0.4, repeatType: 'reverse' } },
};

export function Typewriter({
  text,
  speed = 50,
  initialDelay = 0,
  waitTime = 2000,
  deleteSpeed = 30,
  loop = true,
  className,
  showCursor = true,
  hideCursorOnType = false,
  cursorChar = '|',
  cursorClassName = 'ml-1',
}) {
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typeIndex, setTypeIndex] = useState(0);

  const phrases = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);
  const currentText = phrases[typeIndex];

  useEffect(() => {
    let timeout;

    const step = () => {
      if (isDeleting) {
        if (displayText === '') {
          setIsDeleting(false);
          if (typeIndex === phrases.length - 1 && !loop) return;
          setTypeIndex((index) => (index + 1) % phrases.length);
          setCharIndex(0);
          timeout = setTimeout(() => {}, waitTime);
        } else {
          timeout = setTimeout(() => setDisplayText((value) => value.slice(0, -1)), deleteSpeed);
        }
      } else if (charIndex < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText((value) => value + currentText[charIndex]);
          setCharIndex((index) => index + 1);
        }, speed);
      } else if (phrases.length > 1) {
        timeout = setTimeout(() => setIsDeleting(true), waitTime);
      }
    };

    if (charIndex !== 0 || isDeleting || displayText !== '') {
      step();
    } else {
      timeout = setTimeout(step, initialDelay);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, displayText, isDeleting, speed, deleteSpeed, waitTime, phrases, typeIndex, currentText, loop, initialDelay]);

  return (
    <div className={`inline whitespace-pre-wrap tracking-tight ${className ?? ''}`}>
      <span>{displayText}</span>
      {showCursor && (
        <motion.span
          variants={cursorVariants}
          className={`${cursorClassName}${hideCursorOnType && (charIndex < currentText.length || isDeleting) ? ' hidden' : ''}`}
          initial="initial"
          animate="animate"
        >
          {cursorChar}
        </motion.span>
      )}
    </div>
  );
}

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  // Always toggle from the theme that is actually applied. Using the raw
  // preference here broke the first click when it was still "system".
  const isDark = resolvedTheme === 'dark';

  return (
    <button
      type="button"
      aria-label={isDark ? 'Activer le thème clair' : 'Activer le thème sombre'}
      title={isDark ? 'Thème clair' : 'Thème sombre'}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="glass-chip glass-interactive backdrop-blur-md inline-flex h-8 w-8 items-center justify-center rounded-full text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/40 dark:focus-visible:ring-neutral-100/50"
    >
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      <span className="sr-only">{isDark ? 'Activer le thème clair' : 'Activer le thème sombre'}</span>
    </button>
  );
}
