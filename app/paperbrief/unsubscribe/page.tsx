import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/Shell";
import { Arrow } from "@/components/ui/Arrow";
import { paperbrief as c } from "@/content/paperbrief";
import { db } from "@/lib/paperbrief-db";

export const metadata: Metadata = {
  title: { absolute: c.unsubscribe.title },
  alternates: { canonical: "/paperbrief/unsubscribe" },
  robots: { index: false, follow: false },
};
export const dynamic = "force-dynamic";

// The link in every alert email lands here. The token is random and names no one.
export default async function Unsubscribe({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const t = (await searchParams).t;
  const token = typeof t === "string" && /^[0-9a-f-]{36}$/i.test(t) ? t : "";
  let done = false;
  const client = db();
  if (token && client) {
    const { data } = await client.from("paperbrief_workspaces").update({ alerts: false }).eq("unsubscribe_token", token).select("id");
    done = Boolean(data?.length);
  }
  const u = c.unsubscribe;
  return (
    <PageHero
      eyebrow={u.eyebrow}
      h1={done ? u.done : u.missing}
      lead={done ? u.doneText : u.missingText}
      cta={<Link href={c.path} className="btn btn-solid">{u.button} <Arrow /></Link>}
    />
  );
}
