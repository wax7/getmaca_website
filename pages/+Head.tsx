import { usePageContext } from 'vike-react/usePageContext';
import {
  DEFAULT_LANGUAGE,
} from '../src/utils/language-config';
import { BASE_URL, getAlternateLinks, getRouteSeo } from './_seo/route-seo';

export function Head() {
  const pageContext = usePageContext();
  const pathname = pageContext.urlPathname || '/';
  const seo = getRouteSeo(pathname);
  const alternates = getAlternateLinks(pathname);
  const xDefaultHref = `${BASE_URL}/${DEFAULT_LANGUAGE}${seo.pageKey === 'home' ? '' : `/${seo.pageKey}`}`;

  return (
    <>
      {/* ── Google Consent Mode v2 (Advanced) + gtag.js ── */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
var sc=null;try{sc=JSON.parse(localStorage.getItem('maca-consent-v2'));}catch(e){}
if(sc){gtag('consent','default',{'ad_storage':sc.ad_storage||'denied','ad_user_data':sc.ad_user_data||'denied','ad_personalization':sc.ad_personalization||'denied','analytics_storage':sc.analytics_storage||'denied'});}
else{gtag('consent','default',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'denied','region':['AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE','IS','LI','NO','GB','CH']});gtag('consent','default',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'granted','region':['US-CA']});gtag('consent','default',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'denied','region':['BR']});gtag('consent','default',{'ad_storage':'granted','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'granted','region':['JP','KR']});gtag('consent','default',{'ad_storage':'denied','ad_user_data':'denied','ad_personalization':'denied','analytics_storage':'denied','region':['TR']});gtag('consent','default',{'ad_storage':'granted','ad_user_data':'granted','ad_personalization':'granted','analytics_storage':'granted'});}
gtag('set','url_passthrough',true);gtag('set','ads_data_redaction',true);
gtag('js',new Date());gtag('config','AW-1012572629');
`,
        }}
      />
      <script async src="https://www.googletagmanager.com/gtag/js?id=AW-1012572629" />

      {/* ── Dark mode (before paint) ── */}
      <script
        dangerouslySetInnerHTML={{
          __html:
            "(() => { try { const stored = localStorage.getItem('darkMode'); const isDark = stored === null ? window.matchMedia('(prefers-color-scheme: dark)').matches : stored === 'true'; document.documentElement.classList.toggle('dark', isDark); } catch {} })();",
        }}
      />

      <link rel="canonical" href={seo.canonicalUrl} />

      {alternates.map((alternate) => (
        <link key={alternate.lang} rel="alternate" hrefLang={alternate.lang} href={alternate.href} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={xDefaultHref} />

      <meta httpEquiv="Content-Language" content={seo.lang} />
      <meta name="direction" content={seo.direction} />
      <meta name="robots" content={seo.robots} />
      <meta property="og:url" content={seo.canonicalUrl} />
      <meta property="og:locale" content={seo.ogLocale} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
    </>
  );
}
