import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'visage.surgeplay.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig;
