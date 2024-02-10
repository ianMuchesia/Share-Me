/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sharemestorageforian.blob.core.windows.net',
   
      },
    ],
  },
};

export default nextConfig;