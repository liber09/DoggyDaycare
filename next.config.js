/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname: "images.dog.ceo"
            }
        ]
    }
}

module.exports = nextConfig
