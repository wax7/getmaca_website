import { useDarkMode } from '../hooks/useDarkMode';
import { useScrolled } from '../hooks/useScrolled';
import { useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { motion } from 'motion/react';
import { Shield, ArrowLeft, Volume2 } from 'lucide-react';
import { Language } from '../locales/translations';
import { privacyTranslations } from '../utils/privacy-translations';
import { Header } from '../components/Header';
import { LanguageSelector } from '../components/LanguageSelector';
import { Footer } from '../components/Footer';

export function Privacy() {
  const { lang } = useParams();
  const navigate = useNavigate();
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const scrolled = useScrolled(50);

  const validLanguages: Language[] = ['en', 'de', 'es', 'fr', 'it', 'ja', 'zh-Hans', 'zh-Hant', 'ar', 'ru', 'nl', 'tr', 'sv', 'da', 'ko', 'nb'];
  const requestedLang = lang as Language;
  const currentLang: Language = (lang && validLanguages.includes(requestedLang)) ? requestedLang : 'en';

  useEffect(() => {
    if (!lang || !validLanguages.includes(requestedLang)) {
      navigate('/en/privacy', { replace: true });
    }
  }, [lang, requestedLang, navigate]);

  const t = useMemo(() => {
    return privacyTranslations[currentLang] || privacyTranslations.en;
  }, [currentLang]);

  const handleLanguageChange = (newLang: Language) => {
    navigate(`/${newLang}/privacy`);
  };

  // Localized labels for Privacy detail fields
  const labels = {
    purpose: currentLang === 'de' ? 'Zweck' :
             currentLang === 'es' ? 'Propósito' :
             currentLang === 'fr' ? 'Objectif' :
             currentLang === 'it' ? 'Scopo' :
             currentLang === 'ja' ? '目的' :
             currentLang === 'zh-Hans' ? '用途' :
             currentLang === 'zh-Hant' ? '用途' :
             'Purpose',
    legalBasis: currentLang === 'de' ? 'Rechtsgrundlage' :
                currentLang === 'es' ? 'Base legal' :
                currentLang === 'fr' ? 'Base juridique' :
                currentLang === 'it' ? 'Base giuridica' :
                currentLang === 'ja' ? '法的根拠' :
                currentLang === 'zh-Hans' ? '法律依据' :
                currentLang === 'zh-Hant' ? '法律依据' :
                'Legal Basis',
    duration: currentLang === 'de' ? 'Dauer' :
              currentLang === 'es' ? 'Duración' :
              currentLang === 'fr' ? 'Durée' :
              currentLang === 'it' ? 'Durata' :
              currentLang === 'ja' ? '期間' :
              currentLang === 'zh-Hans' ? '持续时间' :
              currentLang === 'zh-Hant' ? '持续时间' :
              'Duration',
    dataTransfer: currentLang === 'de' ? 'Datenübertragung' :
                  currentLang === 'es' ? 'Transferencia de datos' :
                  currentLang === 'fr' ? 'Transfert de données' :
                  currentLang === 'it' ? 'Trasferimento dati' :
                  currentLang === 'ja' ? 'データ転送' :
                  currentLang === 'zh-Hans' ? '数据传输' :
                  currentLang === 'zh-Hant' ? '数据传输' :
                  'Data Transfer',
    privacyPolicy: currentLang === 'de' ? 'Datenschutzrichtlinie' :
                   currentLang === 'es' ? 'Política de privacidad' :
                   currentLang === 'fr' ? 'Politique de confidentialité' :
                   currentLang === 'it' ? 'Informativa sulla privacy' :
                   currentLang === 'ja' ? 'プライバシーポリシー' :
                   currentLang === 'zh-Hans' ? '隐私政策' :
                   currentLang === 'zh-Hant' ? '隐私政策' :
                   'Privacy Policy',
  };

  const backToHome = currentLang === 'de' ? 'Zurück zur Startseite' :
                     currentLang === 'es' ? 'Volver a Inicio' :
                     currentLang === 'fr' ? 'Retour à l\'Accueil' :
                     currentLang === 'it' ? 'Torna alla Home' :
                     currentLang === 'ja' ? 'ホームに戻る' :
                     currentLang === 'zh-Hans' ? '返回首页' :
                     currentLang === 'zh-Hant' ? '返回首页' :
                     'Back to Home';

  const headerBadge = currentLang === 'de' ? '🔒 Deine Privatsphäre ist geschützt' :
                      currentLang === 'es' ? '🔒 Tu Privacidad Está Protegida' :
                      currentLang === 'fr' ? '🔒 Votre Vie Privée Est Protégée' :
                      currentLang === 'it' ? '🔒 La Tua Privacy È Protetta' :
                      currentLang === 'ja' ? '🔒 プライバシーは保護されています' :
                      currentLang === 'zh-Hans' ? '🔒 您的隐私受到保护' :
                      currentLang === 'zh-Hant' ? '🔒 您的隐私受到保护' :
                      '🔒 Your Privacy Is Protected';

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
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6 sm:mb-8 transition-colors group min-h-[44px]"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>{backToHome}</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 sm:mb-12"
          >
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl sm:rounded-3xl mb-4 sm:mb-6 shadow-2xl">
              <Shield className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-3 sm:mb-4 text-slate-900 dark:text-white">
              {t.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400">
              {t.lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 sm:py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white dark:bg-slate-800 rounded-2xl sm:rounded-3xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-12 mb-8 border border-slate-200 dark:border-slate-700"
          >
            <p className="text-base sm:text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-6 sm:mb-8">
              {t.intro}
            </p>
            
            {/* Website Notice */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-6 sm:mb-8">
              <p className="text-base text-blue-900 dark:text-blue-100">
                {t.websiteNotice}
              </p>
            </div>

            <div className="space-y-8 sm:space-y-12">
              {/* Website Data */}
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-4 sm:mb-6">
                  {t.sections.websiteData.title}
                </h2>
                
                {/* LocalStorage */}
                <div className="mb-6">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">
                    {t.sections.websiteData.localStorage.title}
                  </h3>
                  <div className="space-y-4">
                    {t.sections.websiteData.localStorage.items.map((item, index) => (
                      <div key={index} className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 border border-slate-200 dark:border-slate-600">
                        <div className="font-mono text-sm text-purple-600 dark:text-purple-400 mb-2">
                          {item.name}
                        </div>
                        <div className="text-slate-700 dark:text-slate-300 mb-1">
                          <strong>{labels.purpose}:</strong> {item.purpose}
                        </div>
                        <div className="text-slate-600 dark:text-slate-400 text-sm mb-1">
                          <strong>{labels.legalBasis}:</strong> {item.legal}
                        </div>
                        <div className="text-slate-600 dark:text-slate-400 text-sm">
                          <strong>{labels.duration}:</strong> {item.duration}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* External Services */}
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-800 dark:text-slate-200 mb-3 sm:mb-4">
                    {t.sections.websiteData.externalServices.title}
                  </h3>
                  <div className="space-y-4">
                    {t.sections.websiteData.externalServices.items.map((item, index) => (
                      <div key={index} className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 border border-slate-200 dark:border-slate-600">
                        <div className="font-semibold text-blue-600 dark:text-blue-400 mb-2">
                          {item.name}
                        </div>
                        <div className="text-slate-700 dark:text-slate-300 mb-1">
                          <strong>{labels.purpose}:</strong> {item.purpose}
                        </div>
                        <div className="text-slate-600 dark:text-slate-400 text-sm mb-1">
                          <strong>{labels.dataTransfer}:</strong> {item.dataTransfer}
                        </div>
                        <div className="text-slate-600 dark:text-slate-400 text-sm mb-1">
                          <strong>{labels.legalBasis}:</strong> {item.legal}
                        </div>
                        <div className="text-slate-600 dark:text-slate-400 text-sm">
                          <strong>{labels.privacyPolicy}:</strong>{' '}
                          <a 
                            href={item.privacyLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                          >
                            {item.privacyLink}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Data Collection */}
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-4">
                  {t.sections.dataCollection.title}
                </h2>
                <ul className="space-y-3">
                  {t.sections.dataCollection.content.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                      <span className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Data Storage */}
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-4">
                  {t.sections.dataStorage.title}
                </h2>
                <ul className="space-y-3">
                  {t.sections.dataStorage.content.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                      <span className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Data Sharing */}
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-4">
                  {t.sections.dataSharing.title}
                </h2>
                <ul className="space-y-3">
                  {t.sections.dataSharing.content.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-red-600 dark:text-red-400 mt-1">✗</span>
                      <span className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* User Rights */}
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-4">
                  {t.sections.userRights.title}
                </h2>
                <ul className="space-y-3">
                  {t.sections.userRights.content.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">→</span>
                      <span className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Security */}
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-4">
                  {t.sections.security.title}
                </h2>
                <ul className="space-y-3">
                  {t.sections.security.content.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green-600 dark:text-green-400 mt-1">🔒</span>
                      <span className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Third Party */}
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-4">
                  {t.sections.thirdParty.title}
                </h2>
                <ul className="space-y-3">
                  {t.sections.thirdParty.content.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-orange-600 dark:text-orange-400 mt-1">⚠</span>
                      <span className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Children */}
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-4">
                  {t.sections.children.title}
                </h2>
                <ul className="space-y-3">
                  {t.sections.children.content.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-pink-600 dark:text-pink-400 mt-1">♥</span>
                      <span className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Supervisory Authority */}
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-4">
                  {t.sections.supervisoryAuthority.title}
                </h2>
                <ul className="space-y-3">
                  {t.sections.supervisoryAuthority.content.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">⚖</span>
                      <span className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Changes */}
              <div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-4">
                  {t.sections.changes.title}
                </h2>
                <ul className="space-y-3">
                  {t.sections.changes.content.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-yellow-600 dark:text-yellow-400 mt-1">📝</span>
                      <span className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="border-t border-slate-200 dark:border-slate-700 pt-8">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white mb-4">
                  {t.sections.contact.title}
                </h2>
                <div className="space-y-3">
                  {t.sections.contact.content.map((item, index) => (
                    <p key={index} className="text-lg text-slate-700 dark:text-slate-300">
                      {item}
                    </p>
                  ))}
                </div>
              </div>
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