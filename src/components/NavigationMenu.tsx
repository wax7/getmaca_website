import { X, Home, FileText, Download, Shield, HelpCircle, Clock, Moon, Sun, Globe, Check, Scale } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import type { Language } from '../locales/translations';
import { languageNames } from '../locales/translations';
import { motion, AnimatePresence } from 'motion/react';

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  isDarkMode: boolean;
  onToggleDarkMode?: () => void;
  onLanguageChange?: (lang: Language) => void;
}

export function NavigationMenu({ isOpen, onClose, currentLang, isDarkMode, onToggleDarkMode, onLanguageChange }: NavigationMenuProps) {
  const appStoreUrl = "https://apps.apple.com/us/app/maca-master-audio-control/id6759258773";
  const navigate = useNavigate();

  const languages: Language[] = ['en', 'de', 'es', 'fr', 'it', 'pt', 'ja', 'zh'];

  const menuItems: Record<Language, {
    home: string;
    faq: string;
    imprint: string;
    terms: string;
    privacy: string;
    download: string;
  }> = {
    en: {
      home: 'Home',
      faq: 'FAQ',
      imprint: 'Imprint',
      terms: 'Terms of Use',
      privacy: 'Privacy Policy',
      download: 'Download Now'
    },
    de: {
      home: 'Startseite',
      faq: 'Häufig gestellte Fragen',
      imprint: 'Impressum',
      terms: 'Nutzungsbedingungen',
      privacy: 'Datenschutz',
      download: 'Jetzt herunterladen'
    },
    es: {
      home: 'Inicio',
      faq: 'Preguntas Frecuentes',
      imprint: 'Aviso legal',
      terms: 'Términos de uso',
      privacy: 'Privacidad',
      download: 'Descargar ahora'
    },
    fr: {
      home: 'Accueil',
      faq: 'Questions Fréquentes',
      imprint: 'Mentions légales',
      terms: 'Conditions d\'utilisation',
      privacy: 'Confidentialité',
      download: 'Télécharger maintenant'
    },
    it: {
      home: 'Home',
      faq: 'Domande Frequenti',
      imprint: 'Note legali',
      terms: 'Termini di utilizzo',
      privacy: 'Privacy',
      download: 'Scarica ora'
    },
    pt: {
      home: 'Início',
      faq: 'Perguntas Frequentes',
      imprint: 'Informazione legal',
      terms: 'Termos de uso',
      privacy: 'Privacidade',
      download: 'Baixar agora'
    },
    ja: {
      home: 'ホーム',
      faq: 'よくある質問',
      imprint: '法的情報',
      terms: '利用規約',
      privacy: 'プライバシー',
      download: '今すぐダウンロード'
    },
    zh: {
      home: '首页',
      faq: '常见问题',
      imprint: '法律信息',
      terms: '使用条款',
      privacy: '隐私政策',
      download: '立即下载'
    }
  };

  const t = menuItems[currentLang] || menuItems.en;

  const subtexts: Record<Language, {
    homeDesc: string;
    imprintDesc: string;
    privacyDesc: string;
    faqDesc: string;
    termsDesc: string;
    historyTitle: string;
    historyDesc: string;
    tagline: string;
    darkModeLabel: string;
    lightModeLabel: string;
    languageLabel: string;
  }> = {
    en: {
      homeDesc: 'Back to main page',
      imprintDesc: 'Legal information',
      privacyDesc: 'Privacy & security',
      faqDesc: 'Frequently Asked Questions',
      termsDesc: 'Terms & conditions',
      historyTitle: 'Version History',
      historyDesc: 'All versions & updates',
      tagline: 'Individual volume control for every app',
      darkModeLabel: 'Dark Mode',
      lightModeLabel: 'Light Mode',
      languageLabel: 'Language',
    },
    de: {
      homeDesc: 'Zurück zur Hauptseite',
      imprintDesc: 'Rechtliche Informationen',
      privacyDesc: 'Datenschutz & Sicherheit',
      faqDesc: 'Häufig gestellte Fragen',
      termsDesc: 'Nutzungsbedingungen',
      historyTitle: 'Versionshistorie',
      historyDesc: 'Alle Versionen & Updates',
      tagline: 'Individuelle Lautstärkeregelung für jede App',
      darkModeLabel: 'Dunkelmodus',
      lightModeLabel: 'Hellmodus',
      languageLabel: 'Sprache',
    },
    es: {
      homeDesc: 'Volver a la página principal',
      imprintDesc: 'Información legal',
      privacyDesc: 'Privacidad y seguridad',
      faqDesc: 'Preguntas Frecuentes',
      termsDesc: 'Términos y condiciones',
      historyTitle: 'Historial de versiones',
      historyDesc: 'Todas las versiones',
      tagline: 'Control de volumen individual para cada aplicación',
      darkModeLabel: 'Modo oscuro',
      lightModeLabel: 'Modo claro',
      languageLabel: 'Idioma',
    },
    fr: {
      homeDesc: 'Retour à la page principale',
      imprintDesc: 'Informations légales',
      privacyDesc: 'Confidentialité et sécurité',
      faqDesc: 'Questions Fréquentes',
      termsDesc: 'Conditions générales',
      historyTitle: 'Historique des versions',
      historyDesc: 'Toutes les versions',
      tagline: 'Contrôle du volume individuel pour chaque application',
      darkModeLabel: 'Mode sombre',
      lightModeLabel: 'Mode clair',
      languageLabel: 'Langue',
    },
    it: {
      homeDesc: 'Torna alla pagina principale',
      imprintDesc: 'Informazioni legali',
      privacyDesc: 'Privacy e sicurezza',
      faqDesc: 'Domande Frequenti',
      termsDesc: 'Termini e condizioni',
      historyTitle: 'Cronologia versioni',
      historyDesc: 'Tutte le versioni',
      tagline: 'Controllo del volume individuale per ogni app',
      darkModeLabel: 'Modalità scura',
      lightModeLabel: 'Modalità chiara',
      languageLabel: 'Lingua',
    },
    pt: {
      homeDesc: 'Voltar para a página principal',
      imprintDesc: 'Informações legais',
      privacyDesc: 'Privacidade e segurança',
      faqDesc: 'Perguntas Frequentes',
      termsDesc: 'Termos e condições',
      historyTitle: 'Histórico de versões',
      historyDesc: 'Todas as versões',
      tagline: 'Controle de volume individual para cada aplicativo',
      darkModeLabel: 'Modo escuro',
      lightModeLabel: 'Modo claro',
      languageLabel: 'Idioma',
    },
    ja: {
      homeDesc: 'メインページに戻る',
      imprintDesc: '法的情報',
      privacyDesc: 'プライバシーとセキュリティ',
      faqDesc: 'よくある質問',
      termsDesc: '利用規約と条件',
      historyTitle: 'バージョン履歴',
      historyDesc: 'すべてのバージョンとアップデート',
      tagline: 'すべてのアプリの個別音量コントロール',
      darkModeLabel: 'ダークモード',
      lightModeLabel: 'ライトモード',
      languageLabel: '言語',
    },
    zh: {
      homeDesc: '返回主页',
      imprintDesc: '法律信息',
      privacyDesc: '隐私与安全',
      faqDesc: '常见问题',
      termsDesc: '条款和条件',
      historyTitle: '版本历史',
      historyDesc: '所有版本和更新',
      tagline: '每个应用程序的独立音量控制',
      darkModeLabel: '深色模式',
      lightModeLabel: '浅色模式',
      languageLabel: '语言',
    }
  };

  const st = subtexts[currentLang] || subtexts.en;

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.3
      }
    })
  };

  const handleLanguageSelect = (lang: Language) => {
    if (onLanguageChange) {
      onLanguageChange(lang);
    } else {
      navigate(`/${lang}`);
    }
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full sm:w-96 bg-white dark:bg-slate-900 shadow-2xl z-50 overflow-y-auto"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">M</span>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    MACA
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {/* Dark Mode Toggle im Menü */}
                  {onToggleDarkMode && (
                    <button
                      onClick={onToggleDarkMode}
                      className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                      aria-label={isDarkMode ? st.lightModeLabel : st.darkModeLabel}
                    >
                      {isDarkMode ? (
                        <Sun className="w-5 h-5 text-amber-500" />
                      ) : (
                        <Moon className="w-5 h-5 text-slate-700" />
                      )}
                    </button>
                  )}
                  <button
                    onClick={onClose}
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                  </button>
                </div>
              </div>

              {/* Navigation Items */}
              <nav className="space-y-1" aria-label="Site navigation">
                <motion.div custom={0} initial="hidden" animate="visible" variants={menuItemVariants}>
                  <Link
                    to={`/${currentLang}`}
                    onClick={onClose}
                    className="flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group"
                  >
                    <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Home className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 dark:text-white">{t.home}</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">{st.homeDesc}</div>
                    </div>
                  </Link>
                </motion.div>

                <motion.div custom={1} initial="hidden" animate="visible" variants={menuItemVariants}>
                  <Link
                    to={`/${currentLang}/faq`}
                    onClick={onClose}
                    className="flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group"
                  >
                    <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <HelpCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 dark:text-white">{t.faq}</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">{st.faqDesc}</div>
                    </div>
                  </Link>
                </motion.div>

                <motion.div custom={3} initial="hidden" animate="visible" variants={menuItemVariants}>
                  <Link
                    to="/history"
                    onClick={onClose}
                    className="flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group"
                  >
                    <div className="w-11 h-11 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 dark:text-white">{st.historyTitle}</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">{st.historyDesc}</div>
                    </div>
                  </Link>
                </motion.div>

                {/* Divider */}
                <div className="py-2">
                  <div className="border-t border-slate-200 dark:border-slate-800" />
                </div>

                {/* Legal Links */}
                <motion.div custom={4} initial="hidden" animate="visible" variants={menuItemVariants}>
                  <Link
                    to={`/${currentLang}/privacy`}
                    onClick={onClose}
                    className="flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group"
                  >
                    <div className="w-11 h-11 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Shield className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 dark:text-white">{t.privacy}</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">{st.privacyDesc}</div>
                    </div>
                  </Link>
                </motion.div>

                <motion.div custom={5} initial="hidden" animate="visible" variants={menuItemVariants}>
                  <Link
                    to={`/${currentLang}/terms`}
                    onClick={onClose}
                    className="flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group"
                  >
                    <div className="w-11 h-11 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Scale className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 dark:text-white">{t.terms}</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">{st.termsDesc}</div>
                    </div>
                  </Link>
                </motion.div>

                <motion.div custom={6} initial="hidden" animate="visible" variants={menuItemVariants}>
                  <Link
                    to={`/${currentLang}/imprint`}
                    onClick={onClose}
                    className="flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group"
                  >
                    <div className="w-11 h-11 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <FileText className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 dark:text-white">{t.imprint}</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">{st.imprintDesc}</div>
                    </div>
                  </Link>
                </motion.div>

                {/* Download CTA */}
                <motion.div
                  custom={7}
                  initial="hidden"
                  animate="visible"
                  variants={menuItemVariants}
                  className="pt-4"
                >
                  <a
                    href={appStoreUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={onClose}
                    className="flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl hover:scale-105 font-semibold"
                  >
                    <Download className="w-5 h-5" />
                    <span>{t.download}</span>
                  </a>
                </motion.div>
              </nav>

              {/* Language Selection */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800"
              >
                <div className="flex items-center gap-2 mb-3 px-1">
                  <Globe className="w-4 h-4 text-slate-500 dark:text-slate-400" />
                  <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{st.languageLabel}</span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {languages.map((lang) => (
                    <button
                      key={lang}
                      onClick={() => handleLanguageSelect(lang)}
                      className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${
                        currentLang === lang
                          ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <span>{languageNames[lang]}</span>
                      {currentLang === lang && (
                        <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Footer Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800"
              >
                <div className="text-center space-y-2">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {st.tagline}
                  </p>
                  <p className="text-xs text-slate-400 dark:text-slate-500">
                    © {new Date().getFullYear()} AMX Mediensysteme
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}