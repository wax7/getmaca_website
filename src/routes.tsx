import { createBrowserRouter, Navigate } from "react-router";
import { Home } from "./pages/Home";
import { Imprint } from "./pages/Imprint";
import { Feedback } from "./pages/Feedback";
import { Privacy } from "./pages/Privacy";
import { FAQ } from "./pages/FAQ";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/en" replace />,
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
    element: <Navigate to="/en" replace />,
  },
]);