import { Language } from './translations';

export interface HomeSectionTranslations {
  appMockup: {
    title: string;
    subtitle: string;
  };
  allDevices: {
    title: string;
    subtitle: string;
  };
  faqTitle: string;
  statOneClick: string;
  statOneClickLabel: string;
  statApps: string;
  statAppsLabel: string;
}

export const homeSectionTranslations: Partial<Record<Language, HomeSectionTranslations>> & { en: HomeSectionTranslations } = {
  en: {
    appMockup: {
      title: 'See MACA in Action',
      subtitle: 'Discover all features in real app screenshots. From individual volume control to Focus Mode.',
    },
    allDevices: {
      title: 'One System. All Devices.',
      subtitle: 'MACA seamlessly connects with all your audio devices. Whether headphones, speakers, monitors, or AirPods\u2014full control over every device.',
    },
    faqTitle: 'Frequently Asked Questions',
    statOneClick: '1 Click',
    statOneClickLabel: 'Instant Control',
    statApps: '\u221e Apps',
    statAppsLabel: 'No Limits',
  },
  de: {
    appMockup: {
      title: 'Sehen Sie MACA in Aktion',
      subtitle: 'Entdecken Sie alle Features in echten Screenshots der App. Von individueller Lautst\u00e4rkeregelung bis hin zum Fokus-Modus.',
    },
    allDevices: {
      title: 'Ein System. Alle Ger\u00e4te.',
      subtitle: 'MACA verbindet sich nahtlos mit all Ihren Audio-Ger\u00e4ten. Egal ob Kopfh\u00f6rer, Lautsprecher, Monitor oder AirPods \u2013 volle Kontrolle \u00fcber jedes Ger\u00e4t.',
    },
    faqTitle: 'H\u00e4ufig gestellte Fragen',
    statOneClick: '1 Klick',
    statOneClickLabel: 'Sofortige Kontrolle',
    statApps: '\u221e Apps',
    statAppsLabel: 'Keine Grenzen',
  },
  es: {
    appMockup: {
      title: 'Vea MACA en Acci\u00f3n',
      subtitle: 'Descubre todas las funciones en capturas reales de la aplicaci\u00f3n. Desde control de volumen individual hasta el modo de enfoque.',
    },
    allDevices: {
      title: 'Un Sistema. Todos los Dispositivos.',
      subtitle: 'MACA se conecta perfectamente con todos tus dispositivos de audio. Ya sean auriculares, altavoces, monitores o AirPods: control total sobre cada dispositivo.',
    },
    faqTitle: 'Preguntas Frecuentes',
    statOneClick: '1 Clic',
    statOneClickLabel: 'Control Instant\u00e1neo',
    statApps: '\u221e Apps',
    statAppsLabel: 'Sin L\u00edmites',
  },
  fr: {
    appMockup: {
      title: 'Voyez MACA en Action',
      subtitle: 'D\u00e9couvrez toutes les fonctionnalit\u00e9s dans de vraies captures d\u2019\u00e9cran de l\u2019application. Du contr\u00f4le de volume individuel au mode focus.',
    },
    allDevices: {
      title: 'Un Syst\u00e8me. Tous les Appareils.',
      subtitle: 'MACA se connecte parfaitement \u00e0 tous vos appareils audio. Qu\u2019il s\u2019agisse de casques, haut-parleurs, moniteurs ou AirPods\u2014contr\u00f4le total sur chaque appareil.',
    },
    faqTitle: 'Questions Fr\u00e9quentes',
    statOneClick: '1 Clic',
    statOneClickLabel: 'Contr\u00f4le Instantan\u00e9',
    statApps: '\u221e Apps',
    statAppsLabel: 'Sans Limites',
  },
  it: {
    appMockup: {
      title: 'Vedi MACA in Azione',
      subtitle: 'Scopri tutte le funzionalit\u00e0 in screenshot reali dell\u2019app. Dal controllo del volume individuale alla modalit\u00e0 focus.',
    },
    allDevices: {
      title: 'Un Sistema. Tutti i Dispositivi.',
      subtitle: 'MACA si connette perfettamente con tutti i tuoi dispositivi audio. Che si tratti di cuffie, altoparlanti, monitor o AirPods: controllo completo su ogni dispositivo.',
    },
    faqTitle: 'Domande Frequenti',
    statOneClick: '1 Clic',
    statOneClickLabel: 'Controllo Istantaneo',
    statApps: '\u221e Apps',
    statAppsLabel: 'Senza Limiti',
  },
  ja: {
    appMockup: {
      title: 'MACA\u306e\u52d5\u4f5c\u3092\u898b\u308b',
      subtitle: '\u30a2\u30d7\u30ea\u306e\u5b9f\u969b\u306e\u30b9\u30af\u30ea\u30fc\u30f3\u30b7\u30e7\u30c3\u30c8\u3067\u3059\u3079\u3066\u306e\u6a5f\u80fd\u3092\u767a\u898b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u500b\u5225\u97f3\u91cf\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u304b\u3089\u30d5\u30a9\u30fc\u30ab\u30b9\u30e2\u30fc\u30c9\u307e\u3067\u3002',
    },
    allDevices: {
      title: '1\u3064\u306e\u30b7\u30b9\u30c6\u30e0\u3002\u3059\u3079\u3066\u306e\u30c7\u30d0\u30a4\u30b9\u3002',
      subtitle: 'MACA\u306f\u3059\u3079\u3066\u306e\u30aa\u30fc\u30c7\u30a3\u30aa\u30c7\u30d0\u30a4\u30b9\u3068\u30b7\u30fc\u30e0\u30ec\u30b9\u306b\u63a5\u7d9a\u3057\u307e\u3059\u3002\u30d8\u30c3\u30c9\u30d5\u30a9\u30f3\u3001\u30b9\u30d4\u30fc\u30ab\u30fc\u3001\u30e2\u30cb\u30bf\u30fc\u3001AirPods\u306a\u3069\u3001\u3059\u3079\u3066\u306e\u30c7\u30d0\u30a4\u30b9\u3092\u5b8c\u5168\u306b\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3002',
    },
    faqTitle: '\u3088\u304f\u3042\u308b\u8cea\u554f',
    statOneClick: '\u30ef\u30f3\u30af\u30ea\u30c3\u30af',
    statOneClickLabel: '\u5373\u5ea7\u306b\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb',
    statApps: '\u221e Apps',
    statAppsLabel: '\u7121\u5236\u9650',
  },
  ar: {
    appMockup: {
      title: '\u0634\u0627\u0647\u062f MACA \u0623\u062b\u0646\u0627\u0621 \u0627\u0644\u0639\u0645\u0644',
      subtitle: '\u0627\u0643\u062a\u0634\u0641 \u062c\u0645\u064a\u0639 \u0627\u0644\u0645\u064a\u0632\u0627\u062a \u0641\u064a \u0644\u0642\u0637\u0627\u062a \u0634\u0627\u0634\u0629 \u062d\u0642\u064a\u0642\u064a\u0629 \u0644\u0644\u062a\u0637\u0628\u064a\u0642. \u0645\u0646 \u0627\u0644\u062a\u062d\u0643\u0645 \u0628\u0627\u0644\u0635\u0648\u062a \u0627\u0644\u0641\u0631\u062f\u064a \u0625\u0644\u0649 \u0648\u0636\u0639 \u0627\u0644\u062a\u0631\u0643\u064a\u0632.',
    },
    allDevices: {
      title: '\u0646\u0638\u0627\u0645 \u0648\u0627\u062d\u062f. \u062c\u0645\u064a\u0639 \u0627\u0644\u0623\u062c\u0647\u0632\u0629.',
      subtitle: '\u064a\u062a\u0635\u0644 MACA \u0628\u0633\u0644\u0627\u0633\u0629 \u0628\u062c\u0645\u064a\u0639 \u0623\u062c\u0647\u0632\u0629 \u0627\u0644\u0635\u0648\u062a. \u0633\u0648\u0627\u0621 \u0643\u0627\u0646\u062a \u0633\u0645\u0627\u0639\u0627\u062a \u0631\u0623\u0633 \u0623\u0648 \u0645\u0643\u0628\u0631\u0627\u062a \u0635\u0648\u062a \u0623\u0648 \u0634\u0627\u0634\u0627\u062a \u0623\u0648 AirPods \u2014 \u062a\u062d\u0643\u0645 \u0643\u0627\u0645\u0644 \u0641\u064a \u0643\u0644 \u062c\u0647\u0627\u0632.',
    },
    faqTitle: '\u0627\u0644\u0623\u0633\u0626\u0644\u0629 \u0627\u0644\u0634\u0627\u0626\u0639\u0629',
    statOneClick: '\u0646\u0642\u0631\u0629 \u0648\u0627\u062d\u062f\u0629',
    statOneClickLabel: '\u062a\u062d\u0643\u0645 \u0641\u0648\u0631\u064a',
    statApps: '\u221e \u062a\u0637\u0628\u064a\u0642\u0627\u062a',
    statAppsLabel: '\u0628\u062f\u0648\u0646 \u062d\u062f\u0648\u062f',
  },
  ru: {
    appMockup: {
      title: '\u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 MACA \u0432 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0438',
      subtitle: '\u041e\u0442\u043a\u0440\u043e\u0439\u0442\u0435 \u0432\u0441\u0435 \u0444\u0443\u043d\u043a\u0446\u0438\u0438 \u043d\u0430 \u0440\u0435\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u043a\u0440\u0438\u043d\u0448\u043e\u0442\u0430\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f. \u041e\u0442 \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0433\u0440\u043e\u043c\u043a\u043e\u0441\u0442\u044c\u044e \u0434\u043e \u0440\u0435\u0436\u0438\u043c\u0430 \u0444\u043e\u043a\u0443\u0441\u0438\u0440\u043e\u0432\u043a\u0438.',
    },
    allDevices: {
      title: '\u041e\u0434\u043d\u0430 \u0441\u0438\u0441\u0442\u0435\u043c\u0430. \u0412\u0441\u0435 \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430.',
      subtitle: 'MACA \u0431\u0435\u0441\u043f\u0440\u0435\u043f\u044f\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0430\u0435\u0442\u0441\u044f \u043a\u043e \u0432\u0441\u0435\u043c \u0432\u0430\u0448\u0438\u043c \u0430\u0443\u0434\u0438\u043e\u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u0430\u043c. \u041d\u0430\u0443\u0448\u043d\u0438\u043a\u0438, \u043a\u043e\u043b\u043e\u043d\u043a\u0438, \u043c\u043e\u043d\u0438\u0442\u043e\u0440\u044b \u0438\u043b\u0438 AirPods \u2014 \u043f\u043e\u043b\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u043d\u0430\u0434 \u043a\u0430\u0436\u0434\u044b\u043c \u0443\u0441\u0442\u0440\u043e\u0439\u0441\u0442\u0432\u043e\u043c.',
    },
    faqTitle: '\u0427\u0430\u0441\u0442\u043e \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b',
    statOneClick: '1 \u043a\u043b\u0438\u043a',
    statOneClickLabel: '\u041c\u0433\u043d\u043e\u0432\u0435\u043d\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c',
    statApps: '\u221e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439',
    statAppsLabel: '\u0411\u0435\u0437 \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d\u0438\u0439',
  },
  nl: {
    appMockup: {
      title: 'Bekijk MACA in Actie',
      subtitle: 'Ontdek alle functies in echte app-screenshots. Van individueel volumebeheer tot Focusmodus.',
    },
    allDevices: {
      title: 'E\u00e9n Systeem. Alle Apparaten.',
      subtitle: 'MACA verbindt naadloos met al je audioapparaten. Of het nu koptelefoons, speakers, monitoren of AirPods zijn\u2014volledige controle over elk apparaat.',
    },
    faqTitle: 'Veelgestelde Vragen',
    statOneClick: '1 Klik',
    statOneClickLabel: 'Directe Controle',
    statApps: '\u221e Apps',
    statAppsLabel: 'Geen Limieten',
  },
  tr: {
    appMockup: {
      title: 'MACA\'y\u0131 \u0130\u015f Ba\u015f\u0131nda G\u00f6r\u00fcn',
      subtitle: 'Ger\u00e7ek uygulama ekran g\u00f6r\u00fcnt\u00fclerinde t\u00fcm \u00f6zellikleri ke\u015ffedin. Bireysel ses kontrol\u00fcnden Odak Moduna kadar.',
    },
    allDevices: {
      title: 'Bir Sistem. T\u00fcm Cihazlar.',
      subtitle: 'MACA t\u00fcm ses cihazlar\u0131n\u0131zla sorunsuz ba\u011flan\u0131r. Kulakl\u0131klar, hoparl\u00f6rler, monit\u00f6rler veya AirPods\u2014her cihaz \u00fczerinde tam kontrol.',
    },
    faqTitle: 'S\u0131k\u00e7a Sorulan Sorular',
    statOneClick: '1 T\u0131klama',
    statOneClickLabel: 'Anl\u0131k Kontrol',
    statApps: '\u221e Uygulama',
    statAppsLabel: 'S\u0131n\u0131rs\u0131z',
  },
  sv: {
    appMockup: {
      title: 'Se MACA i Aktion',
      subtitle: 'Uppt\u00e4ck alla funktioner i riktiga sk\u00e4rmbilder fr\u00e5n appen. Fr\u00e5n individuell volymkontroll till Fokusl\u00e4ge.',
    },
    allDevices: {
      title: 'Ett System. Alla Enheter.',
      subtitle: 'MACA ansluter s\u00f6ml\u00f6st till alla dina ljudenheter. Oavsett om det \u00e4r h\u00f6rlurar, h\u00f6gtalare, sk\u00e4rmar eller AirPods\u2014full kontroll \u00f6ver varje enhet.',
    },
    faqTitle: 'Vanliga Fr\u00e5gor',
    statOneClick: '1 Klick',
    statOneClickLabel: 'Omedelbar Kontroll',
    statApps: '\u221e Appar',
    statAppsLabel: 'Inga Gr\u00e4nser',
  },
};

export interface FAQItem {
  question: string;
  answer: string;
}

export const homeFAQTranslations: Partial<Record<Language, FAQItem[]>> & { en: FAQItem[] } = {
  en: [
    { question: 'What is MACA?', answer: 'MACA (Master Audio Control App) is a macOS application that gives you granular control over the volume of every application running on your Mac. No more jumping between apps to adjust audio levels!' },
    { question: 'How does MACA differ from macOS volume control?', answer: 'macOS only controls the overall system volume. MACA allows you to control each application individually, mute specific apps, create audio profiles, and much more.' },
    { question: 'Is MACA free?', answer: 'MACA offers a free version with basic features and a Pro version for advanced features like audio profiles, enhanced equalizer, and more. No subscriptions \u2013 just a one-time purchase!' },
    { question: 'Does MACA collect my data?', answer: 'Absolutely not. MACA processes everything locally on your Mac. We do not collect, store, or transmit any of your data. Your privacy is our priority.' },
    { question: 'What macOS versions are supported?', answer: 'MACA requires macOS 15 (Sequoia) or newer. The app is optimized for Apple Silicon (M1/M2/M3/M4).' },
  ],
  de: [
    { question: 'Was ist MACA?', answer: 'MACA (Master Audio Control App) ist eine macOS-Anwendung, die Ihnen pr\u00e4zise Kontrolle \u00fcber die Lautst\u00e4rke jeder auf Ihrem Mac laufenden Anwendung gibt. Nie wieder zwischen Apps wechseln m\u00fcssen, um Audio-Level anzupassen!' },
    { question: 'Wie unterscheidet sich MACA von der macOS-Lautst\u00e4rkeregelung?', answer: 'macOS steuert nur die Gesamtlautst\u00e4rke des Systems. MACA erm\u00f6glicht es Ihnen, jede Anwendung einzeln zu steuern, bestimmte Apps stummzuschalten, Audio-Profile zu erstellen und vieles mehr.' },
    { question: 'Ist MACA kostenlos?', answer: 'MACA bietet eine kostenlose Version mit grundlegenden Funktionen und eine Pro-Version f\u00fcr erweiterte Features wie Audio-Profile, erweiterte Equalizer und mehr. Keine Abos \u2013 nur einmaliger Kauf!' },
    { question: 'Sammelt MACA meine Daten?', answer: 'Absolut nicht. MACA verarbeitet alles lokal auf Ihrem Mac. Wir sammeln, speichern oder \u00fcbertragen keine Ihrer Daten. Ihre Privatsph\u00e4re ist unsere Priorit\u00e4t.' },
    { question: 'Welche macOS-Versionen werden unterst\u00fctzt?', answer: 'MACA erfordert macOS 15 (Sequoia) oder neuer. Die App ist f\u00fcr Apple Silicon (M1/M2/M3/M4) optimiert.' },
  ],
  es: [
    { question: '\u00bfQu\u00e9 es MACA?', answer: 'MACA (Master Audio Control App) es una aplicaci\u00f3n de macOS que te da control granular sobre el volumen de cada aplicaci\u00f3n que se ejecuta en tu Mac. \u00a1No m\u00e1s saltar entre aplicaciones para ajustar los niveles de audio!' },
    { question: '\u00bfEn qu\u00e9 se diferencia MACA del control de volumen de macOS?', answer: 'macOS solo controla el volumen general del sistema. MACA te permite controlar cada aplicaci\u00f3n individualmente, silenciar aplicaciones espec\u00edficas, crear perfiles de audio y mucho m\u00e1s.' },
    { question: '\u00bfEs MACA gratuito?', answer: 'MACA ofrece una versi\u00f3n gratuita con funciones b\u00e1sicas y una versi\u00f3n Pro para funciones avanzadas como perfiles de audio, equalizador mejorado y m\u00e1s. \u00a1Sin suscripciones \u2013 solo una compra \u00fanica!' },
    { question: '\u00bfMACA recopila mis datos?', answer: 'Absolutamente no. MACA procesa todo localmente en tu Mac. No recopilamos, almacenamos ni transmitimos ninguno de tus datos. Tu privacidad es nuestra prioridad.' },
    { question: '\u00bfQu\u00e9 versiones de macOS son compatibles?', answer: 'MACA requiere macOS 15 (Sequoia) o posterior. La aplicaci\u00f3n est\u00e1 optimizada para Apple Silicon (M1/M2/M3/M4).' },
  ],
  fr: [
    { question: 'Qu\'est-ce que MACA ?', answer: 'MACA (Master Audio Control App) est une application macOS qui vous donne un contr\u00f4le granulaire sur le volume de chaque application ex\u00e9cut\u00e9e sur votre Mac. Plus besoin de sauter entre les applications pour ajuster les niveaux audio !' },
    { question: 'En quoi MACA diff\u00e8re-t-il du contr\u00f4le du volume macOS ?', answer: 'macOS ne contr\u00f4le que le volume syst\u00e8me global. MACA vous permet de contr\u00f4ler chaque application individuellement, de couper le son d\'applications sp\u00e9cifiques, de cr\u00e9er des profils audio et bien plus encore.' },
    { question: 'Est-ce que MACA est gratuit ?', answer: 'MACA offre une version gratuite avec des fonctionnalit\u00e9s de base et une version Pro pour des fonctionnalit\u00e9s avanc\u00e9es comme des profils audio, un \u00e9galiseur am\u00e9lior\u00e9 et plus encore. Pas de souscriptions \u2013 juste un achat unique !' },
    { question: 'MACA collecte-t-il mes donn\u00e9es ?', answer: 'Absolument pas. MACA traite tout localement sur votre Mac. Nous ne collectons, ne stockons ni ne transmettons aucune de vos donn\u00e9es. Votre confidentialit\u00e9 est notre priorit\u00e9.' },
    { question: 'Quelles versions de macOS sont prises en charge ?', answer: 'MACA n\u00e9cessite macOS 15 (Sequoia) ou une version ult\u00e9rieure. L\'application est optimis\u00e9e pour Apple Silicon (M1/M2/M3/M4).' },
  ],
  it: [
    { question: 'Cos\'\u00e8 MACA?', answer: 'MACA (Master Audio Control App) \u00e8 un\'applicazione macOS che ti d\u00e0 un controllo granulare sul volume di ogni applicazione in esecuzione sul tuo Mac. Non dovrai pi\u00f9 saltare tra le app per regolare i livelli audio!' },
    { question: 'In che modo MACA si differenzia dal controllo del volume di macOS?', answer: 'macOS controlla solo il volume complessivo del sistema. MACA ti consente di controllare ogni applicazione individualmente, silenziare app specifiche, creare profili audio e molto altro.' },
    { question: 'MACA \u00e8 gratuito?', answer: 'MACA offre una versione gratuita con funzionalit\u00e0 di base e una versione Pro per funzionalit\u00e0 avanzate come profili audio, equalizzatore migliorato e altro ancora. Nessuna iscrizione \u2013 solo un acquisto unico!' },
    { question: 'MACA raccoglie i miei dati?', answer: 'Assolutamente no. MACA elabora tutto localmente sul tuo Mac. Non raccogliamo, archiviamo o trasmettiamo nessuno dei tuoi dati. La tua privacy \u00e8 la nostra priorit\u00e0.' },
    { question: 'Quali versioni di macOS sono supportate?', answer: 'MACA richiede macOS 15 (Sequoia) o versioni successive. L\'app \u00e8 ottimizzata per Apple Silicon (M1/M2/M3/M4).' },
  ],
  ja: [
    { question: 'MACA\u3068\u306f\u4f55\u3067\u3059\u304b\uff1f', answer: 'MACA\uff08Master Audio Control App\uff09\u306f\u3001Mac\u4e0a\u3067\u5b9f\u884c\u3055\u308c\u3066\u3044\u308b\u3059\u3079\u3066\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u97f3\u91cf\u3092\u7d30\u304b\u304f\u5236\u5fa1\u3067\u304d\u308bmacOS\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3059\u3002\u30aa\u30fc\u30c7\u30a3\u30aa\u30ec\u30d9\u30eb\u3092\u8abf\u6574\u3059\u308b\u305f\u3081\u306b\u30a2\u30d7\u30ea\u9593\u3092\u79fb\u52d5\u3059\u308b\u5fc5\u8981\u306f\u3082\u3046\u3042\u308a\u307e\u305b\u3093\uff01' },
    { question: 'MACA\u306fmacOS\u306e\u97f3\u91cf\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3068\u3069\u3046\u9055\u3044\u307e\u3059\u304b\uff1f', answer: 'macOS\u306f\u30b7\u30b9\u30c6\u30e0\u5168\u4f53\u306e\u97f3\u91cf\u306e\u307f\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002MACA\u306f\u5404\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u500b\u5225\u306b\u5236\u5fa1\u3057\u3001\u7279\u5b9a\u306e\u30a2\u30d7\u30ea\u3092\u30df\u30e5\u30fc\u30c8\u3057\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3059\u308b\u306a\u3069\u3001\u3055\u307e\u3056\u307e\u306a\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002' },
    { question: 'MACA\u306f\u7121\u6599\u3067\u3059\u304b\uff1f', answer: 'MACA\u306f\u57fa\u672c\u7684\u306a\u6a5f\u80fd\u3092\u5099\u3048\u305f\u7121\u6599\u7248\u3068\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u30d7\u30ed\u30d5\u30a1\u30a4\u30eb\u3001\u62e1\u5f35\u30a4\u30b3\u30e9\u30a4\u30b6\u30fc\u306a\u3069\u306e\u9ad8\u5ea6\u306a\u6a5f\u80fd\u3092\u5099\u3048\u305fPro\u7248\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002\u30b5\u30d6\u30b9\u30af\u30ea\u30d7\u30b7\u30e7\u30f3\u306a\u3057 \u2013 \u4e00\u5ea6\u306e\u8cfc\u5165\u3067\uff01' },
    { question: 'MACA\u306f\u30c7\u30fc\u30bf\u3092\u53ce\u96c6\u3057\u307e\u3059\u304b\uff1f', answer: '\u7d76\u5bfe\u306b\u3057\u307e\u305b\u3093\u3002MACA\u306f\u3059\u3079\u3066\u3092Mac\u4e0a\u3067\u30ed\u30fc\u30ab\u30eb\u306b\u51e6\u7406\u3057\u307e\u3059\u3002\u304a\u5ba2\u69d8\u306e\u30c7\u30fc\u30bf\u3092\u53ce\u96c6\u3001\u4fdd\u3001\u9001\u4fe1\u3059\u308b\u3053\u3068\u306f\u4e00\u5207\u3042\u308a\u307e\u305b\u3093\u3002\u30d7\u30e9\u30a4\u30d0\u30b7\u30fc\u306f\u79c1\u305f\u3061\u306e\u6700\u512a\u5148\u4e8b\u9805\u3067\u3059\u3002' },
    { question: '\u3069\u306emacOS\u30d0\u30fc\u30b8\u30e7\u30f3\u304c\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u304b\uff1f', answer: 'MACA\u306fmacOS 15\uff08Sequoia\uff09\u4ee5\u964d\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u30a2\u30d7\u30ea\u306fApple Silicon\uff08M1/M2/M3/M4\uff09\u306b\u6700\u9069\u5316\u3055\u308c\u3066\u3044\u307e\u3059\u3002' },
  ],
  ar: [
    { question: '\u0645\u0627 \u0647\u0648 MACA\u061f', answer: 'MACA (Master Audio Control App) \u0647\u0648 \u062a\u0637\u0628\u064a\u0642 macOS \u064a\u0645\u0646\u062d\u0643 \u0627\u0644\u062a\u062d\u0643\u0645 \u0627\u0644\u062f\u0642\u064a\u0642 \u0641\u064a \u0645\u0633\u062a\u0648\u0649 \u0627\u0644\u0635\u0648\u062a \u0644\u0643\u0644 \u062a\u0637\u0628\u064a\u0642 \u064a\u0639\u0645\u0644 \u0639\u0644\u0649 \u0645\u0627\u0643\u0646\u062a\u0648\u0634\u0643. \u0644\u0627 \u062a\u062d\u062a\u0627\u062c \u0625\u0644\u0649 \u0627\u0644\u062a\u062d\u0648\u064a\u0644 \u0628\u064a\u0646 \u0627\u0644\u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0644\u0636\u0628\u0637 \u0645\u0633\u062a\u0648\u064a\u0627\u062a \u0627\u0644\u0635\u0648\u062a!' },
    { question: '\u0643\u064a\u0641 \u064a\u062e\u062a\u0644\u0641 MACA \u0639\u0646 \u0627\u0644\u062a\u062d\u0643\u0645 \u0641\u064a \u0627\u0644\u0635\u0648\u062a \u0641\u064a macOS\u061f', answer: 'macOS \u064a\u062a\u062d\u0643\u0645 \u0641\u0642\u0637 \u0641\u064a \u0645\u0633\u062a\u0648\u0649 \u0627\u0644\u0635\u0648\u062a \u0627\u0644\u0639\u0627\u0645 \u0644\u0644\u0646\u0638\u0627\u0645. MACA \u064a\u0633\u0645\u062d \u0644\u0643 \u0628\u062a\u062d\u0643\u0645 \u0643\u0644 \u062a\u0637\u0628\u064a\u0642 \u0628\u0634\u0643\u0644 \u0645\u0646\u0641\u0635\u0644\u060c \u0625\u064a\u0642\u0627\u0641 \u062a\u0634\u063a\u064a\u0644 \u062a\u0637\u0628\u064a\u0642\u0627\u062a \u0645\u0639\u064a\u0646\u0629\u060c \u0625\u0646\u0634\u0627\u0621 \u0645\u0644\u0641\u0627\u062a \u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0635\u0648\u062a\u060c \u0648\u0627\u0644\u0645\u0632\u064a\u062f.' },
    { question: '\u0647\u0644 MACA \u0645\u062c\u0627\u0646\u064a\u061f', answer: 'MACA \u064a\u0642\u062f\u0645 \u0646\u0633\u062e\u0629 \u0645\u062c\u0627\u0646\u064a\u0629 \u0645\u0639 \u0645\u064a\u0632\u0627\u062a \u0623\u0633\u0627\u0633\u064a\u0629 \u0648\u0646\u0633\u062e\u0629 Pro \u0644\u0645\u064a\u0632\u0627\u062a \u0645\u062a\u0642\u062f\u0645\u0629 \u0645\u062b\u0644 \u0645\u0644\u0641\u0627\u062a \u062a\u0639\u062f\u064a\u0644 \u0627\u0644\u0635\u0648\u062a\u060c \u0645\u0633\u0627\u0648\u0627\u0629 \u0635\u0648\u062a\u064a\u0629 \u0645\u062d\u0633\u0646\u0629\u060c \u0648\u0627\u0644\u0645\u0632\u064a\u062f. \u0628\u062f\u0648\u0646 \u0627\u0634\u062a\u0631\u0627\u0643\u0627\u062a \u2013 \u0641\u0642\u0637 \u0634\u0631\u0627\u0621 \u0648\u0627\u062d\u062f!' },
    { question: '\u0647\u0644 MACA \u064a\u062c\u0645\u0639 \u0628\u064a\u0627\u0646\u0627\u062a\u064a\u061f', answer: '\u0628\u0627\u0644\u062a\u0623\u0643\u064a\u062f \u0644\u0627. MACA \u064a\u0639\u0627\u0644\u062c \u0643\u0644 \u0634\u064a\u0621 \u0645\u062d\u0644\u064a\u064b\u0627 \u0639\u0644\u0649 \u0645\u0627\u0643\u0646\u062a\u0648\u0634\u0643. \u0644\u0627 \u0646\u062c\u0645\u0639\u060c \u0646\u062e\u0632\u0646\u060c \u0623\u0648 \u0646\u0646\u0642\u0644 \u0623\u064a \u0645\u0646 \u0628\u064a\u0627\u0646\u0627\u062a\u0643. \u062e\u0635\u0648\u0635\u064a\u062a\u0643 \u0647\u064a \u0623\u0648\u0644\u0648\u064a\u062a\u0646\u0627.' },
    { question: '\u0645\u0627 \u0647\u064a \u0625\u0635\u062f\u0627\u0631\u0627\u062a macOS \u0627\u0644\u0645\u062f\u0639\u0648\u0645\u0629\u061f', answer: '\u064a\u062a\u0637\u0644\u0628 MACA \u0646\u0638\u0627\u0645 macOS 15 (Sequoia) \u0623\u0648 \u0623\u062d\u062f\u062b. \u064a\u062a\u0645 \u062a\u062d\u0633\u064a\u0646 \u0627\u0644\u062a\u0637\u0628\u064a\u0642 \u0644\u0640 Apple Silicon (M1/M2/M3/M4).' },
  ],
  ru: [
    { question: '\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 MACA?', answer: 'MACA (Master Audio Control App) \u2014 \u044d\u0442\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 macOS, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0434\u0430\u0435\u0442 \u0432\u0430\u043c \u0434\u0435\u0442\u0430\u043b\u044c\u043d\u044b\u0439 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044c \u043d\u0430\u0434 \u0443\u0440\u043e\u0432\u043d\u0435\u043c \u0433\u0440\u043e\u043c\u043a\u043e\u0441\u0442\u0438 \u043a\u0430\u0436\u0434\u043e\u0433\u043e \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u0440\u0430\u0431\u043e\u0442\u0430\u044e\u0449\u0435\u0433\u043e \u043d\u0430 \u0432\u0430\u0448\u0435\u043c Mac. \u0411\u043e\u043b\u044c\u0448\u0435 \u043d\u0435 \u043d\u0443\u0436\u043d\u043e \u043f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0430\u0442\u044c\u0441\u044f \u043c\u0435\u0436\u0434\u0443 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f\u043c\u0438 \u0434\u043b\u044f \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0443\u0440\u043e\u0432\u043d\u044f \u0437\u0432\u0443\u043a\u0430!' },
    { question: '\u041a\u0430\u043a MACA \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f \u043e\u0442 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u044f \u0433\u0440\u043e\u043c\u043a\u043e\u0441\u0442\u0438 macOS?', answer: 'macOS \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u0443\u0435\u0442 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0431\u0449\u0438\u0439 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u0433\u0440\u043e\u043c\u043a\u043e\u0441\u0442\u0438 \u0441\u0438\u0441\u0442\u0435\u043c\u044b. MACA \u043f\u043e\u0437\u0432\u043e\u043b\u044f\u0435\u0442 \u0432\u0430\u043c \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043a\u0430\u0436\u0434\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043e\u0442\u0434\u0435\u043b\u044c\u043d\u043e, \u0432\u044b\u043a\u043b\u044e\u0447\u0430\u0442\u044c \u0437\u0432\u0443\u043a \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u043d\u044b\u0445 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439, \u0441\u043e\u0437\u0434\u0430\u0432\u0430\u0442\u044c \u0430\u0443\u0434\u0438\u043e\u043f\u0440\u043e\u0444\u0438\u043b\u0438 \u0438 \u043c\u043d\u043e\u0433\u043e\u0435 \u0434\u0440\u0443\u0433\u043e\u0435.' },
    { question: 'MACA \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u0435\u043d?', answer: 'MACA \u043f\u0440\u0435\u0434\u043b\u0430\u0433\u0430\u0435\u0442 \u0431\u0435\u0441\u043f\u043b\u0430\u0442\u043d\u0443\u044e \u0432\u0435\u0440\u0441\u0438\u044e \u0441 \u0431\u0430\u0437\u043e\u0432\u044b\u043c\u0438 \u0444\u0443\u043d\u043a\u0446\u0438\u044f\u043c\u0438 \u0438 \u0432\u0435\u0440\u0441\u0438\u044e Pro \u0434\u043b\u044f \u043f\u0440\u043e\u0434\u0432\u0438\u043d\u0443\u0442\u044b\u0445 \u0444\u0443\u043d\u043a\u0446\u0438\u0439, \u0442\u0430\u043a\u0438\u0445 \u043a\u0430\u043a \u0430\u0443\u0434\u0438\u043e\u043f\u0440\u043e\u0444\u0438\u043b\u0438, \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u043d\u044b\u0439 \u044d\u043a\u0432\u0430\u043b\u0430\u0439\u0437\u0435\u0440 \u0438 \u043c\u043d\u043e\u0433\u043e\u0435 \u0434\u0440\u0443\u0433\u043e\u0435. \u0411\u0435\u0437 \u043f\u043e\u0434\u043f\u0438\u0441\u043e\u043a \u2013 \u0442\u043e\u043b\u044c\u043a\u043e \u043e\u0434\u043d\u043e\u0440\u0430\u0437\u043e\u0432\u0430\u044f \u043f\u043e\u043a\u0443\u043f\u043a\u0430!' },
    { question: 'MACA \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u0442 \u043c\u043e\u0438 \u0434\u0430\u043d\u043d\u044b\u0435?', answer: '\u041a\u043e\u043d\u0435\u0447\u043d\u043e \u043d\u0435\u0442. MACA \u043e\u0431\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u0442 \u0432\u0441\u0435 \u043b\u043e\u043a\u0430\u043b\u044c\u043d\u043e \u043d\u0430 \u0432\u0430\u0448\u0435\u043c Mac. \u041c\u044b \u043d\u0435 \u0441\u043e\u0431\u0438\u0440\u0430\u0435\u043c, \u043d\u0435 \u0445\u0440\u0430\u043d\u0438\u043c \u0438 \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u0435\u043c \u043d\u0438\u043a\u0430\u043a\u0438\u0435 \u0432\u0430\u0448\u0438 \u0434\u0430\u043d\u043d\u044b\u0435. \u0412\u0430\u0448\u0430 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u044c \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u043d\u0430\u0448\u0438\u043c \u043f\u0440\u0438\u043e\u0440\u0438\u0442\u0435\u0442\u043e\u043c.' },
    { question: '\u041a\u0430\u043a\u0438\u0435 \u0432\u0435\u0440\u0441\u0438\u0438 macOS \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044e\u0442\u0441\u044f?', answer: 'MACA \u0442\u0440\u0435\u0431\u0443\u0435\u0442 macOS 15 (Sequoia) \u0438\u043b\u0438 \u043d\u043e\u0432\u0435\u0435. \u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0434\u043b\u044f Apple Silicon (M1/M2/M3/M4).' },
  ],
  nl: [
    { question: 'Wat is MACA?', answer: 'MACA (Master Audio Control App) is een macOS-applicatie die je granulaire controle geeft over het volume van elke applicatie die op je Mac draait. Geen meer springen tussen apps om audio-niveaus aan te passen!' },
    { question: 'Hoe verschilt MACA van macOS-volumebeheer?', answer: 'macOS beheert alleen het algemene systeemvolume. MACA stelt je in staat om elke applicatie afzonderlijk te beheren, specifieke apps te dempen, audio-profielen te maken en nog veel meer.' },
    { question: 'Is MACA gratis?', answer: 'MACA biedt een gratis versie met basisfuncties en een Pro-versie voor geavanceerde functies zoals audio-profielen, verbeterde equalizer en meer. Geen abonnementen \u2013 alleen een eenmalige aankoop!' },
    { question: 'Verzamelt MACA mijn gegevens?', answer: 'Absoluut niet. MACA verwerkt alles lokaal op je Mac. We verzamelen, bewaren of versturen geen enkele van je gegevens. Je privacy is onze prioriteit.' },
    { question: 'Welke macOS-versies worden ondersteund?', answer: 'MACA vereist macOS 15 (Sequoia) of nieuwer. De app is geoptimaliseerd voor Apple Silicon (M1/M2/M3/M4).' },
  ],
  tr: [
    { question: 'MACA nedir?', answer: 'MACA (Master Audio Control App), Mac\'inizde \u00e7al\u0131\u015fan her uygulaman\u0131n ses d\u00fczeyini hassas kontrol etmenize olanak tan\u0131yan bir macOS uygulamas\u0131d\u0131r. Ses d\u00fczeylerini ayarlamak i\u00e7in uygulamalar aras\u0131nda ge\u00e7i\u015f yapman\u0131z art\u0131k gerekli de\u011fil!' },
    { question: 'MACA, macOS ses kontrol\u00fcyle nas\u0131l farkl\u0131d\u0131r?', answer: 'macOS yaln\u0131zca sistem genel ses d\u00fczeyini kontrol eder. MACA, her uygulamay\u0131 ayr\u0131 ayr\u0131 kontrol etmenize, belirli uygulamalar\u0131 susturman\u0131za, ses profilleri olu\u015fturman\u0131za ve daha fazlas\u0131na olanak tan\u0131r.' },
    { question: 'MACA \u00fccretsiz mi?', answer: 'MACA, temel \u00f6zelliklerle \u00fccretsiz bir s\u00fcr\u00fcm ve ses profilleri, geli\u015ftirilmi\u015f e\u015fitleyici ve daha fazlas\u0131 gibi geli\u015fmi\u015f \u00f6zelliklerle Pro s\u00fcr\u00fcm\u00fcn\u00fc sunar. Abonelik gerektirmez \u2013 sadece tek seferlik bir sat\u0131n alma!' },
    { question: 'MACA verilerimi toplar m\u0131?', answer: 'Kesinlikle hay\u0131r. MACA, t\u00fcm\u00fcn\u00fc Mac\'inizde yerel olarak i\u015fler. Verilerinizi toplamaz, depolamaz veya iletmez. Gizlili\u011finiz bizim \u00f6nceli\u011fimizdir.' },
    { question: 'Hangi macOS s\u00fcr\u00fcmleri desteklenir?', answer: 'MACA, macOS 15 (Sequoia) veya daha yeni s\u00fcr\u00fcmleri gerektirir. Uygulama, Apple Silicon (M1/M2/M3/M4) i\u00e7in optimize edilmi\u015ftir.' },
  ],
  sv: [
    { question: 'Vad \u00e4r MACA?', answer: 'MACA (Master Audio Control App) \u00e4r en macOS-app som ger dig granul\u00e4r kontroll \u00f6ver volymen f\u00f6r varje program som k\u00f6rs p\u00e5 din Mac. Ingen mer hoppande mellan appar f\u00f6r att justera ljudniv\u00e5er!' },
    { question: 'Hur skiljer MACA sig fr\u00e5n macOS-volymkontroll?', answer: 'macOS kontrollerar bara den \u00f6vergripande systemvolymen. MACA l\u00e5ter dig kontrollera varje program individuellt, tysta specifika appar, skapa ljudprofiler och mycket mer.' },
    { question: '\u00c4r MACA gratis?', answer: 'MACA erbjuder en kostnadsfri version med grundl\u00e4ggande funktioner och en Pro-version f\u00f6r avancerade funktioner som ljudprofiler, f\u00f6rb\u00e4ttrad equalizer och mer. Inga prenumerationer \u2013 bara en eng\u00e5ngsk\u00f6p!' },
    { question: 'Samlar MACA in mina data?', answer: 'Absolut inte. MACA bearbetar allt lokalt p\u00e5 din Mac. Vi samlar inte in, lagrar eller \u00f6verf\u00f6r n\u00e5gra av dina data. Din sekretess \u00e4r v\u00e5r prioritet.' },
    { question: 'Vilka macOS-versioner st\u00f6ds?', answer: 'MACA kr\u00e4ver macOS 15 (Sequoia) eller nyare. Appen \u00e4r optimerad f\u00f6r Apple Silicon (M1/M2/M3/M4).' },
  ],
};
