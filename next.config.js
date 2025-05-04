  /** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone', // ✅ Corrige les erreurs ENOENT
    experimental: {
      serverActions: {}, // ✅ au lieu de `true` si tu as activé serverActions
    },
  };
  
  module.exports = nextConfig;