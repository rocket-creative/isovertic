import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      // Staging and www hosts redirect to the canonical apex so every URL Google sees matches its canonical tag.
      { source: "/:path*", has: [{ type: "host", value: "isovertic.vercel.app" }], destination: "https://isovertic.com/:path*", permanent: true },
      { source: "/:path*", has: [{ type: "host", value: "www.isovertic.com" }], destination: "https://isovertic.com/:path*", permanent: true },
    ];
  },
};

export default nextConfig;
