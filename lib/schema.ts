import { site } from "./site";
import type { Person } from "@/content/people";
import { people } from "@/content/people";

const orgId = `${site.url}/#org`;
const personId = `${site.url}/#george`;

export function organizationLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": orgId,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    logo: `${site.url}/isovertic-logo.svg`,
    image: `${site.url}/og.png`,
    description: site.description,
    telephone: site.phone,
    email: site.email,
    founder: { "@id": personId },
    employee: people.map((p) => ({ "@id": `${site.url}/people/${p.slug}#person` })),
    sameAs: [site.linkedin],
    knowsAbout: site.knowsAbout,
    areaServed: "United States",
    priceRange: "$2,500 to $25,000 per month",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    },
    contactPoint: { "@type": "ContactPoint", telephone: site.phone, email: site.email, contactType: "sales", url: `${site.url}/contact` },
  };
}

export function personLd(p: Person) {
  const id = p.slug === "george-stoff" ? personId : `${site.url}/people/${p.slug}#person`;
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": id,
    name: p.name,
    jobTitle: p.title,
    description: p.short,
    url: `${site.url}/people/${p.slug}`,
    worksFor: { "@id": orgId },
    knowsAbout: p.knowsAbout,
    ...(p.alumniOf ? { alumniOf: p.alumniOf.map((n) => ({ "@type": "CollegeOrUniversity", name: n })) } : {}),
    ...(p.sameAs ? { sameAs: p.sameAs } : {}),
  };
}

export function peopleLd() {
  return people.map(personLd);
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

function personRef(slug: string) {
  return slug === "george-stoff" ? { "@id": personId } : { "@id": `${site.url}/people/${slug}#person` };
}

export function articleLd(a: { title: string; description: string; slug: string; datePublished: string; dateModified: string; author: string; reviewedBy?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: a.title,
    description: a.description,
    datePublished: a.datePublished,
    dateModified: a.dateModified,
    author: personRef(a.author),
    ...(a.reviewedBy ? { reviewedBy: personRef(a.reviewedBy) } : {}),
    publisher: { "@id": orgId },
    mainEntityOfPage: `${site.url}/field-notes/${a.slug}`,
  };
}

export function caseStudyLd(c: { title: string; metaDescription: string; publishedDate: string; clientName: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: c.title,
    description: c.metaDescription,
    datePublished: c.publishedDate,
    about: { "@type": "Organization", name: c.clientName },
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name },
  };
}

export function qaLd(q: { question: string; answer: string; slug: string; dateModified: string; author: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "QAPage",
    mainEntity: {
      "@type": "Question",
      name: q.question,
      text: q.question,
      answerCount: 1,
      dateModified: q.dateModified,
      author: personRef(q.author),
      acceptedAnswer: { "@type": "Answer", text: q.answer, url: `${site.url}/answers/${q.slug}`, author: personRef(q.author) },
    },
  };
}

export function definedTermLd(t: { term: string; definition: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: t.term,
    description: t.definition,
    url: `${site.url}/glossary/${t.slug}`,
    inDefinedTermSet: { "@type": "DefinedTermSet", name: "ISOVERTIC glossary", url: `${site.url}/glossary` },
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

export function problemLd(p: { slug: string; h1: string; metaDescription: string; dateModified: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: p.h1,
    description: p.metaDescription,
    dateModified: p.dateModified,
    datePublished: p.dateModified,
    author: { "@id": personId },
    publisher: { "@id": orgId },
    articleSection: "Problems we solve",
    mainEntityOfPage: `${site.url}/problems/${p.slug}`,
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

export function offersLd(name: string, offers: { name: string; price: number }[], path: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    url: `${site.url}${path}`,
    provider: { "@id": orgId },
    offers: offers.map((o) => ({
      "@type": "Offer",
      name: o.name,
      price: o.price,
      priceCurrency: "USD",
      url: `${site.url}${path}`,
    })),
  };
}
