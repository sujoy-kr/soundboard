/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        API: 'http://localhost:3001/api',
    },
}

module.exports = nextConfig
