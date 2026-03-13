import { SUPPORTED_LANGUAGES } from '../src/utils/language-config';

export function onBeforePrerenderStart() {
  // Phase B.2: prerender all locale entry routes.
  const localeRoutes = SUPPORTED_LANGUAGES.map((lang) => `/${lang}`);
  return ['/', ...localeRoutes];
}
