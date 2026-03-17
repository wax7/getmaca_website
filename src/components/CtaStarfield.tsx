/**
 * CtaStarfield – converging starfield + pulse-ring effect around a CTA button.
 * Small glowing particles fly inward toward the center (the button),
 * combined with visible pulsing rings that also shrink inward.
 */
import { useEffect, useRef, useCallback } from 'react';

interface Props {
  /** Width of the canvas area */
  width?: number;
  /** Height of the canvas area */
  height?: number;
  /** Whether dark mode is active */
  isDark?: boolean;
}

interface Star {
  // angle from center
  angle: number;
  // current distance from center (normalised 0-1, 1 = edge)
  dist: number;
  // speed (how fast it converges)
  speed: number;
  // size
  size: number;
  // opacity base
  opacity: number;
  // hue shift (slight variation around blue)
  hue: number;
}

const STAR_COUNT = 38;
const RING_COUNT = 4;

function createStar(): Star {
  return {
    angle: Math.random() * Math.PI * 2,
    dist: 0.45 + Math.random() * 0.55, // start between 45%-100% from center
    speed: 0.0012 + Math.random() * 0.0025,
    size: 1 + Math.random() * 2,
    opacity: 0.3 + Math.random() * 0.5,
    hue: 210 + (Math.random() - 0.5) * 30, // blue range 195-225
  };
}

export function CtaStarfield({ width = 360, height = 240, isDark = false }: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const ringsRef = useRef<number[]>([]);
  const rafRef = useRef<number>(0);

  const init = useCallback(() => {
    starsRef.current = Array.from({ length: STAR_COUNT }, () => createStar());
    // Ring phases (0-1, each ring converges from 1 to 0)
    ringsRef.current = Array.from({ length: RING_COUNT }, (_, i) => i / RING_COUNT);
  }, []);

  useEffect(() => {
    init();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const cx = width / 2;
    const cy = height / 2;
    // Use the shorter dimension as base radius, then stretch x slightly
    const baseR = height * 0.46;
    const rx = baseR * (width / height);
    const ry = baseR;

    let running = true;

    const draw = () => {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);

      const stars = starsRef.current;
      const rings = ringsRef.current;

      // ── Draw converging rings ──────────────────────────────────
      for (let i = 0; i < rings.length; i++) {
        rings[i] += 0.002;
        if (rings[i] > 1) rings[i] -= 1;

        const phase = rings[i];
        // Ring goes from scale 2.2 down to 0.7
        const scale = 2.2 - phase * 1.5;
        // Opacity: fades in at start, fades out approaching center
        const fadeIn = Math.min(phase * 4, 1);
        const fadeOut = Math.max(1 - (phase - 0.6) / 0.4, 0);
        const opacity = fadeIn * fadeOut * (isDark ? 0.35 : 0.28);

        if (opacity > 0.01) {
          ctx.beginPath();
          ctx.ellipse(cx, cy, rx * scale * 0.55, ry * scale * 0.55, 0, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(0, 122, 255, ${opacity})`;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      // ── Draw converging stars ──────────────────────────────────
      for (const star of stars) {
        star.dist -= star.speed;

        // Reset when reaching center
        if (star.dist <= 0.05) {
          star.dist = 0.7 + Math.random() * 0.3;
          star.angle = Math.random() * Math.PI * 2;
          star.speed = 0.0012 + Math.random() * 0.0025;
          star.size = 1 + Math.random() * 2;
          star.opacity = 0.3 + Math.random() * 0.5;
        }

        const x = cx + Math.cos(star.angle) * star.dist * rx;
        const y = cy + Math.sin(star.angle) * star.dist * ry;

        // Opacity: brighter when far, fades as it gets close
        const distFade = Math.min(star.dist / 0.3, 1);
        const edgeFade = star.dist > 0.85 ? (1 - star.dist) / 0.15 : 1;
        const alpha = star.opacity * distFade * edgeFade * (isDark ? 1 : 0.8);

        if (alpha > 0.02) {
          // Draw a small glow dot
          const grad = ctx.createRadialGradient(x, y, 0, x, y, star.size * 2.5);
          grad.addColorStop(0, `hsla(${star.hue}, 90%, ${isDark ? 70 : 55}%, ${alpha})`);
          grad.addColorStop(0.4, `hsla(${star.hue}, 85%, ${isDark ? 60 : 50}%, ${alpha * 0.5})`);
          grad.addColorStop(1, `hsla(${star.hue}, 80%, 50%, 0)`);

          ctx.beginPath();
          ctx.arc(x, y, star.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = grad;
          ctx.fill();

          // Bright core
          ctx.beginPath();
          ctx.arc(x, y, star.size * 0.6, 0, Math.PI * 2);
          ctx.fillStyle = `hsla(${star.hue}, 90%, ${isDark ? 85 : 75}%, ${alpha * 0.9})`;
          ctx.fill();
        }

        // Draw a faint trail line from slightly further out toward current position
        const trailLen = 0.04 + star.speed * 8;
        const tx = cx + Math.cos(star.angle) * (star.dist + trailLen) * rx;
        const ty = cy + Math.sin(star.angle) * (star.dist + trailLen) * ry;
        const trailAlpha = alpha * 0.35;
        if (trailAlpha > 0.01) {
          ctx.beginPath();
          ctx.moveTo(tx, ty);
          ctx.lineTo(x, y);
          ctx.strokeStyle = `hsla(${star.hue}, 80%, ${isDark ? 65 : 50}%, ${trailAlpha})`;
          ctx.lineWidth = star.size * 0.5;
          ctx.stroke();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(rafRef.current);
    };
  }, [width, height, isDark, init]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      style={{ width, height }}
    />
  );
}