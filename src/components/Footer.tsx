import { Link } from 'react-router';
import type { Language } from '../locales/translations';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { DiscordIcon } from './DiscordIcon';
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
  discord: string;
  copyright: string;
}>> & { en: { tagline: string; legal: string; imprint: string; privacy: string; terms: string; support: string; guide: string; troubleshooting: string; discord: string; copyright: string } } = {
  en: {
    tagline: 'Individual volume control for every app',
    legal: 'Legal',
    imprint: 'Imprint',
    privacy: 'Privacy Policy',
    terms: 'Terms of Use',
    support: 'Support',
    guide: 'User Guide',
    troubleshooting: 'Troubleshooting',
    discord: 'Discord Community',
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
    discord: 'Discord Community',
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
    discord: 'Comunidad Discord',
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
    discord: 'Communauté Discord',
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
    discord: 'Comunità Discord',
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
    discord: 'Discordコミュニティ',
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
    discord: 'Discord社区',
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
    discord: 'Discord社群',
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
    discord: 'مجتمع Discord',
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
    discord: 'Сообщество Discord',
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
    discord: 'Discord Community',
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
    discord: 'Discord Topluluğu',
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
    discord: 'Discord Community',
    copyright: 'Alla rättigheter förbehållna.',
  },
  da: {
    tagline: 'Individuel lydstyrke for hver app',
    legal: 'Juridisk',
    imprint: 'Kolofon',
    privacy: 'Privatlivspolitik',
    terms: 'Brugsvilkår',
    support: 'Support',
    guide: 'Brugervejledning',
    troubleshooting: 'Fejlfinding',
    discord: 'Discord Fællesskab',
    copyright: 'Alle rettigheder forbeholdes.',
  },
  ko: {
    tagline: '모든 앱의 개별 볼륨 컨트롤',
    legal: '법적 정보',
    imprint: '법적 고지',
    privacy: '개인정보 보호정책',
    terms: '이용 약관',
    support: '지원',
    guide: '사용자 가이드',
    troubleshooting: '문제 해결',
    discord: 'Discord 커뮤니티',
    copyright: '모든 권리 보유.',
  },
  nb: {
    tagline: 'Individuell volumkontroll for hver app',
    legal: 'Juridisk',
    imprint: 'Kolofon',
    privacy: 'Personvernerklæring',
    terms: 'Brukervilkår',
    support: 'Support',
    guide: 'Brukerveiledning',
    troubleshooting: 'Feilsøking',
    discord: 'Discord Fellesskap',
    copyright: 'Alle rettigheter reservert.',
  },
};

export function Footer({ currentLang }: FooterProps) {
  const t = footerTranslations[currentLang] || footerTranslations.en;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 sm:py-12 px-4 sm:px-6 bg-[#1d1d1f] text-[#86868b]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-8 sm:mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <ImageWithFallback
                src={macaAppLogo}
                alt="MACA App Icon"
                className="w-8 h-8 rounded-[22%]"
                width={32}
                height={32}
                style={{ boxShadow: '0 1px 4px rgba(0,0,0,0.3)' }}
              />
              <span className="text-base font-semibold text-[#f5f5f7] tracking-tight">MACA</span>
            </div>
            <p className="text-[13px] text-[#86868b]/70">{t.tagline}</p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-[#f5f5f7]/40 font-medium mb-3 text-xs uppercase tracking-widest">{t.legal}</h3>
            <ul className="space-y-2">
              <li><Link to={`/${currentLang}/imprint`} className="text-sm hover:text-[#f5f5f7] transition-colors">{t.imprint}</Link></li>
              <li><Link to={`/${currentLang}/privacy`} className="text-sm hover:text-[#f5f5f7] transition-colors">{t.privacy}</Link></li>
              <li><Link to={`/${currentLang}/terms`} className="text-sm hover:text-[#f5f5f7] transition-colors">{t.terms}</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-[#f5f5f7]/40 font-medium mb-3 text-xs uppercase tracking-widest">{t.support}</h3>
            <ul className="space-y-2">
              <li><Link to={`/${currentLang}/faq`} className="text-sm hover:text-[#f5f5f7] transition-colors">FAQ</Link></li>
              <li><a href="mailto:support@getmaca.de" className="text-sm hover:text-[#f5f5f7] transition-colors">support@getmaca.de</a></li>
              <li><Link to={`/${currentLang}/troubleshooting`} className="text-sm hover:text-[#f5f5f7] transition-colors">{t.troubleshooting}</Link></li>
              <li><Link to={`/${currentLang}/guide`} className="text-sm hover:text-[#f5f5f7] transition-colors">{t.guide}</Link></li>
              <li>
                <a href="https://discord.gg/hztjqAweUz" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm hover:text-[#f5f5f7] transition-colors">
                  <DiscordIcon className="w-3.5 h-3.5" />
                  {t.discord}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-white/[0.06] text-center text-xs text-[#86868b]/50">
          <p>&copy; {currentYear} AMX Mediensysteme. {t.copyright}</p>
        </div>
      </div>
    </footer>
  );
}