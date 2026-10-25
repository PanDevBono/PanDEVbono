/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Spanish lives at "/", English at "/en" — one crawlable URL per language for SEO.
  // Keep in sync with src/lib/i18n/dictionaries.js.
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    localeDetection: false,
  },
};

export default nextConfig;
