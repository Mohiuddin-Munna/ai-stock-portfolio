'use client';

// =============================================================================
// TOOLTIP COMPONENT
// =============================================================================
// Description: Accessible tooltip with animations
// =============================================================================

import React, { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

// =============================================================================
// TYPES
// =============================================================================

interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'start' | 'center' | 'end';
  delayShow?: number;
  delayHide?: number;
  className?: string;
  contentClassName?: string;
  disabled?: boolean;
}

// =============================================================================
// POSITION STYLES
// =============================================================================

const positionStyles = {
  top: {
    container: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    arrow: 'top-full left-1/2 -translate-x-1/2 border-t-neutral-900 dark:border-t-neutral-100 border-x-transparent border-b-transparent',
    initial: { opacity: 0, y: 4, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 4, scale: 0.95 },
  },
  bottom: {
    container: 'top-full left-1/2 -translate-x-1/2 mt-2',
    arrow: 'bottom-full left-1/2 -translate-x-1/2 border-b-neutral-900 dark:border-b-neutral-100 border-x-transparent border-t-transparent',
    initial: { opacity: 0, y: -4, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -4, scale: 0.95 },
  },
  left: {
    container: 'right-full top-1/2 -translate-y-1/2 mr-2',
    arrow: 'left-full top-1/2 -translate-y-1/2 border-l-neutral-900 dark:border-l-neutral-100 border-y-transparent border-r-transparent',
    initial: { opacity: 0, x: 4, scale: 0.95 },
    animate: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: 4, scale: 0.95 },
  },
  right: {
    container: 'left-full top-1/2 -translate-y-1/2 ml-2',
    arrow: 'right-full top-1/2 -translate-y-1/2 border-r-neutral-900 dark:border-r-neutral-100 border-y-transparent border-l-transparent',
    initial: { opacity: 0, x: -4, scale: 0.95 },
    animate: { opacity: 1, x: 0, scale: 1 },
    exit: { opacity: 0, x: -4, scale: 0.95 },
  },
};

// =============================================================================
// COMPONENT
// =============================================================================

export function Tooltip({
  content,
  children,
  side = 'top',
  delayShow = 200,
  delayHide = 0,
  className,
  contentClassName,
  disabled = false,
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const showTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const hideTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const clearTimeouts = useCallback(() => {
    if (showTimeoutRef.current) clearTimeout(showTimeoutRef.current);
    if (hideTimeoutRef.current) clearTimeout(hideTimeoutRef.current);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (disabled) return;
    clearTimeouts();
    showTimeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delayShow);
  }, [delayShow, disabled, clearTimeouts]);

  const handleMouseLeave = useCallback(() => {
    clearTimeouts();
    hideTimeoutRef.current = setTimeout(() => {
      setIsVisible(false);
    }, delayHide);
  }, [delayHide, clearTimeouts]);

  const handleFocus = useCallback(() => {
    if (disabled) return;
    setIsVisible(true);
  }, [disabled]);

  const handleBlur = useCallback(() => {
    setIsVisible(false);
  }, []);

  const position = positionStyles[side];

  return (
    <div
      className={cn('relative inline-flex', className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      {children}
      
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={position.initial}
            animate={position.animate}
            exit={position.exit}
            transition={{ duration: 0.15 }}
            className={cn(
              'absolute z-50 pointer-events-none',
              position.container
            )}
          >
            <div
              className={cn(
                'px-3 py-1.5 rounded-lg',
                'bg-neutral-900 dark:bg-neutral-100',
                'text-white dark:text-neutral-900',
                'text-xs font-medium',
                'whitespace-nowrap',
                'shadow-lg',
                contentClassName
              )}
              role="tooltip"
            >
              {content}
              
              {/* Arrow */}
              <div
                className={cn(
                  'absolute w-0 h-0',
                  'border-4',
                  position.arrow
                )}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// =============================================================================
// EXPORTS
// =============================================================================

export default Tooltip;