/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a.storyblok.com",
        port: "",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com", 
        port: "",
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

