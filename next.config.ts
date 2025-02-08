import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

   /* ignore build errors */
   ignoreBuildErrors: true,

  images: {
    domains: ["images.unsplash.com","images.pexels.com"],
  },
  eslint:{
    ignoreDuringBuilds: true,
  }

};

export default nextConfig;
