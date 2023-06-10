/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["two-zero.local", "admin.twozerocreatives.com"],
  },
  env: {
    host: process.env.NEXT_PUBLIC_WP_URL,
  },
};

module.exports = nextConfig;
