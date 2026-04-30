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
} satisfies Config;
