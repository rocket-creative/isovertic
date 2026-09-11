import type { NextConfig } from "next";

// Retired field-notes URLs from the pre-2026-09 archive. Every old article 301s to the hub.
// Do not consolidate these into a single catch-all: each URL needs its own entry for SEO clarity.
const retiredFieldNotes = [
  "abstrakt-marketing-group-alternatives",
  "best-appointment-setting-companies",
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
  "why-your-pipeline-is-inconsistent",
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
      { source: "/how-it-works", destination: "/system", statusCode: 301 },
      { source: "/six-steps", destination: "/system", statusCode: 301 },
      { source: "/industries/technical-b2b", destination: "/industries", statusCode: 301 },
    ];
  },
};

export default nextConfig;
