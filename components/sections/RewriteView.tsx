import Link from "next/link";
import { PageHero, Section } from "@/components/sections/Shell";
import { FAQ } from "@/components/ui/FAQ";
import { Arrow } from "@/components/ui/Arrow";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqLd } from "@/lib/schema";
import { rewrite } from "@/content/rewrite";
export function RewriteView({page}: {page: string}) {
 const c = rewrite[page];
 return <>
 {c.faqs && <JsonLd data={faqLd([...c.faqs])} />}
 <PageHero eyebrow={c.eyebrow} h1={c.h1} lead={c.lead} cta={<div className="flex flex-wrap gap-6"><Link href="/contact" className="btn btn-solid">Tell us about your project <Arrow /></Link>{page === "home" && <Link className="cta-link" href="/pricing">Website projects from $5,000 <Arrow /></Link>}</div>} />
 {c.sections.map((s,i)=><Section key={s.h2} label={s.label} tone={i%2 ? "bright":"paper"} deferred={false}>
 <div id={s.id} className="scroll-mt-32">
 <h2 className="max-w-[26ch] font-display text-h2 font-medium">{s.h2}</h2>
 {s.body?.map(p=><p key={p} className="mt-6 max-w-[68ch] leading-relaxed text-ink/90">{p}</p>)}
 {s.items && <ul className="mt-6 max-w-[68ch] list-disc space-y-3 pl-5 leading-relaxed text-ink/90">{s.items.map(x=><li key={x}>{x}</li>)}</ul>}
 {s.cards && <div className={`mt-10 grid gap-10 ${s.cards.length===2?"md:grid-cols-2":"md:grid-cols-3"}`}>{s.cards.map(card=><article key={card.title} className="border-t border-rule pt-6"><h3 className="font-display text-h3 font-medium">{card.title}</h3><p className="mt-4 leading-relaxed text-ink/90">{card.body}</p>{card.items && <ul className="mt-5 list-disc space-y-3 pl-5 text-[15px] leading-relaxed">{card.items.map(x=><li key={x}>{x}</li>)}</ul>}{card.href && <Link href={card.href} className="cta-link mt-6">Explore this service <Arrow /></Link>}</article>)}</div>}
 {s.link && <Link href={s.link} className="cta-link mt-8">{s.linkText} <Arrow /></Link>}
 </div></Section>)}
 {c.faqs && <Section label="Questions" tone="bright" deferred={false}><h2 className="font-display text-h2 font-medium">Questions before we start</h2><div className="mt-10 max-w-[72ch]"><FAQ faqs={[...c.faqs]} /></div></Section>}
 </>;
}
