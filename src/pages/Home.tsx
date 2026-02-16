import { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate, Link } from 'react-router';
import { motion } from 'motion/react';
import { Download, Volume2, VolumeX, Shield, Zap, ChevronDown, Target, Layers, Keyboard, Palette, Lock, Server, Eye, Check, Star } from 'lucide-react';
import { translations, type Language } from '../locales/translations';
import { Header } from '../components/Header';
import { LanguageSelector } from '../components/LanguageSelector';
import { useDarkMode } from '../hooks/useDarkMode';
import { AnimatedEqualizer } from '../components/AnimatedEqualizer';
import { ProblemSolutionSection } from '../components/ProblemSolutionSection';
import { ScreenshotShowcase } from '../components/ScreenshotShowcase';
import { MacBookIllustration } from '../components/MacBookIllustration';
import { UseCaseCard } from '../components/UseCaseCard';
import { FeatureCard } from '../components/FeatureCard';
import { PrivacySection } from '../components/PrivacySection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { PricingCard } from '../components/PricingCard';
import { BenefitBadge } from '../components/BenefitBadge';
import { FAQSection } from '../components/FAQSection';

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
  gradient: string;
  delay: number;
}

// FAQ Helper Function
function getFAQItems(lang: Language) {
  const faqData = {
    en: [
      {
        question: 'What is MACA?',
        answer: 'MACA (Master Audio Control App) is a macOS application that gives you granular control over the volume of every application running on your Mac. No more jumping between apps to adjust audio levels!'
      },
      {
        question: 'How does MACA differ from macOS volume control?',
        answer: 'macOS only controls the overall system volume. MACA allows you to control each application individually, mute specific apps, create audio profiles, and much more.'
      },
      {
        question: 'Is MACA free?',
        answer: 'MACA offers a free version with basic features and a Pro version for advanced features like audio profiles, enhanced equalizer, and more. No subscriptions – just a one-time purchase!'
      },
      {
        question: 'Does MACA collect my data?',
        answer: 'Absolutely not. MACA processes everything locally on your Mac. We do not collect, store, or transmit any of your data. Your privacy is our priority.'
      },
      {
        question: 'What macOS versions are supported?',
        answer: 'MACA requires macOS 15 (Sequoia) or newer. The app is optimized for Apple Silicon (M1/M2/M3/M4).'
      }
    ],
    de: [
      {
        question: 'Was ist MACA?',
        answer: 'MACA (Master Audio Control App) ist eine macOS-Anwendung, die Ihnen präzise Kontrolle über die Lautstärke jeder auf Ihrem Mac laufenden Anwendung gibt. Nie wieder zwischen Apps wechseln müssen, um Audio-Level anzupassen!'
      },
      {
        question: 'Wie unterscheidet sich MACA von der macOS-Lautstärkeregelung?',
        answer: 'macOS steuert nur die Gesamtlautstärke des Systems. MACA ermöglicht es Ihnen, jede Anwendung einzeln zu steuern, bestimmte Apps stummzuschalten, Audio-Profile zu erstellen und vieles mehr.'
      },
      {
        question: 'Ist MACA kostenlos?',
        answer: 'MACA bietet eine kostenlose Version mit grundlegenden Funktionen und eine Pro-Version für erweiterte Features wie Audio-Profile, erweiterte Equalizer und mehr. Keine Abos – nur einmaliger Kauf!'
      },
      {
        question: 'Sammelt MACA meine Daten?',
        answer: 'Absolut nicht. MACA verarbeitet alles lokal auf Ihrem Mac. Wir sammeln, speichern oder übertragen keine Ihrer Daten. Ihre Privatsphäre ist unsere Priorität.'
      },
      {
        question: 'Welche macOS-Versionen werden unterstützt?',
        answer: 'MACA erfordert macOS 15 (Sequoia) oder neuer. Die App ist für Apple Silicon (M1/M2/M3/M4) optimiert.'
      }
    ],
    es: [
      {
        question: '¿Qué es MACA?',
        answer: 'MACA (Master Audio Control App) es una aplicación de macOS que te da control granular sobre el volumen de cada aplicación que se ejecuta en tu Mac. ¡No más saltar entre aplicaciones para ajustar los niveles de audio!'
      },
      {
        question: '¿En qué se diferencia MACA del control de volumen de macOS?',
        answer: 'macOS solo controla el volumen general del sistema. MACA te permite controlar cada aplicación individualmente, silenciar aplicaciones específicas, crear perfiles de audio y mucho más.'
      },
      {
        question: '¿Es MACA gratuito?',
        answer: 'MACA ofrece una versión gratuita con funciones básicas y una versión Pro para funciones avanzadas como perfiles de audio, equalizador mejorado y más. ¡Sin suscripciones – solo una compra única!'
      },
      {
        question: '¿MACA recopila mis datos?',
        answer: 'Absolutamente no. MACA procesa todo localmente en tu Mac. No recopilamos, almacenamos ni transmitimos ninguno de tus datos. Tu privacidad es nuestra prioridad.'
      },
      {
        question: '¿Qué versiones de macOS son compatibles?',
        answer: 'MACA requiere macOS 15 (Sequoia) o posterior. La aplicación está optimizada para Apple Silicon (M1/M2/M3/M4).'
      }
    ],
    fr: [
      {
        question: 'Qu\'est-ce que MACA ?',
        answer: 'MACA (Master Audio Control App) est une application macOS qui vous donne un contrôle granulaire sur le volume de chaque application exécutée sur votre Mac. Plus besoin de sauter entre les applications pour ajuster les niveaux audio !'
      },
      {
        question: 'En quoi MACA diffère-t-il du contrôle du volume macOS ?',
        answer: 'macOS ne contrôle que le volume système global. MACA vous permet de contrôler chaque application individuellement, de couper le son d\'applications spécifiques, de créer des profils audio et bien plus encore.'
      },
      {
        question: 'Est-ce que MACA est gratuit ?',
        answer: 'MACA offre une version gratuite avec des fonctionnalités de base et une version Pro pour des fonctionnalités avancées comme des profils audio, un égaliseur amélioré et plus encore. Pas de souscriptions – juste un achat unique !'
      },
      {
        question: 'MACA collecte-t-il mes données ?',
        answer: 'Absolument pas. MACA traite tout localement sur votre Mac. Nous ne collectons, ne stockons ni ne transmettons aucune de vos données. Votre confidentialité est notre priorité.'
      },
      {
        question: 'Quelles versions de macOS sont prises en charge ?',
        answer: 'MACA nécessite macOS 15 (Sequoia) ou une version ultérieure. L\'application est optimisée pour Apple Silicon (M1/M2/M3/M4).'
      }
    ],
    it: [
      {
        question: 'Cos\'è MACA?',
        answer: 'MACA (Master Audio Control App) è un\'applicazione macOS che ti dà un controllo granulare sul volume di ogni applicazione in esecuzione sul tuo Mac. Non dovrai più saltare tra le app per regolare i livelli audio!'
      },
      {
        question: 'In che modo MACA si differenzia dal controllo del volume di macOS?',
        answer: 'macOS controlla solo il volume complessivo del sistema. MACA ti consente di controllare ogni applicazione individualmente, silenziare app specifiche, creare profili audio e molto altro.'
      },
      {
        question: 'MACA è gratuito?',
        answer: 'MACA offre una versione gratuita con funzionalità di base e una versione Pro per funzionalità avanzate come profili audio, equalizzatore migliorato e altro ancora. Nessuna iscrizione – solo un acquisto unico!'
      },
      {
        question: 'MACA raccoglie i miei dati?',
        answer: 'Assolutamente no. MACA elabora tutto localmente sul tuo Mac. Non raccogliamo, archiviamo o trasmettiamo nessuno dei tuoi dati. La tua privacy è la nostra priorità.'
      },
      {
        question: 'Quali versioni di macOS sono supportate?',
        answer: 'MACA richiede macOS 15 (Sequoia) o versioni successive. L\'app è ottimizzata per Apple Silicon (M1/M2/M3/M4).'
      }
    ],
    pt: [
      {
        question: 'O que é MACA?',
        answer: 'MACA (Master Audio Control App) é um aplicativo para macOS que oferece controle granular sobre o volume de todos os aplicativos em execução no seu Mac. Chega de pular entre aplicativos para ajustar níveis de áudio!'
      },
      {
        question: 'Como o MACA difere do controle de volume do macOS?',
        answer: 'O macOS controla apenas o volume geral do sistema. O MACA permite controlar cada aplicativo individualmente, silenciar aplicativos específicos, criar perfis de áudio e muito mais.'
      },
      {
        question: 'O MACA é gratuito?',
        answer: 'O MACA oferece uma versão gratuita com recursos básicos e uma versão Pro para recursos avançados como perfis de áudio, equalizador melhorado e mais. Sem assinaturas – apenas uma compra única!'
      },
      {
        question: 'O MACA coleta meus dados?',
        answer: 'Absolutamente não. O MACA processa tudo localmente no seu Mac. Não coletamos, armazenamos ou transmitimos nenhum dos seus dados. Sua privacidade é nossa prioridade.'
      },
      {
        question: 'Quais versões do macOS são suportadas?',
        answer: 'O MACA requer macOS 15 (Sequoia) ou posterior. O aplicativo é otimizado para Apple Silicon (M1/M2/M3/M4).'
      }
    ],
    ja: [
      {
        question: 'MACAとは何ですか？',
        answer: 'MACA（Master Audio Control App）は、Mac上で実行されているすべてのアプリケーションの音量を細かく制御できるmacOSアプリケーションです。オーディオレベルを調整するためにアプリ間を移動する必要はもうありません！'
      },
      {
        question: 'MACAはmacOSの音量コントロールとどう違いますか？',
        answer: 'macOSはシステム全体の音量のみを制御します。MACAは各アプリケーションを個別に制御し、特定のアプリをミュートし、オーディオプロファイルを作成するなど、さまざまな機能を提供します。'
      },
      {
        question: 'MACAは無料ですか？',
        answer: 'MACAは基本的な機能を備えた無料版と、オーディオプロファイル、拡張イコライザーなどの高度な機能を備えたPro版を提供します。サブスクリプションなし – 一度の購入で！'
      },
      {
        question: 'MACAはデータを収集しますか？',
        answer: '絶対にしません。MACAはすべてをMac上でローカルに処理します。お客様のデータを収集、保存、送信することは一切ありません。プライバシーは私たちの最優先事項です。'
      },
      {
        question: 'どのmacOSバージョンがサポートされていますか？',
        answer: 'MACAはmacOS 15（Sequoia）以降をサポートしています。このアプリはApple Silicon（M1/M2/M3/M4）に最適化されています。'
      }
    ],
    zh: [
      {
        question: '什么是MACA？',
        answer: 'MACA（Master Audio Control App）是一款macOS应用程序，可让您精细控制Mac上运行的每个应用程序的音量。无需在应用程序之间跳转即可调整音频级别！'
      },
      {
        question: 'MACA与macOS音量控制有何不同？',
        answer: 'macOS仅控制整体系统音量。MACA允许您单独控制每个应用程序，静音特定应用程序，创建音频配置文件等。'
      },
      {
        question: 'MACA是免费的吗？',
        answer: 'MACA提供了一个带有基本功能的免费版本和一个带有高级功能（如音频配置文件、增强均衡器等）的Pro版本。无需订阅 – 只需一次购买！'
      },
      {
        question: 'MACA会收集我的数据吗？',
        answer: '绝对不会。MACA在您的Mac上本地处理所有内容。我们不收集、存储或传输您的任何数据。您的隐私是我们的首要任务。'
      },
      {
        question: '支持哪些macOS版本？',
        answer: 'MACA要求macOS 15（Sequoia）或更高版本。该应用针对Apple Silicon（M1/M2/M3/M4）进行了优化。'
      }
    ]
  };

  return faqData[lang] || faqData.en;
}

export function Home() {
  const { lang } = useParams();
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  
  // Validate language and default to 'en' if invalid
  const validLanguages: Language[] = ['en', 'de', 'es', 'fr', 'it', 'pt', 'ja', 'zh'];
  const requestedLang = lang as Language;
  
  // Always use a valid language, fallback to 'en'
  const currentLang: Language = (lang && validLanguages.includes(requestedLang)) ? requestedLang : 'en';
  
  // Detect browser language on first visit
  useEffect(() => {
    if (!lang) {
      const browserLang = navigator.language.toLowerCase();
      let detectedLang: Language = 'en'; // default
      
      // Check if browser language matches our supported languages
      if (browserLang.startsWith('de')) detectedLang = 'de';
      else if (browserLang.startsWith('es')) detectedLang = 'es';
      else if (browserLang.startsWith('fr')) detectedLang = 'fr';
      else if (browserLang.startsWith('it')) detectedLang = 'it';
      else if (browserLang.startsWith('pt')) detectedLang = 'pt';
      else if (browserLang.startsWith('ja')) detectedLang = 'ja';
      else if (browserLang.startsWith('zh')) detectedLang = 'zh';
      
      navigate(`/${detectedLang}`, { replace: true });
    } else if (!validLanguages.includes(requestedLang)) {
      navigate('/en', { replace: true });
    }
  }, [lang, requestedLang, navigate]);
  
  // If no lang parameter at all, redirect immediately
  useEffect(() => {
    if (!lang) {
      navigate('/en', { replace: true });
    } else if (!validLanguages.includes(requestedLang)) {
      navigate('/en', { replace: true });
    }
  }, [lang, requestedLang, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Get translations directly with fallback to English
  const t = useMemo(() => {
    // Always have a fallback
    if (!translations) {
      console.error('Translations object is undefined');
      return null;
    }
    
    // Try to get the current language
    const translation = translations[currentLang];
    if (!translation) {
      console.warn(`Translation for ${currentLang} not found, falling back to English`);
      return translations.en;
    }
    
    return translation;
  }, [currentLang]);
  
  // Safety check: if translations haven't loaded yet, show loading state
  if (!t || !t.hero || !t.hero.title) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-slate-600 dark:text-slate-400">Loading translations...</p>
        </div>
      </div>
    );
  }

  const handleLanguageChange = (newLang: Language) => {
    navigate(`/${newLang}`);
  };

  const appStoreUrl = "https://apps.apple.com/us/app/maca-master-audio-control/id6759258773";
  const currentYear = new Date().getFullYear();
  
  // Additional translations for hardcoded texts
  const additionalT = {
    appMockup: {
      title: currentLang === 'de' ? 'Sehen Sie MACA in Aktion' :
             currentLang === 'es' ? 'Vea MACA en Acción' :
             currentLang === 'fr' ? 'Voyez MACA en Action' :
             currentLang === 'it' ? 'Vedi MACA in Azione' :
             currentLang === 'pt' ? 'Veja o MACA em Ação' :
             currentLang === 'ja' ? 'MACAの動作を見る' :
             currentLang === 'zh' ? '查看MACA的实际效果' :
             'See MACA in Action',
      subtitle: currentLang === 'de' ? 'Entdecken Sie alle Features in echten Screenshots der App. Von individueller Lautstärkeregelung bis hin zum Fokus-Modus.' :
                currentLang === 'es' ? 'Descubre todas las funciones en capturas reales de la aplicación. Desde control de volumen individual hasta el modo de enfoque.' :
                currentLang === 'fr' ? 'Découvrez toutes les fonctionnalités dans de vraies captures d\'écran de l\'application. Du contrôle de volume individuel au mode focus.' :
                currentLang === 'it' ? 'Scopri tutte le funzionalità in screenshot reali dell\'app. Dal controllo del volume individuale alla modalità focus.' :
                currentLang === 'pt' ? 'Descubra todos os recursos em capturas de tela reais do aplicativo. Do controle de volume individual ao modo foco.' :
                currentLang === 'ja' ? 'アプリの実際のスクリーンショットですべての機能を発見してください。個別音量コントロールからフォーカスモードまで。' :
                currentLang === 'zh' ? '在应用的真实截图中发现所有功能。从个别音量控制到专注模式。' :
                'Discover all features in real app screenshots. From individual volume control to Focus Mode.'
    },
    allDevices: {
      title: currentLang === 'de' ? 'Ein System. Alle Geräte.' :
             currentLang === 'es' ? 'Un Sistema. Todos los Dispositivos.' :
             currentLang === 'fr' ? 'Un Système. Tous les Appareils.' :
             currentLang === 'it' ? 'Un Sistema. Tutti i Dispositivi.' :
             currentLang === 'pt' ? 'Um Sistema. Todos os Dispositivos.' :
             currentLang === 'ja' ? '1つのシステム。すべてのデバイス。' :
             currentLang === 'zh' ? '一个系统。所有设备。' :
             'One System. All Devices.',
      subtitle: currentLang === 'de' ? 'MACA verbindet sich nahtlos mit all Ihren Audio-Geräten. Egal ob Kopfhörer, Lautsprecher, Monitor oder AirPods – volle Kontrolle über jedes Gerät.' :
                currentLang === 'es' ? 'MACA se conecta perfectamente con todos tus dispositivos de audio. Ya sean auriculares, altavoces, monitores o AirPods: control total sobre cada dispositivo.' :
                currentLang === 'fr' ? 'MACA se connecte parfaitement à tous vos appareils audio. Qu\'il s\'agisse de casques, haut-parleurs, moniteurs ou AirPods—contrôle total sur chaque appareil.' :
                currentLang === 'it' ? 'MACA si connette perfettamente con tutti i tuoi dispositivi audio. Che si tratti di cuffie, altoparlanti, monitor o AirPods: controllo completo su ogni dispositivo.' :
                currentLang === 'pt' ? 'MACA se conecta perfeitamente com todos os seus dispositivos de áudio. Sejam fones de ouvido, caixas de som, monitores ou AirPods—controle total sobre cada dispositivo.' :
                currentLang === 'ja' ? 'MACAはすべてのオーディオデバイスとシームレスに接続します。ヘッドフォン、スピーカー、モニター、AirPodsなど、すべてのデバイスを完全にコントロール。' :
                currentLang === 'zh' ? 'MACA无缝连接所有音频设备。无论是耳机、扬声器、显示器还是AirPods，完全控制每个设备。' :
                'MACA seamlessly connects with all your audio devices. Whether headphones, speakers, monitors, or AirPods—full control over every device.'
    },
    faq: {
      title: currentLang === 'de' ? 'Häufig gestellte Fragen' :
             currentLang === 'es' ? 'Preguntas Frecuentes' :
             currentLang === 'fr' ? 'Questions Fréquentes' :
             currentLang === 'it' ? 'Domande Frequenti' :
             currentLang === 'pt' ? 'Perguntas Frequentes' :
             currentLang === 'ja' ? 'よくある質問' :
             currentLang === 'zh' ? '常见问题' :
             'Frequently Asked Questions'
    },
    copyright: currentLang === 'de' ? 'Alle Rechte vorbehalten.' :
               currentLang === 'es' ? 'Todos los derechos reservados.' :
               currentLang === 'fr' ? 'Tous droits réservés.' :
               currentLang === 'it' ? 'Tutti i diritti riservati.' :
               currentLang === 'pt' ? 'Todos os direitos reservados.' :
               currentLang === 'ja' ? '全著作権所有。' :
               currentLang === 'zh' ? '版权所有。' :
               'All rights reserved.'
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 transition-colors duration-300">
      {/* Header */}
      <Header 
        scrolled={scrolled} 
        currentLang={currentLang}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
        badge={t.headerBadge}
      >
        <LanguageSelector 
          currentLang={currentLang} 
          onLanguageChange={handleLanguageChange} 
        />
      </Header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute -top-40 -left-40 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 rounded-full blur-3xl"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute top-40 -right-40 w-96 h-96 bg-purple-400/20 dark:bg-purple-600/10 rounded-full blur-3xl"
            animate={{
              x: [0, -100, 0],
              y: [0, 100, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            {/* MACA Title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="relative text-7xl md:text-9xl mb-4 leading-tight tracking-tight"
            >
              <span className="relative inline-block">
                <span className="font-black bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-500 bg-clip-text text-transparent animate-gradient">
                  MACA
                </span>
                {/* Glow Effect */}
                <span className="absolute inset-0 font-black bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-500 bg-clip-text text-transparent blur-2xl opacity-30 animate-pulse">
                  MACA
                </span>
              </span>
            </motion.h1>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-8 text-slate-900 dark:text-white leading-tight px-4"
              style={{ textWrap: 'balance' } as any}
            >
              {t.hero.title}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-2xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl mx-auto"
            >
              {t.hero.subtitle}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* App Mockup Showcase */}
      <ScreenshotShowcase
        title={additionalT.appMockup.title}
        subtitle={additionalT.appMockup.subtitle}
        currentLang={currentLang}
      />

      {/* Problem Solution Section */}
      <ProblemSolutionSection
        problems={t.problem.items}
        problemTitle={t.problem.title}
        solutionTitle={t.solution.title}
        solutionSubtitle={t.solution.subtitle}
      />

      {/* MacBook Audio Devices Illustration */}
      <section className="py-6 px-6 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-5xl md:text-6xl mb-6 text-slate-900 dark:text-white">
              {additionalT.allDevices.title}
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              {additionalT.allDevices.subtitle}
            </p>
          </motion.div>

          <MacBookIllustration currentLang={currentLang} />
        </div>
      </section>

      {/* Use Cases with Real Images */}
      <section className="py-20 px-6 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl mb-6 text-slate-900 dark:text-white">{t.useCases.title}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <UseCaseCard
              image="https://images.unsplash.com/photo-1542304807-c7d38f96e2d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNpZ25lciUyMHdvcmtzcGFjZSUyMG1hY2Jvb2slMjBjb2ZmZWV8ZW58MXx8fHwxNzY5Nzc1NTEyfDA&ixlib=rb-4.1.0&q=80&w=1080"
              title={t.useCases.designerTitle}
              description={t.useCases.designer}
              gradient="from-pink-500 to-rose-600"
              delay={0.1}
            />
            <UseCaseCard
              image="https://images.unsplash.com/photo-1687586370817-c0c31d87f11b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHByb2R1Y2VyJTIwaG9tZSUyMHN0dWRpbyUyMG1hY3xlbnwxfHx8fDE3Njk3NzU1MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              title={t.useCases.producerTitle}
              description={t.useCases.producer}
              gradient="from-purple-500 to-indigo-600"
              delay={0.2}
            />
            <UseCaseCard
              image="https://images.unsplash.com/photo-1660054591552-3c888d8e5319?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWVyJTIwY29kaW5nJTIwbWFjYm9vayUyMGNvenl8ZW58MXx8fHwxNzY5Nzc1NTEzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              title={t.useCases.developerTitle}
              description={t.useCases.developer}
              gradient="from-blue-500 to-cyan-600"
              delay={0.3}
            />
            <UseCaseCard
              image="https://images.unsplash.com/photo-1696087225391-eb97abf5ba20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob21lJTIwb2ZmaWNlJTIwc2V0dXB8ZW58MXx8fHwxNzY5Nzc1NTEzfDA&ixlib=rb-4.1.0&q=80&w=1080"
              title={t.useCases.remoteTitle}
              description={t.useCases.remote}
              gradient="from-emerald-500 to-teal-600"
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl mb-6 text-slate-900 dark:text-white">{t.features.title}</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Volume2 className="w-10 h-10" />}
              title={t.features.perAppVolume.title}
              description={t.features.perAppVolume.description}
              gradient="from-blue-500 to-blue-600"
              delay={0.1}
            />
            <FeatureCard
              icon={<VolumeX className="w-10 h-10" />}
              title={t.features.quickMute.title}
              description={t.features.quickMute.description}
              gradient="from-purple-500 to-purple-600"
              delay={0.2}
            />
            <FeatureCard
              icon={<Target className="w-10 h-10" />}
              title={t.features.focusMode.title}
              description={t.features.focusMode.description}
              gradient="from-indigo-500 to-indigo-600"
              delay={0.3}
            />
            <FeatureCard
              icon={<Layers className="w-10 h-10" />}
              title={t.features.audioProfiles.title}
              description={t.features.audioProfiles.description}
              gradient="from-emerald-500 to-emerald-600"
              delay={0.4}
            />
            <FeatureCard
              icon={<Keyboard className="w-10 h-10" />}
              title={t.features.keyboardShortcuts.title}
              description={t.features.keyboardShortcuts.description}
              gradient="from-orange-500 to-orange-600"
              delay={0.5}
            />
            <FeatureCard
              icon={<Palette className="w-10 h-10" />}
              title={t.features.nativeDesign.title}
              description={t.features.nativeDesign.description}
              gradient="from-pink-500 to-pink-600"
              delay={0.6}
            />
            <FeatureCard
              icon={<Zap className="w-10 h-10" />}
              title={t.features.magicBoost.title}
              description={t.features.magicBoost.description}
              gradient="from-yellow-500 to-yellow-600"
              delay={0.7}
            />
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <PrivacySection
        title={t.privacy.title}
        subtitle={t.privacy.subtitle}
        guaranteeTitle={t.privacy.guaranteeTitle}
        guaranteeDescription={t.privacy.guaranteeDescription}
        features={[
          {
            icon: <Shield className="w-8 h-8" />,
            title: t.privacy.features.noData.title,
            description: t.privacy.features.noData.description
          },
          {
            icon: <Lock className="w-8 h-8" />,
            title: t.privacy.features.localProcessing.title,
            description: t.privacy.features.localProcessing.description
          },
          {
            icon: <Server className="w-8 h-8" />,
            title: t.privacy.features.noCloud.title,
            description: t.privacy.features.noCloud.description
          },
          {
            icon: <Eye className="w-8 h-8" />,
            title: t.privacy.features.noTracking.title,
            description: t.privacy.features.noTracking.description
          }
        ]}
      />

      {/* Pricing Section */}
      <section className="py-20 px-6 bg-white dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl mb-6 text-slate-900 dark:text-white">{t.pricing.title}</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">{t.pricing.subtitle}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <PricingCard
              title={t.pricing.free.title}
              price={t.pricing.free.price}
              features={t.pricing.free.features}
              cta={t.pricing.free.cta}
              ctaLink={appStoreUrl}
              delay={0.1}
            />
            <PricingCard
              title={t.pricing.pro.title}
              price={t.pricing.pro.price}
              features={t.pricing.pro.features}
              cta={t.pricing.pro.cta}
              ctaLink={appStoreUrl}
              badge={t.pricing.pro.badge}
              isPro
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <BenefitBadge
              icon={<Check className="w-6 h-6" />}
              text={t.benefits.noSubscriptions}
              delay={0.1}
            />
            <BenefitBadge
              icon={<Shield className="w-6 h-6" />}
              text={t.benefits.noTracking}
              delay={0.2}
            />
            <BenefitBadge
              icon={<Star className="w-6 h-6" />}
              text={t.benefits.noAds}
              delay={0.3}
            />
            <BenefitBadge
              icon={<Zap className="w-6 h-6" />}
              text={t.benefits.nativeSupport}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection
        title={additionalT.faq.title}
        items={getFAQItems(currentLang)}
      />

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl mb-6">{t.finalCta.title}</h2>
            <p className="text-2xl text-blue-100 mb-10 leading-relaxed">
              {t.finalCta.subtitle}
            </p>
            <a
              href={appStoreUrl}
              className="inline-flex items-center gap-3 px-12 py-6 bg-white text-blue-600 rounded-2xl hover:bg-slate-50 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:-translate-y-1 text-xl font-semibold"
            >
              <Download className="w-7 h-7" />
              <span>{t.finalCta.cta}</span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 bg-slate-900 text-slate-400">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Volume2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-semibold text-white">MACA</span>
              </div>
              <p className="text-slate-500">{t.footer.tagline}</p>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-white font-semibold mb-4">{t.footer.legal}</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to={`/${currentLang}/imprint`}
                    className="hover:text-white transition-colors"
                  >
                    {t.footer.imprint}
                  </Link>
                </li>
                <li>
                  <Link
                    to={`/${currentLang}/privacy`}
                    className="hover:text-white transition-colors"
                  >
                    {currentLang === 'de' ? 'Datenschutz' :
                     currentLang === 'es' ? 'Privacidad' :
                     currentLang === 'fr' ? 'Confidentialité' :
                     currentLang === 'it' ? 'Privacy' :
                     currentLang === 'pt' ? 'Privacidade' :
                     currentLang === 'ja' ? 'プライバシー' :
                     currentLang === 'zh' ? '隐私' :
                     'Privacy Policy'}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-white font-semibold mb-4">{t.footer.support}</h3>
              <ul className="space-y-2">
                <li>
                  <a href="mailto:Support@getmaca.de" className="hover:text-white transition-colors">
                    Support@getmaca.de
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
            <p>© {currentYear} AMX Mediensysteme. {additionalT.copyright}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}