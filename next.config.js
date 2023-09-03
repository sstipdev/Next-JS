/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // 외부 이미지 경로 config
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  // Redirects
  async redirects() {
    return [
      {
        source: "/products/deleted_forever",
        destination: "/products",
        // status code 308 영구적인 리다이렉
        permanent: true,
      },
      {
        source: "/products/deleted_temp",
        destination: "/products",
        // status code 307 임시적인 리다이렉
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
