import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useParams, Link } from 'react-router';
import { Shield, Settings, ChevronDown, ChevronUp } from 'lucide-react';
import { type Language } from '../locales/translations';

/* ── Consent-State Typen ── */
type ConsentValue = 'granted' | 'denied';

interface ConsentState {
  ad_storage: ConsentValue;
  ad_user_data: ConsentValue;
  ad_personalization: ConsentValue;
  analytics_storage: ConsentValue;
}

const CONSENT_KEY = 'maca-consent-v2';

/* ── Übersetzungen (16 Sprachen) ── */
interface ConsentTexts {
  title: string;
  description: string;
  acceptAll: string;
  rejectAll: string;
  customize: string;
  save: string;
  privacyPolicy: string;
  /* Kategorien */
  necessary: string;
  necessaryDesc: string;
  analytics: string;
  analyticsDesc: string;
  advertising: string;
  advertisingDesc: string;
  personalization: string;
  personalizationDesc: string;
  alwaysOn: string;
}

const consentTexts: Record<string, ConsentTexts> = {
  en: {
    title: 'Cookie & Privacy Settings',
    description: 'We use cookies and similar technologies for advertising measurement and remarketing via Google Ads. You choose which cookies are allowed.',
    acceptAll: 'Accept All',
    rejectAll: 'Reject All',
    customize: 'Customize',
    save: 'Save Preferences',
    privacyPolicy: 'Privacy Policy',
    necessary: 'Essential',
    necessaryDesc: 'Required for the website to function. Cannot be disabled.',
    analytics: 'Analytics',
    analyticsDesc: 'Help us understand how visitors use our website.',
    advertising: 'Advertising',
    advertisingDesc: 'Used for ad measurement and conversion tracking.',
    personalization: 'Personalization',
    personalizationDesc: 'Enable personalized ads based on your interests.',
    alwaysOn: 'Always on',
  },
  de: {
    title: 'Cookie- & Datenschutzeinstellungen',
    description: 'Wir verwenden Cookies und ähnliche Technologien für Werbemessung und Remarketing über Google Ads. Du entscheidest, welche Cookies erlaubt sind.',
    acceptAll: 'Alle akzeptieren',
    rejectAll: 'Alle ablehnen',
    customize: 'Anpassen',
    save: 'Einstellungen speichern',
    privacyPolicy: 'Datenschutz',
    necessary: 'Erforderlich',
    necessaryDesc: 'Notwendig für die Funktion der Website. Kann nicht deaktiviert werden.',
    analytics: 'Analyse',
    analyticsDesc: 'Helfen uns zu verstehen, wie Besucher unsere Website nutzen.',
    advertising: 'Werbung',
    advertisingDesc: 'Dienen der Werbemessung und Conversion-Erfassung.',
    personalization: 'Personalisierung',
    personalizationDesc: 'Ermöglichen personalisierte Anzeigen basierend auf deinen Interessen.',
    alwaysOn: 'Immer aktiv',
  },
  fr: {
    title: 'Paramètres de cookies et confidentialité',
    description: 'Nous utilisons des cookies et technologies similaires pour la mesure publicitaire et le remarketing via Google Ads. Vous choisissez quels cookies sont autorisés.',
    acceptAll: 'Tout accepter',
    rejectAll: 'Tout refuser',
    customize: 'Personnaliser',
    save: 'Enregistrer les préférences',
    privacyPolicy: 'Confidentialité',
    necessary: 'Essentiels',
    necessaryDesc: 'Nécessaires au fonctionnement du site. Ne peuvent pas être désactivés.',
    analytics: 'Analyse',
    analyticsDesc: 'Nous aident à comprendre comment les visiteurs utilisent notre site.',
    advertising: 'Publicité',
    advertisingDesc: 'Utilisés pour la mesure publicitaire et le suivi des conversions.',
    personalization: 'Personnalisation',
    personalizationDesc: 'Permettent des publicités personnalisées selon vos intérêts.',
    alwaysOn: 'Toujours actif',
  },
  es: {
    title: 'Configuración de cookies y privacidad',
    description: 'Utilizamos cookies y tecnologías similares para medición publicitaria y remarketing a través de Google Ads. Tú decides qué cookies se permiten.',
    acceptAll: 'Aceptar todo',
    rejectAll: 'Rechazar todo',
    customize: 'Personalizar',
    save: 'Guardar preferencias',
    privacyPolicy: 'Privacidad',
    necessary: 'Esenciales',
    necessaryDesc: 'Necesarias para el funcionamiento del sitio web. No se pueden desactivar.',
    analytics: 'Análisis',
    analyticsDesc: 'Nos ayudan a entender cómo los visitantes usan nuestro sitio.',
    advertising: 'Publicidad',
    advertisingDesc: 'Se utilizan para medición publicitaria y seguimiento de conversiones.',
    personalization: 'Personalización',
    personalizationDesc: 'Permiten anuncios personalizados según tus intereses.',
    alwaysOn: 'Siempre activo',
  },
  it: {
    title: 'Impostazioni cookie e privacy',
    description: 'Utilizziamo cookie e tecnologie simili per la misurazione della pubblicità e il remarketing tramite Google Ads. Scegli tu quali cookie consentire.',
    acceptAll: 'Accetta tutto',
    rejectAll: 'Rifiuta tutto',
    customize: 'Personalizza',
    save: 'Salva preferenze',
    privacyPolicy: 'Privacy',
    necessary: 'Essenziali',
    necessaryDesc: 'Necessari per il funzionamento del sito. Non possono essere disattivati.',
    analytics: 'Analisi',
    analyticsDesc: 'Ci aiutano a capire come i visitatori usano il nostro sito.',
    advertising: 'Pubblicità',
    advertisingDesc: 'Utilizzati per la misurazione pubblicitaria e il tracciamento delle conversioni.',
    personalization: 'Personalizzazione',
    personalizationDesc: 'Consentono annunci personalizzati in base ai tuoi interessi.',
    alwaysOn: 'Sempre attivo',
  },
  ja: {
    title: 'Cookie・プライバシー設定',
    description: 'Google Ads による広告測定とリマーケティングのため、Cookie および類似技術を使用しています。許可する Cookie を選択できます。',
    acceptAll: 'すべて許可',
    rejectAll: 'すべて拒否',
    customize: 'カスタマイズ',
    save: '設定を保存',
    privacyPolicy: 'プライバシーポリシー',
    necessary: '必須',
    necessaryDesc: 'ウェブサイトの機能に必要です。無効にできません。',
    analytics: '分析',
    analyticsDesc: '訪問者のサイト利用状況の把握に役立ちます。',
    advertising: '広告',
    advertisingDesc: '広告測定とコンバージョントラッキングに使用されます。',
    personalization: 'パーソナライゼーション',
    personalizationDesc: '興味に基づいたパーソナライズ広告を可能にします。',
    alwaysOn: '常にオン',
  },
  'zh-Hans': {
    title: 'Cookie 和隐私设置',
    description: '我们使用 Cookie 及类似技术通过 Google Ads 进行广告效果衡量和再营销。您可以选择允许哪些 Cookie。',
    acceptAll: '全部接受',
    rejectAll: '全部拒绝',
    customize: '自定义',
    save: '保存设置',
    privacyPolicy: '隐私政策',
    necessary: '必要',
    necessaryDesc: '网站正常运行所必需，无法禁用。',
    analytics: '分析',
    analyticsDesc: '帮助我们了解访客如何使用本网站。',
    advertising: '广告',
    advertisingDesc: '用于广告效果衡量和转化追踪。',
    personalization: '个性化',
    personalizationDesc: '根据您的兴趣展示个性化广告。',
    alwaysOn: '始终开启',
  },
  'zh-Hant': {
    title: 'Cookie 和隱私設定',
    description: '我們使用 Cookie 及類似技術透過 Google Ads 進行廣告效果衡量和再行銷。您可以選擇允許哪些 Cookie。',
    acceptAll: '全部接受',
    rejectAll: '全部拒絕',
    customize: '自訂',
    save: '儲存設定',
    privacyPolicy: '隱私政策',
    necessary: '必要',
    necessaryDesc: '網站正常運作所必需，無法停用。',
    analytics: '分析',
    analyticsDesc: '幫助我們瞭解訪客如何使用本網站。',
    advertising: '廣告',
    advertisingDesc: '用於廣告效果衡量和轉換追蹤。',
    personalization: '個人化',
    personalizationDesc: '根據您的興趣顯示個人化廣告。',
    alwaysOn: '始終開啟',
  },
  ar: {
    title: 'إعدادات ملفات تعريف الارتباط والخصوصية',
    description: 'نستخدم ملفات تعريف الارتباط وتقنيات مماثلة لقياس الإعلانات وتجديد النشاط التسويقي عبر إعلانات Google. أنت تختار ملفات تعريف الارتباط المسموح بها.',
    acceptAll: 'قبول الكل',
    rejectAll: 'رفض الكل',
    customize: 'تخصيص',
    save: 'حفظ التفضيلات',
    privacyPolicy: 'سياسة الخصوصية',
    necessary: 'أساسية',
    necessaryDesc: 'ضرورية لعمل الموقع. لا يمكن تعطيلها.',
    analytics: 'التحليلات',
    analyticsDesc: 'تساعدنا على فهم كيفية استخدام الزوار لموقعنا.',
    advertising: 'الإعلانات',
    advertisingDesc: 'تُستخدم لقياس الإعلانات وتتبع التحويلات.',
    personalization: 'التخصيص',
    personalizationDesc: 'تتيح إعلانات مخصصة بناءً على اهتماماتك.',
    alwaysOn: 'دائمًا مُفعّل',
  },
  ru: {
    title: 'Настройки файлов cookie и конфиденциальности',
    description: 'Мы используем файлы cookie и аналогичные технологии для измерения рекламы и ремаркетинга через Google Ads. Вы решаете, какие файлы cookie разрешены.',
    acceptAll: 'Принять все',
    rejectAll: 'Отклонить все',
    customize: 'Настроить',
    save: 'Сохранить настройки',
    privacyPolicy: 'Конфиденциальность',
    necessary: 'Необходимые',
    necessaryDesc: 'Необходимы для работы сайта. Нельзя отключить.',
    analytics: 'Аналитика',
    analyticsDesc: 'Помогают понять, как посетители используют наш сайт.',
    advertising: 'Реклама',
    advertisingDesc: 'Используются для измерения рекламы и отслеживания конверсий.',
    personalization: 'Персонализация',
    personalizationDesc: 'Позволяют показывать персонализированную рекламу на основе ваших интересов.',
    alwaysOn: 'Всегда вкл.',
  },
  nl: {
    title: 'Cookie- en privacyinstellingen',
    description: 'We gebruiken cookies en vergelijkbare technologieën voor advertentiemeting en remarketing via Google Ads. Jij kiest welke cookies zijn toegestaan.',
    acceptAll: 'Alles accepteren',
    rejectAll: 'Alles weigeren',
    customize: 'Aanpassen',
    save: 'Voorkeuren opslaan',
    privacyPolicy: 'Privacybeleid',
    necessary: 'Essentieel',
    necessaryDesc: 'Noodzakelijk voor de werking van de website. Kan niet worden uitgeschakeld.',
    analytics: 'Analyse',
    analyticsDesc: 'Helpen ons te begrijpen hoe bezoekers onze website gebruiken.',
    advertising: 'Advertenties',
    advertisingDesc: 'Worden gebruikt voor advertentiemeting en conversietracking.',
    personalization: 'Personalisatie',
    personalizationDesc: 'Maken gepersonaliseerde advertenties mogelijk op basis van je interesses.',
    alwaysOn: 'Altijd aan',
  },
  tr: {
    title: 'Çerez ve Gizlilik Ayarları',
    description: 'Google Ads üzerinden reklam ölçümü ve yeniden pazarlama için çerezler ve benzer teknolojiler kullanıyoruz. Hangi çerezlere izin verileceğini siz seçersiniz.',
    acceptAll: 'Tümünü Kabul Et',
    rejectAll: 'Tümünü Reddet',
    customize: 'Özelleştir',
    save: 'Tercihleri Kaydet',
    privacyPolicy: 'Gizlilik Politikası',
    necessary: 'Gerekli',
    necessaryDesc: 'Web sitesinin çalışması için gereklidir. Devre dışı bırakılamaz.',
    analytics: 'Analiz',
    analyticsDesc: 'Ziyaretçilerin sitemizi nasıl kullandığını anlamamıza yardımcı olur.',
    advertising: 'Reklamcılık',
    advertisingDesc: 'Reklam ölçümü ve dönüşüm takibi için kullanılır.',
    personalization: 'Kişiselleştirme',
    personalizationDesc: 'İlgi alanlarınıza göre kişiselleştirilmiş reklamlara olanak tanır.',
    alwaysOn: 'Her zaman açık',
  },
  sv: {
    title: 'Cookie- och sekretessinställningar',
    description: 'Vi använder cookies och liknande teknik för annonsmätning och remarketing via Google Ads. Du väljer vilka cookies som tillåts.',
    acceptAll: 'Acceptera alla',
    rejectAll: 'Avvisa alla',
    customize: 'Anpassa',
    save: 'Spara inställningar',
    privacyPolicy: 'Integritetspolicy',
    necessary: 'Nödvändiga',
    necessaryDesc: 'Krävs för att webbplatsen ska fungera. Kan inte inaktiveras.',
    analytics: 'Analys',
    analyticsDesc: 'Hjälper oss förstå hur besökare använder vår webbplats.',
    advertising: 'Reklam',
    advertisingDesc: 'Används för annonsmätning och konverteringsspårning.',
    personalization: 'Personalisering',
    personalizationDesc: 'Möjliggör personliga annonser baserat på dina intressen.',
    alwaysOn: 'Alltid på',
  },
  da: {
    title: 'Cookie- og privatlivsindstillinger',
    description: 'Vi bruger cookies og lignende teknologier til annonceriningsmåling og remarketing via Google Ads. Du vælger, hvilke cookies der tillades.',
    acceptAll: 'Accepter alle',
    rejectAll: 'Afvis alle',
    customize: 'Tilpas',
    save: 'Gem indstillinger',
    privacyPolicy: 'Privatlivspolitik',
    necessary: 'Nødvendige',
    necessaryDesc: 'Nødvendige for at hjemmesiden kan fungere. Kan ikke deaktiveres.',
    analytics: 'Analyse',
    analyticsDesc: 'Hjælper os med at forstå, hvordan besøgende bruger vores hjemmeside.',
    advertising: 'Annoncering',
    advertisingDesc: 'Bruges til annoncemåling og konverteringssporing.',
    personalization: 'Personalisering',
    personalizationDesc: 'Muliggør personlige annoncer baseret på dine interesser.',
    alwaysOn: 'Altid aktiv',
  },
  ko: {
    title: '쿠키 및 개인정보 설정',
    description: 'Google Ads를 통한 광고 측정 및 리마케팅을 위해 쿠키와 유사한 기술을 사용합니다. 허용할 쿠키를 선택할 수 있습니다.',
    acceptAll: '모두 수락',
    rejectAll: '모두 거부',
    customize: '맞춤 설정',
    save: '설정 저장',
    privacyPolicy: '개인정보 처리방침',
    necessary: '필수',
    necessaryDesc: '웹사이트 작동에 필요합니다. 비활성화할 수 없습니다.',
    analytics: '분석',
    analyticsDesc: '방문자가 사이트를 어떻게 사용하는지 이해하는 데 도움이 됩니다.',
    advertising: '광고',
    advertisingDesc: '광고 측정 및 전환 추적에 사용됩니다.',
    personalization: '개인화',
    personalizationDesc: '관심사에 기반한 맞춤 광고를 가능하게 합니다.',
    alwaysOn: '항상 켜짐',
  },
  nb: {
    title: 'Informasjonskapsel- og personverninnstillinger',
    description: 'Vi bruker informasjonskapsler og lignende teknologier for annonseringsmåling og remarketing via Google Ads. Du velger hvilke informasjonskapsler som tillates.',
    acceptAll: 'Godta alle',
    rejectAll: 'Avvis alle',
    customize: 'Tilpass',
    save: 'Lagre innstillinger',
    privacyPolicy: 'Personvern',
    necessary: 'Nødvendige',
    necessaryDesc: 'Nødvendige for at nettstedet skal fungere. Kan ikke deaktiveres.',
    analytics: 'Analyse',
    analyticsDesc: 'Hjelper oss å forstå hvordan besøkende bruker nettstedet vårt.',
    advertising: 'Annonsering',
    advertisingDesc: 'Brukes til annonsemåling og konverteringssporing.',
    personalization: 'Personalisering',
    personalizationDesc: 'Muliggjør personlige annonser basert på dine interesser.',
    alwaysOn: 'Alltid på',
  },
};

/* ── Toggle-Komponente ── */
function Toggle({ checked, onChange, disabled }: { checked: boolean; onChange: (v: boolean) => void; disabled?: boolean }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange(!checked)}
      className={`relative inline-flex h-6 w-11 shrink-0 rounded-full transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[#007AFF] focus-visible:ring-offset-2 ${
        checked ? 'bg-[#34C759]' : 'bg-[#d1d1d6] dark:bg-[#636366]'
      } ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}`}
    >
      <span
        className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-sm ring-0 transition-transform duration-200 ease-in-out ${
          checked ? 'translate-x-[22px]' : 'translate-x-[2px]'
        } mt-[2px]`}
      />
    </button>
  );
}

/* ── Hauptkomponente ── */
export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [adEnabled, setAdEnabled] = useState(false);
  const [personalizationEnabled, setPersonalizationEnabled] = useState(false);

  const { lang } = useParams<{ lang: string }>();
  const currentLang = (lang || 'en') as Language;
  const texts = consentTexts[currentLang] || consentTexts.en;

  useEffect(() => {
    // Bereits entschieden? → Banner nicht zeigen + Consent wiederherstellen
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored) {
      // Altes Privacy-Notice-Flag migrieren
      localStorage.removeItem('maca-privacy-notice-dismissed');
      localStorage.removeItem('maca-cookie-consent');
      // Gespeicherten Consent an gtag senden (defaults sind 'denied', hier updaten)
      try {
        const sc = JSON.parse(stored) as ConsentState;
        if (typeof window.gtag === 'function') {
          window.gtag('consent', 'update', {
            ad_storage: sc.ad_storage || 'denied',
            ad_user_data: sc.ad_user_data || 'denied',
            ad_personalization: sc.ad_personalization || 'denied',
            analytics_storage: sc.analytics_storage || 'denied',
          });
        }
      } catch { /* ignore parse errors */ }
      return;
    }
    // Alte Keys migrieren: Nutzer hat altes Banner bereits bestätigt → als "all denied" speichern
    const legacyDismissed = localStorage.getItem('maca-privacy-notice-dismissed');
    const legacyCookieConsent = localStorage.getItem('maca-cookie-consent');
    if (legacyDismissed || legacyCookieConsent) {
      const deniedAll: ConsentState = {
        ad_storage: 'denied',
        ad_user_data: 'denied',
        ad_personalization: 'denied',
        analytics_storage: 'denied',
      };
      localStorage.setItem(CONSENT_KEY, JSON.stringify(deniedAll));
      localStorage.removeItem('maca-privacy-notice-dismissed');
      localStorage.removeItem('maca-cookie-consent');
      return;
    }
    // Noch keine Entscheidung → Banner nach kurzer Verzögerung anzeigen
    const timer = setTimeout(() => setShowBanner(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const applyConsent = useCallback((consent: ConsentState) => {
    // In localStorage speichern (wird beim nächsten Laden von index.html gelesen)
    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));

    // gtag consent update (sofort wirksam auf aktueller Seite)
    if (typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        ad_storage: consent.ad_storage,
        ad_user_data: consent.ad_user_data,
        ad_personalization: consent.ad_personalization,
        analytics_storage: consent.analytics_storage,
      });
    }

    setShowBanner(false);
  }, []);

  const handleAcceptAll = useCallback(() => {
    applyConsent({
      ad_storage: 'granted',
      ad_user_data: 'granted',
      ad_personalization: 'granted',
      analytics_storage: 'granted',
    });
  }, [applyConsent]);

  const handleRejectAll = useCallback(() => {
    applyConsent({
      ad_storage: 'denied',
      ad_user_data: 'denied',
      ad_personalization: 'denied',
      analytics_storage: 'denied',
    });
  }, [applyConsent]);

  const handleSaveCustom = useCallback(() => {
    applyConsent({
      ad_storage: adEnabled ? 'granted' : 'denied',
      ad_user_data: adEnabled ? 'granted' : 'denied',
      ad_personalization: personalizationEnabled ? 'granted' : 'denied',
      analytics_storage: analyticsEnabled ? 'granted' : 'denied',
    });
  }, [adEnabled, personalizationEnabled, analyticsEnabled, applyConsent]);

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-[60] p-4 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={texts.title}
        >
          <div className="max-w-2xl mx-auto rounded-2xl p-5 md:p-6 bg-[#f5f5f7] dark:bg-[#2c2c2e] border border-black/[0.08] dark:border-white/[0.1] shadow-[0_8px_40px_rgba(0,0,0,0.18)]">
            {/* Header */}
            <div className="flex items-start gap-3 mb-3">
              <Shield className="w-5 h-5 text-[#007AFF] dark:text-[#0A84FF] mt-0.5 shrink-0" />
              <div className="flex-1">
                <h3 className="font-semibold text-[#1d1d1f] dark:text-[#f5f5f7]">{texts.title}</h3>
                <p className="text-sm text-[#86868b] leading-relaxed mt-1">{texts.description}</p>
              </div>
            </div>

            {/* Details Toggle */}
            <button
              type="button"
              onClick={() => setShowDetails(!showDetails)}
              className="flex items-center gap-1.5 text-sm text-[#007AFF] dark:text-[#0A84FF] hover:underline mb-3"
            >
              <Settings className="w-3.5 h-3.5" />
              {texts.customize}
              {showDetails ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
            </button>

            {/* Granulare Einstellungen */}
            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-3 mb-4 border-t border-black/[0.06] dark:border-white/[0.08] pt-3">
                    {/* Essentiell – immer aktiv */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">{texts.necessary}</div>
                        <div className="text-xs text-[#86868b]">{texts.necessaryDesc}</div>
                      </div>
                      <span className="text-xs text-[#86868b] whitespace-nowrap">{texts.alwaysOn}</span>
                    </div>
                    {/* Analytics */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">{texts.analytics}</div>
                        <div className="text-xs text-[#86868b]">{texts.analyticsDesc}</div>
                      </div>
                      <Toggle checked={analyticsEnabled} onChange={setAnalyticsEnabled} />
                    </div>
                    {/* Werbung */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">{texts.advertising}</div>
                        <div className="text-xs text-[#86868b]">{texts.advertisingDesc}</div>
                      </div>
                      <Toggle checked={adEnabled} onChange={setAdEnabled} />
                    </div>
                    {/* Personalisierung */}
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-[#1d1d1f] dark:text-[#f5f5f7]">{texts.personalization}</div>
                        <div className="text-xs text-[#86868b]">{texts.personalizationDesc}</div>
                      </div>
                      <Toggle checked={personalizationEnabled} onChange={setPersonalizationEnabled} />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
              <Link
                to={`/${currentLang}/privacy`}
                className="text-sm text-[#007AFF] dark:text-[#0A84FF] hover:underline py-2 px-1 order-last sm:order-first"
              >
                {texts.privacyPolicy}
              </Link>
              <div className="flex-1" />
              <button
                type="button"
                onClick={handleRejectAll}
                className="px-4 py-2.5 text-sm font-medium rounded-full border border-black/[0.12] dark:border-white/[0.15] text-[#1d1d1f] dark:text-[#f5f5f7] hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors min-h-[44px]"
              >
                {texts.rejectAll}
              </button>
              {showDetails ? (
                <button
                  type="button"
                  onClick={handleSaveCustom}
                  className="px-5 py-2.5 bg-[#007AFF] hover:bg-[#0071E3] text-white rounded-full transition-all text-sm font-medium min-h-[44px]"
                >
                  {texts.save}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="px-5 py-2.5 bg-[#007AFF] hover:bg-[#0071E3] text-white rounded-full transition-all text-sm font-medium min-h-[44px]"
                >
                  {texts.acceptAll}
                </button>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}