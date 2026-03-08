import { Navigate } from 'react-router';
import { type Language } from '../locales/translations';

const validLanguages: Language[] = ['en', 'de', 'es', 'fr', 'it', 'ja', 'zh-Hans', 'zh-Hant', 'ar', 'ru', 'nl', 'tr', 'sv', 'da', 'ko', 'nb'];

function detectBrowserLanguage(): Language {
  try {
    const saved = localStorage.getItem('maca-preferred-language');
    if (saved && validLanguages.includes(saved as Language)) {
      return saved as Language;
    }
  } catch {}

  const browserLang = navigator.language.toLowerCase();
  
  // Handle Chinese variants specifically
  if (browserLang.startsWith('zh')) {
    if (browserLang.includes('hant') || browserLang.includes('tw') || browserLang.includes('hk') || browserLang.includes('mo')) {
      return 'zh-Hant';
    }
    return 'zh-Hans';
  }

  // Handle Norwegian variants
  if (browserLang.startsWith('nb') || browserLang === 'no' || browserLang.startsWith('no-')) {
    return 'nb';
  }

  // Standard matching for other languages
  const simpleLangs: Language[] = ['en', 'de', 'es', 'fr', 'it', 'ja', 'ar', 'ru', 'nl', 'tr', 'sv', 'da', 'ko'];
  for (const lang of simpleLangs) {
    if (browserLang.startsWith(lang)) {
      return lang;
    }
  }
  
  return 'en';
}

export function LanguageRedirect() {
  const detectedLang = detectBrowserLanguage();
  return <Navigate to={`/${detectedLang}`} replace />;
}