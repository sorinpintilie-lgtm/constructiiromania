import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable image optimization
  images: {
    unoptimized: true,
  },
  // Ensure proper trailing slashes
  trailingSlash: false,
};

export default nextConfig;
