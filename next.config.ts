import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/en/en/:path*',
        destination: '/en/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
