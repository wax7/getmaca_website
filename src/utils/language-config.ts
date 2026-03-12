/**
 * Single source of truth for all language/locale configuration.
 * Used by routes, sitemap, DocumentHead, and translations.
 *
 * All codes are BCP-47 / ISO 639 compliant:
 *   en  – English (ISO 639-1)
 *   de  – German (ISO 639-1)
 *   fr  – French (ISO 639-1)
 *   es  – Spanish (ISO 639-1)
 *   it  – Italian (ISO 639-1)
 *   ja  – Japanese (ISO 639-1)
 *   zh-Hans – Chinese Simplified (BCP-47 script subtag)
 *   zh-Hant – Chinese Traditional (BCP-47 script subtag)
 *   ar  – Arabic (ISO 639-1)
 *   ru  – Russian (ISO 639-1)
 *   nl  – Dutch (ISO 639-1)
 *   tr  – Turkish (ISO 639-1)
 *   sv  – Swedish (ISO 639-1)
 *   da  – Danish (ISO 639-1)
 *   ko  – Korean (ISO 639-1)
 *   nb  – Norwegian Bokmal (ISO 639-1, preferred over macrolanguage "no")
 */

import type { Language } from '../locales/translations';

// ── Canonical language list ─────────────────────────────────────────────────
export const SUPPORTED_LANGUAGES: readonly Language[] = [
  'en', 'de', 'fr', 'es', 'it', 'ja',
  'zh-Hans', 'zh-Hant',
  'ar', 'ru', 'nl', 'tr', 'sv', 'da', 'ko', 'nb',
] as const;

export const DEFAULT_LANGUAGE: Language = 'en';

export const RTL_LANGUAGES: readonly Language[] = ['ar'] as const;

// ── BCP-47 to og:locale mapping ─────────────────────────────────────────────
export const OG_LOCALE_MAP: Record<Language, string> = {
  en: 'en_US',
  de: 'de_DE',
  fr: 'fr_FR',
  es: 'es_ES',
  it: 'it_IT',
  ja: 'ja_JP',
  'zh-Hans': 'zh_CN',
  'zh-Hant': 'zh_TW',
  ar: 'ar_SA',
  ru: 'ru_RU',
  nl: 'nl_NL',
  tr: 'tr_TR',
  sv: 'sv_SE',
  da: 'da_DK',
  ko: 'ko_KR',
  nb: 'nb_NO',
};

// ── Helpers ─────────────────────────────────────────────────────────────────
export function isValidLanguage(code: string): code is Language {
  return (SUPPORTED_LANGUAGES as readonly string[]).includes(code);
}

export function isRtl(lang: Language): boolean {
  return (RTL_LANGUAGES as readonly string[]).includes(lang);
}

export function resolveLanguage(code: string | undefined): Language {
  if (code && isValidLanguage(code)) return code;
  return DEFAULT_LANGUAGE;
}

/**
 * Build a regex fragment that matches any supported language code.
 * Useful for path matching in routes.
 */
export const LANG_REGEX_PATTERN = SUPPORTED_LANGUAGES
  .map(l => l.replace('-', '\\-'))
  .join('|');
