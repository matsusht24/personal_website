import type { NextConfig } from "next";

const assetPrefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export {assetPrefix}
const nextConfig: NextConfig = {

  basePath: "/personal_website",

};

export default nextConfig;
