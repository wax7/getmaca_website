import type { Config } from 'vike/types';
import vikeReact from 'vike-react/config';

export default {
  // Keep existing app behavior while emitting prerendered locale entry points.
  ssr: false,
  prerender: true,
  extends: [vikeReact],
} satisfies Config;
