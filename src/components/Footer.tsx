import { Link } from 'react-router';
import { Volume2 } from 'lucide-react';
import type { Language } from '../locales/translations';
import { ImageWithFallback } from './figma/ImageWithFallback';
import macaAppLogo from 'figma:asset/7726871357dffca8a1c72824ee6fcf70b91dc923.png';

interface FooterProps {
  currentLang: Language;
}

const footerTranslations: Partial<Record<Language, {
  tagline: string;
  legal: string;
  imprint: string;
  privacy: string;
  terms: string;
  support: string;
  guide: string;
  troubleshooting: string;
  copyright: string;
}>> & { en: { tagline: string; legal: string; imprint: string; privacy: string; terms: string; support: string; guide: string; troubleshooting: string; copyright: string } } = {
  en: {
    tagline: 'Individual volume control for every app',
    legal: 'Legal',
    imprint: 'Imprint',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    support: 'Support',
    guide: 'User Guide',
    troubleshooting: 'Troubleshooting',
    copyright: 'All rights reserved.',
  },
  de: {
    tagline: 'Individuelle Lautstärkeregelung für jede App',
    legal: 'Rechtliches',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    terms: 'Nutzungsbedingungen',
    support: 'Support',
    guide: 'Benutzerhandbuch',
    troubleshooting: 'Fehlerbehebung',
    copyright: 'Alle Rechte vorbehalten.',
  },
  es: {
    tagline: 'Control de volumen individual para cada aplicación',
    legal: 'Legal',
    imprint: 'Aviso Legal',
    privacy: 'Privacidad',
    terms: 'Términos de uso',
    support: 'Soporte',
    guide: 'Guía del usuario',
    troubleshooting: 'Solución de problemas',
    copyright: 'Todos los derechos reservados.',
  },
  fr: {
    tagline: 'Contrôle du volume individuel pour chaque application',
    legal: 'Légal',
    imprint: 'Mentions légales',
    privacy: 'Confidentialité',
    terms: 'Conditions d\'utilisation',
    support: 'Assistance',
    guide: 'Guide utilisateur',
    troubleshooting: 'Dépannage',
    copyright: 'Tous droits réservés.',
  },
  it: {
    tagline: 'Controllo del volume individuale per ogni app',
    legal: 'Legale',
    imprint: 'Note legali',
    privacy: 'Privacy',
    terms: 'Termini di utilizzo',
    support: 'Supporto',
    guide: 'Guida utente',
    troubleshooting: 'Risoluzione dei problemi',
    copyright: 'Tutti i diritti riservati.',
  },

  ja: {
    tagline: 'すべてのアプリの個別音量コントロール',
    legal: '法的情報',
    imprint: '法的情報',
    privacy: 'プライバシー',
    terms: '利用規約',
    support: 'サポート',
    guide: 'ユーザーガイド',
    troubleshooting: 'トラブルシューティング',
    copyright: '全著作権所有。',
  },
  'zh-Hans': {
    tagline: '每个应用程序的独立音量控制',
    legal: '法律',
    imprint: '法律信息',
    privacy: '隐私政策',
    terms: '使用条款',
    support: '支持',
    guide: '用户指南',
    troubleshooting: '故障排除',
    copyright: '版权所有。',
  },
  'zh-Hant': {
    tagline: '每個應用程序的獨立音量控制',
    legal: '法律',
    imprint: '法律信息',
    privacy: '隱私政策',
    terms: '使用條款',
    support: '支持',
    guide: '用戶指南',
    troubleshooting: '故障排除',
    copyright: '版權所有。',
  },
  ar: {
    tagline: 'تحكم في مستوى الصوت الفردي لكل تطبيق',
    legal: 'قانوني',
    imprint: 'البيانات القانونية',
    privacy: 'سياسة الخصوصية',
    terms: 'شروط الاستخدام',
    support: 'الدعم',
    guide: 'دليل المستخدم',
    troubleshooting: 'حل المشكلات',
    copyright: 'جميع الحقوق محفوظة.',
  },
  ru: {
    tagline: 'Индивидуальное управление громкостью для каждого приложения',
    legal: 'Правовая информация',
    imprint: 'Импрессум',
    privacy: 'Политика конфиденциальности',
    terms: 'Условия использования',
    support: 'Поддержка',
    guide: 'Руководство',
    troubleshooting: 'Устранение неполадок',
    copyright: 'Все права защищены.',
  },
  nl: {
    tagline: 'Individuele volumeregeling voor elke app',
    legal: 'Juridisch',
    imprint: 'Colofon',
    privacy: 'Privacybeleid',
    terms: 'Gebruiksvoorwaarden',
    support: 'Ondersteuning',
    guide: 'Handleiding',
    troubleshooting: 'Problemen oplossen',
    copyright: 'Alle rechten voorbehouden.',
  },
  tr: {
    tagline: 'Her uygulama için bireysel ses kontrolü',
    legal: 'Yasal',
    imprint: 'Yasal bilgiler',
    privacy: 'Gizlilik politikası',
    terms: 'Kullanım koşulları',
    support: 'Destek',
    guide: 'Kullanım Kılavuzu',
    troubleshooting: 'Sorun Giderme',
    copyright: 'Tüm hakları saklıdır.',
  },
  sv: {
    tagline: 'Individuell volymkontroll för varje app',
    legal: 'Juridiskt',
    imprint: 'Impressum',
    privacy: 'Integritetspolicy',
    terms: 'Användarvillkor',
    support: 'Support',
    guide: 'Användarguide',
    troubleshooting: 'Felsökning',
    copyright: 'Alla rättigheter förbehållna.',
  },
};

export function Footer({ currentLang }: FooterProps) {
  const t = footerTranslations[currentLang] || footerTranslations.en;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 sm:py-12 md:py-16 px-4 sm:px-6 bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <ImageWithFallback
                src={macaAppLogo}
                alt="MACA App Icon"
                className="w-10 h-10 rounded-[22%] shadow-lg"
                width={40}
                height={40}
              />
              <span className="text-xl font-semibold text-white">MACA</span>
            </div>
            <p className="text-slate-500">{t.tagline}</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.legal}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to={`/${currentLang}/imprint`}
                  className="hover:text-white transition-colors"
                >
                  {t.imprint}
                </Link>
              </li>
              <li>
                <Link
                  to={`/${currentLang}/privacy`}
                  className="hover:text-white transition-colors"
                >
                  {t.privacy}
                </Link>
              </li>
              <li>
                <Link
                  to={`/${currentLang}/terms`}
                  className="hover:text-white transition-colors"
                >
                  {t.terms}
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t.support}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to={`/${currentLang}/faq`}
                  className="hover:text-white transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <a href="mailto:support@getmaca.de" className="hover:text-white transition-colors">
                  support@getmaca.de
                </a>
              </li>
              <li>
                <Link
                  to={`/${currentLang}/troubleshooting`}
                  className="hover:text-white transition-colors"
                >
                  {t.troubleshooting}
                </Link>
              </li>
              <li>
                <Link
                  to={`/${currentLang}/guide`}
                  className="hover:text-white transition-colors"
                >
                  {t.guide}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>&copy; {currentYear} AMX Mediensysteme. {t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}