import type { NextConfig } from "next";

// Static export: `npm run build` writes plain HTML/CSS/JS to `out/`,
// which Cloudflare Pages hosts for free (see docs/GO-LIVE.md).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
