import { useEffect } from 'react';

/**
 * RobotsTxt – serves robots.txt as plain text.
 *
 * Same SPA-routing problem as sitemap.xml: React Router catches the request
 * before the static file in /public can be served.
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
Crawl-delay: 1
`;

export function RobotsTxt() {
  useEffect(() => {
    const blob = new Blob([ROBOTS_CONTENT], { type: 'text/plain; charset=utf-8' });
    const blobUrl = URL.createObjectURL(blob);
    window.location.replace(blobUrl);
  }, []);

  return (
    <pre style={{ fontFamily: 'monospace', whiteSpace: 'pre-wrap', padding: '1rem' }}>
      {ROBOTS_CONTENT}
    </pre>
  );
}
