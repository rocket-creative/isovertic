"use client";

/**
 * ISOVERTIC iso sphere. Tonal voxel sphere on canvas.
 * Floats on a slow loop, breaks apart under the cursor, click sends a pulse.
 * Usage: place inside a square box, e.g.
 *   <div className="relative aspect-square w-full max-w-[640px]"><IsoSphere /></div>
 * The canvas overflows the box by 40% each side so scattered cubes can fly out.
 * Give the parent section `overflow-hidden` and the hero copy `relative z-10`.
 */
import { useEffect, useRef } from "react";

type Props = {
  resolution?: number; // sphere radius in cubes
  lineWeight?: number; // px
  lineColor?: string;
  scatter?: number; // how far cubes fly on hover
  float?: number; // idle floating strength, 0 to disable
  tint?: boolean; // subtle signal blue on scattered cubes
};

type Vox = {
  x: number; y: number; z: number; nx: number; ny: number; nz: number;
  rx: number; ry: number; rz: number; rm: number; ease: number;
  ox: number; oy: number; oz: number; d: number; heat: number;
};

const TONE = ["#FFFFFF", "#EEECE7", "#E4E2DC"];
const SIGNAL = ["#0AB1FF", "#0A93D4", "#0B7DB4"];
const OVER = 1.8; // canvas size relative to the box

function hexToRgb(h: string) {
  return [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
}
const TONE_RGB = TONE.map(hexToRgb);
const SIGNAL_RGB = SIGNAL.map(hexToRgb);
function mix(i: number, t: number) {
  const a = TONE_RGB[i], b = SIGNAL_RGB[i];
  return `rgb(${Math.round(a[0] + (b[0] - a[0]) * t)},${Math.round(a[1] + (b[1] - a[1]) * t)},${Math.round(a[2] + (b[2] - a[2]) * t)})`;
}

function buildVoxels(R: number): Vox[] {
  const set = new Set<string>();
  const k = (x: number, y: number, z: number) => `${x},${y},${z}`;
  const rr = (R + 0.5) ** 2;
  for (let x = -R; x <= R; x++)
    for (let y = -R; y <= R; y++)
      for (let z = -R; z <= R; z++) if (x * x + y * y + z * z <= rr) set.add(k(x, y, z));
  const out: Vox[] = [];
  set.forEach((s) => {
    const [x, y, z] = s.split(",").map(Number);
    if (x + y + z < -2) return;
    const shell =
      !set.has(k(x + 1, y, z)) || !set.has(k(x - 1, y, z)) ||
      !set.has(k(x, y + 1, z)) || !set.has(k(x, y - 1, z)) ||
      !set.has(k(x, y, z + 1)) || !set.has(k(x, y, z - 1));
    if (!shell) return;
    const L = Math.hypot(x + 0.5, y + 0.5, z + 0.5) || 1;
    const h1 = Math.sin(x * 12.9898 + y * 78.233 + z * 37.719) * 43758.5453;
    const rnd = (i: number) => { const q = Math.sin(h1 + i * 17.17) * 9973.1; return q - Math.floor(q); };
    out.push({
      x, y, z, nx: (x + 0.5) / L, ny: (y + 0.5) / L, nz: (z + 0.5) / L,
      rx: rnd(1) * 2 - 1, ry: rnd(2) * 2 - 1, rz: rnd(3) * 2 - 1,
      rm: 0.45 + rnd(4) * 1.1, ease: 0.05 + rnd(5) * 0.09,
      ox: 0, oy: 0, oz: 0, d: 0, heat: 0,
    });
  });
  return out;
}

export default function IsoSphere({
  resolution = 13,
  lineWeight = 0.35,
  lineColor = "#D6D4CE",
  scatter = 1.4,
  float = 1,
  tint = true,
}: Props) {
  const boxRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const box = boxRef.current, cv = canvasRef.current;
    if (!box || !cv) return;
    const ctx = cv.getContext("2d")!;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const R = resolution;
    const vox = buildVoxels(R);
    const mouse = { x: 0, y: 0, tx: 0, ty: 0, on: 0, target: 0 };
    let ripples: { n: [number, number, number]; t: number }[] = [];
    let W = 0, H = 0, dpr = 1, scale = 1, cx = 0, cy = 0, padX = 0, padY = 0, fx = 0, fy = 0, raf = 0;

    const proj = (x: number, y: number, z: number): [number, number] => [
      cx + fx + (x - y) * 0.8660254 * scale,
      cy + fy + ((x + y) * 0.5 - z) * scale,
    ];

    const resize = () => {
      const bw = box.clientWidth, bh = box.clientHeight;
      if (!bw || !bh) return;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = bw * OVER; H = bh * OVER;
      padX = (bw * (OVER - 1)) / 2; padY = (bh * (OVER - 1)) / 2;
      cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
      const ext = (R + 1.6) * 0.8660254 * Math.SQRT2;
      scale = Math.min(bw, bh) / 2 / ext;
      cx = W / 2; cy = H / 2;
      if (reduce) draw(0);
    };

    const pick = (mx: number, my: number): [number, number, number] | null => {
      let best: Vox | null = null, bd = 1e9;
      for (const v of vox) {
        if (v.nx + v.ny + v.nz < 0.4) continue;
        const [sx, sy] = proj(v.x + 0.5, v.y + 0.5, v.z + 1);
        const d = (sx - mx) ** 2 + (sy - my) ** 2;
        if (d < bd) { bd = d; best = v; }
      }
      return best && bd < (scale * 3) ** 2 ? [best.nx, best.ny, best.nz] : null;
    };

    const local = (e: PointerEvent) => {
      const r = box.getBoundingClientRect();
      return [e.clientX - r.left + padX, e.clientY - r.top + padY];
    };
    const onMove = (e: PointerEvent) => {
      const [x, y] = local(e);
      mouse.tx = x; mouse.ty = y;
      if (!mouse.target) { mouse.x = x; mouse.y = y; }
      mouse.target = 1;
    };
    const onLeave = () => { mouse.target = 0; };
    const onDown = (e: PointerEvent) => {
      const [x, y] = local(e);
      const n = pick(x, y);
      if (n) ripples.push({ n, t: performance.now() });
    };

    function draw(now: number) {
      if (!W) return;
      const t = now / 1000;
      const idle = reduce ? 0 : float;
      mouse.x += (mouse.tx - mouse.x) * 0.14;
      mouse.y += (mouse.ty - mouse.y) * 0.14;
      mouse.on += (mouse.target - mouse.on) * 0.08;

      const amp = Math.min(W, H) * 0.024 * idle;
      fx = amp * (Math.sin(t * 0.37) + 0.35 * Math.sin(t * 0.83 + 1.3));
      fy = amp * 0.8 * (Math.sin(t * 0.29 + 2.1) + 0.35 * Math.sin(t * 0.71));

      const sigma = scale * R * 0.5, s2 = 2 * sigma * sigma;
      ripples = ripples.filter((r) => now - r.t < 2600);

      for (const v of vox) {
        const [sx, sy] = proj(v.x + 0.5, v.y + 0.5, v.z + 0.5);
        const front = Math.max(0, Math.min(1, (v.nx + v.ny + v.nz) * 1.2));
        const h = mouse.on * front * Math.exp(-((sx - mouse.x) ** 2 + (sy - mouse.y) ** 2) / s2);
        let rp = 0;
        for (const r of ripples) {
          const age = (now - r.t) / 1000;
          const ang = Math.acos(Math.max(-1, Math.min(1, v.nx * r.n[0] + v.ny * r.n[1] + v.nz * r.n[2])));
          rp += Math.exp(-(((ang - age * 1.9) / 0.22) ** 2)) * Math.max(0, 1 - age / 2.6);
        }
        const b = scatter * 11 * Math.pow(h, 1.5) * v.rm, rr = 0.9 * rp;
        const drift = idle * h * 1.4 * Math.sin(t * 1.1 + v.rm * 6);
        const tx = v.nx * (b + rr) + v.rx * (b * 0.9 + drift);
        const ty = v.ny * (b + rr) + v.ry * (b * 0.9 + drift);
        const tz = v.nz * (b + rr) + v.rz * (b * 0.9 + drift);
        const e = v.ease * (b > Math.abs(v.ox) ? 1.4 : 0.9);
        v.ox += (tx - v.ox) * e; v.oy += (ty - v.oy) * e; v.oz += (tz - v.oz) * e;
        v.heat = Math.min(1, h * h * 1.2 + rp * 0.8);
        v.d = v.x + v.ox + v.y + v.oy + v.z + v.oz;
      }

      const order = vox.slice().sort((a, b) => a.d - b.d);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      ctx.lineWidth = lineWeight;
      ctx.lineJoin = "round";
      ctx.strokeStyle = lineColor;

      const face = (p: [number, number][], fill: string) => {
        ctx.beginPath();
        ctx.moveTo(p[0][0], p[0][1]);
        for (let i = 1; i < 4; i++) ctx.lineTo(p[i][0], p[i][1]);
        ctx.closePath();
        ctx.fillStyle = fill;
        ctx.fill();
        ctx.stroke();
      };

      for (const v of order) {
        const x = v.x + v.ox, y = v.y + v.oy, z = v.z + v.oz;
        const P = (a: number, b: number, c: number) => proj(x + a, y + b, z + c);
        const k = tint ? v.heat * 0.18 : 0;
        const f = (i: number) => (k > 0.01 ? mix(i, k) : TONE[i]);
        face([P(1, 0, 0), P(1, 1, 0), P(1, 1, 1), P(1, 0, 1)], f(1));
        face([P(0, 1, 0), P(1, 1, 0), P(1, 1, 1), P(0, 1, 1)], f(2));
        face([P(0, 0, 1), P(1, 0, 1), P(1, 1, 1), P(0, 1, 1)], f(0));
      }
    }

    const ro = new ResizeObserver(resize);
    ro.observe(box);
    resize();
    box.addEventListener("pointermove", onMove);
    box.addEventListener("pointerleave", onLeave);
    box.addEventListener("pointerdown", onDown);
    const loop = (t: number) => { draw(t); raf = requestAnimationFrame(loop); };
    if (reduce) draw(0); else raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      box.removeEventListener("pointermove", onMove);
      box.removeEventListener("pointerleave", onLeave);
      box.removeEventListener("pointerdown", onDown);
    };
  }, [resolution, lineWeight, lineColor, scatter, float, tint]);

  return (
    <div ref={boxRef} className="absolute inset-0 touch-none" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="pointer-events-none absolute block"
        style={{ left: "-40%", top: "-40%", width: "180%", height: "180%", maxWidth: "none", maxHeight: "none" }}
      />
    </div>
  );
}
