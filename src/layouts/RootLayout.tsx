import { Outlet } from 'react-router';
import { ScrollToTop } from '../components/ScrollToTop';
import { ScrollToTopButton } from '../components/ScrollToTopButton';
import { DocumentHead } from '../components/DocumentHead';
import { CookieBanner } from '../components/CookieBanner';
import { LanguageDetector } from '../components/LanguageDetector';

export function RootLayout() {
  return (
    <>
      {/* Sentinel element for IntersectionObserver-based scroll detection.
          Placed at the very top of the content flow so the observer can
          reliably detect when the user has scrolled past it. */}
      <div id="top-sentinel" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, width: '1px', height: '1px', pointerEvents: 'none' }} />
      <DocumentHead />
      <LanguageDetector />
      <ScrollToTop />
      <ScrollToTopButton />
      <CookieBanner />
      <Outlet />
    </>
  );
}
