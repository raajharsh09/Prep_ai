import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    async redirects() {
        return [
            {
                source: "/signin",      // 🔁 incoming request path
                destination: "/sign-in", // 🎯 where to redirect
                permanent: true,        // 🔁 use 308 (permanent)
            },
            {
                source: "/signup",
                destination: "/sign-up",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;

