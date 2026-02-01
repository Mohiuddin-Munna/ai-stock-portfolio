// =============================================================================
// FONT CONFIGURATION
// =============================================================================
// Description: Next.js font configuration with Syne and Inter
// =============================================================================

import { Syne, Inter } from 'next/font/google';

/**
 * Syne - Display/Heading Font
 * Used for: Headlines, titles, CTAs, navigation
 * Characteristics: Bold, artistic, modern geometric
 */
export const fontSyne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
});

/**
 * Inter - Body Font (Alternative to Geist)
 * Used for: Paragraphs, descriptions, UI text
 * Characteristics: Clean, highly readable, modern
 */
export const fontInter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist',
  weight: ['400', '500', '600', '700'],
});

/**
 * Combined font variables for root layout
 */
export const fontVariables = `${fontSyne.variable} ${fontInter.variable}`;

/**
 * Font class names for direct usage
 */
export const fonts = {
  display: fontSyne.className,
  body: fontInter.className,
  variable: fontVariables,
} as const;

/**
 * Font family CSS values
 */
export const fontFamily = {
  display: 'var(--font-syne), system-ui, sans-serif',
  body: 'var(--font-geist), system-ui, sans-serif',
} as const;