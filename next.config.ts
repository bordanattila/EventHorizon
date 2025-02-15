import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com'
      },
      {
        hostname: 'hydeparkwinterwonderland.com',
      },
      {
        hostname: 'wembleypark.com',
      }
    ]
  }
};

export default nextConfig;
