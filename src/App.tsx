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
import {
  SUPPORTED_LANGUAGES,
  RTL_LANGUAGES,
  DEFAULT_LANGUAGE,
} from './utils/language-config';

// ---------------------------------------------------------------------------
// IMMEDIATE SEO BOOTSTRAP – runs at module-parse time, before React renders.
// Sets <html lang>, dir, canonical, og:url from the current URL path so that
// bots which snapshot the initial DOM see correct locale signals.
// ---------------------------------------------------------------------------
(function immediateLocaleSEO() {
  try {
    const BASE_URL = 'https://getmaca.de';
    const path = window.location.pathname;
    const segments = path.split('/').filter(Boolean);
    const langCandidate = segments[0] || '';

    // Resolve language from URL
    const lang = (SUPPORTED_LANGUAGES as readonly string[]).includes(langCandidate)
      ? langCandidate
      : DEFAULT_LANGUAGE;

    // <html lang="..." dir="...">
    document.documentElement.lang = lang;
    document.documentElement.dir =
      (RTL_LANGUAGES as readonly string[]).includes(lang) ? 'rtl' : 'ltr';

    // Normalise path (strip trailing slash except root)
    const normPath = path.replace(/\/+$/, '') || '/';
    const canonicalHref = `${BASE_URL}${normPath}`;

    // Canonical <link>
    let canonical = document.querySelector(
      'link[rel="canonical"]',
    ) as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalHref;

    // og:url <meta>
    let ogUrl = document.querySelector(
      'meta[property="og:url"]',
    ) as HTMLMetaElement | null;
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.content = canonicalHref;

    // Content-Language <meta>
    let clMeta = document.querySelector(
      'meta[http-equiv="Content-Language"]',
    ) as HTMLMetaElement | null;
    if (!clMeta) {
      clMeta = document.createElement('meta');
      clMeta.setAttribute('http-equiv', 'Content-Language');
      document.head.appendChild(clMeta);
    }
    clMeta.content = lang;
  } catch {
    // Fail silently – DocumentHead will still set everything in useLayoutEffect
  }
})();

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