import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    domains: ['images.microcms-assets.io', 'img.shields.io'], // 必要なホスト名を追加
  },
};

export default nextConfig;
