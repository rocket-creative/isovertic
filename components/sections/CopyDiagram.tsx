import { priceDiagram, snapshotDiagram } from "@/content/site-visuals";
import { CountText } from "@/components/ui/CountText";

// Diagrams for the rewritten pages. Server rendered; motion comes from the parent .reveal block in CSS.

function Snapshot() {
  const d = snapshotDiagram;
  return (
    <figure className="mt-10 max-w-[1040px]" aria-label={d.label}>
      <ol className="flow grid gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
        {d.steps.map((s, i) => (
          <li key={s.label} className="flow-step" style={{ transitionDelay: `${i * 140}ms` }}>
            <CountText text={s.figure} className="flow-figure" />
            <span className="flow-rule" aria-hidden="true" />
            <span className="mt-3 block max-w-[18ch] text-[14px] leading-snug text-ink-soft">{s.label}</span>
            {"detail" in s && (
              <span className="mt-3 flex max-w-[22ch] flex-wrap gap-1.5">
                {s.detail.map((n) => (
                  <span key={n} className="border border-rule px-2 py-1 text-[11px] uppercase tracking-[0.08em] text-ink-soft">{n}</span>
                ))}
              </span>
            )}
          </li>
        ))}
      </ol>
    </figure>
  );
}

function Price() {
  const d = priceDiagram;
  return (
    <figure className="mt-10 max-w-[880px]" aria-label={d.label}>
      <div className="space-y-7">
        {d.rows.map((r) => {
          const ours = "ours" in r;
          return (
            <div key={r.name}>
              <div className="flex items-baseline justify-between gap-6">
                <span className="text-[13px] uppercase tracking-[0.1em] text-ink-soft">{r.name}</span>
                <span className={`font-display font-medium ${ours ? "text-[clamp(28px,4vw,44px)] text-signal" : "text-[clamp(18px,2.2vw,24px)]"}`}>{r.value}</span>
              </div>
              <div className="relative mt-2 h-3 bg-rule">
                <span
                  className={`bar-grow absolute inset-y-0 ${ours ? "bg-signal" : "bg-ink"}`}
                  style={{ left: `${(r.from / d.max) * 100}%`, width: `${((r.to - r.from) / d.max) * 100}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </figure>
  );
}

export function CopyDiagram({ name }: { name: string }) {
  if (name === "snapshot") return <Snapshot />;
  if (name === "price") return <Price />;
  return null;
}
