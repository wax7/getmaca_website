import { useEffect } from 'react';
import { useLocation } from 'react-router';

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Multi-strategy scroll to top for iframe compatibility
    // Strategy 1: Direct assignment (best for iframes)
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

    // Strategy 2: window.scrollTo
    try {
      window.scrollTo(0, 0);
    } catch {
      // silently fail in restricted iframe contexts
    }

    // Strategy 3: Reset all scrollable parent elements
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
  }, [pathname]);

  return null;
}
