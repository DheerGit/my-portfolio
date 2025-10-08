// next.config.mjs
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  // GitHub Pages serves the app under /my-portfolio in production
  basePath: isProd ? "/my-portfolio" : "",

  // Static export for GitHub Pages
  output: "export",

  images: {
    // Required when using `next export` so images are served as plain <img>
    unoptimized: true,
    remotePatterns: [{ protocol: "https", hostname: "**" }],
    formats: ["image/webp"],
  },

  // Silence LAN dev warning you saw in logs
  allowedDevOrigins: ["http://192.168.0.100:3000"],


  // Optional: if some static hosts need prefixed asset paths, uncomment below
  // assetPrefix: isProd ? "/my-portfolio/" : undefined,
};

export default nextConfig;