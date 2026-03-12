/**
 * set-hreflang-tags.ts
 *
 * Extracted hreflang DOM manipulation to bypass CDN module cache issues
 * and avoid backslash-escaping problems in DocumentHead.tsx edits.
 *
 * BCP-47 validated language list is hardcoded here as single source of truth
 * for hreflang output – independent of any cached SUPPORTED_LANGUAGES module.
 */

const BASE_URL = 'https://getmaca.de';

// Hardcoded BCP-47 validated hreflang codes (must match SUPPORTED_LANGUAGES)
const VALID_HREFLANGS = [
  'en', 'de', 'fr', 'es', 'it', 'ja',
  'zh-Hans', 'zh-Hant',
  'ar', 'ru', 'nl', 'tr', 'sv', 'da', 'ko', 'nb',
] as const;

/**
 * Strips the language prefix from a pathname.
 * e.g. "/de/guide" → "/guide", "/zh-Hans/faq" → "/faq", "/en" → ""
 */
function stripLangPrefix(pathname: string): string {
  const pattern = VALID_HREFLANGS.join('|');
  return pathname.replace(new RegExp('^/(' + pattern + ')(?=/|$)'), '');
}

/**
 * Sets all hreflang <link> tags in <head>, including x-default.
 * Removes any previously set hreflang links first.
 */
export function setHreflangTags(currentPath: string): void {
  const pathWithoutLang = stripLangPrefix(currentPath);

  // Remove old hreflang links
  document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());

  // Add one <link rel="alternate" hreflang="..."> per language
  VALID_HREFLANGS.forEach(hl => {
    const link = document.createElement('link');
    link.rel = 'alternate';
    link.setAttribute('hreflang', hl);
    link.href = `${BASE_URL}/${hl}${pathWithoutLang}`;
    document.head.appendChild(link);
  });

  // x-default points to English
  const xDefault = document.createElement('link');
  xDefault.rel = 'alternate';
  xDefault.setAttribute('hreflang', 'x-default');
  xDefault.href = `${BASE_URL}/en${pathWithoutLang}`;
  document.head.appendChild(xDefault);
}

/** Expose the validated languages for og:locale:alternate etc. */
export const HREFLANG_LANGUAGES = VALID_HREFLANGS;
