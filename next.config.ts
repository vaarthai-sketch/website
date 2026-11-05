import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/en/en/:path*',
        destination: '/en/:path*',
        permanent: true,
      },
      {
        source: '/events/fathers-day-special-service',
        destination: '/events',
        permanent: true,
      },
      {
        source: '/en/events/fathers-day-special-service',
        destination: '/en/events',
        permanent: true,
      },
    ];
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
