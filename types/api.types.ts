// =============================================================================
// API TYPE DEFINITIONS
// =============================================================================
// Description: Type definitions for API requests, responses, and data fetching
// =============================================================================

import { Artwork, ArtworkPreview, GalleryFilters } from './image.types';
import { Category } from './category.types';

/**
 * Generic API response wrapper
 */
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: ApiError;
  meta?: ApiMeta;
}

/**
 * API error structure
 */
export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, unknown>;
  stack?: string;
}

/**
 * API metadata for pagination
 */
export interface ApiMeta {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

/**
 * Pagination parameters
 */
export interface PaginationParams {
  page: number;
  limit: number;
  cursor?: string;
}

/**
 * Artwork list response
 */
export interface ArtworkListResponse {
  artworks: ArtworkPreview[];
  meta: ApiMeta;
  filters: GalleryFilters;
}

/**
 * Single artwork response
 */
export interface ArtworkDetailResponse {
  artwork: Artwork;
  relatedArtworks: ArtworkPreview[];
  category: Category;
}

/**
 * Category list response
 */
export interface CategoryListResponse {
  categories: Category[];
  totalArtworks: number;
}

/**
 * Search response
 */
export interface SearchResponse {
  artworks: ArtworkPreview[];
  categories: Category[];
  totalResults: number;
  meta: ApiMeta;
}

/**
 * Statistics response
 */
export interface StatsResponse {
  totalArtworks: number;
  totalCategories: number;
  totalSubCategories: number;
  featuredArtworks: number;
  newThisWeek: number;
  popularStyles: {
    style: string;
    count: number;
  }[];
}

/**
 * Fetch state for React Query or SWR
 */
export interface FetchState<T> {
  data: T | null;
  isLoading: boolean;
  isError: boolean;
  error: ApiError | null;
  isRefetching: boolean;
}