import type { PageContextServer } from 'vike/types';
import { resolveLanguage } from '../src/utils/language-config';

export default function lang(pageContext: PageContextServer): string {
  const pathname = pageContext.urlPathname || '/';
  return resolveLanguage(pathname.split('/').filter(Boolean)[0]);
}
