import type { PageContext } from 'vike/types';
import { DEFAULT_LANGUAGE, resolveLanguage } from '../src/utils/language-config';

const TITLES: Record<string, string> = {
  en: 'MACA - AI Dating Assistant',
  de: 'MACA - KI Dating Assistent',
  fr: 'MACA - Assistant de rencontre IA',
  es: 'MACA - Asistente de citas con IA',
  it: 'MACA - Assistente di dating IA',
  ja: 'MACA - AI Dating Assistant',
  'zh-Hans': 'MACA - AI Dating Assistant',
  'zh-Hant': 'MACA - AI Dating Assistant',
  ar: 'MACA - AI Dating Assistant',
  ru: 'MACA - AI Dating Assistant',
  nl: 'MACA - AI Dating Assistent',
  tr: 'MACA - AI Flort Asistani',
  sv: 'MACA - AI Datingassistent',
  da: 'MACA - AI Datingassistent',
  ko: 'MACA - AI Dating Assistant',
  nb: 'MACA - AI Datingassistent',
};

function resolveLocale(pathname: string): string {
  const locale = resolveLanguage(pathname.split('/').filter(Boolean)[0]);
  return TITLES[locale] ? locale : DEFAULT_LANGUAGE;
}

export function title(pageContext: PageContext): string {
  const pathname = pageContext.urlPathname || '/';
  return TITLES[resolveLocale(pathname)];
}
