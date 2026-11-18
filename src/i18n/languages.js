// The eight languages supported by the portfolio. `locale` is the BCP-47 tag
// used for Intl formatting, `dir` drives the document direction.
export const LANGUAGES = [
  { code: 'en', locale: 'en-US', label: 'English', native: 'English', dir: 'ltr' },
  { code: 'fr', locale: 'fr-FR', label: 'Français', native: 'Français', dir: 'ltr' },
  { code: 'es', locale: 'es-ES', label: 'Español', native: 'Español', dir: 'ltr' },
  { code: 'ar', locale: 'ar', label: 'العربية', native: 'العربية', dir: 'rtl' },
  { code: 'pt', locale: 'pt-PT', label: 'Português', native: 'Português', dir: 'ltr' },
  { code: 'zh', locale: 'zh-CN', label: '简体中文', native: '简体中文', dir: 'ltr' },
  { code: 'ja', locale: 'ja-JP', label: '日本語', native: '日本語', dir: 'ltr' },
  { code: 'ru', locale: 'ru-RU', label: 'Русский', native: 'Русский', dir: 'ltr' },
];

export const DEFAULT_LANGUAGE = 'en';

export const LANGUAGE_CODES = LANGUAGES.map((language) => language.code);
export const LANGUAGE_BY_CODE = new Map(LANGUAGES.map((language) => [language.code, language]));

export function isLanguageCode(value) {
  return LANGUAGE_BY_CODE.has(value);
}

export function getLanguage(code) {
  return LANGUAGE_BY_CODE.get(code) ?? LANGUAGE_BY_CODE.get(DEFAULT_LANGUAGE);
}

// Maps a BCP-47 browser tag (`fr-CA`, `pt-BR`, `zh-Hant`, …) to one of the
// eight supported languages, or null when there is no sensible match.
export function languageFromBrowserTag(tag) {
  if (typeof tag !== 'string' || tag.trim() === '') return null;

  const normalized = tag.trim().toLowerCase().replace('_', '-');
  const base = normalized.split('-')[0];
  if (isLanguageCode(base)) return base;

  // A few common aliases that do not match one of our primary subtags.
  if (normalized.startsWith('zh')) return 'zh';
  if (normalized.startsWith('pt')) return 'pt';
  if (normalized.startsWith('es')) return 'es';
  if (normalized.startsWith('ar')) return 'ar';
  if (normalized.startsWith('ru')) return 'ru';
  if (normalized.startsWith('ja')) return 'ja';
  if (normalized.startsWith('fr')) return 'fr';
  if (normalized.startsWith('en')) return 'en';

  return null;
}

export function browserLanguage() {
  if (typeof navigator === 'undefined') return null;

  const candidates = [
    ...(Array.isArray(navigator.languages) ? navigator.languages : []),
    navigator.language,
  ];

  for (const candidate of candidates) {
    const language = languageFromBrowserTag(candidate);
    if (language) return language;
  }

  return null;
}
