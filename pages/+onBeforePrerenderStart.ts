import { SUPPORTED_LANGUAGES } from '../src/utils/language-config';
import { SEO_PAGE_SLUGS } from './_seo/route-seo';

// Vike v1 ruft diesen Hook für JEDEN Page-Config auf, wenn er an pages/+ liegt
// (Inheritance). Damit URLs nicht mehrfach gemeldet werden, geben wir sie nur
// beim ersten Aufruf zurück.
let alreadyEmitted = false;

export function onBeforePrerenderStart() {
  if (alreadyEmitted) return [];
  alreadyEmitted = true;

  const localeRoutes = SUPPORTED_LANGUAGES.map((lang) => `/${lang}`);
  const contentRoutes = SUPPORTED_LANGUAGES.flatMap((lang) =>
    SEO_PAGE_SLUGS.map((slug) => `/${lang}/${slug}`)
  );

  return ['/', ...localeRoutes, ...contentRoutes];
}
