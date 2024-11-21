import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['images.microcms-assets.io'], // 必要なホスト名を追加
  },
};

export default nextConfig;
