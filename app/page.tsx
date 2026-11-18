import type { Metadata } from "next";
import { CopyPageView } from "@/components/sections/CopyPage";
import { copyPage } from "@/lib/sitecopy";

const page = copyPage("/");
export const metadata: Metadata = { title: { absolute: page.title }, description: page.description, alternates: { canonical: page.path } };
export default function Page() {
  return <CopyPageView path="/" />;
}
