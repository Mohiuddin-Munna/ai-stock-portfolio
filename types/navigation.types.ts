// =============================================================================
// NAVIGATION TYPE DEFINITIONS
// =============================================================================
// Description: Type definitions for navigation, menus, and UI components
// =============================================================================

import { LucideIcon } from 'lucide-react';

/**
 * Navigation link item
 */
export interface NavLink {
  id: string;
  label: string;
  href: string;
  icon?: LucideIcon;
  isExternal?: boolean;
  isActive?: boolean;
  badge?: string | number;
}

/**
 * Navigation group with children
 */
export interface NavGroup {
  id: string;
  label: string;
  icon?: LucideIcon;
  children: NavLink[];
}

/**
 * Main navigation configuration
 */
export interface NavigationConfig {
  mainNav: NavLink[];
  categoryNav: NavGroup[];
  footerNav: {
    company: NavLink[];
    resources: NavLink[];
    legal: NavLink[];
    social: NavLink[];
  };
}

/**
 * Floating dock item
 */
export interface DockItem {
  id: string;
  label: string;
  icon: LucideIcon;
  href?: string;
  onClick?: () => void;
  isActive?: boolean;
  tooltip?: string;
}

/**
 * Breadcrumb item
 */
export interface BreadcrumbItem {
  label: string;
  href?: string;
  isCurrent?: boolean;
}

/**
 * Search suggestion item
 */
export interface SearchSuggestion {
  id: string;
  type: 'category' | 'subcategory' | 'artwork' | 'tag';
  label: string;
  slug: string;
  imageCount?: number;
  thumbnailSrc?: string;
}

/**
 * Command menu item
 */
export interface CommandItem {
  id: string;
  label: string;
  shortcut?: string;
  icon?: LucideIcon;
  action: () => void;
  group?: string;
}

/**
 * Toast/Notification types
 */
export type ToastType = 'success' | 'error' | 'warning' | 'info';

export interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

/**
 * Modal/Dialog state
 */
export interface ModalState {
  isOpen: boolean;
  title?: string;
  content?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  onClose?: () => void;
}