import { useState, useEffect } from 'react';

/**
 * Custom hook that detects whether the user has scrolled past a threshold.
 * Uses multiple strategies for iframe compatibility (Figma environment).
 */
export function useScrolled(threshold = 50): boolean {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = Math.max(
        document.body.scrollTop || 0,
        document.documentElement.scrollTop || 0,
        window.pageYOffset || 0
      );
      setScrolled(scrollTop > threshold);
    };

    // Listen on both window and document for iframe compatibility
    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('scroll', handleScroll, { passive: true });

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return scrolled;
}
