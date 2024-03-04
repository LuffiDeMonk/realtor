/** @type {import('next').NextConfig} */
const nextConfig = {
    images:
    {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'bayut-production.s3.eu-central-1.amazonaws.com'
            },
            {
                protocol: 'https',
                hostname: 'ap.rdcpix.com'
            }
        ]
    }

};

export default nextConfig;
