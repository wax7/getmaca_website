#!/usr/bin/env node
/**
 * IndexNow Submitter
 * Reads sitemap.xml, extracts all <loc>, submits in batches of 10000 to IndexNow API.
 * Bing/Yandex/Seznam/Naver/Yep accept this — Google does NOT participate in IndexNow.
 *
 * Usage: node scripts/indexnow-submit.js [--dry-run]
 *
 * Required env / constants:
 *   HOST    = 'getmaca.de'
 *   KEY     = '5b07596201483381bdd25fda4ba62c36'   (matches /<KEY>.txt)
 *   KEY_LOC = `https://${HOST}/${KEY}.txt`
 */

const fs = require('fs');
const path = require('path');
const https = require('https');

const HOST = 'getmaca.de';
const KEY = '5b07596201483381bdd25fda4ba62c36';
const KEY_LOC = `https://${HOST}/${KEY}.txt`;
const DRY = process.argv.includes('--dry-run');

const sitemapPath = path.resolve(__dirname, '..', 'build', 'client', 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
  console.error(`✗ sitemap.xml nicht gefunden unter ${sitemapPath}. Erst 'npm run build' ausführen.`);
  process.exit(1);
}

const xml = fs.readFileSync(sitemapPath, 'utf8');
const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
console.log(`✓ ${urls.length} URLs aus sitemap.xml gelesen`);

if (DRY) {
  console.log('--dry-run: Keine Submission. Erste 5 URLs:');
  urls.slice(0, 5).forEach((u) => console.log('  ', u));
  process.exit(0);
}

function submitBatch(batch) {
  return new Promise((resolve, reject) => {
    const body = JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOC, urlList: batch });
    const req = https.request(
      {
        hostname: 'api.indexnow.org',
        port: 443,
        path: '/IndexNow',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
          'Content-Length': Buffer.byteLength(body),
        },
      },
      (res) => {
        let data = '';
        res.on('data', (c) => (data += c));
        res.on('end', () => {
          console.log(`  IndexNow → HTTP ${res.statusCode}`);
          if (res.statusCode && res.statusCode >= 200 && res.statusCode < 300) resolve(data);
          else reject(new Error(`IndexNow HTTP ${res.statusCode}: ${data}`));
        });
      }
    );
    req.on('error', reject);
    req.write(body);
    req.end();
  });
}

(async () => {
  const BATCH = 10000;
  for (let i = 0; i < urls.length; i += BATCH) {
    const batch = urls.slice(i, i + BATCH);
    console.log(`→ Submit Batch ${i / BATCH + 1} (${batch.length} URLs)`);
    try {
      await submitBatch(batch);
    } catch (err) {
      console.error('  ✗', err.message);
      process.exit(2);
    }
  }
  console.log('✓ IndexNow-Submission abgeschlossen.');
})();
