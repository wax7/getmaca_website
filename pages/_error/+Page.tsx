/**
 * Vike Error Page (404 / 500).
 * Wird gerendert für unbekannte Pfade. Statisch prerendert nach build/client/_error.html
 * — nginx zeigt es via `error_page 404 /_error.html;` mit korrektem HTTP 404.
 */
import { usePageContext } from 'vike-react/usePageContext';
import { NotFound } from '../../src/pages/NotFound';

export default function Page() {
  const pageContext = usePageContext();
  // pageContext.is404 ist true für 404, false/undefined für 500
  return <NotFound />;
}
