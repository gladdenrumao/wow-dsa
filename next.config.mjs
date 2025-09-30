/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint errors during Vercel deployment
  },
};

export default nextConfig;
