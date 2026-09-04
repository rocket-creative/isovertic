"use client";
import { useEffect, useRef, useState } from "react";

// Renders the final number in server HTML so crawlers and no JS readers see it.
// Animates from zero only in the browser, and only when motion is allowed.
export function CountUp({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(end);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      io.disconnect();
      const start = performance.now();
      const duration = 1200;
      const tick = (now: number) => {
        const p = Math.min((now - start) / duration, 1);
        setCount(Math.round((1 - Math.pow(1 - p, 3)) * end));
        if (p < 1) requestAnimationFrame(tick);
      };
      setCount(0);
      requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [end]);
  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}
