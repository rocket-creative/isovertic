import type { Metadata } from "next";
import { RewriteView } from "@/components/sections/RewriteView";
import { rewrite } from "@/content/rewrite";
export const metadata: Metadata = {title:{absolute:rewrite.services.title},description:rewrite.services.description,alternates:{canonical:"/services"}};
export default function Page(){return <RewriteView page="services" />;}

