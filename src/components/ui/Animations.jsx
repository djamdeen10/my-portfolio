import { useRef } from 'react';
import { m, useInView, useReducedMotion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

const hiddenByDirection = {
  up: (distance) => ({ y: distance, opacity: 0 }),
  down: (distance) => ({ y: -distance, opacity: 0 }),
  left: (distance) => ({ x: distance, opacity: 0 }),
  right: (distance) => ({ x: -distance, opacity: 0 }),
  fade: () => ({ opacity: 0 }),
};

/**
 * Scroll reveal wrapper. Animates only opacity + transform (both composited)
 * and stops observing once the element has been shown. Users who ask for
 * reduced motion get the final content immediately.
 */
export function Reveal({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
  direction = 'up',
  distance = 24,
  exit,
  as = 'div',
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-20px' });
  const reduceMotion = useReducedMotion();

  const StaticTag = as;
  const MotionTag = m[as] ?? m.div;

  if (reduceMotion) {
    return (
      <StaticTag ref={ref} className={className}>
        {children}
      </StaticTag>
    );
  }

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      exit={exit}
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
    </MotionTag>
  );
}

export function FadeInText({ children, className = '', delay = 0, ...rest }) {
  return (
    <Reveal direction="fade" delay={delay} duration={0.42} className={className} {...rest}>
      {children}
    </Reveal>
  );
}

export function SlideUp({ children, className = '', delay = 0, ...rest }) {
  return (
    <Reveal direction="up" delay={delay} duration={0.5} distance={24} className={className} {...rest}>
      {children}
    </Reveal>
  );
}

export function SlideInLeft({ children, className = '', delay = 0, ...rest }) {
  return (
    <Reveal direction="left" delay={delay} duration={0.48} distance={20} className={className} {...rest}>
      {children}
    </Reveal>
  );
}

export function SlideInRight({ children, className = '', delay = 0, ...rest }) {
  return (
    <Reveal direction="right" delay={delay} duration={0.48} distance={20} className={className} {...rest}>
      {children}
    </Reveal>
  );
}
