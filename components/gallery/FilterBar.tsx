'use client';

// =============================================================================
// FILTER BAR COMPONENT
// =============================================================================

import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  Grid3X3,
  LayoutGrid,
  List,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button, Badge } from '@/components/ui';
import type { Category, ImageStyle, GalleryViewMode } from '@/types';

// =============================================================================
// TYPES
// =============================================================================

interface FilterBarProps {
  categories: Category[];
  selectedCategory: string | null;
  selectedSubCategory: string | null;
  selectedStyle: ImageStyle | null;
  viewMode: GalleryViewMode;
  totalResults: number;
  onCategoryChange: (slug: string | null) => void;
  onSubCategoryChange: (slug: string | null) => void;
  onStyleChange: (style: ImageStyle | null) => void;
  onViewModeChange: (mode: GalleryViewMode) => void;
  onClearFilters: () => void;
  className?: string;
}

// =============================================================================
// STYLE OPTIONS
// =============================================================================

const styleOptions: { value: ImageStyle; label: string; color: string }[] = [
  { value: 'bright', label: 'Bright', color: 'bg-yellow-500' },
  { value: 'moody', label: 'Moody', color: 'bg-slate-700' },
  { value: 'minimal', label: 'Minimal', color: 'bg-gray-400' },
  { value: 'rustic', label: 'Rustic', color: 'bg-amber-600' },
  { value: 'modern', label: 'Modern', color: 'bg-blue-500' },
  { value: 'vintage', label: 'Vintage', color: 'bg-amber-700' },
  { value: 'dramatic', label: 'Dramatic', color: 'bg-red-600' },
  { value: 'natural', label: 'Natural', color: 'bg-green-500' },
  { value: 'studio', label: 'Studio', color: 'bg-neutral-600' },
  { value: 'lifestyle', label: 'Lifestyle', color: 'bg-pink-500' },
];

const viewModeOptions: { value: GalleryViewMode; icon: typeof Grid3X3; label: string }[] = [
  { value: 'masonry', icon: LayoutGrid, label: 'Masonry' },
  { value: 'grid', icon: Grid3X3, label: 'Grid' },
  { value: 'list', icon: List, label: 'List' },
];

// =============================================================================
// COMPONENT
// =============================================================================

export function FilterBar({
  categories,
  selectedCategory,
  selectedSubCategory,
  selectedStyle,
  viewMode,
  totalResults,
  onCategoryChange,
  onSubCategoryChange,
  onStyleChange,
  onViewModeChange,
  onClearFilters,
  className,
}: FilterBarProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    setCanScrollLeft(container.scrollLeft > 0);
    setCanScrollRight(
      container.scrollLeft < container.scrollWidth - container.clientWidth - 10
    );
  }, []);

  const scrollTo = useCallback((direction: 'left' | 'right') => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const scrollAmount = 200;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  }, []);

  const activeFiltersCount = [
    selectedCategory,
    selectedSubCategory,
    selectedStyle,
  ].filter(Boolean).length;

  const selectedCategoryData = categories.find(
    (cat) => cat.slug === selectedCategory
  );

  return (
    <div className={cn('space-y-4', className)}>
      {/* Main Filter Bar */}
      <div className="flex items-center gap-4">
        <Button
          variant={showFilters ? 'primary' : 'outline'}
          size="sm"
          leftIcon={<SlidersHorizontal className="w-4 h-4" />}
          onClick={() => setShowFilters(!showFilters)}
          className="shrink-0"
        >
          Filters
          {activeFiltersCount > 0 && (
            <Badge variant="primary" size="xs" className="ml-2">
              {activeFiltersCount}
            </Badge>
          )}
        </Button>

        {/* Category Scroll Container */}
        <div className="relative flex-1 overflow-hidden">
          <AnimatePresence>
            {canScrollLeft && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => scrollTo('left')}
                className={cn(
                  'absolute left-0 top-1/2 -translate-y-1/2 z-10',
                  'w-8 h-8 rounded-full',
                  'bg-white dark:bg-neutral-800',
                  'shadow-lg border border-neutral-200 dark:border-neutral-700',
                  'flex items-center justify-center',
                  'hover:bg-neutral-50 dark:hover:bg-neutral-700'
                )}
              >
                <ChevronLeft className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>

          <div
            ref={scrollContainerRef}
            onScroll={checkScrollPosition}
            className="flex items-center gap-2 overflow-x-auto scrollbar-hide px-2 py-1 -mx-2"
          >
            <button
              onClick={() => {
                onCategoryChange(null);
                onSubCategoryChange(null);
              }}
              className={cn(
                'shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all',
                !selectedCategory
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300'
              )}
            >
              All Categories
            </button>

            {categories.map((category) => {
              const Icon = category.icon.icon;
              const isSelected = selectedCategory === category.slug;

              return (
                <button
                  key={category.id}
                  onClick={() => {
                    onCategoryChange(isSelected ? null : category.slug);
                    onSubCategoryChange(null);
                  }}
                  className={cn(
                    'shrink-0 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all',
                    isSelected
                      ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300'
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                  <span className="text-xs opacity-60">{category.stats.totalImages}</span>
                </button>
              );
            })}
          </div>

          <AnimatePresence>
            {canScrollRight && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => scrollTo('right')}
                className={cn(
                  'absolute right-0 top-1/2 -translate-y-1/2 z-10',
                  'w-8 h-8 rounded-full',
                  'bg-white dark:bg-neutral-800',
                  'shadow-lg border border-neutral-200 dark:border-neutral-700',
                  'flex items-center justify-center',
                  'hover:bg-neutral-50 dark:hover:bg-neutral-700'
                )}
              >
                <ChevronRight className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* View Mode Toggle */}
        <div className="hidden md:flex items-center gap-1 shrink-0">
          {viewModeOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onViewModeChange(option.value)}
              className={cn(
                'p-2 rounded-lg transition-colors',
                viewMode === option.value
                  ? 'bg-neutral-900 text-white dark:bg-white dark:text-neutral-900'
                  : 'text-neutral-500 hover:bg-neutral-100 dark:hover:bg-neutral-800'
              )}
              title={option.label}
            >
              <option.icon className="w-4 h-4" />
            </button>
          ))}
        </div>

        <div className="hidden sm:block shrink-0 text-sm text-neutral-500">
          {totalResults.toLocaleString()} images
        </div>
      </div>

      {/* Expanded Filters Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className={cn(
              'p-4 rounded-2xl',
              'bg-neutral-50 dark:bg-neutral-900',
              'border border-neutral-200 dark:border-neutral-800'
            )}>
              {selectedCategoryData && (
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-neutral-500 mb-3">
                    {selectedCategoryData.name} Sub-categories
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCategoryData.subCategories.map((sub) => (
                      <button
                        key={sub.id}
                        onClick={() =>
                          onSubCategoryChange(
                            selectedSubCategory === sub.slug ? null : sub.slug
                          )
                        }
                        className={cn(
                          'px-3 py-1.5 rounded-full text-sm transition-all',
                          selectedSubCategory === sub.slug
                            ? 'bg-brand-500 text-white'
                            : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100'
                        )}
                      >
                        {sub.name}
                        <span className="ml-1 opacity-50">({sub.imageCount})</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h4 className="text-sm font-medium text-neutral-500 mb-3">Style</h4>
                <div className="flex flex-wrap gap-2">
                  {styleOptions.map((style) => (
                    <button
                      key={style.value}
                      onClick={() =>
                        onStyleChange(selectedStyle === style.value ? null : style.value)
                      }
                      className={cn(
                        'flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition-all',
                        selectedStyle === style.value
                          ? 'bg-brand-500 text-white'
                          : 'bg-white dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100'
                      )}
                    >
                      <span className={cn('w-3 h-3 rounded-full', style.color)} />
                      {style.label}
                    </button>
                  ))}
                </div>
              </div>

              {activeFiltersCount > 0 && (
                <div className="flex items-center justify-between pt-4 border-t border-neutral-200 dark:border-neutral-700">
                  <span className="text-sm text-neutral-500">
                    {activeFiltersCount} filter{activeFiltersCount > 1 ? 's' : ''} active
                  </span>
                  <Button
                    variant="ghost"
                    size="sm"
                    leftIcon={<X className="w-4 h-4" />}
                    onClick={onClearFilters}
                  >
                    Clear all
                  </Button>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Filter Tags */}
      <AnimatePresence>
        {activeFiltersCount > 0 && !showFilters && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-wrap items-center gap-2"
          >
            <span className="text-sm text-neutral-500">Active filters:</span>

            {selectedCategory && (
              <button
                onClick={() => onCategoryChange(null)}
                className="flex items-center gap-1 px-2 py-1 rounded-full bg-neutral-200 dark:bg-neutral-700 text-sm hover:bg-neutral-300 dark:hover:bg-neutral-600"
              >
                {selectedCategoryData?.name}
                <X className="w-3 h-3" />
              </button>
            )}

            {selectedSubCategory && (
              <button
                onClick={() => onSubCategoryChange(null)}
                className="flex items-center gap-1 px-2 py-1 rounded-full bg-neutral-200 dark:bg-neutral-700 text-sm hover:bg-neutral-300 dark:hover:bg-neutral-600"
              >
                {selectedSubCategory.replace(/-/g, ' ')}
                <X className="w-3 h-3" />
              </button>
            )}

            {selectedStyle && (
              <button
                onClick={() => onStyleChange(null)}
                className="flex items-center gap-1 px-2 py-1 rounded-full bg-neutral-200 dark:bg-neutral-700 text-sm hover:bg-neutral-300 dark:hover:bg-neutral-600"
              >
                {selectedStyle}
                <X className="w-3 h-3" />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default FilterBar;