/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone', // pour Vercel avec des API Routes
    experimental: {
      serverActions: true // facultatif selon ta version de Next.js
    }
  };
  
  module.exports = nextConfig;