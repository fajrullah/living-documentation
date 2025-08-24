import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/storybook/:path*",
        destination: "/storybook/:path*", // static files from public
      },
    ];
  },
};

export default nextConfig;
