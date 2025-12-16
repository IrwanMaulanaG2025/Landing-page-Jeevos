/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    turbopack: false,
  },
  images: {
    domains: ["placehold.co"],
  },
};

export default nextConfig
