export type FAQ = { q: string; a: string };
export type Block = { h2: string; body: string[] };
export type Page = {
  slug: string;
  title: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  lead: string;
  callout?: { label: string; body: string };
  sections: Block[];
  faqs: FAQ[];
  related: { label: string; href: string }[];
  dateModified?: string; // ISO date of the last copy change, feeds the sitemap
};
