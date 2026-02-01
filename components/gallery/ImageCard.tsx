'use client';

// =============================================================================
// IMAGE CARD COMPONENT
// =============================================================================

import React, { useState, useCallback, memo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Eye, Heart, Maximize2, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui';
import { useSecurity } from '@/components/security';
import type { ArtworkPreview, ImageStyle } from '@/types';

// =============================================================================
// TYPES
// =============================================================================

interface ImageCardProps {
  artwork: ArtworkPreview;
  index?: number;
  priority?: boolean;
  onImageClick?: (artwork: ArtworkPreview) => void;
  onLikeClick?: (artwork: ArtworkPreview) => void;
  className?: string;
  showCategory?: boolean;
  showStyle?: boolean;
}

// =============================================================================
// STYLE COLORS MAP
// =============================================================================

const styleColors: Record<ImageStyle, string> = {
  bright: 'from-yellow-500 to-orange-500',
  moody: 'from-slate-600 to-slate-800',
  minimal: 'from-gray-400 to-gray-500',
  rustic: 'from-amber-600 to-yellow-700',
  modern: 'from-blue-500 to-cyan-500',
  vintage: 'from-amber-700 to-amber-800',
  dramatic: 'from-red-600 to-purple-700',
  natural: 'from-green-500 to-emerald-600',
  studio: 'from-neutral-600 to-neutral-800',
  lifestyle: 'from-pink-500 to-rose-500',
};

// =============================================================================
// ANIMATION VARIANTS
// =============================================================================

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: index * 0.05,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
  hover: {
    y: -8,
    transition: { duration: 0.3 },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
};

const buttonVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: (index: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: index * 0.05,
      type: 'spring',
      stiffness: 300,
      damping: 20,
    },
  }),
};

// =============================================================================
// COMPONENT
// =============================================================================

function ImageCardComponent({
  artwork,
  index = 0,
  priority = false,
  onImageClick,
  onLikeClick,
  className,
  showCategory = true,
  showStyle = false,
}: ImageCardProps) {
  const { isSecurityEnabled } = useSecurity();
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleContextMenu = useCallback(
    (e: React.MouseEvent) => {
      if (isSecurityEnabled) {
        e.preventDefault();
      }
    },
    [isSecurityEnabled]
  );

  const handleDragStart = useCallback(
    (e: React.DragEvent) => {
      if (isSecurityEnabled) {
        e.preventDefault();
      }
    },
    [isSecurityEnabled]
  );

  const handleImageClick = useCallback(() => {
    onImageClick?.(artwork);
  }, [artwork, onImageClick]);

  const handleLikeClick = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setIsLiked((prev) => !prev);
      onLikeClick?.(artwork);
    },
    [artwork, onLikeClick]
  );

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  return (
    <motion.article
      className={cn(
        'group relative',
        'rounded-2xl overflow-hidden',
        'bg-neutral-100 dark:bg-neutral-900',
        'cursor-pointer',
        className
      )}
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      custom={index}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onContextMenu={handleContextMenu}
      onClick={handleImageClick}
      data-protected="true"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-neutral-200 dark:bg-neutral-800 animate-pulse">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
          </div>
        )}

        <Image
          src={artwork.thumbnailSrc || artwork.previewSrc}
          alt={artwork.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
          className={cn(
            'object-cover',
            'transition-all duration-500',
            'select-none pointer-events-none',
            isHovered && 'scale-110',
            !imageLoaded && 'opacity-0'
          )}
          onLoad={handleImageLoad}
          onContextMenu={handleContextMenu}
          onDragStart={handleDragStart}
          draggable={false}
        />

        <div
          className="absolute inset-0 z-10"
          onContextMenu={handleContextMenu}
          aria-hidden="true"
        />

        <motion.div
          className="absolute inset-0 z-20 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: isHovered ? 0.9 : 0.3 }}
          transition={{ duration: 0.3 }}
        />

        <motion.div
          className="absolute inset-0 z-30 flex flex-col justify-between p-4"
          variants={overlayVariants}
          initial="hidden"
          animate={isHovered ? 'visible' : 'hidden'}
        >
          <div className="flex items-start justify-between">
            <div className="flex flex-wrap gap-2">
              {artwork.isNew && (
                <Badge variant="new" size="sm" animated>
                  <Sparkles className="w-3 h-3 mr-1" />
                  New
                </Badge>
              )}
              {artwork.isFeatured && (
                <Badge variant="featured" size="sm">
                  Featured
                </Badge>
              )}
            </div>

            <motion.button
              variants={buttonVariants}
              custom={0}
              onClick={handleLikeClick}
              className={cn(
                'p-2 rounded-full',
                'bg-white/20 backdrop-blur-sm',
                'hover:bg-white/30',
                'transition-colors duration-200',
                isLiked && 'bg-red-500/80 hover:bg-red-500'
              )}
              whileTap={{ scale: 0.9 }}
            >
              <Heart
                className={cn(
                  'w-4 h-4',
                  isLiked ? 'fill-white text-white' : 'text-white'
                )}
              />
            </motion.button>
          </div>

          <div>
            {showCategory && (
              <motion.div variants={buttonVariants} custom={1} className="mb-2">
                <span className="text-xs text-white/70 uppercase tracking-wider">
                  {artwork.categorySlug.replace('-', ' ')}
                </span>
              </motion.div>
            )}

            <motion.h3
              variants={buttonVariants}
              custom={2}
              className="text-white font-semibold text-lg leading-tight mb-3"
            >
              {artwork.title}
            </motion.h3>

            <motion.div
              variants={buttonVariants}
              custom={3}
              className="flex items-center gap-2"
            >
              <button
                className={cn(
                  'flex items-center gap-2 px-4 py-2',
                  'bg-white/20 backdrop-blur-sm rounded-lg',
                  'text-white text-sm font-medium',
                  'hover:bg-white/30 transition-colors'
                )}
              >
                <Eye className="w-4 h-4" />
                Quick View
              </button>
              <button
                className={cn(
                  'p-2 rounded-lg',
                  'bg-white/20 backdrop-blur-sm',
                  'text-white hover:bg-white/30 transition-colors'
                )}
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </motion.div>

            {showStyle && artwork.style && (
              <motion.div variants={buttonVariants} custom={4} className="mt-3">
                <span
                  className={cn(
                    'inline-block px-2 py-1 rounded-full text-xs text-white',
                    'bg-gradient-to-r',
                    styleColors[artwork.style]
                  )}
                >
                  {artwork.style}
                </span>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-2 right-2 z-20 pointer-events-none opacity-30">
        <span className="text-[8px] text-white/50 font-medium tracking-wider">
          © CULINARY CANVAS
        </span>
      </div>
    </motion.article>
  );
}

export const ImageCard = memo(ImageCardComponent);
export default ImageCard;