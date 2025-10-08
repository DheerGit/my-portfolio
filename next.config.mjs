// next.config.mjs
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  basePath: isProd ? '/my-portfolio' : '',
  output: 'export',
  assetPrefix: isProd ? '/my-portfolio/' : undefined,
  images: {
    unoptimized: true,
    remotePatterns: [{ protocol: 'https', hostname: '**' }],
    formats: ['image/webp'],
  },
  allowedDevOrigins: ['http://192.168.0.100:3000'],
};

export default nextConfig;