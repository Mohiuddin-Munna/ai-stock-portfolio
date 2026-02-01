'use client';

// =============================================================================
// MASONRY GRID COMPONENT
// =============================================================================

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ImageCard } from './ImageCard';
import type { ArtworkPreview } from '@/types';

// =============================================================================
// TYPES
// =============================================================================

interface MasonryGridProps {
  artworks: ArtworkPreview[];
  gap?: number;
  isLoading?: boolean;
  loadingCount?: number;
  onImageClick?: (artwork: ArtworkPreview) => void;
  onLikeClick?: (artwork: ArtworkPreview) => void;
  className?: string;
  showCategory?: boolean;
  showStyle?: boolean;
}

// =============================================================================
// ANIMATION VARIANTS
// =============================================================================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

// =============================================================================
// COMPONENT
// =============================================================================

export function MasonryGrid({
  artworks,
  gap = 4,
  isLoading = false,
  loadingCount = 12,
  onImageClick,
  onLikeClick,
  className,
  showCategory = true,
  showStyle = false,
}: MasonryGridProps) {
  const gapPx = gap * 4;

  // Loading State
  if (isLoading) {
    return (
      <div
        className={cn(
          'grid',
          'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
          className
        )}
        style={{ gap: `${gapPx}px` }}
      >
        {Array.from({ length: loadingCount }).map((_, index) => (
          <div key={index} className="animate-pulse">
            <div className="aspect-[4/3] rounded-2xl bg-neutral-200 dark:bg-neutral-800 overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Empty State
  if (artworks.length === 0) {
    return (
      <div className={cn('text-center py-20', className)}>
        <div className="text-6xl mb-4">🖼️</div>
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
          No artworks found
        </h3>
        <p className="text-neutral-500 dark:text-neutral-400">
          Try adjusting your filters or search query
        </p>
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        'grid',
        'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5',
        className
      )}
      style={{ gap: `${gapPx}px` }}
    >
      <AnimatePresence mode="popLayout">
        {artworks.map((artwork, index) => (
          <ImageCard
            key={artwork.id}
            artwork={artwork}
            index={index}
            priority={index < 4}
            onImageClick={onImageClick}
            onLikeClick={onLikeClick}
            showCategory={showCategory}
            showStyle={showStyle}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

export default MasonryGrid;