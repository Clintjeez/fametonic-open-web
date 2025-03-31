/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['vercel.app'],
    unoptimized: true,
  },
};

module.exports = nextConfig;
