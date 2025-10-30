import type { NextConfig } from "next";

const repo = 'buck-et_list_brands';
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  basePath: isProd ? `/${repo}` : undefined,
  assetPrefix: isProd ? `/${repo}/` : undefined,
  images: { unoptimized: true }, // needed if you’re exporting statically
};


export default nextConfig;
