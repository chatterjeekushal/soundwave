import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 

  images: {
    domains: ["images.unsplash.com","images.pexels.com","img.freepik.com","ik.imagekit.io","res.cloudinary.com","flowbite.s3.amazonaws.com"],
  },
  eslint:{
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },

};

export default nextConfig;
