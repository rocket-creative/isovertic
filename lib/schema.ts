import { site } from "./site";

const orgId = `${site.url}/#org`;
const personId = `${site.url}/#george`;

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": orgId,
    name: site.name,
    url: site.url,
    logo: `${site.url}/logo-mark.svg`,
    description: site.description,
    founder: { "@id": personId },
    sameAs: [site.linkedin],
    address: { "@type": "PostalAddress", addressRegion: "NY", addressCountry: "US" },
  };
}

export function personLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": personId,
    name: site.founder,
    jobTitle: "Founder",
    worksFor: { "@id": orgId },
    sameAs: [site.linkedin],
  };
}

export function serviceLd(name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${site.url}${path}`,
    provider: { "@id": orgId },
    areaServed: "United States",
  };
}

export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function articleLd(a: { title: string; description: string; slug: string; datePublished: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    datePublished: a.datePublished,
    dateModified: a.datePublished,
    author: { "@id": personId },
    publisher: { "@id": orgId },
    mainEntityOfPage: `${site.url}/field-notes/${a.slug}`,
  };
}

export function localBusinessLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#local`,
    name: site.name,
    url: `${site.url}/long-island`,
    image: `${site.url}/og.png`,
    areaServed: ["Nassau County NY", "Suffolk County NY", "New York Metro"],
    address: { "@type": "PostalAddress", addressLocality: "Long Island", addressRegion: "NY", addressCountry: "US" },
    parentOrganization: { "@id": orgId },
  };
}

export function breadcrumbLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${site.url}${it.path}`,
    })),
  };
}
