import { SUPPORTED_LANGUAGES } from '../src/utils/language-config';
import { SEO_PAGE_SLUGS } from '../src/seo/route-seo';

export function onBeforePrerenderStart() {
  const localeRoutes = SUPPORTED_LANGUAGES.map((lang) => `/${lang}`);
  const contentRoutes = SUPPORTED_LANGUAGES.flatMap((lang) =>
    SEO_PAGE_SLUGS.map((slug) => `/${lang}/${slug}`)
  );

  return ['/', ...localeRoutes, ...contentRoutes];
}
