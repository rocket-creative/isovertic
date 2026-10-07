"use client";

import { useEffect, useRef } from "react";

const REST = 760;
const PEAK = 900;

export function EmphasisGlow({ word, delay }: { word: string; delay: number }) {
  const host = useRef<HTMLSpanElement>(null);
  const spot = useRef<HTMLSpanElement>(null);
  const chars = useRef<(HTMLSpanElement | null)[]>([]);
  const ghosts = useRef<(HTMLSpanElement | null)[]>([]);
  const reduce = useRef(false);
  const glyphs = word.split("");

  useEffect(() => {
    const root = host.current;
    if (!root) return;
    const node = root;
    reduce.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function paint(clientX: number, clientY: number, on: boolean) {
      const light = spot.current;
      if (!light) return;
      if (!on || reduce.current) {
        light.style.opacity = "0";
        chars.current.forEach((el) => el?.style.removeProperty("font-weight"));
        ghosts.current.forEach((el) => el?.style.removeProperty("font-weight"));
        return;
      }
      const box = node.getBoundingClientRect();
      const x = clientX - box.left;
      light.style.opacity = "1";
      chars.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2 - box.left;
        const dx = Math.abs(x - cx);
        const reach = Math.max(r.width * 0.9, 14);
        const t = Math.max(0, 1 - dx / reach);
        const weight = String(Math.round(REST + t * t * (PEAK - REST)));
        el.style.fontWeight = weight;
        const ghost = ghosts.current[i];
        if (!ghost) return;
        ghost.style.fontWeight = weight;
        ghost.style.setProperty("--lx", `${clientX - r.left}px`);
        ghost.style.setProperty("--ly", `${clientY - r.top}px`);
      });
    }

    const move = (e: PointerEvent) => paint(e.clientX, e.clientY, true);
    const leave = () => paint(0, 0, false);
    root.addEventListener("pointermove", move);
    root.addEventListener("pointerleave", leave);
    return () => {
      root.removeEventListener("pointermove", move);
      root.removeEventListener("pointerleave", leave);
    };
  }, []);

  return (
    <span
      ref={host}
      className="hero-glow inline-block animate-word-in hero-emphasis"
      style={{ animationDelay: `${delay}ms, ${delay + 640}ms` }}
    >
      <span className="relative inline-block">
        {glyphs.map((ch, i) => (
          <span key={i} ref={(el) => { chars.current[i] = el; }} className="hero-ch">{ch}</span>
        ))}
        <span ref={spot} className="hero-glow-spot" aria-hidden="true">
          {glyphs.map((ch, i) => (
            <span key={i} ref={(el) => { ghosts.current[i] = el; }} className="hero-ch">{ch}</span>
          ))}
        </span>
      </span>
      &nbsp;
    </span>
  );
}
