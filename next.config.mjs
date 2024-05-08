/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'readymadeui.com'
            },
            {
                protocol: 'https',
                hostname: 'dummyimage.com'
            },
            {
                protocol: 'https',
                hostname: 'i.imgur.com'
            }
        ]

    }
};

export default nextConfig;
