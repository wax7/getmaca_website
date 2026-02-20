import { createBrowserRouter, Navigate } from "react-router";
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

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Navigate to="/en" replace />,
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