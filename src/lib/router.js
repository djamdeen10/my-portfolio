import { useCallback, useEffect, useState } from 'react';

export const ROUTES = [
  { id: 'accueil', path: '/', label: 'Accueil', title: 'Portfolio' },
  { id: 'projet', path: '/projet', label: 'Projet', title: 'Projets' },
  { id: 'contact', path: '/contact', label: 'Contact', title: 'Contact' },
  { id: 'blog', path: '/blog', label: 'Blog', title: 'Blog' },
];

function normalize(pathname) {
  const clean = pathname.replace(/\/+$/, '');
  return clean === '' ? '/' : clean;
}

export function routeFor(pathname) {
  const normalized = normalize(pathname);
  return ROUTES.find((route) => route.path === normalized) ?? ROUTES[0];
}

export function useAppRouter() {
  const [route, setRoute] = useState(() => routeFor(window.location.pathname));

  useEffect(() => {
    const onPopState = () => {
      setRoute(routeFor(window.location.pathname));
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const navigate = useCallback((path) => {
    const next = routeFor(path);
    const samePage = normalize(window.location.pathname) === next.path;

    if (!samePage) {
      window.history.pushState(null, '', next.path);
    }

    setRoute(next);
    window.scrollTo({ top: 0, behavior: samePage ? 'smooth' : 'auto' });
  }, []);

  return { route, navigate };
}
