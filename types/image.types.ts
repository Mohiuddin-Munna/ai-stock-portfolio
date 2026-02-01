// =============================================================================
// IMAGE & ARTWORK TYPE DEFINITIONS
// =============================================================================
// Description: Core type definitions for AI-generated culinary artworks
// Author: Senior Frontend Architect
// Version: 1.0.0
// =============================================================================

/**
 * Supported image aspect ratios for the gallery
 */
export type ImageAspectRatio = 
  | '1:1'      // Square - Perfect for Instagram-style
  | '4:3'      // Classic - Traditional photo ratio
  | '3:4'      // Portrait - Vertical orientation
  | '16:9'     // Widescreen - Cinematic
  | '9:16'     // Stories - Mobile vertical
  | '3:2'      // DSLR Standard
  | '2:3';     // Portrait DSLR

/**
 * Image quality variants for optimization
 */
export type ImageQuality = 'thumbnail' | 'preview' | 'standard' | 'high' | 'original';

/**
 * Image style/mood classifications
 */
export type ImageStyle = 
  | 'bright'
  | 'moody'
  | 'minimal'
  | 'rustic'
  | 'modern'
  | 'vintage'
  | 'dramatic'
  | 'natural'
  | 'studio'
  | 'lifestyle';

/**
 * Color palette information for filtering
 */
export interface ColorPalette {
  primary: string;      // Hex color
  secondary: string;    // Hex color
  accent: string;       // Hex color
  dominant: string;     // Most prominent color
}

/**
 * Image dimensions interface
 */
export interface ImageDimensions {
  width: number;
  height: number;
  aspectRatio: ImageAspectRatio;
}

/**
 * Optimized image sources for responsive loading
 */
export interface ImageSources {
  thumbnail: string;    // ~150px - For grid previews
  preview: string;      // ~400px - For hover states
  standard: string;     // ~800px - For lightbox
  high: string;         // ~1200px - For full view
  blurDataURL: string;  // Base64 blur placeholder
}

/**
 * Image metadata for SEO and accessibility
 */
export interface ImageMetadata {
  title: string;
  description: string;
  altText: string;
  keywords: string[];
  photographer?: string;
  aiModel?: string;
  generatedAt?: Date;
}

/**
 * Main Artwork/Image interface
 * This is the core data structure for each gallery item
 */
export interface Artwork {
  // Identifiers
  id: string;
  slug: string;
  
  // Core Image Data
  src: ImageSources;
  dimensions: ImageDimensions;
  
  // Categorization
  categoryId: string;
  categorySlug: string;
  subCategoryId: string;
  subCategorySlug: string;
  
  // Metadata
  metadata: ImageMetadata;
  
  // Styling
  style: ImageStyle;
  colorPalette: ColorPalette;
  
  // Display Properties
  isFeatured: boolean;
  isNew: boolean;
  isPremium: boolean;
  
  // Statistics (for potential future use)
  viewCount: number;
  likeCount: number;
  
  // Timestamps
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Simplified artwork for grid display (performance optimization)
 */
export interface ArtworkPreview {
  id: string;
  slug: string;
  thumbnailSrc: string;
  previewSrc: string;
  blurDataURL: string;
  title: string;
  categorySlug: string;
  subCategorySlug: string;
  aspectRatio: ImageAspectRatio;
  style: ImageStyle;
  isFeatured: boolean;
  isNew: boolean;
}

/**
 * Artwork collection/group
 */
export interface ArtworkCollection {
  id: string;
  name: string;
  slug: string;
  description: string;
  coverImage: string;
  artworkIds: string[];
  artworkCount: number;
  isFeatured: boolean;
  createdAt: Date;
}

/**
 * Filter state for gallery
 */
export interface GalleryFilters {
  categorySlug: string | null;
  subCategorySlug: string | null;
  style: ImageStyle | null;
  aspectRatio: ImageAspectRatio | null;
  searchQuery: string;
  showFeaturedOnly: boolean;
  showNewOnly: boolean;
  sortBy: 'newest' | 'oldest' | 'popular' | 'random';
}

/**
 * Gallery view modes
 */
export type GalleryViewMode = 'masonry' | 'grid' | 'list' | 'carousel';

/**
 * Lightbox state
 */
export interface LightboxState {
  isOpen: boolean;
  currentArtworkId: string | null;
  artworkIds: string[];
}