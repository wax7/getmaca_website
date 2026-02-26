import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronUp } from 'lucide-react';

/**
 * ScrollToTopButton - Uses IntersectionObserver as primary strategy.
 * This is the most reliable approach because:
 * - It works in iframes (Figma environment) where scroll events on window may not fire
 * - It doesn't depend on which element is the actual scroll container
 * - It's performant (browser-native, no polling needed)
 * - It automatically reflects the correct state after navigation
 */
export function ScrollToTopButton() {
  const [show, setShow] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const retryRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const startObserving = () => {
      const sentinel = document.getElementById('top-sentinel');
      if (!sentinel) return false;

      // Disconnect any previous observer
      if (observerRef.current) {
        observerRef.current.disconnect();
      }

      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          // Show button when sentinel is NOT visible (user has scrolled past it)
          setShow(!entry.isIntersecting);
        },
        {
          // Use null root = viewport. threshold 0 = trigger as soon as any pixel leaves/enters
          root: null,
          threshold: 0,
          // Small negative margin so button appears a bit after scrolling starts
          rootMargin: '-100px 0px 0px 0px',
        }
      );

      observerRef.current.observe(sentinel);
      return true;
    };

    // Try to start observing immediately
    if (!startObserving()) {
      // If sentinel not yet in DOM, retry until found (handles async rendering)
      retryRef.current = setInterval(() => {
        if (startObserving() && retryRef.current) {
          clearInterval(retryRef.current);
          retryRef.current = null;
        }
      }, 200);
    }

    // Fallback: Also listen to scroll events in case IO misses updates
    // (belt-and-suspenders approach)
    const handleScroll = () => {
      const scrollTop = Math.max(
        document.body.scrollTop || 0,
        document.documentElement.scrollTop || 0
      );
      setShow(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });

    // Also check all possible scrollable parents (iframe-specific)
    const checkParentScrollables = () => {
      const sentinel = document.getElementById('top-sentinel');
      if (!sentinel) return;
      let el: HTMLElement | null = sentinel.parentElement;
      while (el && el !== document.body && el !== document.documentElement) {
        if (el.scrollHeight > el.clientHeight) {
          el.addEventListener('scroll', handleScroll, { passive: true });
        }
        el = el.parentElement;
      }
    };
    
    // Delay parent check to let DOM settle
    const parentCheckTimeout = setTimeout(checkParentScrollables, 500);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
      if (retryRef.current) {
        clearInterval(retryRef.current);
        retryRef.current = null;
      }
      clearTimeout(parentCheckTimeout);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
    };
  }, []); // Mount once - no dependency on location, IO handles everything

  const scrollToTop = useCallback(() => {
    // Strategy 1: Direct assignment (works best in iframes)
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    // Strategy 2: window.scrollTo
    try {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      try {
        window.scrollTo(0, 0);
      } catch {
        // silently fail
      }
    }

    // Strategy 3: Walk up DOM tree and reset all scrollable ancestors
    const sentinel = document.getElementById('top-sentinel');
    if (sentinel) {
      let el: HTMLElement | null = sentinel.parentElement;
      while (el) {
        if (el.scrollTop > 0) {
          el.scrollTop = 0;
        }
        el = el.parentElement;
      }
    }
  }, []);

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '16px',
        width: '48px',
        height: '48px',
        backgroundColor: '#3B82F6',
        color: 'white',
        borderRadius: '50%',
        border: 'none',
        boxShadow: '0 10px 40px rgba(59, 130, 246, 0.6)',
        cursor: 'pointer',
        zIndex: 999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'opacity 0.3s ease, transform 0.3s ease',
        pointerEvents: show ? 'auto' : 'none',
        opacity: show ? 1 : 0,
        transform: show ? 'translateY(0) scale(1)' : 'translateY(16px) scale(0.8)',
      }}
      className="hover:scale-110 hover:shadow-2xl"
    >
      <ChevronUp className="w-6 h-6" />
    </button>
  );
}