import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';

const supportedLanguages = ['en', 'de', 'fr', 'es', 'it', 'pt', 'ja', 'zh'];

export function LanguageDetector() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Nur auf der Root-Route automatisch weiterleiten
    if (location.pathname === '/' || location.pathname === '') {
      // Prüfe ob der User bereits eine Sprachpräferenz gespeichert hat
      const savedLanguage = localStorage.getItem('maca-preferred-language');
      
      if (savedLanguage && supportedLanguages.includes(savedLanguage)) {
        navigate(`/${savedLanguage}`, { replace: true });
        return;
      }

      // Erkenne Browser-Sprache
      const browserLang = navigator.language.split('-')[0].toLowerCase();
      
      // Verwende Browser-Sprache wenn unterstützt, sonst Englisch
      const detectedLang = supportedLanguages.includes(browserLang) ? browserLang : 'en';
      
      // Speichere erkannte Sprache
      localStorage.setItem('maca-preferred-language', detectedLang);
      
      // Leite zur erkannten Sprache weiter
      navigate(`/${detectedLang}`, { replace: true });
    }
  }, [location.pathname, navigate]);

  return null;
}