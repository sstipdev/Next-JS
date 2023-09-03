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
    // A(경로)를 B(경로)로 데려가는 느낌이라고 보면 된다.
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

  // Rewrites
  async rewrites() {
    // 기존의 A(url)을 B(url)로 덮어(대체)씌우는 느낌이라고 보면 된다.
    return [
      {
        source: "/sst",
        destination: "/about/me/sst",
      },
      {
        source: "/items/:slug",
        destination: "/products/:slug",
      },
    ];
  },
};

module.exports = nextConfig;
