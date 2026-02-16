import { motion, AnimatePresence } from 'motion/react';
import { X, Home, MessageSquare, FileText, Download, Shield, HelpCircle } from 'lucide-react';
import { Link } from 'react-router';
import type { Language } from '../locales/translations';

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  isDarkMode: boolean;
}

export function NavigationMenu({ isOpen, onClose, currentLang, isDarkMode }: NavigationMenuProps) {
  const appStoreUrl = "https://apps.apple.com/us/app/maca-master-audio-control/id6759258773";

  const menuItems = {
    de: {
      home: 'Startseite',
      faq: 'Häufig gestellte Fragen',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      download: 'Jetzt herunterladen'
    },
    es: {
      home: 'Inicio',
      faq: 'Preguntas Frecuentes',
      imprint: 'Aviso legal',
      privacy: 'Privacidad',
      download: 'Descargar ahora'
    },
    fr: {
      home: 'Accueil',
      faq: 'Questions Fréquentes',
      imprint: 'Mentions légales',
      privacy: 'Confidentialité',
      download: 'Télécharger maintenant'
    },
    it: {
      home: 'Home',
      faq: 'Domande Frequenti',
      imprint: 'Note legali',
      privacy: 'Privacy',
      download: 'Scarica ora'
    },
    pt: {
      home: 'Início',
      faq: 'Perguntas Frequentes',
      imprint: 'Imprimir',
      privacy: 'Privacidade',
      download: 'Baixar agora'
    },
    ja: {
      home: 'ホーム',
      faq: 'よくある質問',
      imprint: '法的情報',
      privacy: 'プライバシー',
      download: '今すぐダウンロード'
    },
    zh: {
      home: '首页',
      faq: '常见问题',
      imprint: '版本说明',
      privacy: '隐私',
      download: '立即下载'
    },
    en: {
      home: 'Home',
      faq: 'FAQ',
      imprint: 'Imprint',
      privacy: 'Privacy Policy',
      download: 'Download Now'
    }
  };

  const t = menuItems[currentLang];

  const menuItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3
      }
    })
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
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-lg">M</span>
                  </div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    MACA
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6 text-slate-700 dark:text-slate-300" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="space-y-2">
                <motion.div
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={menuItemVariants}
                >
                  <Link
                    to={`/${currentLang}`}
                    onClick={onClose}
                    className="flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Home className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {t.home}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        {currentLang === 'de' ? 'Zurück zur Hauptseite' :
                         currentLang === 'es' ? 'Volver a la página principal' :
                         currentLang === 'fr' ? 'Retour à la page principale' :
                         currentLang === 'it' ? 'Torna alla pagina principale' :
                         currentLang === 'pt' ? 'Voltar para a página principal' :
                         currentLang === 'ja' ? 'メインページに戻る' :
                         currentLang === 'zh' ? '返回主页' :
                         'Back to main page'}
                      </div>
                    </div>
                  </Link>
                </motion.div>

                <motion.div
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={menuItemVariants}
                >
                  <Link
                    to={`/${currentLang}/imprint`}
                    onClick={onClose}
                    className="flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-slate-500 to-slate-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {t.imprint}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        {currentLang === 'de' ? 'Rechtliche Informationen' :
                         currentLang === 'es' ? 'Información legal' :
                         currentLang === 'fr' ? 'Informations légales' :
                         currentLang === 'it' ? 'Informazioni legali' :
                         currentLang === 'pt' ? 'Informações legais' :
                         currentLang === 'ja' ? '法的情報' :
                         currentLang === 'zh' ? '法律信息' :
                         'Legal information'}
                      </div>
                    </div>
                  </Link>
                </motion.div>

                <motion.div
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={menuItemVariants}
                >
                  <Link
                    to={`/${currentLang}/privacy`}
                    onClick={onClose}
                    className="flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {t.privacy}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        {currentLang === 'de' ? 'Datenschutz & Sicherheit' :
                         currentLang === 'es' ? 'Privacidad y seguridad' :
                         currentLang === 'fr' ? 'Confidentialité et sécurité' :
                         currentLang === 'it' ? 'Privacy e sicurezza' :
                         currentLang === 'pt' ? 'Privacidade e segurança' :
                         currentLang === 'ja' ? 'プライバシーとセキュリティ' :
                         currentLang === 'zh' ? '隐私与安全' :
                         'Privacy & security'}
                      </div>
                    </div>
                  </Link>
                </motion.div>

                <motion.div
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  variants={menuItemVariants}
                >
                  <Link
                    to={`/${currentLang}/faq`}
                    onClick={onClose}
                    className="flex items-center gap-4 px-4 py-4 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <HelpCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {t.faq}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        {currentLang === 'de' ? 'Häufig gestellte Fragen' :
                         currentLang === 'es' ? 'Preguntas Frecuentes' :
                         currentLang === 'fr' ? 'Questions Fréquentes' :
                         currentLang === 'it' ? 'Domande Frequenti' :
                         currentLang === 'pt' ? 'Perguntas Frequentes' :
                         currentLang === 'ja' ? 'よくある質問' :
                         currentLang === 'zh' ? '常见问题' :
                         'FAQ'}
                      </div>
                    </div>
                  </Link>
                </motion.div>

                {/* Download CTA */}
                <motion.div
                  custom={4}
                  initial="hidden"
                  animate="visible"
                  variants={menuItemVariants}
                  className="pt-6"
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

              {/* Footer Info */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800"
              >
                <div className="text-center space-y-3">
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {currentLang === 'de' ? 'Individuelle Lautstärkeregelung für jede App' :
                     currentLang === 'es' ? 'Control de volumen individual para cada aplicación' :
                     currentLang === 'fr' ? 'Contrôle du volume individuel pour chaque application' :
                     currentLang === 'it' ? 'Controllo del volume individuale per ogni app' :
                     currentLang === 'pt' ? 'Controle de volume individual para cada aplicativo' :
                     currentLang === 'ja' ? '各アプリの個別音量制御' :
                     currentLang === 'zh' ? '每个应用的单独音量控制' :
                     'Individual volume control for every app'}
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