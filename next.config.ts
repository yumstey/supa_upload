import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    domains: ["ucarecdn.com"], // shu yerda domen qo‘shildi
  },
};

export default nextConfig;
