import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.fontshare.com",
      },
    ],
  },
};

export default nextConfig;
