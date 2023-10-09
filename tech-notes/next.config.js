/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    assetPrefix: '/TechNotes/',
    basePath: '/TechNotes',
    images: {
        loader: 'custom',
        loaderFile: './lib/image_loader.js',
      },
}

module.exports = nextConfig
