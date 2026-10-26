import { getService } from "@/content/services";
import { PageTemplate } from "@/components/sections/PageTemplate";
import type { Metadata } from "next";
import { metaDescription, metaTitle } from "@/lib/meta";

const page = getService("outbound-appointment-setting")!;
export const metadata: Metadata = {
  title: { absolute: metaTitle(page.title) },
  description: metaDescription(page.metaDescription),
  alternates: { canonical: "/outbound-appointment-setting" },
};

export default function Page() {
  return <PageTemplate page={page} basePath="" crumbRoot={{ name: "Services", path: "/services" }} />;
}
