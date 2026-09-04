/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredBy: false,

  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  compress: true,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/api/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, max-age=0",
          },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/claim",
        destination: "/contact/quote-form",
        permanent: true,
      },
      {
        source: "/eligibility",
        destination: "/contact/quote-form",
        permanent: true,
      },
      {
        source: "/check",
        destination: "/compensation-calculator",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/about-us/attorneys",
        permanent: true,
      },
      {
        source: "/team",
        destination: "/solicitors",
        permanent: true,
      },
      {
        source: "/legal",
        destination: "/housing-disrepair-claims/fitness-for-human-habitation-act",
        permanent: true,
      },
      {
        source: "/damp-mould",
        destination: "/services/damp-and-mould-claims",
        permanent: true,
      },
      {
        source: "/heating",
        destination: "/services/heating-and-boiler-claims",
        permanent: true,
      },
      {
        source: "/structural",
        destination: "/services/structural-disrepair-claims",
        permanent: true,
      },
      {
        source: "/pests",
        destination: "/services/pest-infestation-claims",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
