import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useParams, Link } from 'react-router';
import { Shield } from 'lucide-react';
import { type Language } from '../locales/translations';

const privacyNoticeTexts: Record<Language, {
  title: string;
  description: string;
  learnMore: string;
  dismiss: string;
}> = {
  en: {
    title: 'Your privacy is protected',
    description: 'This website stores only your display preferences (language, dark mode) locally in your browser. No cookies, no personal data collection, no tracking — nothing leaves your device.',
    learnMore: 'Privacy Policy',
    dismiss: 'Got it',
  },
  de: {
    title: 'Deine Privatsphäre ist geschützt',
    description: 'Diese Website speichert lediglich deine Anzeigeeinstellungen (Sprache, Dark Mode) lokal in deinem Browser. Keine Cookies, keine Erhebung persönlicher Daten, kein Tracking — nichts verlässt dein Gerät.',
    learnMore: 'Datenschutz',
    dismiss: 'Verstanden',
  },
  fr: {
    title: 'Votre vie privée est protégée',
    description: 'Ce site enregistre uniquement vos préférences d\'affichage (langue, mode sombre) localement dans votre navigateur. Pas de cookies, pas de collecte de données personnelles, pas de suivi — rien ne quitte votre appareil.',
    learnMore: 'Confidentialité',
    dismiss: 'Compris',
  },
  es: {
    title: 'Tu privacidad está protegida',
    description: 'Este sitio web solo almacena tus preferencias de visualización (idioma, modo oscuro) localmente en tu navegador. Sin cookies, sin recopilación de datos personales, sin seguimiento — nada sale de tu dispositivo.',
    learnMore: 'Privacidad',
    dismiss: 'Entendido',
  },
  it: {
    title: 'La tua privacy è protetta',
    description: 'Questo sito memorizza solo le tue preferenze di visualizzazione (lingua, modalità scura) localmente nel tuo browser. Nessun cookie, nessuna raccolta di dati personali, nessun tracciamento — nulla lascia il tuo dispositivo.',
    learnMore: 'Privacy',
    dismiss: 'Ho capito',
  },
  pt: {
    title: 'A sua privacidade está protegida',
    description: 'Este site armazena apenas as suas preferências de exibição (idioma, modo escuro) localmente no seu navegador. Sem cookies, sem coleta de dados pessoais, sem rastreamento — nada sai do seu dispositivo.',
    learnMore: 'Privacidade',
    dismiss: 'Entendido',
  },
  ja: {
    title: 'プライバシーは保護されています',
    description: 'このウェブサイトは、表示設定（言語、ダークモード）のみをブラウザにローカル保存します。Cookie、個人データの収集、トラッキングは一切なく、データがデバイスから外部���送信されることはありません。',
    learnMore: 'プライバシー',
    dismiss: '了解',
  },
  zh: {
    title: '您的隐私受到保护',
    description: '本网站仅在您的浏览器中本地保存显示偏好设置（语言、深色模式）。没有Cookie，不收集个人数据，不进行跟踪——没有任何数据离开您的设备。',
    learnMore: '隐私政策',
    dismiss: '知道了',
  },
};

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const { lang } = useParams<{ lang: string }>();
  const currentLang = (lang || 'en') as Language;
  const texts = privacyNoticeTexts[currentLang] || privacyNoticeTexts.en;

  useEffect(() => {
    // Show notice only once — after user dismisses, don't show again
    // Also honor the old key so existing visitors don't see the banner again
    const dismissed = localStorage.getItem('maca-privacy-notice-dismissed');
    const legacyConsent = localStorage.getItem('maca-cookie-consent');
    if (dismissed || legacyConsent) {
      // Migrate old key silently
      if (legacyConsent && !dismissed) {
        localStorage.setItem('maca-privacy-notice-dismissed', 'true');
        localStorage.removeItem('maca-cookie-consent');
      }
      return;
    }
    const timer = setTimeout(() => setShowBanner(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    localStorage.setItem('maca-privacy-notice-dismissed', 'true');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6"
          role="status"
          aria-label={texts.title}
        >
          <div className="max-w-4xl mx-auto bg-card border border-border rounded-2xl shadow-2xl p-5 md:p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              <div className="flex items-start gap-3 flex-1">
                <Shield className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold mb-1">{texts.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {texts.description}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 w-full md:w-auto">
                <Link
                  to={`/${currentLang}/privacy`}
                  className="text-sm text-blue-600 dark:text-blue-400 hover:underline whitespace-nowrap"
                >
                  {texts.learnMore}
                </Link>
                <button
                  onClick={handleDismiss}
                  className="px-5 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-sm whitespace-nowrap ml-auto md:ml-0"
                >
                  {texts.dismiss}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}