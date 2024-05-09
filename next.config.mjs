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
            },
            {
                protocol: 'https',
                hostname: 'placeimg.com'
            },
            {
                protocol: 'https',
                hostname: 'via.placeholder.com'
            },
            {
                protocol: 'https',
                hostname: 'assets-es.imgfoot.com'
            }
        ]

    }
};

export default nextConfig;
