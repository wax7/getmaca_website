import { useEffect } from 'react';
import macaAppLogo from 'figma:asset/7726871357dffca8a1c72824ee6fcf70b91dc923.png';

export function DocumentHead() {
  useEffect(() => {
    // Setze den Seitentitel
    document.title = 'MACA - Master Audio Control';

    // Setze das Favicon
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = macaAppLogo;

    // Setze auch Apple Touch Icon für bessere mobile Darstellung
    let appleTouchIcon = document.querySelector("link[rel='apple-touch-icon']") as HTMLLinkElement;
    if (!appleTouchIcon) {
      appleTouchIcon = document.createElement('link');
      appleTouchIcon.rel = 'apple-touch-icon';
      document.head.appendChild(appleTouchIcon);
    }
    appleTouchIcon.href = macaAppLogo;
  }, []);

  return null;
}
