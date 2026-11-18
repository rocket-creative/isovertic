import Link from "next/link";
import {PageHero,Section} from "@/components/sections/Shell";
export default function Page(){return <><PageHero eyebrow="Local review only" h1="This page is not part of the rewrite yet." lead="This older page is kept in the local source and is not part of the review. Old packages and checkout are switched off."/><Section deferred={false}><Link href="/" className="btn btn-solid">Return to the rewritten homepage</Link></Section></>;}
