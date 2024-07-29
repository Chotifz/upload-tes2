/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pd3brcsuxbwg6qnn.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
