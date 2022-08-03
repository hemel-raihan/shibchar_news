// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   images: {
//     domains: ["res.cloudinary.com"],
//     formats: ['image/avif', 'image/webp'],
//   },
// }
// module.exports = nextConfig

const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const nextConfig = {
  images: {
    domains: ['res.cloudinary.com']
  }
}

module.exports = withPlugins([[withImages]], nextConfig)

