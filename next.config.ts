import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.icons8.com",
        port: "",
        pathname: "/3d-fluency/94/scroll.png",
        search: "",
      },
    ],
  },
  // experimental: {
  //   reactCompiler: true,
  // },
};

export default nextConfig;
