'use client';

// =============================================================================
// BADGE COMPONENT
// =============================================================================

import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

// =============================================================================
// BADGE VARIANTS (CVA)
// =============================================================================

const badgeVariants = cva(
  [
    'inline-flex items-center justify-center gap-1',
    'font-medium',
    'rounded-full',
    'transition-colors duration-200',
    'select-none',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-neutral-100 dark:bg-neutral-800',
          'text-neutral-700 dark:text-neutral-300',
        ],
        primary: [
          'bg-brand-100 dark:bg-brand-900/30',
          'text-brand-700 dark:text-brand-300',
        ],
        secondary: [
          'bg-neutral-200 dark:bg-neutral-700',
          'text-neutral-800 dark:text-neutral-200',
        ],
        success: [
          'bg-emerald-100 dark:bg-emerald-900/30',
          'text-emerald-700 dark:text-emerald-300',
        ],
        warning: [
          'bg-amber-100 dark:bg-amber-900/30',
          'text-amber-700 dark:text-amber-300',
        ],
        error: [
          'bg-red-100 dark:bg-red-900/30',
          'text-red-700 dark:text-red-300',
        ],
        info: [
          'bg-blue-100 dark:bg-blue-900/30',
          'text-blue-700 dark:text-blue-300',
        ],
        outline: [
          'bg-transparent',
          'border border-neutral-300 dark:border-neutral-600',
          'text-neutral-700 dark:text-neutral-300',
        ],
        gradient: [
          'bg-gradient-to-r from-brand-500 to-pink-500',
          'text-white',
        ],
        glass: [
          'bg-white/20 dark:bg-black/20',
          'backdrop-blur-md',
          'text-neutral-900 dark:text-white',
          'border border-white/30 dark:border-white/10',
        ],
        new: [
          'bg-gradient-to-r from-violet-500 to-purple-500',
          'text-white',
          'animate-pulse',
        ],
        featured: [
          'bg-gradient-to-r from-amber-400 to-yellow-500',
          'text-amber-900',
        ],
      },
      size: {
        xs: 'px-1.5 py-0.5 text-[10px]',
        sm: 'px-2 py-0.5 text-xs',
        md: 'px-2.5 py-1 text-xs',
        lg: 'px-3 py-1.5 text-sm',
      },
      rounded: {
        full: 'rounded-full',
        lg: 'rounded-lg',
        md: 'rounded-md',
        sm: 'rounded-sm',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      rounded: 'full',
    },
  }
);

// =============================================================================
// TYPES
// =============================================================================

export interface BadgeProps extends VariantProps<typeof badgeVariants> {
  className?: string;
  icon?: React.ReactNode;
  animated?: boolean;
  pulse?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
}

// =============================================================================
// COMPONENT
// =============================================================================

export function Badge({
  className,
  variant,
  size,
  rounded,
  icon,
  animated = false,
  pulse = false,
  children,
  onClick,
}: BadgeProps) {
  const content = (
    <>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </>
  );

  const combinedClassName = cn(
    badgeVariants({ variant, size, rounded }),
    pulse && 'animate-pulse',
    onClick && 'cursor-pointer hover:opacity-80',
    className
  );

  if (animated) {
    return (
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1.05 }}
        className={combinedClassName}
        onClick={onClick}
      >
        {content}
      </motion.span>
    );
  }

  return (
    <span className={combinedClassName} onClick={onClick}>
      {content}
    </span>
  );
}

export { badgeVariants };
export default Badge;