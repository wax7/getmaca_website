/**
 * FaviconRedirect – Intercepts /favicon.ico and /apple-touch-icon.png routes
 *
 * These routes exist to prevent the /:lang wildcard from catching well-known
 * icon paths and treating "favicon.ico" or "apple-touch-icon.png" as a
 * language code (which would render the homepage with broken locale).
 *
 * The actual favicon/apple-touch-icon are set via <link> tags in DocumentHead.tsx
 * pointing to the real PNG asset. Browsers use those <link> tags rather than
 * requesting /favicon.ico directly.
 *
 * ## Production note
 * Place actual icon files at /public/favicon.ico and /public/apple-touch-icon.png
 * on real hosting — the static server will serve them before the SPA fallback.
 */
export function FaviconRedirect() {
  // Render nothing — this route only exists to claim the path
  return null;
}
