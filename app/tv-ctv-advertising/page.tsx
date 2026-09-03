import { getService } from "@/content/services";
import { PageTemplate } from "@/components/sections/PageTemplate";
import type { Metadata } from "next";

const page = getService("tv-ctv-advertising")!;
export const metadata: Metadata = {
  title: { absolute: page.title },
  description: page.metaDescription,
  alternates: { canonical: "/tv-ctv-advertising" },
};

export default function Page() {
  return <PageTemplate page={page} basePath="" crumbRoot={{ name: "Services", path: "/tv-ctv-advertising" }} />;
}
