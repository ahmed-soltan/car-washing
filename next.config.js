/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.imagin.studio"]
    },
    typescript:{
        ignoreDevErrors: true
    }
}

module.exports = nextConfig