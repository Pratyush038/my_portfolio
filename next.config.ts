import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable strict mode for better development experience
  reactStrictMode: true,

  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
    dangerouslyAllowSVG: true,
  },

  // Enable compression
  compress: true,

  // Optimize CSS
  experimental: {
    optimizeCss: true,
  },
};

export default nextConfig;
