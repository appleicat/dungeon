import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  basePath: "/dungeon",
  output: "export",
};

export default nextConfig;
