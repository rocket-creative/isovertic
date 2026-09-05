import Link from "next/link";
import { PageHero, Section } from "@/components/sections/Shell";
import { RevealBlock } from "@/components/ui/RevealBlock";
import { OnboardingForm } from "@/components/sections/OnboardingForm";
import { welcomeCopy } from "@/content/checkout";
import { stripe, getPlan, isPlanKey } from "@/lib/stripe";
import { Arrow } from "@/components/ui/Arrow";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: welcomeCopy.title },
  robots: { index: false, follow: false },
  alternates: { canonical: "/welcome" },
};

async function verify(sessionId: string | undefined) {
  if (!sessionId || !process.env.STRIPE_SECRET_KEY) return null;
  try {
    const s = await stripe().checkout.sessions.retrieve(sessionId);
    if (s.status !== "complete") return null;
    const plan = s.metadata?.plan && isPlanKey(s.metadata.plan) ? getPlan(s.metadata.plan) : null;
    return { id: s.id, email: s.customer_details?.email || s.customer_email || "", planLabel: plan?.label || "ISOVERTIC", planKey: plan?.key || "", pending: s.payment_status !== "paid" };
  } catch {
    return null;
  }
}

export default async function Welcome({ searchParams }: { searchParams: Promise<{ session_id?: string }> }) {
  const { session_id } = await searchParams;
  const session = await verify(session_id);
  if (!session) {
    return (
      <>
        <PageHero eyebrow="Welcome" h1="One more step." lead={welcomeCopy.unverified} />
        <Section label="Next" deferred={false}>
          <div className="flex flex-wrap gap-x-8 gap-y-3">
            <Link href="/pricing" className="cta-link">Pricing <Arrow /></Link>
            <Link href="/start" className="cta-link">Start Baseline <Arrow /></Link>
          </div>
        </Section>
      </>
    );
  }
  return (
    <>
      <PageHero eyebrow={welcomeCopy.eyebrow} h1={welcomeCopy.h1} lead={session.pending ? welcomeCopy.pending : welcomeCopy.lead} />
      <Section label="Intake" deferred={false}>
        <div className="grid gap-14 lg:grid-cols-[1fr_minmax(0,320px)]">
          <RevealBlock>
            <OnboardingForm sessionId={session.id} email={session.email} planKey={session.planKey} />
          </RevealBlock>
          <RevealBlock delay={140}>
            <p className="eyebrow">Your plan</p>
            <p className="mt-3 font-display text-[18px] font-medium">{session.planLabel}</p>
            <p className="mt-2 text-[14px] text-ink-soft">{session.email}</p>
            <p className="mt-6 text-[14px] leading-relaxed text-ink-soft">Receipt and access checklist arrive by email. Reply to either with questions; a person answers the same business day.</p>
            <div className="iso-mark mt-10 max-w-[240px]" aria-hidden="true" />
          </RevealBlock>
        </div>
      </Section>
    </>
  );
}
