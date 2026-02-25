import { Navigate } from 'react-router';
import { type Language } from '../locales/translations';

const validLanguages: Language[] = ['en', 'de', 'es', 'fr', 'it', 'pt', 'ja', 'zh'];

function detectBrowserLanguage(): Language {
  try {
    const saved = localStorage.getItem('maca-preferred-language');
    if (saved && validLanguages.includes(saved as Language)) {
      return saved as Language;
    }
  } catch {}

  const browserLang = navigator.language.toLowerCase();
  
  for (const lang of validLanguages) {
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
