import type { NextConfig } from "next";

// Static export for GitHub Pages: project pages are served from
// https://<user>.github.io/<repo>/, so every asset/link needs that prefix baked in.
// Set via the "build:pages" script; plain `next dev`/`next build` stay unprefixed.
const repoBasePath = process.env.GITHUB_PAGES ? "/EDISONDA_KBF_Karnet" : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: repoBasePath,
  assetPrefix: repoBasePath,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: repoBasePath,
  },
};

export default nextConfig;
