import type { Metadata } from "next";
import { CopyPageView } from "@/components/sections/CopyPage";
import { copyMetadata } from "@/lib/sitecopy";

export const metadata: Metadata = copyMetadata("/contact");
export default async function Page({ searchParams }: { searchParams: Promise<{ sent?: string; problem?: string }> }) {
  const sp = await searchParams;
  const problem = sp.problem === "error" || sp.problem === "failed" ? sp.problem : undefined;
  return <CopyPageView path="/contact" sent={sp.sent === "1"} problem={problem} />;
}
