// Localized labels for BreadcrumbList JSON-LD on every page
import type { SeoPageKey } from './route-seo';

const LABELS: Record<Exclude<SeoPageKey, 'home'>, Record<string, string>> = {
  faq: {
    en: 'FAQ', de: 'FAQ', fr: 'FAQ', es: 'Preguntas Frecuentes', it: 'FAQ',
    ja: 'よくある質問', 'zh-Hans': '常见问题', 'zh-Hant': '常見問題',
    ar: 'الأسئلة الشائعة', ru: 'Часто задаваемые вопросы', nl: 'FAQ',
    tr: 'SSS', sv: 'Vanliga frågor', da: 'Ofte stillede spørgsmål',
    ko: '자주 묻는 질문', nb: 'Vanlige spørsmål',
  },
  guide: {
    en: 'Setup Guide', de: 'Einrichtung', fr: 'Guide', es: 'Guía',
    it: 'Guida', ja: 'セットアップ', 'zh-Hans': '设置指南', 'zh-Hant': '設定指南',
    ar: 'دليل الإعداد', ru: 'Руководство', nl: 'Installatiegids',
    tr: 'Kurulum', sv: 'Guide', da: 'Vejledning', ko: '가이드', nb: 'Veiledning',
  },
  troubleshooting: {
    en: 'Troubleshooting', de: 'Fehlerbehebung', fr: 'Dépannage',
    es: 'Solución de problemas', it: 'Risoluzione problemi',
    ja: 'トラブルシューティング', 'zh-Hans': '故障排除', 'zh-Hant': '故障排除',
    ar: 'استكشاف الأخطاء', ru: 'Устранение неполадок', nl: 'Probleemoplossing',
    tr: 'Sorun Giderme', sv: 'Felsökning', da: 'Fejlfinding',
    ko: '문제 해결', nb: 'Feilsøking',
  },
  privacy: {
    en: 'Privacy Policy', de: 'Datenschutz', fr: 'Confidentialité',
    es: 'Privacidad', it: 'Privacy', ja: 'プライバシーポリシー',
    'zh-Hans': '隐私政策', 'zh-Hant': '隱私政策', ar: 'سياسة الخصوصية',
    ru: 'Политика конфиденциальности', nl: 'Privacybeleid', tr: 'Gizlilik',
    sv: 'Integritetspolicy', da: 'Privatlivspolitik', ko: '개인정보처리방침',
    nb: 'Personvernerklæring',
  },
  terms: {
    en: 'Terms of Service', de: 'Nutzungsbedingungen', fr: 'Conditions',
    es: 'Términos', it: 'Termini', ja: '利用規約', 'zh-Hans': '服务条款',
    'zh-Hant': '服務條款', ar: 'شروط الخدمة', ru: 'Условия использования',
    nl: 'Voorwaarden', tr: 'Şartlar', sv: 'Användarvillkor',
    da: 'Servicevilkår', ko: '이용 약관', nb: 'Vilkår',
  },
  imprint: {
    en: 'Imprint', de: 'Impressum', fr: 'Mentions légales', es: 'Aviso legal',
    it: 'Note legali', ja: '法的情報', 'zh-Hans': '法律声明', 'zh-Hant': '法律聲明',
    ar: 'البيانات القانونية', ru: 'Выходные данные', nl: 'Colofon',
    tr: 'Künye', sv: 'Avtryck', da: 'Aftryk', ko: '법적 고지', nb: 'Avtrykk',
  },
  feedback: {
    en: 'Feedback', de: 'Feedback', fr: 'Commentaires', es: 'Comentarios',
    it: 'Feedback', ja: 'フィードバック', 'zh-Hans': '反馈', 'zh-Hant': '反饋',
    ar: 'ملاحظات', ru: 'Отзывы', nl: 'Feedback', tr: 'Geri bildirim',
    sv: 'Feedback', da: 'Feedback', ko: '피드백', nb: 'Tilbakemelding',
  },
  history: {
    en: 'Version History', de: 'Versionsverlauf', fr: 'Historique des versions',
    es: 'Historial de versiones', it: 'Cronologia versioni',
    ja: 'バージョン履歴', 'zh-Hans': '版本历史', 'zh-Hant': '版本歷史',
    ar: 'سجل الإصدارات', ru: 'История версий', nl: 'Versiegeschiedenis',
    tr: 'Sürüm Geçmişi', sv: 'Versionshistorik', da: 'Versionshistorik',
    ko: '버전 기록', nb: 'Versjonshistorikk',
  },
};

const HOME_LABEL: Record<string, string> = {
  en: 'Home', de: 'Startseite', fr: 'Accueil', es: 'Inicio', it: 'Home',
  ja: 'ホーム', 'zh-Hans': '首页', 'zh-Hant': '首頁', ar: 'الرئيسية',
  ru: 'Главная', nl: 'Home', tr: 'Ana Sayfa', sv: 'Hem', da: 'Hjem',
  ko: '홈', nb: 'Hjem',
};

export function getBreadcrumbLabel(pageKey: SeoPageKey, lang: string): string {
  if (pageKey === 'home') return HOME_LABEL[lang] || HOME_LABEL.en;
  return LABELS[pageKey][lang] || LABELS[pageKey].en;
}

export function getHomeLabel(lang: string): string {
  return HOME_LABEL[lang] || HOME_LABEL.en;
}
