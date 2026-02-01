'use client';

// =============================================================================
// BUTTON COMPONENT
// =============================================================================
// Description: Versatile button with multiple variants, sizes, and states
// Features: CVA variants, Framer Motion, loading states, icon support
// =============================================================================

import React, { forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

// =============================================================================
// BUTTON VARIANTS (CVA)
// =============================================================================

const buttonVariants = cva(
  // Base styles
  [
    'inline-flex items-center justify-center gap-2',
    'font-medium text-sm',
    'rounded-xl',
    'transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'select-none',
  ],
  {
    variants: {
      variant: {
        // Primary - Brand color, high emphasis
        primary: [
          'bg-gradient-to-r from-brand-500 to-brand-600',
          'text-white',
          'shadow-lg shadow-brand-500/25',
          'hover:from-brand-600 hover:to-brand-700',
          'hover:shadow-xl hover:shadow-brand-500/30',
          'focus-visible:ring-brand-500',
          'active:scale-[0.98]',
        ],
        
        // Secondary - Subtle, medium emphasis
        secondary: [
          'bg-neutral-100 dark:bg-neutral-800',
          'text-neutral-900 dark:text-neutral-100',
          'hover:bg-neutral-200 dark:hover:bg-neutral-700',
          'focus-visible:ring-neutral-500',
          'active:scale-[0.98]',
        ],
        
        // Outline - Border only
        outline: [
          'border-2 border-neutral-200 dark:border-neutral-700',
          'bg-transparent',
          'text-neutral-900 dark:text-neutral-100',
          'hover:bg-neutral-100 dark:hover:bg-neutral-800',
          'hover:border-neutral-300 dark:hover:border-neutral-600',
          'focus-visible:ring-neutral-500',
          'active:scale-[0.98]',
        ],
        
        // Ghost - No background
        ghost: [
          'bg-transparent',
          'text-neutral-900 dark:text-neutral-100',
          'hover:bg-neutral-100 dark:hover:bg-neutral-800',
          'focus-visible:ring-neutral-500',
          'active:scale-[0.98]',
        ],
        
        // Destructive - For dangerous actions
        destructive: [
          'bg-red-500',
          'text-white',
          'shadow-lg shadow-red-500/25',
          'hover:bg-red-600',
          'hover:shadow-xl hover:shadow-red-500/30',
          'focus-visible:ring-red-500',
          'active:scale-[0.98]',
        ],
        
        // Link - Text link style
        link: [
          'bg-transparent',
          'text-brand-500',
          'underline-offset-4',
          'hover:underline',
          'hover:text-brand-600',
          'focus-visible:ring-brand-500',
        ],
        
        // Glass - Glassmorphism effect
        glass: [
          'bg-white/10 dark:bg-black/10',
          'backdrop-blur-md',
          'border border-white/20 dark:border-white/10',
          'text-neutral-900 dark:text-white',
          'shadow-lg',
          'hover:bg-white/20 dark:hover:bg-black/20',
          'focus-visible:ring-white/50',
          'active:scale-[0.98]',
        ],
      },
      
      size: {
        xs: 'h-7 px-2.5 text-xs rounded-lg',
        sm: 'h-9 px-3 text-sm',
        md: 'h-11 px-5 text-sm',
        lg: 'h-12 px-6 text-base',
        xl: 'h-14 px-8 text-lg',
        icon: 'h-10 w-10 p-0',
        'icon-sm': 'h-8 w-8 p-0',
        'icon-lg': 'h-12 w-12 p-0',
      },
      
      fullWidth: {
        true: 'w-full',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  }
);

// =============================================================================
// TYPES
// =============================================================================

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  animated?: boolean;
}

// =============================================================================
// COMPONENT
// =============================================================================

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      fullWidth,
      asChild = false,
      isLoading = false,
      loadingText,
      leftIcon,
      rightIcon,
      animated = true,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    const isDisabled = disabled || isLoading;

    // Content with icons
    const content = (
      <>
        {isLoading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : leftIcon ? (
          <span className="shrink-0">{leftIcon}</span>
        ) : null}
        
        {isLoading && loadingText ? loadingText : children}
        
        {!isLoading && rightIcon && (
          <span className="shrink-0">{rightIcon}</span>
        )}
      </>
    );

    // Without animation
    if (!animated) {
      return (
        <Comp
          ref={ref}
          className={cn(buttonVariants({ variant, size, fullWidth }), className)}
          disabled={isDisabled}
          {...props}
        >
          {content}
        </Comp>
      );
    }

    // With Framer Motion animation
    return (
      <motion.button
        ref={ref}
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        disabled={isDisabled}
        whileHover={{ scale: isDisabled ? 1 : 1.02 }}
        whileTap={{ scale: isDisabled ? 1 : 0.98 }}
        transition={{ duration: 0.15 }}
        {...(props as HTMLMotionProps<'button'>)}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

// =============================================================================
// EXPORTS
// =============================================================================

export { Button, buttonVariants };
export default Button;