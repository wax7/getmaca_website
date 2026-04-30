import { usePageContext } from 'vike-react/usePageContext';
import {
  DEFAULT_LANGUAGE,
  OG_LOCALE_MAP,
} from '../src/utils/language-config';
import { BASE_URL, getAlternateLinks, getRouteSeo } from './_seo/route-seo';
import { getBreadcrumbLabel, getHomeLabel } from './_seo/breadcrumb-labels';
import { FAQ_ITEMS } from './_seo/faq-content';

export function Head() {
  const pageContext = usePageContext();
  const pathname = pageContext.urlPathname || '/';
  const seo = getRouteSeo(pathname);
  const alternates = getAlternateLinks(pathname);
  const xDefaultHref = `${BASE_URL}/${DEFAULT_LANGUAGE}${seo.pageKey === 'home' ? '' : `/${seo.pageKey}`}`;

  // ── BreadcrumbList JSON-LD (every page) ─────────────────────────────────
  const homeUrl = `${BASE_URL}/${seo.lang}`;
  const breadcrumbItems: Array<{ '@type': 'ListItem'; position: number; name: string; item: string }> = [
    { '@type': 'ListItem', position: 1, name: getHomeLabel(seo.lang), item: homeUrl },
  ];
  if (seo.pageKey !== 'home') {
    breadcrumbItems.push({
      '@type': 'ListItem',
      position: 2,
      name: getBreadcrumbLabel(seo.pageKey, seo.lang),
      item: seo.canonicalUrl,
    });
  }
  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    '@id': `${seo.canonicalUrl}#breadcrumb`,
    itemListElement: breadcrumbItems,
  };

  // ── FAQPage JSON-LD (only on /faq, localized) ──────────────────────────
  const faqJsonLd = seo.pageKey === 'faq'
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: seo.lang,
        mainEntity: (FAQ_ITEMS[seo.lang] || FAQ_ITEMS.en).map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: { '@type': 'Answer', text: item.a },
        })),
      }
    : null;

  // ── WebPage JSON-LD (every page) ───────────────────────────────────────
  const webPageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${seo.canonicalUrl}#webpage`,
    url: seo.canonicalUrl,
    name: seo.title,
    description: seo.description,
    inLanguage: seo.lang,
    isPartOf: { '@id': `${BASE_URL}/#website` },
    about: { '@id': `${BASE_URL}/#software` },
    breadcrumb: { '@id': `${seo.canonicalUrl}#breadcrumb` },
  };

  // ── Organization JSON-LD (every page, identifies publisher + sameAs) ──
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BASE_URL}/#organization`,
    name: 'AMX Mediensysteme',
    url: BASE_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/og-image.png`,
      width: 1024,
      height: 1024,
    },
    sameAs: [
      'https://apps.apple.com/app/maca-master-audio-control/id6759258773',
      'https://discord.gg/hztjqAweUz',
    ],
  };

  return (
    <>
      {/* gtag.js + Consent Mode v2 are injected by scripts/inject-gtag.js */}

      {/* Dark mode (before paint) */}
      <script
        dangerouslySetInnerHTML={{
          __html:
            "(() => { try { const stored = localStorage.getItem('darkMode'); const isDark = stored === null ? window.matchMedia('(prefers-color-scheme: dark)').matches : stored === 'true'; document.documentElement.classList.toggle('dark', isDark); } catch {} })();",
        }}
      />

      {/* Primary SEO */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="robots" content={seo.robots} />
      <meta name="googlebot" content={seo.robots} />
      <meta name="bingbot" content={seo.robots} />
      <meta httpEquiv="Content-Language" content={seo.lang} />
      <meta name="direction" content={seo.direction} />
      <meta name="theme-color" content="#0f172a" />
      {/* Apple Smart App Banner – nur iOS Safari, kein UX-Impact für andere */}
      <meta name="apple-itunes-app" content="app-id=6759258773" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="MACA" />
      <meta name="format-detection" content="telephone=no" />

      {/* Canonical & Hreflang */}
      <link rel="canonical" href={seo.canonicalUrl} />
      {alternates.map((alternate) => (
        <link key={alternate.lang} rel="alternate" hrefLang={alternate.lang} href={alternate.href} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={xDefaultHref} />

      {/* Open Graph */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.canonicalUrl} />
      <meta property="og:locale" content={seo.ogLocale} />
      {/* og:locale:alternate für alle anderen Sprachen */}
      {Object.entries(OG_LOCALE_MAP)
        .filter(([lang]) => lang !== seo.lang)
        .map(([lang, ogLocale]) => (
          <meta key={`og-alt-${lang}`} property="og:locale:alternate" content={ogLocale as string} />
        ))}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="MACA – Master Audio Control" />
      <meta property="og:image" content={`${BASE_URL}/og-image.png`} />
      <meta property="og:image:width" content="1024" />
      <meta property="og:image:height" content="1024" />
      <meta property="og:image:alt" content="MACA – Master Audio Control App Icon" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={`${BASE_URL}/og-image.png`} />
      <meta name="twitter:image:alt" content="MACA – Master Audio Control App Icon" />

      {/* Favicons & PWA */}
      <link rel="icon" type="image/png" href="/og-image.png" />
      <link rel="apple-touch-icon" href="/og-image.png" />
      <link rel="manifest" href="/manifest.json" />
      <link rel="sitemap" type="application/xml" title="Sitemap" href={`${BASE_URL}/sitemap.xml`} />

      {/* Performance hints */}
      <link rel="dns-prefetch" href="https://apps.apple.com" />
      <link rel="preconnect" href="https://apps.apple.com" crossOrigin="anonymous" />
      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

      {/* JSON-LD: WebPage (always) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }}
      />

      {/* JSON-LD: BreadcrumbList (always) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* JSON-LD: Organization (always, includes sameAs) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />

      {/* JSON-LD: FAQPage (only on /faq, localized) */}
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
    </>
  );
}
