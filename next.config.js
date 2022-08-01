/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    loader: "akamai",
    path: "",
    domains: ["picsum.photos", "firebasestorage.googleapis.com"],
  },
};

module.exports = nextConfig;
