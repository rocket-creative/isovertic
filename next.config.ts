import type { NextConfig } from "next";

// Retired field-notes URLs from the pre-2026-09 archive. These 301 to the hub.
// Three recovered URLs below keep their own destinations.
// Do not consolidate these into a single catch-all: each URL needs its own entry for SEO clarity.
const retiredFieldNotes = [
  "ctv-advertising-small-business",
  "growth-partner-vs-marketing-agency",
  "hipaa-compliant-lead-generation",
  "hire-salesperson-or-outsource",
  "how-to-get-cited-by-ai-search",
  "how-to-get-more-b2b-sales-meetings",
  "how-to-market-a-cro-without-a-sales-team",
  "lead-generation-vs-appointment-setting",
  "mlr-review-for-marketing-content",
  "outsourced-sales-and-marketing-guide",
  "outsourced-sales-marketing-cost",
  "pipeline-ownership-thesis",
  "the-mql-is-a-fiction",
  "the-vendor-stack-tax",
  "why-quarterly-revenue-reviews-break-long-cycle-marketing",
] as const;

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      // Staging and www hosts redirect to the canonical apex so every URL Google sees matches its canonical tag.
      { source: "/:path*", has: [{ type: "host", value: "isovertic.vercel.app" }], destination: "https://isovertic.com/:path*", permanent: true },
      { source: "/:path*", has: [{ type: "host", value: "www.isovertic.com" }], destination: "https://isovertic.com/:path*", permanent: true },
      ...retiredFieldNotes.map((slug) => ({
        source: `/field-notes/${slug}`,
        destination: "/field-notes",
        permanent: true,
      })),
      { source: "/field-notes/abstrakt-marketing-group-alternatives", destination: "/compare/abstrakt-marketing-group-alternative", permanent: true },
      { source: "/field-notes/best-appointment-setting-companies", destination: "/outbound-appointment-setting", permanent: true },
      { source: "/field-notes/why-your-pipeline-is-inconsistent", destination: "/field-notes/pipeline-ownership-gap", permanent: true },
      { source: "/how-it-works", destination: "/system", statusCode: 301 },
      { source: "/six-steps", destination: "/system", statusCode: 301 },
      { source: "/industries/technical-b2b", destination: "/industries/medical-devices", statusCode: 301 },
      { source: "/glossary/the-seam", destination: "/glossary/handoff", statusCode: 301 },
    ];
  },
};

export default nextConfig;
