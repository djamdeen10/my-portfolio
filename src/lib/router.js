import { useCallback, useEffect, useState } from 'react';
import { ROUTES, normalizePath, routeFor } from './routes.js';
import { splitLocalePath, withLocalePath } from './localePath.js';

export { ROUTES, routeFor } from './routes.js';

export function useAppRouter() {
  const [route, setRoute] = useState(() => routeFor(splitLocalePath(window.location.pathname).pathname));

  useEffect(() => {
    const onPopState = () => {
      setRoute(routeFor(splitLocalePath(window.location.pathname).pathname));
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = useCallback((path) => {
    // Callers always pass an unprefixed route ("/blog", "/projet/slug").
    const { pathname: cleanPath, locale } = splitLocalePath(path);
    const next = routeFor(cleanPath);
    const current = splitLocalePath(window.location.pathname);
    const samePage = normalizePath(current.pathname) === normalizePath(next.path);
    const target = withLocalePath(next.path, locale ?? current.locale ?? 'en');

    if (!samePage || target !== window.location.pathname) {
      window.history.pushState(null, '', target);
    }

    setRoute(next);
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({
      top: 0,
      behavior: samePage && !reduceMotion ? 'smooth' : 'auto',
    });
  }, []);

  return { route, navigate };
}
