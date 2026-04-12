/**
 * Post-build script: Injects Google Tag (gtag.js) with Consent Mode v2
 * into ALL prerendered HTML files in the EXACT Google-recommended order.
 *
 * This bypasses React/Vike head-element reordering by modifying
 * the final HTML directly after the build.
 *
 * Google-recommended order:
 *   1. Consent defaults (inline script)
 *   2. <script async src="gtag.js"> (static tag — required for Tag Assistant detection)
 *   3. gtag('js') + gtag('config') (inline script)
 */

const { readFileSync, writeFileSync, readdirSync, statSync } = require('fs');
const { join } = require('path');

function findHtml(dir) {
  const results = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) results.push(...findHtml(full));
    else if (entry.endsWith('.html')) results.push(full);
  }
  return results;
}

const htmlFiles = findHtml(join(__dirname, '..', 'build', 'client'));

const TAG_ID = 'AW-1012572629';

// ── Google's EXACT recommended snippet format ──
// Consent defaults are kept minimal here (Google's standard pattern).
// Returning visitors get consent restored via CookieBanner on React mount.
// Regional consent variants are handled by CookieBanner.
const GTAG_SNIPPET = `
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${TAG_ID}"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'analytics_storage': 'denied',
  'wait_for_update': 500
});
gtag('set', 'url_passthrough', true);
gtag('set', 'ads_data_redaction', true);
gtag('js', new Date());
gtag('config', '${TAG_ID}');
</script>`;

let count = 0;
for (const file of htmlFiles) {
  let html = readFileSync(file, 'utf-8');

  // Skip if already injected (idempotent)
  if (html.includes('Google tag (gtag.js)')) continue;

  // Inject right after <head> (or after first <head...> tag)
  const headMatch = html.match(/<head[^>]*>/i);
  if (!headMatch) continue;

  const insertPos = headMatch.index + headMatch[0].length;
  html = html.slice(0, insertPos) + GTAG_SNIPPET + html.slice(insertPos);

  writeFileSync(file, html, 'utf-8');
  count++;
}

console.log(`✅ gtag injected into ${count} HTML files`);
