'use client';

// =============================================================================
// CARD COMPONENT
// =============================================================================
// Description: Flexible card component with header, content, and footer
// =============================================================================

import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

// =============================================================================
// CARD VARIANTS (CVA)
// =============================================================================

const cardVariants = cva(
  // Base styles
  [
    'rounded-2xl',
    'transition-all duration-300',
  ],
  {
    variants: {
      variant: {
        // Default - Subtle background
        default: [
          'bg-white dark:bg-neutral-900',
          'border border-neutral-200 dark:border-neutral-800',
        ],
        
        // Elevated - With shadow
        elevated: [
          'bg-white dark:bg-neutral-900',
          'shadow-lg shadow-neutral-200/50 dark:shadow-neutral-900/50',
          'hover:shadow-xl',
        ],
        
        // Outlined - Border only
        outlined: [
          'bg-transparent',
          'border-2 border-neutral-200 dark:border-neutral-700',
          'hover:border-neutral-300 dark:hover:border-neutral-600',
        ],
        
        // Filled - Solid background
        filled: [
          'bg-neutral-100 dark:bg-neutral-800',
        ],
        
        // Glass - Glassmorphism
        glass: [
          'bg-white/10 dark:bg-black/10',
          'backdrop-blur-xl',
          'border border-white/20 dark:border-white/10',
          'shadow-xl',
        ],
        
        // Gradient - Gradient border
        gradient: [
          'bg-white dark:bg-neutral-900',
          'p-[1px]',
          'bg-gradient-to-br from-brand-500 via-purple-500 to-pink-500',
        ],
        
        // Interactive - Hover effects
        interactive: [
          'bg-white dark:bg-neutral-900',
          'border border-neutral-200 dark:border-neutral-800',
          'hover:border-brand-500/50 dark:hover:border-brand-500/50',
          'hover:shadow-lg hover:shadow-brand-500/10',
          'cursor-pointer',
        ],
      },
      
      padding: {
        none: 'p-0',
        sm: 'p-3',
        md: 'p-4 md:p-5',
        lg: 'p-6 md:p-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
    },
  }
);

// =============================================================================
// TYPES
// =============================================================================

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  animated?: boolean;
  hoverScale?: number;
}

// =============================================================================
// CARD COMPONENT
// =============================================================================

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    { className, variant, padding, animated = false, hoverScale = 1.02, ...props },
    ref
  ) => {
    if (animated) {
      return (
        <motion.div
          ref={ref}
          className={cn(cardVariants({ variant, padding }), className)}
          whileHover={{ scale: hoverScale, y: -4 }}
          transition={{ duration: 0.2 }}
          {...(props as HTMLMotionProps<'div'>)}
        />
      );
    }

    return (
      <div
        ref={ref}
        className={cn(cardVariants({ variant, padding }), className)}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

// =============================================================================
// CARD HEADER
// =============================================================================

const CardHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col space-y-1.5', className)}
    {...props}
  />
));

CardHeader.displayName = 'CardHeader';

// =============================================================================
// CARD TITLE
// =============================================================================

const CardTitle = forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-lg font-semibold leading-tight tracking-tight',
      'text-neutral-900 dark:text-white',
      className
    )}
    {...props}
  />
));

CardTitle.displayName = 'CardTitle';

// =============================================================================
// CARD DESCRIPTION
// =============================================================================

const CardDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-neutral-500 dark:text-neutral-400', className)}
    {...props}
  />
));

CardDescription.displayName = 'CardDescription';

// =============================================================================
// CARD CONTENT
// =============================================================================

const CardContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('', className)} {...props} />
));

CardContent.displayName = 'CardContent';

// =============================================================================
// CARD FOOTER
// =============================================================================

const CardFooter = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center pt-4', className)}
    {...props}
  />
));

CardFooter.displayName = 'CardFooter';

// =============================================================================
// EXPORTS
// =============================================================================

export {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  cardVariants,
};

export default Card;