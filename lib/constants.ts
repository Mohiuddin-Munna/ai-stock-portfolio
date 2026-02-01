// =============================================================================
// APPLICATION CONSTANTS
// =============================================================================
// Description: Central location for all application constants
// =============================================================================

/**
 * Site-wide configuration
 */
export const SITE_CONFIG = {
  name: 'Culinary Canvas',
  tagline: 'AI-Generated Culinary Artworks',
  description: 'A premium portfolio showcasing breathtaking AI-generated food photography and culinary art.',
  url: 'https://culinarycanvas.art',
  author: 'Culinary Canvas Studio',
  email: 'hello@culinarycanvas.art',
  social: {
    twitter: '@culinarycanvas',
    instagram: '@culinarycanvas.art',
    pinterest: 'culinarycanvas',
  },
} as const;

/**
 * SEO defaults
 */
export const SEO_CONFIG = {
  titleTemplate: '%s | Culinary Canvas',
  defaultTitle: 'Culinary Canvas - AI Stock Photos Portfolio',
  defaultDescription: 'Explore our collection of stunning AI-generated culinary artworks. Premium food photography for creative professionals.',
  keywords: [
    'AI food photography',
    'culinary art',
    'food stock photos',
    'AI generated images',
    'food portfolio',
    'culinary artworks',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Culinary Canvas',
  },
} as const;

/**
 * Responsive breakpoints (matching Tailwind)
 */
export const BREAKPOINTS = {
  xs: 475,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

/**
 * Gallery configuration
 */
export const GALLERY_CONFIG = {
  itemsPerPage: 24,
  maxItemsPerPage: 48,
  masonryColumns: {
    default: 2,
    sm: 2,
    md: 3,
    lg: 4,
    xl: 5,
  },
  imageQuality: 85,
  blurDataURLWidth: 10,
  placeholderColor: '#1a1a2e',
} as const;

/**
 * Animation durations (in seconds)
 */
export const ANIMATION_DURATION = {
  instant: 0,
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
  slowest: 1.2,
} as const;

/**
 * Animation easings (Framer Motion compatible)
 */
export const ANIMATION_EASE = {
  linear: [0, 0, 1, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  spring: { type: 'spring', stiffness: 300, damping: 30 },
  bounce: { type: 'spring', stiffness: 400, damping: 10 },
  smooth: [0.25, 0.1, 0.25, 1],
} as const;

/**
 * Z-index layers
 */
export const Z_INDEX = {
  behind: -1,
  base: 0,
  dropdown: 10,
  sticky: 20,
  overlay: 30,
  modal: 40,
  popover: 50,
  tooltip: 60,
  toast: 70,
  maximum: 9999,
} as const;

/**
 * Image aspect ratio dimensions
 */
export const ASPECT_RATIOS = {
  '1:1': { width: 1, height: 1 },
  '4:3': { width: 4, height: 3 },
  '3:4': { width: 3, height: 4 },
  '16:9': { width: 16, height: 9 },
  '9:16': { width: 9, height: 16 },
  '3:2': { width: 3, height: 2 },
  '2:3': { width: 2, height: 3 },
} as const;

/**
 * Color palette
 */
export const COLORS = {
  // Brand colors
  brand: {
    50: '#fef7ee',
    100: '#fcecd6',
    200: '#f8d5ac',
    300: '#f3b778',
    400: '#ed8f41',
    500: '#e9711c',
    600: '#da5712',
    700: '#b54111',
    800: '#903516',
    900: '#742e15',
  },
  // Neutral colors
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
    950: '#0a0a0a',
  },
  // Semantic colors
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
} as const;

/**
 * Typography scale
 */
export const FONT_SIZES = {
  xs: '0.75rem',     // 12px
  sm: '0.875rem',    // 14px
  base: '1rem',      // 16px
  lg: '1.125rem',    // 18px
  xl: '1.25rem',     // 20px
  '2xl': '1.5rem',   // 24px
  '3xl': '1.875rem', // 30px
  '4xl': '2.25rem',  // 36px
  '5xl': '3rem',     // 48px
  '6xl': '3.75rem',  // 60px
  '7xl': '4.5rem',   // 72px
  '8xl': '6rem',     // 96px
  '9xl': '8rem',     // 128px
} as const;

/**
 * Spacing scale
 */
export const SPACING = {
  px: '1px',
  0: '0',
  0.5: '0.125rem',
  1: '0.25rem',
  1.5: '0.375rem',
  2: '0.5rem',
  2.5: '0.625rem',
  3: '0.75rem',
  3.5: '0.875rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  7: '1.75rem',
  8: '2rem',
  9: '2.25rem',
  10: '2.5rem',
  11: '2.75rem',
  12: '3rem',
  14: '3.5rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
} as const;

/**
 * Border radius
 */
export const BORDER_RADIUS = {
  none: '0',
  sm: '0.125rem',
  default: '0.25rem',
  md: '0.375rem',
  lg: '0.5rem',
  xl: '0.75rem',
  '2xl': '1rem',
  '3xl': '1.5rem',
  full: '9999px',
} as const;

/**
 * Box shadows
 */
export const SHADOWS = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  default: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
  inner: 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)',
  none: 'none',
} as const;

/**
 * Keyboard shortcuts
 */
export const KEYBOARD_SHORTCUTS = {
  search: 'ctrl+k',
  escape: 'escape',
  nextImage: 'arrowright',
  prevImage: 'arrowleft',
  closeModal: 'escape',
  toggleTheme: 'ctrl+shift+t',
} as const;

/**
 * Local storage keys
 */
export const STORAGE_KEYS = {
  theme: 'culinary-canvas-theme',
  viewMode: 'culinary-canvas-view-mode',
  favorites: 'culinary-canvas-favorites',
  recentSearches: 'culinary-canvas-recent-searches',
  cookieConsent: 'culinary-canvas-cookie-consent',
} as const;

/**
 * API endpoints (for future use)
 */
export const API_ENDPOINTS = {
  artworks: '/api/artworks',
  categories: '/api/categories',
  search: '/api/search',
  stats: '/api/stats',
} as const;

/**
 * Image style labels (for UI display)
 */
export const IMAGE_STYLE_LABELS: Record<string, string> = {
  bright: 'Bright & Airy',
  moody: 'Moody & Dark',
  minimal: 'Minimal & Clean',
  rustic: 'Rustic & Warm',
  modern: 'Modern & Sleek',
  vintage: 'Vintage & Retro',
  dramatic: 'Dramatic & Bold',
  natural: 'Natural Light',
  studio: 'Studio Lit',
  lifestyle: 'Lifestyle',
} as const;

/**
 * Portfolio statistics (placeholder - replace with real data)
 */
export const PORTFOLIO_STATS = {
  totalArtworks: 2500,
  categories: 10,
  subCategories: 100,
  styles: 10,
  weeklyNewAdditions: 50,
} as const;