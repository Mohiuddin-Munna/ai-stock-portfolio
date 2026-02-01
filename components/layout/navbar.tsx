'use client';

// =============================================================================
// NAVBAR COMPONENT
// =============================================================================

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, Grid3X3, Sparkles, Search, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Container } from '@/components/ui';

// =============================================================================
// TYPES
// =============================================================================

interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

// =============================================================================
// NAV ITEMS
// =============================================================================

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', icon: Home, href: '/' },
  { id: 'gallery', label: 'Gallery', icon: Grid3X3, href: '#gallery' },
  { id: 'featured', label: 'Featured', icon: Sparkles, href: '#featured' },
  { id: 'search', label: 'Search', icon: Search, href: '#search' },
];

// =============================================================================
// COMPONENT
// =============================================================================

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      {/* Desktop Header */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-40',
          'transition-all duration-300',
          isScrolled
            ? 'bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl shadow-lg'
            : 'bg-transparent'
        )}
      >
        <Container>
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div
                className={cn(
                  'w-10 h-10 rounded-xl',
                  'bg-gradient-to-br from-brand-500 to-pink-500',
                  'flex items-center justify-center',
                  'shadow-lg shadow-brand-500/30',
                  'group-hover:shadow-xl group-hover:shadow-brand-500/40',
                  'transition-shadow duration-300'
                )}
              >
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div className="hidden sm:block">
                <h1 className="font-display font-bold text-lg text-neutral-900 dark:text-white">
                  Culinary
                  <span className="bg-gradient-to-r from-brand-500 to-pink-500 bg-clip-text text-transparent">
                    {' '}Canvas
                  </span>
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {NAV_ITEMS.slice(0, 3).map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  className={cn(
                    'text-sm font-medium',
                    'text-neutral-600 dark:text-neutral-400',
                    'hover:text-neutral-900 dark:hover:text-white',
                    'transition-colors duration-200'
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Right Section */}
            <div className="flex items-center gap-3">
              <button
                className={cn(
                  'hidden md:flex items-center gap-2',
                  'px-4 py-2 rounded-xl',
                  'bg-neutral-100 dark:bg-neutral-800',
                  'text-neutral-500 dark:text-neutral-400',
                  'hover:bg-neutral-200 dark:hover:bg-neutral-700',
                  'transition-colors duration-200',
                  'text-sm'
                )}
              >
                <Search className="w-4 h-4" />
                <span>Search...</span>
                <kbd className="hidden lg:inline-flex px-1.5 py-0.5 text-[10px] font-mono bg-neutral-200 dark:bg-neutral-700 rounded">
                  ⌘K
                </kbd>
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className={cn(
                  'md:hidden p-2 rounded-xl',
                  'hover:bg-neutral-100 dark:hover:bg-neutral-800',
                  'transition-colors'
                )}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </Container>
      </motion.header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="absolute right-0 top-0 bottom-0 w-80 max-w-[80vw] bg-white dark:bg-neutral-900 shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-4 right-4 p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-8">
              <h2 className="text-xl font-bold font-display bg-gradient-to-r from-brand-500 to-pink-500 bg-clip-text text-transparent">
                Culinary Canvas
              </h2>
            </div>

            <nav className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    'flex items-center gap-3 px-4 py-3 rounded-xl',
                    'text-neutral-700 dark:text-neutral-300',
                    'hover:bg-neutral-100 dark:hover:bg-neutral-800',
                    'transition-colors'
                  )}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              ))}
            </nav>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

export default Navbar;