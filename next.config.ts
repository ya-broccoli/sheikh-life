import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    images: {
        unoptimized: true, // если используем url() в CSS или прямые ссылки на картинки
    },
};

export default nextConfig;
