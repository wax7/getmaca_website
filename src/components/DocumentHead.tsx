import { useEffect } from 'react';
import { useParams, useLocation } from 'react-router';
import { type Language } from '../locales/translations';
import macaAppLogo from 'figma:asset/7726871357dffca8a1c72824ee6fcf70b91dc923.png';

// Meta descriptions für jede Sprache
const metaDescriptions: Record<Language, string> = {
  en: 'MACA - Master Audio Control App for macOS. Individual volume control for every app. No data collection, no subscriptions. Take control of your Mac audio today!',
  de: 'MACA - Master Audio Control App für macOS. Individuelle Lautstärkeregelung für jede App. Keine Datensammlung, keine Abos. Übernimm die Kontrolle über deinen Mac Audio!',
  fr: 'MACA - Master Audio Control App pour macOS. Contrôle du volume individuel pour chaque application. Aucune collecte de données, aucun abonnement.',
  es: 'MACA - Master Audio Control App para macOS. Control de volumen individual para cada aplicación. Sin recopilación de datos, sin suscripciones.',
  it: 'MACA - Master Audio Control App per macOS. Controllo del volume individuale per ogni app. Nessuna raccolta dati, nessun abbonamento.',
  pt: 'MACA - Master Audio Control App para macOS. Controle de volume individual para cada aplicativo. Sem coleta de dados, sem assinaturas.',
  ja: 'MACA - macOS用マスターオーディオコントロールアプリ。すべてのアプリの別音量コントロール。データ収集なし、サブスクリプションなし。',
  zh: 'MACA - macOS主音频控制应用程序。每个应用程序的独立音量控制。无数据收集，无订阅。',
};

// Seitentitel für verschiedene Seiten
const pageTitles: Record<string, Record<Language, string>> = {
  home: {
    en: 'MACA - Master Audio Control for macOS | Individual Volume per App',
    de: 'MACA - Master Audio Control für macOS | Individuelle Lautstärke pro App',
    fr: 'MACA - Contrôle Audio pour macOS | Volume Individuel par App',
    es: 'MACA - Control de Audio para macOS | Volumen Individual por App',
    it: 'MACA - Controllo Audio per macOS | Volume Individuale per App',
    pt: 'MACA - Controle de Áudio para macOS | Volume Individual por App',
    ja: 'MACA - macOS用オーディオコントロール | アプリごとの個別音量',
    zh: 'MACA - macOS音频控制 | 每个应用独立音量',
  },
  faq: {
    en: 'FAQ - MACA Master Audio Control',
    de: 'FAQ - MACA Master Audio Control',
    fr: 'FAQ - MACA Master Audio Control',
    es: 'FAQ - MACA Master Audio Control',
    it: 'FAQ - MACA Master Audio Control',
    pt: 'FAQ - MACA Master Audio Control',
    ja: 'よくある質問 - MACA Master Audio Control',
    zh: '常见问题 - MACA Master Audio Control',
  },
  privacy: {
    en: 'Privacy Policy - MACA Master Audio Control',
    de: 'Datenschutzerklärung - MACA Master Audio Control',
    fr: 'Politique de Confidentialité - MACA Master Audio Control',
    es: 'Política de Privacidad - MACA Master Audio Control',
    it: 'Informativa sulla Privacy - MACA Master Audio Control',
    pt: 'Política de Privacidade - MACA Master Audio Control',
    ja: 'プライバシーポリシー - MACA Master Audio Control',
    zh: '隐私政策 - MACA Master Audio Control',
  },
  terms: {
    en: 'Terms of Use - MACA Master Audio Control',
    de: 'Nutzungsbedingungen - MACA Master Audio Control',
    fr: 'Conditions d\'Utilisation - MACA Master Audio Control',
    es: 'Términos de Uso - MACA Master Audio Control',
    it: 'Termini d\'Uso - MACA Master Audio Control',
    pt: 'Termos de Uso - MACA Master Audio Control',
    ja: '利用規約 - MACA Master Audio Control',
    zh: '使用条款 - MACA Master Audio Control',
  },
  imprint: {
    en: 'Imprint - MACA Master Audio Control',
    de: 'Impressum - MACA Master Audio Control',
    fr: 'Mentions Légales - MACA Master Audio Control',
    es: 'Aviso Legal - MACA Master Audio Control',
    it: 'Note Legali - MACA Master Audio Control',
    pt: 'Informação Legal - MACA Master Audio Control',
    ja: '法的情報 - MACA Master Audio Control',
    zh: '法律信息 - MACA Master Audio Control',
  },
  feedback: {
    en: 'Feedback - MACA Master Audio Control',
    de: 'Feedback - MACA Master Audio Control',
    fr: 'Retour d\'expérience - MACA Master Audio Control',
    es: 'Comentarios - MACA Master Audio Control',
    it: 'Feedback - MACA Master Audio Control',
    pt: 'Feedback - MACA Master Audio Control',
    ja: 'フィードバック - MACA Master Audio Control',
    zh: '反馈 - MACA Master Audio Control',
  },
};

// Korrekte og:locale Werte pro Sprache
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

export function DocumentHead() {
  const { lang } = useParams<{ lang: string }>();
  const location = useLocation();
  const currentLang = (lang || 'en') as Language;
  const baseUrl = 'https://getmaca.de'; // Official MACA domain

  useEffect(() => {
    // Bestimme die aktuelle Seite aus dem Pfad
    const currentPath = location.pathname;
    const pathParts = currentPath.split('/').filter(Boolean);
    const pageName = pathParts.length > 1 ? pathParts[pathParts.length - 1] : 'home';
    const pageKey = ['faq', 'privacy', 'terms', 'imprint', 'feedback'].includes(pageName) ? pageName : 'home';

    // Setze den seitenspezifischen Titel
    const titleMap = pageTitles[pageKey];
    document.title = titleMap ? (titleMap[currentLang] || titleMap.en) : 'MACA - Master Audio Control';

    // Setze Meta Description
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = metaDescriptions[currentLang];

    // Setze Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${baseUrl}${currentPath}`;

    // Setze Hreflang Tags für alle Sprachen
    const languages: Language[] = ['en', 'de', 'fr', 'es', 'it', 'pt', 'ja', 'zh'];
    const pathWithoutLang = currentPath.replace(/^\/(en|de|fr|es|it|pt|ja|zh)/, '');
    
    // Entferne alte hreflang tags
    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach(el => el.remove());
    
    // Füge neue hreflang tags hinzu
    languages.forEach(language => {
      const hreflang = document.createElement('link');
      hreflang.rel = 'alternate';
      hreflang.hreflang = language;
      hreflang.href = `${baseUrl}/${language}${pathWithoutLang}`;
      document.head.appendChild(hreflang);
    });
    
    // x-default für Suchmaschinen
    const xDefault = document.createElement('link');
    xDefault.rel = 'alternate';
    xDefault.hreflang = 'x-default';
    xDefault.href = `${baseUrl}/en${pathWithoutLang}`;
    document.head.appendChild(xDefault);

    // Setze das Favicon
    let link = document.querySelector("link[rel~='icon']") as HTMLLinkElement;
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.head.appendChild(link);
    }
    link.href = macaAppLogo;

    // Setze auch Apple Touch Icon für bessere mobile Darstellung
    let appleTouchIcon = document.querySelector("link[rel='apple-touch-icon']") as HTMLLinkElement;
    if (!appleTouchIcon) {
      appleTouchIcon = document.createElement('link');
      appleTouchIcon.rel = 'apple-touch-icon';
      document.head.appendChild(appleTouchIcon);
    }
    appleTouchIcon.href = macaAppLogo;

    // Setze Open Graph Tags für Social Media
    const ogTags = [
      { property: 'og:title', content: 'MACA - Master Audio Control' },
      { property: 'og:description', content: metaDescriptions[currentLang] },
      { property: 'og:image', content: `${baseUrl}${macaAppLogo}` },
      { property: 'og:url', content: `${baseUrl}${currentPath}` },
      { property: 'og:type', content: 'website' },
      { property: 'og:locale', content: ogLocales[currentLang] || 'en_US' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'MACA - Master Audio Control' },
      { name: 'twitter:description', content: metaDescriptions[currentLang] },
      { name: 'twitter:image', content: `${baseUrl}${macaAppLogo}` },
    ];

    ogTags.forEach(tag => {
      const selector = tag.property 
        ? `meta[property="${tag.property}"]` 
        : `meta[name="${tag.name}"]`;
      let meta = document.querySelector(selector) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        if (tag.property) meta.setAttribute('property', tag.property);
        if (tag.name) meta.setAttribute('name', tag.name);
        document.head.appendChild(meta);
      }
      meta.content = tag.content;
    });

    // Strukturierte Daten (JSON-LD) für SEO
    let structuredData = document.querySelector('script[type="application/ld+json"]');
    if (structuredData) {
      structuredData.remove();
    }
    
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "MACA - Master Audio Control",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "macOS",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "ratingCount": "150"
      },
      "description": metaDescriptions[currentLang],
      "image": `${baseUrl}${macaAppLogo}`,
      "downloadUrl": "https://apps.apple.com/us/app/maca-master-audio-control/id6759258773",
      "softwareVersion": "1.0",
      "author": {
        "@type": "Organization",
        "name": "AMX Mediensysteme"
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(organizationSchema);
    document.head.appendChild(script);

    // Setze viewport für mobile Optimierung
    let viewport = document.querySelector('meta[name="viewport"]') as HTMLMetaElement;
    if (!viewport) {
      viewport = document.createElement('meta');
      viewport.name = 'viewport';
      document.head.appendChild(viewport);
    }
    viewport.content = 'width=device-width, initial-scale=1.0, maximum-scale=5.0';

    // Setze charset
    let charset = document.querySelector('meta[charset]') as HTMLMetaElement;
    if (!charset) {
      charset = document.createElement('meta');
      charset.setAttribute('charset', 'UTF-8');
      document.head.insertBefore(charset, document.head.firstChild);
    }

    // Setze Sprache im html Tag
    document.documentElement.lang = currentLang;

    // Performance-Optimierungen: DNS Prefetch für externe Resources
    const dnsPrefetchLinks = [
      'https://apps.apple.com',
      'https://images.unsplash.com',
    ];

    dnsPrefetchLinks.forEach(url => {
      let prefetch = document.querySelector(`link[rel="dns-prefetch"][href="${url}"]`) as HTMLLinkElement;
      if (!prefetch) {
        prefetch = document.createElement('link');
        prefetch.rel = 'dns-prefetch';
        prefetch.href = url;
        document.head.appendChild(prefetch);
      }
    });

    // Preconnect für kritische externe Domains
    const preconnectLinks = [
      'https://apps.apple.com',
    ];

    preconnectLinks.forEach(url => {
      let preconnect = document.querySelector(`link[rel="preconnect"][href="${url}"]`) as HTMLLinkElement;
      if (!preconnect) {
        preconnect = document.createElement('link');
        preconnect.rel = 'preconnect';
        preconnect.href = url;
        preconnect.crossOrigin = 'anonymous';
        document.head.appendChild(preconnect);
      }
    });

    // Setze Theme Color für mobile Browser
    let themeColor = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement;
    if (!themeColor) {
      themeColor = document.createElement('meta');
      themeColor.name = 'theme-color';
      document.head.appendChild(themeColor);
    }
    // Dynamische Theme Color basierend auf Dark Mode
    const isDark = document.documentElement.classList.contains('dark');
    themeColor.content = isDark ? '#0f172a' : '#ffffff';
  }, [currentLang, location.pathname]);

  return null;
}