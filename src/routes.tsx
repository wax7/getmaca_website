import { createBrowserRouter, Navigate } from "react-router";
import { SitemapXml } from "./components/SitemapXml";
import { RobotsTxt } from "./components/RobotsTxt";
import { Home } from "./pages/Home";
import { Imprint } from "./pages/Imprint";
import { Feedback } from "./pages/Feedback";
import { Privacy } from "./pages/Privacy";
import { FAQ } from "./pages/FAQ";
import { Sitemap } from "./pages/Sitemap";
import { Terms } from "./pages/Terms";
import { History } from "./pages/History";
import { NotFound } from "./pages/NotFound";
import { RootLayout } from "./layouts/RootLayout";
import { LanguageRedirect } from "./components/LanguageRedirect";

export const router = createBrowserRouter([
  // Raw file routes – outside RootLayout (no Header/Footer/CookieBanner)
  {
    path: "/sitemap.xml",
    Component: SitemapXml,
  },
  {
    path: "/robots.txt",
    Component: RobotsTxt,
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
        element: <Home />,
      },
      {
        path: "/:lang/imprint",
        element: <Imprint />,
      },
      {
        path: "/:lang/terms",
        element: <Terms />,
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
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);