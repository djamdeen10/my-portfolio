const browserEnv =
  typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env : {};
const nodeEnv = typeof process !== 'undefined' && process.env ? process.env : {};

// Set VITE_SITE_URL (or SITE_URL at build time) when the canonical domain
// changes. Cloudflare Pages serves this build from https://djamdeen.com.
export const SITE_URL = (
  browserEnv.VITE_SITE_URL ||
  nodeEnv.VITE_SITE_URL ||
  nodeEnv.SITE_URL ||
  'https://djamdeen.com'
).replace(/\/+$/, '');

export const SITE_NAME = 'Djam Deen';
export const SITE_HANDLE = 'djamdeen10';
export const SITE_EMAIL = 'djamdeen10@gmail.com';
export const SITE_LOCATION = {
  city: 'Cotonou',
  country: 'BJ',
  countryName: 'Benin',
};

export const SOCIAL_URLS = [
  'https://github.com/djamdeen10',
  'https://x.com/djamdeen10',
  'https://www.facebook.com/djamdeen10',
];

export const DEFAULT_OG_IMAGE = {
  src: '/og/djam-deen.png',
  width: 1200,
  height: 630,
  type: 'image/png',
  alt: 'Djam Deen — Backend Developer & AI-Assisted Product Builder',
};

export const RSS_PATH = '/rss.xml';
export const MANIFEST_PATH = '/site.webmanifest';
