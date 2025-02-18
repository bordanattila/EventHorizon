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
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      }
    ]
  }
};

export default nextConfig;
