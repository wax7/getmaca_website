import type { GuideTranslation } from './guide-types';
import type { Language } from '../translations';
import { guideEN } from './guide-en';
import { guideDE } from './guide-de';
import { guideES } from './guide-es';
import { guideFR } from './guide-fr';
import { guideIT } from './guide-it';
import { guideJA } from './guide-ja';
import { guideZH } from './guide-zh';
import { guideAR } from './guide-ar';
import { guideRU, guideNL, guideTR, guideSV } from './guide-remaining';

const guideTranslations: Record<Language, GuideTranslation> = {
  en: guideEN,
  de: guideDE,
  es: guideES,
  fr: guideFR,
  it: guideIT,
  ja: guideJA,
  'zh-Hans': guideZH,
  'zh-Hant': guideZH, // Traditional Chinese falls back to Simplified for now
  ar: guideAR,
  ru: guideRU,
  nl: guideNL,
  tr: guideTR,
  sv: guideSV,
  da: guideEN, // Falls back to English
  ko: guideEN, // Falls back to English
  nb: guideEN, // Falls back to English
};

export function getGuideTranslation(lang: Language): GuideTranslation {
  return guideTranslations[lang] || guideEN;
}

export type { GuideTranslation } from './guide-types';
