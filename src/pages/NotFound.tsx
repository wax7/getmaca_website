import { Link, useLocation } from 'react-router';
import { motion } from 'motion/react';
import { Home, ArrowLeft } from 'lucide-react';
import { translations, type Language } from '../locales/translations';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { useDarkMode } from '../hooks/useDarkMode';
import { useScrolled } from '../hooks/useScrolled';

const SUPPORTED_LANGUAGES: Language[] = ['en', 'de', 'es', 'fr', 'it', 'pt', 'ja', 'zh'];

function detectLanguageFromPath(pathname: string): Language {
  const parts = pathname.split('/').filter(Boolean);
  const first = parts[0] as Language;
  if (first && SUPPORTED_LANGUAGES.includes(first)) {
    return first;
  }
  return 'en';
}

export function NotFound() {
  const location = useLocation();
  const lang = detectLanguageFromPath(location.pathname);
  const t = translations[lang].notFound;
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const scrolled = useScrolled(50);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 flex flex-col">
      <Header
        scrolled={scrolled}
        currentLang={lang}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        badge="404"
      >
        <div />
      </Header>

      <main id="main-content" className="flex-1 flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-2xl"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring' }}
            className="text-9xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-8"
          >
            404
          </motion.div>
          
          <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t.title}
          </h1>
          
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
            {t.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to={`/${lang}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Home className="w-5 h-5" />
              <span>{t.backHome}</span>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-slate-900 dark:text-white rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>{t.goBack}</span>
            </button>
          </div>

          <div className="mt-12">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              {t.helpText}{' '}
              <Link to={`/${lang}/faq`} className="text-blue-600 dark:text-blue-400 hover:underline">
                {t.faqLink}
              </Link>
            </p>
          </div>
        </motion.div>
      </main>

      <Footer currentLang={lang} />
    </div>
  );
}