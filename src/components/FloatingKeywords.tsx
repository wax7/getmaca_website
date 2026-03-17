import { useEffect, useRef, useCallback, useState } from 'react';
import type { Language } from '../locales/translations';

/**
 * Localized floating keyword badges for the Hero section.
 * Physics-based simulation with:
 * - Collision & mouse repulsion
 * - Parallax depth layers (3 tiers)
 * - Neon connection lines between nearby badges
 * - Micro-particles (tiny floating dots)
 * - Animated gradient borders (rotating conic-gradient)
 */
const KEYWORDS_BY_LANG: Record<Language, string[]> = {
  de: [
    'API-Schnittstelle', '7.1 Surround', 'Audio Routing', 'Multi-Room',
    'Steuerung', 'Equalizer', 'Auto-Normalizer', '1-Klick Steuerung',
    'Hotkeys', 'Profile', 'macOS-Nativ', 'Audio-Boost',
    'Fokus-Modus', 'Leistungsstark', 'Low CPU', 'Batterie-Optimiert',
    'Regelmäßige Updates', 'Lautstärke-Limiter', 'Per-App Audio',
    'Input/Output', 'Latenzfrei', 'Noise Gate', 'Automationen',
    'Dark Mode',
  ],
  en: [
    'API Interface', '7.1 Surround', 'Audio Routing', 'Multi-Room',
    'Control Center', 'Equalizer', 'Auto-Normalizer', '1-Click Control',
    'Hotkeys', 'Profiles', 'macOS-Native', 'Audio Boost',
    'Focus Mode', 'Powerful', 'Low CPU', 'Battery Optimized',
    'Regular Updates', 'Volume Limiter', 'Per-App Audio',
    'Input/Output', 'Zero Latency', 'Noise Gate', 'Automations',
    'Dark Mode',
  ],
  es: [
    'Interfaz API', '7.1 Surround', 'Enrutamiento', 'Multi-Sala',
    'Centro de Control', 'Ecualizador', 'Auto-Normalizador', 'Control 1-Clic',
    'Atajos', 'Perfiles', 'macOS-Nativo', 'Audio Boost',
    'Modo Enfoque', 'Potente', 'Bajo Consumo', 'Batería Optimizada',
    'Actualizaciones', 'Limitador Volumen', 'Audio Por App',
    'Entrada/Salida', 'Sin Latencia', 'Noise Gate', 'Automatizaciones',
    'Modo Oscuro',
  ],
  fr: [
    'Interface API', '7.1 Surround', 'Routage Audio', 'Multi-Pièces',
    'Centre de Contrôle', 'Égaliseur', 'Auto-Normaliseur', 'Contrôle 1-Clic',
    'Raccourcis', 'Profils', 'macOS-Natif', 'Audio Boost',
    'Mode Concentration', 'Performant', 'Faible CPU', 'Batterie Optimisée',
    'Mises à Jour', 'Limiteur Volume', 'Audio Par App',
    'Entrée/Sortie', 'Sans Latence', 'Noise Gate', 'Automatisations',
    'Mode Sombre',
  ],
  it: [
    'Interfaccia API', '7.1 Surround', 'Routing Audio', 'Multi-Stanza',
    'Centro di Controllo', 'Equalizzatore', 'Auto-Normalizzatore', 'Controllo 1-Clic',
    'Scorciatoie', 'Profili', 'macOS-Nativo', 'Audio Boost',
    'Modalità Focus', 'Potente', 'Basso Consumo', 'Batteria Ottimizzata',
    'Aggiornamenti', 'Limitatore Volume', 'Audio Per App',
    'Ingresso/Uscita', 'Zero Latenza', 'Noise Gate', 'Automazioni',
    'Modalità Scura',
  ],
  ja: [
    'APIインターフェース', '7.1サラウンド', 'オーディオルーティング', 'マルチルーム',
    'コントロール', 'イコライザー', 'オートノーマライザー', 'ワンクリック操作',
    'ホットキー', 'プロファイル', 'macOSネイティブ', 'オーディオブースト',
    'フォーカスモード', 'ハイパフォーマンス', '低CPU使用率', 'バッテリー最適化',
    '定期アップデート', '音量リミッター', 'アプリ別オーディオ',
    '入出力', 'ゼロレイテンシー', 'ノイズゲート', 'オートメーション',
    'ダークモード',
  ],
  'zh-Hans': [
    'API接口', '7.1环绕声', '音频路由', '多房间',
    '控制中心', '均衡器', '自动标准化', '一键控制',
    '快捷键', '配置文件', 'macOS原生', '音频增强',
    '专注模式', '高性能', '低CPU占用', '电池优化',
    '定期更新', '音量限制器', '逐应用音频',
    '输入/输出', '零延迟', '噪声门', '自动化',
    '深色模式',
  ],
  'zh-Hant': [
    'API介面', '7.1環繞聲', '音訊路由', '多房間',
    '控制中心', '等化器', '自動標準化', '一鍵控制',
    '快捷鍵', '設定檔', 'macOS原生', '音訊增強',
    '專注模式', '高效能', '低CPU佔用', '電池最佳化',
    '定期更新', '音量限制器', '逐應用音訊',
    '輸入/輸出', '零延遲', '噪音閘', '自動化',
    '深色式',
  ],
  ar: [
    'واجهة API', '7.1 صوت محيطي', 'توجيه الصوت', 'متعدد الغرف',
    'مركز التحكم', 'موازن الصوت', 'معايرة تلقائية', 'تحكم بنقرة واحدة',
    'مفاتيح اختصار', 'ملفات تعريف', 'macOS أصلي', 'تعزيز الصوت',
    'وضع التركيز', 'عالي الأداء', 'استهلاك منخفض', 'بطارية محسّنة',
    'تحديثات دورية', 'محدد الصوت', 'صوت لكل تطبيق',
    'إدخال/إخراج', 'بدون تأخير', 'بوابة الضوضاء', 'أتمتة',
    'الوضع الداكن',
  ],
  ru: [
    'API-интерфейс', '7.1 Surround', 'Маршрутизация', 'Мульти-комната',
    'Управление', 'Эквалайзер', 'Авто-нормализатор', 'Управление в 1 клик',
    'Горячие клавиши', 'Профили', 'macOS-нативное', 'Усиление звука',
    'Режим фокуса', 'Производительность', 'Низкая нагрузка', 'Оптимизация батареи',
    'Регулярные обновления', 'Ограничитель громкости', 'Звук по приложениям',
    'Вход/Выход', 'Без задержки', 'Шумоподавление', 'Автоматизация',
    'Тёмная тема',
  ],
  nl: [
    'API-interface', '7.1 Surround', 'Audio Routing', 'Multi-Room',
    'Bedieningscentrum', 'Equalizer', 'Auto-Normalizer', '1-Klik Bediening',
    'Sneltoetsen', 'Profielen', 'macOS-Natief', 'Audio Boost',
    'Focusmodus', 'Krachtig', 'Laag CPU', 'Batterij-Optimalisatie',
    'Regelmatige Updates', 'Volumebegrenzer', 'Per-App Audio',
    'Invoer/Uitvoer', 'Latentievrij', 'Noise Gate', 'Automatisering',
    'Donkere Modus',
  ],
  tr: [
    'API Arayüzü', '7.1 Surround', 'Ses Yönlendirme', 'Çoklu Oda',
    'Kontrol Merkezi', 'Ekolayzer', 'Otomatik Normalleştirici', '1-Tık Kontrol',
    'Kısayol Tuşları', 'Profiller', 'macOS-Yerel', 'Ses Güçlendirme',
    'Odak Modu', 'Güçlü', 'Düşük CPU', 'Pil Optimizasyonu',
    'Düzenli Güncellemeler', 'Ses Sınırlayıcı', 'Uygulama Başına Ses',
    'Giriş/Çıkış', 'Sıfır Gecikme', 'Noise Gate', 'Otomasyonlar',
    'Karanlık Mod',
  ],
  sv: [
    'API-gränssnitt', '7.1 Surround', 'Ljuddirigering', 'Multirum',
    'Kontrollcenter', 'Equalizer', 'Auto-Normaliserare', '1-Klick Kontroll',
    'Snabbtangenter', 'Profiler', 'macOS-Nativt', 'Ljudförstärkning',
    'Fokusläge', 'Kraftfull', 'Låg CPU', 'Batterioptimerad',
    'Regelbundna Uppdateringar', 'Volymbegränsare', 'Per-App Ljud',
    'Ingång/Utgång', 'Latensfri', 'Noise Gate', 'Automatisering',
    'Mörkt Läge',
  ],
  da: [
    'API-grænseflade', '7.1 Surround', 'Lydrouting', 'Multi-Rum',
    'Kontrollcenter', 'Equalizer', 'Auto-Normalisering', '1-Klik Kontroll',
    'Genvejstaster', 'Profiler', 'macOS-Nativt', 'Lydforstærkning',
    'Fokustilstand', 'Kraftfuld', 'Lav CPU', 'Batterioptimeret',
    'Regelmæssige Opdateringer', 'Lydstyrkebegrænser', 'Per-App Lyd',
    'Input/Output', 'Latensfri', 'Noise Gate', 'Automatisering',
    'Mørk Tilstand',
  ],
  ko: [
    'API 인터페이스', '7.1 서라운드', '오디오 라우팅', '멀티룸',
    '컨트롤 센터', '이퀄라이저', '자동 노멀라이저', '원클릭 제어',
    '단축키', '프로파일', 'macOS 네이티브', '오디오 부스트',
    '집중 모드', '고성능', '낮은 CPU', '배터리 최적화',
    '정기 업데이트', '볼륨 리미터', '앱별 오디오',
    '입출력', '제로 레이턴시', '노이즈 게이트', '자동화',
    '다크 모드',
  ],
  nb: [
    'API-grensesnitt', '7.1 Surround', 'Lyddirigering', 'Multirom',
    'Kontrollsenter', 'Equalizer', 'Auto-Normaliserer', '1-Klikk Kontroll',
    'Hurtigtaster', 'Profiler', 'macOS-Nativt', 'Lydforsterkning',
    'Fokusmodus', 'Kraftig', 'Lav CPU', 'Batterioptimalisert',
    'Regelmessige Oppdateringer', 'Volumbegrenser', 'Per-App Lyd',
    'Inngang/Utgang', 'Latensfri', 'Noise Gate', 'Automatisering',
    'Mørk Modus',
  ],
};

// ── Neon color palette ──────────────────────────────────────────────
type NeonColor = 'cyan' | 'magenta' | 'lime' | 'orange' | 'violet' | 'blue';

interface NeonDef {
  color: string;
  glow: string;
  border: string;
}

// Dark mode: vivid neon on dark glass
const NEON_COLORS_DARK: Record<NeonColor, NeonDef> = {
  cyan:    { color: '#00FFFF', glow: '0 0 6px #00FFFF, 0 0 14px #00FFFF, 0 0 30px #00FFFF55', border: 'rgba(0,255,255,0.35)' },
  magenta: { color: '#FF00FF', glow: '0 0 6px #FF00FF, 0 0 14px #FF00FF, 0 0 30px #FF00FF55', border: 'rgba(255,0,255,0.35)' },
  lime:    { color: '#39FF14', glow: '0 0 6px #39FF14, 0 0 14px #39FF14, 0 0 30px #39FF1455', border: 'rgba(57,255,20,0.35)' },
  orange:  { color: '#FF6600', glow: '0 0 6px #FF6600, 0 0 14px #FF6600, 0 0 30px #FF660055', border: 'rgba(255,102,0,0.35)' },
  violet:  { color: '#BF5AF2', glow: '0 0 6px #BF5AF2, 0 0 14px #BF5AF2, 0 0 30px #BF5AF255', border: 'rgba(191,90,242,0.35)' },
  blue:    { color: '#007AFF', glow: '0 0 6px #007AFF, 0 0 14px #007AFF, 0 0 30px #007AFF55', border: 'rgba(0,122,255,0.35)' },
};

// Light mode: softer muted tones, no harsh glow, frosted-glass feel
const NEON_COLORS_LIGHT: Record<NeonColor, NeonDef> = {
  cyan:    { color: '#0891B2', glow: 'none', border: 'rgba(8,145,178,0.2)' },
  magenta: { color: '#C026D3', glow: 'none', border: 'rgba(192,38,211,0.2)' },
  lime:    { color: '#16A34A', glow: 'none', border: 'rgba(22,163,74,0.2)' },
  orange:  { color: '#EA580C', glow: 'none', border: 'rgba(234,88,12,0.2)' },
  violet:  { color: '#9333EA', glow: 'none', border: 'rgba(147,51,234,0.2)' },
  blue:    { color: '#007AFF', glow: 'none', border: 'rgba(0,122,255,0.2)' },
};

const NEON_SEQUENCE: NeonColor[] = [
  'cyan', 'magenta', 'lime', 'blue', 'violet', 'orange',
  'blue', 'cyan', 'violet', 'lime', 'magenta', 'orange',
  'lime', 'blue', 'cyan', 'orange', 'magenta', 'violet',
  'cyan', 'lime', 'blue', 'magenta', 'orange', 'violet',
];

// ── Size tiers ──────────────────────────────────────────────────────
type SizeTier = 'sm' | 'md' | 'lg' | 'xl';

const SIZE_PX: Record<SizeTier, number> = { sm: 11, md: 13, lg: 15, xl: 18 };
const SIZE_PAD: Record<SizeTier, [number, number]> = {
  sm: [9, 4], md: [11, 5], lg: [14, 6], xl: [16, 7],
};

const SIZE_SEQUENCE: SizeTier[] = [
  'lg', 'md', 'xl', 'sm', 'md', 'lg', 'md', 'xl',
  'sm', 'lg', 'md', 'lg', 'xl', 'md', 'sm', 'lg',
  'md', 'lg', 'sm', 'xl', 'lg', 'md', 'lg', 'md',
];

// ── Parallax depth tiers ────────────────────────────────────────────
// depth 0 = far back, 1 = mid, 2 = front
const DEPTH_SEQUENCE = [
  1, 2, 0, 1, 2, 0, 1, 2,
  0, 1, 2, 1, 0, 2, 1, 0,
  2, 1, 0, 2, 1, 0, 2, 1,
];
const DEPTH_SCALE = [0.7, 0.9, 1.05];     // size multiplier per depth (reduced max)
const DEPTH_OPACITY = [0.45, 0.75, 0.95]; // opacity per depth
const DEPTH_SPEED = [0.4, 0.7, 1.0];      // velocity multiplier per depth

// ── Initial positions (% of container) ──────────────────────────────
// Seeded pseudo-random distribution – each badge gets a unique zone
// to prevent clustering, with jitter added at init time
const INIT_ZONES: [number, number][] = [
  [10, 8],   [32, 5],   [56, 10],  [80, 6],
  [6, 28],   [28, 24],  [52, 22],  [76, 28],
  [14, 44],  [38, 42],  [62, 40],  [86, 46],
  [4, 60],   [26, 62],  [50, 58],  [78, 62],
  [16, 76],  [40, 80],  [64, 74],  [88, 78],
  [10, 92],  [46, 94],  [72, 90],  [94, 94],
];

// Add randomized jitter (±8%) so badges never start on exact grid points
function jitteredPosition(zoneX: number, zoneY: number): [number, number] {
  const jitter = 8;
  const x = Math.max(2, Math.min(96, zoneX + (Math.random() - 0.5) * jitter * 2));
  const y = Math.max(2, Math.min(96, zoneY + (Math.random() - 0.5) * jitter * 2));
  return [x, y];
}

// ── Micro-particle (tiny background dots) ───────────────────────────
interface MicroDot {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  opacity: number;
  phase: number; // for pulsing
}

const MICRO_COUNT = 40;
const MICRO_COLORS = ['#00FFFF', '#FF00FF', '#39FF14', '#FF6600', '#BF5AF2', '#007AFF'];

function initMicroDots(w: number, h: number): MicroDot[] {
  return Array.from({ length: MICRO_COUNT }, (_, i) => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    size: 1.5 + Math.random() * 2.5,
    color: MICRO_COLORS[i % MICRO_COLORS.length],
    opacity: 0.2 + Math.random() * 0.4,
    phase: Math.random() * Math.PI * 2,
  }));
}

// ── Physics particle ────────────────────────────────────────────────
interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  vr: number;
  w: number;
  h: number;
  text: string;
  size: SizeTier;
  neon: NeonColor;
  depth: number;       // 0, 1, 2
  phaseOffset: number; // for gradient border animation
}

// ── Physics constants ───────────────────────────────────────────────
const REPULSION_STRENGTH = 1.8;
const REPULSION_RADIUS = 140;
const MOUSE_REPULSION_STRENGTH = 4.5;
const MOUSE_REPULSION_RADIUS = 180;
const FRICTION = 0.985;
const EDGE_ZONE = 80;
const EDGE_FORCE = 0.2;
const SPREAD_FORCE = 0.00002;     // near-zero even-distribution nudge
const BASE_SPEED = 0.6;
const MAX_SPEED = 4.5;

// ── Component ───────────────────────────────────────────────────────
interface FloatingKeywordsProps {
  lang?: Language;
  isDarkMode?: boolean;
}

export function FloatingKeywords({ lang = 'en', isDarkMode = false }: FloatingKeywordsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const microDotsRef = useRef<MicroDot[]>([]);
  const animFrameRef = useRef<number>(0);
  const frameRef = useRef(0);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -9999, y: -9999, active: false });
  const [renderTick, setRenderTick] = useState(0);
  const initializedRef = useRef(false);

  // Track mouse position relative to container
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        active: true,
      };
    };

    const onMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', onMouseMove);
    container.parentElement?.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      container.parentElement?.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  // Build initial particles
  const initParticles = useCallback((w: number, h: number) => {
    const pool = KEYWORDS_BY_LANG[lang] || KEYWORDS_BY_LANG.en;
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    const count = Math.min(shuffled.length, INIT_ZONES.length);

    return shuffled.slice(0, count).map((text, i): Particle => {
      const [px, py] = jitteredPosition(INIT_ZONES[i][0], INIT_ZONES[i][1]);
      const depth = DEPTH_SEQUENCE[i % DEPTH_SEQUENCE.length];
      const size = SIZE_SEQUENCE[i % SIZE_SEQUENCE.length];
      const neon = NEON_SEQUENCE[i % NEON_SEQUENCE.length];
      const seed = i * 137.5;
      const angle = (seed * 2.4) % (Math.PI * 2);
      const speed = (BASE_SPEED + (seed % 3) * 0.15) * DEPTH_SPEED[depth];
      const scale = DEPTH_SCALE[depth];
      const charW = SIZE_PX[size] * 0.6 * scale;
      const elW = text.length * charW + SIZE_PAD[size][0] * 2 * scale;
      const elH = (SIZE_PX[size] + SIZE_PAD[size][1] * 2) * scale;
      const rawRotate = ((seed * 7.3 + i * 23) % 90) - 45;

      return {
        x: (px / 100) * w,
        y: (py / 100) * h,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        rotation: Math.round(rawRotate),
        vr: ((i % 5) - 2) * 0.03,
        w: elW,
        h: elH,
        text,
        size,
        neon,
        depth,
        phaseOffset: (i / count) * 360,
      };
    });
  }, [lang]);

  // Physics loop
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let cancelled = false;

    // Defer initialization until container has real dimensions
    const initWhenReady = () => {
      if (cancelled) return;
      const el = containerRef.current;
      if (!el) return;
      const cw = el.clientWidth;
      const ch = el.clientHeight;

      // If container has no size yet, retry on next frame
      if (cw < 10 || ch < 10) {
        requestAnimationFrame(initWhenReady);
        return;
      }

      if (!initializedRef.current || particlesRef.current.length === 0) {
        particlesRef.current = initParticles(cw, ch);
        microDotsRef.current = initMicroDots(cw, ch);
        initializedRef.current = true;
      }

      // Start physics loop
      startPhysics();
    };

    const startPhysics = () => {
      const step = () => {
        if (cancelled) return;
        const el = containerRef.current;
        if (!el) return;
        const cw = el.clientWidth;
        const ch = el.clientHeight;
        const particles = particlesRef.current;
        const n = particles.length;
        const mouse = mouseRef.current;
        const frame = frameRef.current++;

        // ── Pairwise repulsion ──────────────────────────────────────────
        for (let i = 0; i < n; i++) {
          for (let j = i + 1; j < n; j++) {
            const a = particles[i];
            const b = particles[j];
            const dx = b.x - a.x;
            const dy = b.y - a.y;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;
            const minDist = (a.w + b.w) * 0.4 + 20;

            if (dist < REPULSION_RADIUS) {
              const force = REPULSION_STRENGTH * Math.max(0, 1 - dist / REPULSION_RADIUS);
              const scaledForce = dist < minDist ? force * 2.5 : force;
              const fx = (dx / dist) * scaledForce;
              const fy = (dy / dist) * scaledForce;
              a.vx -= fx;
              a.vy -= fy;
              b.vx += fx;
              b.vy += fy;
            }
          }
        }

        // ── Mouse repulsion ─────────────────────────────────────────────
        if (mouse.active) {
          for (let i = 0; i < n; i++) {
            const p = particles[i];
            const pcx = p.x + p.w * 0.5;
            const pcy = p.y + p.h * 0.5;
            const dx = pcx - mouse.x;
            const dy = pcy - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy) || 1;

            if (dist < MOUSE_REPULSION_RADIUS) {
              const force = MOUSE_REPULSION_STRENGTH * Math.pow(1 - dist / MOUSE_REPULSION_RADIUS, 1.5);
              p.vx += (dx / dist) * force;
              p.vy += (dy / dist) * force;
              p.vr += (dx > 0 ? 0.05 : -0.05) * force * 0.1;
            }
          }
        }

        // ── Update each particle ────────────────────────────────────────
        for (let i = 0; i < n; i++) {
          const p = particles[i];
          const depthSpeed = DEPTH_SPEED[p.depth];

          // Soft edge repulsion
          if (p.x < EDGE_ZONE) {
            const depth = 1 - p.x / EDGE_ZONE;
            p.vx += EDGE_FORCE * depth * depth;
          }
          const rightDist = cw - (p.x + p.w);
          if (rightDist < EDGE_ZONE) {
            const depth = 1 - rightDist / EDGE_ZONE;
            p.vx -= EDGE_FORCE * depth * depth;
          }
          if (p.y < EDGE_ZONE) {
            const depth = 1 - p.y / EDGE_ZONE;
            p.vy += EDGE_FORCE * depth * depth;
          }
          const bottomDist = ch - (p.y + p.h);
          if (bottomDist < EDGE_ZONE) {
            const depth = 1 - bottomDist / EDGE_ZONE;
            p.vy -= EDGE_FORCE * depth * depth;
          }

          // Magnetic even-distribution (very subtle)
          const cols = Math.round(Math.sqrt(n * (cw / ch)));
          const rows = Math.ceil(n / cols);
          const col = i % cols;
          const row = Math.floor(i / cols);
          const idealX = ((col + 0.5) / cols) * cw - p.w * 0.5;
          const idealY = ((row + 0.5) / rows) * ch - p.h * 0.5;
          p.vx += (idealX - p.x) * SPREAD_FORCE;
          p.vy += (idealY - p.y) * SPREAD_FORCE;

          // Apply velocity (depth-scaled)
          p.x += p.vx * depthSpeed;
          p.y += p.vy * depthSpeed;
          p.rotation += p.vr;

          // Friction
          p.vx *= FRICTION;
          p.vy *= FRICTION;
          p.vr *= 0.98;

          // Speed cap
          const speed = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
          if (speed > MAX_SPEED) {
            const scale = MAX_SPEED / speed;
            p.vx *= scale;
            p.vy *= scale;
          }

          // Minimum drift – use a RANDOM angle to prevent equilibrium sticking
          if (speed < BASE_SPEED * 0.3) {
            const randAngle = Math.random() * Math.PI * 2;
            p.vx += Math.cos(randAngle) * 0.12;
            p.vy += Math.sin(randAngle) * 0.12;
          }

          // Brownian motion – continuous tiny random perturbation every ~30 frames
          if (frame % 30 === (i % 30)) {
            const brownAngle = Math.random() * Math.PI * 2;
            const brownForce = 0.15 + Math.random() * 0.15;
            p.vx += Math.cos(brownAngle) * brownForce;
            p.vy += Math.sin(brownAngle) * brownForce;
            p.vr += (Math.random() - 0.5) * 0.02;
          }

          // Hard edge clamp (safety)
          const margin = 2;
          if (p.x < margin) { p.x = margin; p.vx = Math.abs(p.vx) * 0.4; }
          else if (p.x + p.w > cw - margin) { p.x = cw - margin - p.w; p.vx = -Math.abs(p.vx) * 0.4; }
          if (p.y < margin) { p.y = margin; p.vy = Math.abs(p.vy) * 0.4; }
          else if (p.y + p.h > ch - margin) { p.y = ch - margin - p.h; p.vy = -Math.abs(p.vy) * 0.4; }

          // Clamp rotation
          if (p.rotation > 45) { p.rotation = 45; p.vr *= -0.5; }
          if (p.rotation < -45) { p.rotation = -45; p.vr *= -0.5; }
        }

        // ── Update micro-dots ───────────────────────────────────────────
        for (const dot of microDotsRef.current) {
          dot.x += dot.vx;
          dot.y += dot.vy;
          // Wrap around edges
          if (dot.x < 0) dot.x = cw;
          if (dot.x > cw) dot.x = 0;
          if (dot.y < 0) dot.y = ch;
          if (dot.y > ch) dot.y = 0;
        }

        // Render every 2 frames
        if (frame % 2 === 0) {
          setRenderTick((t) => t + 1);
        }

        animFrameRef.current = requestAnimationFrame(step);
      };

      animFrameRef.current = requestAnimationFrame(step);
    };

    initWhenReady();
    return () => {
      cancelled = true;
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [initParticles]);

  // Re-init on lang change
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    particlesRef.current = initParticles(rect.width, rect.height);
  }, [lang, initParticles]);

  const particles = particlesRef.current;
  const microDots = microDotsRef.current;
  const frame = frameRef.current;

  // Sort particles by depth for correct z-ordering (back first)
  const sortedParticles = [...particles].sort((a, b) => a.depth - b.depth);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block"
      aria-hidden="true"
      style={{ zIndex: 1 }}
    >
      {/* ── Micro-particles (tiny background dots) ──────────────────── */}
      {microDots.map((dot, i) => {
        const pulse = Math.sin(frame * 0.02 + dot.phase) * 0.3 + 0.7;
        return (
          <div
            key={`dot-${i}`}
            className="absolute rounded-full"
            style={{
              transform: `translate3d(${dot.x}px, ${dot.y}px, 0)`,
              width: `${dot.size}px`,
              height: `${dot.size}px`,
              backgroundColor: isDarkMode ? dot.color : '#86868b',
              opacity: (isDarkMode ? dot.opacity : dot.opacity * 0.35) * pulse,
              boxShadow: isDarkMode ? `0 0 ${dot.size * 3}px ${dot.color}` : 'none',
              willChange: 'transform, opacity',
            }}
          />
        );
      })}

      {/* ── Keyword badges ─────────────────────────────────────────── */}
      {sortedParticles.map((p) => {
        const neon = isDarkMode ? NEON_COLORS_DARK[p.neon] : NEON_COLORS_LIGHT[p.neon];
        const scale = DEPTH_SCALE[p.depth];
        const depthOpacity = DEPTH_OPACITY[p.depth];
        const fontSize = SIZE_PX[p.size] * scale;
        const padX = SIZE_PAD[p.size][0] * scale;
        const padY = SIZE_PAD[p.size][1] * scale;
        const zIndex = p.depth + 2; // 2, 3, 4

        // Animated gradient border angle
        const gradAngle = (frame * 0.8 + p.phaseOffset) % 360;

        // Slow breathing scale: oscillates ±8% over ~4-6 seconds per badge
        const breathSpeed = 0.008 + (p.phaseOffset / 360) * 0.004;
        const breathScale = 1 + Math.sin(frame * breathSpeed + p.phaseOffset * 0.0175) * 0.08;

        // Light mode: frosted glass; Dark mode: dark glass with neon glow
        const badgeBg = isDarkMode
          ? 'rgba(0,0,0,0.75)'
          : 'rgba(255,255,255,0.82)';
        const badgeShadow = isDarkMode
          ? `0 0 8px ${neon.border}, inset 0 0 8px ${neon.border}`
          : `0 1px 4px rgba(0,0,0,0.08), 0 0 0 1px ${neon.border}`;
        const borderBg = isDarkMode
          ? `conic-gradient(from ${gradAngle}deg, ${neon.color}, transparent 40%, ${neon.color}55 60%, transparent 80%, ${neon.color})`
          : `conic-gradient(from ${gradAngle}deg, ${neon.color}88, transparent 40%, ${neon.color}44 60%, transparent 80%, ${neon.color}88)`;

        return (
          <div
            key={p.text}
            className="absolute"
            style={{
              transform: `translate3d(${p.x}px, ${p.y}px, 0) rotate(${p.rotation}deg) scale(${breathScale})`,
              willChange: 'transform',
              zIndex,
              background: borderBg,
              padding: '1.5px',
              borderRadius: '9999px',
              opacity: depthOpacity,
            }}
          >
            <span
              className="whitespace-nowrap select-none pointer-events-none rounded-full font-medium tracking-wide block"
              style={{
                fontSize: `${fontSize}px`,
                paddingLeft: `${padX}px`,
                paddingRight: `${padX}px`,
                paddingTop: `${padY}px`,
                paddingBottom: `${padY}px`,
                color: neon.color,
                textShadow: neon.glow,
                background: badgeBg,
                boxShadow: badgeShadow,
              }}
            >
              {p.text}
            </span>
          </div>
        );
      })}
    </div>
  );
}