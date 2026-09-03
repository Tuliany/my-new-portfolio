import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [{ source: "/favicon.ico", destination: "/favicon.svg" }];
  },
  async redirects() {
    return [
      {
        source: "/cv.pdf",
        destination: "/cv?download=1",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
