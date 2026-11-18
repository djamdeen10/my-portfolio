// Labels are translation keys: the language is resolved at render time.
export const ROUTES = [
  { id: 'accueil', path: '/', labelKey: 'nav.accueil', titleKey: 'routeTitles.accueil' },
  { id: 'projet', path: '/projet', labelKey: 'nav.projet', titleKey: 'routeTitles.projet' },
  { id: 'contact', path: '/contact', labelKey: 'nav.contact', titleKey: 'routeTitles.contact' },
  { id: 'blog', path: '/blog', labelKey: 'nav.blog', titleKey: 'routeTitles.blog' },
];

export const NOT_FOUND_ROUTE = {
  id: 'not-found',
  path: '',
  labelKey: 'nav.accueil',
  titleKey: 'notFound.title',
};

export function normalizePath(pathname) {
  const clean = pathname.replace(/\/+$/, '');
  return clean === '' ? '/' : clean;
}

export function routeFor(pathname) {
  const normalized = normalizePath(pathname);
  const exact = ROUTES.find((route) => route.path === normalized);
  if (exact) return exact;

  // Project detail pages live under /projet/{slug} without a static entry.
  const detail = normalized.match(/^\/projet\/([a-z0-9-]+)$/i);
  if (detail) {
    return {
      id: 'projet-detail',
      path: normalized,
      slug: detail[1].toLowerCase(),
      labelKey: 'nav.projet',
      titleKey: 'routeTitles.projetDetail',
    };
  }

  // Blog posts live under /blog/{slug} without a static entry.
  const post = normalized.match(/^\/blog\/([a-z0-9-]+)$/i);
  if (post) {
    return {
      id: 'blog-detail',
      path: normalized,
      slug: post[1].toLowerCase(),
      labelKey: 'nav.blog',
      titleKey: 'routeTitles.blogDetail',
    };
  }

  return { ...NOT_FOUND_ROUTE, path: normalized };
}
