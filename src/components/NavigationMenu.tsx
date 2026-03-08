import { X, Home, FileText, Download, Shield, HelpCircle, Clock, Moon, Sun, Globe, Check, Scale, Wrench, BookOpen } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import type { Language } from '../locales/translations';
import { languageNames } from '../locales/translations';
import { motion, AnimatePresence } from 'motion/react';
import { useEffect } from 'react';

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

  const languages: Language[] = ['en', 'de', 'es', 'fr', 'it', 'ja', 'zh-Hans', 'zh-Hant', 'ar', 'ru', 'nl', 'tr', 'sv', 'da', 'ko', 'nb'];

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const menuItems: Record<Language, {
    home: string;
    guide: string;
    faq: string;
    troubleshooting: string;
    imprint: string;
    terms: string;
    privacy: string;
    download: string;
  }> = {
    en: {
      home: 'Home',
      guide: 'User Guide',
      faq: 'FAQ',
      troubleshooting: 'Troubleshooting',
      imprint: 'Imprint',
      terms: 'Terms of Use',
      privacy: 'Privacy Policy',
      download: 'Download Now'
    },
    de: {
      home: 'Startseite',
      guide: 'Benutzerhandbuch',
      faq: 'Häufig gestellte Fragen',
      troubleshooting: 'Fehlerbehebung',
      imprint: 'Impressum',
      terms: 'Nutzungsbedingungen',
      privacy: 'Datenschutz',
      download: 'Jetzt herunterladen'
    },
    es: {
      home: 'Inicio',
      guide: 'Guía del usuario',
      faq: 'Preguntas Frecuentes',
      troubleshooting: 'Solución de problemas',
      imprint: 'Aviso legal',
      terms: 'Términos de uso',
      privacy: 'Privacidad',
      download: 'Descargar ahora'
    },
    fr: {
      home: 'Accueil',
      guide: 'Guide utilisateur',
      faq: 'Questions Fréquentes',
      troubleshooting: 'Dépannage',
      imprint: 'Mentions légales',
      terms: 'Conditions d\'utilisation',
      privacy: 'Confidentialité',
      download: 'Télécharger maintenant'
    },
    it: {
      home: 'Home',
      guide: 'Guida utente',
      faq: 'Domande Frequenti',
      troubleshooting: 'Risoluzione dei problemi',
      imprint: 'Note legali',
      terms: 'Termini di utilizzo',
      privacy: 'Privacy',
      download: 'Scarica ora'
    },
    ja: {
      home: 'ホーム',
      guide: 'ユーザーガイド',
      faq: 'よくある質問',
      troubleshooting: 'トラブルシューティング',
      imprint: '法的情報',
      terms: '利用規約',
      privacy: 'プライバシー',
      download: '今すぐダウンロード'
    },
    'zh-Hans': {
      home: '首页',
      guide: '用户指南',
      faq: '常见问题',
      troubleshooting: '故障排除',
      imprint: '法律信息',
      terms: '使用条款',
      privacy: '隐私政策',
      download: '立即下载'
    },
    'zh-Hant': {
      home: '首頁',
      guide: '用戶指南',
      faq: '常見問題',
      troubleshooting: '故障排除',
      imprint: '法律信息',
      terms: '使用條款',
      privacy: '隱私政策',
      download: '立即下載'
    },
    ar: {
      home: 'الرئيسية',
      guide: 'دليل المستخدم',
      faq: 'أسئلة شائعة',
      troubleshooting: 'حل المشكلات',
      imprint: 'البيان القانوني',
      terms: 'شروط الاستخدام',
      privacy: 'سياسة الخصوصية',
      download: 'تحميل الآن'
    },
    ru: {
      home: 'Главная',
      guide: 'Руководство',
      faq: 'Часто задаваемые вопросы',
      troubleshooting: 'Устранение неполадок',
      imprint: 'Юридическая информация',
      terms: 'Условия использования',
      privacy: 'Политика конфиденциальности',
      download: 'Скачать сейчас'
    },
    nl: {
      home: 'Home',
      guide: 'Handleiding',
      faq: 'Veelgestelde vragen',
      troubleshooting: 'Problemen oplossen',
      imprint: 'Juridische informatie',
      terms: 'Gebruiksvoorwaarden',
      privacy: 'Privacybeleid',
      download: 'Nu downloaden'
    },
    tr: {
      home: 'Anasayfa',
      guide: 'Kullanım Kılavuzu',
      faq: 'Sık Sorulan Sorular',
      troubleshooting: 'Sorun Giderme',
      imprint: 'Yasal Bilgi',
      terms: 'Kullanım Şartları',
      privacy: 'Gizlilik Politikası',
      download: 'Şimdi İndir'
    },
    sv: {
      home: 'Hem',
      guide: 'Användarguide',
      faq: 'Vanliga frågor',
      troubleshooting: 'Felsökning',
      imprint: 'Juridisk information',
      terms: 'Användarvillkor',
      privacy: 'Integritetspolicy',
      download: 'Ladda ner nu'
    },
    da: {
      home: 'Hjem',
      guide: 'Brugervejledning',
      faq: 'Ofte stillede spørgsmål',
      troubleshooting: 'Fejlfinding',
      imprint: 'Juridisk information',
      terms: 'Brugervilkår',
      privacy: 'Privatlivspolitik',
      download: 'Download nu'
    },
    ko: {
      home: '홈',
      guide: '사용자 가이드',
      faq: '자주 묻는 질문',
      troubleshooting: '문제 해결',
      imprint: '법적 정보',
      terms: '이용 약관',
      privacy: '개인 정보 보호 정책',
      download: '지금 다운로드'
    },
    nb: {
      home: 'Hjem',
      guide: 'Brukerveiledning',
      faq: 'Ofte stilt spørsmål',
      troubleshooting: 'Feilsøking',
      imprint: 'Juridisk informasjon',
      terms: 'Bruksvilkår',
      privacy: 'Personvern',
      download: 'Last ned nå'
    }
  };

  const t = menuItems[currentLang] || menuItems.en;

  const subtexts: Record<Language, {
    homeDesc: string;
    imprintDesc: string;
    privacyDesc: string;
    faqDesc: string;
    troubleshootingDesc: string;
    termsDesc: string;
    guideDesc: string;
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
      troubleshootingDesc: 'Solve common issues',
      termsDesc: 'Terms & conditions',
      guideDesc: 'Documentation & features',
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
      troubleshootingDesc: 'Häufige Probleme lösen',
      termsDesc: 'Nutzungsbedingungen',
      guideDesc: 'Dokumentation & Funktionen',
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
      troubleshootingDesc: 'Resolver problemas comunes',
      termsDesc: 'Términos y condiciones',
      guideDesc: 'Documentación y funciones',
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
      troubleshootingDesc: 'Résoudre les problèmes courants',
      termsDesc: 'Conditions générales',
      guideDesc: 'Documentation et fonctionnalités',
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
      troubleshootingDesc: 'Risolvere i problemi comuni',
      termsDesc: 'Termini e condizioni',
      guideDesc: 'Documentazione e funzionalità',
      historyTitle: 'Cronologia versioni',
      historyDesc: 'Tutte le versioni',
      tagline: 'Controllo del volume individuale per ogni app',
      darkModeLabel: 'Modalità scura',
      lightModeLabel: 'Modalità chiara',
      languageLabel: 'Lingua',
    },
    ja: {
      homeDesc: 'メインページに戻る',
      imprintDesc: '法的情報',
      privacyDesc: 'プライバシーとセキュリティ',
      faqDesc: 'よくある質問',
      troubleshootingDesc: 'よくある問題の解決',
      termsDesc: '利用規約と条件',
      guideDesc: 'ドキュメントと機能',
      historyTitle: 'バージョン履歴',
      historyDesc: 'すべてのバージョンとアップデート',
      tagline: 'すべてのアプリの個別音量コントロール',
      darkModeLabel: 'ダークモード',
      lightModeLabel: 'ライトモード',
      languageLabel: '言語',
    },
    'zh-Hans': {
      homeDesc: '返回主页',
      imprintDesc: '法律信息',
      privacyDesc: '隐私与安全',
      faqDesc: '常见问题',
      troubleshootingDesc: '解决常见问题',
      termsDesc: '条款和条件',
      guideDesc: '文档与功能',
      historyTitle: '版本历史',
      historyDesc: '所有版本和更新',
      tagline: '每个应用程序的独立音量控制',
      darkModeLabel: '深色模式',
      lightModeLabel: '浅色模式',
      languageLabel: '语言',
    },
    'zh-Hant': {
      homeDesc: '返回主頁',
      imprintDesc: '法律信息',
      privacyDesc: '隱私與安全',
      faqDesc: '常見問題',
      troubleshootingDesc: '解決常見問題',
      termsDesc: '條款和條件',
      guideDesc: '文件與功能',
      historyTitle: '版本歷史',
      historyDesc: '所有版本和更新',
      tagline: '每個應用程序的獨立音量控制',
      darkModeLabel: '深色模式',
      lightModeLabel: '淺色模式',
      languageLabel: '語言',
    },
    ar: {
      homeDesc: 'العودة إلى الصفحة الرئيسية',
      imprintDesc: 'المعلومات القانونية',
      privacyDesc: 'خصوصية وسلامة البيانات',
      faqDesc: 'أسئلة شائعة',
      troubleshootingDesc: 'حل المشكلات الشائعة',
      termsDesc: 'شروط الاستخدام',
      guideDesc: 'التوثيق والميزات',
      historyTitle: 'تاريخ الإصدارات',
      historyDesc: 'جميع الإصدارات والتحديثات',
      tagline: 'تحكم في مستوى الصوت الفردي لكل تطبيق',
      darkModeLabel: 'الوضع الداكن',
      lightModeLabel: 'الوضع الفاتح',
      languageLabel: 'اللغة',
    },
    ru: {
      homeDesc: 'Вернуться на главную страницу',
      imprintDesc: 'Юридическая информация',
      privacyDesc: 'Конфиденциальность и безопасность',
      faqDesc: 'Часто задаваемые вопросы',
      troubleshootingDesc: 'Решение распространенных проблем',
      termsDesc: 'Условия использования',
      guideDesc: 'Документация и функции',
      historyTitle: 'История версий',
      historyDesc: 'Все версии и обновления',
      tagline: 'Индивидуальное управление громкостью для каждого приложения',
      darkModeLabel: 'Темный режим',
      lightModeLabel: 'Светлый режим',
      languageLabel: 'Язык',
    },
    nl: {
      homeDesc: 'Terug naar de hoofdpagina',
      imprintDesc: 'Juridische informatie',
      privacyDesc: 'Privacy en veiligheid',
      faqDesc: 'Veelgestelde vragen',
      troubleshootingDesc: 'Problemen oplossen',
      termsDesc: 'Gebruiksvoorwaarden',
      guideDesc: 'Documentatie en functies',
      historyTitle: 'Versiegeschiedenis',
      historyDesc: 'Alle versies en updates',
      tagline: 'Individuele volumeregeling voor elk apparaat',
      darkModeLabel: 'Donkere modus',
      lightModeLabel: 'Lichte modus',
      languageLabel: 'Taal',
    },
    tr: {
      homeDesc: 'Ana sayfaya geri dön',
      imprintDesc: 'Yasal bilgi',
      privacyDesc: 'Gizlilik ve güvenlik',
      faqDesc: 'Sık Sorulan Sorular',
      troubleshootingDesc: 'Sorunları çözme',
      termsDesc: 'Kullanım Şartları',
      guideDesc: 'Dokümantasyon ve özellikler',
      historyTitle: 'Sürüm Geçmişi',
      historyDesc: 'Tüm sürümler ve güncellemeler',
      tagline: 'Her uygulama için bireysel ses kontrolü',
      darkModeLabel: 'Karanlık Mod',
      lightModeLabel: 'Açık Mod',
      languageLabel: 'Dil',
    },
    sv: {
      homeDesc: 'Tillbaka till huvudsidan',
      imprintDesc: 'Juridisk information',
      privacyDesc: 'Sekretess och säkerhet',
      faqDesc: 'Vanliga frågor',
      troubleshootingDesc: 'Felsökning',
      termsDesc: 'Användarvillkor',
      guideDesc: 'Dokumentation och funktioner',
      historyTitle: 'Versionshistoria',
      historyDesc: 'Alla versioner och uppdateringar',
      tagline: 'Individuell volymkontroll för varje app',
      darkModeLabel: 'Mörkt läge',
      lightModeLabel: 'Ljust läge',
      languageLabel: 'Språk',
    },
    da: {
      homeDesc: 'Tilbage til hovedsiden',
      imprintDesc: 'Juridisk information',
      privacyDesc: 'Privatliv og sikkerhed',
      faqDesc: 'Ofte stillede spørgsmål',
      troubleshootingDesc: 'Fejlfinding',
      termsDesc: 'Brugervilkår',
      guideDesc: 'Dokumentation og funktioner',
      historyTitle: 'Versionshistorik',
      historyDesc: 'Alle versioner og opdateringer',
      tagline: 'Individuel lydstyrkekontrol for hver app',
      darkModeLabel: 'Mørkt tilstand',
      lightModeLabel: 'Lyst tilstand',
      languageLabel: 'Sprog',
    },
    ko: {
      homeDesc: '메인 페이지로 돌아가기',
      imprintDesc: '법적 정보',
      privacyDesc: '개인 정보 보호 및 보안',
      faqDesc: '자주 묻는 질문',
      troubleshootingDesc: '문제 해결',
      termsDesc: '이용 약관',
      guideDesc: '문서 및 기능',
      historyTitle: '버전 기록',
      historyDesc: '모든 버전 및 업데이트',
      tagline: '각 앱의 개별 볼륨 제어',
      darkModeLabel: '다크 모드',
      lightModeLabel: '라이트 모드',
      languageLabel: '언어',
    },
    nb: {
      homeDesc: 'Tilbake til hovedsiden',
      imprintDesc: 'Juridisk informasjon',
      privacyDesc: 'Personvern og sikkerhet',
      faqDesc: 'Ofte stilt spørsmål',
      troubleshootingDesc: 'Feilsøking',
      termsDesc: 'Bruksvilkår',
      guideDesc: 'Dokumentasjon og funksjoner',
      historyTitle: 'Versjonshistorikk',
      historyDesc: 'Alle versjoner og oppdateringer',
      tagline: 'Individuell volumkontroll for hver app',
      darkModeLabel: 'Mørkt modus',
      lightModeLabel: 'Lyst modus',
      languageLabel: 'Språk',
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
                    className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
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
                    to={`/${currentLang}/guide`}
                    onClick={onClose}
                    className="flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group"
                  >
                    <div className="w-11 h-11 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <BookOpen className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 dark:text-white">{t.guide}</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">{st.guideDesc}</div>
                    </div>
                  </Link>
                </motion.div>

                <motion.div custom={2} initial="hidden" animate="visible" variants={menuItemVariants}>
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
                    to={`/${currentLang}/troubleshooting`}
                    onClick={onClose}
                    className="flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-all group"
                  >
                    <div className="w-11 h-11 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Wrench className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 dark:text-white">{t.troubleshooting}</div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">{st.troubleshootingDesc}</div>
                    </div>
                  </Link>
                </motion.div>

                <motion.div custom={4} initial="hidden" animate="visible" variants={menuItemVariants}>
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
                <motion.div custom={5} initial="hidden" animate="visible" variants={menuItemVariants}>
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

                <motion.div custom={6} initial="hidden" animate="visible" variants={menuItemVariants}>
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

                <motion.div custom={7} initial="hidden" animate="visible" variants={menuItemVariants}>
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
                  custom={8}
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
                      className={`flex items-center justify-between px-3 py-3 rounded-lg text-sm transition-colors min-h-[44px] ${
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