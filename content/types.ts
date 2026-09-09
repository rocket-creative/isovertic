export type FAQ = { q: string; a: string };
export type Sub = { h3: string; body: string[] };
export type Block = { h2: string; body: string[]; list?: string[]; subs?: Sub[] };
export type Page = {
  slug: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lead: string | readonly string[];
  callout?: { label: string; body: string };
  sections: Block[];
  faqs: FAQ[];
  related: { label: string; href: string }[];
  dateModified?: string; // ISO date of the last copy change, feeds the sitemap
  /** Voice audit: show the client quote placeholder below the hero. */
  showQuotePlaceholder?: boolean;
  /** Voice audit: paragraph immediately above the FAQ block. */
  disciplineNote?: string;
  /** Voice audit: house CTA close at the end of main content. */
  pipelineCta?: { headline: string; body: string };
};
