"use client";
import { useEffect, useRef } from "react";

// Drifting point field on canvas. Points follow a slow noise current, join their
// neighbours with hairlines, and move away from the cursor, which lights them in signal blue.
// Decorative only: aria-hidden, no pointer events. With reduced motion it draws one still frame.
// It stops drawing when it is off screen or the tab is hidden.

type P = { x: number; y: number; vx: number; vy: number; r: number; heat: number };

const INK = "20,24,27";
const PAPER = "245,244,240";
const SIGNAL = "10,177,255";
const LINK = 132;
const REACH = 170;

export function ParticleField({
  tone = "ink",
  fade = false,
  className = "",
}: {
  tone?: "ink" | "paper";
  fade?: boolean; // thin the field toward the left, where the headline sits
  className?: string;
}) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;
    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rgb = tone === "paper" ? PAPER : INK;
    const strength = tone === "paper" ? 1.5 : 1;
    let w = 0;
    let h = 0;
    let pts: P[] = [];
    let raf = 0;
    let onScreen = true;
    let t = Math.random() * 100;
    const mouse = { x: -9999, y: -9999 };

    const seed = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(24, Math.min(120, Math.round((w * h) / 11000)));
      pts = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: 1 + Math.random() * 1.4,
        heat: 0,
      }));
    };

    const weight = (x: number) => (fade && w >= 1024 ? 0.12 + 0.88 * Math.pow(Math.max(0, Math.min(1, x / w)), 1.6) : fade ? 0.55 : 1);

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < pts.length; i++) {
        const a = pts[i];
        const wa = weight(a.x);
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > LINK * LINK) continue;
          const k = 1 - Math.sqrt(d2) / LINK;
          const hot = Math.max(a.heat, b.heat);
          ctx.strokeStyle = `rgba(${hot > 0.05 ? SIGNAL : rgb},${(k * (0.16 + hot * 0.5) * strength * Math.min(wa, weight(b.x))).toFixed(3)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
        const md = Math.hypot(a.x - mouse.x, a.y - mouse.y);
        if (md < REACH) {
          ctx.strokeStyle = `rgba(${SIGNAL},${((1 - md / REACH) * 0.55).toFixed(3)})`;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
        ctx.fillStyle = `rgba(${a.heat > 0.05 ? SIGNAL : rgb},${((0.42 + a.heat * 0.58) * strength * wa).toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r + a.heat * 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const step = () => {
      t += 0.0035;
      for (const p of pts) {
        // Three slow sine currents stand in for a noise field.
        const angle = (Math.sin(p.x * 0.0031 + t) + Math.sin(p.y * 0.0043 - t * 0.8) + Math.sin((p.x + p.y) * 0.0019 + t * 0.6)) * Math.PI;
        p.vx += Math.cos(angle) * 0.012;
        p.vy += Math.sin(angle) * 0.012;
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const d = Math.hypot(dx, dy);
        if (d < REACH && d > 0.01) {
          const push = (1 - d / REACH) * 0.5;
          p.vx += (dx / d) * push;
          p.vy += (dy / d) * push;
          p.heat = Math.max(p.heat, 1 - d / REACH);
        }
        p.heat *= 0.965;
        p.vx *= 0.965;
        p.vy *= 0.965;
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -20) p.x = w + 20;
        else if (p.x > w + 20) p.x = -20;
        if (p.y < -20) p.y = h + 20;
        else if (p.y > h + 20) p.y = -20;
      }
    };

    const loop = () => {
      raf = 0;
      if (!onScreen || document.hidden) return;
      step();
      draw();
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (!still && !raf) raf = requestAnimationFrame(loop);
    };

    seed();
    draw();
    start();

    const ro = new ResizeObserver(() => {
      seed();
      draw();
    });
    ro.observe(canvas);
    const io = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting;
      start();
    });
    io.observe(canvas);
    const move = (e: PointerEvent) => {
      if (!onScreen) return;
      const box = canvas.getBoundingClientRect();
      mouse.x = e.clientX - box.left;
      mouse.y = e.clientY - box.top;
    };
    const leave = () => {
      mouse.x = -9999;
      mouse.y = -9999;
    };
    if (!still) {
      window.addEventListener("pointermove", move, { passive: true });
      document.addEventListener("pointerleave", leave);
      document.addEventListener("visibilitychange", start);
    }
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerleave", leave);
      document.removeEventListener("visibilitychange", start);
    };
  }, [tone, fade]);

  return <canvas ref={ref} aria-hidden="true" className={`pointer-events-none absolute inset-0 h-full w-full ${className}`} />;
}
