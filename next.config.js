/** @type {import('next').NextConfig} */

const nextConfig = {
    eslint: { ignoreDuringBuilds: true },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.themealdb.com",
            },
        ],
    },
}

module.exports = nextConfig
