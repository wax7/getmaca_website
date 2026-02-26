import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { motion } from 'motion/react';
import { HelpCircle, ArrowLeft, Volume2, ChevronDown, ChevronUp } from 'lucide-react';
import { Language } from '../locales/translations';
import { faqContentTranslations } from '../utils/faq-content-translations';
import { Header } from '../components/Header';
import { LanguageSelector } from '../components/LanguageSelector';
import { useDarkMode } from '../hooks/useDarkMode';
import { useScrolled } from '../hooks/useScrolled';
import { Footer } from '../components/Footer';

export function FAQ() {
  const { lang } = useParams();
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const scrolled = useScrolled(50);
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const validLanguages: Language[] = ['en', 'de', 'es', 'fr', 'it', 'pt', 'ja', 'zh'];
  const requestedLang = lang as Language;
  const currentLang: Language = (lang && validLanguages.includes(requestedLang)) ? requestedLang : 'en';

  useEffect(() => {
    if (!lang || !validLanguages.includes(requestedLang)) {
      navigate('/en/faq', { replace: true });
    }
  }, [lang, requestedLang, navigate]);

  const content = useMemo(() => {
    return faqContentTranslations[currentLang] || faqContentTranslations.en;
  }, [currentLang]);

  const handleLanguageChange = (newLang: Language) => {
    navigate(`/${newLang}/faq`);
  };

  const toggleItem = (categoryId: string, itemIndex: number) => {
    const key = `${categoryId}-${itemIndex}`;
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(key)) {
        newSet.delete(key);
      } else {
        newSet.add(key);
      }
      return newSet;
    });
  };

  const backToHome = currentLang === 'de' ? 'Zurück zur Startseite' :
                     currentLang === 'es' ? 'Volver a Inicio' :
                     currentLang === 'fr' ? 'Retour à l\'Accueil' :
                     currentLang === 'it' ? 'Torna alla Home' :
                     currentLang === 'pt' ? 'Voltar ao Início' :
                     currentLang === 'ja' ? 'ホームに戻る' :
                     currentLang === 'zh' ? '返回首页' :
                     'Back to Home';

  const headerBadge = currentLang === 'de' ? '❓ Häufig gestellte Fragen' :
                      currentLang === 'es' ? '❓ Preguntas Frecuentes' :
                      currentLang === 'fr' ? '❓ Questions Fréquentes' :
                      currentLang === 'it' ? '❓ Domande Frequenti' :
                      currentLang === 'pt' ? '❓ Perguntas Frequentes' :
                      currentLang === 'ja' ? '❓ よくある質問' :
                      currentLang === 'zh' ? '❓ 常见问题' :
                      '❓ Frequently Asked Questions';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 transition-colors duration-300">
      {/* Header */}
      <Header
        scrolled={scrolled}
        currentLang={currentLang}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        onLanguageChange={handleLanguageChange}
        badge={headerBadge}
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
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors mb-6 sm:mb-8 group min-h-[44px]"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>{backToHome}</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-xl">
                <HelpCircle className="w-6 h-6 sm:w-9 sm:h-9 text-white" />
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-900 dark:text-white">
                {content.pageTitle}
              </h1>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      {content.categories.length > 0 && (
        <section className="py-6 sm:py-8 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg"
            >
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 dark:text-white mb-4 sm:mb-6">
                {content.tableOfContents}
              </h2>
              <ul className="grid md:grid-cols-2 gap-3">
                {content.categories.map((category, index) => (
                  <li key={category.id}>
                    <a
                      href={`#${category.id}`}
                      className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      <span className="text-slate-400 dark:text-slate-500">{index + 1}.</span>
                      <span>{category.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>
      )}

      {/* FAQ Categories */}
      <section className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          {content.categories.map((category, categoryIndex) => (
            <motion.div
              key={category.id}
              id={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="scroll-mt-24"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white mb-6 sm:mb-8 flex items-center gap-3">
                <span className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg sm:rounded-xl flex items-center justify-center text-white text-sm sm:text-lg flex-shrink-0">
                  {categoryIndex + 1}
                </span>
                {category.title}
              </h2>

              <div className="space-y-3 sm:space-y-4">
                {category.items.map((item, itemIndex) => {
                  const key = `${category.id}-${itemIndex}`;
                  const isOpen = openItems.has(key);

                  return (
                    <div
                      key={itemIndex}
                      className="bg-white dark:bg-slate-800 rounded-xl shadow-md overflow-hidden"
                    >
                      <button
                        onClick={() => toggleItem(category.id, itemIndex)}
                        className="w-full flex items-start justify-between gap-4 p-4 sm:p-6 text-left hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors min-h-[44px]"
                      >
                        <div className="flex-1">
                          <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                            {item.question}
                          </h3>
                        </div>
                        <div className="flex-shrink-0 mt-1">
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-blue-600 dark:text-blue-400" />
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
                            {item.answer}
                          </div>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}

          {/* Technical Standards */}
          {content.technicalStandards.sections.equalizer.items.length > 0 && (
            <motion.div
              id="technical-standards"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="scroll-mt-24"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white mb-6 sm:mb-8">
                {content.technicalStandards.title}
              </h2>

              <div className="bg-white dark:bg-slate-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg space-y-6 sm:space-y-8">
                {/* Equalizer */}
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 sm:mb-4">
                    {content.technicalStandards.sections.equalizer.title}
                  </h3>
                  <ul className="space-y-2">
                    {content.technicalStandards.sections.equalizer.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Audio Analysis */}
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 sm:mb-4">
                    {content.technicalStandards.sections.audioAnalysis.title}
                  </h3>
                  <ul className="space-y-2">
                    {content.technicalStandards.sections.audioAnalysis.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Normalization */}
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 sm:mb-4">
                    {content.technicalStandards.sections.normalization.title}
                  </h3>
                  <ul className="space-y-2">
                    {content.technicalStandards.sections.normalization.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Audio Levels */}
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-900 dark:text-white mb-3 sm:mb-4">
                    {content.technicalStandards.sections.audioLevels.title}
                  </h3>
                  <ul className="space-y-2">
                    {content.technicalStandards.sections.audioLevels.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 text-slate-600 dark:text-slate-300">
                        <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-10 sm:py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center shadow-2xl"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl text-white mb-3 sm:mb-4">
              {currentLang === 'de' ? 'Noch Fragen?' :
               currentLang === 'es' ? '¿Más preguntas?' :
               currentLang === 'fr' ? 'D\'autres questions ?' :
               currentLang === 'it' ? 'Altre domande?' :
               currentLang === 'pt' ? 'Mais perguntas?' :
               currentLang === 'ja' ? 'さらに質問がありますか？' :
               currentLang === 'zh' ? '还有问题？' :
               'Still have questions?'}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-blue-100 mb-6 sm:mb-8">
              {currentLang === 'de' ? 'Unser Support-Team hilft gerne weiter.' :
               currentLang === 'es' ? 'Nuestro equipo de soporte está encantado de ayudar.' :
               currentLang === 'fr' ? 'Notre équipe de support est heureuse d\'aider.' :
               currentLang === 'it' ? 'Il nostro team di supporto è felice di aiutare.' :
               currentLang === 'pt' ? 'Nossa equipe de suporte está feliz em ajudar.' :
               currentLang === 'ja' ? 'サポートチームが喜んでお手伝いします。' :
               currentLang === 'zh' ? '我们的支持团队很乐意提供帮助。' :
               'Our support team is happy to help.'}
            </p>
            <a
              href="mailto:support@getmaca.de"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-xl hover:bg-slate-50 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-sm sm:text-base min-h-[44px]"
            >
              support@getmaca.de
            </a>
          </motion.div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <Footer currentLang={currentLang} />
    </div>
  );
}