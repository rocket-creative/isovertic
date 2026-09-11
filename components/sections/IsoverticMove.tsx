import Link from "next/link";
import { Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { Arrow } from "@/components/ui/Arrow";

export const isoverticMoveHome =
  "If you know which package you want, start on the pricing page with card or bank debit. No call required. If you would rather talk it through, send us your best-converting landing page URL. In about ten minutes we will tell you what is working, what is not, and whether the fix is the site, the offer, or the follow-up. Sometimes the honest answer is you are already fine, and we are happy to say so and hand you back your afternoon.";

export const isoverticMoveSystem =
  "If you know which package you want, start on the pricing page with card or bank debit. No call required. If you would rather talk it through, send us your best-converting landing page URL. In about ten minutes we will tell you what is working, what is not, and whether the fix is the site, the offer, or the follow-up. Sometimes the honest answer is you are already fine, and we are happy to say so and hand you back your afternoon.";

export function IsoverticMove({
  body,
  variant = "home",
}: {
  body?: string;
  variant?: "home" | "system";
} = {}) {
  const copy = body ?? (variant === "system" ? isoverticMoveSystem : isoverticMoveHome);

  return (
    <Section label="The move">
      <RevealBlock>
        <p className="max-w-[62ch] leading-relaxed text-ink/90">{copy}</p>
        <div className="mt-8">
          <Link href="/contact" className="btn btn-solid">
            Send us the URL <Arrow />
          </Link>
        </div>
      </RevealBlock>
    </Section>
  );
}
