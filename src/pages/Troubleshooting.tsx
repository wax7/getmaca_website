import { useState, useMemo } from 'react';
import { useNavigate, Link } from 'react-router';
import { motion } from 'motion/react';
import { Wrench, ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { Language } from '../locales/translations';
import { troubleshootingTranslations } from '../utils/troubleshooting-translations';
import { Header } from '../components/Header';
import { LanguageSelector } from '../components/LanguageSelector';
import { useDarkMode } from '../hooks/useDarkMode';
import { useScrolled } from '../hooks/useScrolled';
import { useValidatedLang } from '../hooks/useValidatedLang';
import { Footer } from '../components/Footer';
import { DiscordIcon } from '../components/DiscordIcon';

export function Troubleshooting() {
  const currentLang = useValidatedLang('troubleshooting');
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const scrolled = useScrolled(50);
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const content = useMemo(() => {
    return troubleshootingTranslations[currentLang] || troubleshootingTranslations.en;
  }, [currentLang]);

  const handleLanguageChange = (newLang: Language) => {
    navigate(`/${newLang}/troubleshooting`);
  };

  const toggleItem = (index: number) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen mac-bg text-[#1d1d1f] dark:text-[#f5f5f7] transition-colors duration-300">
      {/* Header */}
      <Header
        scrolled={scrolled}
        currentLang={currentLang}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        onLanguageChange={handleLanguageChange}
        badge={content.headerBadge}
      >
        <LanguageSelector
          currentLang={currentLang}
          onLanguageChange={handleLanguageChange}
        />
      </Header>

      <main id="main-content">
      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-8 sm:pb-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to={`/${currentLang}`}
            className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors mb-6 sm:mb-8 group min-h-[44px]"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>{content.backToHome}</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl">
                <Wrench className="w-6 h-6 sm:w-9 sm:h-9 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white">
                {content.pageTitle}
              </h1>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Troubleshooting Items */}
      <section className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
          {content.items.map((item, index) => {
            const isOpen = openItems.has(index);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full flex items-start justify-between gap-4 p-4 sm:p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors min-h-[44px]"
                >
                  <div className="flex-1">
                    <h2 className="text-base sm:text-lg text-slate-900 dark:text-white">
                      {item.title}
                    </h2>
                  </div>
                  <div className="flex-shrink-0 mt-1">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-orange-600 dark:text-orange-400" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-slate-200 dark:border-slate-700"
                  >
                    <div className="p-4 sm:p-6 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.description}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-10 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center shadow-2xl"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-3 sm:mb-4">
              {content.stillNeedHelp}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-orange-100 mb-6 sm:mb-8">
              {content.stillNeedHelpDesc}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <a
                href="mailto:support@getmaca.de"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-orange-600 rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-sm sm:text-base min-h-[44px]"
              >
                support@getmaca.de
              </a>
              <a
                href="https://discord.gg/hztjqAweUz"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#5865F2] text-white rounded-xl hover:bg-[#4752C4] transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-sm sm:text-base min-h-[44px]"
              >
                <DiscordIcon className="w-5 h-5" />
                Discord
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} />
    </div>
  );
}