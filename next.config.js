/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpapc }) => {
    config.resolve.alias.canvas = false;
    config.resolve.alias.encoding = false;
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/sign-in",
        destination: "/api/auth/login?",
        permanent: true,
      },
      {
        source: "/sign-up",
        destination: "/api/auth/register?",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
