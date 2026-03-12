/**
 * MACA Marketing Website – Entry Point
 * Rebuilt: 2026-03-12T15:00:00Z
 * Home is imported from /components/HomeView to bypass cached /pages/Home
 * Terms is imported from /components/TermsView to bypass cached /pages/Terms
 */
import { createBrowserRouter, RouterProvider } from 'react-router';
import { SitemapXml } from "./components/SitemapXml";
import { RobotsTxt } from "./components/RobotsTxt";
import { FaviconRedirect } from "./components/FaviconRedirect";
import { HomeView } from "./components/HomeView";
import { Imprint } from "./pages/Imprint";
import { Feedback } from "./pages/Feedback";
import { Privacy } from "./pages/Privacy";
import { FAQ } from "./pages/FAQ";
import { Sitemap } from "./pages/Sitemap";
import { History } from "./pages/History";
import { Troubleshooting } from "./pages/Troubleshooting";
import { Guide } from "./pages/Guide";
import { NotFound } from "./pages/NotFound";
import { RootLayout } from "./layouts/RootLayout";
import { LanguageRedirect } from "./components/LanguageRedirect";
import { TermsView } from "./components/TermsView";

// ---------------------------------------------------------------------------
// IMMEDIATE SEO BOOTSTRAP – runs at module-parse time, before React renders.
// Sets <html lang>, dir, canonical, og:url, og:locale from the current URL
// so that bots which snapshot the initial DOM see correct locale signals.
//
// SELF-CONTAINED: hardcodes language list to avoid any import-timing risk.
// DocumentHead later re-applies everything with full page-specific detail.
// ---------------------------------------------------------------------------
(function immediateLocaleSEO() {
  try {
    const BASE_URL = 'https://getmaca.de';
    // Hardcoded – must match SUPPORTED_LANGUAGES in /utils/language-config.ts
    const LANGS = [
      'en','de','fr','es','it','ja','zh-Hans','zh-Hant',
      'ar','ru','nl','tr','sv','da','ko','nb',
    ];
    const OG_LOCALES: Record<string, string> = {
      en:'en_US', de:'de_DE', fr:'fr_FR', es:'es_ES', it:'it_IT', ja:'ja_JP',
      'zh-Hans':'zh_CN', 'zh-Hant':'zh_TW', ar:'ar_SA', ru:'ru_RU',
      nl:'nl_NL', tr:'tr_TR', sv:'sv_SE', da:'da_DK', ko:'ko_KR', nb:'nb_NO',
    };

    const path = window.location.pathname;
    const segments = path.split('/').filter(Boolean);
    const langCandidate = segments[0] || '';
    const lang = LANGS.includes(langCandidate) ? langCandidate : 'en';

    // <html lang="..." dir="...">
    document.documentElement.setAttribute('lang', lang);
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // Normalised path
    const normPath = path.replace(/\/+$/, '') || '/';
    const canonicalHref = `${BASE_URL}${normPath}`;

    // Helper: upsert a <meta> tag
    const upsertMeta = (
      sel: string,
      attrKey: string,
      attrVal: string,
      content: string,
    ) => {
      let el = document.querySelector(sel) as HTMLMetaElement | null;
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrKey, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper: upsert a <link> tag
    const upsertLink = (rel: string, href: string) => {
      let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // Canonical
    upsertLink('canonical', canonicalHref);

    // og:url
    upsertMeta('meta[property="og:url"]', 'property', 'og:url', canonicalHref);

    // og:locale
    upsertMeta(
      'meta[property="og:locale"]',
      'property',
      'og:locale',
      OG_LOCALES[lang] || 'en_US',
    );

    // Content-Language
    upsertMeta(
      'meta[http-equiv="Content-Language"]',
      'http-equiv',
      'Content-Language',
      lang,
    );

    // <title> baseline (DocumentHead will overwrite with page-specific)
    if (lang !== 'en') {
      const titlePrefixes: Record<string, string> = {
        de: 'MACA \u2013 Lautst\u00e4rke pro App f\u00fcr macOS',
        fr: 'MACA \u2013 Volume par Application macOS',
        es: 'MACA \u2013 Volumen por App en macOS',
        it: 'MACA \u2013 Volume per App su macOS',
        ja: 'MACA \u2013 macOS\u30a2\u30d7\u30ea\u5225\u97f3\u91cf\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb',
        'zh-Hans': 'MACA \u2013 macOS\u6bcf\u5e94\u7528\u97f3\u91cf\u63a7\u5236',
        'zh-Hant': 'MACA \u2013 macOS\u6bcf\u61c9\u7528\u97f3\u91cf\u63a7\u5236',
        ar: 'MACA \u2013 \u062a\u062d\u0643\u0645 \u0635\u0648\u062a \u0644\u0643\u0644 \u062a\u0637\u0628\u064a\u0642 \u0639\u0644\u0649 macOS',
        ru: 'MACA \u2013 \u0413\u0440\u043e\u043c\u043a\u043e\u0441\u0442\u044c \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f \u043d\u0430 macOS',
        nl: 'MACA \u2013 Volume per app voor macOS',
        tr: 'MACA \u2013 macOS uygulama ba\u015f\u0131na ses',
        sv: 'MACA \u2013 Volym per app f\u00f6r macOS',
        da: 'MACA \u2013 Lydstyrke per app for macOS',
        ko: 'MACA \u2013 macOS \uc571\ubcc4 \ubcfc\ub968 \ucee8\ud2b8\ub864',
        nb: 'MACA \u2013 Volum per app for macOS',
      };
      if (titlePrefixes[lang]) {
        document.title = titlePrefixes[lang];
      }
    }
  } catch {
    // Fail silently – DocumentHead will still set everything in useLayoutEffect
  }
})();

// ---------------------------------------------------------------------------
// Router
// ---------------------------------------------------------------------------
const router = createBrowserRouter([
  {
    path: "/sitemap.xml",
    Component: SitemapXml,
  },
  {
    path: "/robots.txt",
    Component: RobotsTxt,
  },
  {
    path: "/favicon.ico",
    Component: FaviconRedirect,
  },
  {
    path: "/apple-touch-icon.png",
    Component: FaviconRedirect,
  },
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <LanguageRedirect />,
      },
      {
        path: "/sitemap",
        element: <Sitemap />,
      },
      {
        path: "/history",
        element: <History />,
      },
      {
        path: "/:lang",
        element: <HomeView />,
      },
      {
        path: "/:lang/imprint",
        element: <Imprint />,
      },
      {
        path: "/:lang/terms",
        element: <TermsView />,
      },
      {
        path: "/:lang/feedback",
        element: <Feedback />,
      },
      {
        path: "/:lang/privacy",
        element: <Privacy />,
      },
      {
        path: "/:lang/faq",
        element: <FAQ />,
      },
      {
        path: "/:lang/troubleshooting",
        element: <Troubleshooting />,
      },
      {
        path: "/:lang/guide",
        element: <Guide />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
