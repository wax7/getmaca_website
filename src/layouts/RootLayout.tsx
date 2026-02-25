import { Outlet } from 'react-router';
import { ScrollToTop } from '../components/ScrollToTop';
import { ScrollToTopButton } from '../components/ScrollToTopButton';
import { DocumentHead } from '../components/DocumentHead';
import { CookieBanner } from '../components/CookieBanner';

export function RootLayout() {
  return (
    <>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>
      {/* Sentinel element for IntersectionObserver-based scroll detection. */}
      <div id="top-sentinel" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, width: '1px', height: '1px', pointerEvents: 'none' }} />
      <DocumentHead />
      <ScrollToTop />
      <ScrollToTopButton />
      <CookieBanner />
      <Outlet />
    </>
  );
}