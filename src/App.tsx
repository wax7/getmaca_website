/**
 * MACA Marketing Website – Entry Point
 * Rebuilt: 2026-03-12T15:00:00Z
 * Home is imported from /components/HomeView to bypass cached /pages/Home
 * Terms is imported from /components/TermsView to bypass cached /pages/Terms
 */
import { createBrowserRouter, RouterProvider } from 'react-router';
import { SitemapXml } from "./components/SitemapXml";
import { RobotsTxt } from "./components/RobotsTxt";
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