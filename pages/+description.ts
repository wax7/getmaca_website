import type { PageContext } from 'vike/types';
import { DEFAULT_LANGUAGE, resolveLanguage } from '../src/utils/language-config';

const DESCRIPTIONS: Record<string, string> = {
  en: 'Your AI dating assistant for better conversations, confidence, and real connections.',
  de: 'Dein KI Dating Assistent fuer bessere Gespraeche, mehr Sicherheit und echte Verbindungen.',
  fr: 'Votre assistant IA de rencontre pour de meilleures conversations, plus de confiance et de vraies connexions.',
  es: 'Tu asistente de citas con IA para mejores conversaciones, confianza y conexiones reales.',
  it: 'Il tuo assistente di dating IA per conversazioni migliori, sicurezza e connessioni reali.',
  ja: 'Your AI dating assistant for better conversations, confidence, and real connections.',
  'zh-Hans': 'Your AI dating assistant for better conversations, confidence, and real connections.',
  'zh-Hant': 'Your AI dating assistant for better conversations, confidence, and real connections.',
  ar: 'Your AI dating assistant for better conversations, confidence, and real connections.',
  ru: 'Your AI dating assistant for better conversations, confidence, and real connections.',
  nl: 'Jouw AI dating assistent voor betere gesprekken, meer vertrouwen en echte connecties.',
  tr: 'Daha iyi sohbetler, guven ve gercek baglantilar icin AI flort asistanin.',
  sv: 'Din AI datingassistent foer baettre samtal, trygghet och verkliga kontakter.',
  da: 'Din AI datingassistent til bedre samtaler, selvtillid og aegtige forbindelser.',
  ko: 'Your AI dating assistant for better conversations, confidence, and real connections.',
  nb: 'Din AI datingassistent for bedre samtaler, trygghet og ekte forbindelser.',
};

function resolveLocale(pathname: string): string {
  const locale = resolveLanguage(pathname.split('/').filter(Boolean)[0]);
  return DESCRIPTIONS[locale] ? locale : DEFAULT_LANGUAGE;
}

export function description(pageContext: PageContext): string {
  const pathname = pageContext.urlPathname || '/';
  return DESCRIPTIONS[resolveLocale(pathname)];
}
