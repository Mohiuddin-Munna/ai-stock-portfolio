'use client';

// =============================================================================
// HOME PAGE
// =============================================================================

import React, { useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Container, Button, Badge } from '@/components/ui';
import { Navbar } from '@/components/layout';
import { MasonryGrid, FilterBar, Lightbox } from '@/components/gallery';
import { getAllCategories, getTotalImageCount } from '@/lib/data';
import { generateMockArtworks } from '@/lib/mockData';
import type { ArtworkPreview, ImageStyle, GalleryViewMode } from '@/types';

// =============================================================================
// COMPONENT
// =============================================================================

export default function HomePage() {
  const categories = useMemo(() => getAllCategories(), []);
  const allArtworks = useMemo(() => generateMockArtworks(24), []);
  const totalImages = getTotalImageCount();

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<ImageStyle | null>(null);
  const [viewMode, setViewMode] = useState<GalleryViewMode>('masonry');

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredArtworks = useMemo(() => {
    let result = allArtworks;

    if (selectedCategory) {
      result = result.filter((item: ArtworkPreview) => item.categorySlug === selectedCategory);
    }
    if (selectedSubCategory) {
      result = result.filter((item: ArtworkPreview) => item.subCategorySlug === selectedSubCategory);
    }
    if (selectedStyle) {
      result = result.filter((item: ArtworkPreview) => item.style === selectedStyle);
    }

    return result;
  }, [allArtworks, selectedCategory, selectedSubCategory, selectedStyle]);

  const handleImageClick = useCallback(
    (artwork: ArtworkPreview) => {
      const index = filteredArtworks.findIndex((item: ArtworkPreview) => item.id === artwork.id);
      setLightboxIndex(index >= 0 ? index : 0);
      setLightboxOpen(true);
    },
    [filteredArtworks]
  );

  const handleClearFilters = useCallback(() => {
    setSelectedCategory(null);
    setSelectedSubCategory(null);
    setSelectedStyle(null);
  }, []);

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 via-white to-pink-50 dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950" />

        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-brand-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1.2, 1, 1.2], rotate: [90, 0, 90] }}
            transition={{ duration: 25, repeat: Infinity }}
            className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
          />
        </div>

        <Container className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge variant="gradient" size="lg" className="mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              AI-Generated Culinary Art
            </Badge>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
              <span className="text-neutral-900 dark:text-white">Culinary</span>
              <br />
              <span className="bg-gradient-to-r from-brand-500 via-pink-500 to-purple-500 bg-clip-text text-transparent">
                Canvas
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
              Discover breathtaking AI-generated food photography. A premium collection for creative professionals.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-neutral-900 dark:text-white">
                  {totalImages.toLocaleString()}+
                </div>
                <div className="text-sm text-neutral-500">Artworks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neutral-900 dark:text-white">
                  {categories.length}
                </div>
                <div className="text-sm text-neutral-500">Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neutral-900 dark:text-white">100+</div>
                <div className="text-sm text-neutral-500">Sub-categories</div>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Gallery
              </Button>
              <Button variant="outline" size="lg">
                View Categories
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 md:py-24 bg-white dark:bg-neutral-950">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold text-neutral-900 dark:text-white">
              Featured Artworks
            </h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-400">
              Browse our curated collection of AI-generated culinary photography
            </p>
          </motion.div>

          <FilterBar
            categories={categories}
            selectedCategory={selectedCategory}
            selectedSubCategory={selectedSubCategory}
            selectedStyle={selectedStyle}
            viewMode={viewMode}
            totalResults={filteredArtworks.length}
            onCategoryChange={setSelectedCategory}
            onSubCategoryChange={setSelectedSubCategory}
            onStyleChange={setSelectedStyle}
            onViewModeChange={setViewMode}
            onClearFilters={handleClearFilters}
            className="mb-8"
          />

          <MasonryGrid artworks={filteredArtworks} onImageClick={handleImageClick} showCategory />

          {filteredArtworks.length > 0 && (
            <div className="mt-12 text-center">
              <Button variant="outline" size="lg">
                Load More Artworks
              </Button>
            </div>
          )}
        </Container>
      </section>

      <Lightbox
        isOpen={lightboxOpen}
        artworks={filteredArtworks}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />
    </>
  );
}