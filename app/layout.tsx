import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";
import { MobileCTABar } from "@/components/sections/MobileCTABar";
import { JsonLd } from "@/components/ui/JsonLd";
import { organizationLd, personLd } from "@/lib/schema";
import { site } from "@/lib/site";

const display = localFont({ src: "./fonts/archivo-var.woff2", weight: "100 900", variable: "--font-display", display: "swap" });
const body = localFont({ src: "./fonts/inter-var.woff2", weight: "100 900", variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "ISOVERTIC | Growth Firm That Builds Your Pipeline and Books Your Meetings", template: "%s | ISOVERTIC" },
  description: site.description,
  openGraph: { siteName: site.name, type: "website", images: ["/og.png"] },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="pb-14 lg:pb-0">
        <JsonLd data={[organizationLd(), personLd()]} />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
