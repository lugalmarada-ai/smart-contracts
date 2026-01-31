/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Disable minification to reduce build memory
  swcMinify: false,
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
