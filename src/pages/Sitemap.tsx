export function Sitemap() {
  const baseUrl = 'https://getmaca.de';
  const languages = ['en', 'de', 'fr', 'es', 'it', 'pt', 'ja', 'zh'];
  const pages = ['', '/imprint', '/privacy', '/faq', '/terms'];
  const staticPages = ['/history'];
  
  const generateSitemap = () => {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
    
    // Language-specific pages
    languages.forEach(lang => {
      pages.forEach(page => {
        xml += '  <url>\n';
        xml += `    <loc>${baseUrl}/${lang}${page}</loc>\n`;
        xml += '    <changefreq>weekly</changefreq>\n';
        xml += '    <priority>' + (page === '' ? '1.0' : '0.8') + '</priority>\n';
        xml += '  </url>\n';
      });
    });
    
    // Static pages (no language)
    staticPages.forEach(page => {
      xml += '  <url>\n';
      xml += `    <loc>${baseUrl}${page}</loc>\n`;
      xml += '    <changefreq>monthly</changefreq>\n';
      xml += '    <priority>0.7</priority>\n';
      xml += '  </url>\n';
    });
    
    xml += '</urlset>';
    return xml;
  };

  const downloadSitemap = () => {
    const sitemap = generateSitemap();
    const blob = new Blob([sitemap], { type: 'application/xml' });
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
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Sitemap</h1>
        <p className="mb-6 text-muted-foreground">
          Diese Seite enthält alle verfügbaren URLs der MACA Website in allen Sprachen.
        </p>
        
        <button
          onClick={downloadSitemap}
          className="mb-8 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all"
        >
          Sitemap.xml herunterladen
        </button>

        <div className="space-y-6">
          {languages.map(lang => (
            <div key={lang} className="border border-border rounded-lg p-4">
              <h2 className="text-2xl font-semibold mb-3 uppercase">{lang}</h2>
              <ul className="space-y-2">
                {pages.map(page => (
                  <li key={page}>
                    <a
                      href={`/${lang}${page}`}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      /{lang}{page || ' (Home)'}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}