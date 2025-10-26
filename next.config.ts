import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    reactStrictMode: true,
    reactCompiler: true,

    experimental: {
        optimizePackageImports: ['motion', 'lucide-react', '@radix-ui/react-slot'],
    },

    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },

    images: {
        formats: ['image/webp', 'image/avif'],
        minimumCacheTTL: 60,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "pub-90297d0da7b2491c8e14926e02ec8e30.r2.dev",
                port: "",
                pathname: "/**"
            },
            {
                protocol: "https",
                hostname: "wakatime.com",
                port: "",
                pathname: "/badge/user/**"
            },
            {
                protocol: "https",
                hostname: "images.unsplash.com",
                port: "",
                pathname: "/**"
            },
            {
                protocol: "https",
                hostname: "i.pinimg.com",
                port: "",
                pathname: "/**"
            }
        ]
    },


    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'X-Content-Type-Options',
                        value: 'nosniff',
                    },
                    {
                        key: 'X-Frame-Options',
                        value: 'DENY',
                    },
                    {
                        key: 'X-XSS-Protection',
                        value: '1; mode=block',
                    },
                ],
            },
        ]
    },
};

export default nextConfig;
