import { usePageContext } from 'vike-react/usePageContext';
import {
  DEFAULT_LANGUAGE,
  OG_LOCALE_MAP,
  SUPPORTED_LANGUAGES,
  isRtl,
  resolveLanguage,
} from '../src/utils/language-config';

const BASE_URL = 'https://getmaca.de';

function toCanonicalPath(pathname: string, lang: string): string {
  const normalized = pathname.replace(/\/+$/, '') || '/';
  if (normalized === '/') return `/${DEFAULT_LANGUAGE}`;

  // Keep locale root paths canonical, rewrite everything else to locale root.
  if (SUPPORTED_LANGUAGES.some((candidate) => normalized === `/${candidate}`)) {
    return normalized;
  }

  return `/${lang}`;
}

export function Head() {
  const pageContext = usePageContext();
  const pathname = pageContext.urlPathname || '/';
  const lang = resolveLanguage(pathname.split('/').filter(Boolean)[0]);
  const canonicalPath = toCanonicalPath(pathname, lang);
  const canonical = `${BASE_URL}${canonicalPath}`;

  return (
    <>
      <link rel="canonical" href={canonical} />

      {SUPPORTED_LANGUAGES.map((locale) => (
        <link key={locale} rel="alternate" hrefLang={locale} href={`${BASE_URL}/${locale}`} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}/${DEFAULT_LANGUAGE}`} />

      <meta httpEquiv="Content-Language" content={lang} />
      <meta name="direction" content={isRtl(lang) ? 'rtl' : 'ltr'} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content={OG_LOCALE_MAP[lang]} />
    </>
  );
}
