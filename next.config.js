/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'images.dog.ceo'
            },
            {
                protocol: 'https',
                hostname: 'imageupload.io'
            },
        ]
    }
}

module.exports = nextConfig
