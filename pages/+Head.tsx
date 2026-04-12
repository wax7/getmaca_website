import { usePageContext } from 'vike-react/usePageContext';
import {
  DEFAULT_LANGUAGE,
} from '../src/utils/language-config';
import { BASE_URL, getAlternateLinks, getRouteSeo } from './_seo/route-seo';

export function Head() {
  const pageContext = usePageContext();
  const pathname = pageContext.urlPathname || '/';
  const seo = getRouteSeo(pathname);
  const alternates = getAlternateLinks(pathname);
  const xDefaultHref = `${BASE_URL}/${DEFAULT_LANGUAGE}${seo.pageKey === 'home' ? '' : `/${seo.pageKey}`}`;

  return (
    <>
      {/* ── gtag.js + Consent Mode v2 are injected by scripts/inject-gtag.js ── */}

      {/* ── Dark mode (before paint) ── */}
      <script
        dangerouslySetInnerHTML={{
          __html:
            "(() => { try { const stored = localStorage.getItem('darkMode'); const isDark = stored === null ? window.matchMedia('(prefers-color-scheme: dark)').matches : stored === 'true'; document.documentElement.classList.toggle('dark', isDark); } catch {} })();",
        }}
      />

      <link rel="canonical" href={seo.canonicalUrl} />

      {alternates.map((alternate) => (
        <link key={alternate.lang} rel="alternate" hrefLang={alternate.lang} href={alternate.href} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={xDefaultHref} />

      <meta httpEquiv="Content-Language" content={seo.lang} />
      <meta name="direction" content={seo.direction} />
      <meta name="robots" content={seo.robots} />
      <meta property="og:url" content={seo.canonicalUrl} />
      <meta property="og:locale" content={seo.ogLocale} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
    </>
  );
}
