import type { PageContext } from 'vike/types';
import { getRouteSeo } from './_seo/route-seo';

export function description(pageContext: PageContext): string {
  const pathname = pageContext.urlPathname || '/';
  return getRouteSeo(pathname).description;
}
