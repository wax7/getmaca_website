import { useParams, useNavigate } from 'react-router';
import { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { FileText } from 'lucide-react';
import { type Language, translations } from '../locales/translations';
import { Header } from '../components/Header';
import { LanguageSelector } from '../components/LanguageSelector';
import { useDarkMode } from '../hooks/useDarkMode';

export function Imprint() {
  const { lang } = useParams();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  
  // Validate language and default to 'en' if invalid
  const validLanguages: Language[] = ['en', 'de', 'es', 'fr', 'it', 'pt', 'ja', 'zh'];
  const requestedLang = lang as Language;
  
  // Always use a valid language, fallback to 'en'
  const currentLang: Language = (lang && validLanguages.includes(requestedLang)) ? requestedLang : 'en';
  
  // If no lang parameter at all, redirect immediately
  useEffect(() => {
    if (!lang) {
      navigate('/en/imprint', { replace: true });
    } else if (!validLanguages.includes(requestedLang)) {
      navigate('/en/imprint', { replace: true });
    }
  }, [lang, requestedLang, navigate]);

  const handleLanguageChange = (newLang: Language) => {
    navigate(`/${newLang}/imprint`);
  };
  
  // Get translations directly with fallback to English
  const t = useMemo(() => {
    // Always have a fallback
    if (!translations) {
      console.error('Translations object is undefined');
      return null;
    }
    
    // Try to get the current language
    const translation = translations[currentLang];
    if (!translation) {
      console.warn(`Translation for ${currentLang} not found, falling back to English`);
      return translations.en;
    }
    
    return translation;
  }, [currentLang]);
  
  // Safety check: if translations haven't loaded yet, show loading state
  if (!t || !t.imprint || !t.imprint.title) {
    return (
      <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 flex items-center justify-center ${isDarkMode ? 'dark' : ''}`}>
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading translations...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      <Header 
        scrolled={scrolled} 
        currentLang={currentLang}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        badge={t.headerBadge}
      >
        <LanguageSelector 
          currentLang={currentLang} 
          onLanguageChange={handleLanguageChange} 
        />
      </Header>

      <div className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <FileText className="w-12 h-12 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {t.imprint.title}
            </h1>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 md:p-12 border border-slate-200 dark:border-slate-700"
          >
            <div className="space-y-8 text-slate-700 dark:text-slate-300">
              <section>
                <h2 className="text-2xl mb-4 text-slate-900 dark:text-slate-100">{t.imprint.owner}</h2>
                <p className="leading-relaxed">
                  AMX Mediensysteme<br />
                  Inh. Dirk Wenk
                </p>
              </section>

              <section>
                <h2 className="text-2xl mb-4 text-slate-900 dark:text-slate-100">{t.imprint.address}</h2>
                <p className="leading-relaxed">
                  Remigiusstr. 63<br />
                  41747 Viersen<br />
                  Germany
                </p>
              </section>

              <section>
                <h2 className="text-2xl mb-4 text-slate-900 dark:text-slate-100">{t.imprint.contact}</h2>
                <p className="leading-relaxed">
                  Email: <a href="mailto:Support@getmaca.de" className="text-blue-600 hover:text-blue-700 underline">Support@getmaca.de</a>
                </p>
              </section>

              <section>
                <h2 className="text-2xl mb-4 text-slate-900 dark:text-slate-100">{t.imprint.responsible}</h2>
                <p className="leading-relaxed">
                  Dirk Wenk
                </p>
              </section>

              <section className="pt-8 border-t border-slate-200 dark:border-slate-700">
                <p className="text-sm text-slate-600 leading-relaxed dark:text-slate-400">
                  {t.imprint.disclaimer}
                </p>
              </section>

              <section className="pt-4">
                <h2 className="text-2xl mb-4 text-slate-900 dark:text-slate-100">App Store Compliance</h2>
                <p className="text-sm text-slate-600 leading-relaxed dark:text-slate-400">
                  MACA - Audio Mixer is available on the Apple App Store and complies with all Apple Developer Program License Agreement requirements. This application does not collect, store, or transmit any personally identifiable information. All audio processing is performed locally on your device.
                </p>
              </section>

              <section className="pt-4">
                <h2 className="text-2xl mb-4 text-slate-900 dark:text-slate-100">Consumer Rights</h2>
                <p className="text-sm text-slate-600 leading-relaxed dark:text-slate-400">
                  EU consumers have the right to withdraw from this purchase within 14 days without giving any reason. In accordance with Apple's App Store policies, refunds are handled directly through Apple. For refund requests, please contact Apple Support or visit reportaproblem.apple.com.
                </p>
              </section>

              <section className="pt-4">
                <h2 className="text-2xl mb-4 text-slate-900 dark:text-slate-100">Copyright Notice</h2>
                <p className="text-sm text-slate-600 leading-relaxed dark:text-slate-400">
                  © 2026 AMX Mediensysteme. All rights reserved. MACA and the MACA logo are trademarks of AMX Mediensysteme. macOS, Mac, and Apple Silicon are trademarks of Apple Inc., registered in the U.S. and other countries.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}