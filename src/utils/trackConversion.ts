/**
 * Fires a Google Ads conversion event when the user clicks the App Store download link.
 * Conversion action: "Seitenaufruf" – AW-1012572629/jXUUCO_t6JocENXD6uID
 */
export function trackAppStoreClick(): void {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'conversion', {
      send_to: 'AW-1012572629/jXUUCO_t6JocENXD6uID',
    });
  }
}
