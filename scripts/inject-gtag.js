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

// ── The snippet in Google's EXACT recommended order ──
const GTAG_SNIPPET = `
<!-- Google Consent Mode v2 (Advanced) — consent defaults FIRST -->
<script>
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
(function(){
var sc=null;try{sc=JSON.parse(localStorage.getItem('maca-consent-v2'));}catch(e){}
if(sc){gtag('consent','default',{'ad_storage':sc.ad_storage||'denied','ad_user_data':sc.ad_user_data||'denied','ad_personalization':sc.ad_personalization||'denied','analytics_storage':sc.analytics_storage||'denied','wait_for_update':500});}
else{gtag('consent','default',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'denied','wait_for_update':500,'region':['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE','IS','LI','NO','GB','CH']});gtag('consent','default',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'granted','wait_for_update':500,'region':['US-CA']});gtag('consent','default',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'denied','wait_for_update':500,'region':['BR']});gtag('consent','default',{'ad_storage':'granted','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'granted','wait_for_update':500,'region':['JP','KR']});gtag('consent','default',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'denied','wait_for_update':500,'region':['TR']});gtag('consent','default',{'ad_storage':'granted','ad_user_data':'granted','ad_personalization':'granted','analytics_storage':'granted'});}
gtag('set','url_passthrough',true);gtag('set','ads_data_redaction',true);
})();
</script>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=${TAG_ID}"></script>
<script>
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
gtag('js',new Date());gtag('config','${TAG_ID}');
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
