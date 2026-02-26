import { useMemo } from 'react';

/**
 * SitemapXml – Renders sitemap.xml content as a visual preview.
 *
 * In a client-side SPA, React Router intercepts `/sitemap.xml` before the
 * static file in `/public` can be served.
 *
 * For PRODUCTION: Configure your hosting (Netlify _redirects, Vercel rewrites,
 * or Cloudflare Pages _routes.json) to serve `/public/sitemap.xml` as a static
 * file at `/sitemap.xml` with Content-Type: application/xml BEFORE the SPA
 * fallback. Crawlers need raw XML, not this HTML preview.
 *
 * For PREVIEW / SPA fallback: This component displays the XML content as
 * formatted, readable text and offers a one-click XML download.
 */

const BASE_URL = 'https://getmaca.de';
const LANGUAGES = ['en', 'de', 'fr', 'es', 'it', 'pt', 'ja', 'zh'] as const;
const LAST_MOD = '2026-02-26';

interface PageDef {
  path: string;
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

function buildSitemapXml(): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset\n';
  xml += '  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '  xmlns:xhtml="http://www.w3.org/1999/xhtml"\n';
  xml += '>\n';

  for (const page of PAGES) {
    for (const lang of LANGUAGES) {
      xml += '\n  <url>\n';
      xml += `    <loc>${BASE_URL}/${lang}${page.path}</loc>\n`;
      xml += `    <lastmod>${LAST_MOD}</lastmod>\n`;
      xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
      xml += `    <priority>${page.priority}</priority>\n`;

      for (const altLang of LANGUAGES) {
        xml += `    <xhtml:link rel="alternate" hreflang="${altLang}" href="${BASE_URL}/${altLang}${page.path}"/>\n`;
      }
      xml += `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}/en${page.path}"/>\n`;
      xml += '  </url>\n';
    }
  }

  xml += '\n</urlset>\n';
  return xml;
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
    URL.revokeObjectURL(url);
  };

  return (
    <div style={{
      fontFamily: 'ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, Consolas, monospace',
      backgroundColor: '#0f172a',
      color: '#e2e8f0',
      minHeight: '100vh',
      padding: '1rem',
    }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
          marginBottom: '1.5rem',
          paddingBottom: '1rem',
          borderBottom: '1px solid #334155',
        }}>
          <div>
            <h1 style={{ fontSize: '1.25rem', margin: 0, color: '#60a5fa' }}>
              sitemap.xml
            </h1>
            <p style={{ fontSize: '0.875rem', color: '#94a3b8', margin: '0.25rem 0 0' }}>
              {PAGES.length} page types × {LANGUAGES.length} languages = {PAGES.length * LANGUAGES.length} URLs
            </p>
          </div>
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

        {/* Info for production */}
        <div style={{
          backgroundColor: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '0.5rem',
          padding: '0.75rem 1rem',
          marginBottom: '1.5rem',
          fontSize: '0.8125rem',
          color: '#94a3b8',
          lineHeight: 1.6,
        }}>
          <strong style={{ color: '#fbbf24' }}>Production:</strong>{' '}
          Configure your hosting to serve <code style={{ color: '#60a5fa' }}>/public/sitemap.xml</code>{' '}
          as a static file at <code style={{ color: '#60a5fa' }}>/sitemap.xml</code>{' '}
          with <code style={{ color: '#60a5fa' }}>Content-Type: application/xml</code>{' '}
          before the SPA fallback. Crawlers need raw XML, not this HTML preview.
        </div>

        {/* XML content as syntax-highlighted text */}
        <pre style={{
          backgroundColor: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '0.5rem',
          padding: '1rem',
          overflow: 'auto',
          fontSize: '0.75rem',
          lineHeight: 1.7,
          whiteSpace: 'pre',
          tabSize: 2,
        }}>
          {xmlContent.split('\n').map((line, i) => (
            <span key={i}>
              {highlightXmlLine(line)}
              {'\n'}
            </span>
          ))}
        </pre>
      </div>
    </div>
  );
}

/** Simple XML syntax highlighting */
function highlightXmlLine(line: string): React.ReactNode {
  // XML declaration
  if (line.startsWith('<?xml')) {
    return <span style={{ color: '#94a3b8' }}>{line}</span>;
  }

  // Comment
  if (line.trim().startsWith('<!--')) {
    return <span style={{ color: '#6b7280' }}>{line}</span>;
  }

  // Tag with content: <loc>...</loc>
  const tagContentMatch = line.match(/^(\s*)(<\/?[\w:]+[^>]*>)([^<]*)(<\/[\w:]+>)?(.*)$/);
  if (tagContentMatch) {
    const [, indent, openTag, content, closeTag, rest] = tagContentMatch;
    return (
      <>
        {indent}
        <span style={{ color: '#7dd3fc' }}>{openTag}</span>
        <span style={{ color: '#fde68a' }}>{content}</span>
        {closeTag && <span style={{ color: '#7dd3fc' }}>{closeTag}</span>}
        {rest}
      </>
    );
  }

  // Self-closing or opening/closing tag only
  const tagMatch = line.match(/^(\s*)(<[^>]+>)(.*)$/);
  if (tagMatch) {
    const [, indent, tag, rest] = tagMatch;
    return (
      <>
        {indent}
        <span style={{ color: '#7dd3fc' }}>{tag}</span>
        {rest}
      </>
    );
  }

  return line;
}