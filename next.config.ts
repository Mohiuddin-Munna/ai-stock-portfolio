import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // ==========================================================================
  // CORE SETTINGS
  // ==========================================================================
  
  // Enable React Strict Mode for development
  reactStrictMode: true,
  
  // Disable x-powered-by header for security
  poweredByHeader: false,

  // ==========================================================================
  // IMAGE OPTIMIZATION
  // ==========================================================================
  
  images: {
    // Allowed image domains (add external domains here)
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
      },
    ],
    
    // Image formats to use
    formats: ['image/avif', 'image/webp'],
    
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    
    // Image sizes for the `sizes` attribute
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Minimum cache TTL for optimized images (in seconds)
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },

  // ==========================================================================
  // EXPERIMENTAL FEATURES
  // ==========================================================================
  
  experimental: {
    // Enable optimized package imports
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
    ],
  },

  // ==========================================================================
  // HEADERS (Security)
  // ==========================================================================
  
  async headers() {
    return [
      {
        // Apply to all routes
        source: '/:path*',
        headers: [
          // Prevent XSS attacks
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          // Prevent MIME type sniffing
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          // Prevent clickjacking
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          // Referrer Policy
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Permissions Policy (disable sensitive features)
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      {
        // Apply to images - prevent hotlinking/downloading
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
          // Prevent images from being embedded elsewhere
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
        ],
      },
    ];
  },

  // ==========================================================================
  // REDIRECTS
  // ==========================================================================
  
  async redirects() {
    return [
      // Example redirect (uncomment if needed)
      // {
      //   source: '/old-page',
      //   destination: '/new-page',
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;