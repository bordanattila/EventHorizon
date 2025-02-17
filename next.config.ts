import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'hydeparkwinterwonderland.com',
      },
      {
        protocol: 'https',
        hostname: 'wembleypark.com',
      }
    ]
  }
};

export default nextConfig;
