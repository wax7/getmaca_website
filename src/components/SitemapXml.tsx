import { useMemo } from 'react';

/**
 * SitemapXml – SPA fallback for /sitemap.xml
 *
 * ## Why this component exists
 *
 * In a client-side SPA, the server always returns index.html for ALL routes.
 * Without this React Router route, the path /sitemap.xml would be caught by
 * the /:lang wildcard route (treating "sitemap.xml" as a language code) and
 * redirect to the homepage.
 *
 * ## How sitemap.xml MUST be served in production
 *
 * Crawlers require:
 *  - HTTP 200 response
 *  - Content-Type: application/xml (or text/xml)
 *  - Raw XML body with no HTML wrapper
 *
 * JavaScript CANNOT set HTTP Content-Type headers. document.open('text/xml')
 * is ignored by modern browsers (MDN: "type parameter is unused").
 * Therefore, the ONLY way to serve a proper sitemap is via server config:
 *
 *  Netlify:    /public/_redirects → /sitemap.xml  /sitemap.xml  200
 *  Vercel:     vercel.json rewrites (static files are served automatically)
 *  Cloudflare: _routes.json to exclude /sitemap.xml from SPA fallback
 *
 * The authoritative sitemap lives at /public/sitemap.xml and will be served
 * correctly by any properly configured static hosting.
 *
 * ## What this component does
 *
 * It renders the raw XML as a <pre> block so that:
 *  1. /sitemap.xml doesn't get hijacked by /:lang
 *  2. Developers can visually verify the sitemap content
 *  3. The XML text is present in the DOM (Googlebot can parse it as last resort)
 */

const LANGS = ['en', 'de', 'fr', 'es', 'it', 'ja', 'zh-Hans', 'zh-Hant', 'ar', 'ru', 'nl', 'tr', 'sv', 'da', 'ko', 'nb'] as const;
const BASE = 'https://getmaca.de';
const LASTMOD = '2026-03-11';

interface PageDef {
  path: string;
  changefreq: string;
  priority: string;
  comment: string;
}

const PAGES: PageDef[] = [
  { path: '', changefreq: 'weekly', priority: '1.0', comment: 'HOME PAGES (priority 1.0)' },
  { path: '/guide', changefreq: 'monthly', priority: '0.9', comment: 'GUIDE PAGES (priority 0.9)' },
  { path: '/faq', changefreq: 'monthly', priority: '0.8', comment: 'FAQ PAGES (priority 0.8)' },
  { path: '/troubleshooting', changefreq: 'monthly', priority: '0.7', comment: 'TROUBLESHOOTING PAGES (priority 0.7)' },
  { path: '/privacy', changefreq: 'yearly', priority: '0.6', comment: 'PRIVACY PAGES (priority 0.6)' },
  { path: '/terms', changefreq: 'yearly', priority: '0.6', comment: 'TERMS PAGES (priority 0.6)' },
  { path: '/imprint', changefreq: 'yearly', priority: '0.5', comment: 'IMPRINT PAGES (priority 0.5)' },
];

// History is disallowed in robots.txt, so it's excluded from the sitemap
const STATIC_PAGES: PageDef[] = [];

function buildHreflangLinks(path: string): string {
  return (
    LANGS.map(
      (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${BASE}/${l}${path}"/>`,
    ).join('\n') +
    `\n    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE}/en${path}"/>`
  );
}

function buildUrlEntries(page: PageDef): string {
  return LANGS.map((lang) => `  <url>
    <loc>${BASE}/${lang}${page.path}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
${buildHreflangLinks(page.path)}
  </url>`).join('\n');
}

function buildStaticUrlEntries(page: PageDef): string {
  return `  <url>
    <loc>${BASE}${page.path}</loc>
    <lastmod>${LASTMOD}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
}

function buildSitemapXml(): string {
  const sections = PAGES.map(
    (page) => `\n  <!-- ${page.comment} -->\n\n${buildUrlEntries(page)}`,
  ).join('\n');

  const staticSections = STATIC_PAGES.map(
    (page) => `\n  <!-- ${page.comment} -->\n\n${buildStaticUrlEntries(page)}`,
  ).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml"
>${sections}

${staticSections}

</urlset>`;
}

export function SitemapXml() {
  const xmlContent = useMemo(() => buildSitemapXml(), []);

  const handleDownload = () => {
    const blob = new Blob([xmlContent], { type: 'application/xml; charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    // Revoke after a short delay so the download can start
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  return (
    <div
      style={{
        fontFamily: 'ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, monospace',
        backgroundColor: '#0f172a',
        color: '#e2e8f0',
        minHeight: '100vh',
        padding: '1rem',
      }}
    >
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem',
            marginBottom: '1.5rem',
            paddingBottom: '1rem',
            borderBottom: '1px solid #334155',
          }}
        >
          <h1 style={{ fontSize: '1.25rem', margin: 0, color: '#60a5fa' }}>
            sitemap.xml
          </h1>
          <button
            onClick={handleDownload}
            style={{
              padding: '0.5rem 1.25rem',
              backgroundColor: '#3b82f6',
              color: '#fff',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              fontSize: '0.875rem',
              fontWeight: 600,
            }}
          >
            Download sitemap.xml
          </button>
        </div>

        {/* Production notice */}
        <div
          style={{
            backgroundColor: '#1e293b',
            border: '1px solid #334155',
            borderRadius: '0.5rem',
            padding: '0.75rem 1rem',
            marginBottom: '1.5rem',
            fontSize: '0.8125rem',
            color: '#94a3b8',
            lineHeight: 1.6,
          }}
        >
          <strong style={{ color: '#fbbf24' }}>SPA-Fallback-Ansicht</strong> — Dies
          ist eine visuelle Vorschau. In einer SPA kann JavaScript den HTTP{' '}
          <code style={{ color: '#60a5fa' }}>Content-Type</code> Header nicht auf{' '}
          <code style={{ color: '#60a5fa' }}>application/xml</code> setzen.
          <br />
          <strong style={{ color: '#34d399' }}>Produktion:</strong> Dein Hosting muss{' '}
          <code style={{ color: '#60a5fa' }}>/public/sitemap.xml</code> als statische
          Datei <em>vor</em> dem SPA-Fallback ausliefern.
          Auf Netlify, Vercel und Cloudflare Pages passiert das automatisch.
        </div>

        {/* Raw XML content */}
        <pre
          style={{
            backgroundColor: '#1e293b',
            border: '1px solid #334155',
            borderRadius: '0.5rem',
            padding: '1rem',
            overflow: 'auto',
            fontSize: '0.75rem',
            lineHeight: 1.7,
            whiteSpace: 'pre',
            color: '#cbd5e1',
          }}
        >
          {xmlContent}
        </pre>

        {/* Stats */}
        <div
          style={{
            marginTop: '1rem',
            fontSize: '0.75rem',
            color: '#64748b',
          }}
        >
          {LANGS.length} Sprachen &times; {PAGES.length} Seitentypen ={' '}
          {LANGS.length * PAGES.length} URLs + {STATIC_PAGES.length} statische ={' '}
          {LANGS.length * PAGES.length + STATIC_PAGES.length} URLs gesamt | Alle
          lokalisierten URLs mit bidirektionalen hreflang + x-default
        </div>
      </div>
    </div>
  );
}