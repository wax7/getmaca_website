import { useEffect } from 'react';

/**
 * SitemapXml – Serves raw XML sitemap content.
 *
 * Uses document.open/write/close to replace the entire document with raw XML,
 * making it machine-readable for search engine crawlers.
 *
 * In production, configure your hosting to serve /public/sitemap.xml as a
 * static file BEFORE the SPA fallback for optimal performance.
 */

const LANGS = ['en', 'de', 'fr', 'es', 'it', 'pt', 'ja', 'zh'] as const;
const BASE = 'https://getmaca.de';
const LASTMOD = '2026-02-26';

function buildHreflangLinks(path: string): string {
  return (
    LANGS.map(
      (l) =>
        `    <xhtml:link rel="alternate" hreflang="${l}" href="${BASE}/${l}${path}"/>`,
    ).join('\n') +
    `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}/en${path}"/>`
  );
}

function buildUrlBlock(
  path: string,
  changefreq: string,
  priority: string,
): string {
  return LANGS.map((lang) => {
    const loc = `${BASE}/${lang}${path}`;
    return `  <url>
    <loc>${loc}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${buildHreflangLinks(path)}
  </url>`;
  }).join('\n');
}

function buildSitemapXml(): string {
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>

  <!-- HOME PAGES (priority 1.0) -->
${buildUrlBlock('', 'weekly', '1.0')}

  <!-- FAQ PAGES (priority 0.8) -->
${buildUrlBlock('/faq', 'monthly', '0.8')}

  <!-- PRIVACY PAGES (priority 0.6) -->
${buildUrlBlock('/privacy', 'yearly', '0.6')}

  <!-- TERMS PAGES (priority 0.5) -->
${buildUrlBlock('/terms', 'yearly', '0.5')}

  <!-- IMPRINT PAGES (priority 0.4) -->
${buildUrlBlock('/imprint', 'yearly', '0.4')}

</urlset>`;
}

export function SitemapXml() {
  const xmlContent = buildSitemapXml();

  useEffect(() => {
    try {
      // Replace entire document with raw XML content
      document.open('text/xml');
      document.write(xmlContent);
      document.close();
    } catch {
      // If document.write fails (CSP, sandbox, etc.), the fallback <pre> below is shown
    }
  }, [xmlContent]);

  // Fallback: if document.write fails, show raw XML as plain text
  return (
    <pre
      style={{
        fontFamily: 'monospace',
        whiteSpace: 'pre',
        padding: '1rem',
        margin: 0,
        backgroundColor: '#fff',
        color: '#000',
      }}
    >
      {xmlContent}
    </pre>
  );
}
