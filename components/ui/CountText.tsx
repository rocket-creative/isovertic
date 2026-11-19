"use client";
import { useEffect, useRef, useState } from "react";

// Counts every number inside a short figure such as "13 to about 64" up from zero.
// The server HTML carries the final text. The count runs once, in view, and only when motion is allowed.
export function CountText({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(text);
  useEffect(() => {
    const el = ref.current;
    if (!el || !/\d/.test(text)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - t0) / 1400, 1);
          const e = 1 - Math.pow(1 - p, 3);
          setShown(
            text.replace(/\d[\d,]*(?:\.\d+)?/g, (n) => {
              const decimals = n.split(".")[1]?.length ?? 0;
              const v = Number(n.replace(/,/g, "")) * e;
              return n.includes(",") ? Math.round(v).toLocaleString("en-US") : v.toFixed(decimals);
            }),
          );
          if (p < 1) raf = requestAnimationFrame(tick);
          else setShown(text);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 },
    );
    io.observe(el);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [text]);
  return (
    <span ref={ref} className={className} style={{ fontVariantNumeric: "tabular-nums" }}>
      {shown}
    </span>
  );
}
