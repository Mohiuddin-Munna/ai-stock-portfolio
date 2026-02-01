// =============================================================================
// MOCK DATA
// =============================================================================

import type { ArtworkPreview, ImageStyle, ImageAspectRatio } from '@/types';

const unsplashImages = [
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38',
  'https://images.unsplash.com/photo-1565958011703-44f9829ba187',
  'https://images.unsplash.com/photo-1482049016631-27e3f7875c29',
  'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
  'https://images.unsplash.com/photo-1512621776951-a57141f2eefd',
  'https://images.unsplash.com/photo-1473093295043-cdd812d0e601',
  'https://images.unsplash.com/photo-1498837167922-ddd27525d352',
  'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94',
  'https://images.unsplash.com/photo-1481391319762-47dff72954d9',
  'https://images.unsplash.com/photo-1484723091739-30a097e8f929',
  'https://images.unsplash.com/photo-1467003909585-2f8a72700288',
  'https://images.unsplash.com/photo-1432139555190-58524dae6a55',
  'https://images.unsplash.com/photo-1499028344343-cd173ffc68a9',
  'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327',
  'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd',
  'https://images.unsplash.com/photo-1529042410759-befb1204b468',
  'https://images.unsplash.com/photo-1509440159596-0249088772ff',
  'https://images.unsplash.com/photo-1551024601-bec78aea704b',
  'https://images.unsplash.com/photo-1488477181946-6428a0291777',
];

const categories = [
  'fresh-produce',
  'beverages',
  'desserts-sweets',
  'breakfast-brunch',
  'main-courses',
];

const subCategories: Record<string, string[]> = {
  'fresh-produce': ['tropical-fruits', 'leafy-greens'],
  'beverages': ['artisan-coffee', 'fresh-juices'],
  'desserts-sweets': ['layered-cakes', 'ice-cream'],
  'breakfast-brunch': ['pancakes', 'avocado-toast'],
  'main-courses': ['steaks', 'pasta'],
};

const styles: ImageStyle[] = ['bright', 'moody', 'minimal', 'rustic', 'modern', 'natural'];
const aspectRatios: ImageAspectRatio[] = ['1:1', '4:3', '3:4', '16:9'];

const titles = [
  'Fresh Garden Salad',
  'Artisan Coffee Brew',
  'Chocolate Layer Cake',
  'Avocado Toast Delight',
  'Grilled Ribeye Steak',
  'Homemade Sourdough',
  'Spice Collection',
  'Gourmet Burger',
  'Elegant Table Setting',
  'Buddha Bowl',
  'Tropical Fruit Platter',
  'Pancake Stack',
  'Seafood Pasta',
  'French Croissant',
  'Smoothie Bowl',
  'Margherita Pizza',
  'Farm Vegetables',
  'Ice Cream Sundae',
  'Herb Garden',
  'Bread Basket',
];

export function generateMockArtworks(count: number = 20): ArtworkPreview[] {
  return Array.from({ length: count }, (_, index) => {
    const categorySlug = categories[index % categories.length];
    const subs = subCategories[categorySlug] || ['general'];
    const subCategorySlug = subs[index % subs.length];
    const imageUrl = unsplashImages[index % unsplashImages.length];

    return {
      id: `artwork_${index + 1}`,
      slug: `artwork-${index + 1}`,
      thumbnailSrc: `${imageUrl}?w=400&h=300&fit=crop&auto=format`,
      previewSrc: `${imageUrl}?w=800&h=600&fit=crop&auto=format`,
      blurDataURL: '',
      title: titles[index % titles.length],
      categorySlug,
      subCategorySlug,
      aspectRatio: aspectRatios[index % aspectRatios.length],
      style: styles[index % styles.length],
      isFeatured: index % 5 === 0,
      isNew: index % 7 === 0,
    };
  });
}

export const mockArtworks = generateMockArtworks(24);