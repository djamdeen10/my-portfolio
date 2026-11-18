import { BASE_TRANSLATIONS } from '../i18n/translations/index.js';

/**
 * Language-independent data. Only things that must never change between
 * locales live here: slugs, URLs, stack names, dates, e-mail, social links…
 * Every human-readable string comes from `src/i18n/translations/*.js`.
 */

export const identity = {
  name: 'Djam Deen',
  handle: 'djamdeen10',
  // The clock on the home page always shows the owner's time, not the visitor's.
  timeZone: 'Africa/Porto-Novo',
  email: 'djamdeen10@gmail.com',
  links: {
    twitter: 'https://x.com/djamdeen10',
    facebook: 'https://www.facebook.com/djamdeen10',
    github: 'https://github.com/djamdeen10',
    repos: 'https://github.com/djamdeen10?tab=repositories',
  },
};

const projectBase = [
  {
    id: 'agentmob',
    slug: 'agentmob',
    // Brand name: identical in every language.
    title: 'AgentMob',
    cover: 'agentmob',
    coverAspect: 1200 / 675,
    stack: [
      'TypeScript',
      'React',
      'Vite',
      'Vitest',
      'HonoJS',
      'DeepSeek',
      'Claude',
      'SQLite',
      'Node.js',
      'Cloudflare',
    ],
    demo: 'https://agentmob.djamdeen.com',
    github: 'https://github.com/djamdeen10/agentmob-local-server',
  },
];

const currentWorkBase = { projectId: 'agentmob' };

const blogBase = [
  {
    id: 'agentmob',
    // Language-neutral slugs keep shared links working in every locale.
    slug: 'why-i-built-agentmob',
    cover: 'agentmobBlog',
    coverAspect: 1200 / 630,
    date: '2026-11-10',
  },
  {
    id: 'profVsRed',
    slug: 'professor-vs-reddington',
    cover: 'profVsRed',
    coverAspect: 1200 / 630,
    date: '2026-11-08',
    section: 'notes',
  },
];

function isPlainObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

// Arrays are replaced as a whole (a translated list is a complete list).
function deepMerge(base, override) {
  if (override === undefined) return base;
  if (Array.isArray(base) || Array.isArray(override)) return override;
  if (!isPlainObject(base) || !isPlainObject(override)) return override;

  const result = { ...base };
  for (const [key, value] of Object.entries(override)) {
    result[key] = deepMerge(base[key], value);
  }
  return result;
}

const cache = new Map();

/**
 * Builds the localized content graph for a locale. English is the fallback so
 * a missing key can never blank a page. `translation` is the chunk loaded for
 * the active locale; without it (first frame), English is used and the result
 * is not cached.
 */
export function getContent(locale, translation) {
  if (translation && cache.has(locale)) return cache.get(locale);

  const source = deepMerge(BASE_TRANSLATIONS.en, translation ?? {});

  const content = {
    ...source,
    profile: { ...identity, ...source.profile },
    projects: projectBase.map((project) => ({
      ...project,
      ...(source.projects?.[project.id] ?? {}),
    })),
    currentWork: { ...currentWorkBase, ...(source.currentWork ?? {}) },
    blogPosts: blogBase.map((post) => ({
      ...post,
      ...(source.blogPosts?.[post.id] ?? {}),
    })),
  };

  if (translation) cache.set(locale, content);
  return content;
}
