// =============================================================================
// CATEGORY TYPE DEFINITIONS
// =============================================================================
// Description: Type definitions for category and sub-category structures
// =============================================================================

import { LucideIcon } from 'lucide-react';

/**
 * Category icon configuration
 */
export interface CategoryIcon {
  icon: LucideIcon;
  color: string;           // Tailwind color class
  bgColor: string;         // Background color class
  gradient?: string;       // Optional gradient class
}

/**
 * Category statistics
 */
export interface CategoryStats {
  totalImages: number;
  featuredImages: number;
  newImages: number;
  subCategoryCount: number;
}

/**
 * Sub-category interface
 */
export interface SubCategory {
  id: string;
  name: string;
  nameBn: string;          // Bengali name
  slug: string;
  description: string;
  descriptionBn: string;   // Bengali description
  imageCount: number;
  coverImage?: string;
  isPopular: boolean;
  sortOrder: number;
}

/**
 * Main category interface
 */
export interface Category {
  id: string;
  name: string;
  nameBn: string;          // Bengali name
  slug: string;
  description: string;
  descriptionBn: string;   // Bengali description
  
  // Visual
  icon: CategoryIcon;
  coverImage: string;
  heroImage?: string;
  
  // Sub-categories
  subCategories: SubCategory[];
  
  // Statistics
  stats: CategoryStats;
  
  // Display
  isFeatured: boolean;
  isNew: boolean;
  sortOrder: number;
  
  // SEO
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

/**
 * Category card display variant
 */
export type CategoryCardVariant = 'default' | 'featured' | 'compact' | 'hero';

/**
 * Category navigation item (simplified for menus)
 */
export interface CategoryNavItem {
  id: string;
  name: string;
  slug: string;
  icon: LucideIcon;
  imageCount: number;
  subCategories: {
    name: string;
    slug: string;
  }[];
}

/**
 * Category filter option
 */
export interface CategoryFilterOption {
  value: string;
  label: string;
  count: number;
  icon?: LucideIcon;
}