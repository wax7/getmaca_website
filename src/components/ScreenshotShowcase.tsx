import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

// Import real screenshots
import screenshot1 from 'figma:asset/31fb86d38219c922a45a6dc661131a10a1ad8e23.png';
import screenshot2 from 'figma:asset/e2cb8e5e5695be07037e17128c790451dd3bb748.png';
import screenshot3 from 'figma:asset/4bba7de5516ff6cc1ee2e587ebb04b82f11fe63c.png';
import screenshot4 from 'figma:asset/b2679b7c3124c799faa5c96a97e26fbc9073e595.png';
import screenshot5 from 'figma:asset/a5be3662d52a2a8e5acba1d6308e4e6c875caf94.png';
import screenshot6 from 'figma:asset/04ab18392a3b3432344bb9b7f7679b6a7f60a6c6.png';
import screenshot7 from 'figma:asset/6675a694d43ed8c7d9efcc9b053699ae9825c385.png';

interface ScreenshotShowcaseProps {
  title: string;
  subtitle: string;
  currentLang: string;
}

interface Screenshot {
  image: string;
  title: {
    en: string;
    de: string;
    es: string;
    fr: string;
    it: string;
    pt: string;
    ja: string;
    zh: string;
  };
  description: {
    en: string;
    de: string;
    es: string;
    fr: string;
    it: string;
    pt: string;
    ja: string;
    zh: string;
  };
}

export function ScreenshotShowcase({ title, subtitle, currentLang }: ScreenshotShowcaseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const screenshots: Screenshot[] = [
    {
      image: screenshot1,
      title: {
        en: 'Complete Audio Control',
        de: 'Vollständige Audio-Kontrolle',
        es: 'Control de Audio Completo',
        fr: 'Contrôle Audio Complet',
        it: 'Controllo Audio Completo',
        pt: 'Controle de Áudio Completo',
        ja: '完全なオーディオコントロール',
        zh: '完整音频控制'
      },
      description: {
        en: 'Manage app volumes, equalizer, and output devices all in one place',
        de: 'Verwalte App-Lautstärken, Equalizer und Ausgabegeräte an einem Ort',
        es: 'Gestiona volúmenes de aplicaciones, ecualizador y dispositivos de salida en un solo lugar',
        fr: 'Gérez les volumes des applications, l\'égaliseur et les périphériques de sortie en un seul endroit',
        it: 'Gestisci volumi delle app, equalizzatore e dispositivi di uscita in un unico posto',
        pt: 'Gerencie volumes de aplicativos, equalizador e dispositivos de saída em um só lugar',
        ja: 'アプリの音量、イコライザー、出力デバイスを一箇所で管理',
        zh: '在一处管理应用音量、均衡器和输出设备'
      }
    },
    {
      image: screenshot2,
      title: {
        en: 'Individual App Control',
        de: 'Individuelle App-Kontrolle',
        es: 'Control Individual de Aplicaciones',
        fr: 'Contrôle Individuel des Applications',
        it: 'Controllo Individuale delle App',
        pt: 'Controle Individual de Aplicativos',
        ja: '個別アプリコントロール',
        zh: '独立应用控制'
      },
      description: {
        en: 'Adjust volume for each running application with precision',
        de: 'Passe die Lautstärke für jede laufende Anwendung präzise an',
        es: 'Ajusta el volumen de cada aplicación en ejecución con precisión',
        fr: 'Ajustez le volume de chaque application en cours d\'exécution avec précision',
        it: 'Regola il volume di ogni applicazione in esecuzione con precisione',
        pt: 'Ajuste o volume de cada aplicativo em execução com precisão',
        ja: '実行中の各アプリケーションの音量を精密に調整',
        zh: '精确调整每个运行应用的音量'
      }
    },
    {
      image: screenshot3,
      title: {
        en: 'Gaming Profiles',
        de: 'Gaming-Profile',
        es: 'Perfiles de Juego',
        fr: 'Profils de Jeu',
        it: 'Profili Gaming',
        pt: 'Perfis de Jogos',
        ja: 'ゲーミングプロファイル',
        zh: '游戏配置文件'
      },
      description: {
        en: 'Create custom audio profiles for different scenarios like gaming, work, or meetings',
        de: 'Erstelle benutzerdefinierte Audio-Profile für verschiedene Szenarien wie Gaming, Arbeit oder Meetings',
        es: 'Crea perfiles de audio personalizados para diferentes escenarios como juegos, trabajo o reuniones',
        fr: 'Créez des profils audio personnalisés pour différents scénarios comme les jeux, le travail ou les réunions',
        it: 'Crea profili audio personalizzati per diversi scenari come gaming, lavoro o riunioni',
        pt: 'Crie perfis de áudio personalizados para diferentes cenários como jogos, trabalho ou reuniões',
        ja: 'ゲーム、仕事、会議など、さまざまなシナリオのカスタムオーディオプロファイルを作成',
        zh: '为游戏、工作或会议等不同场景创建自定义音频配置文件'
      }
    },
    {
      image: screenshot4,
      title: {
        en: 'Professional Equalizer',
        de: 'Professioneller Equalizer',
        es: 'Ecualizador Profesional',
        fr: 'Égaliseur Professionnel',
        it: 'Equalizzatore Professionale',
        pt: 'Equalizador Profissional',
        ja: 'プロフェッショナルイコライザー',
        zh: '专业均衡器'
      },
      description: {
        en: 'Fine-tune audio with a 10-band equalizer and bass boost',
        de: 'Feinabstimmung des Audios mit einem 10-Band-Equalizer und Bass-Boost',
        es: 'Ajusta el audio con un ecualizador de 10 bandas y refuerzo de graves',
        fr: 'Ajustez l\'audio avec un égaliseur à 10 bandes et amplification des basses',
        it: 'Ottimizza l\'audio con un equalizzatore a 10 bande e amplificazione dei bassi',
        pt: 'Ajuste o áudio com um equalizador de 10 bandas e reforço de graves',
        ja: '10バンドイコライザーとベースブーストでオーディオを微調整',
        zh: '使用10段均衡器和低音增强微调音频'
      }
    },
    {
      image: screenshot5,
      title: {
        en: 'Quick Profile Switching',
        de: 'Schneller Profil-Wechsel',
        es: 'Cambio Rápido de Perfiles',
        fr: 'Changement Rapide de Profil',
        it: 'Cambio Rapido del Profilo',
        pt: 'Troca Rápida de Perfis',
        ja: 'クイックプロファイル切り替え',
        zh: '快速配置文件切换'
      },
      description: {
        en: 'Switch between Work, Gaming, Travel, and custom profiles instantly',
        de: 'Wechsle sofort zwischen Arbeit, Gaming, Reise und benutzerdefinierten Profilen',
        es: 'Cambia instantáneamente entre perfiles de Trabajo, Juegos, Viajes y personalizados',
        fr: 'Basculez instantanément entre les profils Travail, Jeu, Voyage et personnalisés',
        it: 'Passa istantaneamente tra profili Lavoro, Gaming, Viaggio e personalizzati',
        pt: 'Alterne instantaneamente entre perfis de Trabalho, Jogos, Viagem e personalizados',
        ja: '仕事、ゲーム、旅行、カスタムプロファイルを即座に切り替え',
        zh: '在工作、游戏、旅行和自定义配置文件之间即时切换'
      }
    },
    {
      image: screenshot6,
      title: {
        en: 'Focus Mode',
        de: 'Fokus-Modus',
        es: 'Modo de Enfoque',
        fr: 'Mode Focus',
        it: 'Modalità Focus',
        pt: 'Modo Foco',
        ja: 'フォーカスモード',
        zh: '专注模式'
      },
      description: {
        en: 'Mute all apps except communication tools like Teams, Discord, and Zoom',
        de: 'Stumme alle Apps außer Kommunikationstools wie Teams, Discord und Zoom',
        es: 'Silencia todas las aplicaciones excepto herramientas de comunicación como Teams, Discord y Zoom',
        fr: 'Coupez le son de toutes les applications sauf les outils de communication comme Teams, Discord et Zoom',
        it: 'Silenzia tutte le app tranne gli strumenti di comunicazione come Teams, Discord e Zoom',
        pt: 'Silencie todos os aplicativos, exceto ferramentas de comunicação como Teams, Discord e Zoom',
        ja: 'Teams、Discord、Zoomなどのコミュニケーションツール以外のすべてのアプリをミュート',
        zh: '除Teams、Discord和Zoom等通信工具外，静音所有应用'
      }
    },
    {
      image: screenshot7,
      title: {
        en: 'Total Silence Mode',
        de: 'Totaler Stille-Modus',
        es: 'Modo Silencio Total',
        fr: 'Mode Silence Total',
        it: 'Modalità Silenzio Totale',
        pt: 'Modo Silêncio Total',
        ja: '完全サイレンスモード',
        zh: '完全静音模式'
      },
      description: {
        en: 'Mute all applications instantly with one click for maximum focus',
        de: 'Stumme alle Anwendungen sofort mit einem Klick für maximale Konzentration',
        es: 'Silencia todas las aplicaciones al instante con un clic para máxima concentración',
        fr: 'Coupez le son de toutes les applications instantanément en un clic pour une concentration maximale',
        it: 'Silenzia tutte le applicazioni istantaneamente con un clic per la massima concentrazione',
        pt: 'Silencie todos os aplicativos instantaneamente com um clique para máxima concentração',
        ja: 'ワンクリックですべてのアプリケーションを即座にミュートして最大限の集中力を',
        zh: '一键即时静音所有应用程序以获得最大专注度'
      }
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const currentScreenshot = screenshots[currentIndex];
  const lang = currentLang as keyof typeof currentScreenshot.title;

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-6 text-slate-900 dark:text-white">{title}</h2>
          <p className="text-2xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        {/* Screenshot Carousel */}
        <div className="relative max-w-5xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            {/* Main Screenshot */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 flex items-center justify-center" style={{ minHeight: '400px', maxHeight: '700px' }}>
              <ImageWithFallback
                src={currentScreenshot.image}
                alt={currentScreenshot.title[lang]}
                className="w-auto h-auto max-w-full max-h-[700px] object-contain"
              />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-slate-700 transition-colors z-10"
              aria-label="Previous screenshot"
            >
              <ChevronLeft className="w-6 h-6 text-slate-900 dark:text-white" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white dark:hover:bg-slate-700 transition-colors z-10"
              aria-label="Next screenshot"
            >
              <ChevronRight className="w-6 h-6 text-slate-900 dark:text-white" />
            </button>
          </motion.div>

          {/* Screenshot Info */}
          <motion.div
            key={`info-${currentIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-center"
          >
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">
              {currentScreenshot.title[lang]}
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              {currentScreenshot.description[lang]}
            </p>
          </motion.div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {screenshots.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-blue-600 dark:bg-blue-400 w-8'
                    : 'bg-slate-400 dark:bg-slate-600 hover:bg-slate-500 dark:hover:bg-slate-500'
                }`}
                aria-label={`Go to screenshot ${index + 1}`}
              />
            ))}
          </div>

          {/* Screenshot Counter */}
          <div className="text-center mt-4 text-sm text-slate-500 dark:text-slate-400">
            {currentIndex + 1} / {screenshots.length}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/10 dark:bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      </div>
    </section>
  );
}