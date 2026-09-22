import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Royalty-free stock imagery (Unsplash License). Only the free
      // `images.unsplash.com` host is allowed — `plus.unsplash.com` assets
      // are Unsplash+ and require a paid licence.
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo-**",
      },
    ],
  },
};

export default nextConfig;
