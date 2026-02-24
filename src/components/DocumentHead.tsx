import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router';
import { type Language } from '../locales/translations';
import macaAppLogo from 'figma:asset/7726871357dffca8a1c72824ee6fcf70b91dc923.png';

const APP_STORE_ID = '6759258773';
const APP_STORE_URL = `https://apps.apple.com/app/maca-master-audio-control/id${APP_STORE_ID}`;
const BASE_URL = 'https://getmaca.de';

// ---------------------------------------------------------------------------
// Meta descriptions – every language, keyword-rich & ≤155 chars
// ---------------------------------------------------------------------------
const metaDescriptions: Record<Language, string> = {
  en: 'MACA – Per-app volume control for macOS. Individual mixer, 10-band EQ, audio profiles, Focus Mode. No data collection. One-time purchase. Free version available.',
  de: 'MACA – Lautstärke pro App für macOS. Individueller Mixer, 10-Band-EQ, Audio-Profile, Fokus-Modus. Keine Daten. Einmaliger Kauf. Kostenlose Version verfügbar.',
  fr: 'MACA – Volume par application sur macOS. Mixer individuel, EQ 10 bandes, profils audio, Mode Focus. Aucune donnée. Achat unique. Version gratuite disponible.',
  es: 'MACA – Volumen por app en macOS. Mezclador individual, EQ 10 bandas, perfiles de audio, Modo Enfoque. Sin datos. Compra única. Versión gratuita disponible.',
  it: 'MACA – Volume per app su macOS. Mixer individuale, EQ 10 bande, profili audio, Modalità Focus. Nessun dato. Acquisto unico. Versione gratuita disponibile.',
  pt: 'MACA – Volume por app no macOS. Mixer individual, EQ 10 bandas, perfis de áudio, Modo Foco. Sem dados. Compra única. Versão gratuita disponível.',
  ja: 'MACA – macOSのアプリごとの音量コントロール。個別ミキサー、10バンドEQ、オーディオプロファイル、フォーカスモード。データ収集なし。買い切り。無料版あり。',
  zh: 'MACA – macOS每应用音量控制。独立混音器、10段EQ、音频配置文件、专注模式。无数据收集。一次性购买。提供免费版本。',
};

// ---------------------------------------------------------------------------
// Page titles – keyword-optimised per language
// ---------------------------------------------------------------------------
const pageTitles: Record<string, Record<Language, string>> = {
  home: {
    en: 'MACA – Per-App Volume Control for macOS | Individual Audio Mixer',
    de: 'MACA – Lautstärke pro App für macOS | Individueller Audio-Mixer',
    fr: 'MACA – Volume par Application macOS | Mixer Audio Individuel',
    es: 'MACA – Volumen por App en macOS | Mezclador de Audio Individual',
    it: 'MACA – Volume per App su macOS | Mixer Audio Individuale',
    pt: 'MACA – Volume por App no macOS | Mixer de Áudio Individual',
    ja: 'MACA – macOSのアプリごとの音量コントロール | 個別オーディオミキサー',
    zh: 'MACA – macOS每应用音量控制 | 独立音频混音器',
  },
  faq: {
    en: 'FAQ – MACA Master Audio Control for macOS',
    de: 'FAQ – MACA Master Audio Control für macOS',
    fr: 'FAQ – MACA Contrôle Audio pour macOS',
    es: 'FAQ – MACA Control de Audio para macOS',
    it: 'FAQ – MACA Controllo Audio per macOS',
    pt: 'FAQ – MACA Controle de Áudio para macOS',
    ja: 'よくある質問 – MACA Master Audio Control',
    zh: '常见问题 – MACA Master Audio Control',
  },
  privacy: {
    en: 'Privacy Policy – MACA Master Audio Control',
    de: 'Datenschutzerklärung – MACA Master Audio Control',
    fr: 'Politique de Confidentialité – MACA Master Audio Control',
    es: 'Política de Privacidad – MACA Master Audio Control',
    it: 'Informativa sulla Privacy – MACA Master Audio Control',
    pt: 'Política de Privacidade – MACA Master Audio Control',
    ja: 'プライバシーポリシー – MACA Master Audio Control',
    zh: '隐私政策 – MACA Master Audio Control',
  },
  terms: {
    en: 'Terms of Use – MACA Master Audio Control',
    de: 'Nutzungsbedingungen – MACA Master Audio Control',
    fr: "Conditions d'Utilisation – MACA Master Audio Control",
    es: 'Términos de Uso – MACA Master Audio Control',
    it: "Termini d'Uso – MACA Master Audio Control",
    pt: 'Termos de Uso – MACA Master Audio Control',
    ja: '利用規約 – MACA Master Audio Control',
    zh: '使用条款 – MACA Master Audio Control',
  },
  imprint: {
    en: 'Imprint – MACA Master Audio Control',
    de: 'Impressum – MACA Master Audio Control',
    fr: 'Mentions Légales – MACA Master Audio Control',
    es: 'Aviso Legal – MACA Master Audio Control',
    it: 'Note Legali – MACA Master Audio Control',
    pt: 'Informação Legal – MACA Master Audio Control',
    ja: '法的情報 – MACA Master Audio Control',
    zh: '法律信息 – MACA Master Audio Control',
  },
  feedback: {
    en: 'Feedback – MACA Master Audio Control',
    de: 'Feedback – MACA Master Audio Control',
    fr: "Retour d'expérience – MACA Master Audio Control",
    es: 'Comentarios – MACA Master Audio Control',
    it: 'Feedback – MACA Master Audio Control',
    pt: 'Feedback – MACA Master Audio Control',
    ja: 'フィードバック – MACA Master Audio Control',
    zh: '反馈 – MACA Master Audio Control',
  },
};

// ---------------------------------------------------------------------------
// Keywords – long-tail, intent-rich, per language
// ---------------------------------------------------------------------------
const metaKeywords: Record<Language, string> = {
  en: 'per app volume control macOS, individual app volume mac, macOS audio mixer, mac volume mixer, per app audio mac, macOS sound control, app volume macOS Sequoia, mac equalizer per app, MACA app, master audio control mac, mac audio profiles, mute individual apps mac',
  de: 'Lautstärke pro App macOS, App-Lautstärke Mac, macOS Audio-Mixer, Mac Lautstärke-Mixer, individuelle App-Lautstärke, macOS Sound-Kontrolle, App Lautstärke macOS Sequoia, Mac Equalizer pro App, MACA App, Audio-Profile Mac, einzelne Apps stumm Mac',
  fr: 'volume par application macOS, mixeur audio mac, contrôle volume individuel mac, macOS egaliseur par app, MACA app, profils audio mac, couper son application mac',
  es: 'volumen por aplicación macOS, mezclador audio mac, control volumen individual mac, macOS ecualizador por app, MACA app, perfiles audio mac, silenciar apps mac',
  it: 'volume per applicazione macOS, mixer audio mac, controllo volume individuale mac, macOS equalizzatore per app, MACA app, profili audio mac, silenziare app mac',
  pt: 'volume por aplicativo macOS, mixer audio mac, controle volume individual mac, macOS equalizador por app, MACA app, perfis audio mac, silenciar apps mac',
  ja: 'macOS アプリごと音量 個別音量制御 mac オーディオミキサー イコライザー 音量調整 MACA アプリ',
  zh: 'macOS每应用音量控制 独立音量 mac音频混音器 均衡器 音量调节 MACA应用',
};

// ---------------------------------------------------------------------------
// og:locale mapping
// ---------------------------------------------------------------------------
const ogLocales: Record<Language, string> = {
  en: 'en_US',
  de: 'de_DE',
  fr: 'fr_FR',
  es: 'es_ES',
  it: 'it_IT',
  pt: 'pt_PT',
  ja: 'ja_JP',
  zh: 'zh_CN',
};

// ---------------------------------------------------------------------------
// FAQ data for FAQPage JSON-LD schema (home page only – en + de)
// ---------------------------------------------------------------------------
const homeFAQ_en = [
  {
    question: 'What is MACA?',
    answer:
      'MACA (Master Audio Control App) is a macOS application that gives you individual volume control for every app running on your Mac — no more jumping between apps to adjust audio levels.',
  },
  {
    question: 'How is MACA different from macOS volume control?',
    answer:
      'macOS only controls the overall system volume. MACA lets you control each application individually, mute specific apps, create audio profiles, use a 10-band equalizer, and much more.',
  },
  {
    question: 'Is MACA free?',
    answer:
      'MACA offers a free version with core features. The Pro version unlocks audio profiles, an enhanced equalizer, Focus Mode, and more — available as a one-time purchase with no subscription.',
  },
  {
    question: 'Does MACA collect my data?',
    answer:
      'No. MACA processes everything locally on your Mac. We do not collect, store, or transmit any personal data. Privacy is a core principle of the app.',
  },
  {
    question: 'Which macOS versions does MACA support?',
    answer:
      'MACA requires macOS 15 (Sequoia) or newer and is optimised for Apple Silicon (M1 / M2 / M3 / M4).',
  },
  {
    question: 'Can I mute all apps at once?',
    answer:
      'Yes. MACA\'s Total Silence Mode mutes all applications instantly with one click. Focus Mode keeps only your chosen communication apps (e.g. Zoom, Teams, Discord) unmuted.',
  },
];

// ---------------------------------------------------------------------------
// Utility: set or create a <meta> element
// ---------------------------------------------------------------------------
function setMeta(
  selector: string,
  attrKey: string,
  attrValue: string,
  content: string
) {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attrKey, attrValue);
    document.head.appendChild(el);
  }
  el.content = content;
}

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
export function DocumentHead() {
  const { lang } = useParams<{ lang: string }>();
  const location = useLocation();
  const currentLang = (lang || 'en') as Language;

  useEffect(() => {
    // ── Determine current page ────────────────────────────────────────────
    const currentPath = location.pathname;
    const pathParts = currentPath.split('/').filter(Boolean);
    const pageName = pathParts.length > 1 ? pathParts[pathParts.length - 1] : 'home';
    const pageKey = ['faq', 'privacy', 'terms', 'imprint', 'feedback'].includes(pageName)
      ? pageName
      : 'home';
    const isHome = pageKey === 'home';

    // ── <title> ───────────────────────────────────────────────────────────
    const titleMap = pageTitles[pageKey];
    document.title = titleMap
      ? titleMap[currentLang] || titleMap.en
      : 'MACA – Master Audio Control';

    // ── <html lang=""> ────────────────────────────────────────────────────
    document.documentElement.lang = currentLang;

    // ── charset ──────────────────────────────────────────────────────────
    if (!document.querySelector('meta[charset]')) {
      const charset = document.createElement('meta');
      charset.setAttribute('charset', 'UTF-8');
      document.head.insertBefore(charset, document.head.firstChild);
    }

    // ── viewport ─────────────────────────────────────────────────────────
    setMeta('meta[name="viewport"]', 'name', 'viewport',
      'width=device-width, initial-scale=1.0, maximum-scale=5.0');

    // ── robots ───────────────────────────────────────────────────────────
    setMeta('meta[name="robots"]', 'name', 'robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');

    // ── description ───────────────────────────────────────────────────────
    setMeta('meta[name="description"]', 'name', 'description', metaDescriptions[currentLang]);

    // ── keywords ─────────────────────────────────────────────────────────
    setMeta('meta[name="keywords"]', 'name', 'keywords', metaKeywords[currentLang]);

    // ── application-name ─────────────────────────────────────────────────
    setMeta('meta[name="application-name"]', 'name', 'application-name', 'MACA');

    // ── Apple Smart App Banner ────────────────────────────────────────────
    setMeta('meta[name="apple-itunes-app"]', 'name', 'apple-itunes-app',
      `app-id=${APP_STORE_ID}`);

    // ── theme-color ───────────────────────────────────────────────────────
    const isDark = document.documentElement.classList.contains('dark');
    setMeta('meta[name="theme-color"]', 'name', 'theme-color', isDark ? '#0f172a' : '#ffffff');

    // ── Canonical URL ─────────────────────────────────────────────────────
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${BASE_URL}${currentPath}`;

    // ── Hreflang ──────────────────────────────────────────────────────────
    const languages: Language[] = ['en', 'de', 'fr', 'es', 'it', 'pt', 'ja', 'zh'];
    const pathWithoutLang = currentPath.replace(/^\/(en|de|fr|es|it|pt|ja|zh)/, '');
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
    languages.forEach(language => {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = language;
      link.href = `${BASE_URL}/${language}${pathWithoutLang}`;
      document.head.appendChild(link);
    });
    const xDefault = document.createElement('link');
    xDefault.rel = 'alternate';
    xDefault.hreflang = 'x-default';
    xDefault.href = `${BASE_URL}/en${pathWithoutLang}`;
    document.head.appendChild(xDefault);

    // ── Favicon & Apple Touch Icon ────────────────────────────────────────
    let favIcon = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
    if (!favIcon) {
      favIcon = document.createElement('link');
      favIcon.rel = 'icon';
      document.head.appendChild(favIcon);
    }
    favIcon.href = macaAppLogo;

    let ati = document.querySelector("link[rel='apple-touch-icon']") as HTMLLinkElement | null;
    if (!ati) {
      ati = document.createElement('link');
      ati.rel = 'apple-touch-icon';
      document.head.appendChild(ati);
    }
    ati.href = macaAppLogo;

    // ── Web App Manifest ──────────────────────────────────────────────────
    let manifest = document.querySelector('link[rel="manifest"]') as HTMLLinkElement | null;
    if (!manifest) {
      manifest = document.createElement('link');
      manifest.rel = 'manifest';
      manifest.href = '/manifest.json';
      document.head.appendChild(manifest);
    }

    // ── Content Security Policy (meta fallback) ───────────────────────────
    if (!document.querySelector('meta[http-equiv="Content-Security-Policy"]')) {
      const csp = document.createElement('meta');
      csp.httpEquiv = 'Content-Security-Policy';
      csp.content = "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self'; connect-src 'self' https://apps.apple.com; frame-ancestors 'self' https://www.figma.com";
      document.head.appendChild(csp);
    }

    // ── X-UA-Compatible ───────────────────────────────────────────────────
    if (!document.querySelector('meta[http-equiv="X-UA-Compatible"]')) {
      const xua = document.createElement('meta');
      xua.httpEquiv = 'X-UA-Compatible';
      xua.content = 'IE=edge';
      document.head.appendChild(xua);
    }

    // ── Open Graph ────────────────────────────────────────────────────────
    const ogTitle = titleMap ? (titleMap[currentLang] || titleMap.en) : 'MACA – Master Audio Control';
    const ogTags: Array<{ property?: string; name?: string; content: string }> = [
      { property: 'og:site_name', content: 'MACA – Master Audio Control' },
      { property: 'og:title', content: ogTitle },
      { property: 'og:description', content: metaDescriptions[currentLang] },
      { property: 'og:image', content: `${BASE_URL}${macaAppLogo}` },
      { property: 'og:image:width', content: '1024' },
      { property: 'og:image:height', content: '1024' },
      { property: 'og:image:alt', content: 'MACA – Master Audio Control App Icon' },
      { property: 'og:url', content: `${BASE_URL}${currentPath}` },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: ogLocales[currentLang] || 'en_US' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: ogTitle },
      { name: 'twitter:description', content: metaDescriptions[currentLang] },
      { name: 'twitter:image', content: `${BASE_URL}${macaAppLogo}` },
      { name: 'twitter:image:alt', content: 'MACA – Master Audio Control App Icon' },
    ];

    ogTags.forEach(tag => {
      const selector = tag.property
        ? `meta[property="${tag.property}"]`
        : `meta[name="${tag.name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement | null;
      if (!meta) {
        meta = document.createElement('meta');
        if (tag.property) meta.setAttribute('property', tag.property);
        if (tag.name) meta.setAttribute('name', tag.name);
        document.head.appendChild(meta);
      }
      meta.content = tag.content;
    });

    // ── JSON-LD Structured Data ───────────────────────────────────────────
    document.querySelectorAll('script[type="application/ld+json"]').forEach(el => el.remove());

    // 1. SoftwareApplication schema
    const softwareApp = {
      '@context': 'https://schema.org',
      '@type': 'SoftwareApplication',
      '@id': `${BASE_URL}/#software`,
      name: 'MACA – Master Audio Control',
      alternateName: ['MACA', 'Master Audio Control App', 'MACA App'],
      applicationCategory: 'MultimediaApplication',
      applicationSubCategory: 'Audio Mixer',
      operatingSystem: 'macOS 15 (Sequoia) or later',
      processorRequirements: 'Apple Silicon (M1, M2, M3, M4) or Intel',
      memoryRequirements: '50 MB RAM',
      storageRequirements: '10 MB',
      releaseNotes: `${BASE_URL}/${currentLang}/history`,
      softwareVersion: '2.0',
      datePublished: '2024-12-01',
      inLanguage: languages,
      url: BASE_URL,
      downloadUrl: APP_STORE_URL,
      installUrl: APP_STORE_URL,
      screenshot: [
        `${BASE_URL}/screenshots/complete-audio-control.png`,
        `${BASE_URL}/screenshots/individual-app-control.png`,
        `${BASE_URL}/screenshots/equalizer.png`,
        `${BASE_URL}/screenshots/profiles.png`,
      ],
      featureList: [
        'Per-app volume control',
        'Individual app mute',
        '10-band equalizer with bass boost',
        'Audio profiles (Work, Gaming, Travel, custom)',
        'Focus Mode – mute all except selected apps',
        'Total Silence Mode – one-click all-mute',
        'Quick profile switching via menu bar',
        'Keyboard shortcuts',
        'Output device switching per app',
        'No data collection – 100% local processing',
        'No subscription – one-time purchase',
      ],
      offers: [
        {
          '@type': 'Offer',
          name: 'MACA Free',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: APP_STORE_URL,
          description: 'Free version with core per-app volume control features',
        },
        {
          '@type': 'Offer',
          name: 'MACA Pro',
          price: '4.99',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: APP_STORE_URL,
          description: 'Pro upgrade – audio profiles, enhanced EQ, Focus Mode, and more',
        },
      ],
      // aggregateRating will be added once the app has real App Store ratings
      description: metaDescriptions['en'],
      image: `${BASE_URL}${macaAppLogo}`,
      author: {
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
        name: 'AMX Mediensysteme',
        url: BASE_URL,
      },
      publisher: {
        '@type': 'Organization',
        '@id': `${BASE_URL}/#organization`,
        name: 'AMX Mediensysteme',
        url: BASE_URL,
      },
    };

    // 2. Organization schema
    const organization = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'AMX Mediensysteme',
      url: BASE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}${macaAppLogo}`,
        width: 1024,
        height: 1024,
      },
      sameAs: [APP_STORE_URL],
    };

    // 3. WebSite schema
    const webSite = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'MACA – Master Audio Control',
      inLanguage: languages,
      publisher: { '@id': `${BASE_URL}/#organization` },
    };

    // 4. BreadcrumbList schema (all pages except home)
    let breadcrumb = null;
    if (!isHome) {
      const breadcrumbName: Record<string, string> = {
        faq: 'FAQ',
        privacy: 'Privacy Policy',
        terms: 'Terms of Use',
        imprint: 'Imprint',
        feedback: 'Feedback',
      };
      breadcrumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: `${BASE_URL}/${currentLang}`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: breadcrumbName[pageKey] || pageKey,
            item: `${BASE_URL}${currentPath}`,
          },
        ],
      };
    }

    // 5. FAQPage schema (home only, English – Google shows rich results from en)
    let faqSchema = null;
    if (isHome) {
      faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: homeFAQ_en.map(item => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      };
    }

    // Inject all schemas
    const schemas = [softwareApp, organization, webSite, breadcrumb, faqSchema].filter(Boolean);
    schemas.forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });

    // ── Performance hints ─────────────────────────────────────────────────
    const dnsPrefetch = ['https://apps.apple.com'];
    dnsPrefetch.forEach(url => {
      if (!document.querySelector(`link[rel="dns-prefetch"][href="${url}"]`)) {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = url;
        document.head.appendChild(link);
      }
    });

    const preconnect = ['https://apps.apple.com'];
    preconnect.forEach(url => {
      if (!document.querySelector(`link[rel="preconnect"][href="${url}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = url;
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      }
    });
  }, [currentLang, location.pathname]);

  return null;
}