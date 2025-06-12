import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 reactStrictMode:true,
 images:{
  domains: ['rb.gy', 'image.tmdb.org'],
 }
};

export default nextConfig;
