import type { PageContext } from 'vike/types';
import { getRouteSeo } from '../src/seo/route-seo';

export function title(pageContext: PageContext): string {
  const pathname = pageContext.urlPathname || '/';
  return getRouteSeo(pathname).title;
}
