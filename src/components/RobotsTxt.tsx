import { useEffect } from 'react';

/**
 * RobotsTxt – Serves raw robots.txt content.
 *
 * Uses document.open/write/close to replace the entire document with plain text,
 * making it machine-readable for search engine crawlers.
 *
 * In production, configure your hosting to serve /public/robots.txt as a
 * static file BEFORE the SPA fallback for optimal performance.
 */

const ROBOTS_CONTENT = `# MACA – Master Audio Control
# https://getmaca.de

User-agent: *
Allow: /

# Disallow utility/system paths
Disallow: /history
Disallow: /sitemap
Disallow: /*/feedback

# Sitemap
Sitemap: https://getmaca.de/sitemap.xml

# Polite crawl-delay for bots that respect it
Crawl-delay: 1`;

export function RobotsTxt() {
  useEffect(() => {
    try {
      // Replace entire document with raw plain text
      document.open('text/plain');
      document.write(ROBOTS_CONTENT);
      document.close();
    } catch {
      // If document.write fails (e.g., CSP restrictions), show fallback
    }
  }, []);

  // Fallback: if document.write fails, show raw text
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
      {ROBOTS_CONTENT}
    </pre>
  );
}
