/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['bonnadona-storage.s3.amazonaws.com', 'bonnadona-public.s3.amazonaws.com'],
  },
};

export default nextConfig;
