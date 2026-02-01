'use client';

// =============================================================================
// PROTECTED IMAGE
// =============================================================================

import React, { useState, useCallback } from 'react';
import Image, { type ImageProps } from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useSecurity } from './SecurityProvider';

// =============================================================================
// TYPES
// =============================================================================

interface ProtectedImageProps extends Omit<ImageProps, 'onContextMenu' | 'draggable'> {
  watermarkText?: string;
  showWatermark?: boolean;
  watermarkOpacity?: number;
  overlayClassName?: string;
}

// =============================================================================
// COMPONENT
// =============================================================================

export function ProtectedImage({
  src,
  alt,
  className,
  watermarkText = '© Culinary Canvas',
  showWatermark = true,
  watermarkOpacity = 0.15,
  overlayClassName,
  ...props
}: ProtectedImageProps) {
  const { isSecurityEnabled } = useSecurity();
  const [isLoaded, setIsLoaded] = useState(false);

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

  return (
    <div
      className={cn('protected-image relative overflow-hidden select-none', className)}
      data-protected="true"
      onContextMenu={handleContextMenu}
    >
      <Image
        src={src}
        alt={alt}
        className={cn(
          'pointer-events-none select-none transition-all duration-300',
          !isLoaded && 'opacity-0'
        )}
        draggable={false}
        onLoad={() => setIsLoaded(true)}
        {...props}
      />

      <div
        className={cn('absolute inset-0 z-10 bg-transparent', overlayClassName)}
        onContextMenu={handleContextMenu}
        onDragStart={handleDragStart}
      />

      <AnimatePresence>
        {showWatermark && isLoaded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="absolute inset-0 z-20 pointer-events-none select-none overflow-hidden"
          >
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ transform: 'rotate(-30deg) scale(1.5)' }}
            >
              <div className="flex flex-wrap gap-16 justify-center items-center">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span
                    key={i}
                    className="text-white font-semibold text-sm whitespace-nowrap"
                    style={{ opacity: watermarkOpacity, textShadow: '0 0 10px rgba(0,0,0,0.3)' }}
                  >
                    {watermarkText}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ProtectedImage;