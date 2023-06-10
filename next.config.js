/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [process.env.WP_IMAGES_DEV_URL, process.env.WP_IMAGES_PROD_URL],
  },
  env: {
    host: process.env.NODE_ENV === "development" ? process.env.DEV_HOST : process.env.PROD_HOST,
  },
};

module.exports = nextConfig;
