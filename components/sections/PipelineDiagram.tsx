"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const stations = [
  { k: "BUILD", label: "We rebuild your website so the pages, proof, pricing, and next step are all in front of the buyer. Included in every package.", href: "/web-development" },
  { k: "RANK", label: "We publish on a steady rhythm so your site earns visibility in Google and in the AI-generated answers that now appear at the top of search results.", href: "/seo-content" },
  { k: "RUN", label: "We run Google Ads against the exact phrases your buyers type when they are actively shopping. We report cost per booked meeting, not clicks.", href: "/google-ads" },
  { k: "BUY", label: "We buy streaming TV, cable, broadcast television, and radio when the math supports it so your brand is recognized when your specialist buyer sees your name in Google later that week.", href: "/tv-ctv-advertising" },
  { k: "BOOK", label: "We put qualified meetings on your calendar with a written brief on each one, run by the same team that built your website.", href: "/outbound-appointment-setting" },
  { k: "EDUCATE", label: "We hand your team the step-by-step written instructions and the training to run any of this in-house when they are ready.", href: "/protocol" },
] as const;

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

  const n = stations.length;

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
            <rect key={i} x={1000 / (n + 1) * (i + 1) - 3} y="20" width="6" height="16" fill="var(--color-signal)"
              opacity={on ? 1 : 0}
              style={{ transition: `opacity 400ms ease ${500 + i * 180}ms` }}
            />
          ))}
        </svg>
      </div>
      <ol className="grid gap-px bg-rule sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {stations.map((s, i) => {
          const inner = (
            <>
              <span className="eyebrow block group-hover:!text-paper/60">0{i + 1}</span>
              <span className="mt-3 block font-display text-[22px] font-semibold tracking-wide">{s.k}</span>
              <span className="mt-2 block text-[13.5px] leading-snug text-ink-soft group-hover:text-paper/80">{s.label}</span>
            </>
          );
          const style = {
            opacity: on ? 1 : undefined,
            transform: on ? "none" : undefined,
            transitionDelay: `${i * 90}ms`,
          } as const;
          return (
            <li key={s.k} className="surface-card">
              {"href" in s && s.href ? (
                <Link
                  href={s.href}
                  className="group block h-full p-6 transition-colors duration-300 hover:bg-navy hover:text-paper"
                  style={style}
                >
                  {inner}
                </Link>
              ) : (
                <div className="group block h-full p-6" style={style}>
                  {inner}
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
