/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["two-zero.local", "admin.twozerocreatives.com"],
  },
  env: {
    host:
      process.env.NODE_ENV === "development"
        ? process.env.DEV_HOST
        : process.env.PROD_HOST,
  },
};

module.exports = nextConfig;
