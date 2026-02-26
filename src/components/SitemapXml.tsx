import { useEffect } from 'react';

/**
 * SitemapXml – renders the sitemap as raw XML.
 *
 * In a client-side SPA, React Router intercepts `/sitemap.xml` before the
 * static file in `/public` can be served.  This component works around that
 * by replacing the entire document with the XML content so crawlers and
 * browsers receive a valid `application/xml` response.
 */

const BASE_URL = 'https://getmaca.de';
const LANGUAGES = ['en', 'de', 'fr', 'es', 'it', 'pt', 'ja', 'zh'] as const;
const LAST_MOD = '2026-02-26';

interface PageDef {
  path: string;        // e.g. '' (home), '/faq', '/privacy'
  changefreq: string;
  priority: string;
}

const PAGES: PageDef[] = [
  { path: '',          changefreq: 'weekly',  priority: '1.0' },
  { path: '/faq',      changefreq: 'monthly', priority: '0.8' },
  { path: '/privacy',  changefreq: 'yearly',  priority: '0.6' },
  { path: '/terms',    changefreq: 'yearly',  priority: '0.5' },
  { path: '/imprint',  changefreq: 'yearly',  priority: '0.4' },
];

function buildSitemap(): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset\n';
  xml += '  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '  xmlns:xhtml="http://www.w3.org/1999/xhtml"\n';
  xml += '>\n';

  for (const page of PAGES) {
    for (const lang of LANGUAGES) {
      xml += '  <url>\n';
      xml += `    <loc>${BASE_URL}/${lang}${page.path}</loc>\n`;
      xml += `    <lastmod>${LAST_MOD}</lastmod>\n`;
      xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
      xml += `    <priority>${page.priority}</priority>\n`;

      // hreflang alternates
      for (const altLang of LANGUAGES) {
        xml += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${BASE_URL}/${altLang}${page.path}"/>\n`;
      }
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/en${page.path}"/>\n`;

      xml += '  </url>\n';
    }
  }

  xml += '</urlset>\n';
  return xml;
}

export function SitemapXml() {
  useEffect(() => {
    // Replace the entire document with raw XML so crawlers see valid XML
    const xml = buildSitemap();

    // Strategy 1: Open a blob URL (preserves the /sitemap.xml path for the user)
    const blob = new Blob([xml], { type: 'application/xml; charset=utf-8' });
    const blobUrl = URL.createObjectURL(blob);
    window.location.replace(blobUrl);
  }, []);

  // Render a minimal fallback while the redirect happens
  return (
    <pre style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap', padding: '1rem' }}>
      {buildSitemap()}
    </pre>
  );
}
