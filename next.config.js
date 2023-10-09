const { withContentlayer } = require("next-contentlayer");

// Check if the environment is development
const isDev = process.env.NODE_ENV !== "production";

const withPWA = require("next-pwa")({
  // Specify the destination directory for the PWA files.
  dest: "public",

  // Disable PWA registration in development environment.
  disable: isDev,

  // Enable PWA registration in production environment.
  register: true,

  // Cache PWA assets when navigating on the frontend.
  cacheOnFrontEndNav: true,

  // Skip waiting for old service workers to finish when updating.
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
