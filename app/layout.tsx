import type { Metadata, Viewport } from 'next';
import { Syne, Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { SecurityProvider } from '@/components/security';
import './globals.css';

// =============================================================================
// FONTS
// =============================================================================

const fontSyne = Syne({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
});

// Using Inter as body font (similar to Geist)
const fontInter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-geist',
  weight: ['400', '500', '600', '700'],
});

// =============================================================================
// METADATA
// =============================================================================

export const metadata: Metadata = {
  title: {
    default: 'Culinary Canvas - AI Stock Photos Portfolio',
    template: '%s | Culinary Canvas',
  },
  description:
    'Explore our collection of stunning AI-generated culinary artworks. Premium food photography for creative professionals.',
  keywords: [
    'AI food photography',
    'culinary art',
    'food stock photos',
    'AI generated images',
    'food portfolio',
  ],
  authors: [{ name: 'Culinary Canvas' }],
  creator: 'Culinary Canvas',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Culinary Canvas',
    title: 'Culinary Canvas - AI Stock Photos Portfolio',
    description: 'Premium AI-generated culinary artworks',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Culinary Canvas',
    description: 'Premium AI-generated culinary artworks',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// =============================================================================
// ROOT LAYOUT
// =============================================================================

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(fontSyne.variable, fontInter.variable)}
    >
      <body
        className={cn(
          'min-h-screen bg-background font-body antialiased',
          'selection:bg-brand-500/20 selection:text-brand-900',
          'dark:selection:text-brand-100'
        )}
      >
        <SecurityProvider>
          {/* Main Content */}
          <main className="relative flex min-h-screen flex-col">
            {children}
          </main>
        </SecurityProvider>
      </body>
    </html>
  );
}