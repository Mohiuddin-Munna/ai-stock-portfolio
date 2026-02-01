'use client';

// =============================================================================
// LIGHTBOX COMPONENT
// =============================================================================

import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Info,
  Heart,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui';
import { useSecurity } from '@/components/security';
import type { ArtworkPreview } from '@/types';

// =============================================================================
// TYPES
// =============================================================================

interface LightboxProps {
  isOpen: boolean;
  artworks: ArtworkPreview[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

// =============================================================================
// COMPONENT
// =============================================================================

export function Lightbox({
  isOpen,
  artworks,
  currentIndex,
  onClose,
  onNavigate,
}: LightboxProps) {
  const { isSecurityEnabled } = useSecurity();
  const [showInfo, setShowInfo] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [direction, setDirection] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const currentArtwork = artworks[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < artworks.length - 1;

  const navigatePrev = useCallback(() => {
    if (hasPrev) {
      setDirection(-1);
      onNavigate(currentIndex - 1);
      setZoom(1);
    }
  }, [hasPrev, currentIndex, onNavigate]);

  const navigateNext = useCallback(() => {
    if (hasNext) {
      setDirection(1);
      onNavigate(currentIndex + 1);
      setZoom(1);
    }
  }, [hasNext, currentIndex, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          navigatePrev();
          break;
        case 'ArrowRight':
          navigateNext();
          break;
        case 'i':
          setShowInfo((prev) => !prev);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, navigatePrev, navigateNext]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleContextMenu = useCallback(
    (e: React.MouseEvent) => {
      if (isSecurityEnabled) {
        e.preventDefault();
      }
    },
    [isSecurityEnabled]
  );

  if (!isOpen || !currentArtwork) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-3 rounded-full bg-white/10 text-white hover:bg-white/20"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Top Bar */}
      <div className="absolute top-4 left-4 right-20 z-50 flex items-center justify-between">
        <div className="text-white/70 text-sm">
          {currentIndex + 1} / {artworks.length}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowInfo(!showInfo);
            }}
            className={cn(
              'p-2 rounded-lg bg-white/10 text-white hover:bg-white/20',
              showInfo && 'bg-white/20'
            )}
          >
            <Info className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsLiked(!isLiked);
            }}
            className={cn(
              'p-2 rounded-lg text-white',
              isLiked ? 'bg-red-500/80 hover:bg-red-500' : 'bg-white/10 hover:bg-white/20'
            )}
          >
            <Heart className={cn('w-5 h-5', isLiked && 'fill-white')} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setZoom(zoom === 1 ? 1.5 : 1);
            }}
            className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20"
          >
            {zoom === 1 ? <ZoomIn className="w-5 h-5" /> : <ZoomOut className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Navigation Buttons */}
      {hasPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigatePrev();
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/10 text-white hover:bg-white/20"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {hasNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigateNext();
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-40 p-3 rounded-full bg-white/10 text-white hover:bg-white/20"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Main Image */}
      <div
        className="relative max-w-[90vw] max-h-[85vh]"
        onClick={(e) => e.stopPropagation()}
        onContextMenu={handleContextMenu}
        data-protected="true"
      >
        <Image
          src={currentArtwork.previewSrc}
          alt={currentArtwork.title}
          width={1200}
          height={800}
          className="max-w-[90vw] max-h-[85vh] w-auto h-auto object-contain rounded-lg select-none pointer-events-none"
          style={{ transform: `scale(${zoom})` }}
          priority
          draggable={false}
        />

        <div className="absolute inset-0 z-10" onContextMenu={handleContextMenu} />

        <div className="absolute bottom-4 right-4 z-20 pointer-events-none">
          <span className="text-white/30 text-sm font-medium">© Culinary Canvas</span>
        </div>
      </div>

      {/* Info Panel */}
      <AnimatePresence>
        {showInfo && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            onClick={(e) => e.stopPropagation()}
            className="absolute right-0 top-0 bottom-0 w-80 max-w-[90vw] bg-black/80 backdrop-blur-xl border-l border-white/10 p-6 overflow-y-auto"
          >
            <h3 className="text-white font-semibold text-lg mb-2">{currentArtwork.title}</h3>

            <div className="flex flex-wrap gap-2 mb-4">
              {currentArtwork.isNew && <Badge variant="new" size="sm">New</Badge>}
              {currentArtwork.isFeatured && <Badge variant="featured" size="sm">Featured</Badge>}
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <span className="text-white/50">Category</span>
                <p className="text-white capitalize">{currentArtwork.categorySlug.replace(/-/g, ' ')}</p>
              </div>
              <div>
                <span className="text-white/50">Sub-category</span>
                <p className="text-white capitalize">{currentArtwork.subCategorySlug.replace(/-/g, ' ')}</p>
              </div>
              <div>
                <span className="text-white/50">Style</span>
                <p className="text-white capitalize">{currentArtwork.style}</p>
              </div>
              <div>
                <span className="text-white/50">Aspect Ratio</span>
                <p className="text-white">{currentArtwork.aspectRatio}</p>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <p className="text-white/50 text-xs">
                This image is protected by copyright. For licensing inquiries, please contact us.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Lightbox;