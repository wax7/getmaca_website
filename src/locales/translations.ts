export type Language = 'en' | 'de' | 'es' | 'fr' | 'it' | 'pt' | 'ja' | 'zh';

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
  fr_DUPLICATE_SECTION_REMOVED: {
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
      title: 'Parece Familiar?',
      items: [
        'Spotify abafa sus llamadas do Zoom',
        'Sons do jogo explotan mientras transmites',
        'Anúncios do YouTube despiertan a toda la casa',
        'Nenhuma maneira fácil de controlar volumes de apps separadamente',
      ],
    },
    solution: {
      title: 'MACA Resolve Isso em Um Clique',
      subtitle: 'Controle de volume individual para cada app. Direto da barra de menus. Nativo, rápido e belamente simples.',
    },
    features: {
      title: 'Por Que MACA Vence',
      perAppVolume: {
        title: 'Controles de Volume por App',
        description: 'Controle instantâneo sobre cada app. Música a 30%, chamadas a 100%, navegador a 50%. Configure uma vez, esqueça para sempre.',
      },
      quickMute: {
        title: 'Silenciar com Um Clic',
        description: 'Silencie qualquer app instantaneamente sem tocar no volume. Perfeito para interrupções, anúncios ou chamadas inesperadas.',
      },
      focusMode: {
        title: 'Modo Foco',
        description: 'Pré-configurado para mais de 100 aplicativos de comunicação (Teams, Discord, Zoom, FaceTime e mais). Silencie todos os outros aplicativos com um clique ou atalho de teclado. Sem música que distraía durante reuniões.',
      },
      audioProfiles: {
        title: 'Perfis Inteligentes',
        description: 'Work. Gaming. Produção Musical. Crie configurações de audio personalizadas e alterne entre elas instantaneamente. Seu som perfeito, sempre a um clique.',
      },
      keyboardShortcuts: {
        title: 'Poder do Teclado',
        description: 'Controle tudo sem levantar as mãos. Atalhos personalizados para silenciar, volume e troca de perfis. Máxima eficiência.',
      },
      nativeDesign: {
        title: 'Verdadeiro macOS Nativo',
        description: 'Construído exclusivamente para Mac. Sem interfaces feias, sem bloat do sistema, sem extensões do kernel. Apenas perfeição macOS nativa, limpa e rápida.',
      },
      magicBoost: {
        title: 'Magic Boost',
        description: 'Amplifique áudio silencioso até +12dB sem distorção. Nunca mais se esforce para ouvir vídeos ou podcasts baixos.',
      },
    },
    useCases: {
      title: 'Projetado para seu Fluxo de Trabalho',
      designer: 'Perfecto para designers que precisam de música durante videochamadas',
      producer: 'Essencial para produtores mixando múltiplas fontes de audio',
      developer: 'Ideal para desenvolvedores com música, docs e standups rodando',
      remote: 'Indispensável para trabalhadores remotos fazendo malabarismos com chamadas e conteúdo',
    },
    devices: {
      headphones: 'Fones de Ouvido',
      speaker: 'Alto-falante',
      display: 'Tela',
      bluetooth: 'Bluetooth',
      airpods: 'AirPods',
    },
    comparison: {
      title: 'MACA vs. Outras Ferramentas de Audio',
      subtitle: 'Veja por que milhares mudaram para MACA',
      maca: 'MACA',
      others: 'Outras Ferramentas',
      features: {
        easySetup: 'Funciona instantaneamente',
        noDrivers: 'Sem drivers/extensões',
        oneTimePurchase: 'Pague uma vez, possua para sempre',
        profiles: 'Perfis de audio incluídos',
        nativeUI: 'Design macOS nativo',
        lightweight: 'Ultra leve',
      },
    },
    whyNotOthers: {
      title: 'Por que não outros ferramentas?',
      subtitle: 'Compare MACA com alternativas populares',
      macaPrice: '$14.99',
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
      title: 'Privacidade em primeiro lugar',
      subtitle: 'Seus dados estão seguros com MACA',
      guaranteeTitle: 'Garantia de Privacidade',
      guaranteeDescription: 'Estamos comprometidos em proteger sua privacidade e segurança de dados.',
      features: {
        noData: {
          title: 'Nenhum dado é enviado para a nuvem',
          description: 'Nenhum dado é enviado para a nuvem',
        },
        localProcessing: {
          title: 'Toda a processamento é feito localmente no seu Mac',
          description: 'Toda a processamento é feito localmente no seu Mac',
        },
        noCloud: {
          title: 'Nenhum armazenamento ou sincronização na nuvem',
          description: 'Nenhum armazenamento ou sincronização na nuvem',
        },
        noTracking: {
          title: 'Zero rastreamento',
          description: 'Zero rastreamento—sua privacidade importa',
        },
      },
      guarantee: 'Garantimos sua privacidade e segurança de dados.',
    },
    testimonials: {
      title: 'O que nossos usuários dizem',
      subtitle: 'Ouça os depoimentos de clientes satisfeitos',
      comingSoon: 'Em breve',
      joinUsers: 'Junte-se a milhares de usuários de Mac que amam o MACA',
    },
    pricing: {
      title: 'Preços',
      subtitle: 'Escolha o plano que melhor se adapta a você',
      free: {
        title: 'Gratuito',
        price: '$0',
        features: ['Controle de volume básico por aplicativo', 'Silenciamento rápido', 'Modo foco'],
        cta: 'Baixar Grátis',
      },
      pro: {
        title: 'Pro',
        price: 'Compra no app',
        features: ['Todas as funcionalidades do Gratuito', 'Perfis de áudio', 'Magic Boost'],
        cta: 'Baixar no App Store',
        badge: 'Mais Popular',
      },
    },
    benefits: {
      noSubscriptions: 'Sem Assinaturas',
      noTracking: 'Sem Rastreamento',
      noAds: 'Sem Anúncios',
      nativeSupport: 'Suporte Nativo',
    },
    finalCta: {
      title: 'Comece Hoje',
      subtitle: 'Junte-se a milhares de usuários de Mac que amam o MACA',
      cta: 'Baixar na App Store',
    },
    footer: {
      product: 'Produto',
      legal: 'Legal',
      imprint: 'Informações Legais',
      privacy: 'Política de Privacidade',
      terms: 'Termos de Serviço',
      support: 'Suporte',
      tagline: 'Controle de áudio profissional para todos',
      copyright: '© 2026 AMX Mediensystem. Todos os direitos reservados.',
    },
    imprint: {
      title: 'Informações Legais',
      owner: 'Proprietário',
      address: 'Endereço',
      contact: 'Contato',
      responsible: 'Responsável pelo conteúdo',
      disclaimer: 'Aviso: Todos os nomes de produtos, logotipos e marcas são propriedade de seus respectivos donos.',
    },
    notFound: {
      title: 'Page non trouvée',
      description: 'Oups ! La page que vous recherchez n\'existe pas ou a été déplacée.',
      backHome: 'Retour à l\'accueil',
      goBack: 'Retour',
      helpText: 'Besoin d\'aide ?',
      faqLink: 'Consultez notre FAQ',
    },
  }, // END OF DUPLICATE SECTION */
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
  pt: {
    name: 'Português',
    headerBadge: '⚡ Seu Áudio. Perfeitamente Controlado. Instantaneamente.',
    hero: {
      badge: '⚡ Seu Áudio. Perfeitamente Controlado. Instantaneamente.',
      title: 'Finalmente, você tem controle total do áudio',
      subtitle: 'Controle cada app de forma independente. Mude entre perfis em segundos. Controle instantâneo para cada situação.',
      cta: 'Obter MACA Grátis',
      secondaryCta: 'Ver em Ação',
    },
    problem: {
      title: 'Parece Familiar?',
      items: [
        'Spotify abafa suas chamadas do Zoom',
        'Sons do jogo explodem enquanto você transmite',
        'Anúncios do YouTube acordam a casa toda',
        'Nenhuma maneira fácil de controlar volumes de apps separadamente',
      ],
    },
    solution: {
      title: 'MACA Resolve Isso em Um Clique',
      subtitle: 'Controle de volume individual para cada app. Direto da barra de menus. Nativo, rápido e belamente simples.',
    },
    features: {
      title: 'Por Que MACA Vence',
      perAppVolume: {
        title: 'Controles de Volume por App',
        description: 'Controle instantâneo sobre cada app. Música a 30%, chamadas a 100%, navegador a 50%. Configure uma vez, esqueça para sempre.',
      },
      quickMute: {
        title: 'Silenciar com Um Clic',
        description: 'Silencie qualquer app instantaneamente sem tocar no volume. Perfeito para interrupções, anúncios ou chamadas inesperadas.',
      },
      focusMode: {
        title: 'Modo Foco',
        description: 'Pré-configurado para mais de 100 aplicativos de comunicação (Teams, Discord, Zoom, FaceTime e mais). Silencie todos os outros aplicativos com um clique ou atalho de teclado. Sem música que distraía durante reuniões.',
      },
      audioProfiles: {
        title: 'Perfis Inteligentes',
        description: 'Trabalho. Gaming. Produção Musical. Crie configurações de áudio personalizadas e alterne entre elas instantaneamente. Seu som perfeito, sempre a um clique.',
      },
      keyboardShortcuts: {
        title: 'Poder do Teclado',
        description: 'Controle tudo sem levantar as mãos. Atalhos personalizados para silenciar, volume e troca de perfis. Máxima eficiência.',
      },
      nativeDesign: {
        title: 'Verdadeiro macOS Nativo',
        description: 'Construído exclusivamente para Mac. Sem interfaces feias, sem bloat do sistema, sem extensões do kernel. Apenas perfeição macOS nativa, limpa e rápida.',
      },
      magicBoost: {
        title: 'Magic Boost',
        description: 'Amplifique áudio silencioso até +12dB sem distorção. Nunca mais se esforce para ouvir vídeos ou podcasts baixos.',
      },
    },
    useCases: {
      title: 'Projetado para Seu Fluxo de Trabalho',
      designer: 'Perfeito para designers que precisam de música durante videochamadas',
      producer: 'Essencial para produtores mixando múltiplas fontes de áudio',
      developer: 'Ideal para desenvolvedores com música, docs e standups rodando',
      remote: 'Indispensável para trabalhadores remotos fazendo malabarismo com chamadas e conteúdo',
    },
    devices: {
      headphones: 'Fones de Ouvido',
      speaker: 'Alto-falante',
      display: 'Tela',
      bluetooth: 'Bluetooth',
      airpods: 'AirPods',
    },
    comparison: {
      title: 'MACA vs. Outras Ferramentas de Áudio',
      subtitle: 'Veja por que milhares mudaram para MACA',
      maca: 'MACA',
      others: 'Outras Ferramentas',
      features: {
        easySetup: 'Funciona instantaneamente',
        noDrivers: 'Sem drivers/extensões',
        oneTimePurchase: 'Pague uma vez, possua para sempre',
        profiles: 'Perfis de áudio incluídos',
        nativeUI: 'Design macOS nativo',
        lightweight: 'Ultra leve',
      },
    },
    whyNotOthers: {
      title: 'Por que não outros ferramentas?',
      subtitle: 'Compare MACA com alternativas populares',
      macaPrice: 'Compra in-app',
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
      title: 'Privacidade em primeiro lugar',
      subtitle: 'Seus dados estão seguros com MACA',
      guaranteeTitle: 'Garantia de Privacidade',
      guaranteeDescription: 'Estamos comprometidos em proteger sua privacidade e segurança de dados.',
      features: {
        noData: {
          title: 'Nenhum dado é enviado para a nuvem',
          description: 'Nenhum dado é enviado para a nuvem',
        },
        localProcessing: {
          title: 'Toda a processamento é feito localmente no seu Mac',
          description: 'Toda a processamento é feito localmente no seu Mac',
        },
        noCloud: {
          title: 'Nenhum armazenamento ou sincronização na nuvem',
          description: 'Nenhum armazenamento ou sincronização na nuvem',
        },
        noTracking: {
          title: 'Zero rastreamento',
          description: 'Zero rastreamento—sua privacidade importa',
        },
      },
      guarantee: 'Garantimos sua privacidade e segurança de dados.',
    },
    testimonials: {
      title: 'O que nossos usuários dizem',
      subtitle: 'Ouça os depoimentos de clientes satisfeitos',
      comingSoon: 'Em breve',
      joinUsers: 'Junte-se a milhares de usuários de Mac que amam o MACA',
    },
    pricing: {
      title: 'Preços',
      subtitle: 'Escolha o plano que melhor se adapta a você',
      free: {
        title: 'Gratuito',
        price: '$0',
        features: ['Controle de volume básico por aplicativo', 'Silenciamento rápido', 'Modo foco'],
        cta: 'Baixar Grátis',
      },
      pro: {
        title: 'Pro',
        price: 'Compra no app',
        features: ['Todas as funcionalidades do Gratuito', 'Perfis de áudio', 'Magic Boost'],
        cta: 'Baixar no App Store',
        badge: 'Mais Popular',
      },
    },
    benefits: {
      noSubscriptions: 'Sem Assinaturas',
      noTracking: 'Sem Rastreamento',
      noAds: 'Sem Anúncios',
      nativeSupport: 'Suporte Nativo',
    },
    finalCta: {
      title: 'Comece Hoje',
      subtitle: 'Junte-se a milhares de usuários de Mac que amam o MACA',
      cta: 'Baixar na App Store',
    },
    footer: {
      product: 'Produto',
      legal: 'Legal',
      imprint: 'Informações Legais',
      privacy: 'Política de Privacidade',
      terms: 'Termos de Serviço',
      support: 'Suporte',
      tagline: 'Controle de áudio profissional para todos',
      copyright: '© 2026 AMX Mediensystem. Todos os direitos reservados.',
    },
    imprint: {
      title: 'Informações Legais',
      owner: 'Proprietário',
      address: 'Endereço',
      contact: 'Contato',
      responsible: 'Responsável pelo conteúdo',
      disclaimer: 'Aviso: Todos os nomes de produtos, logotipos e marcas são propriedade de seus respectivos donos.',
    },
    notFound: {
      title: 'Página não encontrada',
      description: 'Ops! A página que você procura não existe ou foi movida.',
      backHome: 'Voltar ao início',
      goBack: 'Voltar',
      helpText: 'Precisa de ajuda?',
      faqLink: 'Visite nosso FAQ',
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
  zh: {
    name: '中文',
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
};

export const languageNames: Record<Language, string> = {
  en: 'English',
  de: 'Deutsch',
  es: 'Español',
  fr: 'Français',
  it: 'Italiano',
  pt: 'Português',
  ja: '日本語',
  zh: '中文',
};