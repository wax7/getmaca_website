/**
 * RobotsTxt – visual preview of robots.txt content.
 *
 * Same SPA-routing issue as sitemap.xml.
 * In production, configure hosting to serve /public/robots.txt as a static file.
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
  const handleDownload = () => {
    const blob = new Blob([ROBOTS_CONTENT], { type: 'text/plain; charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'robots.txt';
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
          Configure your hosting to serve <code style={{ color: '#60a5fa' }}>/public/robots.txt</code>{' '}
          as a static file at <code style={{ color: '#60a5fa' }}>/robots.txt</code>{' '}
          with <code style={{ color: '#60a5fa' }}>Content-Type: text/plain</code>{' '}
          before the SPA fallback.
        </div>

        <pre style={{
          backgroundColor: '#1e293b',
          border: '1px solid #334155',
          borderRadius: '0.5rem',
          padding: '1rem',
          overflow: 'auto',
          fontSize: '0.8125rem',
          lineHeight: 1.8,
          whiteSpace: 'pre',
        }}>
          {ROBOTS_CONTENT.split('\n').map((line, i) => (
            <span key={i}>
              {line.startsWith('#') ? (
                <span style={{ color: '#6b7280' }}>{line}</span>
              ) : line.startsWith('Sitemap:') ? (
                <>
                  <span style={{ color: '#7dd3fc' }}>Sitemap:</span>
                  <span style={{ color: '#fde68a' }}>{line.replace('Sitemap:', '')}</span>
                </>
              ) : line.includes(':') ? (
                <>
                  <span style={{ color: '#7dd3fc' }}>{line.split(':')[0]}:</span>
                  <span style={{ color: '#fde68a' }}>{line.split(':').slice(1).join(':')}</span>
                </>
              ) : (
                line
              )}
              {'\n'}
            </span>
          ))}
        </pre>
      </div>
    </div>
  );
}
