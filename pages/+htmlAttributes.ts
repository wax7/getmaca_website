import type { PageContextServer } from 'vike/types';
import { isRtl, resolveLanguage } from '../src/utils/language-config';

export default function htmlAttributes(pageContext: PageContextServer): Record<string, string> {
  const pathname = pageContext.urlPathname || '/';
  const lang = resolveLanguage(pathname.split('/').filter(Boolean)[0]);

  return {
    dir: isRtl(lang) ? 'rtl' : 'ltr',
  };
}
