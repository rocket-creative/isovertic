import type { Metadata } from "next";
import { CopyPageView } from "@/components/sections/CopyPage";
import { copyMetadata } from "@/lib/sitecopy";

export const metadata: Metadata = copyMetadata("/");
export default function Page() {
  return <CopyPageView path="/" />;
}
