import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useParams } from 'react-router';
import { type Language } from '../locales/translations';

const cookieBannerTexts: Record<Language, {
  title: string;
  description: string;
  accept: string;
  decline: string;
}> = {
  en: {
    title: 'Privacy Notice',
    description: 'This website uses only essential cookies for basic functionality. We do not collect any personal data or use tracking cookies. Your privacy is important to us.',
    accept: 'Accept',
    decline: 'Decline'
  },
  de: {
    title: 'Datenschutzhinweis',
    description: 'Diese Website verwendet nur essenzielle Cookies für die Grundfunktionalität. Wir sammeln keine persönlichen Daten und verwenden keine Tracking-Cookies. Ihre Privatsphäre ist uns wichtig.',
    accept: 'Akzeptieren',
    decline: 'Ablehnen'
  },
  fr: {
    title: 'Avis de confidentialité',
    description: 'Ce site Web utilise uniquement des cookies essentiels pour les fonctionnalités de base. Nous ne collectons aucune donnée personnelle et n\'utilisons pas de cookies de suivi.',
    accept: 'Accepter',
    decline: 'Refuser'
  },
  es: {
    title: 'Aviso de privacidad',
    description: 'Este sitio web utiliza solo cookies esenciales para la funcionalidad básica. No recopilamos datos personales ni utilizamos cookies de seguimiento.',
    accept: 'Aceptar',
    decline: 'Rechazar'
  },
  it: {
    title: 'Informativa sulla privacy',
    description: 'Questo sito Web utilizza solo cookie essenziali per le funzionalità di base. Non raccogliamo dati personali né utilizziamo cookie di tracciamento.',
    accept: 'Accetta',
    decline: 'Rifiuta'
  },
  pt: {
    title: 'Aviso de privacidade',
    description: 'Este site usa apenas cookies essenciais para funcionalidade básica. Não coletamos dados pessoais nem usamos cookies de rastreamento.',
    accept: 'Aceitar',
    decline: 'Recusar'
  },
  ja: {
    title: 'プライバシーに関するお知らせ',
    description: 'このウェブサイトは基本機能のために必要最低限のCookieのみを使用しています。個人データの収集やトラッキングCookieの使用は一切行いません。',
    accept: '同意する',
    decline: '拒否する'
  },
  zh: {
    title: '隐私声明',
    description: '本网站仅使用基本功能所需的必要Cookie。我们不收集任何个人数据，也不使用跟踪Cookie。您的隐私对我们非常重要。',
    accept: '接受',
    decline: '拒绝'
  }
};

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const { lang } = useParams<{ lang: string }>();
  const currentLang = (lang || 'en') as Language;
  const texts = cookieBannerTexts[currentLang] || cookieBannerTexts.en;

  useEffect(() => {
    // Prüfe ob der Nutzer bereits eine Entscheidung getroffen hat
    const cookieConsent = localStorage.getItem('maca-cookie-consent');
    if (!cookieConsent) {
      // Zeige Banner nach kurzer Verzögerung
      const timer = setTimeout(() => setShowBanner(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('maca-cookie-consent', 'accepted');
    localStorage.setItem('maca-dark-mode', localStorage.getItem('maca-dark-mode') || 'false');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('maca-cookie-consent', 'declined');
    // Entferne alle nicht-essentiellen Cookies
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
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
        >
          <div className="max-w-6xl mx-auto bg-card border border-border rounded-lg shadow-2xl p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-2">{texts.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {texts.description}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
                <button
                  onClick={handleDecline}
                  className="px-4 py-2 border border-border rounded-lg hover:bg-muted transition-colors text-sm whitespace-nowrap"
                >
                  {texts.decline}
                </button>
                <button
                  onClick={handleAccept}
                  className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all text-sm whitespace-nowrap"
                >
                  {texts.accept}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}