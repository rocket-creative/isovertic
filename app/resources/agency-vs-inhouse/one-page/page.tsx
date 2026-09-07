import type { Metadata } from "next";
import { PrintPage } from "@/components/ui/PrintPage";
import { cfoGuide as g } from "@/content/decision-guides";

export const metadata: Metadata = {
  title: { absolute: "Agency vs In House Checklist, One Page | ISOVERTIC" },
  description: "Printable decision checklist for choosing between an in house marketing hire, an agency, and a hybrid.",
  robots: { index: false, follow: true },
  alternates: { canonical: `${g.path}/one-page` },
};

export default function OnePage() {
  return (
    <PrintPage eyebrow={g.eyebrow} title="The agency versus in house checklist" backHref={g.path} backLabel="Full guide with the model">
      <ol className="space-y-6">
        {g.checklist.items.map((it, i) => (
          <li key={it} className="grid gap-2 border-b border-rule pb-6 sm:grid-cols-[48px_1fr]">
            <span className="eyebrow">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <p className="leading-relaxed text-ink/90">{it}</p>
              <p className="mt-3 h-8 border-b border-dotted border-rule" aria-hidden="true" />
            </div>
          </li>
        ))}
      </ol>
      <div className="mt-10 grid gap-px bg-rule md:grid-cols-3">
        {g.whoWins.items.map((it) => (
          <div key={it.name} className="surface-card p-5">
            <p className="eyebrow">{it.name}</p>
            <p className="mt-3 text-[14px] leading-relaxed text-ink/90">{it.body}</p>
          </div>
        ))}
      </div>
    </PrintPage>
  );
}
