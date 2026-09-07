import type { Metadata } from "next";
import { PrintPage } from "@/components/ui/PrintPage";
import { CompliancePosture } from "@/components/compliance/Compliance";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd, resourceLd } from "@/lib/schema";
import { healthcareMeta } from "@/content/compliance";

const path = "/compliance/hipaa-posture";
const title = "ISOVERTIC HIPAA Operating Standard";
const description = "Printable single page version of the ISOVERTIC HIPAA operating standard: BAA, tracking, retargeting, intake, breach protocol, workforce, and subcontractors.";

export const metadata: Metadata = {
  title: { absolute: `${title} | ISOVERTIC` },
  description,
  alternates: { canonical: path },
};

export default function HipaaPosture() {
  return (
    <>
      <JsonLd
        data={[
          resourceLd({ headline: title, description, path, datePublished: "2026-09-07", dateModified: healthcareMeta.dateModified, section: "Compliance" }),
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Healthcare and life sciences", path: healthcareMeta.path }, { name: "HIPAA posture", path }]),
        ]}
      />
      <PrintPage eyebrow="Compliance · HIPAA posture" title={title} backHref={healthcareMeta.path} backLabel="Healthcare and life sciences page">
        <p className="mb-8 max-w-[68ch] text-[15px] leading-relaxed text-ink/90">
          Each row is an operating commitment ISOVERTIC signs before an engagement that touches protected health information. Send this page to your compliance officer. The BAA and the subcontractor list are available on request.
        </p>
        <CompliancePosture compact />
      </PrintPage>
    </>
  );
}
