/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config")

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
    newNextLinkBehavior: true,
  },
  i18n,
  transpilePackages: ["@refinedev/nextjs-router"],
}

module.exports = nextConfig
