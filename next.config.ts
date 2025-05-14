import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 

  images: {
    domains: ["images.unsplash.com","images.pexels.com","img.freepik.com","ik.imagekit.io","res.cloudinary.com","flowbite.s3.amazonaws.com","www.sennheiser.com","cellecor.com","flowbite.com","plus.unsplash.com","pagedone.io","cdn.shopify.com","www.pexels.com","www.freepik.com","cdn.pixabay.com","www.istockphoto.com","www.shutterstock.com","readymadeui.com"],
  },
  eslint:{
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: ['@mantine/core', '@mantine/hooks'],
  },

};

export default nextConfig;
