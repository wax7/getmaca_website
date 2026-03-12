/**
 * RobotsTxt – SPA fallback for /robots.txt
 *
 * Same reasoning as SitemapXml: prevents /:lang from catching /robots.txt.
 * In production, /public/robots.txt must be served as a static file with
 * Content-Type: text/plain before the SPA fallback.
 */

const ROBOTS_CONTENT = `# MACA – Master Audio Control
# https://getmaca.de

# ── Default rules for all bots ────────────────────────────────────────────
User-agent: *
Allow: /
Allow: /sitemap.xml
Disallow: /history
Disallow: /sitemap
Disallow: /*/feedback
Disallow: /robots.txt

# ── Googlebot – no crawl-delay needed (uses Search Console settings) ──────
User-agent: Googlebot
Allow: /
Allow: /sitemap.xml
Disallow: /history
Disallow: /sitemap
Disallow: /*/feedback
Disallow: /robots.txt

# ── Bingbot ───────────────────────────────────────────────────────────────
User-agent: Bingbot
Allow: /
Allow: /sitemap.xml
Disallow: /history
Disallow: /sitemap
Disallow: /*/feedback
Disallow: /robots.txt
Crawl-delay: 1

# ── Apple Applebot (Siri, Spotlight) ─────────────────────────────��────────
User-agent: Applebot
Allow: /

# ── Social media crawlers (full access for rich previews) ─────────────────
User-agent: Twitterbot
Allow: /

User-agent: facebookexternalhit
Allow: /

User-agent: LinkedInBot
Allow: /

# ── Block known AI scrapers that don't respect content licensing ──────────
User-agent: CCBot
Disallow: /

User-agent: GPTBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: anthropic-ai
Disallow: /

User-agent: ClaudeBot
Disallow: /

# ── Block aggressive/undesirable bots ────────────────────────────────────
User-agent: AhrefsBot
Crawl-delay: 10

User-agent: SemrushBot
Crawl-delay: 10

User-agent: DotBot
Disallow: /

User-agent: MJ12bot
Disallow: /

# ── Polite crawl-delay for all other bots ────────────────────────────────
# (Already defined in the default User-agent: * section above)
# Bots that respect Crawl-delay will use the value from their specific section,
# or fall back to the default section.

# ── Sitemap location ─────────────────────────────────────────────────────
Sitemap: https://getmaca.de/sitemap.xml

# ── Host directive (Yandex) ──────────────────────────────────────────────
Host: https://getmaca.de`;

export function RobotsTxt() {
  const handleDownload = () => {
    const blob = new Blob([ROBOTS_CONTENT], { type: 'text/plain; charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'robots.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
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
            robots.txt
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
            Download robots.txt
          </button>
        </div>

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
          <strong style={{ color: '#fbbf24' }}>SPA-Fallback-Ansicht</strong> — In
          Produktion muss{' '}
          <code style={{ color: '#60a5fa' }}>/public/robots.txt</code> als statische
          Datei mit{' '}
          <code style={{ color: '#60a5fa' }}>Content-Type: text/plain</code>{' '}
          ausgeliefert werden.
        </div>

        <pre
          style={{
            backgroundColor: '#1e293b',
            border: '1px solid #334155',
            borderRadius: '0.5rem',
            padding: '1rem',
            overflow: 'auto',
            fontSize: '0.8125rem',
            lineHeight: 1.8,
            whiteSpace: 'pre',
            color: '#cbd5e1',
          }}
        >
          {ROBOTS_CONTENT}
        </pre>
      </div>
    </div>
  );
}