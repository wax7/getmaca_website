import { Outlet, useParams } from 'react-router';
import { ScrollToTop } from '../components/ScrollToTop';
import { ScrollToTopButton } from '../components/ScrollToTopButton';
import { DocumentHead } from '../components/DocumentHead';
import { CookieBanner } from '../components/CookieBanner';

export function RootLayout() {
  const { lang } = useParams();
  const isRtl = lang === 'ar';

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>
      {/* Noscript fallback for crawlers / prerender: locale-aware message */}
      <noscript>
        <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
          <h1>MACA – Master Audio Control</h1>
          <p>Per-app volume control for macOS. Individual mixer, 10-band EQ, audio profiles, Focus Mode.</p>
          <p>This website requires JavaScript. Please enable JavaScript to view the full experience.</p>
          <a href="https://apps.apple.com/app/maca-master-audio-control/id6759258773">Download on the App Store</a>
        </div>
      </noscript>
      {/* Sentinel element for IntersectionObserver-based scroll detection. */}
      <div id="top-sentinel" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, width: '1px', height: '1px', pointerEvents: 'none' }} />
      <DocumentHead />
      <ScrollToTop />
      <ScrollToTopButton />
      <CookieBanner />
      <Outlet />
    </div>
  );
}