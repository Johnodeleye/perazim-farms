/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'photos.fife.usercontent.google.com',
      },
    ],
  },
}
 module.exports = (nextConfig);