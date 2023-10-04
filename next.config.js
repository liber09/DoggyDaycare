/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname: "images.dog.ceo",
                hostname: "imageupload.io",
            }
        ]
    }
}

module.exports = nextConfig
