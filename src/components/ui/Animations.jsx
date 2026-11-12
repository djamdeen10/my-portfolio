import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

const hiddenByDirection = {
  up: (distance) => ({ y: distance, opacity: 0 }),
  down: (distance) => ({ y: -distance, opacity: 0 }),
  left: (distance) => ({ x: distance, opacity: 0 }),
  right: (distance) => ({ x: -distance, opacity: 0 }),
  fade: () => ({ opacity: 0 }),
};

/**
 * Mirrors the scroll-reveal wrappers used across the reference site:
 * fade / slide-up / slide-in-left / slide-in-right, once per element,
 * triggered slightly before the element enters the viewport.
 */
export function Reveal({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 40,
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20px' });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: hiddenByDirection[direction](distance),
        visible: {
          x: 0,
          y: 0,
          opacity: 1,
          transition: { duration, delay, ease: EASE },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function FadeInText({ children, className = '', delay = 0 }) {
  return (
    <Reveal direction="fade" delay={delay} duration={0.6} className={className}>
      {children}
    </Reveal>
  );
}

export function SlideUp({ children, className = '', delay = 0 }) {
  return (
    <Reveal direction="up" delay={delay} duration={0.6} distance={40} className={className}>
      {children}
    </Reveal>
  );
}

export function SlideInLeft({ children, className = '', delay = 0 }) {
  return (
    <Reveal direction="left" delay={delay} duration={0.6} distance={30} className={className}>
      {children}
    </Reveal>
  );
}

export function SlideInRight({ children, className = '', delay = 0 }) {
  return (
    <Reveal direction="right" delay={delay} duration={0.6} distance={30} className={className}>
      {children}
    </Reveal>
  );
}
