import { LANGUAGES, getLanguage } from '../i18n/languages.js';
import { withLocalePath } from './localePath.js';
import {
  DEFAULT_OG_IMAGE,
  SITE_EMAIL,
  SITE_HANDLE,
  SITE_LOCATION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_URLS,
} from './site.js';

const OG_LOCALES = {
  en: 'en_US',
  fr: 'fr_FR',
  es: 'es_ES',
  ar: 'ar_AR',
  pt: 'pt_PT',
  zh: 'zh_CN',
  ja: 'ja_JP',
  ru: 'ru_RU',
};

const POST_IMAGES = {
  'why-i-built-agentmob': {
    src: '/covers/agentmob-cover-blog.webp',
    width: 1200,
    height: 630,
    type: 'image/webp',
  },
  'professor-vs-reddington': {
    src: '/og/prof-vs-red.png',
    width: 1200,
    height: 630,
    type: 'image/png',
  },
};

const PROJECT_IMAGES = {
  agentmob: {
    src: '/og/agentmob.png',
    width: 1200,
    height: 630,
    type: 'image/png',
  },
};

const POST_KEYWORDS = {
  'why-i-built-agentmob': [
    'AgentMob',
    'AI agents',
    'command-line AI agents',
    'Claude Code',
    'Codex',
    'Antigravity',
    'mobile AI agent control',
    'open source',
    'PWA',
    'SQLite',
    'local-first',
    'developer tools',
    'automation',
  ],
  'professor-vs-reddington': [
    'The Professor',
    'Raymond Reddington',
    'The Blacklist',
    'Money Heist',
    'La Casa de Papel',
    'strategy',
    'tactics',
    'TV series',
  ],
};

const BASE_KEYWORDS = [
  'Djam Deen',
  'djamdeen10',
  'Djamal ALIDOU M.',
  'backend developer',
  'AI-assisted product builder',
  'builds products with AI',
  'Cotonou',
  'Benin',
  'AgentMob',
];

export function absoluteUrl(path = '/') {
  return new URL(path, `${SITE_URL}/`).toString();
}

export function localeTag(code) {
  return getLanguage(code).locale;
}

export function ogLocale(code) {
  return OG_LOCALES[code] ?? localeTag(code).replace('-', '_');
}

function cleanText(value) {
  return String(value ?? '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function truncateText(value, max = 160) {
  const text = cleanText(value);
  if (text.length <= max) return text;

  const cut = text.slice(0, max - 1);
  const lastSpace = cut.lastIndexOf(' ');
  const safe = lastSpace > max * 0.55 ? cut.slice(0, lastSpace) : cut;
  return `${safe.replace(/[.,;:!?]$/, '')}…`;
}

function unique(values) {
  return [...new Set(values.map(cleanText).filter(Boolean))];
}

function isoDateTime(date) {
  if (!date) return undefined;
  const value = String(date);
  return value.includes('T') ? value : `${value}T00:00:00+01:00`;
}

function wordCount(text) {
  return cleanText(text).split(/\s+/).filter(Boolean).length;
}

function readingMinutes(readTime) {
  const match = String(readTime ?? '').match(/\d+/);
  return match ? Number(match[0]) : undefined;
}

function prune(value) {
  if (Array.isArray(value)) {
    const items = value.map(prune).filter((item) => item !== undefined);
    return items.length ? items : undefined;
  }

  if (value && typeof value === 'object') {
    const result = {};
    for (const [key, item] of Object.entries(value)) {
      const next = prune(item);
      if (next !== undefined) result[key] = next;
    }
    return Object.keys(result).length ? result : undefined;
  }

  if (value === null || value === undefined || value === '') return undefined;
  return value;
}

function projectFor(content, route, supplied) {
  if (supplied) return supplied;
  if (route.id !== 'projet-detail' || !route.slug) return null;
  return content.projects.find((project) => project.slug === route.slug) ?? null;
}

function postFor(content, route, supplied) {
  if (supplied) return supplied;
  if (route.id !== 'blog-detail' || !route.slug) return null;
  return content.blogPosts.find((post) => post.slug === route.slug) ?? null;
}

function imageFor({ isProject, project, isPost, post }) {
  const fallback = {
    ...DEFAULT_OG_IMAGE,
    alt: `${SITE_NAME} — Backend Developer & AI-Assisted Product Builder`,
  };

  if (isProject && project && PROJECT_IMAGES[project.slug]) {
    return {
      ...PROJECT_IMAGES[project.slug],
      alt: `${project.title} — ${project.description}`,
    };
  }

  if (isPost && post && POST_IMAGES[post.slug]) {
    return {
      ...POST_IMAGES[post.slug],
      alt: `${post.title} — ${SITE_NAME}`,
    };
  }

  if (isPost && post) {
    return { ...fallback, alt: `${post.title} — ${SITE_NAME}` };
  }

  return fallback;
}

function pageTitle({ route, content, profile, project, post, isMissingDetail, isNotFound }) {
  const ui = content.ui;

  if (isNotFound) return `${content.notFound?.title ?? 'Page not found.'} — ${profile.name}`;
  if (isMissingDetail) {
    const label =
      route.id === 'projet-detail'
        ? ui.project.notFound
        : ui.blog.notFound;
    return `${label} — ${profile.name}`;
  }
  if (route.id === 'accueil') return `${profile.name} — ${content.meta.role}`;
  if (route.id === 'projet') return `${ui.projects.title.replace(/\.$/, '')} — ${profile.name}`;
  if (route.id === 'contact') return `${ui.nav.contact} — ${profile.name}`;
  if (route.id === 'blog') return `${ui.blog.title.replace(/\.$/, '')} — ${profile.name}`;
  if (route.id === 'projet-detail' && project) return `${project.title} — ${profile.name}`;
  if (route.id === 'blog-detail' && post) return `${post.title} — ${profile.name}`;

  return `${profile.name} — ${content.meta.role}`;
}

function pageDescription({ route, content, profile, project, post, isMissingDetail, isNotFound }) {
  const ui = content.ui;

  if (isNotFound) return content.notFound?.text ?? 'This page does not exist or has moved.';
  if (isMissingDetail) {
    return route.id === 'projet-detail' ? ui.project.notFoundText : ui.blog.notFoundText;
  }
  if (route.id === 'accueil') return content.meta.description;
  if (route.id === 'projet') {
    return truncateText(
      `${ui.projects.subtitle} ${content.projects
        .map((item) => `${item.title} — ${item.description}`)
        .join(' ')}`,
    );
  }
  if (route.id === 'projet-detail' && project) return truncateText(project.description);
  if (route.id === 'contact') {
    return truncateText(`${ui.contact.subtitle} Email: ${profile.email}.`);
  }
  if (route.id === 'blog') {
    return truncateText(
      `${ui.blog.subtitle} ${content.blogPosts.map((item) => item.title).join(' · ')}`,
    );
  }
  if (route.id === 'blog-detail' && post) return truncateText(post.excerpt);

  return content.meta.description;
}

function pageKeywords({ route, content, project, post, isProject, isPost }) {
  const stack = isProject && project?.stack ? project.stack : content.projects.flatMap((item) => item.stack ?? []);
  const topics = ['backend development', 'AI agents', 'APIs', 'open source', 'TypeScript', 'Hono', 'PostgreSQL', 'SQLite', 'Cloudflare', 'React', 'Node.js'];

  if (route.id === 'accueil') return unique([...BASE_KEYWORDS, ...topics, ...stack]).slice(0, 16);
  if (isProject) {
    return unique([project.title, ...BASE_KEYWORDS, ...(project.stack ?? []), 'AI agents', 'mobile PWA', 'local-first', 'open source']).slice(0, 16);
  }
  if (route.id === 'blog') {
    return unique([...BASE_KEYWORDS, ...topics, ...content.blogPosts.map((item) => item.theme)]).slice(0, 16);
  }
  if (isPost) {
    return unique([
      ...(POST_KEYWORDS[post.slug] ?? []),
      post.theme,
      ...BASE_KEYWORDS,
      ...topics,
    ]).slice(0, 16);
  }
  if (route.id === 'contact') {
    return unique([...BASE_KEYWORDS, 'contact', 'freelance', 'collaboration', 'remote backend developer']).slice(0, 12);
  }
  return BASE_KEYWORDS;
}

function breadcrumbItems({ route, content, project, post, locale, path }) {
  const ui = content.ui;
  const url = (value) => absoluteUrl(withLocalePath(value, locale));
  const items = [{ name: ui.nav.accueil, item: url('/') }];

  if (route.id === 'projet') {
    items.push({ name: ui.nav.projet, item: url('/projet') });
  } else if (route.id === 'projet-detail' && project) {
    items.push({ name: ui.nav.projet, item: url('/projet') });
    items.push({ name: project.title, item: url(`/projet/${project.slug}`) });
  } else if (route.id === 'blog') {
    items.push({ name: ui.nav.blog, item: url('/blog') });
  } else if (route.id === 'blog-detail' && post) {
    items.push({ name: ui.nav.blog, item: url('/blog') });
    items.push({ name: post.title, item: url(`/blog/${post.slug}`) });
  } else if (route.id === 'contact') {
    items.push({ name: ui.nav.contact, item: url('/contact') });
  } else if (route.id === 'not-found') {
    items.push({ name: content.notFound?.title ?? 'Page not found', item: url(path) });
  }

  if (items.length < 2) return null;

  return {
    '@type': 'BreadcrumbList',
    '@id': `${url(path)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
}

function personNode({ content, profile, locale }) {
  return {
    '@type': 'Person',
    '@id': `${SITE_URL}/#person`,
    name: profile.name,
    alternateName: unique([profile.name, SITE_HANDLE, 'Djamal ALIDOU M.']),
    url: absoluteUrl('/'),
    image: {
      '@type': 'ImageObject',
      url: absoluteUrl('/avatar.jpg'),
      width: 498,
      height: 485,
    },
    jobTitle: content.meta.role,
    description: truncateText(content.meta.description, 240),
    email: profile.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE_LOCATION.city,
      addressCountry: SITE_LOCATION.country,
    },
    sameAs: SOCIAL_URLS,
    knowsAbout: unique([
      'Backend development',
      'AI agents',
      'AI-assisted product development',
      'products built with AI',
      'APIs',
      'TypeScript',
      'Hono',
      'Node.js',
      'Python',
      'FastAPI',
      'PostgreSQL',
      'SQLite',
      'Cloudflare',
      'React',
      'Next.js',
      'open source',
    ]),
    inLanguage: localeTag(locale),
  };
}

function organizationNode({ profile }) {
  return {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    alternateName: [SITE_HANDLE, 'Djam Deen Portfolio'],
    url: absoluteUrl('/'),
    logo: {
      '@type': 'ImageObject',
      url: absoluteUrl('/icon-512.jpg'),
      width: 512,
      height: 512,
    },
    founder: { '@id': `${SITE_URL}/#person` },
    sameAs: SOCIAL_URLS,
  };
}

function websiteNode({ content }) {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: absoluteUrl('/'),
    name: SITE_NAME,
    alternateName: [SITE_HANDLE, 'Djam Deen — Backend Developer'],
    description: truncateText(content.meta.description, 240),
    inLanguage: LANGUAGES.map((language) => language.locale),
    publisher: { '@id': `${SITE_URL}/#organization` },
    author: { '@id': `${SITE_URL}/#person` },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${absoluteUrl('/blog')}?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

function faqQuestions({ content, locale }) {
  if (!content.faq?.items?.length || !['en', 'fr'].includes(locale)) return null;

  return content.faq.items.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.a,
    },
  }));
}

function blogNode({ content, locale }) {
  const url = absoluteUrl(withLocalePath('/blog', locale));
  return {
    '@type': 'Blog',
    '@id': `${url}#blog`,
    url,
    name: content.ui.blog.title.replace(/\.$/, ''),
    description: content.ui.blog.subtitle,
    inLanguage: localeTag(locale),
    publisher: { '@id': `${SITE_URL}/#organization` },
    blogPost: content.blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      '@id': `${absoluteUrl(withLocalePath(`/blog/${post.slug}`, locale))}#article`,
      url: absoluteUrl(withLocalePath(`/blog/${post.slug}`, locale)),
      headline: post.title,
      datePublished: isoDateTime(post.date),
      author: { '@id': `${SITE_URL}/#person` },
    })),
  };
}

function softwareApplicationNode({ project, locale, canonical }) {
  const url = project.demo ?? canonical;

  return {
    '@type': 'SoftwareApplication',
    '@id': `${canonical}#app`,
    name: project.title,
    description: project.description,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Web (PWA), Android, iOS',
    url,
    codeRepository: project.github,
    author: { '@id': `${SITE_URL}/#person` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    image: {
      '@type': 'ImageObject',
      url: absoluteUrl(PROJECT_IMAGES[project.slug]?.src ?? DEFAULT_OG_IMAGE.src),
      width: PROJECT_IMAGES[project.slug]?.width ?? DEFAULT_OG_IMAGE.width,
      height: PROJECT_IMAGES[project.slug]?.height ?? DEFAULT_OG_IMAGE.height,
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    featureList: project.highlights?.map((item) => `${item.label}: ${item.value}`),
    keywords: project.stack,
    inLanguage: localeTag(locale),
  };
}

function blogPostingNode({ post, locale, canonical, image, keywords }) {
  const minutes = readingMinutes(post.readTime);

  return {
    '@type': 'BlogPosting',
    '@id': `${canonical}#article`,
    headline: post.title,
    description: post.excerpt,
    datePublished: isoDateTime(post.date),
    dateModified: isoDateTime(post.date),
    author: { '@id': `${SITE_URL}/#person` },
    publisher: { '@id': `${SITE_URL}/#organization` },
    image: {
      '@type': 'ImageObject',
      url: absoluteUrl(image.src),
      width: image.width,
      height: image.height,
    },
    mainEntityOfPage: { '@id': `${canonical}#webpage` },
    isPartOf: {
      '@id': `${absoluteUrl(withLocalePath('/blog', locale))}#blog`,
    },
    inLanguage: localeTag(locale),
    articleSection: post.theme,
    keywords: unique([post.theme, ...keywords]).slice(0, 14),
    wordCount: post.content ? wordCount(post.content) : undefined,
    timeRequired: minutes ? `PT${minutes}M` : undefined,
    about: post.slug === 'why-i-built-agentmob'
      ? {
          '@type': 'SoftwareApplication',
          name: 'AgentMob',
          url: absoluteUrl(withLocalePath('/projet/agentmob', locale)),
        }
      : undefined,
  };
}

export function buildPageSeo({
  route,
  content,
  locale = 'en',
  project: suppliedProject = null,
  post: suppliedPost = null,
}) {
  const profile = content.profile;
  const project = projectFor(content, route, suppliedProject);
  const post = postFor(content, route, suppliedPost);
  const isProject = route.id === 'projet-detail' && Boolean(project);
  const isPost = route.id === 'blog-detail' && Boolean(post);
  const isNotFound = route.id === 'not-found';
  const isMissingDetail =
    (route.id === 'projet-detail' && !project) || (route.id === 'blog-detail' && !post);

  const path = route.path || '/';
  const canonical = absoluteUrl(withLocalePath(path, locale));
  const language = getLanguage(locale);
  const image = imageFor({ isProject, project, isPost, post });
  const imageUrl = absoluteUrl(image.src);
  const title = pageTitle({ route, content, profile, project, post, isMissingDetail, isNotFound });
  const description = pageDescription({
    route,
    content,
    profile,
    project,
    post,
    isMissingDetail,
    isNotFound,
  });
  const keywords = pageKeywords({ route, content, project, post, isProject, isPost });
  const robots = isNotFound || isMissingDetail
    ? 'noindex, follow'
    : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

  const alternates = isNotFound || isMissingDetail
    ? []
    : [
        ...LANGUAGES.map((item) => ({
          hreflang: item.locale,
          href: absoluteUrl(withLocalePath(path, item.code)),
        })),
        { hreflang: 'x-default', href: absoluteUrl(withLocalePath(path, 'en')) },
      ];

  const ogType = isPost ? 'article' : route.id === 'accueil' ? 'profile' : 'website';
  const publishedTime = isPost ? isoDateTime(post.date) : undefined;
  const modifiedTime = isPost ? isoDateTime(post.date) : undefined;

  const person = personNode({ content, profile, locale });
  const organization = organizationNode({ profile });
  const website = websiteNode({ content });
  const breadcrumb = breadcrumbItems({ route, content, project, post, locale, path });
  const faqs = route.id === 'accueil' ? faqQuestions({ content, locale }) : null;
  const blog = route.id === 'blog' || isPost ? blogNode({ content, locale }) : null;
  const app = isProject ? softwareApplicationNode({ project, locale, canonical }) : null;
  const article = isPost ? blogPostingNode({ post, locale, canonical, image, keywords }) : null;

  let pageType = 'WebPage';
  if (route.id === 'accueil') pageType = 'ProfilePage';
  else if (route.id === 'projet' || route.id === 'blog') pageType = 'CollectionPage';
  else if (route.id === 'contact') pageType = 'ContactPage';
  else if (isProject) pageType = 'ItemPage';

  const webPage = {
    '@type': pageType,
    '@id': `${canonical}#webpage`,
    url: canonical,
    name: title,
    description,
    inLanguage: language.locale,
    isPartOf: { '@id': `${SITE_URL}/#website` },
    about: { '@id': `${SITE_URL}/#person` },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: imageUrl,
      width: image.width,
      height: image.height,
    },
    breadcrumb: breadcrumb ? { '@id': breadcrumb['@id'] } : undefined,
    datePublished: publishedTime,
    dateModified: modifiedTime,
    mainEntity: isProject
      ? { '@id': `${canonical}#app` }
      : isPost
        ? { '@id': `${canonical}#article` }
        : route.id === 'blog'
          ? { '@id': `${absoluteUrl(withLocalePath('/blog', locale))}#blog` }
          : route.id === 'projet'
            ? {
                '@type': 'ItemList',
                itemListElement: content.projects.map((item, index) => ({
                  '@type': 'ListItem',
                  position: index + 1,
                  url: absoluteUrl(withLocalePath(`/projet/${item.slug}`, locale)),
                  name: item.title,
                })),
              }
            : route.id === 'contact'
              ? {
                  '@type': 'ContactPoint',
                  contactType: 'professional',
                  email: SITE_EMAIL,
                  availableLanguage: LANGUAGES.map((item) => item.locale),
                }
              : { '@id': `${SITE_URL}/#person` },
  };

  // FAQPage must be a separate node: Google validates `mainEntity` against the
  // page type. A ProfilePage expects a Person; a FAQPage expects Questions.
  const faqPage = faqs
    ? {
        '@type': 'FAQPage',
        '@id': `${canonical}#faq`,
        url: canonical,
        name: content.faq.title,
        description: content.faq.subtitle,
        inLanguage: language.locale,
        isPartOf: { '@id': `${canonical}#webpage` },
        about: { '@id': `${SITE_URL}/#person` },
        mainEntity: faqs,
      }
    : null;

  const graph = prune([
    person,
    organization,
    website,
    webPage,
    faqPage,
    breadcrumb,
    blog,
    app,
    article,
  ]);

  return {
    title,
    description,
    canonical,
    alternates,
    robots,
    keywords,
    locale: language.locale,
    ogLocale: ogLocale(locale),
    alternateLocales: LANGUAGES.filter((item) => item.code !== locale).map((item) =>
      ogLocale(item.code),
    ),
    type: ogType,
    image: {
      url: imageUrl,
      width: image.width,
      height: image.height,
      type: image.type,
      alt: image.alt,
    },
    publishedTime,
    modifiedTime,
    section: post?.theme,
    jsonLd: {
      '@context': 'https://schema.org',
      '@graph': graph,
    },
  };
}
