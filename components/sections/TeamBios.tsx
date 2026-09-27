import Link from "next/link";
import { people } from "@/content/people";
import { Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { ImagePlaceholder, portraitPrompt, showImagePlaceholders } from "@/components/ui/ImagePlaceholder";
import { Arrow } from "@/components/ui/Arrow";

export function TeamBios({ heading }: { heading?: string } = {}) {
  return (
    <>
      {people.map((p, i) => (
        <Section key={p.slug} label={i === 0 ? "Founder" : "Operations"} tone={i === 0 ? "paper" : "bright"}>
          <RevealBlock className={showImagePlaceholders ? "" : "max-w-[68ch]"}>
            <div className={showImagePlaceholders ? "grid items-start gap-8 lg:grid-cols-[minmax(0,68ch)_220px]" : ""}>
              <div>
                {i === 0 && heading ? (
                  <p className="eyebrow">{heading}</p>
                ) : null}
                <h2 className={`${i === 0 && heading ? "mt-4" : ""} font-display text-h2 font-medium`}>
                  <Link href={`/people/${p.slug}`} className="hover:text-signal">{p.name}</Link>, {p.title}
                </h2>
                <p className="mt-6 leading-relaxed text-ink/90">{p.card}</p>
                {p.sameAs?.[0] && (
                  <div className="mt-6">
                    <a href={p.sameAs[0]} rel="noopener noreferrer" className="cta-link">
                      LinkedIn <Arrow />
                    </a>
                  </div>
                )}
              </div>
              {showImagePlaceholders ? (
                <ImagePlaceholder
                  label="Portrait prompt"
                  description={portraitPrompt(p.name, p.title)}
                  className="aspect-square w-full max-w-[220px]"
                />
              ) : null}
            </div>
          </RevealBlock>
        </Section>
      ))}
    </>
  );
}
