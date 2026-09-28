"use client";

import { useEffect, useRef } from "react";

// Voxel sphere for the homepage hero. Signal blue is the only lit color.
const R = 12;
const BUILD_MS = 2600;
const FILL_MS = 500;
const START_SCALE = 0.75;
const ROT_SPEED = 0.12;
const TILT = 0.55;
const DRIFT = 0.025;
const OUTLINE_LOOP_MS = 4200;
const HOVER_RADIUS = 70;
const PUSH = 14;
const SPRING = 0.12;
const DAMP = 0.78;
const HEAT_DECAY = 0.965;
const SIGNAL_HUE = 198;

type Vec3 = [number, number, number];
type RGB = [number, number, number];

interface Cube {
  x: number; y: number; z: number;
  faces: number[];
  delay: number; phase: number;
  ox: number; oy: number; vx: number; vy: number;
  heat: number; hue: number;
  sx: number; sy: number; d: number;
}

const FACES: Vec3[] = [[1, 0, 0], [-1, 0, 0], [0, 1, 0], [0, -1, 0], [0, 0, 1], [0, 0, -1]];
const inside = (x: number, y: number, z: number) => x * x + y * y + z * z <= R * R + R * 0.6;

function buildCubes(): Cube[] {
  const cubes: Cube[] = [];
  for (let x = -R; x <= R; x++) for (let y = -R; y <= R; y++) for (let z = -R; z <= R; z++) {
    if (!inside(x, y, z)) continue;
    const faces: number[] = [];
    FACES.forEach((n, i) => { if (!inside(x + n[0], y + n[1], z + n[2])) faces.push(i); });
    if (!faces.length) continue;
    cubes.push({
      x, y, z, faces,
      delay: ((y + R) / (2 * R)) * (BUILD_MS - FILL_MS) + Math.random() * 180,
      phase: ((y + R) / (2 * R)) * 0.6 + Math.random() * 0.08,
      ox: 0, oy: 0, vx: 0, vy: 0, heat: 0, hue: SIGNAL_HUE, sx: 0, sy: 0, d: 0,
    });
  }
  return cubes;
}

const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const clamp = (t: number) => (t < 0 ? 0 : t > 1 ? 1 : t);
const mix = (a: number, b: number, t: number) => a + (b - a) * t;
function hsl(h: number, s: number, l: number): RGB {
  s /= 100; l /= 100;
  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return [f(0) * 255, f(8) * 255, f(4) * 255];
}
const rgb = (c: RGB) => `rgb(${c[0] | 0},${c[1] | 0},${c[2] | 0})`;
const lerpC = (a: RGB, b: RGB, t: number): RGB => [mix(a[0], b[0], t), mix(a[1], b[1], t), mix(a[2], b[2], t)];

export function VoxelSphere({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cubes = buildCubes();
    let W = 0, H = 0, S = 0;
    let raf = 0;
    let visible = true;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      W = cv.clientWidth; H = cv.clientHeight;
      if (W < 1 || H < 1) return;
      cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      S = Math.min(W, H) / (R * 2.7);
      if (reduce) paint(0);
    };
    const ro = new ResizeObserver(resize);
    ro.observe(cv);

    const mouse = { x: -9999, y: -9999 };
    const onMove = (e: PointerEvent) => {
      if (reduce) return;
      const r = cv.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    };
    const onLeave = () => { mouse.x = mouse.y = -9999; };
    cv.addEventListener("pointermove", onMove);
    cv.addEventListener("pointerleave", onLeave);

    const t0 = performance.now();

    function paint(now: number) {
      if (!ctx) return;
      const el = reduce ? BUILD_MS + FILL_MS + 400 : now - t0;
      const sec = el / 1000;
      const scale = reduce ? 1 : mix(START_SCALE, 1, easeOut(clamp(el / (BUILD_MS + 200))));
      const s = S * scale;

      const a = reduce ? 0.9 : sec * ROT_SPEED;
      const ca = Math.cos(a), sa = Math.sin(a);
      const ct = Math.cos(TILT), st = Math.sin(TILT);
      const proj = (x: number, y: number, z: number): Vec3 => {
        const x1 = x * ca + z * sa, z1 = -x * sa + z * ca;
        const y2 = y * ct - z1 * st, z2 = y * st + z1 * ct;
        return [x1, -y2, z2];
      };
      const AX = [proj(0.5, 0, 0), proj(0, 0.5, 0), proj(0, 0, 0.5)];
      const N = FACES.map((n) => proj(n[0], n[1], n[2]));

      const m = Math.min(W, H);
      const drift = reduce ? 0 : 1;
      const cx0 = W / 2 + Math.sin(sec * 0.45) * m * DRIFT * drift;
      const cy0 = H / 2 + Math.sin(sec * 0.61 + 1.3) * m * DRIFT * 0.8 * drift;

      for (const c of cubes) {
        const p = proj(c.x, c.y, c.z);
        c.sx = cx0 + p[0] * s; c.sy = cy0 + p[1] * s; c.d = p[2];
      }
      cubes.sort((p, q) => p.d - q.d);

      ctx.clearRect(0, 0, W, H);
      ctx.lineJoin = "round";
      const lw = Math.max(0.6, s * 0.07);

      for (const c of cubes) {
        const lt = el - c.delay;
        if (lt <= 0) continue;
        const fillT = easeOut(clamp(lt / FILL_MS));

        if (!reduce && fillT > 0.9) {
          const dx = c.sx - mouse.x, dy = c.sy - mouse.y;
          const d = Math.hypot(dx, dy);
          let tx = 0, ty = 0;
          if (d < HOVER_RADIUS) {
            const f = 1 - d / HOVER_RADIUS, n = d || 1;
            tx = (dx / n) * PUSH * f;
            ty = (dy / n) * PUSH * f - PUSH * 0.6 * f;
            if (f > c.heat) c.heat = f;
          }
          c.vx = (c.vx + (tx - c.ox) * SPRING) * DAMP;
          c.vy = (c.vy + (ty - c.oy) * SPRING) * DAMP;
          c.ox += c.vx; c.oy += c.vy;
          c.heat *= HEAT_DECAY;
        }
        const px = c.sx + c.ox, py = c.sy + c.oy;

        let dashLen = 0, dashOff = 0;
        if (!reduce) {
          const lp = ((el / OUTLINE_LOOP_MS) - c.phase + 10) % 1;
          if (lp < 0.35) dashLen = easeInOut(lp / 0.35);
          else if (lp < 0.7) dashLen = 1;
          else { const e = easeInOut((lp - 0.7) / 0.3); dashLen = 1 - e; dashOff = -e; }
        }

        const acc = hsl(SIGNAL_HUE, 85, 58);
        const accD = hsl(SIGNAL_HUE, 80, 30);
        const accDD = hsl(SIGNAL_HUE, 80, 18);

        for (const fi of c.faces) {
          const n = N[fi];
          if (n[2] <= 0.01) continue;
          const f = FACES[fi];
          const k = f[0] ? 0 : f[1] ? 1 : 2;
          const [u, v] = k === 0 ? [AX[1], AX[2]] : k === 1 ? [AX[0], AX[2]] : [AX[0], AX[1]];
          const sg = f[0] + f[1] + f[2];
          const fx = px + AX[k][0] * sg * s, fy = py + AX[k][1] * sg * s;

          ctx.beginPath();
          ctx.moveTo(fx + (u[0] + v[0]) * s, fy + (u[1] + v[1]) * s);
          ctx.lineTo(fx + (u[0] - v[0]) * s, fy + (u[1] - v[1]) * s);
          ctx.lineTo(fx - (u[0] + v[0]) * s, fy - (u[1] + v[1]) * s);
          ctx.lineTo(fx - (u[0] - v[0]) * s, fy - (u[1] - v[1]) * s);
          ctx.closePath();

          let base: RGB, hot: RGB;
          if (fi === 2) { base = [212, 212, 212]; hot = acc; }
          else {
            const lit = Math.max(0, -n[0] * 0.7 + n[2] * 0.3);
            const v0 = 8 + lit * 30;
            base = [v0, v0, v0]; hot = lit > 0.3 ? accD : accDD;
          }
          ctx.globalAlpha = fillT;
          ctx.fillStyle = rgb(lerpC(base, hot, c.heat));
          ctx.fill();
          ctx.globalAlpha = 1;

          ctx.lineWidth = lw;
          ctx.strokeStyle = fillT > 0 ? `rgba(255,255,255,${0.18 * fillT})` : "rgba(20,20,20,0.25)";
          ctx.stroke();

          if (dashLen > 0.001) {
            const per = 4 * s;
            ctx.setLineDash([per * dashLen, per]);
            ctx.lineDashOffset = dashOff * per;
            ctx.strokeStyle = fillT > 0.5 ? "rgba(255,255,255,0.85)" : "rgba(20,20,20,0.9)";
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.lineDashOffset = 0;
          }
        }
      }
    }

    const frame = (now: number) => {
      raf = 0;
      if (!visible || document.hidden) return;
      paint(now);
      raf = requestAnimationFrame(frame);
    };

    const kick = () => {
      if (reduce || raf || !visible || document.hidden) return;
      raf = requestAnimationFrame(frame);
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) kick();
      else if (raf) { cancelAnimationFrame(raf); raf = 0; }
    });
    io.observe(cv);

    const onVis = () => {
      if (document.hidden && raf) { cancelAnimationFrame(raf); raf = 0; }
      else kick();
    };
    document.addEventListener("visibilitychange", onVis);

    resize();
    if (reduce) paint(0);
    else kick();

    return () => {
      if (raf) cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
      cv.removeEventListener("pointermove", onMove);
      cv.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      aria-hidden="true"
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
}
