import { SITE_URL } from './site.js';

function metaElements(attribute, key) {
  return [...document.head.querySelectorAll(`meta[${attribute}]`)].filter(
    (element) => element.getAttribute(attribute) === key,
  );
}

function setMeta(attribute, key, value) {
  if (value === undefined || value === null || value === '') return;
  const elements = metaElements(attribute, key);
  const element = elements.shift() ?? document.createElement('meta');
  element.setAttribute(attribute, key);
  element.setAttribute('content', String(value));
  if (!element.parentNode) document.head.appendChild(element);
  // Drop accidental duplicates left by an older shell or document.
  elements.forEach((duplicate) => duplicate.remove());
}

function setLink(rel, href, attributes = {}) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
  for (const [name, value] of Object.entries(attributes)) {
    if (value === undefined || value === null || value === '') element.removeAttribute(name);
    else element.setAttribute(name, String(value));
  }
}

function setJsonLd(jsonLd) {
  let script = document.getElementById('seo-jsonld');
  if (!script) {
    script = document.createElement('script');
    script.id = 'seo-jsonld';
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(jsonLd);
}

/**
 * Keeps the document head in sync with the active route and language. Static
 * shells already contain the same tags for crawlers; this function updates
 * them in place (no duplicate canonical/hreflang/OG tags) when the SPA
 * navigates or changes language.
 */
export function applySeo(seo) {
  if (typeof document === 'undefined') return;

  document.title = seo.title;

  setMeta('name', 'description', seo.description);
  setMeta('name', 'robots', seo.robots);
  setMeta('name', 'author', 'Djam Deen');
  setMeta('name', 'keywords', seo.keywords.join(', '));

  setLink('canonical', seo.canonical);

  // Language alternates are replaced as a set: stale ones are worse than none.
  document.head
    .querySelectorAll('link[rel="alternate"][hreflang]')
    .forEach((link) => link.remove());
  for (const alternate of seo.alternates) {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.hreflang = alternate.hreflang;
    link.href = alternate.href;
    link.setAttribute('data-seo-hreflang', '');
    document.head.appendChild(link);
  }

  setMeta('property', 'og:type', seo.type);
  setMeta('property', 'og:title', seo.title);
  setMeta('property', 'og:description', seo.description);
  setMeta('property', 'og:url', seo.canonical);
  setMeta('property', 'og:site_name', 'Djam Deen');
  setMeta('property', 'og:locale', seo.ogLocale);
  document.head
    .querySelectorAll('meta[property="og:locale:alternate"]')
    .forEach((meta) => meta.remove());
  for (const alternate of seo.alternateLocales) {
    const meta = document.createElement('meta');
    meta.setAttribute('property', 'og:locale:alternate');
    meta.setAttribute('content', alternate);
    document.head.appendChild(meta);
  }

  setMeta('property', 'og:image', seo.image.url);
  setMeta('property', 'og:image:secure_url', seo.image.url);
  setMeta('property', 'og:image:type', seo.image.type);
  setMeta('property', 'og:image:width', seo.image.width);
  setMeta('property', 'og:image:height', seo.image.height);
  setMeta('property', 'og:image:alt', seo.image.alt);

  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', seo.title);
  setMeta('name', 'twitter:description', seo.description);
  setMeta('name', 'twitter:image', seo.image.url);
  setMeta('name', 'twitter:image:alt', seo.image.alt);
  setMeta('name', 'twitter:site', '@djamdeen10');
  setMeta('name', 'twitter:creator', '@djamdeen10');

  // Article metadata is page-specific; remove the previous article's values.
  document.head
    .querySelectorAll('meta[property^="article:"]')
    .forEach((meta) => meta.remove());
  if (seo.publishedTime) {
    setMeta('property', 'article:published_time', seo.publishedTime);
    setMeta('property', 'article:modified_time', seo.modifiedTime);
    setMeta('property', 'article:section', seo.section);
    setMeta('property', 'article:author', `${SITE_URL}/`);
    for (const tag of seo.keywords.slice(0, 6)) {
      const meta = document.createElement('meta');
      meta.setAttribute('property', 'article:tag');
      meta.setAttribute('content', tag);
      document.head.appendChild(meta);
    }
  }

  setJsonLd(seo.jsonLd);
}
