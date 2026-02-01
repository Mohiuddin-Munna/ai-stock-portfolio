'use client';

// =============================================================================
// CONTAINER COMPONENT
// =============================================================================
// Description: Responsive container with max-width constraints
// =============================================================================

import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

// =============================================================================
// CONTAINER VARIANTS (CVA)
// =============================================================================

const containerVariants = cva(
  // Base styles
  'mx-auto w-full px-4 sm:px-6 lg:px-8',
  {
    variants: {
      size: {
        xs: 'max-w-screen-xs',      // 475px
        sm: 'max-w-screen-sm',      // 640px
        md: 'max-w-screen-md',      // 768px
        lg: 'max-w-screen-lg',      // 1024px
        xl: 'max-w-screen-xl',      // 1280px
        '2xl': 'max-w-screen-2xl',  // 1536px
        full: 'max-w-full',
        prose: 'max-w-prose',        // 65ch
      },
      
      padding: {
        none: 'px-0',
        sm: 'px-2 sm:px-4',
        md: 'px-4 sm:px-6 lg:px-8',
        lg: 'px-6 sm:px-8 lg:px-12',
        xl: 'px-8 sm:px-12 lg:px-16',
      },
      
      centered: {
        true: 'flex flex-col items-center justify-center',
      },
    },
    defaultVariants: {
      size: '2xl',
      padding: 'md',
      centered: false,
    },
  }
);

// =============================================================================
// TYPES
// =============================================================================

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  as?: React.ElementType;
}

// =============================================================================
// COMPONENT
// =============================================================================

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    { className, size, padding, centered, as: Component = 'div', ...props },
    ref
  ) => {
    return (
      <Component
        ref={ref}
        className={cn(containerVariants({ size, padding, centered }), className)}
        {...props}
      />
    );
  }
);

Container.displayName = 'Container';

// =============================================================================
// SECTION CONTAINER - For page sections
// =============================================================================

export interface SectionProps extends ContainerProps {
  spacing?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

const sectionSpacing = {
  sm: 'py-8 md:py-12',
  md: 'py-12 md:py-16',
  lg: 'py-16 md:py-24',
  xl: 'py-20 md:py-32',
  '2xl': 'py-24 md:py-40',
};

export const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, spacing = 'lg', children, ...props }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(sectionSpacing[spacing], className)}
        {...(props as React.HTMLAttributes<HTMLElement>)}
      >
        <Container {...props}>{children}</Container>
      </section>
    );
  }
);

Section.displayName = 'Section';

// =============================================================================
// EXPORTS
// =============================================================================

export { Container, containerVariants };
export default Container;