/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["two-zero.local", "admin.twozerocreatives.com"],
  },
  env: {
    // host:
    //   process.env.NODE_ENV === "production"
    //     ? process.env.PROD_HOST
    //     : process.env.DEV_HOST,
  },
};

module.exports = nextConfig;
