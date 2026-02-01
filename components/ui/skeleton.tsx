'use client';

// =============================================================================
// SKELETON COMPONENT
// =============================================================================
// Description: Loading placeholder with shimmer animation
// =============================================================================

import React from 'react';
import { cn } from '@/lib/utils';

// =============================================================================
// TYPES
// =============================================================================

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'circular' | 'rectangular' | 'text';
  animation?: 'pulse' | 'shimmer' | 'none';
  width?: string | number;
  height?: string | number;
}

// =============================================================================
// COMPONENT
// =============================================================================

export function Skeleton({
  className,
  variant = 'default',
  animation = 'shimmer',
  width,
  height,
  style,
  ...props
}: SkeletonProps) {
  const variantStyles = {
    default: 'rounded-lg',
    circular: 'rounded-full',
    rectangular: 'rounded-none',
    text: 'rounded h-4 w-full',
  };

  const animationStyles = {
    pulse: 'animate-pulse',
    shimmer: 'animate-shimmer',
    none: '',
  };

  return (
    <div
      className={cn(
        // Base styles
        'bg-neutral-200 dark:bg-neutral-800',
        'relative overflow-hidden',
        
        // Variant
        variantStyles[variant],
        
        // Animation
        animationStyles[animation],
        
        // Shimmer effect
        animation === 'shimmer' && [
          'before:absolute before:inset-0',
          'before:-translate-x-full',
          'before:animate-[shimmer_2s_infinite]',
          'before:bg-gradient-to-r',
          'before:from-transparent',
          'before:via-white/20',
          'before:to-transparent',
        ],
        
        className
      )}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        height: typeof height === 'number' ? `${height}px` : height,
        ...style,
      }}
      {...props}
    />
  );
}

// =============================================================================
// PRESET SKELETONS
// =============================================================================

export function SkeletonText({
  lines = 3,
  className,
}: {
  lines?: number;
  className?: string;
}) {
  return (
    <div className={cn('space-y-2', className)}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          className={cn(
            'h-4',
            // Last line is shorter
            i === lines - 1 && 'w-3/4'
          )}
        />
      ))}
    </div>
  );
}

export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn('space-y-3', className)}>
      <Skeleton className="aspect-[4/3] w-full" />
      <SkeletonText lines={2} />
    </div>
  );
}

export function SkeletonAvatar({
  size = 40,
  className,
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Skeleton
      variant="circular"
      width={size}
      height={size}
      className={className}
    />
  );
}

export function SkeletonImage({
  aspectRatio = '4/3',
  className,
}: {
  aspectRatio?: string;
  className?: string;
}) {
  return (
    <Skeleton
      className={cn('w-full', className)}
      style={{ aspectRatio }}
    />
  );
}

// =============================================================================
// EXPORTS
// =============================================================================

export default Skeleton;