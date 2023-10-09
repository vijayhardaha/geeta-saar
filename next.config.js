const { withContentlayer } = require("next-contentlayer");
const withPWA = require("next-pwa")({
  dest: "public",
  register: true,
  cacheOnFrontEndNav: true,
  skipWaiting: true,
});

// Define the Next.js configuration options.
const nextConfig = {
  // Enable React strict mode for better development practices.
  reactStrictMode: true,

  // Enable SWC-based minification for improved build performance.
  swcMinify: true,
};

// Enhance the Next.js configuration with 'next-contentlayer' and PWA.
module.exports = withPWA(withContentlayer(nextConfig));
