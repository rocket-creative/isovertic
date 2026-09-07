import type { Metadata } from "next";
import { PrintPage } from "@/components/ui/PrintPage";
import { TwoClockScorecard, EngagementStages } from "@/components/standard/Tables";
import { rule, standardMeta as m } from "@/content/standard";

export const metadata: Metadata = {
  title: { absolute: "Engagement and Measurement Standard, One Page | ISOVERTIC" },
  description: "Printable one page version of the ISOVERTIC engagement length and two clock measurement standard.",
  robots: { index: false, follow: true },
  alternates: { canonical: `${m.path}/one-page` },
};

export default function OnePage() {
  return (
    <PrintPage eyebrow="Engagement and measurement standard" title="ISOVERTIC Engagement and Measurement Standard" backHref={m.path} backLabel="Full page with sources">
      <div className="grid gap-px bg-rule md:grid-cols-2">
        {[rule.minimums, rule.method].map((r) => (
          <div key={r.label} className="surface-card p-6">
            <p className="eyebrow">{r.label}</p>
            <p className="mt-3 font-display text-[17px] font-medium leading-snug">{r.body}</p>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <TwoClockScorecard compact />
      </div>
      <div className="mt-10">
        <EngagementStages compact />
      </div>
    </PrintPage>
  );
}
