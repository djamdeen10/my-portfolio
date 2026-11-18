import en from './en.js';

// English is the fallback and is always bundled: a missing chunk can never
// blank the site. Every other locale is a separate chunk, loaded when needed
// and prefetched on idle so switching stays instant.
export const BASE_TRANSLATIONS = { en };

const LOADERS = {
  fr: () => import('./fr.js').then((module) => module.default),
  es: () => import('./es.js').then((module) => module.default),
  ar: () => import('./ar.js').then((module) => module.default),
  pt: () => import('./pt.js').then((module) => module.default),
  zh: () => import('./zh.js').then((module) => module.default),
  ja: () => import('./ja.js').then((module) => module.default),
  ru: () => import('./ru.js').then((module) => module.default),
};

const cache = new Map([['en', en]]);

export function loadTranslation(code) {
  if (cache.has(code)) return Promise.resolve(cache.get(code));

  const loader = LOADERS[code];
  if (!loader) return Promise.resolve(en);

  return loader()
    .then((translation) => {
      cache.set(code, translation);
      return translation;
    })
    .catch(() => en);
}

export function getLoadedTranslation(code) {
  return cache.get(code) ?? null;
}
