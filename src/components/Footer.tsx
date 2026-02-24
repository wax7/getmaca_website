import { Link } from 'react-router';
import { Volume2 } from 'lucide-react';
import type { Language } from '../locales/translations';
import { ImageWithFallback } from './figma/ImageWithFallback';
import macaAppLogo from 'figma:asset/7726871357dffca8a1c72824ee6fcf70b91dc923.png';

interface FooterProps {
  currentLang: Language;
}

const footerTranslations: Record<Language, {
  tagline: string;
  legal: string;
  imprint: string;
  privacy: string;
  terms: string;
  support: string;
  copyright: string;
}> = {
  en: {
    tagline: 'Individual volume control for every app',
    legal: 'Legal',
    imprint: 'Imprint',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    support: 'Support',
    copyright: 'All rights reserved.',
  },
  de: {
    tagline: 'Individuelle Lautstärkeregelung für jede App',
    legal: 'Rechtliches',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    terms: 'Nutzungsbedingungen',
    support: 'Support',
    copyright: 'Alle Rechte vorbehalten.',
  },
  es: {
    tagline: 'Control de volumen individual para cada aplicación',
    legal: 'Legal',
    imprint: 'Aviso Legal',
    privacy: 'Privacidad',
    terms: 'Términos de uso',
    support: 'Soporte',
    copyright: 'Todos los derechos reservados.',
  },
  fr: {
    tagline: 'Contrôle du volume individuel pour chaque application',
    legal: 'Légal',
    imprint: 'Mentions légales',
    privacy: 'Confidentialité',
    terms: 'Conditions d\'utilisation',
    support: 'Assistance',
    copyright: 'Tous droits réservés.',
  },
  it: {
    tagline: 'Controllo del volume individuale per ogni app',
    legal: 'Legale',
    imprint: 'Note legali',
    privacy: 'Privacy',
    terms: 'Termini di utilizzo',
    support: 'Supporto',
    copyright: 'Tutti i diritti riservati.',
  },
  pt: {
    tagline: 'Controle de volume individual para cada aplicativo',
    legal: 'Legal',
    imprint: 'Aviso Legal',
    privacy: 'Privacidade',
    terms: 'Termos de uso',
    support: 'Suporte',
    copyright: 'Todos os direitos reservados.',
  },
  ja: {
    tagline: 'すべてのアプリの個別音量コントロール',
    legal: '法的情報',
    imprint: '法的情報',
    privacy: 'プライバシー',
    terms: '利用規約',
    support: 'サポート',
    copyright: '全著作権所有。',
  },
  zh: {
    tagline: '每个应用程序的独立音量控制',
    legal: '法律',
    imprint: '法律信息',
    privacy: '隐私政策',
    terms: '使用条款',
    support: '支持',
    copyright: '版权所有。',
  },
};

export function Footer({ currentLang }: FooterProps) {
  const t = footerTranslations[currentLang] || footerTranslations.en;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 px-6 bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
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