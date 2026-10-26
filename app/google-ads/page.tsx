import { getService } from "@/content/services";
import { PageTemplate } from "@/components/sections/PageTemplate";
import type { Metadata } from "next";
import { metaDescription, metaTitle } from "@/lib/meta";

const page = getService("google-ads")!;
export const metadata: Metadata = {
  title: { absolute: metaTitle(page.title) },
  description: metaDescription(page.metaDescription),
  alternates: { canonical: "/google-ads" },
};

export default function Page() {
  return <PageTemplate page={page} basePath="" crumbRoot={{ name: "Services", path: "/services" }} />;
}
