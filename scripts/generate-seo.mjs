import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { getContent } from '../src/data/content.js';
import { LANGUAGES, getLanguage } from '../src/i18n/languages.js';
import { NOT_FOUND_ROUTE, ROUTES } from '../src/lib/routes.js';
import { withLocalePath } from '../src/lib/localePath.js';
import { buildPageSeo, absoluteUrl, localeTag } from '../src/lib/seo.js';
import { DEFAULT_OG_IMAGE, SITE_URL } from '../src/lib/site.js';

const ROOT = fileURLToPath(new URL('..', import.meta.url));
const DIST = join(ROOT, 'dist');
const TODAY = new Date().toISOString().slice(0, 10);
const BUILD_DATE = TODAY;

const translations = Object.fromEntries(
  await Promise.all(
    LANGUAGES.map(async ({ code }) => {
      const module = await import(new URL(`../src/i18n/translations/${code}.js`, import.meta.url));
      return [code, module.default];
    }),
  ),
);

const contentByLocale = Object.fromEntries(
  LANGUAGES.map(({ code }) => [code, getContent(code, translations[code])]),
);

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]);
}

function escapeXml(value) {
  return escapeHtml(value);
}

function localized(locale, path) {
  return withLocalePath(path, locale);
}

function absolute(locale, path) {
  return absoluteUrl(localized(locale, path));
}

function pageRoutes(content) {
  const routes = [
    ROUTES[0],
    ROUTES[1],
    ...content.projects.map((project) => ({
      id: 'projet-detail',
      path: `/projet/${project.slug}`,
      slug: project.slug,
      labelKey: 'nav.projet',
      titleKey: 'routeTitles.projetDetail',
    })),
    ROUTES[2],
    ROUTES[3],
    ...content.blogPosts.map((post) => ({
      id: 'blog-detail',
      path: `/blog/${post.slug}`,
      slug: post.slug,
      labelKey: 'nav.blog',
      titleKey: 'routeTitles.blogDetail',
    })),
  ];

  return routes;
}

const routes = pageRoutes(contentByLocale.en);

function routeContent(locale, route) {
  const content = contentByLocale[locale];
  const project =
    route.id === 'projet-detail'
      ? content.projects.find((item) => item.slug === route.slug)
      : null;
  const post =
    route.id === 'blog-detail'
      ? content.blogPosts.find((item) => item.slug === route.slug)
      : null;
  return { content, project, post };
}

function metaTag(attribute, key, value) {
  if (value === undefined || value === null || value === '') return '';
  return `<meta ${attribute}="${escapeHtml(key)}" content="${escapeHtml(value)}" />`;
}

function linkTag(rel, href, attributes = {}) {
  const extra = Object.entries(attributes)
    .filter(([, value]) => value !== undefined && value !== null && value !== '')
    .map(([key, value]) => `${key}="${escapeHtml(value)}"`)
    .join(' ');
  return `<link rel="${escapeHtml(rel)}" href="${escapeHtml(href)}"${extra ? ` ${extra}` : ''} />`;
}

function renderMeta(seo) {
  const tags = [
    metaTag('name', 'description', seo.description),
    metaTag('name', 'author', 'Djam Deen'),
    metaTag('name', 'keywords', seo.keywords.join(', ')),
    metaTag('name', 'robots', seo.robots),
    metaTag('name', 'color-scheme', 'light dark'),
    linkTag('canonical', seo.canonical),
    ...seo.alternates.map((alternate) =>
      linkTag('alternate', alternate.href, { hreflang: alternate.hreflang }),
    ),
    metaTag('property', 'og:type', seo.type),
    metaTag('property', 'og:title', seo.title),
    metaTag('property', 'og:description', seo.description),
    metaTag('property', 'og:url', seo.canonical),
    metaTag('property', 'og:site_name', 'Djam Deen'),
    metaTag('property', 'og:locale', seo.ogLocale),
    ...seo.alternateLocales.map((locale) =>
      metaTag('property', 'og:locale:alternate', locale),
    ),
    metaTag('property', 'og:image', seo.image.url),
    metaTag('property', 'og:image:secure_url', seo.image.url),
    metaTag('property', 'og:image:type', seo.image.type),
    metaTag('property', 'og:image:width', seo.image.width),
    metaTag('property', 'og:image:height', seo.image.height),
    metaTag('property', 'og:image:alt', seo.image.alt),
    metaTag('name', 'twitter:card', 'summary_large_image'),
    metaTag('name', 'twitter:title', seo.title),
    metaTag('name', 'twitter:description', seo.description),
    metaTag('name', 'twitter:image', seo.image.url),
    metaTag('name', 'twitter:image:alt', seo.image.alt),
    metaTag('name', 'twitter:site', '@djamdeen10'),
    metaTag('name', 'twitter:creator', '@djamdeen10'),
  ];

  if (seo.publishedTime) {
    tags.push(metaTag('property', 'article:published_time', seo.publishedTime));
    tags.push(metaTag('property', 'article:modified_time', seo.modifiedTime));
    tags.push(metaTag('property', 'article:section', seo.section));
    tags.push(metaTag('property', 'article:author', `${SITE_URL}/`));
    for (const keyword of seo.keywords.slice(0, 6)) {
      tags.push(metaTag('property', 'article:tag', keyword));
    }
  }

  return tags.filter(Boolean).join('\n    ');
}

function renderJsonLd(seo) {
  const json = JSON.stringify(seo.jsonLd).replace(/</g, '\\u003c');
  return `<script id="seo-jsonld" type="application/ld+json">${json}</script>`;
}

function inlineMarkdown(text) {
  return String(text ?? '')
    .split(/(\*\*[^*]+\*\*)/g)
    .map((part) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return `<strong>${escapeHtml(part.slice(2, -2))}</strong>`;
      }
      return escapeHtml(part);
    })
    .join('');
}

function renderArticle(content) {
  return String(content ?? '')
    .split(/\n{2,}/)
    .map((block) => block.trim())
    .filter(Boolean)
    .map((block) =>
      block.startsWith('## ')
        ? `<h2>${escapeHtml(block.slice(3))}</h2>`
        : `<p>${inlineMarkdown(block)}</p>`,
    )
    .join('\n');
}

function introText(paragraph) {
  return Array.isArray(paragraph)
    ? paragraph.map((segment) => segment.text ?? '').join('')
    : String(paragraph ?? '');
}

function renderFaq(content, locale) {
  if (!content.faq?.items?.length || !['en', 'fr'].includes(locale)) return '';
  return `<h2>${escapeHtml(content.faq.title)}</h2>\n<p>${escapeHtml(
    content.faq.subtitle,
  )}</p>\n${content.faq.items
    .map(
      (item) =>
        `<h3>${escapeHtml(item.q)}</h3>\n<p>${escapeHtml(item.a)}</p>`,
    )
    .join('\n')}`;
}

function renderNoscript(locale, route, content, project, post) {
  const ui = content.ui;
  const profile = content.profile;
  const path = (value) => localized(locale, value);
  const home = `<a href="${path('/')}">${escapeHtml(profile.name)}</a>`;

  const header = `<p><strong>${home}</strong> · ${escapeHtml(profile.role)} · ${escapeHtml(
    profile.location,
  )}</p>`;

  let body = '';

  if (route.id === 'accueil') {
    body = `
      <h1>${escapeHtml(profile.name)} — ${escapeHtml(content.meta.role)}</h1>
      <p>${escapeHtml(content.meta.description)}</p>
      <h2>${escapeHtml(ui.intro.greeting)}</h2>
      ${content.ui.intro.paragraphs.map((paragraph) => `<p>${escapeHtml(introText(paragraph))}</p>`).join('\n')}
      <h2>${escapeHtml(ui.skills.title)}</h2>
      <p>${escapeHtml(content.projects.flatMap((item) => item.stack ?? []).join(' · '))}</p>
      <h2>${escapeHtml(ui.projects.title)}</h2>
      <ul>${content.projects
        .map(
          (item) =>
            `<li><a href="${path(`/projet/${item.slug}`)}">${escapeHtml(item.title)}</a> — ${escapeHtml(item.description)}</li>`,
        )
        .join('')}</ul>
      <h2>${escapeHtml(ui.blog.title)}</h2>
      <ul>${content.blogPosts
        .map(
          (item) =>
            `<li><a href="${path(`/blog/${item.slug}`)}">${escapeHtml(item.title)}</a> — ${escapeHtml(item.excerpt)}</li>`,
        )
        .join('')}</ul>
      ${renderFaq(content, locale)}
      <h2>${escapeHtml(ui.contact.title)}</h2>
      <p>${escapeHtml(ui.contact.subtitle)} <a href="mailto:${escapeHtml(profile.email)}">${escapeHtml(
        profile.email,
      )}</a></p>`;
  } else if (route.id === 'projet') {
    body = `
      <h1>${escapeHtml(ui.projects.title.replace(/\.$/, ''))}</h1>
      <p>${escapeHtml(ui.projects.subtitle)}</p>
      <ul>${content.projects
        .map(
          (item) =>
            `<li><h2><a href="${path(`/projet/${item.slug}`)}">${escapeHtml(item.title)}</a></h2>
             <p>${escapeHtml(item.description)}</p>
             <p>${escapeHtml((item.stack ?? []).join(' · '))}</p></li>`,
        )
        .join('')}</ul>`;
  } else if (route.id === 'projet-detail' && project) {
    body = `
      <p><a href="${path('/projet')}">${escapeHtml(ui.project.back)}</a></p>
      <h1>${escapeHtml(project.title)}</h1>
      <p>${escapeHtml(project.description)}</p>
      ${project.highlights?.length ? `<h2>${escapeHtml(ui.project.bricks)}</h2><dl>${project.highlights
        .map((item) => `<dt>${escapeHtml(item.label)}</dt><dd>${escapeHtml(item.value)}</dd>`)
        .join('')}</dl>` : ''}
      ${project.body?.length ? `<h2>${escapeHtml(ui.project.body)}</h2>${project.body.map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`).join('\n')}` : ''}
      <h2>${escapeHtml(ui.project.stack)}</h2>
      <p>${escapeHtml((project.stack ?? []).join(' · '))}</p>
      <p>${project.demo ? `<a href="${escapeHtml(project.demo)}">${escapeHtml(ui.project.view)}</a>` : ''}
      ${project.github ? ` · <a href="${escapeHtml(project.github)}">${escapeHtml(ui.project.source)}</a>` : ''}</p>`;
  } else if (route.id === 'contact') {
    body = `
      <h1>${escapeHtml(ui.contact.title)}</h1>
      <p>${escapeHtml(ui.contact.subtitle)}</p>
      <ul>
        <li>${escapeHtml(ui.contact.email)}: <a href="mailto:${escapeHtml(profile.email)}">${escapeHtml(profile.email)}</a></li>
        <li>${escapeHtml(ui.contact.x)}: <a href="${escapeHtml(profile.links.twitter)}">${escapeHtml(profile.links.twitter)}</a></li>
        <li>${escapeHtml(ui.contact.facebook)}: <a href="${escapeHtml(profile.links.facebook)}">${escapeHtml(profile.links.facebook)}</a></li>
        <li>${escapeHtml(ui.contact.github)}: <a href="${escapeHtml(profile.links.github)}">${escapeHtml(profile.links.github)}</a></li>
      </ul>`;
  } else if (route.id === 'blog') {
    const sorted = [...content.blogPosts].sort(
      (a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime(),
    );
    body = `
      <h1>${escapeHtml(ui.blog.title.replace(/\.$/, ''))}</h1>
      <p>${escapeHtml(ui.blog.subtitle)}</p>
      <ul>${sorted
        .map(
          (item) =>
            `<li><h2><a href="${path(`/blog/${item.slug}`)}">${escapeHtml(item.title)}</a></h2>
             <p>${escapeHtml(item.date)} · ${escapeHtml(item.readTime)}</p>
             <p>${escapeHtml(item.excerpt)}</p></li>`,
        )
        .join('')}</ul>`;
  } else if (route.id === 'blog-detail' && post) {
    body = `
      <p><a href="${path('/blog')}">${escapeHtml(ui.blog.back)}</a></p>
      <h1>${escapeHtml(post.title)}</h1>
      <p>${escapeHtml(post.theme)} · <time datetime="${escapeHtml(post.date)}">${escapeHtml(
        post.date,
      )}</time> · ${escapeHtml(post.readTime)}</p>
      ${post.content ? renderArticle(post.content) : `<p>${escapeHtml(ui.blog.preparing)}</p>`}
      <h2>${escapeHtml(profile.name)}</h2>
      <p>${escapeHtml(profile.role)} · ${escapeHtml(profile.location)}</p>
      <p><a href="${path('/blog')}">${escapeHtml(ui.blog.back)}</a> · <a href="${path('/contact')}">${escapeHtml(
        ui.nav.contact,
      )}</a></p>`;
  } else {
    body = `<h1>${escapeHtml(content.notFound?.title ?? 'Page not found.')}</h1><p>${escapeHtml(
      content.notFound?.text ?? 'This page does not exist or has moved.',
    )}</p><p><a href="${path('/')}">${escapeHtml(content.notFound?.home ?? 'Back home')}</a></p>`;
  }

  return `<main style="max-width:68ch;margin:2rem auto;padding:0 1.5rem;line-height:1.65;font-family:system-ui,sans-serif">${header}${body}</main>`;
}

function renderShell({ seo, locale, route, content, project, post, assets, themeScript }) {
  const language = getLanguage(locale);
  const noscript = renderNoscript(locale, route, content, project, post);
  const isNotFound = route.id === 'not-found';

  return `<!doctype html>
<html lang="${escapeHtml(language.locale)}" dir="${language.dir}" class="antialiased">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(seo.title)}</title>
    ${renderMeta(seo)}
    ${linkTag('manifest', '/site.webmanifest')}
    ${linkTag('alternate', '/rss.xml', { type: 'application/rss+xml', title: 'Djam Deen — Blog' })}
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <meta name="theme-color" content="#fafafa" />
    <link rel="preload" href="/fonts/geist-latin.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preload" href="/fonts/geist-mono-latin.woff2" as="font" type="font/woff2" crossorigin />
    <link rel="preconnect" href="https://flagcdn.com" />
    <link rel="preconnect" href="https://free.freeipapi.com" crossorigin />
    <script>${themeScript}</script>
    ${isNotFound ? '' : renderJsonLd(seo)}
    ${assets.stylesheet}
    ${assets.moduleScript}
  </head>
  <body class="font-sans min-h-dvh text-foreground">
    <div id="root"></div>
    <noscript>
      ${noscript}
    </noscript>
  </body>
</html>
`;
}

const builtHtml = readFileSync(join(DIST, 'index.html'), 'utf8');
const moduleMatch = builtHtml.match(/<script[^>]*type="module"[^>]*src="([^"]+)"[^>]*><\/script>/);
const stylesheetMatch = builtHtml.match(/<link[^>]*rel="stylesheet"[^>]*href="([^"]+)"[^>]*>/);

if (!moduleMatch || !stylesheetMatch) {
  throw new Error('Could not find the built JS/CSS entry in dist/index.html');
}

const assets = {
  moduleScript: `<script type="module" crossorigin src="${moduleMatch[1]}"></script>`,
  stylesheet: `<link rel="stylesheet" crossorigin href="${stylesheetMatch[1]}" />`,
};

const inlineScripts = [...builtHtml.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((match) => match[1]);
const themeScript = inlineScripts.find((script) => script.includes('app-theme')) ?? '';

if (!themeScript) {
  throw new Error('Could not find the theme bootstrap script in dist/index.html');
}

let shellCount = 0;

for (const locale of LANGUAGES.map((language) => language.code)) {
  const content = contentByLocale[locale];

  for (const route of routes) {
    const scoped = routeContent(locale, route);
    const seo = buildPageSeo({
      route,
      content,
      locale,
      project: scoped.project,
      post: scoped.post,
    });
    const shell = renderShell({
      seo,
      locale,
      route,
      content,
      project: scoped.project,
      post: scoped.post,
      assets,
      themeScript,
    });
    const pathname = localized(locale, route.path);
    const targets =
      pathname === '/'
        ? [join(DIST, 'index.html')]
        : [join(DIST, `${pathname}.html`), join(DIST, pathname, 'index.html')];
    for (const target of targets) {
      mkdirSync(dirname(target), { recursive: true });
      writeFileSync(target, shell, 'utf8');
      shellCount += 1;
    }
  }
}

// 404 shell: Cloudflare Pages serves dist/404.html for unknown paths.
const notFoundSeo = buildPageSeo({
  route: { ...NOT_FOUND_ROUTE, path: '/404' },
  content: contentByLocale.en,
  locale: 'en',
});
const notFoundShell = renderShell({
  seo: notFoundSeo,
  locale: 'en',
  route: { ...NOT_FOUND_ROUTE, path: '/404' },
  content: contentByLocale.en,
  assets,
  themeScript,
});
writeFileSync(join(DIST, '404.html'), notFoundShell, 'utf8');
shellCount += 1;

function lastmodFor(route) {
  if (route.id === 'blog-detail') {
    const post = contentByLocale.en.blogPosts.find((item) => item.slug === route.slug);
    const date = post?.date;
    return date && date <= TODAY ? date : BUILD_DATE;
  }
  return BUILD_DATE;
}

const sitemapUrls = [];
for (const route of routes) {
  const alternates = [
    ...LANGUAGES.map((language) => ({
      hreflang: language.locale,
      href: absolute(language.code, route.path),
    })),
    { hreflang: 'x-default', href: absolute('en', route.path) },
  ];
  const changefreq =
    route.id === 'accueil'
      ? 'weekly'
      : route.id === 'blog' || route.id === 'blog-detail'
        ? 'monthly'
        : 'yearly';
  const priority =
    route.id === 'accueil'
      ? '1.0'
      : route.id === 'projet' || route.id === 'blog'
        ? '0.8'
        : route.id === 'projet-detail' || route.id === 'blog-detail'
          ? '0.7'
          : '0.6';

  for (const language of LANGUAGES) {
    const loc = absolute(language.code, route.path);
    const links = alternates
      .map(
        (alternate) =>
          `    <xhtml:link rel="alternate" hreflang="${escapeXml(alternate.hreflang)}" href="${escapeXml(alternate.href)}" />`,
      )
      .join('\n');
    sitemapUrls.push(`  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${lastmodFor(route)}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${links}
  </url>`);
  }
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemapUrls.join('\n')}
</urlset>
`;
writeFileSync(join(DIST, 'sitemap.xml'), sitemap, 'utf8');

const aiBots = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-SearchBot',
  'Claude-User',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'GoogleOther',
  'Applebot-Extended',
  'CCBot',
  'Bytespider',
  'Amazonbot',
  'DuckAssistBot',
  'cohere-ai',
  'Meta-ExternalAgent',
  'meta-externalagent',
  'YouBot',
  'Diffbot',
  'MistralAI-User',
  'GrokBot',
];

const robots = `# Djam Deen — portfolio
# Crawlers are welcome, including AI search and answer engines.
# LLM index: ${SITE_URL}/llms.txt
# Full text:  ${SITE_URL}/llms-full.txt

User-agent: *
Allow: /

${aiBots.map((bot) => `User-agent: ${bot}\nAllow: /`).join('\n\n')}

Sitemap: ${SITE_URL}/sitemap.xml
`;
writeFileSync(join(DIST, 'robots.txt'), robots, 'utf8');

const en = contentByLocale.en;
const homeUrl = `${SITE_URL}/`;
const projectUrl = absolute('en', '/projet');
const blogUrl = absolute('en', '/blog');
const contactUrl = absolute('en', '/contact');

const llms = `# Djam Deen

> Djam Deen (Djamal ALIDOU M., djamdeen10) is a backend developer in Cotonou, Benin who builds products with AI. He creates APIs, web applications, AI-assisted products and open-source tools, and writes about the process.

Canonical site: ${homeUrl}
Last updated: ${BUILD_DATE}
Languages: English (/), French (/fr), Spanish (/es), Arabic (/ar), Portuguese (/pt), Chinese (/zh), Japanese (/ja), Russian (/ru).

## Profile

- [Home](${homeUrl}): backend developer who builds products with AI.
- [Projects](${projectUrl}): open-source products and technical work.
- [Blog](${blogUrl}): development notes, AI, AgentMob and behind-the-scenes stories.
- [Contact](${contactUrl}): email, X, Facebook and GitHub.

## Projects

${en.projects
  .map(
    (project) =>
      `- [${project.title}](${absolute('en', `/projet/${project.slug}`)}): ${project.description} Stack: ${(project.stack ?? []).join(', ')}.`,
  )
  .join('\n')}

## Articles

${[...en.blogPosts]
  .sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime())
  .map(
    (post) =>
      `- [${post.title}](${absolute('en', `/blog/${post.slug}`)}): ${post.excerpt} (${post.date})`,
  )
  .join('\n')}

## Contact

- Email: ${en.profile.email}
- X: ${en.profile.links.twitter}
- Facebook: ${en.profile.links.facebook}
- GitHub: ${en.profile.links.github}

## FAQ

${(en.faq?.items ?? [])
  .map((item) => `### ${item.q}\n${item.a}`)
  .join('\n\n')}

## Machine-readable

- [Sitemap](${SITE_URL}/sitemap.xml)
- [RSS feed](${SITE_URL}/rss.xml)
- [Full site text](${SITE_URL}/llms-full.txt)
`;
writeFileSync(join(DIST, 'llms.txt'), llms, 'utf8');

const fullText = `# Djam Deen — full site text

Canonical site: ${homeUrl}
Author: Djam Deen (Djamal ALIDOU M., djamdeen10)
Role: ${en.meta.role}
Location: Cotonou, Benin
Languages: English, French, Spanish, Arabic, Portuguese, Chinese, Japanese, Russian.
Last updated: ${BUILD_DATE}

---

## Home
URL: ${homeUrl}

${en.ui.intro.paragraphs.map((paragraph) => introText(paragraph)).join('\n\n')}

## Frequently asked questions

${(en.faq?.items ?? []).map((item) => `### ${item.q}\n${item.a}`).join('\n\n')}

---

## Projects
URL: ${projectUrl}

${en.projects
  .map(
    (project) => `### ${project.title}
URL: ${absolute('en', `/projet/${project.slug}`)}
${project.description}

${(project.body ?? []).join('\n\n')}

Stack: ${(project.stack ?? []).join(', ')}
Links: ${project.demo ?? ''}${project.github ? ` | ${project.github}` : ''}
`,
  )
  .join('\n')}

---

## Articles
URL: ${blogUrl}

${[...en.blogPosts]
  .sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime())
  .map(
    (post) => `### ${post.title}
URL: ${absolute('en', `/blog/${post.slug}`)}
Published: ${post.date}
Reading time: ${post.readTime}
Theme: ${post.theme}

${post.content ?? post.excerpt}
`,
  )
  .join('\n---\n\n')}

---

## Contact
URL: ${contactUrl}
Email: ${en.profile.email}
X: ${en.profile.links.twitter}
Facebook: ${en.profile.links.facebook}
GitHub: ${en.profile.links.github}
`;
writeFileSync(join(DIST, 'llms-full.txt'), fullText, 'utf8');

const rssItems = [...en.blogPosts]
  .sort((a, b) => new Date(b.date || 0).getTime() - new Date(a.date || 0).getTime())
  .map((post) => {
    const link = absolute('en', `/blog/${post.slug}`);
    const pubDate = new Date(`${post.date}T08:00:00Z`).toUTCString();
    return `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <pubDate>${pubDate}</pubDate>
      <category>${escapeXml(post.theme)}</category>
      <description>${escapeXml(post.excerpt)}</description>
    </item>`;
  })
  .join('\n');

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Djam Deen — Blog</title>
    <link>${blogUrl}</link>
    <description>${escapeXml(en.ui.blog.subtitle)}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${rssItems}
  </channel>
</rss>
`;
writeFileSync(join(DIST, 'rss.xml'), rss, 'utf8');

console.log(`SEO: ${shellCount} HTML shells, sitemap, robots, llms.txt, llms-full.txt and RSS generated.`);
console.log(`Canonical base: ${SITE_URL}`);
