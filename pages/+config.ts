import type { Config } from 'vike/types';
import vikeReact from 'vike-react/config';

export default {
  // SSR enabled: prerender writes full HTML body, hydrated by client.
  // clientRouting enables SPA-style nav for <a href> via Vike (no full reload).
  ssr: true,
  prerender: true,
  clientRouting: true,
  hydrationCanBeAborted: true,
  extends: [vikeReact],
  // suppressHydrationWarning auf <html> verhindert React-Hydration-Mismatch
  // wenn das Inline-Dark-Mode-Script (in +Head.tsx) vor der Hydration die
  // 'dark'-Klasse setzt – Standard-Pattern für theme-toggle ohne FOUC.
  htmlAttributes: { suppressHydrationWarning: true },
} satisfies Config;
