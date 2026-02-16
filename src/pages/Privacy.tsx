import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { motion } from 'motion/react';
import { Shield, ArrowLeft, Volume2 } from 'lucide-react';
import { Language } from '../locales/translations';
import { privacyTranslations } from '../utils/privacy-translations';
import { Header } from '../components/Header';
import { LanguageSelector } from '../components/LanguageSelector';
import { useDarkMode } from '../hooks/useDarkMode';

export function Privacy() {
  const { lang } = useParams();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const validLanguages: Language[] = ['en', 'de', 'es', 'fr', 'it', 'pt', 'ja', 'zh'];
  const requestedLang = lang as Language;
  const currentLang: Language = (lang && validLanguages.includes(requestedLang)) ? requestedLang : 'en';

  useEffect(() => {
    if (!lang || !validLanguages.includes(requestedLang)) {
      navigate('/en/privacy', { replace: true });
    }
  }, [lang, requestedLang, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const t = useMemo(() => {
    return privacyTranslations[currentLang] || privacyTranslations.en;
  }, [currentLang]);

  const handleLanguageChange = (newLang: Language) => {
    navigate(`/${newLang}/privacy`);
  };

  const backToHome = currentLang === 'de' ? 'Zurück zur Startseite' :
                     currentLang === 'es' ? 'Volver a Inicio' :
                     currentLang === 'fr' ? 'Retour à l\'Accueil' :
                     currentLang === 'it' ? 'Torna alla Home' :
                     currentLang === 'pt' ? 'Voltar ao Início' :
                     currentLang === 'ja' ? 'ホームに戻る' :
                     currentLang === 'zh' ? '返回首页' :
                     'Back to Home';

  const headerBadge = currentLang === 'de' ? '🔒 Deine Privatsphäre ist geschützt' :
                      currentLang === 'es' ? '🔒 Tu Privacidad Está Protegida' :
                      currentLang === 'fr' ? '🔒 Votre Vie Privée Est Protégée' :
                      currentLang === 'it' ? '🔒 La Tua Privacy È Protetta' :
                      currentLang === 'pt' ? '🔒 Sua Privacidade Está Protegida' :
                      currentLang === 'ja' ? '🔒 プライバシーは保護されています' :
                      currentLang === 'zh' ? '🔒 您的隐私受到保护' :
                      '🔒 Your Privacy Is Protected';

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 transition-colors duration-300">
      {/* Header */}
      <Header
        scrolled={scrolled}
        currentLang={currentLang}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        badge={headerBadge}
      >
        <LanguageSelector
          currentLang={currentLang}
          onLanguageChange={handleLanguageChange}
        />
      </Header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            to={`/${currentLang}`}
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-8 transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>{backToHome}</span>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl mb-6 shadow-2xl">
              <Shield className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl mb-4 text-slate-900 dark:text-white">
              {t.title}
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              {t.lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white dark:bg-slate-800 rounded-3xl shadow-xl p-8 md:p-12 mb-8 border border-slate-200 dark:border-slate-700"
          >
            <p className="text-xl text-slate-700 dark:text-slate-300 leading-relaxed mb-8">
              {t.intro}
            </p>

            <div className="space-y-12">
              {/* Data Collection */}
              <div>
                <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-4">
                  {t.sections.dataCollection.title}
                </h2>
                <ul className="space-y-3">
                  {t.sections.dataCollection.content.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green-600 dark:text-green-400 mt-1">✓</span>
                      <span className="text-lg text-slate-700 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Data Storage */}
              <div>
                <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-4">
                  {t.sections.dataStorage.title}
                </h2>
                <ul className="space-y-3">
                  {t.sections.dataStorage.content.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                      <span className="text-lg text-slate-700 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Data Sharing */}
              <div>
                <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-4">
                  {t.sections.dataSharing.title}
                </h2>
                <ul className="space-y-3">
                  {t.sections.dataSharing.content.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-red-600 dark:text-red-400 mt-1">✗</span>
                      <span className="text-lg text-slate-700 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* User Rights */}
              <div>
                <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-4">
                  {t.sections.userRights.title}
                </h2>
                <ul className="space-y-3">
                  {t.sections.userRights.content.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-purple-600 dark:text-purple-400 mt-1">→</span>
                      <span className="text-lg text-slate-700 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Security */}
              <div>
                <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-4">
                  {t.sections.security.title}
                </h2>
                <ul className="space-y-3">
                  {t.sections.security.content.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-green-600 dark:text-green-400 mt-1">🔒</span>
                      <span className="text-lg text-slate-700 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Third Party */}
              <div>
                <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-4">
                  {t.sections.thirdParty.title}
                </h2>
                <ul className="space-y-3">
                  {t.sections.thirdParty.content.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-orange-600 dark:text-orange-400 mt-1">⚠</span>
                      <span className="text-lg text-slate-700 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Children */}
              <div>
                <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-4">
                  {t.sections.children.title}
                </h2>
                <ul className="space-y-3">
                  {t.sections.children.content.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-pink-600 dark:text-pink-400 mt-1">♥</span>
                      <span className="text-lg text-slate-700 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Changes */}
              <div>
                <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-4">
                  {t.sections.changes.title}
                </h2>
                <ul className="space-y-3">
                  {t.sections.changes.content.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-yellow-600 dark:text-yellow-400 mt-1">📝</span>
                      <span className="text-lg text-slate-700 dark:text-slate-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact */}
              <div className="border-t border-slate-200 dark:border-slate-700 pt-8">
                <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-4">
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

      {/* Footer */}
      <footer className="py-16 px-6 bg-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Volume2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-semibold text-white">MACA</span>
              </div>
              <p className="text-slate-500">
                {currentLang === 'de' ? 'Master Audio Control für macOS' :
                 currentLang === 'es' ? 'Control maestro de audio para macOS' :
                 currentLang === 'fr' ? 'Contrôle audio principal pour macOS' :
                 currentLang === 'it' ? 'Controllo audio principale per macOS' :
                 currentLang === 'pt' ? 'Controle de áudio principal para macOS' :
                 currentLang === 'ja' ? 'macOS用マスターオーディオコントロール' :
                 currentLang === 'zh' ? 'macOS音频主控制' :
                 'Master Audio Control for macOS'}
              </p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">
                {currentLang === 'de' ? 'Rechtliches' :
                 currentLang === 'es' ? 'Legal' :
                 currentLang === 'fr' ? 'Mentions Légales' :
                 currentLang === 'it' ? 'Note Legali' :
                 currentLang === 'pt' ? 'Jurídico' :
                 currentLang === 'ja' ? '法的情報' :
                 currentLang === 'zh' ? '法律信息' :
                 'Legal'}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to={`/${currentLang}/imprint`}
                    className="hover:text-white transition-colors"
                  >
                    {currentLang === 'de' ? 'Impressum' :
                     currentLang === 'es' ? 'Aviso Legal' :
                     currentLang === 'fr' ? 'Mentions Légales' :
                     currentLang === 'it' ? 'Note Legali' :
                     currentLang === 'pt' ? 'Aviso Legal' :
                     currentLang === 'ja' ? '法的情報' :
                     currentLang === 'zh' ? '法律信息' :
                     'Imprint'}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/${currentLang}/privacy`}
                    className="hover:text-white transition-colors"
                  >
                    {currentLang === 'de' ? 'Datenschutz' :
                     currentLang === 'es' ? 'Privacidad' :
                     currentLang === 'fr' ? 'Confidentialité' :
                     currentLang === 'it' ? 'Privacy' :
                     currentLang === 'pt' ? 'Privacidade' :
                     currentLang === 'ja' ? 'プライバシー' :
                     currentLang === 'zh' ? '隐私' :
                     'Privacy'}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold mb-4">
                {currentLang === 'de' ? 'Support' :
                 currentLang === 'es' ? 'Soporte' :
                 currentLang === 'fr' ? 'Assistance' :
                 currentLang === 'it' ? 'Supporto' :
                 currentLang === 'pt' ? 'Suporte' :
                 currentLang === 'ja' ? 'サポート' :
                 currentLang === 'zh' ? '支持' :
                 'Support'}
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to={`/${currentLang}/feedback`}
                    className="hover:text-white transition-colors"
                  >
                    {currentLang === 'de' ? 'Feedback & Bugs' :
                     currentLang === 'es' ? 'Comentarios y errores' :
                     currentLang === 'fr' ? 'Commentaires et bugs' :
                     currentLang === 'it' ? 'Feedback e bug' :
                     currentLang === 'pt' ? 'Feedback e bugs' :
                     currentLang === 'ja' ? 'フィードバックとバグ' :
                     currentLang === 'zh' ? '反馈和错误' :
                     'Feedback & Bugs'}
                  </Link>
                </li>
                <li>
                  <a href="mailto:Support@getmaca.de" className="hover:text-white transition-colors">
                    Support@getmaca.de
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
            <p>
              © {new Date().getFullYear()} AMX Mediensysteme.{' '}
              {currentLang === 'de' ? 'Alle Rechte vorbehalten.' :
               currentLang === 'es' ? 'Todos los derechos reservados.' :
               currentLang === 'fr' ? 'Tous droits réservés.' :
               currentLang === 'it' ? 'Tutti i diritti riservati.' :
               currentLang === 'pt' ? 'Todos os direitos reservados.' :
               currentLang === 'ja' ? '全著作権所有。' :
               currentLang === 'zh' ? '版权所有。' :
               'All rights reserved.'}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}