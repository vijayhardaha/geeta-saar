const { withContentlayer } = require("next-contentlayer");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  skipWaiting: true,
});

const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "";
let basePath = "/";

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
  basePath = `/${repo}`;
}

// Define the Next.js configuration options.
const nextConfig = {
  // Enable React strict mode for better development practices.
  reactStrictMode: true,

  // Enable SWC-based minification for improved build performance.
  swcMinify: true,

  output: "export",
  assetPrefix,
  basePath,
};

// Enhance the Next.js configuration with 'next-contentlayer' and PWA.
module.exports = withPWA(withContentlayer(nextConfig));
