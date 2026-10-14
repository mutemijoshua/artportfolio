import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Image qualities the site is allowed to request. 75 for the gallery,
    // 90 for the full-screen view. Next.js 16 requires this list.
    qualities: [75, 90],
  },
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
