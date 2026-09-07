import type { Metadata } from "next";
import { PrintPage } from "@/components/ui/PrintPage";
import { SensitiveDataGovernance } from "@/components/compliance/Compliance";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd, resourceLd } from "@/lib/schema";
import { healthcareMeta } from "@/content/compliance";

const path = "/compliance/sensitive-data-governance";
const title = "ISOVERTIC Sensitive Data Governance";
const description = "Printable single page version of the ISOVERTIC sensitive data governance process: data map, classification, tooling gate, and quarterly review.";

export const metadata: Metadata = {
  title: { absolute: `${title} | ISOVERTIC` },
  description,
  alternates: { canonical: path },
};

export default function Governance() {
  return (
    <>
      <JsonLd
        data={[
          resourceLd({ headline: title, description, path, datePublished: "2026-09-07", dateModified: healthcareMeta.dateModified, section: "Compliance" }),
          breadcrumbLd([{ name: "Home", path: "/" }, { name: "Healthcare and life sciences", path: healthcareMeta.path }, { name: "Sensitive data governance", path }]),
        ]}
      />
      <PrintPage eyebrow="Compliance · Sensitive data governance" title={title} backHref={healthcareMeta.path} backLabel="Healthcare and life sciences page">
        <p className="mb-8 max-w-[68ch] text-[15px] leading-relaxed text-ink/90">
          Four steps, each with a written output the client keeps. Designed against the FTC's Section 5 standard for health data disclosure as well as HIPAA.
        </p>
        <SensitiveDataGovernance compact />
      </PrintPage>
    </>
  );
}
