import { Outlet, useParams } from 'react-router';
import { ScrollToTop } from '../components/ScrollToTop';
import { ScrollToTopButton } from '../components/ScrollToTopButton';
import { DocumentHead } from '../components/DocumentHead';
import { CookieBanner } from '../components/CookieBanner';
import { resolveLanguage } from '../utils/language-config';

// Noscript messages for crawlers that don't execute JS
const noscriptMessages: Record<string, { title: string; desc: string; cta: string; jsNote: string }> = {
  en: { title: 'MACA – Master Audio Control', desc: 'Per-app volume control for macOS. Individual mixer, 10-band EQ, audio profiles, Focus Mode.', cta: 'Download on the App Store', jsNote: 'This website requires JavaScript. Please enable JavaScript to view the full experience.' },
  de: { title: 'MACA – Master Audio Control', desc: 'Lautstärke pro App für macOS. Individueller Mixer, 10-Band-EQ, Audio-Profile, Fokus-Modus.', cta: 'Im App Store laden', jsNote: 'Diese Website benötigt JavaScript. Bitte aktivieren Sie JavaScript für die volle Darstellung.' },
  fr: { title: 'MACA – Master Audio Control', desc: 'Volume par application sur macOS. Mixer individuel, EQ 10 bandes, profils audio, Mode Focus.', cta: 'Télécharger sur l\'App Store', jsNote: 'Ce site nécessite JavaScript. Veuillez activer JavaScript pour profiter de l\'expérience complète.' },
  es: { title: 'MACA – Master Audio Control', desc: 'Volumen por app en macOS. Mezclador individual, EQ 10 bandas, perfiles de audio, Modo Enfoque.', cta: 'Descargar en la App Store', jsNote: 'Este sitio web requiere JavaScript. Por favor, active JavaScript para ver la experiencia completa.' },
  it: { title: 'MACA – Master Audio Control', desc: 'Volume per app su macOS. Mixer individuale, EQ 10 bande, profili audio, Modalità Focus.', cta: 'Scarica dall\'App Store', jsNote: 'Questo sito richiede JavaScript. Si prega di abilitare JavaScript per l\'esperienza completa.' },
  ja: { title: 'MACA – Master Audio Control', desc: 'macOSのアプリごとの音量コントロール。個別ミキサー、10バンドEQ、オーディオプロファイル、フォーカスモード。', cta: 'App Storeでダウンロード', jsNote: 'このウェブサイトにはJavaScriptが必要です。完全な体験のためにJavaScriptを有効にしてください。' },
  ar: { title: 'MACA – Master Audio Control', desc: 'تحكم في مستوى الصوت لكل تطبيق على macOS. خلاط فردي، معادل 10 نطاقات، ملفات صوتية، وضع التركيز.', cta: 'تحميل من App Store', jsNote: 'يتطلب هذا الموقع JavaScript. يرجى تمكين JavaScript لعرض التجربة الكاملة.' },
  ru: { title: 'MACA – Master Audio Control', desc: 'Управление громкостью каждого приложения на macOS. Индивидуальный микшер, 10-полосный EQ, аудиопрофили, режим фокусировки.', cta: 'Загрузить в App Store', jsNote: 'Этот сайт требует JavaScript. Пожалуйста, включите JavaScript для полноценного просмотра.' },
  ko: { title: 'MACA – Master Audio Control', desc: 'macOS 앱별 볼륨 컨트롤. 개별 믹서, 10대 EQ, 오디오 프로필, 포커스 모드.', cta: 'App Store에서 다운로드', jsNote: '이 웹사이트는 JavaScript가 필요합니다. 전체 경험을 보려면 JavaScript를 활성화하세요.' },
  nb: { title: 'MACA – Master Audio Control', desc: 'Per-app volumkontroll for macOS. Individuell mixer, 10-bands EQ, lydprofiler, Fokusmodus.', cta: 'Last ned fra App Store', jsNote: 'Denne nettsiden krever JavaScript. Vennligst aktiver JavaScript for full opplevelse.' },
};

export function RootLayout() {
  const { lang } = useParams();
  const currentLang = resolveLanguage(lang);
  const isRtl = currentLang === 'ar';
  const ns = noscriptMessages[currentLang] || noscriptMessages.en;

  return (
    <div dir={isRtl ? 'rtl' : 'ltr'}>
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>
      {/* Noscript fallback for crawlers / prerender: locale-aware message */}
      <noscript>
        <div style={{ padding: '2rem', textAlign: 'center', fontFamily: 'system-ui, sans-serif' }}>
          <h1>{ns.title}</h1>
          <p>{ns.desc}</p>
          <p>{ns.jsNote}</p>
          <a href="https://apps.apple.com/app/maca-master-audio-control/id6759258773">{ns.cta}</a>
        </div>
      </noscript>
      {/* Sentinel element for IntersectionObserver-based scroll detection. */}
      <div id="top-sentinel" aria-hidden="true" style={{ position: 'absolute', top: 0, left: 0, width: '1px', height: '1px', pointerEvents: 'none' }} />
      <DocumentHead />
      <ScrollToTop />
      <ScrollToTopButton />
      <CookieBanner />
      <Outlet />
    </div>
  );
}