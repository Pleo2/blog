/** @type {import('next').NextConfig} */
const nextConfig = {
    // ... otras configuraciones que puedas tener ...
    images: {
        domains: ['pub-90297d0da7b2491c8e14926e02ec8e30.r2.dev'],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "pub-90297d0da7b2491c8e14926e02ec8e30.r2.dev",
                port: "", // Dejar vacío o quitar si usa el puerto por defecto (443 para https)
                pathname: "/**" // Permitir cualquier path dentro de este hostname, o puedes ser más específico
            },
            {
                protocol: "https",
                hostname: "https://wakatime.com/badge/user",
                port: "",
                pathname: "/**"
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
    }
};

module.exports = nextConfig;
