import fs from "fs";
import nodePath from "path";
import React from "react";
import Link from "next/link";
import { PageHero, Section } from "@/components/sections/Shell";
import { FAQ } from "@/components/ui/FAQ";
import { Arrow } from "@/components/ui/Arrow";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbLd, faqLd, offersLd, serviceLd } from "@/lib/schema";
import { copyPage, fieldId, type CopyBlock, type CopyLink } from "@/lib/sitecopy";
import { sendContact } from "@/app/contact/actions";
import { contactForm, footerCols, publishedOffers, related } from "@/content/site-nav";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { CopyDiagram } from "@/components/sections/CopyDiagram";
import { CountText } from "@/components/ui/CountText";
import { ImageSlot } from "@/components/ui/ImageSlot";
import { VideoSlot } from "@/components/ui/VideoSlot";
import IsoSphere from "@/components/ui/IsoSphere";

// Renders one page from content/site-copy. All copy comes from the markdown; nothing is written here.

function inline(text: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  const re = /\[([^\]]+)\]\(([^)\s]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1] && m[2]) {
      out.push(
        m[2].startsWith("/") ? (
          <Link key={m.index} href={m[2]} className="underline underline-offset-4 hover:text-navy">{m[1]}</Link>
        ) : (
          <a key={m.index} href={m[2]} rel="noopener noreferrer" className="underline underline-offset-4 hover:text-navy">{m[1]}</a>
        ),
      );
    } else if (m[3]) out.push(<strong key={m.index} className="font-medium text-ink">{m[3]}</strong>);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

function Buttons({ links }: { links: readonly CopyLink[] }) {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
      {links.map((l, i) =>
        i === 0 ? (
          <Link key={l.label} href={l.href} className="btn btn-solid">{l.label} <Arrow /></Link>
        ) : (
          <Link key={l.label} href={l.href} className="cta-link">{l.label} <Arrow /></Link>
        ),
      )}
    </div>
  );
}


function Block({ b }: { b: CopyBlock }) {
  switch (b.type) {
    case "p":
      return <p className="mt-6 max-w-[68ch] leading-relaxed text-ink/90">{inline(b.text)}</p>;
    case "h3":
      return <h3 className="mt-10 max-w-[40ch] font-display text-h3 font-medium">{b.text}</h3>;
    case "kicker":
      return <p className="eyebrow mt-12 border-t border-rule pt-6">{b.text}</p>;
    case "quote":
      return (
        <blockquote className="mt-8 max-w-[62ch] border-l border-ink pl-6 font-display text-[clamp(18px,2vw,24px)] leading-snug">
          <p>{b.text}</p>
        </blockquote>
      );
    case "small":
      return (
        <p className="mt-6 max-w-[68ch] text-[14px] leading-relaxed text-ink-soft">
          {b.href ? <Link href={b.href} className="underline underline-offset-4 hover:text-navy">{b.text}</Link> : inline(b.text)}
        </p>
      );
    case "closing":
      return <p className="mt-10 max-w-[32ch] font-display text-h3 font-medium">{b.text}</p>;
    case "ul":
    case "ol": {
      const List = b.type;
      return (
        <List className={`mt-6 max-w-[68ch] space-y-3 pl-5 leading-relaxed text-ink/90 ${b.type === "ol" ? "list-decimal" : "list-disc"}`}>
          {b.items.map((item) => (
            <li key={item.text}>
              {inline(item.text)}
              {item.link && (
                <>
                  {" "}
                  <Link href={item.link.href} className="whitespace-nowrap underline underline-offset-4 hover:text-navy">{item.link.label}</Link>
                </>
              )}
            </li>
          ))}
        </List>
      );
    }
    case "stats":
      return (
        <ul className="mt-12 grid gap-10 md:grid-cols-3">
          {b.items.map((s, i) => {
            const m = s.match(/^\*\*(.+?)\*\*\s*(.*)$/);
            return (
              <RevealBlock as="li" key={s} delay={i * 120} className="border-t border-ink pt-5">
                {m ? (
                  <>
                    <CountText text={m[1]} className="stat-figure" />
                    <span className="mt-3 block max-w-[30ch] leading-relaxed text-ink-soft">{m[2]}</span>
                  </>
                ) : (
                  <span className="leading-relaxed">{s}</span>
                )}
              </RevealBlock>
            );
          })}
        </ul>
      );
    case "diagram":
      return <CopyDiagram name={b.name} />;
    case "image":
      return <ImageSlot brief={b.brief} src={b.src} ratio={/^portrait/i.test(b.brief) ? "portrait" : "standard"} className="mt-8 max-w-[720px]" />;
    case "video":
      return <VideoSlot src={b.src} srcVertical={b.srcVertical} caption={b.caption} className="mt-8 max-w-[820px]" />;
    case "cards":
      return (
        <div className={`mt-12 grid gap-x-10 gap-y-12 ${b.items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"}`}>
          {b.items.map((c, i) => (
            <RevealBlock key={c.title} delay={i * 120} className="copy-card">
              {c.kicker && <p className="eyebrow">{c.kicker}</p>}
              <h3 className={`${c.kicker ? "mt-4" : ""} font-display text-h3 font-medium`}>{c.title}</h3>
              {c.blocks.map((x, xi) => (
                <Block key={xi} b={x} />
              ))}
            </RevealBlock>
          ))}
        </div>
      );
    case "linkcards":
      return (
        <ul className="mt-12 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {b.items.map((c) => (
            <li key={c.title} className="contents">
              <Link href={c.link.href} className="link-card">
                <span className="font-display text-[19px] font-medium leading-snug">{c.title}</span>
                <span className="mt-3 block text-[14px] leading-relaxed text-ink-soft">{c.text}</span>
                <span className="cta-link mt-auto pt-6">{c.link.label} <Arrow /></span>
              </Link>
            </li>
          ))}
        </ul>
      );
    case "table": {
      const hasHead = b.head.some(Boolean);
      return (
        <div className="t-wrap mt-8 max-w-[960px]">
          <table className="t">
            {hasHead && (
              <thead>
                <tr>{b.head.map((h, i) => <th key={i} className="border-b border-ink py-3 pr-6 align-bottom">{inline(h)}</th>)}</tr>
              </thead>
            )}
            <tbody>
              {b.rows.map((r, ri) => (
                <tr key={ri}>
                  {r.map((c, ci) => (
                    <td key={ci} data-label={b.head[ci] || undefined} className={`border-b border-rule py-3 pr-6 align-top text-[15px] leading-relaxed ${ci === 0 ? "font-medium" : ""}`}>
                      {inline(c)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
    case "buttons":
      return <Buttons links={b.links} />;
    case "link":
      return (
        <p className="mt-5">
          <Link href={b.link.href} className="cta-link">{b.link.label} <Arrow /></Link>
        </p>
      );
    case "choice":
      return (
        <fieldset className="mt-8 max-w-[640px]">
          <legend className="sr-only">What you want back</legend>
          {b.items.map((c, i) => (
            <label key={c} className="flex min-h-[44px] items-center gap-3 border-b border-rule py-2 leading-relaxed">
              <input type="radio" name="request" value={c} defaultChecked={i === 0} required />
              {c}
            </label>
          ))}
        </fieldset>
      );
    case "fields":
      return (
        <div className="mt-8 grid max-w-[640px] gap-6">
          {b.items.map((f) => {
            const id = fieldId(f);
            const optional = /\(optional/i.test(f);
            const long = /\?|anything else/i.test(f);
            return (
              <div key={f}>
                <label htmlFor={id} className="field-label">{f}</label>
                {long ? (
                  <textarea id={id} name={id} className="field" required={!optional} />
                ) : (
                  <input id={id} name={id} className="field" required={!optional} type={/email/i.test(f) ? "email" : "text"} />
                )}
              </div>
            );
          })}
        </div>
      );
  }
}

// The website price in a headline gets its own line at display size. The sentence stays intact for readers
// and crawlers. Only $4,995 gets this; other prices in headlines stay in the running text.
function heroTitle(h1: string): React.ReactNode {
  const m = h1.match(/^(.*?)(\$4,995)([.,]?)\s*(.*)$/);
  if (!m) return h1;
  return (
    <>
      {m[1]}
      <span className="hero-price">
        {m[2]}
        {m[3] && <span className="sr-only">{m[3]}</span>}
      </span>{" "}
      {m[4]}
    </>
  );
}

// Section names in the copy files are working titles. Some describe the page's structure, not its subject,
// and those are never shown to a reader.
function sectionLabel(title: string): string | undefined {
  const t = title.replace(/\s*\([^)]*\)\s*/g, " ").trim();
  if (t.length > 28 || /call to action|thank you page|^the form$|^hero$/i.test(t)) return undefined;
  return t;
}

// Pages that describe the company or take a message. Every other page describes a service.
const NOT_A_SERVICE = new Set(["/", "/about", "/contact", "/pricing"]);

// Sibling pages from the same footer column, then the two pages every visitor may want next.
function relatedLinks(path: string): (readonly [string, string])[] {
  if (path === "/" || path === "/contact") return [];
  const cols: readonly { items: readonly (readonly [string, string])[] }[] = footerCols;
  const column = cols.find((c) => c.items.some(([, href]) => href === path));
  const siblings = (column?.items ?? []).filter(([, href]) => href !== path && !href.startsWith("/paperbrief")).slice(0, 5);
  const always = cols.flatMap((c) => c.items).filter(([, href]) => ["/life-science-website-design", "/pricing", "/ai-visibility-snapshot"].includes(href));
  const seen = new Set<string>([path]);
  return [...siblings, ...always].filter(([, href]) => (seen.has(href) ? false : (seen.add(href), true)));
}

export function CopyPageView({ path, sent, problem }: { path: string; sent?: boolean; problem?: "error" | "failed" }) {
  const page = copyPage(path);
  const notice = problem ? contactForm[problem] : "";
  if (sent && page.thanks) {
    return (
      <>
        <PageHero eyebrow={page.eyebrow} h1={page.thanks.h1 ?? page.h1} />
        <Section tone="paper" deferred={false}>
          <div className="[&>*:first-child]:mt-0">
            {page.thanks.blocks.map((b, i) => <Block key={i} b={b} />)}
          </div>
        </Section>
      </>
    );
  }
  const name = page.title.split(" | ")[0];
  const links = relatedLinks(path);
  const home = path === "/";
  // A section that holds only a video that has not been recorded yet stays off the page until the file is in public/.
  const sections = page.sections.filter((s) => !(s.blocks.length && !s.faqs && s.blocks.every((b) => b.type === "video" && b.src.startsWith("/") && !fs.existsSync(nodePath.join(process.cwd(), "public", b.src)))));
  const last = sections.length - 1;
  const closes = /call to action/i.test(sections[last]?.title ?? "");
  const faqs = page.sections.flatMap((s) => s.faqs ?? []);
  return (
    <>
      {faqs.length > 0 && <JsonLd data={faqLd(faqs)} />}
      {path !== "/" && <JsonLd data={breadcrumbLd([{ name: "Home", path: "/" }, { name, path }])} />}
      {!NOT_A_SERVICE.has(path) && <JsonLd data={serviceLd(name, page.description, path)} />}
      {(path === "/" || path === "/pricing") && (
        <JsonLd data={offersLd(name, publishedOffers.map((o) => ({ name: o.name, price: o.price })), path)} />
      )}
      <PageHero
        eyebrow={page.eyebrow}
        h1={heroTitle(page.h1)}
        lead={page.lead}
        aside={
          home ? (
            <div className="relative mx-auto hidden aspect-square w-full max-w-[520px] lg:block">
              <IsoSphere />
            </div>
          ) : undefined
        }
        cta={
          page.buttons.length || page.trust ? (
            <>
              {page.buttons.length > 0 && <Buttons links={page.buttons} />}
              {page.trust && <p className="mt-6 text-[13px] uppercase tracking-[0.1em] text-ink-soft">{page.trust}</p>}
            </>
          ) : undefined
        }
      />
      {sections.map((s, i) => {
        const navy = closes && i === last;
        const isForm = s.blocks.some((b) => b.type === "fields");
        // Image slots written one after another sit side by side as one row.
        const rows: { b: (typeof s.blocks)[number]; bi: number; run: number }[] = [];
        s.blocks.forEach((b, bi) => {
          const prev = rows[rows.length - 1];
          const media = (t: string) => t === "image" || t === "video";
          if (media(b.type) && prev && media(prev.b.type) && prev.bi + prev.run === bi) prev.run += 1;
          else rows.push({ b, bi, run: 1 });
        });
        const body = rows.map(({ b, bi, run }) =>
          run > 1 ? (
            <div key={bi} className={`mt-10 grid gap-6 sm:grid-cols-2 ${run >= 4 ? "lg:grid-cols-4" : run === 3 ? "lg:grid-cols-3" : ""}`}>
              {s.blocks.slice(bi, bi + run).map((x, xi) =>
                x.type === "image" ? <ImageSlot key={xi} brief={x.brief} src={x.src} ratio={/^portrait/i.test(x.brief) ? "portrait" : "standard"} /> : x.type === "video" ? <VideoSlot key={xi} src={x.src} srcVertical={x.srcVertical} caption={x.caption} /> : null,
              )}
            </div>
          ) : isForm && b.type === "buttons" ? (
            <div key={bi} className="mt-8">
              {notice && <p role="alert" className="mb-6 max-w-[640px] border-l-2 border-navy pl-4 leading-relaxed">{notice}</p>}
              <button type="submit" className="btn btn-solid">{b.links[0].label} <Arrow /></button>
            </div>
          ) : b.type === "diagram" || b.type === "table" || b.type === "quote" ? (
            <RevealBlock key={bi}>
              <Block b={b} />
            </RevealBlock>
          ) : (
            <Block key={bi} b={b} />
          ),
        );
        const section = (
          <Section key={s.id + i} label={navy ? undefined : sectionLabel(s.title)} tone={navy ? "navy" : i % 2 ? "bright" : "paper"} deferred={false}>
            <div id={s.id} className="scroll-mt-32 [&>*:first-child]:mt-0">
              {s.h2 && (
                <RevealBlock>
                  <h2 className="max-w-[26ch] font-display text-h2 font-medium">{s.h2}</h2>
                </RevealBlock>
              )}
              {isForm ? (
                <form action={sendContact}>
                  <input type="hidden" name="source_path" value={path} />
                  <div aria-hidden="true" className="hidden">
                    <input type="text" name="hp_url" tabIndex={-1} autoComplete="off" />
                  </div>
                  {body}
                </form>
              ) : body}
              {s.faqs && (
                <div className="mt-10 max-w-[72ch]">
                  <FAQ faqs={s.faqs} />
                </div>
              )}
            </div>
          </Section>
        );
        // The related row sits just above the closing call to action, where a reader decides what to open next.
        if (!(navy && links.length)) return section;
        return (
          <React.Fragment key={s.id + i}>
            <Section label={related.label} tone={i % 2 ? "bright" : "paper"} deferred={false}>
              <nav aria-label={related.heading}>
                <h2 className="font-display text-h3 font-medium">{related.heading}</h2>
                <ul className="mt-6 grid gap-x-10 gap-y-1 sm:grid-cols-2 lg:grid-cols-3">
                  {links.map(([label, href]) => (
                    <li key={href} className="border-t border-rule">
                      <Link href={href} className="cta-link w-full justify-between">{label} <Arrow /></Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </Section>
            {section}
          </React.Fragment>
        );
      })}
    </>
  );
}
