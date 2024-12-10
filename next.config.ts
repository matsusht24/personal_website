import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/personal_website",
  assetPrefix: "/personal_website",
  images: {
    unoptimized: true, //prevents dynamic image loading
  }

};

export default nextConfig;
