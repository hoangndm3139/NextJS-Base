import { NextConfig } from "next";

// Security headers for the application
const securityHeaders = [
  {
    key: "X-DNS-Prefetch-Control",
    value: "on",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  {
    key: "Referrer-Policy",
    value: "origin-when-cross-origin",
  },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
  },
];

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  trailingSlash: true, // For SEO consistency
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  async headers() {
    // Only add security headers in production and test environments
    return process.env.NODE_ENV !== "development"
      ? [
          {
            source: "/(.*)",
            headers: securityHeaders,
          },
          // Specific headers for service worker
          // {
          //   source: "/sw.js",
          //   headers: [
          //     {
          //       key: "Content-Type",
          //       value: "application/javascript; charset=utf-8",
          //     },
          //     {
          //       key: "Cache-Control",
          //       value: "no-cache, no-store, must-revalidate",
          //     },
          //   ],
          // },
        ]
      : []; // Return an empty array in development mode
  },
};

export default nextConfig;
