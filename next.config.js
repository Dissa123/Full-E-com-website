/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };
    //config.resolve.fallback = { cptable: false };

    return config;
  },
}

module.exports = nextConfig
