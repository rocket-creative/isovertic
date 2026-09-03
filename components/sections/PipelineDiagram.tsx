"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const stations = [
  { k: "BUILD", label: "The site, built to convert and be cited", href: "/web-development" },
  { k: "RANK", label: "Content that wins Google and AI search", href: "/seo-content" },
  { k: "RUN", label: "Google Ads to a cost per meeting", href: "/google-ads" },
  { k: "BUY", label: "Media including streaming and TV", href: "/tv-ctv-advertising" },
  { k: "BOOK", label: "Outbound meetings on your calendar", href: "/outbound-appointment-setting" },
];

export function PipelineDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setOn(true);
      return;
    }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setOn(true);
        io.disconnect();
      }
    }, { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref}>
      {/* Waterline */}
      <div className="relative mb-10 hidden lg:block" aria-hidden="true">
        <svg viewBox="0 0 1000 40" className="w-full" preserveAspectRatio="none">
          <line
            x1="0" y1="20" x2="1000" y2="20" stroke="#14181B" strokeOpacity="0.3" strokeWidth="1.5"
            strokeDasharray="1000" strokeDashoffset={on ? 0 : 1000}
            style={{ transition: "stroke-dashoffset 1600ms cubic-bezier(0.16,1,0.3,1)" }}
          />
          {stations.map((_, i) => (
            <rect key={i} x={100 + i * 200 - 3} y="20" width="6" height="16" fill="#6B1C28"
              opacity={on ? 1 : 0}
              style={{ transition: `opacity 400ms ease ${500 + i * 180}ms` }}
            />
          ))}
        </svg>
      </div>
      <ol className="grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-5">
        {stations.map((s, i) => (
          <li key={s.k} className="bg-background">
            <Link
              href={s.href}
              className="group block h-full p-6 transition-colors duration-300 hover:bg-navy hover:text-paper"
              style={{
                opacity: on ? 1 : undefined,
                transform: on ? "none" : undefined,
                transitionDelay: `${i * 90}ms`,
              }}
            >
              <span className="eyebrow block group-hover:!text-paper/60">0{i + 1}</span>
              <span className="mt-3 block font-display text-[22px] font-semibold tracking-wide">{s.k}</span>
              <span className="mt-2 block text-[13.5px] leading-snug text-ink-soft group-hover:text-paper/80">{s.label}</span>
            </Link>
          </li>
        ))}
      </ol>
      <p className="mt-8 font-display text-h3 font-medium">
        Then the only step left is yours. <span className="text-signal">Close.</span>
      </p>
    </div>
  );
}
