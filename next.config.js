/** @type {import('next').NextConfig} */
const basePath = process.env.NODE_ENV === "production" ? "/tools" : "";
module.exports = {
  reactStrictMode: true,
  basePath,
  assetPrefix: `${basePath}/`,
};
