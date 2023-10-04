/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname: "images.dog.ceo",
                hostname:  "1drv.ms"
            }
        ]
    }
}

module.exports = nextConfig
