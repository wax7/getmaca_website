export type Language = 'en' | 'de' | 'es' | 'fr' | 'it' | 'ja' | 'zh-Hans' | 'zh-Hant' | 'ar' | 'ru' | 'nl' | 'tr' | 'sv' | 'da' | 'ko' | 'nb';

export interface Translation {
  name: string;
  headerBadge: string;
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
  };
  problem: {
    title: string;
    items: string[];
  };
  solution: {
    title: string;
    subtitle: string;
  };
  features: {
    title: string;
    perAppVolume: {
      title: string;
      description: string;
    };
    quickMute: {
      title: string;
      description: string;
    };
    focusMode: {
      title: string;
      description: string;
    };
    audioProfiles: {
      title: string;
      description: string;
    };
    keyboardShortcuts: {
      title: string;
      description: string;
    };
    nativeDesign: {
      title: string;
      description: string;
    };
    magicBoost: {
      title: string;
      description: string;
    };
    localApi: {
      title: string;
      description: string;
    };
  };
  useCases: {
    title: string;
    designerTitle: string;
    designer: string;
    producerTitle: string;
    producer: string;
    developerTitle: string;
    developer: string;
    remoteTitle: string;
    remote: string;
  };
  devices: {
    headphones: string;
    speaker: string;
    display: string;
    bluetooth: string;
    airpods: string;
  };
  comparison: {
    title: string;
    subtitle: string;
    maca: string;
    others: string;
    features: {
      easySetup: string;
      noDrivers: string;
      oneTimePurchase: string;
      profiles: string;
      nativeUI: string;
      lightweight: string;
    };
  };
  whyNotOthers: {
    title: string;
    subtitle: string;
    macaPrice: string;
    competitors: {
      soundSource: {
        name: string;
        price: string;
        issues: string[];
      };
      audioHijack: {
        name: string;
        price: string;
        issues: string[];
      };
    };
  };
  privacy: {
    title: string;
    subtitle: string;
    guaranteeTitle: string;
    guaranteeDescription: string;
    features: {
      noData: {
        title: string;
        description: string;
      };
      localProcessing: {
        title: string;
        description: string;
      };
      noCloud: {
        title: string;
        description: string;
      };
      noTracking: {
        title: string;
        description: string;
      };
    };
    guarantee: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    comingSoon: string;
    joinUsers: string;
  };
  pricing: {
    title: string;
    subtitle: string;
    free: {
      title: string;
      price: string;
      features: string[];
      cta: string;
    };
    pro: {
      title: string;
      price: string;
      features: string[];
      cta: string;
      badge: string;
    };
  };
  benefits: {
    noSubscriptions: string;
    noTracking: string;
    noAds: string;
    nativeSupport: string;
  };
  finalCta: {
    title: string;
    subtitle: string;
    cta: string;
  };
  footer: {
    product: string;
    legal: string;
    imprint: string;
    privacy: string;
    terms: string;
    support: string;
    tagline: string;
    copyright: string;
  };
  imprint: {
    title: string;
    owner: string;
    address: string;
    contact: string;
    responsible: string;
    disclaimer: string;
  };
  notFound: {
    title: string;
    description: string;
    backHome: string;
    goBack: string;
    helpText: string;
    faqLink: string;
  };
}

export const translations: Record<Language, Translation> = {
  en: {
    name: 'English',
    headerBadge: '⚡ Your Audio. Perfectly Controlled. Instantly.',
    hero: {
      badge: '⚡ Your Audio. Perfectly Controlled. Instantly.',
      title: 'Finally, You Have Total Audio Control',
      subtitle: 'Control every app\'s volume independently. Profile switching in seconds—lightning-fast for every situation.',
      cta: 'Get MACA Free',
      secondaryCta: 'Watch It Work',
    },
    problem: {
      title: 'Sound Familiar?',
      items: [
        'Spotify drowns out your Zoom calls',
        'Game sounds blast while you\'re streaming',
        'YouTube ads wake up the whole house',
        'No easy way to control app volumes separately',
      ],
    },
    solution: {
      title: 'MACA Solves This in One Click',
      subtitle: 'Individual volume control for every app. Right from your menu bar. Native, fast, and beautifully simple.',
    },
    features: {
      title: 'Why MACA Wins',
      perAppVolume: {
        title: 'Per-App Volume Sliders',
        description: 'Instant control over every app. Music at 30%, calls at 100%, browser at 50%. Set it once, forget it forever.',
      },
      quickMute: {
        title: 'One-Click Mute',
        description: 'Kill the sound of any app instantly without touching its volume. Perfect for interruptions, ads, or unexpected calls.',
      },
      focusMode: {
        title: 'Focus Mode',
        description: 'Pre-configured for 100+ communication apps (Teams, Discord, Zoom, FaceTime, and more). Mute all other apps with one click or keyboard shortcut. No distracting music during meetings.',
      },
      audioProfiles: {
        title: 'Smart Profiles',
        description: 'Work. Gaming. Music Production. Create custom audio setups and switch between them instantly. Your perfect sound, always one click away.',
      },
      keyboardShortcuts: {
        title: 'Keyboard Power',
        description: 'Control everything without lifting your hands. Custom shortcuts for muting, volume, and profile switching. Maximum efficiency.',
      },
      nativeDesign: {
        title: 'Native macOS Design',
        description: 'Built exclusively for Mac. No ugly interfaces, no system bloat, no kernel extensions. Just clean, fast, native macOS perfection.',
      },
      magicBoost: {
        title: 'Magic Boost',
        description: 'Boost quiet audio up to +12dB without distortion. No more straining to hear quiet videos or podcasts.',
      },
      localApi: {
        title: 'Local API',
        description: 'Control every audio app programmatically via a local REST API. Automate volume, mute, and routing — perfect for Stream Deck, smart home, and custom integrations.',
      },
    },
    useCases: {
      title: 'Who Uses MACA?',
      designerTitle: 'Designers & Creators',
      designer: 'Spotify playing, Adobe open, video calls on standby. Perfect audio levels without the hassle.',
      producerTitle: 'Producers & Musicians',
      producer: 'DAW at 80%, samples at 70%, references at 60%. Full control for mixing and producing without distraction.',
      developerTitle: 'Developers & Coders',
      developer: 'Music for focus, Stack Overflow open, notifications silenced. Code with the perfect soundtrack.',
      remoteTitle: 'Remote Workers',
      remote: 'Zoom at 100%, music at 30%, notifications at 0%. Meetings without interruptions.',
    },
    devices: {
      headphones: 'Headphones',
      speaker: 'Speaker',
      display: 'Display',
      bluetooth: 'Bluetooth',
      airpods: 'AirPods',
    },
    comparison: {
      title: 'MACA vs. Other Audio Tools',
      subtitle: 'See why thousands switched to MACA',
      maca: 'MACA',
      others: 'Other Tools',
      features: {
        easySetup: 'Works instantly',
        noDrivers: 'No drivers/extensions',
        oneTimePurchase: 'Pay once, own forever',
        profiles: 'Audio profiles included',
        nativeUI: 'Native macOS design',
        lightweight: 'Ultra lightweight',
        multiRoom: 'Multi-room audio routing',
      },
    },
    whyNotOthers: {
      title: 'Why Not Other Tools?',
      subtitle: 'Compare MACA with popular alternatives',
      macaPrice: 'In-App Purchase',
      competitors: {
        soundSource: {
          name: 'SoundSource',
          price: '$39',
          issues: ['Expensive subscription model', 'Complex interface', 'Requires system audio driver'],
        },
        audioHijack: {
          name: 'Audio Hijack',
          price: '$64+',
          issues: ['Very expensive', 'Overwhelming features', 'Steep learning curve'],
        },
      },
    },
    privacy: {
      title: 'Privacy First',
      subtitle: 'Your data is safe with MACA',
      guaranteeTitle: 'Privacy Guarantee',
      guaranteeDescription: 'We are committed to protecting your privacy and data security.',
      features: {
        noData: {
          title: 'No Data Sent to Cloud',
          description: 'No data is sent to the cloud',
        },
        localProcessing: {
          title: 'Local Processing',
          description: 'All processing is done locally on your Mac',
        },
        noCloud: {
          title: 'No Cloud Storage or Syncing',
          description: 'No cloud storage or syncing',
        },
        noTracking: {
          title: 'Zero Tracking',
          description: 'Zero tracking—your privacy matters',
        },
      },
      guarantee: 'We guarantee your privacy and data security.',
    },
    testimonials: {
      title: 'What Our Users Say',
      subtitle: 'Hear from satisfied customers',
      comingSoon: 'Coming Soon',
      joinUsers: 'Join thousands of Mac users who love MACA',
    },
    pricing: {
      title: 'Pricing',
      subtitle: 'Choose the plan that\'s right for you',
      free: {
        title: 'Free',
        price: '$0',
        features: [
          'Control up to 3 apps',
          'Per-app volume control',
          'Per-app mute',
          'Per-app audio routing',
          'Master volume control',
          '10-band EQ with presets',
          'Keyboard shortcuts'
        ],
        cta: 'Download Free',
      },
      pro: {
        title: 'Pro',
        price: 'In-App Purchase',
        features: [
          'Unlimited apps',
          'All Free features',
          'Unlimited audio profiles',
          'Full parametric EQ control',
          'Audio Normalizer',
          'Unlimited custom EQ presets',
          'One-time payment • No subscription'
        ],
        cta: 'Download on App Store',
        badge: 'Most Popular',
      },
    },
    benefits: {
      noSubscriptions: 'No Subscriptions',
      noTracking: 'No Tracking',
      noAds: 'No Ads',
      nativeSupport: 'Native Support',
    },
    finalCta: {
      title: 'Get Started Today',
      subtitle: 'Join thousands of Mac users who love MACA',
      cta: 'Download on the App Store',
    },
    footer: {
      product: 'Product',
      legal: 'Legal',
      imprint: 'Imprint',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      support: 'Support',
      tagline: 'Professional audio control for everyone',
      copyright: '© 2026 AMX Mediensystem. All rights reserved.',
    },
    imprint: {
      title: 'Imprint',
      owner: 'Owner',
      address: 'Address',
      contact: 'Contact',
      responsible: 'Responsible for content',
      disclaimer: 'Disclaimer: All product names, logos, and brands are property of their respective owners.',
    },
    notFound: {
      title: 'Page Not Found',
      description: 'Oops! The page you\'re looking for doesn\'t exist or has been moved.',
      backHome: 'Back to Home',
      goBack: 'Go Back',
      helpText: 'Need help?',
      faqLink: 'Visit our FAQ',
    },
  },
  de: {
    name: 'Deutsch',
    headerBadge: '⚡ Dein Audio. Perfekt kontrolliert. Sofort.',
    hero: {
      badge: '⚡ Dein Audio. Perfekt kontrolliert. Sofort.',
      title: 'Endlich volle Audio-Kontrolle',
      subtitle: 'Jede App-Lautstärke unabhängig steuern. In Sekunden kontrolliert und per Profil-Switch blitzschnell für jede Gelegenheit umgeschaltet.',
      cta: 'MACA kostenlos erhalten',
      secondaryCta: 'Sieh es in Aktion',
    },
    problem: {
      title: 'Kennst du das?',
      items: [
        'Spotify übertönt deine Zoom-Calls',
        'Game-Sounds knallen während du streamst',
        'YouTube-Werbung weckt das ganze Haus',
        'Keine einfache Möglichkeit, App-Lautstärken einzeln zu regeln',
      ],
    },
    solution: {
      title: 'MACA löst das mit einem Klick',
      subtitle: 'Individuelle Lautstärkeregelung für jede App. Direkt aus der Menüleiste. Native, schnell und wunderschön einfach.',
    },
    features: {
      title: 'Warum MACA gewinnt',
      perAppVolume: {
        title: 'Pro-App-Lautstärkeregler',
        description: 'Sofortige Kontrolle über jede App. Musik auf 30%, Anrufe auf 100%, Browser auf 50%. Einmal einstellen, für immer vergessen.',
      },
      quickMute: {
        title: 'Ein-Klick-Stummschaltung',
        description: 'Schalte den Ton jeder App sofort stumm, ohne die Lautstärke zu ändern. Perfekt für Unterbrechungen, Werbung oder unerwartete Anrufe.',
      },
      focusMode: {
        title: 'Fokus-Modus',
        description: 'Vorkonfiguriert für über 100 Kommunikations-Apps (Teams, Discord, Zoom, FaceTime & mehr). Alle anderen Apps mit einem Klick oder Tastenkürzel stummschalten. Keine ablenkende Musik während Meetings.',
      },
      audioProfiles: {
        title: 'Smarte Profile',
        description: 'Work. Gaming. Musikproduktion. Erstelle eigene Audio-Setups und wechsle sofort zwischen ihnen. Dein perfekter Sound, immer nur einen Klick entfernt.',
      },
      keyboardShortcuts: {
        title: 'Tastatur-Power',
        description: 'Steuere alles, ohne die Hände zu heben. Eigene Shortcuts für Stummschaltung, Lautstärke und Profilwechsel. Maximale Effizienz.',
      },
      nativeDesign: {
        title: 'Echtes macOS Native',
        description: 'Exklusiv für Mac entwickelt. Keine hässlichen Interfaces, kein System-Bloat, keine Kernel-Extensions. Nur saubere, schnelle, native macOS-Perfektion.',
      },
      magicBoost: {
        title: 'Magic Boost',
        description: 'Verstärke leise Audios bis zu +12dB ohne Verzerrung. Nie wieder anstrengen, um leise Videos oder Podcasts zu hören.',
      },
      localApi: {
        title: 'Lokale API',
        description: 'Steuere jede Audio-App programmatisch über eine lokale REST-API. Automatisiere Lautstärke, Stummschaltung und Routing — ideal für Stream Deck, Smart Home und eigene Integrationen.',
      },
    },
    useCases: {
      title: 'Perfekt für deinen Workflow',
      designerTitle: 'Für Designer',
      designer: 'Perfekt für Designer, die Musik während Video-Meetings brauchen',
      producerTitle: 'Für Musik-Produzenten',
      producer: 'Unverzichtbar für Produzenten mit mehreren Audio-Quellen',
      developerTitle: 'Für Entwickler',
      developer: 'Ideal für Developer mit Musik, Docs und Standups gleichzeitig',
      remoteTitle: 'Für Remote-Worker',
      remote: 'Ein Muss für Remote-Worker, die Calls und Content jonglieren',
    },
    devices: {
      headphones: 'Kopfhörer',
      speaker: 'Lautsprecher',
      display: 'Anzeige',
      bluetooth: 'Bluetooth',
      airpods: 'AirPods',
    },
    comparison: {
      title: 'MACA vs. andere Audio-Tools',
      subtitle: 'Sieh, warum Tausende zu MACA gewechselt sind',
      maca: 'MACA',
      others: 'Andere Tools',
      features: {
        easySetup: 'Funktioniert sofort',
        noDrivers: 'Keine Treiber/Extensions',
        oneTimePurchase: 'Einmal zahlen, für immer nutzen',
        profiles: 'Audio-Profile inklusive',
        nativeUI: 'Natives macOS-Design',
        lightweight: 'Ultra leichtgewichtig',
        multiRoom: 'Mehrraum-Audio-Routing',
      },
    },
    whyNotOthers: {
      title: 'Warum nicht andere Tools?',
      subtitle: 'MACA mit beliebten Alternativen vergleichen',
      macaPrice: 'In-App-Kauf',
      competitors: {
        soundSource: {
          name: 'SoundSource',
          price: '$39',
          issues: ['Expensive subscription model', 'Complex interface', 'Requires system audio driver'],
        },
        audioHijack: {
          name: 'Audio Hijack',
          price: '$64+',
          issues: ['Very expensive', 'Overwhelming features', 'Steep learning curve'],
        },
      },
    },
    privacy: {
      title: 'Datenschutz zuerst',
      subtitle: 'Deine Daten sind mit MACA sicher',
      guaranteeTitle: 'Datenschutzgarantie',
      guaranteeDescription: 'Wir sind verpflichtet, deine Privatsphäre und Datensicherheit zu schützen.',
      features: {
        noData: {
          title: 'Keine Daten in die Cloud gesendet',
          description: 'Keine Daten werden in die Cloud gesendet',
        },
        localProcessing: {
          title: 'Lokale Verarbeitung',
          description: 'Alle Verarbeitungen werden lokal auf deinem Mac durchgeführt',
        },
        noCloud: {
          title: 'Kein Cloud-Speicher oder Synchronisierung',
          description: 'Kein Cloud-Speicher oder Synchronisierung',
        },
        noTracking: {
          title: 'Null Tracking',
          description: 'Null Tracking—deine Privatsphäre zählt',
        },
      },
      guarantee: 'Wir garantieren deine Privatsphäre und Datensicherheit.',
    },
    testimonials: {
      title: 'Was unsere Nutzer sagen',
      subtitle: 'Höre von zufriedenen Kunden',
      comingSoon: 'Bald verfügbar',
      joinUsers: 'Schließe dich Tausenden Mac-Nutzern an, die MACA lieben',
    },
    pricing: {
      title: 'Preise',
      subtitle: 'Wähle den Plan, der für dich passt',
      free: {
        title: 'Kostenlos',
        price: '$0',
        features: [
          'Bis zu 3 Apps steuern',
          'Pro-App-Lautstärkeregelung',
          'Pro-App-Stummschaltung',
          'Pro-App-Audio-Routing',
          'Master-Lautstärkeregelung',
          '10-Band-EQ mit Voreinstellungen',
          'Tastenkürzel'
        ],
        cta: 'Kostenlos laden',
      },
      pro: {
        title: 'Pro',
        price: 'In-App-Kauf',
        features: [
          'Unbegrenzte Apps',
          'Alle Funktionen von Kostenlos',
          'Unbegrenzte Audio-Profile',
          'Vollständige parametrische EQ-Kontrolle',
          'Audio-Normalizer',
          'Unbegrenzte benutzerdefinierte EQ-Voreinstellungen',
          'Einmalzahlung • Kein Abo'
        ],
        cta: 'Im App Store laden',
        badge: 'Am beliebtesten',
      },
    },
    benefits: {
      noSubscriptions: 'Keine Abos',
      noTracking: 'Kein Tracking',
      noAds: 'Keine Werbung',
      nativeSupport: 'Natives Support',
    },
    finalCta: {
      title: 'Jetzt starten',
      subtitle: 'Schließe dich Tausenden Mac-Nutzern an, die MACA lieben',
      cta: 'Im App Store laden',
    },
    footer: {
      product: 'Produkt',
      legal: 'Rechtliches',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      terms: 'AGB',
      support: 'Support',
      tagline: 'Professionelle Audio-Steuerung für alle',
      copyright: '© 2026 AMX Mediensystem. Alle Rechte vorbehalten.',
    },
    imprint: {
      title: 'Impressum',
      owner: 'Inhaber',
      address: 'Adresse',
      contact: 'Kontakt',
      responsible: 'Verantwortlich für den Inhalt',
      disclaimer: 'Haftungsausschluss: Alle Produktnamen, Logos und Marken sind Eigentum ihrer jeweiligen Inhaber.',
    },
    notFound: {
      title: 'Seite nicht gefunden',
      description: 'Hoppla! Die gesuchte Seite existiert nicht oder wurde verschoben.',
      backHome: 'Zurück zur Startseite',
      goBack: 'Zurück',
      helpText: 'Brauchst du Hilfe?',
      faqLink: 'Besuche unsere FAQ',
    },
  },
  es: {
    name: 'Español',
    headerBadge: '⚡ Tu Audio. Perfectamente Controlado. Al Instante.',
    hero: {
      badge: '⚡ Tu Audio. Perfectamente Controlado. Al Instante.',
      title: 'Finalmente, tienes control total del audio',
      subtitle: 'Controla cada app de forma independiente. Cambia de perfil en segundos. Control instantáneo para cada situación.',
      cta: 'Obtener MACA Gratis',
      secondaryCta: 'Ver en Acción',
    },
    problem: {
      title: '¿Te Suena Familiar?',
      items: [
        'Spotify ahoga tus llamadas de Zoom',
        'Los sonidos del juego explotan mientras haces streaming',
        'Los anuncios de YouTube despiertan a toda la casa',
        'No hay manera fácil de controlar volúmenes de apps por separado',
      ],
    },
    solution: {
      title: 'MACA Lo Resuelve en Un Clic',
      subtitle: 'Control de volumen individual para cada app. Directo desde tu barra de menú. Nativo, rápido y hermosamente simple.',
    },
    features: {
      title: 'Por Qué MACA Gana',
      perAppVolume: {
        title: 'Controles de Volumen por App',
        description: 'Control instantáneo sobre cada app. Música al 30%, llamadas al 100%, navegador al 50%. Configúralo una vez, olvídalo para siempre.',
      },
      quickMute: {
        title: 'Silenciar con Un Clic',
        description: 'Silencia cualquier app al instante sin tocar su volumen. Perfecto para interrupciones, anuncios o llamadas inesperadas.',
      },
      focusMode: {
        title: 'Modo de Enfoque',
        description: 'Pre-configurado para más de 100 aplicaciones de comunicación (Teams, Discord, Zoom, FaceTime y más). Silencia todas las demás aplicaciones con un clic o atajo de teclado. Sin música que distraiga durante las reuniones.',
      },
      audioProfiles: {
        title: 'Perfiles Inteligentes',
        description: 'Trabajo. Gaming. Producción Musical. Crea configuraciones de audio personalizadas y cambia entre ellas al instante. Tu sonido perfecto, siempre a un clic.',
      },
      keyboardShortcuts: {
        title: 'Poder del Teclado',
        description: 'Controla todo sin levantar las manos. Atajos personalizados para silenciar, volumen y cambio de perfil. Máxima eficiencia.',
      },
      nativeDesign: {
        title: 'Verdadero macOS Nativo',
        description: 'Construido exclusivamente para Mac. Sin interfaces feas, sin hinchazón del sistema, sin extensiones del kernel. Solo perfección macOS nativa, limpia y rápida.',
      },
      magicBoost: {
        title: 'Magic Boost',
        description: 'Amplifica audio silencioso hasta +12dB sin distorsión. No más esfuerzo para escuchar videos o podcasts silenciosos.',
      },
      localApi: {
        title: 'API Local',
        description: 'Controla cada app de audio programáticamente mediante una API REST local. Automatiza volumen, silencio y enrutamiento — perfecto para Stream Deck, hogar inteligente e integraciones personalizadas.',
      },
    },
    useCases: {
      title: '¿Quién Usa MACA?',
      designerTitle: 'Diseñadores y Creadores',
      designer: 'Spotify sonando, Adobe abierto, videollamadas en espera. Niveles de audio perfectos sin complicaciones.',
      producerTitle: 'Productores y Músicos',
      producer: 'DAW al 80%, samples al 70%, referencias al 60%. Control total para mezclar y producir sin distracciones.',
      developerTitle: 'Desarrolladores y Programadores',
      developer: 'Música para concentrarse, Stack Overflow abierto, notificaciones silenciadas. Codifica con la banda sonora perfecta.',
      remoteTitle: 'Trabajadores Remotos',
      remote: 'Zoom al 100%, música al 30%, notificaciones al 0%. Reuniones sin interrupciones.',
    },
    devices: {
      headphones: 'Auriculares',
      speaker: 'Altavoz',
      display: 'Pantalla',
      bluetooth: 'Bluetooth',
      airpods: 'AirPods',
    },
    comparison: {
      title: 'MACA vs. Otras Herramientas de Audio',
      subtitle: 'Mira por qué miles cambiaron a MACA',
      maca: 'MACA',
      others: 'Otras Herramientas',
      features: {
        easySetup: 'Funciona al instante',
        noDrivers: 'Sin drivers/extensiones',
        oneTimePurchase: 'Paga una vez, tuyo para siempre',
        profiles: 'Perfiles de audio incluidos',
        nativeUI: 'Diseño macOS nativo',
        lightweight: 'Ultra ligero',
        multiRoom: 'Enrutamiento de audio multiroom',
      },
    },
    whyNotOthers: {
      title: '¿Por Qué No Otras Herramientas?',
      subtitle: 'Compara MACA con alternativas populares',
      macaPrice: 'Compra in-app',
      competitors: {
        soundSource: {
          name: 'SoundSource',
          price: '$39',
          issues: ['Modelo de suscripción caro', 'Interfaz compleja', 'Requiere controlador de audio del sistema'],
        },
        audioHijack: {
          name: 'Audio Hijack',
          price: '$64+',
          issues: ['Muy caro', 'Funciones abrumadoras', 'Curva de aprendizaje pronunciada'],
        },
      },
    },
    privacy: {
      title: 'Privacidad Primero',
      subtitle: 'Tus datos están seguros con MACA',
      guaranteeTitle: 'Garantía de Privacidad',
      guaranteeDescription: 'Estamos comprometidos a proteger tu privacidad y seguridad de datos.',
      features: {
        noData: {
          title: 'Ningún dato enviado a la nube',
          description: 'Ningún dato se envía a la nube',
        },
        localProcessing: {
          title: 'Procesamiento Local',
          description: 'Todo el procesamiento se realiza localmente en tu Mac',
        },
        noCloud: {
          title: 'Sin almacenamiento o sincronización en la nube',
          description: 'Sin almacenamiento o sincronización en la nube',
        },
        noTracking: {
          title: 'Cero Rastreo',
          description: 'Cero rastreo—tu privacidad importa',
        },
      },
      guarantee: 'Garantizamos tu privacidad y seguridad de datos.',
    },
    testimonials: {
      title: 'Lo Que Dicen Nuestros Usuarios',
      subtitle: 'Escucha testimonios de clientes satisfechos',
      comingSoon: 'Próximamente',
      joinUsers: 'Únete a miles de usuarios de Mac que aman MACA',
    },
    pricing: {
      title: 'Precios',
      subtitle: 'Elige el plan adecuado para ti',
      free: {
        title: 'Gratis',
        price: '$0',
        features: [
          'Controlar hasta 3 apps',
          'Control de volumen por app',
          'Silenciar por app',
          'Enrutamiento de audio por app',
          'Control de volumen maestro',
          'EQ de 10 bandas con presets',
          'Atajos de teclado'
        ],
        cta: 'Descargar Gratis',
      },
      pro: {
        title: 'Pro',
        price: 'Compra in-app',
        features: [
          'Apps ilimitadas',
          'Todas las funciones gratuitas',
          'Perfiles de audio ilimitados',
          'Control EQ paramétrico completo',
          'Normalizador de audio',
          'Presets de EQ personalizados ilimitados',
          'Pago único • Sin suscripción'
        ],
        cta: 'Descargar en App Store',
        badge: 'Más Popular',
      },
    },
    benefits: {
      noSubscriptions: 'Sin Suscripciones',
      noTracking: 'Sin Rastreo',
      noAds: 'Sin Anuncios',
      nativeSupport: 'Soporte Nativo',
    },
    finalCta: {
      title: 'Comienza Hoy',
      subtitle: 'Únete a miles de usuarios de Mac que aman MACA',
      cta: 'Descargar en la App Store',
    },
    footer: {
      product: 'Producto',
      legal: 'Legal',
      imprint: 'Aviso Legal',
      privacy: 'Política de Privacidad',
      terms: 'Términos de Servicio',
      support: 'Soporte',
      tagline: 'Control de audio profesional para todos',
      copyright: '© 2026 AMX Mediensystem. Todos los derechos reservados.',
    },
    imprint: {
      title: 'Aviso Legal',
      owner: 'Propietario',
      address: 'Dirección',
      contact: 'Contacto',
      responsible: 'Responsable del contenido',
      disclaimer: 'Aviso: Todos los nombres de productos, logotipos y marcas son propiedad de sus respectivos dueños.',
    },
    notFound: {
      title: 'Página no encontrada',
      description: '¡Vaya! La página que buscas no existe o fue movida.',
      backHome: 'Volver al inicio',
      goBack: 'Volver',
      helpText: '¿Necesitas ayuda?',
      faqLink: 'Visita nuestras FAQ',
    },
  },
  fr: {
    name: 'Français',
    headerBadge: '⚡ Votre Audio. Contrôlé Parfaitement. Instantanément.',
    hero: {
      badge: '⚡ Votre Audio. Contrôlé Parfaitement. Instantanément.',
      title: 'Enfin, vous maîtrisez totalement votre audio',
      subtitle: 'Contrôlez chaque app indépendamment. Changez de profil en quelques secondes. Contrôle instantané pour toutes les situations.',
      cta: 'Obtenir MACA Gratuitement',
      secondaryCta: 'Voir en Action',
    },
    problem: {
      title: 'Ça Vous Dit Quelque Chose ?',
      items: [
        'Spotify couvre vos appels Zoom',
        'Les sons de jeu explosent pendant que vous streamez',
        'Les pubs YouTube réveillent toute la maison',
        'Aucun moyen facile de contrôler les volumes des apps séparément',
      ],
    },
    solution: {
      title: 'MACA Résout Ça en Un Clic',
      subtitle: 'Contrôle de volume individuel pour chaque app. Directement depuis votre barre de menu. Natif, rapide et magnifiquement simple.',
    },
    features: {
      title: 'Pourquoi MACA Gagne',
      perAppVolume: {
        title: 'Curseurs de Volume par App',
        description: 'Contrôle instantané sur chaque app. Musique à 30%, appels à 100%, navigateur à 50%. Réglez une fois, oubliez pour toujours.',
      },
      quickMute: {
        title: 'Mise en Sourdine en Un Clic',
        description: 'Coupez le son de n\'importe quelle app instantanément sans toucher son volume. Parfait pour les interruptions, pubs ou appels inattendus.',
      },
      focusMode: {
        title: 'Mode Focus',
        description: 'Préconfiguré pour plus de 100 applications de communication (Teams, Discord, Zoom, FaceTime et plus). Coupez toutes les autres apps en un clic ou raccourci clavier. Pas de musique distrayante pendant les réunions.',
      },
      audioProfiles: {
        title: 'Profils Intelligents',
        description: 'Travail. Gaming. Production Musicale. Créez des configurations audio personnalisées et basculez entre elles instantanément. Votre son parfait, toujours à un clic.',
      },
      keyboardShortcuts: {
        title: 'Puissance du Clavier',
        description: 'Contrôlez tout sans lever les mains. Raccourcis personnalisés pour la sourdine, le volume et le changement de profils. Efficacité maximale.',
      },
      nativeDesign: {
        title: 'Vrai macOS Natif',
        description: 'Construit exclusivement pour Mac. Pas d\'interfaces laides, pas de bloat système, pas d\'extensions kernel. Juste la perfection macOS native, propre et rapide.',
      },
      magicBoost: {
        title: 'Magic Boost',
        description: 'Amplifiez l\'audio faible jusqu\'à +12dB sans distorsion. Plus besoin de forcer pour entendre les vidéos ou podcasts silencieux.',
      },
      localApi: {
        title: 'API Locale',
        description: 'Contrôlez chaque application audio par programmation via une API REST locale. Automatisez le volume, la sourdine et le routage — parfait pour Stream Deck, maison connectée et intégrations personnalisées.',
      },
    },
    useCases: {
      title: 'Conçu pour Votre Flux de Travail',
      designer: 'Parfait pour les designers qui ont besoin de musique pendant les réunions vidéo',
      producer: 'Essentiel pour les producteurs mixant plusieurs sources audio',
      developer: 'Idéal pour les développeurs avec musique, docs et standups en cours',
      remote: 'Indispensable pour les télétravailleurs jonglant entre appels et contenu',
    },
    devices: {
      headphones: 'Casque',
      speaker: 'Haut-parleur',
      display: 'Écran',
      bluetooth: 'Bluetooth',
      airpods: 'AirPods',
    },
    comparison: {
      title: 'MACA vs. Autres Outils Audio',
      subtitle: 'Voyez pourquoi des milliers sont passés à MACA',
      maca: 'MACA',
      others: 'Autres Outils',
      features: {
        easySetup: 'Fonctionne instantanément',
        noDrivers: 'Pas de drivers/extensions',
        oneTimePurchase: 'Payez une fois, possédez pour toujours',
        profiles: 'Profils audio inclus',
        nativeUI: 'Design macOS natif',
        lightweight: 'Ultra léger',
        multiRoom: 'Routage audio multi-pièces',
      },
    },
    whyNotOthers: {
      title: 'Pourquoi pas d\'autres outils ?',
      subtitle: 'Comparez MACA avec des alternatives populaires',
      macaPrice: 'Achat in-app',
      competitors: {
        soundSource: {
          name: 'SoundSource',
          price: '$39',
          issues: ['Expensive subscription model', 'Complex interface', 'Requires system audio driver'],
        },
        audioHijack: {
          name: 'Audio Hijack',
          price: '$64+',
          issues: ['Very expensive', 'Overwhelming features', 'Steep learning curve'],
        },
      },
    },
    privacy: {
      title: 'Confidentialité en premier',
      subtitle: 'Vos données sont en sécurité avec MACA',
      guaranteeTitle: 'Garantie de Confidentialité',
      guaranteeDescription: 'Nous sommes engagés à protéger votre confidentialité et la sécurité de vos données.',
      features: {
        noData: {
          title: 'Aucune donnée n\'est envoyée dans le cloud',
          description: 'Aucune donnée n\'est envoyée dans le cloud',
        },
        localProcessing: {
          title: 'Tous les traitements sont effectués localement sur votre Mac',
          description: 'Tous les traitements sont effectués localement sur votre Mac',
        },
        noCloud: {
          title: 'Aucun stockage ou synchronisation dans le cloud',
          description: 'Aucun stockage ou synchronisation dans le cloud',
        },
        noTracking: {
          title: 'Zéro suivi',
          description: 'Zéro suivi—votre vie privée compte',
        },
      },
      guarantee: 'Nous garantissons votre confidentialité et la sécurité de vos données.',
    },
    testimonials: {
      title: 'Ce que nos utilisateurs disent',
      subtitle: 'Écoutez les témoignages de clients satisfaits',
      comingSoon: 'Bientôt disponible',
      joinUsers: 'Rejoignez des milliers d\'utilisateurs Mac qui adorent MACA',
    },
    pricing: {
      title: 'Tarifs',
      subtitle: 'Choisissez le plan qui vous convient',
      free: {
        title: 'Gratuit',
        price: '$0',
        features: [
          'Contrôle jusqu\'à 3 applications',
          'Contrôle du volume par application',
          'Mise en sourdine par application',
          'Routage audio par application',
          'Contrôle du volume principal',
          'EQ à 10 bandes avec préréglages',
          'Raccourcis clavier'
        ],
        cta: 'Télécharger Gratuitement',
      },
      pro: {
        title: 'Pro',
        price: 'Achat intégré',
        features: [
          'Applications illimitées',
          'Toutes les fonctionnalités Gratuites',
          'Profils audio illimités',
          'Contrôle EQ paramétrique complet',
          'Normaliseur Audio',
          'Préréglages EQ personnalisés illimités',
          'Paiement unique • Pas d\'abonnement'
        ],
        cta: 'Télécharger sur App Store',
        badge: 'Le plus populaire',
      },
    },
    benefits: {
      noSubscriptions: 'Pas de Souscriptions',
      noTracking: 'Pas de Suivi',
      noAds: 'Pas de Publicités',
      nativeSupport: 'Support Natif',
    },
    finalCta: {
      title: 'Commencez Aujourd\'hui',
      subtitle: 'Rejoignez des milliers d\'utilisateurs Mac qui adorent MACA',
      cta: 'Télécharger sur l\'App Store',
    },
    footer: {
      product: 'Produit',
      legal: 'Légal',
      imprint: 'Mentions Légales',
      privacy: 'Politique de Confidentialité',
      terms: 'Conditions d\'Utilisation',
      support: 'Support',
      tagline: 'Contrôle audio professionnel pour tous',
      copyright: '© 2026 AMX Mediensystem. Tous droits réservés.',
    },
    imprint: {
      title: 'Mentions Légales',
      owner: 'Propriétaire',
      address: 'Adresse',
      contact: 'Contact',
      responsible: 'Responsable du contenu',
      disclaimer: 'Avertissement : Tous les noms de produits, logos et marques sont la propriété de leurs détenteurs respectifs.',
    },
    notFound: {
      title: 'Page non trouvée',
      description: 'Oups ! La page que vous recherchez n\'existe pas ou a été déplacée.',
      backHome: 'Retour à l\'accueil',
      goBack: 'Retour',
      helpText: 'Besoin d\'aide ?',
      faqLink: 'Consultez notre FAQ',
    },
  },
  it: {
    name: 'Italiano',
    headerBadge: '⚡ Il Tuo Audio. Perfettamente Controllato. All\'Istante.',
    hero: {
      badge: '⚡ Il Tuo Audio. Perfettamente Controllato. All\'Istante.',
      title: 'Finalmente, hai il pieno controllo dell\'audio',
      subtitle: 'Controlla ogni app in modo indipendente. Cambia profilo in pochi secondi. Controllo istantaneo per ogni situazione.',
      cta: 'Ottieni MACA Gratis',
      secondaryCta: 'Vedi in Azione',
    },
    problem: {
      title: 'Ti Suona Familiare?',
      items: [
        'Spotify copre le tue chiamate Zoom',
        'I suoni del gioco esplodono mentre stai streaming',
        'Le pubblicità di YouTube svegliano tutta la casa',
        'Nessun modo facile di controllare i volumi delle app separatamente',
      ],
    },
    solution: {
      title: 'MACA Risolve Questo in Un Clic',
      subtitle: 'Controllo del volume individuale per ogni app. Direttamente dalla barra dei menu. Nativo, veloce e splendidamente semplice.',
    },
    features: {
      title: 'Perché MACA Vince',
      perAppVolume: {
        title: 'Cursori Volume per App',
        description: 'Controllo istantaneo su ogni app. Musica al 30%, chiamate al 100%, browser al 50%. Imposta una volta, dimentica per sempre.',
      },
      quickMute: {
        title: 'Silenziamento con Un Clic',
        description: 'Silenzia qualsiasi app all\'istante senza toccare il suo volume. Perfetto per interruzioni, pubblicità o chiamate inaspettate.',
      },
      focusMode: {
        title: 'Modalità Focus',
        description: 'Preconfigurato per oltre 100 app di comunicazione (Teams, Discord, Zoom, FaceTime e altro). Silenzia tutte le altre app con un clic o scorciatoia da tastiera. Nessuna musica che distrae durante le riunioni.',
      },
      audioProfiles: {
        title: 'Smart Profiles',
        description: 'Work. Gaming. Music Production. Create custom audio setups and switch between them instantly. Your perfect sound, always one click away.',
      },
      keyboardShortcuts: {
        title: 'Keyboard Power',
        description: 'Controla tutto senza levare le mani. Scorciatoie personalizzate per silenziamento, volume e cambio profili. Massima efficienza.',
      },
      nativeDesign: {
        title: 'Vero macOS Nativo',
        description: 'Costruito esclusivamente per Mac. Niente interfacce brutte, niente bloat del sistema, niente estensioni kernel. Solo perfezione macOS nativa, pulita e veloce.',
      },
      magicBoost: {
        title: 'Magic Boost',
        description: 'Amplifica l\'audio silenzioso fino a +12dB senza distorsione. Mai più sforzarsi per sentire video o podcast bassi.',
      },
      localApi: {
        title: 'API Locale',
        description: 'Controlla ogni app audio in modo programmatico tramite un\'API REST locale. Automatizza volume, silenziamento e routing — perfetto per Stream Deck, domotica e integrazioni personalizzate.',
      },
    },
    useCases: {
      title: 'Progettato per il Tuo Flusso di Lavoro',
      designer: 'Perfetto per designer che hanno bisogno di musica durante le videochiamate',
      producer: 'Essenziale per produttori che mixano più sorgenti audio',
      developer: 'Ideale per sviluppatori con musica, docs e standup in esecuzione',
      remote: 'Un must per lavoratori remoti che destreggiano chiamate e contenuti',
    },
    devices: {
      headphones: 'Cuffie',
      speaker: 'Altoparlante',
      display: 'Schermo',
      bluetooth: 'Bluetooth',
      airpods: 'AirPods',
    },
    comparison: {
      title: 'MACA vs. Altri Strumenti Audio',
      subtitle: 'Scopri perché migliaia sono passati a MACA',
      maca: 'MACA',
      others: 'Altri Strumenti',
      features: {
        easySetup: 'Funziona all\'istante',
        noDrivers: 'Niente driver/estensioni',
        oneTimePurchase: 'Paga una volta, possiedi per sempre',
        profiles: 'Profili audio inclusi',
        nativeUI: 'Design macOS nativo',
        lightweight: 'Ultra leggero',
        multiRoom: 'Instradamento audio multi-stanza',
      },
    },
    whyNotOthers: {
      title: 'Perché non altri strumenti?',
      subtitle: 'Confronta MACA con alternative popolari',
      macaPrice: 'Acquisto in-app',
      competitors: {
        soundSource: {
          name: 'SoundSource',
          price: '$39',
          issues: ['Expensive subscription model', 'Complex interface', 'Requires system audio driver'],
        },
        audioHijack: {
          name: 'Audio Hijack',
          price: '$64+',
          issues: ['Very expensive', 'Overwhelming features', 'Steep learning curve'],
        },
      },
    },
    privacy: {
      title: 'Privacy prima',
      subtitle: 'Le tue dati sono sicuri con MACA',
      guaranteeTitle: 'Garanzia di Privacy',
      guaranteeDescription: 'Siamo impegnati a proteggere la tua privacy e la sicurezza dei tuoi dati.',
      features: {
        noData: {
          title: 'Nessun dato viene inviato nel cloud',
          description: 'Nessun dato viene inviato nel cloud',
        },
        localProcessing: {
          title: 'Tutto il processing viene eseguito localmente sul tuo Mac',
          description: 'Tutto il processing viene eseguito localmente sul tuo Mac',
        },
        noCloud: {
          title: 'Nessun archiviazione o sincronizzazione nel cloud',
          description: 'Nessun archiviazione o sincronizzazione nel cloud',
        },
        noTracking: {
          title: 'Zero tracking',
          description: 'Zero tracking—la tua privacy conta',
        },
      },
      guarantee: 'Garantiamo la tua privacy e la sicurezza dei tuoi dati.',
    },
    testimonials: {
      title: 'Cosa dicono i nostri utenti',
      subtitle: 'Ascolta i feedback dei clienti soddisfatti',
      comingSoon: 'Prossimamente',
      joinUsers: 'Unisciti a migliaia di utenti Mac che amano MACA',
    },
    pricing: {
      title: 'Prezzi',
      subtitle: 'Scegli il piano che ti conviene',
      free: {
        title: 'Gratuito',
        price: '$0',
        features: [
          'Controllo fino a 3 app',
          'Controllo del volume per app',
          'Silenziamento per app',
          'Routing audio per app',
          'Controllo del volume master',
          'EQ a 10 bande con preset',
          'Scorciatoie da tastiera'
        ],
        cta: 'Scarica Gratis',
      },
      pro: {
        title: 'Pro',
        price: 'Compra in-app',
        features: [
          'App illimitate',
          'Tutte le funzionalità Gratuite',
          'Profili audio illimitati',
          'Controllo EQ parametrico completo',
          'Normalizzatore Audio',
          'Preset EQ personalizzati illimitati',
          'Pagamento unico • Nessun abbonamento'
        ],
        cta: 'Scarica su App Store',
        badge: 'Più Popolare',
      },
    },
    benefits: {
      noSubscriptions: 'Nessun Abbonamento',
      noTracking: 'Nessun Tracciamento',
      noAds: 'Nessun Pubblicità',
      nativeSupport: 'Supporto Nativo',
    },
    finalCta: {
      title: 'Inizia Oggi',
      subtitle: 'Unisciti a migliaia di utenti Mac che amano MACA',
      cta: 'Scarica sull\'App Store',
    },
    footer: {
      product: 'Prodotto',
      legal: 'Legale',
      imprint: 'Informazioni Legali',
      privacy: 'Privacy Policy',
      terms: 'Termini di Servizio',
      support: 'Supporto',
      tagline: 'Controllo audio professionale per tutti',
      copyright: '© 2026 AMX Mediensystem. Tutti i diritti riservati.',
    },
    imprint: {
      title: 'Informazioni Legali',
      owner: 'Proprietario',
      address: 'Indirizzo',
      contact: 'Contatto',
      responsible: 'Responsabile del contenuto',
      disclaimer: 'Disclaimer: Tutti i nomi di prodotti, loghi e marchi sono proprietà dei rispettivi proprietari.',
    },
    notFound: {
      title: 'Pagina non trovata',
      description: 'Oops! La pagina che cerchi non esiste o è stata spostata.',
      backHome: 'Torna alla Home',
      goBack: 'Indietro',
      helpText: 'Hai bisogno di aiuto?',
      faqLink: 'Visita le nostre FAQ',
    },
  },
  ja: {
    name: '日本語',
    headerBadge: '⚡ 即時オーディオコントロール。学習曲線ゼロ。',
    hero: {
      badge: '⚡ 即時オーディオコントロール。学習曲線ゼロ。',
      title: 'ついに、あなたの Mac のオーディオが意味を持つ',
      subtitle: '各アプリの音量を独立してコントロール。メニューバーに1つのアイコン。无需麻烦。3秒实现完美音频平衡，而非30分钟。',
      cta: 'MACAを無料で入手',
      secondaryCta: '動作を確認',
    },
    problem: {
      title: '聞き覚えありませんか？',
      items: [
        'SpotifyがZoom通話をかき消す',
        'ストリーミング中にゲーム音が爆音',
        'YouTubeの広告で家中が起きる',
        'アプリの音量を個別に制御する簡単な方法がない',
      ],
    },
    solution: {
      title: 'MACAがワンクリックで解決',
      subtitle: 'すべてのアプリに個別の音量コントロール。直接からメニューバー。ネイティブで高速、美しくシンプル。',
    },
    features: {
      title: 'MACAが勝つ理由',
      perAppVolume: {
        title: 'アプリごとの音量スライダー',
        description: 'すべてのアプリを即座にコントロール。音楽30%、通話100%、ブラウザ50%。一度設定すれば永遠に忘れられます。',
      },
      quickMute: {
        title: 'ワンクリックミュート',
        description: '音量を変えずに任意のアプリを即座にミュート。中断、広告、予期しない通話に最適。',
      },
      focusMode: {
        title: 'フォーカスモード',
        description: '100以上のコミュニケーションアプリ（Teams、Discord、Zoom、FaceTimeなど）に事前設定。ワンクリックまたはキーボードショートカットで他のすべてのアプリをミュート。会議中に気が散る音楽はありません。',
      },
      audioProfiles: {
        title: 'スマートプロファイル',
        description: '仕事。ゲーム。音楽制作。カスタムオーディオ設定を作成し、即座に切り替え完璧なサウンド、いつもワンクリック。',
      },
      keyboardShortcuts: {
        title: 'キーボードパワー',
        description: '手を離さずにすべてをコントロール。ミュート、音量、プロファイル切り替えのカスタムショートカット。最大効率。',
      },
      nativeDesign: {
        title: '真のmacOSネイティブ',
        description: 'Mac専用に構築。醜いインターフェースなし、システム肥大化なし、カーネル拡張なし。クリーンで高速なネイティブmacOSの完璧さのみ。',
      },
      magicBoost: {
        title: 'Magic Boost',
        description: '静かなオーディオを歪みなく最大+12dBブースト。もう小さな動画やポッドキャストを聞くのに苦労しません。',
      },
      localApi: {
        title: 'ローカルAPI',
        description: 'ローカルREST APIを介してすべてのオーディオアプリをプログラムで制御。音量、ミュート、ルーティングを自動化 — Stream Deck、スマートホーム、カスタム統合に最適。',
      },
    },
    useCases: {
      title: 'ワークフロー向けに構築',
      designer: 'ビデオ会議中に音楽が必要なデザイナーに最適',
      producer: '複数のオーディオソースをミックスするプロデューサーに必須',
      developer: '音楽、ドキュメント、スタンドアップを同時実行する開発者に理想的',
      remote: '通話とコンテンツを使いこなすリモートワーカーに必須',
    },
    devices: {
      headphones: 'ヘッドフォン',
      speaker: 'スピーカー',
      display: 'ディスプレイ',
      bluetooth: 'Bluetooth',
      airpods: 'AirPods',
    },
    comparison: {
      title: 'MACA vs. 他のオーディオツール',
      subtitle: '数千人がMACAに切り替えた理由',
      maca: 'MACA',
      others: '他のツール',
      features: {
        easySetup: '即座に動作',
        noDrivers: 'ドライバー/拡張なし',
        oneTimePurchase: '一度支払えば永久に所有',
        profiles: 'オーディオプロファイル込み',
        nativeUI: 'ネイティブmacOSデザイン',
        lightweight: '超軽量',
        multiRoom: 'マルチルームオーディオルーティング',
      },
    },
    whyNotOthers: {
      title: 'なぜ他のツールは？',
      subtitle: 'MACAと人気のある代替品を比較',
      macaPrice: 'アプリ内購入',
      competitors: {
        soundSource: {
          name: 'SoundSource',
          price: '$39',
          issues: ['Expensive subscription model', 'Complex interface', 'Requires system audio driver'],
        },
        audioHijack: {
          name: 'Audio Hijack',
          price: '$64+',
          issues: ['Very expensive', 'Overwhelming features', 'Steep learning curve'],
        },
      },
    },
    privacy: {
      title: 'プライバシー第一',
      subtitle: 'あなたのデータはMACAで安全です',
      guaranteeTitle: 'プライバシーガラントリー',
      guaranteeDescription: 'あなたのプライバシーとデータのセキュリティを保護することに全力を尽くします。',
      features: {
        noData: {
          title: 'データはクラウドに送られません',
          description: 'データはクラウドに送られません',
        },
        localProcessing: {
          title: 'すべての処理はローカルで行われます',
          description: 'すべての処理はローカルで行われます',
        },
        noCloud: {
          title: 'クラウドストレージや同期はありません',
          description: 'クラウドストレージや同期はありません',
        },
        noTracking: {
          title: 'トラッキングゼロ',
          description: 'トラッキングゼロ—プライバシーを重視',
        },
      },
      guarantee: 'あなたのプライバシーとデータのセキュリティを保証します。',
    },
    testimonials: {
      title: 'ユーザーからのレビュー',
      subtitle: '満足した顧客からの評価を確認',
      comingSoon: '近日公開',
      joinUsers: 'MACAを愛するMacユーザーとつながる',
    },
    pricing: {
      title: '価格',
      subtitle: 'あなたに合ったプランを選んでください',
      free: {
        title: '無料',
        price: '$0',
        features: [
          '最大3つのアプリを制御',
          'アプリごとの音量制御',
          'アプリごとのミュート',
          'アプリごとのオーディオルーティング',
          'マスター音量制御',
          'プリセット付き10バンドEQ',
          'キーボードショートカット'
        ],
        cta: '無料ダウンロード',
      },
      pro: {
        title: 'Pro',
        price: 'アプリ内課金',
        features: [
          '無制限のアプリ',
          'すべての無料機能',
          '無制限のオーディオプロファイル',
          '完全なパラメトリックEQ制御',
          'オーディオノーマライザー',
          '無制限のカスタムEQプリセット',
          '1回限りの支払い • サブスクリプションなし'
        ],
        cta: 'App Storeでダウンロード',
        badge: '最も人気',
      },
    },
    benefits: {
      noSubscriptions: 'サブスクリプションなし',
      noTracking: 'トラッキングなし',
      noAds: '広告なし',
      nativeSupport: 'ネイティブサポート',
    },
    finalCta: {
      title: 'アップグレード準備ができましたか？',
      subtitle: 'MACA Proのフルパワーを体験してください',
      cta: 'App Storeでダウンロード',
    },
    footer: {
      product: '製品',
      legal: '法的事項',
      imprint: '法的情報',
      privacy: 'プライバシーポリシー',
      terms: '利用規約',
      support: 'サポート',
      tagline: 'みんなのためのプロオーディオコントロール',
      copyright: '© 2026 AMX Mediensystem. 全著作権所有。',
    },
    imprint: {
      title: '法的情報',
      owner: '所有者',
      address: '住所',
      contact: '連絡先',
      responsible: 'コンテンツ責任者',
      disclaimer: '免責事項：すべての製品名、ロゴ、ブランドはそれぞれの所有者の財産です。',
    },
    notFound: {
      title: 'ページが見つかりません',
      description: 'お探しのページは存在しないか、移動されました。',
      backHome: 'ホームに戻る',
      goBack: '戻る',
      helpText: 'ヘルプが必要ですか？',
      faqLink: 'FAQをご覧ください',
    },
  },
  'zh-Hans': {
    name: '简体中文',
    headerBadge: '⚡ 即时音频控制。零学习曲线。',
    hero: {
      badge: '⚡ 即时音频控制。零学习曲线。',
      title: '终于，你的 Mac 音频有意义了',
      subtitle: '独立控制每个应用的音量。菜单栏一个图标。无需麻烦。3秒实现完美音频平衡，而非30分钟。',
      cta: '免费获取 MACA',
      secondaryCta: '查看工作原理',
    },
    problem: {
      title: '听起来很熟悉？',
      items: [
        'Spotify 淹没了您的 Zoom 通话',
        '游戏声音在您直播时爆炸',
        'YouTube 广告吵醒全家',
        '没有简单的方法分别控制应用音量',
      ],
    },
    solution: {
      title: 'MACA 一键解决',
      subtitle: '每个应用的独立音量控制。直接从菜单栏操作。原生、快速、简洁优雅。',
    },
    features: {
      title: 'MACA 为何胜出',
      perAppVolume: {
        title: '按应用音量滑块',
        description: '即时控制每个应用。音乐 30%，通话 100%，浏览器 50%。设置一次，永久忘记。',
      },
      quickMute: {
        title: '一键静音',
        description: '立即静音任何应用而不触碰其音量。非常适合中断、广告或意外通话。',
      },
      focusMode: {
        title: '专注模式',
        description: '为100多个通信应用程序预配置（Teams、Discord、Zoom、FaceTime等）。一键或键盘快捷键静音所有其他应用。会议期间没有分散注意力的音乐。',
      },
      audioProfiles: {
        title: '智能配置文件',
        description: '工作。游戏。音乐制作。创建自定义音频设置并即时切换。您的完美声音，始终一键即达。',
      },
      keyboardShortcuts: {
        title: '键盘强大功能',
        description: '无需抬手即可控制一切。自定义快捷键用于静音、音量和配置文件切换。最大效率。',
      },
      nativeDesign: {
        title: '真正的 macOS 原生',
        description: '专为 Mac 打造。无丑陋界面、无系统膨胀、无内核扩展。只有干净、快速的原生 macOS 完美体验。',
      },
      magicBoost: {
        title: 'Magic Boost',
        description: '将安静的音频提升至 +12dB 而无失真。再也不用费力听低声视频或播客。',
      },
      localApi: {
        title: '本地 API',
        description: '通过本地 REST API 以编程方式控制每个音频应用。自动化音量、静音和路由 — 适用于 Stream Deck、智能家居和自定义集成。',
      },
    },
    useCases: {
      title: '为您的工作流程而构建',
      designer: '非常适合在视频会议期间需要音乐的设计师',
      producer: '对混合多个音频源的制作人至关重要',
      developer: '对同时运行音乐、文档和站会的开发者来说理想',
      remote: '远程工作者在通话和内容之间切换的必备工具',
    },
    devices: {
      headphones: '耳机',
      speaker: '扬声器',
      display: '显示器',
      bluetooth: '蓝牙',
      airpods: 'AirPods',
    },
    comparison: {
      title: 'MACA vs. 其他音频工具',
      subtitle: '了解为什么数千人切换到 MACA',
      maca: 'MACA',
      others: '其他工具',
      features: {
        easySetup: '即刻运行',
        noDrivers: '无需驱动/扩展',
        oneTimePurchase: '一次付费，永久拥有',
        profiles: '包含音频配置文件',
        nativeUI: '原生 macOS 设计',
        lightweight: '超轻量级',
        multiRoom: '多房间音频路由',
      },
    },
    whyNotOthers: {
      title: '为什么不是其他工具？',
      subtitle: '将 MACA 与流行替代品进行比较',
      macaPrice: '应用内购买',
      competitors: {
        soundSource: {
          name: 'SoundSource',
          price: '$39',
          issues: ['Expensive subscription model', 'Complex interface', 'Requires system audio driver'],
        },
        audioHijack: {
          name: 'Audio Hijack',
          price: '$64+',
          issues: ['Very expensive', 'Overwhelming features', 'Steep learning curve'],
        },
      },
    },
    privacy: {
      title: '隐私第一',
      subtitle: '您的数据在 MACA 中安全',
      guaranteeTitle: '隐私保证',
      guaranteeDescription: '我们致力于保护您的隐私和数据安全。',
      features: {
        noData: {
          title: '没有数据发送到云端',
          description: '没有数据发送到云端',
        },
        localProcessing: {
          title: '所有处理都在您的 Mac 上本地进行',
          description: '所有处理都在您的 Mac 上本地进行',
        },
        noCloud: {
          title: '没有云存储或同步',
          description: '没有云存储或同步',
        },
        noTracking: {
          title: '零跟踪',
          description: '零跟踪—您的隐私很重要',
        },
      },
      guarantee: '我们保证您的隐私和数据安全。',
    },
    testimonials: {
      title: '用户评价',
      subtitle: '听取满意客户的反馈',
      comingSoon: '即将推出',
      joinUsers: '加入成千上万热爱 MACA 的 Mac 用户',
    },
    pricing: {
      title: '定价',
      subtitle: '选择适合您的计划',
      free: {
        title: '免费',
        price: '$0',
        features: [
          '控制最多3个应用',
          '每个应用的音量控制',
          '每个应用的静音',
          '每个应用的音频路由',
          '主音量控制',
          '带预设的10频段EQ',
          '键盘快捷键'
        ],
        cta: '下载免费',
      },
      pro: {
        title: '专业版',
        price: '应用内购买',
        features: [
          '无限应用',
          '所有免费功能',
          '无限音频配置文件',
          '完整的参数EQ控制',
          '音频规范化器',
          '无限自定义EQ预设',
          '一次性付款 • 无订阅'
        ],
        cta: '在App Store下载',
        badge: '最受欢迎',
      },
    },
    benefits: {
      noSubscriptions: '无需订阅',
      noTracking: '无需跟踪',
      noAds: '无需广告',
      nativeSupport: '原生支持',
    },
    finalCta: {
      title: '准备升级？',
      subtitle: '体验 MACA Pro 的全部功能',
      cta: '在App Store下载',
    },
    footer: {
      product: '产品',
      legal: '法律',
      imprint: '法律信息',
      privacy: '隐私政策',
      terms: '服务条款',
      support: '支持',
      tagline: '人人都能用的专业音频控制',
      copyright: '© 2026 AMX Mediensystem. 保留所有权利。',
    },
    imprint: {
      title: '法律信息',
      owner: '所有者',
      address: '地址',
      contact: '联系方式',
      responsible: '内容负责人',
      disclaimer: '免责声明：所有产品名称、徽标和品牌均为其各自所有者的财产。',
    },
    notFound: {
      title: '页面未找到',
      description: '抱歉！您要查找的页面不存在或已被移动。',
      backHome: '返回首页',
      goBack: '返回',
      helpText: '需要帮助？',
      faqLink: '访问我们的FAQ',
    },
  },
  ar: {
    name: 'العربية',
    headerBadge: '⚡ صوتك. تحكم مثالي. فوري.',
    hero: {
      badge: '⚡ صوتك. تحكم مثالي. فوري.',
      title: 'أخيرًا، تحكم كامل في الصوت',
      subtitle: 'تحكم في مستوى صوت كل تطبيق بشكل مستقل. تبديل ملفات التعريف في ثوانٍ — سريع كالبرق لكل موقف.',
      cta: 'احصل على MACA مجانًا',
      secondaryCta: 'شاهده يعمل',
    },
    problem: {
      title: 'يبدو مألوفًا؟',
      items: [
        'Spotify يغطي على مكالمات Zoom',
        'أصوات الألعاب تنفجر أثناء البث',
        'إعلانات YouTube توقظ المنزل بأكمله',
        'لا توجد طريقة سهلة للتحكم في أصوات التطبيقات بشكل منفصل',
      ],
    },
    solution: {
      title: 'MACA يحل هذا بنقرة واحدة',
      subtitle: 'تحكم فردي في مستوى الصوت لكل تطبيق. مباشرة من شريط القوائم. أصلي وسريع وبسيط بشكل جميل.',
    },
    features: {
      title: 'لماذا MACA يتفوق',
      perAppVolume: { title: 'أشرطة صوت لكل تطبيق', description: 'تحكم فوري في كل تطبيق. الموسيقى 30%، المكالمات 100%، المتصفح 50%. اضبطه مرة واحدة وانسَ الأمر.' },
      quickMute: { title: 'كتم بنقرة واحدة', description: 'أوقف صوت أي تطبيق فورًا دون لمس مستوى الصوت. مثالي للمقاطعات والإعلانات.' },
      focusMode: { title: 'وضع التركيز', description: 'مُعد مسبقًا لأكثر من 100 تطبيق اتصالات. كتم جميع التطبيقات الأخرى بنقرة أو اختصار لوحة مفاتيح.' },
      audioProfiles: { title: 'ملفات تعريف ذكية', description: 'عمل. ألعاب. إنتاج موسيقي. أنشئ إعدادات صوت مخصصة وبدّل بينها فورًا.' },
      keyboardShortcuts: { title: 'قوة لوحة المفاتيح', description: 'تحكم في كل شيء دون رفع يديك. اختصارات مخصصة للكتم والصوت وتبديل الملفات.' },
      nativeDesign: { title: 'تصميم macOS أصلي', description: 'مصمم حصريًا لنظام Mac. بدون واجهات قبيحة أو انتفاخ في النظام أو ملحقات نواة.' },
      magicBoost: { title: 'Magic Boost', description: 'عزز الصوت المنخفض حتى +12dB بدون تشويه.' },
      localApi: { title: 'API محلي', description: 'تحكم في كل تطبيق صوتي برمجيًا عبر API REST محلي. أتمتة الصوت والكتم والتوجيه — مثالي لـ Stream Deck والمنزل الذكي والتكاملات المخصصة.' },
    },
    useCases: {
      title: 'من يستخدم MACA؟',
      designerTitle: 'المصممون والمبدعون',
      designer: 'Spotify يعمل، Adobe مفتوح، مكالمات الفيديو في الانتظار. مستويات صوت مثالية بدون متاعب.',
      producerTitle: 'المنتجون والموسيقيون',
      producer: 'DAW عند 80%، العينات عند 70%، المراجع عند 60%. تحكم كامل للمزج والإنتاج.',
      developerTitle: 'المطورون والمبرمجون',
      developer: 'موسيقى للتركيز، Stack Overflow مفتوح، الإشعارات مكتومة. برمج مع الموسيقى المثالية.',
      remoteTitle: 'العاملون عن بُعد',
      remote: 'Zoom عند 100%، الموسيقى عند 30%، الإشعارات عند 0%. اجتماعات بدون مقاطعات.',
    },
    devices: { headphones: 'سماعات', speaker: 'مكبر صوت', display: 'شاشة', bluetooth: 'بلوتوث', airpods: 'AirPods' },
    comparison: {
      title: 'MACA مقابل أدوات الصوت الأخرى',
      subtitle: 'اكتشف لماذا تحول الآلاف إلى MACA',
      maca: 'MACA', others: 'أدوات أخرى',
      features: { easySetup: 'يعمل فورًا', noDrivers: 'بدون تعريفات/ملحقات', oneTimePurchase: 'ادفع مرة واحدة، امتلكه للأبد', profiles: 'ملفات صوت مضمنة', nativeUI: 'تصميم macOS أصلي', lightweight: 'خفيف للغاية', multiRoom: 'توجيه صوت متعدد الغرف' },
    },
    whyNotOthers: {
      title: 'لماذا ليس أدوات أخرى؟', subtitle: 'قارن MACA مع البدائل الشائعة', macaPrice: 'شراء داخل التطبيق',
      competitors: {
        soundSource: { name: 'SoundSource', price: '$39', issues: ['نموذج اشتراك مكلف', 'واجهة معقدة', 'يتطلب تعريف صوت النظام'] },
        audioHijack: { name: 'Audio Hijack', price: '$64+', issues: ['غالي جدًا', 'ميزات مربكة', 'منحنى تعلم حاد'] },
      },
    },
    privacy: {
      title: 'الخصوصية أولاً', subtitle: 'بياناتك آمنة مع MACA', guaranteeTitle: 'ضمان الخصوصية', guaranteeDescription: 'نحن ملتزمون بحماية خصوصيتك.',
      features: {
        noData: { title: 'لا بيانات مرسلة للسحابة', description: 'لا يتم إرسال أي بيانات للسحابة' },
        localProcessing: { title: 'معالجة محلية', description: 'كل المعالجة تتم محليًا على جهاز Mac' },
        noCloud: { title: 'بدون تخزين سحابي', description: 'بدون تخزين سحابي أو مزامنة' },
        noTracking: { title: 'صفر تتبع', description: 'صفر تتبع — خصوصيتك تهمنا' },
      },
      guarantee: 'نضمن خصوصيتك وأمان بياناتك.',
    },
    testimonials: { title: 'ماذا يقول مستخدمونا', subtitle: 'اسمع من العملاء الراضين', comingSoon: 'قريبًا', joinUsers: 'انضم لآلاف مستخدمي Mac الذين يحبون MACA' },
    pricing: {
      title: 'الأسعار', subtitle: 'اختر الخطة المناسبة لك',
      free: { title: 'مجاني', price: '$0', features: ['تحكم في 3 تطبيقات', 'تحكم في الصوت لكل تطبيق', 'كتم لكل تطبيق', 'توجيه صوت لكل تطبيق', 'تحكم رئيسي في الصوت', 'معادل 10 نطاقات', 'اختصارات لوحة المفاتيح'], cta: 'تحميل مجاني' },
      pro: { title: 'Pro', price: 'شراء داخل التطبيق', features: ['تطبيقات غير محدودة', 'جميع ميزات النسخة المجانية', 'ملفات صوت غير محدودة', 'تحكم EQ بارامتري كامل', 'معالج الصوت', 'إعدادات EQ مخصصة غير محدودة', 'دفعة واحدة • بدون اشتراك'], cta: 'تحميل من App Store', badge: 'الأكثر شعبية' },
    },
    benefits: { noSubscriptions: 'بدون اشتراكات', noTracking: 'بدون تتبع', noAds: 'بدون إعلانات', nativeSupport: 'دعم أصلي' },
    finalCta: { title: 'ابدأ اليوم', subtitle: 'انضم لآلاف مستخدمي Mac الذين يحبون MACA', cta: 'تحميل من App Store' },
    footer: { product: 'المنتج', legal: 'قانوني', imprint: 'البيانات القانونية', privacy: 'سياسة الخصوصية', terms: 'شروط الاستخدام', support: 'الدعم', tagline: 'تحكم صوتي احترافي للجميع', copyright: '© 2026 AMX Mediensystem. جميع الحقوق محفوظة.' },
    imprint: { title: 'البيانات القانونية', owner: 'المالك', address: 'العنوان', contact: 'الاتصال', responsible: 'المسؤول عن المحتوى', disclaimer: 'إخلاء مسؤولية: جميع أسماء المنتجات والشعارات والعلامات التجارية هي ملك لأصحابها.' },
    notFound: { title: 'الصفحة غير موجودة', description: 'عذرًا! الصفحة التي تبحث عنها غير موجودة أو تم نقلها.', backHome: 'العودة للرئيسية', goBack: 'رجوع', helpText: 'تحتاج مساعدة؟', faqLink: 'زيارة الأسئلة الشائعة' },
  },
  ru: {
    name: 'Русский',
    headerBadge: '⚡ Ваш звук. Идеально управляемый. Мгновенно.',
    hero: {
      badge: '⚡ Ваш звук. Идеально управляемый. Мгновенно.',
      title: 'Наконец, полный контроль звука',
      subtitle: 'Управляйте громкостью каждого приложения независимо. Переключение профилей за секунды — молниеносно для любой ситуации.',
      cta: 'Получить MACA бесплатно',
      secondaryCta: 'Смотреть в действии',
    },
    problem: {
      title: 'Знакомо?',
      items: [
        'Spotify заглушает звонки в Zoom',
        'Звуки игр гремят во время стрима',
        'Реклама на YouTube будит весь дом',
        'Нет простого способа управлять громкостью приложений по отдельности',
      ],
    },
    solution: {
      title: 'MACA решает это одним кликом',
      subtitle: 'Индивидуальный контроль громкости для каждого приложения. Прямо из строки меню. Нативный, быстрый и красиво простой.',
    },
    features: {
      title: 'Почему MACA побеждает',
      perAppVolume: { title: 'Регуляторы громкости для каждого приложения', description: 'Мгновенный контроль каждого приложения. Музыка 30%, звонки 100%, браузер 50%. Настройте раз и забудьте навсегда.' },
      quickMute: { title: 'Мгновенное отключение', description: 'Выключите звук любого приложения мгновенно, не трогая громкость. Идеально для прерываний и рекламы.' },
      focusMode: { title: 'Режим фокуса', description: 'Предварительно настроен для 100+ коммуникационных приложений. Отключите все остальные одним кликом или горячей клавишей.' },
      audioProfiles: { title: 'Умные профили', description: 'Работа. Игры. Музыка. Создавайте пользовательские звуковые настройки и переключайтесь мгновенно.' },
      keyboardShortcuts: { title: 'Сила клавиатуры', description: 'Управляйте всем, не поднимая рук. Горячие клавиши для отключения, громкости и профилей.' },
      nativeDesign: { title: 'Нативный дизайн macOS', description: 'Создан исключительно для Mac. Никаких уродливых интерфейсов, системного мусора или расширений ядра.' },
      magicBoost: { title: 'Magic Boost', description: 'Усильте тихий звук до +12дБ без искажений.' },
      localApi: { title: 'Локальный API', description: 'Управляйте каждым аудиоприложением программно через локальный REST API. Автоматизируйте громкость, отключение звука и маршрутизацию — идеально для Stream Deck, умного дома и пользовательских интеграций.' },
    },
    useCases: {
      title: 'Кто использует MACA?',
      designerTitle: 'Дизайнеры и создатели',
      designer: 'Spotify играет, Adobe открыт, видеозвонки в ожидании. Идеальные уровни звука без хлопот.',
      producerTitle: 'Продюсеры и музыканты',
      producer: 'DAW на 80%, семплы на 70%, референсы на 60%. Полный контроль для сведения.',
      developerTitle: 'Разработчики',
      developer: 'Музыка для фокуса, Stack Overflow открыт, уведомления отключены. Кодьте с идеальным саундтреком.',
      remoteTitle: 'Удалённые работники',
      remote: 'Zoom на 100%, музыка на 30%, уведомления на 0%. Встречи без прерываний.',
    },
    devices: { headphones: 'Наушники', speaker: 'Динамик', display: 'Дисплей', bluetooth: 'Bluetooth', airpods: 'AirPods' },
    comparison: {
      title: 'MACA vs. другие аудио-инструменты', subtitle: 'Узнайте, почему тысячи перешли на MACA',
      maca: 'MACA', others: 'Другие',
      features: { easySetup: 'Работает мгновенно', noDrivers: 'Без драйверов/расширений', oneTimePurchase: 'Заплатите раз, владейте навсегда', profiles: 'Аудиопрофили включены', nativeUI: 'Нативный дизайн macOS', lightweight: 'Ультралёгкий', multiRoom: 'Многокомнатный аудиомаршрутизатор' },
    },
    whyNotOthers: {
      title: 'Почему не другие инструменты?', subtitle: 'Сравните MACA с популярными альтернативами', macaPrice: 'Покупка в приложении',
      competitors: {
        soundSource: { name: 'SoundSource', price: '$39', issues: ['Дорогая подписка', 'Сложный интерфейс', 'Требуется аудиодрайвер'] },
        audioHijack: { name: 'Audio Hijack', price: '$64+', issues: ['Очень дорогой', 'Перегружен функциями', 'Крутая кривая обучения'] },
      },
    },
    privacy: {
      title: 'Конфиденциальность прежде всего', subtitle: 'Ваши данные в безопасности с MACA', guaranteeTitle: 'Гарантия конфиденциальности', guaranteeDescription: 'Мы привержены защите вашей конфиденциальности.',
      features: {
        noData: { title: 'Данные не отправляются в облако', description: 'Никакие данные не отправляются в облако' },
        localProcessing: { title: 'Локальная обработка', description: 'Вся обработка выполняется локально на вашем Mac' },
        noCloud: { title: 'Без облачного хранилища', description: 'Без облачного хранилища или синхронизации' },
        noTracking: { title: 'Ноль отслеживания', description: 'Ноль отслеживания — ваша конфиденциальность важна' },
      },
      guarantee: 'Мы гарантируем вашу конфиденциальность и безопасность данных.',
    },
    testimonials: { title: 'Что говорят наши пользователи', subtitle: 'Отзывы довольных клиентов', comingSoon: 'Скоро', joinUsers: 'Присоединяйтесь к тысячам пользователей Mac, которые любят MACA' },
    pricing: {
      title: 'Цены', subtitle: 'Выберите подходящий план',
      free: { title: 'Бесплатно', price: '$0', features: ['Управление до 3 приложений', 'Громкость для каждого приложения', 'Отключение для каждого приложения', 'Маршрутизация аудио', 'Мастер-громкость', '10-полосный эквалайзер', 'Горячие клавиши'], cta: 'Скачать бесплатно' },
      pro: { title: 'Pro', price: 'Покупка в приложении', features: ['Безлимитные приложения', 'Все бесплатные функции', 'Безлимитные аудиопрофили', 'Полный параметрический EQ', 'Нормализатор звука', 'Безлимитные пресеты EQ', 'Разовый платёж • Без подписки'], cta: 'Скачать в App Store', badge: 'Самый популярный' },
    },
    benefits: { noSubscriptions: 'Без подписок', noTracking: 'Без отслеживания', noAds: 'Без рекламы', nativeSupport: 'Нативная поддержка' },
    finalCta: { title: 'Начните сегодня', subtitle: 'Присоединяйтесь к тысячам пользователей Mac', cta: 'Скачать в App Store' },
    footer: { product: 'Продукт', legal: 'Правовая информация', imprint: 'Импрессум', privacy: 'Политика конфиденциальности', terms: 'Условия использования', support: 'Поддержка', tagline: 'Профессиональный аудиоконтроль для всех', copyright: '© 2026 AMX Mediensystem. Все права защищены.' },
    imprint: { title: 'Импрессум', owner: 'Владелец', address: 'Адрес', contact: 'Контакт', responsible: 'Ответственный за контент', disclaimer: 'Отказ от ответственности: все названия продуктов, логотипы и бренды являются собственностью их владельцев.' },
    notFound: { title: 'Страница не найдена', description: 'Упс! Запрашиваемая страница не существует или была перемещена.', backHome: 'На главную', goBack: 'Назад', helpText: 'Нужна помощь?', faqLink: 'Посетите FAQ' },
  },
  nl: {
    name: 'Nederlands',
    headerBadge: '⚡ Je Audio. Perfect Beheerst. Direct.',
    hero: {
      badge: '⚡ Je Audio. Perfect Beheerst. Direct.',
      title: 'Eindelijk volledige audiocontrole',
      subtitle: 'Regel het volume van elke app onafhankelijk. Wissel van profiel in seconden — razendsnel voor elke situatie.',
      cta: 'Download MACA gratis',
      secondaryCta: 'Bekijk het in actie',
    },
    problem: {
      title: 'Klinkt bekend?',
      items: [
        'Spotify overstempt je Zoom-gesprekken',
        'Gamegeluiden knallen terwijl je streamt',
        'YouTube-advertenties maken het hele huis wakker',
        'Geen makkelijke manier om app-volumes apart te regelen',
      ],
    },
    solution: {
      title: 'MACA lost dit op met één klik',
      subtitle: 'Individuele volumeregeling voor elke app. Direct vanuit de menubalk. Native, snel en prachtig eenvoudig.',
    },
    features: {
      title: 'Waarom MACA wint',
      perAppVolume: { title: 'Volumeregelaars per app', description: 'Directe controle over elke app. Muziek op 30%, gesprekken op 100%, browser op 50%. Stel het één keer in en vergeet het.' },
      quickMute: { title: 'Eén-klik dempen', description: 'Demp het geluid van elke app direct zonder het volume aan te raken. Perfect voor onderbrekingen en advertenties.' },
      focusMode: { title: 'Focusmodus', description: 'Vooraf geconfigureerd voor meer dan 100 communicatie-apps. Demp alle andere apps met één klik of sneltoets.' },
      audioProfiles: { title: 'Slimme profielen', description: 'Werk. Gaming. Muziekproductie. Maak aangepaste audio-instellingen en wissel direct.' },
      keyboardShortcuts: { title: 'Toetsenbordkracht', description: 'Bedien alles zonder je handen op te tillen. Aangepaste sneltoetsen voor dempen, volume en profielwisseling.' },
      nativeDesign: { title: 'Native macOS-ontwerp', description: 'Exclusief gebouwd voor Mac. Geen lelijke interfaces, geen systeembloat, geen kernelextensies.' },
      magicBoost: { title: 'Magic Boost', description: 'Versterk stil geluid tot +12dB zonder vervorming.' },
      localApi: { title: 'Lokale API', description: 'Bedien elke audio-app programmatisch via een lokale REST API. Automatiseer volume, dempen en routing — perfect voor Stream Deck, smart home en eigen integraties.' },
    },
    useCases: {
      title: 'Wie gebruikt MACA?',
      designerTitle: 'Designers en creators',
      designer: 'Spotify speelt, Adobe open, videogesprekken stand-by. Perfecte geluidsniveaus zonder gedoe.',
      producerTitle: 'Producenten en muzikanten',
      producer: 'DAW op 80%, samples op 70%, referenties op 60%. Volledige controle voor mixen en produceren.',
      developerTitle: 'Ontwikkelaars',
      developer: 'Muziek voor focus, Stack Overflow open, meldingen gedempt. Code met de perfecte soundtrack.',
      remoteTitle: 'Thuiswerkers',
      remote: 'Zoom op 100%, muziek op 30%, meldingen op 0%. Vergaderingen zonder onderbrekingen.',
    },
    devices: { headphones: 'Koptelefoon', speaker: 'Luidspreker', display: 'Beeldscherm', bluetooth: 'Bluetooth', airpods: 'AirPods' },
    comparison: {
      title: 'MACA vs. andere audiotools', subtitle: 'Ontdek waarom duizenden zijn overgestapt naar MACA',
      maca: 'MACA', others: 'Andere tools',
      features: { easySetup: 'Werkt direct', noDrivers: 'Geen drivers/extensies', oneTimePurchase: 'Eenmaal betalen, voor altijd eigenaar', profiles: 'Audioprofielen inbegrepen', nativeUI: 'Native macOS-design', lightweight: 'Ultra lichtgewicht', multiRoom: 'Multi-room audio routing' },
    },
    whyNotOthers: {
      title: 'Waarom niet andere tools?', subtitle: 'Vergelijk MACA met populaire alternatieven', macaPrice: 'In-app aankoop',
      competitors: {
        soundSource: { name: 'SoundSource', price: '$39', issues: ['Duur abonnementsmodel', 'Complexe interface', 'Vereist systeemaudiodriver'] },
        audioHijack: { name: 'Audio Hijack', price: '$64+', issues: ['Zeer duur', 'Overweldigende functies', 'Steile leercurve'] },
      },
    },
    privacy: {
      title: 'Privacy voorop', subtitle: 'Je gegevens zijn veilig bij MACA', guaranteeTitle: 'Privacygarantie', guaranteeDescription: 'We zijn toegewijd aan het beschermen van je privacy.',
      features: {
        noData: { title: 'Geen gegevens naar de cloud', description: 'Er worden geen gegevens naar de cloud gestuurd' },
        localProcessing: { title: 'Lokale verwerking', description: 'Alle verwerking gebeurt lokaal op je Mac' },
        noCloud: { title: 'Geen cloudopslag', description: 'Geen cloudopslag of synchronisatie' },
        noTracking: { title: 'Nul tracking', description: 'Nul tracking — je privacy telt' },
      },
      guarantee: 'We garanderen je privacy en gegevensbeveiliging.',
    },
    testimonials: { title: 'Wat onze gebruikers zeggen', subtitle: 'Hoor van tevreden klanten', comingSoon: 'Binnenkort', joinUsers: 'Sluit je aan bij duizenden Mac-gebruikers die van MACA houden' },
    pricing: {
      title: 'Prijzen', subtitle: 'Kies het plan dat bij je past',
      free: { title: 'Gratis', price: '$0', features: ['Beheer tot 3 apps', 'Volume per app', 'Dempen per app', 'Audioroutering per app', 'Mastervolume', '10-bands equalizer', 'Sneltoetsen'], cta: 'Gratis downloaden' },
      pro: { title: 'Pro', price: 'In-app aankoop', features: ['Onbeperkte apps', 'Alle gratis functies', 'Onbeperkte audioprofielen', 'Volledige parametrische EQ', 'Audionormalisator', 'Onbeperkte EQ-presets', 'Eenmalige betaling • Geen abonnement'], cta: 'Download in App Store', badge: 'Meest populair' },
    },
    benefits: { noSubscriptions: 'Geen abonnementen', noTracking: 'Geen tracking', noAds: 'Geen advertenties', nativeSupport: 'Native ondersteuning' },
    finalCta: { title: 'Begin vandaag', subtitle: 'Sluit je aan bij duizenden Mac-gebruikers', cta: 'Download in de App Store' },
    footer: { product: 'Product', legal: 'Juridisch', imprint: 'Colofon', privacy: 'Privacybeleid', terms: 'Gebruiksvoorwaarden', support: 'Ondersteuning', tagline: 'Professionele audiobesturing voor iedereen', copyright: '© 2026 AMX Mediensystem. Alle rechten voorbehouden.' },
    imprint: { title: 'Colofon', owner: 'Eigenaar', address: 'Adres', contact: 'Contact', responsible: 'Verantwoordelijk voor de inhoud', disclaimer: 'Disclaimer: alle productnamen, logo\'s en merken zijn eigendom van hun respectievelijke eigenaren.' },
    notFound: { title: 'Pagina niet gevonden', description: 'Oeps! De pagina die je zoekt bestaat niet of is verplaatst.', backHome: 'Terug naar startpagina', goBack: 'Terug', helpText: 'Hulp nodig?', faqLink: 'Bezoek onze FAQ' },
  },
  tr: {
    name: 'Türkçe',
    headerBadge: '⚡ Sesin. Mükemmel Kontrol. Anında.',
    hero: {
      badge: '⚡ Sesin. Mükemmel Kontrol. Anında.',
      title: 'Sonunda tam ses kontrolü',
      subtitle: 'Her uygulamanın sesini bağımsız olarak kontrol edin. Profil değiştirme saniyeler içinde — her durum için yıldırım hızında.',
      cta: 'MACA\'yı ücretsiz edinin',
      secondaryCta: 'Çalışırken izleyin',
    },
    problem: {
      title: 'Tanıdık geliyor mu?',
      items: [
        'Spotify, Zoom aramalarınızı bastırıyor',
        'Oyun sesleri yayın yaparken patlıyor',
        'YouTube reklamları evi uyandırıyor',
        'Uygulama seslerini ayrı ayrı kontrol etmenin kolay bir yolu yok',
      ],
    },
    solution: {
      title: 'MACA bunu tek tıkla çözer',
      subtitle: 'Her uygulama için bireysel ses kontrolü. Doğrudan menü çubuğundan. Yerel, hızlı ve güzel şekilde basit.',
    },
    features: {
      title: 'MACA neden kazanır',
      perAppVolume: { title: 'Uygulama başına ses kaydırıcıları', description: 'Her uygulama üzerinde anında kontrol. Müzik %30, aramalar %100, tarayıcı %50. Bir kez ayarlayın, sonsuza dek unutun.' },
      quickMute: { title: 'Tek tıkla sessize alma', description: 'Herhangi bir uygulamanın sesini hacmine dokunmadan anında kapatın. Kesintiler ve reklamlar için mükemmel.' },
      focusMode: { title: 'Odak modu', description: '100\'den fazla iletişim uygulaması için önceden yapılandırılmış. Diğer tüm uygulamaları tek tıkla veya kısayolla sessize alın.' },
      audioProfiles: { title: 'Akıllı profiller', description: 'İş. Oyun. Müzik prodüksiyonu. Özel ses ayarları oluşturun ve anında geçiş yapın.' },
      keyboardShortcuts: { title: 'Klavye gücü', description: 'Ellerinizi kaldırmadan her şeyi kontrol edin. Sessize alma, ses ve profil değiştirme için özel kısayollar.' },
      nativeDesign: { title: 'Yerel macOS tasarımı', description: 'Yalnızca Mac için geliştirilmiş. Çirkin arayüzler, sistem şişkinliği veya çekirdek uzantıları yok.' },
      magicBoost: { title: 'Magic Boost', description: 'Sessiz sesi bozulmadan +12dB\'ye kadar artırın.' },
      localApi: { title: 'Yerel API', description: 'Her ses uygulamasını yerel REST API aracılığıyla programatik olarak kontrol edin. Ses, sessiz ve yönlendirmeyi otomatikleştirin — Stream Deck, akıllı ev ve özel entegrasyonlar için ideal.' },
    },
    useCases: {
      title: 'MACA\'yı kim kullanır?',
      designerTitle: 'Tasarımcılar ve yaratıcılar',
      designer: 'Spotify çalıyor, Adobe açık, görüntülü aramalar beklemede. Zahmetsiz mükemmel ses seviyeleri.',
      producerTitle: 'Yapımcılar ve müzisyenler',
      producer: 'DAW %80, örnekler %70, referanslar %60. Miks ve prodüksiyon için tam kontrol.',
      developerTitle: 'Geliştiriciler',
      developer: 'Odaklanmak için müzik, Stack Overflow açık, bildirimler sessizde. Mükemmel müzikle kodlayın.',
      remoteTitle: 'Uzaktan çalışanlar',
      remote: 'Zoom %100, müzik %30, bildirimler %0. Kesintisiz toplantılar.',
    },
    devices: { headphones: 'Kulaklık', speaker: 'Hoparlör', display: 'Ekran', bluetooth: 'Bluetooth', airpods: 'AirPods' },
    comparison: {
      title: 'MACA vs. diğer ses araçları', subtitle: 'Binlerin neden MACA\'ya geçtiğini görün',
      maca: 'MACA', others: 'Diğer araçlar',
      features: { easySetup: 'Anında çalışır', noDrivers: 'Sürücü/uzantı yok', oneTimePurchase: 'Bir kez öde, sonsuza dek sahip ol', profiles: 'Ses profilleri dahil', nativeUI: 'Yerel macOS tasarımı', lightweight: 'Ultra hafif', multiRoom: 'Multi-room ses yönlendirmesi' },
    },
    whyNotOthers: {
      title: 'Neden diğer araçlar değil?', subtitle: 'MACA\'yı popüler alternatiflerle karşılaştırın', macaPrice: 'Uygulama içi satın alma',
      competitors: {
        soundSource: { name: 'SoundSource', price: '$39', issues: ['Pahalı abonelik modeli', 'Karmaşık arayüz', 'Sistem ses sürücüsü gerektirir'] },
        audioHijack: { name: 'Audio Hijack', price: '$64+', issues: ['Çok pahalı', 'Bunaltıcı özellikler', 'Dik öğrenme eğrisi'] },
      },
    },
    privacy: {
      title: 'Önce gizlilik', subtitle: 'Verileriniz MACA ile güvende', guaranteeTitle: 'Gizlilik garantisi', guaranteeDescription: 'Gizliliğinizi korumaya kararlıyız.',
      features: {
        noData: { title: 'Buluta veri gönderilmez', description: 'Buluta hiçbir veri gönderilmez' },
        localProcessing: { title: 'Yerel işleme', description: 'Tüm işlemler Mac\'inizde yerel olarak yapılır' },
        noCloud: { title: 'Bulut depolama yok', description: 'Bulut depolama veya senkronizasyon yok' },
        noTracking: { title: 'Sıfır izleme', description: 'Sıfır izleme — gizliliğiniz önemlidir' },
      },
      guarantee: 'Gizliliğinizi ve veri güvenliğinizi garanti ediyoruz.',
    },
    testimonials: { title: 'Kullanıcılarımız ne diyor', subtitle: 'Memnun müşterilerden dinleyin', comingSoon: 'Yakında', joinUsers: 'MACA\'yı seven binlerce Mac kullanıcısına katılın' },
    pricing: {
      title: 'Fiyatlandırma', subtitle: 'Size uygun planı seçin',
      free: { title: 'Ücretsiz', price: '$0', features: ['3 uygulamaya kadar kontrol', 'Uygulama başına ses kontrolü', 'Uygulama başına sessize alma', 'Uygulama başına ses yönlendirme', 'Ana ses kontrolü', '10 bantlı ekolayzır', 'Klavye kısayolları'], cta: 'Ücretsiz indir' },
      pro: { title: 'Pro', price: 'Uygulama içi satın alma', features: ['Sınırsız uygulama', 'Tüm ücretsiz özellikler', 'Sınırsız ses profilleri', 'Tam parametrik EQ', 'Ses normalleştirici', 'Sınırsız özel EQ ön ayarları', 'Tek seferlik ödeme • Abonelik yok'], cta: 'App Store\'dan indir', badge: 'En popüler' },
    },
    benefits: { noSubscriptions: 'Abonelik yok', noTracking: 'İzleme yok', noAds: 'Reklam yok', nativeSupport: 'Yerel destek' },
    finalCta: { title: 'Bugün başlayın', subtitle: 'MACA\'yı seven binlerce Mac kullanıcısına katılın', cta: 'App Store\'dan indirin' },
    footer: { product: 'Ürün', legal: 'Yasal', imprint: 'Yasal bilgiler', privacy: 'Gizlilik politikası', terms: 'Kullanım koşulları', support: 'Destek', tagline: 'Herkes için profesyonel ses kontrolü', copyright: '© 2026 AMX Mediensystem. Tüm hakları saklıdır.' },
    imprint: { title: 'Yasal bilgiler', owner: 'Sahip', address: 'Adres', contact: 'İletişim', responsible: 'İçerikten sorumlu', disclaimer: 'Yasal uyarı: tüm ürün adları, logolar ve markalar ilgili sahiplerinin mülkiyetindedir.' },
    notFound: { title: 'Sayfa bulunamadı', description: 'Hay aksi! Aradığınız sayfa mevcut değil veya taşınmış.', backHome: 'Ana sayfaya dön', goBack: 'Geri', helpText: 'Yardım mı gerekiyor?', faqLink: 'SSS sayfamızı ziyaret edin' },
  },
  sv: {
    name: 'Svenska',
    headerBadge: '⚡ Ditt ljud. Perfekt kontrollerat. Direkt.',
    hero: {
      badge: '⚡ Ditt ljud. Perfekt kontrollerat. Direkt.',
      title: 'Äntligen full ljudkontroll',
      subtitle: 'Styr volymen för varje app oberoende. Profilbyte på sekunder — blixtsnabbt för varje situation.',
      cta: 'Hämta MACA gratis',
      secondaryCta: 'Se det i aktion',
    },
    problem: {
      title: 'Låter det bekant?',
      items: [
        'Spotify dränker dina Zoom-samtal',
        'Spelljud smäller medan du streamar',
        'YouTube-reklam väcker hela huset',
        'Inget enkelt sätt att styra appvolymer separat',
      ],
    },
    solution: {
      title: 'MACA löser detta med ett klick',
      subtitle: 'Individuell volymkontroll för varje app. Direkt från menyraden. Inbyggd, snabb och vackert enkel.',
    },
    features: {
      title: 'Varför MACA vinner',
      perAppVolume: { title: 'Volymreglage per app', description: 'Direkt kontroll över varje app. Musik på 30%, samtal på 100%, webbläsare på 50%. Ställ in en gång, glöm det för alltid.' },
      quickMute: { title: 'Tysta med ett klick', description: 'Stäng av ljudet för vilken app som helst direkt utan att röra volymen. Perfekt för avbrott och reklam.' },
      focusMode: { title: 'Fokusläge', description: 'Förkonfigurerat för 100+ kommunikationsappar. Tysta alla andra appar med ett klick eller kortkommando.' },
      audioProfiles: { title: 'Smarta profiler', description: 'Arbete. Gaming. Musikproduktion. Skapa anpassade ljudinställningar och växla direkt.' },
      keyboardShortcuts: { title: 'Tangentbordskraft', description: 'Styr allt utan att lyfta händerna. Anpassade kortkommandon för tystning, volym och profilbyte.' },
      nativeDesign: { title: 'Inbyggd macOS-design', description: 'Byggd exklusivt för Mac. Inga fula gränssnitt, ingen systembloat, inga kärnextensioner.' },
      magicBoost: { title: 'Magic Boost', description: 'Förstärk tyst ljud upp till +12dB utan distorsion.' },
      localApi: { title: 'Lokalt API', description: 'Styr varje ljudapp programmatiskt via ett lokalt REST API. Automatisera volym, tystning och routing — perfekt för Stream Deck, smart hem och egna integrationer.' },
    },
    useCases: {
      title: 'Vem använder MACA?',
      designerTitle: 'Designers och kreatörer',
      designer: 'Spotify spelar, Adobe öppet, videosamtal i standby. Perfekta ljudnivåer utan krångel.',
      producerTitle: 'Producenter och musiker',
      producer: 'DAW på 80%, samples på 70%, referenser på 60%. Full kontroll för mixning och produktion.',
      developerTitle: 'Utvecklare',
      developer: 'Musik för fokus, Stack Overflow öppet, aviseringar tystade. Koda med perfekt soundtrack.',
      remoteTitle: 'Distansarbetare',
      remote: 'Zoom på 100%, musik på 30%, aviseringar på 0%. Möten utan avbrott.',
    },
    devices: { headphones: 'Hörlurar', speaker: 'Högtalare', display: 'Skärm', bluetooth: 'Bluetooth', airpods: 'AirPods' },
    comparison: {
      title: 'MACA vs. andra ljudverktyg', subtitle: 'Se varför tusentals bytte till MACA',
      maca: 'MACA', others: 'Andra verktyg',
      features: { easySetup: 'Fungerar direkt', noDrivers: 'Inga drivrutiner/tillägg', oneTimePurchase: 'Betala en gång, äg för alltid', profiles: 'Ljudprofiler inkluderade', nativeUI: 'Inbyggd macOS-design', lightweight: 'Ultralätt', multiRoom: 'Multi-room audiokontroll' },
    },
    whyNotOthers: {
      title: 'Varför inte andra verktyg?', subtitle: 'Jämför MACA med populära alternativ', macaPrice: 'Köp i appen',
      competitors: {
        soundSource: { name: 'SoundSource', price: '$39', issues: ['Dyr prenumerationsmodell', 'Komplext gränssnitt', 'Kräver systemljuddrivrutin'] },
        audioHijack: { name: 'Audio Hijack', price: '$64+', issues: ['Mycket dyrt', 'Överväldigande funktioner', 'Brant inlärningskurva'] },
      },
    },
    privacy: {
      title: 'Integritet först', subtitle: 'Dina data är säkra med MACA', guaranteeTitle: 'Integritetsgaranti', guaranteeDescription: 'Vi är engagerade i att skydda din integritet.',
      features: {
        noData: { title: 'Ingen data skickas till molnet', description: 'Ingen data skickas till molnet' },
        localProcessing: { title: 'Lokal bearbetning', description: 'All bearbetning sker lokalt på din Mac' },
        noCloud: { title: 'Ingen molnlagring', description: 'Ingen molnlagring eller synkronisering' },
        noTracking: { title: 'Noll spårning', description: 'Noll spårning — din integritet spelar roll' },
      },
      guarantee: 'Vi garanterar din integritet och datasäkerhet.',
    },
    testimonials: { title: 'Vad våra användare säger', subtitle: 'Hör från nöjda kunder', comingSoon: 'Kommer snart', joinUsers: 'Gå med tusentals Mac-användare som älskar MACA' },
    pricing: {
      title: 'Prissättning', subtitle: 'Välj planen som passar dig',
      free: { title: 'Gratis', price: '$0', features: ['Styr upp till 3 appar', 'Volym per app', 'Tysta per app', 'Ljuddirigering per app', 'Mastervolym', '10-bands equalizer', 'Kortkommandon'], cta: 'Ladda ner gratis' },
      pro: { title: 'Pro', price: 'Köp i appen', features: ['Obegränsade appar', 'Alla gratisfunktioner', 'Obegränsade ljudprofiler', 'Full parametrisk EQ', 'Ljudnormaliserare', 'Obegränsade EQ-förinställningar', 'Engångsbetalning • Inget abonnemang'], cta: 'Ladda ner i App Store', badge: 'Mest populär' },
    },
    benefits: { noSubscriptions: 'Inga prenumerationer', noTracking: 'Ingen spårning', noAds: 'Inga annonser', nativeSupport: 'Inbyggd support' },
    finalCta: { title: 'Kom igång idag', subtitle: 'Gå med tusentals Mac-användare som älskar MACA', cta: 'Ladda ner i App Store' },
    footer: { product: 'Produkt', legal: 'Juridiskt', imprint: 'Impressum', privacy: 'Integritetspolicy', terms: 'Användarvillkor', support: 'Support', tagline: 'Professionell ljudkontroll för alla', copyright: '© 2026 AMX Mediensystem. Alla rättigheter förbehållna.' },
    imprint: { title: 'Impressum', owner: 'Ägare', address: 'Adress', contact: 'Kontakt', responsible: 'Ansvarig för innehållet', disclaimer: 'Ansvarsfriskrivning: alla produktnamn, logotyper och varumärken tillhör sina respektive ägare.' },
    notFound: { title: 'Sidan hittades inte', description: 'Hoppsan! Sidan du letar efter finns inte eller har flyttats.', backHome: 'Tillbaka till startsidan', goBack: 'Tillbaka', helpText: 'Behöver du hjälp?', faqLink: 'Besök våra vanliga frågor' },
  },
  'zh-Hant': {
    name: '繁體中文',
    headerBadge: '⚡ 即時音訊控制。零學習曲線。',
    hero: { badge: '⚡ 即時音訊控制。零學習曲線。', title: '終於，你的 Mac 音訊有意義了', subtitle: '獨立控制每個應用程式的音量。選單列一個圖示。無需麻煩。3秒實現完美音訊平衡，而非30分鐘。', cta: '免費取得 MACA', secondaryCta: '觀看實際操作' },
    problem: { title: '聽起來很熟悉？', items: ['Spotify 蓋過你的 Zoom 通話', '遊戲音效在直播時炸裂', 'YouTube 廣告吵醒全家', '沒有簡單的方法分別控制���應用程式音量'] },
    solution: { title: 'MACA 一鍵解決', subtitle: '為每個應用程式提供獨立音量控制。直接從選單列操作。原生、快速且簡潔優雅。' },
    features: { title: '為什麼選擇 MACA', perAppVolume: { title: '逐應用程式音量控制', description: '即時控制每個應用程式。音樂30%、通話100%、瀏覽器50%。設定一次，永遠忘記。' }, quickMute: { title: '一鍵靜音', description: '無需調整音量即可立即靜音任何應用程式。適合中斷、廣告或突發通話。' }, focusMode: { title: '專注模式', description: '預設支援100多個通訊應用程式（Teams、Discord、Zoom、FaceTime等）。一鍵或鍵盤快捷鍵靜音所有其他應用程式。會議中不再有干擾音樂。' }, audioProfiles: { title: '智慧設定檔', description: '工作、遊戲、音樂製作。建立自訂音訊設定並即時切換。完美音效，永遠只需一鍵。' }, keyboardShortcuts: { title: '鍵盤快捷鍵', description: '無需離開鍵盤即可控制一切。自訂靜音、音量和設定檔切換的快捷鍵。最大效率。' }, nativeDesign: { title: '真正 macOS 原生', description: '專為 Mac 打造。無醜陋介面、無系統臃腫、無核心擴展。只有原生 macOS 的完美、乾淨和快速。' }, magicBoost: { title: 'Magic Boost', description: '將安靜的音訊放大至 +12dB 而不失真。再也不用費力聆聽低音量的影片或播客。' }, localApi: { title: '本地 API', description: '透過本地 REST API 以程式化方式控制每個音訊應用程式。自動化音量、靜音和路由 — 適用於 Stream Deck、智慧家居和自訂整合。' } },
    useCases: { title: '為你的工作流程設計', designer: '適合需要在視訊通話時聽音樂的設計師', producer: '混音多個音源的製作人必備', developer: '適合同時處理音樂、文件和站會的開發者', remote: '遠端工作者處理多重通話和內容的必備工具' },
    devices: { headphones: '耳機', speaker: '揚聲器', display: '顯示器', bluetooth: '藍牙', airpods: 'AirPods' },
    comparison: { title: 'MACA vs. 其他音訊工具', subtitle: '看看為什麼數千人選擇了 MACA', maca: 'MACA', others: '其他工具', features: { easySetup: '即時運作', noDrivers: '無需驅動程式/擴展', oneTimePurchase: '一次購買，永久擁有', profiles: '包含音訊設定檔', nativeUI: 'macOS 原生設計', lightweight: '超輕量', multiRoom: '多房間音訊路由' } },
    whyNotOthers: { title: '為什麼不選其他工具？', subtitle: '將 MACA 與熱門替代方案比較', macaPrice: '應用程式內購買', competitors: { soundSource: { name: 'SoundSource', price: '$39', issues: ['昂貴的訂閱模式', '複雜的介面', '需要系統音訊驅動程式'] }, audioHijack: { name: 'Audio Hijack', price: '$64+', issues: ['非常昂貴', '功能過多', '學習曲線陡峭'] } } },
    privacy: { title: '隱私優先', subtitle: '你的資料在 MACA 是安全的', guaranteeTitle: '隱私保證', guaranteeDescription: '我們致力於保護你的隱私和資料安全。', features: { noData: { title: '不傳送資料至雲端', description: '不傳送資料至雲端' }, localProcessing: { title: '所有處理都在你的 Mac 本地完成', description: '所有處理都在你的 Mac 本地完成' }, noCloud: { title: '無雲端儲存或同步', description: '無雲端儲存或同步' }, noTracking: { title: '零追蹤', description: '零追蹤——你的隱私很重要' } }, guarantee: '我們保證你的隱私和資料安全。' },
    testimonials: { title: '使用者怎麼說', subtitle: '聽聽滿意客戶的評價', comingSoon: '即將推出', joinUsers: '加入數千位喜愛 MACA 的 Mac 使用者' },
    pricing: { title: '定價', subtitle: '選擇適合你的方案', free: { title: '免費', price: '$0', features: ['控制最多3個應用程式', '逐應用程式音量', '逐應用程式靜音', '逐應用程式音訊路由', '主音量', '10段等化器', '鍵盤快捷鍵'], cta: '免費下載' }, pro: { title: 'Pro', price: '應用程式內購買', features: ['無限應用程式', '所有免費功能', '無限音訊設定檔', '完整參數等化器', '音訊正規化', '無限等化器預設', '一次付款 • 無訂閱'], cta: '在 App Store 下載', badge: '最受歡迎' } },
    benefits: { noSubscriptions: '無訂閱', noTracking: '無追蹤', noAds: '無廣告', nativeSupport: '原生支援' },
    finalCta: { title: '今天就開始', subtitle: '加入數千位喜愛 MACA 的 Mac 使用者', cta: '在 App Store 下載' },
    footer: { product: '產品', legal: '法律', imprint: '法律資訊', privacy: '隱私政策', terms: '使用條款', support: '支援', tagline: '專業音訊控制，人人適用', copyright: '© 2026 AMX Mediensystem. 保留所有權利。' },
    imprint: { title: '法律資訊', owner: '所有者', address: '地址', contact: '聯絡', responsible: '內容負責人', disclaimer: '免責聲明：所有產品名稱、標誌和品牌均為其各自所有者的財產。' },
    notFound: { title: '找不到頁面', description: '糟糕！你要找的頁面不存在或已被移動。', backHome: '返回首頁', goBack: '返回', helpText: '需要幫助？', faqLink: '造訪我們的常見問題' },
  },
  da: {
    name: 'Dansk',
    headerBadge: '⚡ Din lyd. Perfekt kontrolleret. Øjeblikkeligt.',
    hero: { badge: '⚡ Din lyd. Perfekt kontrolleret. Øjeblikkeligt.', title: 'Endelig har du total lydkontrol', subtitle: 'Styr hver apps lydstyrke uafhængigt. Skift profil på sekunder—lynhurtig til enhver situation.', cta: 'Hent MACA gratis', secondaryCta: 'Se i aktion' },
    problem: { title: 'Lyder det bekendt?', items: ['Spotify overdøver dine Zoom-opkald', 'Spillyde eksploderer mens du streamer', 'YouTube-reklamer vækker hele huset', 'Ingen nem måde at styre app-lydstyrker separat'] },
    solution: { title: 'MACA løser det med ét klik', subtitle: 'Individuel lydstyrkekontrol for hver app. Direkte fra menulinjen. Nativt, hurtigt og smukt enkelt.' },
    features: { title: 'Hvorfor MACA vinder', perAppVolume: { title: 'Lydstyrke per app', description: 'Øjeblikkelig kontrol over hver app. Musik på 30%, opkald på 100%, browser på 50%. Indstil én gang, glem for altid.' }, quickMute: { title: 'Lydløs med ét klik', description: 'Slå enhver app lydløs øjeblikkeligt uden at røre lydstyrken. Perfekt til afbrydelser, reklamer eller uventede opkald.' }, focusMode: { title: 'Fokustilstand', description: 'Forudkonfigureret til over 100 kommunikationsapps (Teams, Discord, Zoom, FaceTime og mere). Slå alle andre apps lydløse med ét klik eller tastaturkommando. Ingen forstyrrende musik under møder.' }, audioProfiles: { title: 'Smarte profiler', description: 'Arbejde. Gaming. Musikproduktion. Opret brugerdefinerede lydopsætninger og skift mellem dem øjeblikkeligt. Din perfekte lyd, altid kun ét klik væk.' }, keyboardShortcuts: { title: 'Tastaturgenveje', description: 'Styr alt uden at løfte hænderne. Tilpassede genveje til lydløs, lydstyrke og profilskift. Maksimal effektivitet.' }, nativeDesign: { title: 'Ægte macOS-nativt', description: 'Bygget udelukkende til Mac. Ingen grimme interfaces, ingen system-bloat, ingen kerneudvidelser. Kun ren, hurtig macOS-perfektion.' }, magicBoost: { title: 'Magic Boost', description: 'Forstærk stille lyd op til +12dB uden forvrængning. Kæmp aldrig igen med at høre stille videoer eller podcasts.' }, localApi: { title: 'Lokal API', description: 'Styr enhver lydapp programmatisk via en lokal REST API. Automatiser lydstyrke, lydløs og routing — perfekt til Stream Deck, smart home og brugerdefinerede integrationer.' } },
    useCases: { title: 'Designet til din arbejdsgang', designer: 'Perfekt til designere der har brug for musik under videoopkald', producer: 'Essentielt for producenter der mikser flere lydkilder', developer: 'Ideelt for udviklere med musik, docs og standups kørende', remote: 'Uundværligt for fjernarbejdere der jonglerer opkald og indhold' },
    devices: { headphones: 'Hovedtelefoner', speaker: 'Højttaler', display: 'Skærm', bluetooth: 'Bluetooth', airpods: 'AirPods' },
    comparison: { title: 'MACA vs. andre lydværktøjer', subtitle: 'Se hvorfor tusinder har skiftet til MACA', maca: 'MACA', others: 'Andre værktøjer', features: { easySetup: 'Virker øjeblikkeligt', noDrivers: 'Ingen drivere/udvidelser', oneTimePurchase: 'Betal én gang, ej for altid', profiles: 'Lydprofiler inkluderet', nativeUI: 'macOS-nativt design', lightweight: 'Ultralet', multiRoom: 'Multi-room audiorouting' } },
    whyNotOthers: { title: 'Hvorfor ikke andre værktøjer?', subtitle: 'Sammenlign MACA med populære alternativer', macaPrice: 'Køb i appen', competitors: { soundSource: { name: 'SoundSource', price: '$39', issues: ['Dyr abonnementsmodel', 'Kompleks grænseflade', 'Kræver system-lyddriver'] }, audioHijack: { name: 'Audio Hijack', price: '$64+', issues: ['Meget dyrt', 'Overvældende funktioner', 'Stejl indlæringskurve'] } } },
    privacy: { title: 'Privatlivet først', subtitle: 'Dine data er sikre med MACA', guaranteeTitle: 'Privatlivsgaranti', guaranteeDescription: 'Vi er forpligtet til at beskytte dit privatliv og datasikkerhed.', features: { noData: { title: 'Ingen data sendes til skyen', description: 'Ingen data sendes til skyen' }, localProcessing: { title: 'Al behandling sker lokalt på din Mac', description: 'Al behandling sker lokalt på din Mac' }, noCloud: { title: 'Ingen skylagring eller synkronisering', description: 'Ingen skylagring eller synkronisering' }, noTracking: { title: 'Nul sporing', description: 'Nul sporing—dit privatliv betyder noget' } }, guarantee: 'Vi garanterer dit privatliv og datasikkerhed.' },
    testimonials: { title: 'Hvad vores brugere siger', subtitle: 'Hør fra tilfredse kunder', comingSoon: 'Kommer snart', joinUsers: 'Slut dig til tusinder af Mac-brugere der elsker MACA' },
    pricing: { title: 'Priser', subtitle: 'Vælg den plan der passer dig', free: { title: 'Gratis', price: '$0', features: ['Styr op til 3 apps', 'Lydstyrke per app', 'Lydløs per app', 'Lydrouting per app', 'Masterlydstyrke', '10-bånds equalizer', 'Tastaturgenveje'], cta: 'Download gratis' }, pro: { title: 'Pro', price: 'Køb i appen', features: ['Ubegrænsede apps', 'Alle gratis-funktioner', 'Ubegrænsede lydprofiler', 'Fuld parametrisk EQ', 'Lydnormalisering', 'Ubegrænsede EQ-forudindstillinger', 'Engangsbetaling • Intet abonnement'], cta: 'Download i App Store', badge: 'Mest populær' } },
    benefits: { noSubscriptions: 'Ingen abonnementer', noTracking: 'Ingen sporing', noAds: 'Ingen reklamer', nativeSupport: 'Nativ support' },
    finalCta: { title: 'Kom i gang i dag', subtitle: 'Slut dig til tusinder af Mac-brugere der elsker MACA', cta: 'Download i App Store' },
    footer: { product: 'Produkt', legal: 'Juridisk', imprint: 'Kolofon', privacy: 'Privatlivspolitik', terms: 'Vilkår for brug', support: 'Support', tagline: 'Professionel lydkontrol for alle', copyright: '© 2026 AMX Mediensystem. Alle rettigheder forbeholdes.' },
    imprint: { title: 'Kolofon', owner: 'Ejer', address: 'Adresse', contact: 'Kontakt', responsible: 'Ansvarlig for indhold', disclaimer: 'Ansvarsfraskrivelse: alle produktnavne, logoer og varemærker tilhører deres respektive ejere.' },
    notFound: { title: 'Side ikke fundet', description: 'Ups! Siden du leder efter findes ikke eller er blevet flyttet.', backHome: 'Tilbage til forsiden', goBack: 'Tilbage', helpText: 'Brug for hjælp?', faqLink: 'Besøg vores FAQ' },
  },
  ko: {
    name: '한국어',
    headerBadge: '⚡ 당신의 오디오. 완벽하게 제어. 즉시.',
    hero: { badge: '⚡ 당신의 오디오. 완벽하게 제어. 즉시.', title: '드디어, 완전한 오디오 제어', subtitle: '각 앱의 볼륨을 독립적으로 제어하세요. 프로필을 몇 초 만에 전환—모든 상황에 맞는 빠른 제어.', cta: 'MACA 무료 다운로드', secondaryCta: '실제 동작 보기' },
    problem: { title: '익숙하게 들리나요?', items: ['Spotify가 Zoom 통화를 덮어버림', '게임 소리가 스트리밍 중 폭발함', 'YouTube 광고가 온 집을 깨움', '앱 볼륨을 개별적으로 제어할 간단한 방법 없음'] },
    solution: { title: 'MACA가 클릭 한 번으로 해결', subtitle: '각 앱을 위한 개별 볼륨 제어. 메뉴 바에서 바로. 네이티브, 빠르고 아름답게 심플.' },
    features: { title: 'MACA를 선택해야 하는 이유', perAppVolume: { title: '앱별 볼륨 제어', description: '각 앱에 대한 즉각적인 제어. 음악 30%, 통화 100%, 브라우저 50%. 한 번 설정하면 영원히 잊으세요.' }, quickMute: { title: '원클릭 음소거', description: '볼륨을 건드리지 않고 어떤 앱이든 즉시 음소거. 중단, 광고 또는 예기치 않은 통화에 완벽.' }, focusMode: { title: '집중 모드', description: '100개 이상의 커뮤니케이션 앱(Teams, Discord, Zoom, FaceTime 등)에 미리 구성. 한 번의 클릭이나 키보드 단축키로 다른 모든 앱 음소거. 회의 중 방해 음악 없음.' }, audioProfiles: { title: '스마트 프로필', description: '작업. 게임. 음악 제작. 맞춤 오디오 설정을 만들고 즉시 전환. 완벽한 사운드, 항상 클릭 한 번.' }, keyboardShortcuts: { title: '키보드 단축키', description: '손을 떼지 않고 모든 것을 제어. 음소거, 볼륨 및 프로필 전환을 위한 맞춤 단축키. 최대 효율성.' }, nativeDesign: { title: '진정한 macOS 네이티브', description: 'Mac 전용으로 제작. 보기 흉한 인터페이스 없음, 시스템 부풀림 없음, 커널 확장 없음. 깨끗하고 빠른 macOS 완벽함만.' }, magicBoost: { title: 'Magic Boost', description: '왜곡 없이 조용한 오디오를 +12dB까지 증폭. 조용한 비디오나 팟캐스트를 듣느라 애쓸 필요 없음.' }, localApi: { title: '로컬 API', description: '로컬 REST API를 통해 모든 오디오 앱을 프로그래밍 방식으로 제어. 볼륨, 음소거, 라우팅 자동화 — Stream Deck, 스마트홈 및 맞춤 통합에 완벽.' } },
    useCases: { title: '워크플로를 위한 설계', designer: '화상 통화 중 음악이 필요한 디자이너에 완벽', producer: '여러 오디오 소스를 믹싱하는 프로듀서에 필수', developer: '음악, 문서, 스탠드업이 동시에 실행되는 개발자에 이상적', remote: '통화와 콘텐츠를 저글링하는 원격 근무자에 필수불가결' },
    devices: { headphones: '헤드폰', speaker: '스피커', display: '디스플레이', bluetooth: '블루투스', airpods: 'AirPods' },
    comparison: { title: 'MACA vs. 다른 오디오 도구', subtitle: '수천 명이 MACA로 전환한 이유를 확인하세요', maca: 'MACA', others: '다른 도구', features: { easySetup: '즉시 작동', noDrivers: '드라이버/확장 없음', oneTimePurchase: '한 번 구매, 영원히 소유', profiles: '오디오 프로필 포함', nativeUI: 'macOS 네이티브 디자인', lightweight: '초경량', multiRoom: '멀티룸 오디오 라우팅' } },
    whyNotOthers: { title: '왜 다른 도구가 아닌가요?', subtitle: 'MACA를 인기 대안과 비교하세요', macaPrice: '인앱 구매', competitors: { soundSource: { name: 'SoundSource', price: '$39', issues: ['비싼 구독 모델', '복잡한 인터페이스', '시스템 오디오 드라이버 필요'] }, audioHijack: { name: 'Audio Hijack', price: '$64+', issues: ['매우 비쌈', '압도적인 기능', '가파른 학습 곡선'] } } },
    privacy: { title: '개인정보 보호 최우선', subtitle: 'MACA에서 당신의 데이터는 안전합니다', guaranteeTitle: '개인정보 보장', guaranteeDescription: '우리는 당신의 개인정보와 데이터 보안을 보호하기 위해 최선을 다합니다.', features: { noData: { title: '클라우드로 데이터 전송 없음', description: '클라우드로 데이터 전송 없음' }, localProcessing: { title: '모든 처리는 Mac에서 로컬로 수행', description: '모든 처리는 Mac에서 로컬로 수행' }, noCloud: { title: '클라우드 저장 또는 동기화 없음', description: '클라우드 저장 또는 동기화 없음' }, noTracking: { title: '제로 추적', description: '제로 추적—당신의 개인정보가 중요합니다' } }, guarantee: '우리는 당신의 개인정보와 데이터 보안을 보장합니다.' },
    testimonials: { title: '사용자들의 평가', subtitle: '만족한 고객들의 목소리', comingSoon: '곧 출시', joinUsers: 'MACA를 사랑하는 수천 명의 Mac 사용자와 함께하세요' },
    pricing: { title: '가격', subtitle: '당신에게 맞는 플랜을 선택하세요', free: { title: '무료', price: '$0', features: ['최대 3개 앱 제어', '앱별 볼륨', '앱별 음소거', '앱별 오디오 라우팅', '마스터 볼륨', '10밴드 이퀄라이저', '키보드 단축키'], cta: '무료 다운로드' }, pro: { title: 'Pro', price: '인앱 구매', features: ['무제한 앱', '모든 무료 기능', '무제한 오디오 프로필', '완전한 파라메트릭 EQ', '오디오 노멀라이저', '무제한 EQ 프리셋', '일회 결제 • 구독 없음'], cta: 'App Store에서 다운로드', badge: '가장 인기' } },
    benefits: { noSubscriptions: '구독 없음', noTracking: '추적 없음', noAds: '광고 없음', nativeSupport: '네이티브 지원' },
    finalCta: { title: '오늘 시작하세요', subtitle: 'MACA를 사랑하는 수천 명의 Mac 사용자와 함께하세요', cta: 'App Store에서 다운로드' },
    footer: { product: '제품', legal: '법적 사항', imprint: '법적 정보', privacy: '개인정보 처리방침', terms: '이용약관', support: '지원', tagline: '모두를 위한 전문 오디오 제어', copyright: '© 2026 AMX Mediensystem. 모든 권리 보유.' },
    imprint: { title: '법적 정보', owner: '소유자', address: '주소', contact: '연락처', responsible: '콘텐츠 책임자', disclaimer: '면책 조항: 모든 제품명, 로고 및 브랜드는 각 소유자의 재산입니다.' },
    notFound: { title: '페이지를 찾을 수 없습니다', description: '이런! 찾으시는 페이지가 존재하지 않거나 이동되었습니다.', backHome: '홈으로 돌아가기', goBack: '뒤로', helpText: '도움이 필요하세요?', faqLink: 'FAQ 방문하기' },
  },
  nb: {
    name: 'Norsk Bokmål',
    headerBadge: '⚡ Din lyd. Perfekt kontrollert. Umiddelbart.',
    hero: { badge: '⚡ Din lyd. Perfekt kontrollert. Umiddelbart.', title: 'Endelig har du total lydkontroll', subtitle: 'Kontroller volumet til hver app uavhengig. Bytt profiler på sekunder—lynrask for enhver situasjon.', cta: 'Last ned MACA gratis', secondaryCta: 'Se i aksjon' },
    problem: { title: 'Høres det kjent ut?', items: ['Spotify overdøver Zoom-samtalene dine', 'Spillyder eksploderer mens du strømmer', 'YouTube-reklamer vekker hele huset', 'Ingen enkel måte å styre app-volumer separat'] },
    solution: { title: 'MACA løser det med ett klikk', subtitle: 'Individuell volumkontroll for hver app. Direkte fra menylinjen. Nativt, raskt og vakkert enkelt.' },
    features: { title: 'Hvorfor MACA vinner', perAppVolume: { title: 'Volum per app', description: 'Øyeblikkelig kontroll over hver app. Musikk på 30%, samtaler på 100%, nettleser på 50%. Still inn én gang, glem for alltid.' }, quickMute: { title: 'Demp med ett klikk', description: 'Demp enhver app øyeblikkelig uten å røre volumet. Perfekt for avbrytelser, reklamer eller uventede samtaler.' }, focusMode: { title: 'Fokusmodus', description: 'Forhåndskonfigurert for over 100 kommunikasjonsapper (Teams, Discord, Zoom, FaceTime og mer). Demp alle andre apper med ett klikk eller hurtigtast. Ingen forstyrrende musikk under møter.' }, audioProfiles: { title: 'Smarte profiler', description: 'Jobb. Gaming. Musikkproduksjon. Lag egendefinerte lydoppsett og bytt mellom dem øyeblikkelig. Din perfekte lyd, alltid bare ett klikk unna.' }, keyboardShortcuts: { title: 'Hurtigtaster', description: 'Kontroller alt uten å løfte hendene. Tilpassede hurtigtaster for demping, volum og profilbytte. Maksimal effektivitet.' }, nativeDesign: { title: 'Ekte macOS-nativt', description: 'Bygget utelukkende for Mac. Ingen stygge grensesnitt, ingen systembloat, ingen kjerneutvidelser. Bare ren, rask macOS-perfeksjon.' }, magicBoost: { title: 'Magic Boost', description: 'Forsterke stille lyd opp til +12dB uten forvrengning. Sliter aldri igjen med å høre stille videoer eller podcaster.' }, localApi: { title: 'Lokalt API', description: 'Kontroller enhver lydapp programmatisk via et lokalt REST API. Automatiser volum, demping og routing — perfekt for Stream Deck, smarthjem og egne integrasjoner.' } },
    useCases: { title: 'Designet for arbeidsflyten din', designer: 'Perfekt for designere som trenger musikk under videosamtaler', producer: 'Essensielt for produsenter som mikser flere lydkilder', developer: 'Ideelt for utviklere med musikk, docs og standups kjørende', remote: 'Uunnværlig for fjernarbeidere som sjonglerer samtaler og innhold' },
    devices: { headphones: 'Hodetelefoner', speaker: 'Høyttaler', display: 'Skjerm', bluetooth: 'Bluetooth', airpods: 'AirPods' },
    comparison: { title: 'MACA vs. andre lydverktøy', subtitle: 'Se hvorfor tusenvis har byttet til MACA', maca: 'MACA', others: 'Andre verktøy', features: { easySetup: 'Fungerer øyeblikkelig', noDrivers: 'Ingen drivere/utvidelser', oneTimePurchase: 'Betal én gang, eie for alltid', profiles: 'Lydprofiler inkludert', nativeUI: 'macOS-nativt design', lightweight: 'Ultralett', multiRoom: 'Multi-room audioverking' } },
    whyNotOthers: { title: 'Hvorfor ikke andre verktøy?', subtitle: 'Sammenlign MACA med populære alternativer', macaPrice: 'Kjøp i appen', competitors: { soundSource: { name: 'SoundSource', price: '$39', issues: ['Dyr abonnementsmodell', 'Komplekst grensesnitt', 'Krever system-lyddriver'] }, audioHijack: { name: 'Audio Hijack', price: '$64+', issues: ['Veldig dyrt', 'Overveldende funksjoner', 'Bratt læringskurve'] } } },
    privacy: { title: 'Personvern først', subtitle: 'Dine data er trygge med MACA', guaranteeTitle: 'Personverngaranti', guaranteeDescription: 'Vi er forpliktet til å beskytte ditt personvern og datasikkerhet.', features: { noData: { title: 'Ingen data sendes til skyen', description: 'Ingen data sendes til skyen' }, localProcessing: { title: 'All behandling skjer lokalt på din Mac', description: 'All behandling skjer lokalt på din Mac' }, noCloud: { title: 'Ingen skylagring eller synkronisering', description: 'Ingen skylagring eller synkronisering' }, noTracking: { title: 'Null sporing', description: 'Null sporing—ditt personvern betyr noe' } }, guarantee: 'Vi garanterer ditt personvern og datasikkerhet.' },
    testimonials: { title: 'Hva brukerne våre sier', subtitle: 'Hør fra fornøyde kunder', comingSoon: 'Kommer snart', joinUsers: 'Bli med tusenvis av Mac-brukere som elsker MACA' },
    pricing: { title: 'Priser', subtitle: 'Velg planen som passer deg', free: { title: 'Gratis', price: '$0', features: ['Kontroller opptil 3 apper', 'Volum per app', 'Demp per app', 'Lydrouting per app', 'Mastervolum', '10-bånds equalizer', 'Hurtigtaster'], cta: 'Last ned gratis' }, pro: { title: 'Pro', price: 'Kjøp i appen', features: ['Ubegrensede apper', 'Alle gratisfunksjoner', 'Ubegrensede lydprofiler', 'Full parametrisk EQ', 'Lydnormalisering', 'Ubegrensede EQ-forhåndsinnstillinger', 'Engangsbetaling • Ingen abonnement'], cta: 'Last ned i App Store', badge: 'Mest populær' } },
    benefits: { noSubscriptions: 'Ingen abonnementer', noTracking: 'Ingen sporing', noAds: 'Ingen reklamer', nativeSupport: 'Nativ støtte' },
    finalCta: { title: 'Kom i gang i dag', subtitle: 'Bli med tusenvis av Mac-brukere som elsker MACA', cta: 'Last ned i App Store' },
    footer: { product: 'Produkt', legal: 'Juridisk', imprint: 'Kolofon', privacy: 'Personvernerklæring', terms: 'Bruksvilkår', support: 'Støtte', tagline: 'Profesjonell lydkontroll for alle', copyright: '© 2026 AMX Mediensystem. Alle rettigheter forbeholdt.' },
    imprint: { title: 'Kolofon', owner: 'Eier', address: 'Adresse', contact: 'Kontakt', responsible: 'Ansvarlig for innhold', disclaimer: 'Ansvarsfraskrivelse: alle produktnavn, logoer og varemerker tilhører sine respektive eiere.' },
    notFound: { title: 'Side ikke funnet', description: 'Oops! Siden du leter etter finnes ikke eller har blitt flyttet.', backHome: 'Tilbake til forsiden', goBack: 'Tilbake', helpText: 'Trenger du hjelp?', faqLink: 'Besøk vår FAQ' },
  },
};

export const languageNames: Record<Language, string> = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  it: 'Italiano',
  ja: '日本語',
  'zh-Hans': '简体中文',
  'zh-Hant': '繁體中文',
  ar: 'العربية',
  ru: 'Русский',
  nl: 'Nederlands',
  tr: 'Türkçe',
  sv: 'Svenska',
  da: 'Dansk',
  ko: '한국어',
  nb: 'Norsk Bokmål',
};