/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  rewrites: async () => [{ source: "/", destination: "/root" }],
  i18n: { locales: ["ja"], defaultLocale: "ja" },
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
};

module.exports = nextConfig;
