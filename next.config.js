/** @type {import('next').NextConfig} */
const nextConfig = {
    // ... otras configuraciones que puedas tener ...
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "pub-90297d0da7b2491c8e14926e02ec8e30.r2.dev",
                port: "", // Dejar vacío o quitar si usa el puerto por defecto (443 para https)
                pathname: "/**" // Permitir cualquier path dentro de este hostname, o puedes ser más específico
            }
            // ... puedes añadir más patrones para otros dominios aquí ...
        ]
    }
};

module.exports = nextConfig;
