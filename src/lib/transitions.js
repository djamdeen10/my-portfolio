import { flushSync } from 'react-dom';

let fallbackTimer = 0;

export function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

/**
 * Runs a state change with a soft transition.
 *
 * - Chromium / Safari: the browser snapshots the old and new page and
 *   cross-fades them (View Transitions API). The snapshot runs on the
 *   compositor, so even a full-page theme or language change stays cheap.
 * - Other browsers: the state changes synchronously, then a short opacity
 *   fade masks the swap instead of leaving it abrupt.
 * - `prefers-reduced-motion`: instant, with no animation.
 */
export function runStateTransition(update) {
  if (typeof document === 'undefined' || prefersReducedMotion()) {
    update();
    return;
  }

  const root = document.documentElement;
  root.classList.remove('soft-swap');

  if (typeof document.startViewTransition === 'function') {
    try {
      const transition = document.startViewTransition(() => {
        flushSync(update);
      });
      transition?.finished?.catch(() => {});
      return;
    } catch {
      // Fall through to the opacity fade if the browser refuses the snapshot
      // (for example while another transition is already running).
    }
  }

  update();
  root.classList.add('soft-swap');
  window.clearTimeout(fallbackTimer);
  fallbackTimer = window.setTimeout(() => {
    root.classList.remove('soft-swap');
  }, 260);
}
