// =============================================================================
// MAIN TYPE EXPORTS
// =============================================================================
// Description: Barrel export file for all type definitions
// Usage: import { Artwork, Category, NavLink } from '@/types'
// =============================================================================

// Image & Artwork Types
export type {
  ImageAspectRatio,
  ImageQuality,
  ImageStyle,
  ColorPalette,
  ImageDimensions,
  ImageSources,
  ImageMetadata,
  Artwork,
  ArtworkPreview,
  ArtworkCollection,
  GalleryFilters,
  GalleryViewMode,
  LightboxState,
} from './image.types';

// Category Types
export type {
  CategoryIcon,
  CategoryStats,
  SubCategory,
  Category,
  CategoryCardVariant,
  CategoryNavItem,
  CategoryFilterOption,
} from './category.types';

// Navigation Types
export type {
  NavLink,
  NavGroup,
  NavigationConfig,
  DockItem,
  BreadcrumbItem,
  SearchSuggestion,
  CommandItem,
  ToastType,
  Toast,
  ModalState,
} from './navigation.types';

// API Types
export type {
  ApiResponse,
  ApiError,
  ApiMeta,
  PaginationParams,
  ArtworkListResponse,
  ArtworkDetailResponse,
  CategoryListResponse,
  SearchResponse,
  StatsResponse,
  FetchState,
} from './api.types';

// =============================================================================
// UTILITY TYPES
// =============================================================================

/**
 * Make all properties optional recursively
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

/**
 * Extract the type of array elements
 */
export type ArrayElement<T> = T extends readonly (infer U)[] ? U : never;

/**
 * Make specific properties required
 */
export type RequireFields<T, K extends keyof T> = T & Required<Pick<T, K>>;

/**
 * Omit properties from a type
 */
export type StrictOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/**
 * Props with className support
 */
export interface WithClassName {
  className?: string;
}

/**
 * Props with children support
 */
export interface WithChildren {
  children: React.ReactNode;
}

/**
 * Common component props
 */
export interface BaseComponentProps extends WithClassName {
  id?: string;
  testId?: string;
}