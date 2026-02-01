// =============================================================================
// MOCK DATA FOR TESTING
// =============================================================================

import type { ArtworkPreview, ImageStyle, ImageAspectRatio } from '@/types';

// =============================================================================
// CONSTANTS
// =============================================================================

const UNSPLASH_IMAGES: string[] = [
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

const CATEGORIES: string[] = [
  'fresh-produce',
  'beverages',
  'desserts-sweets',
  'breakfast-brunch',
  'main-courses',
  'bread-bakery',
  'ingredients-spices',
  'fast-food-street',
  'table-settings',
  'healthy-diet',
];

const SUB_CATEGORIES: Record<string, string[]> = {
  'fresh-produce': ['tropical-fruits', 'citrus-collection', 'berries-cherries', 'leafy-greens'],
  'beverages': ['artisan-coffee', 'premium-teas', 'fresh-juices', 'mocktails'],
  'desserts-sweets': ['layered-cakes', 'french-pastries', 'artisan-chocolates', 'ice-cream-gelato'],
  'breakfast-brunch': ['pancake-stacks', 'eggs-omelets', 'avocado-toast', 'french-toast'],
  'main-courses': ['steaks-grills', 'authentic-curries', 'pasta-perfection', 'seafood-showcase'],
  'bread-bakery': ['artisan-sourdough', 'flaky-croissants', 'french-baguettes', 'sweet-breads'],
  'ingredients-spices': ['spice-collections', 'fresh-herbs', 'oils-vinegars', 'dairy-products'],
  'fast-food-street': ['gourmet-burgers', 'artisan-pizzas', 'loaded-tacos', 'crispy-fried-chicken'],
  'table-settings': ['empty-plates', 'cutlery-arrangements', 'centerpieces', 'mood-ambiance'],
  'healthy-diet': ['vibrant-salads', 'vegan-bowls', 'superfood-highlights', 'meal-prep'],
};

const STYLES: ImageStyle[] = [
  'bright',
  'moody',
  'minimal',
  'rustic',
  'modern',
  'vintage',
  'dramatic',
  'natural',
  'studio',
  'lifestyle',
];

const ASPECT_RATIOS: ImageAspectRatio[] = ['1:1', '4:3', '3:4', '16:9', '3:2'];

const TITLES: string[] = [
  'Fresh Garden Salad',
  'Artisan Coffee Brew',
  'Chocolate Layer Cake',
  'Avocado Toast Delight',
  'Grilled Ribeye Steak',
  'Homemade Sourdough',
  'Spice Market Collection',
  'Gourmet Burger Stack',
  'Elegant Table Setting',
  'Buddha Bowl Creation',
  'Tropical Fruit Platter',
  'Morning Pancake Stack',
  'Seafood Pasta Dish',
  'French Croissant Fresh',
  'Colorful Smoothie Bowl',
  'Classic Margherita Pizza',
  'Farm Fresh Vegetables',
  'Decadent Ice Cream Sundae',
  'Aromatic Herb Garden',
  'Rustic Bread Basket',
  'Sushi Platter Deluxe',
  'Berry Cheesecake Slice',
  'Grilled Salmon Fillet',
  'Vietnamese Pho Bowl',
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

function getArrayItem<T>(arr: T[], index: number): T {
  const safeIndex = index % arr.length;
  const item = arr[safeIndex];
  if (item === undefined) {
    throw new Error(`Array item at index ${safeIndex} is undefined`);
  }
  return item;
}

function getSubCategories(categorySlug: string): string[] {
  return SUB_CATEGORIES[categorySlug] ?? ['general'];
}

// =============================================================================
// GENERATE MOCK ARTWORKS
// =============================================================================

export function generateMockArtworks(count: number = 20): ArtworkPreview[] {
  const artworks: ArtworkPreview[] = [];

  for (let index = 0; index < count; index++) {
    const categorySlug = getArrayItem(CATEGORIES, index);
    const subCategoryList = getSubCategories(categorySlug);
    const subCategorySlug = getArrayItem(subCategoryList, index);
    const imageUrl = getArrayItem(UNSPLASH_IMAGES, index);
    const title = getArrayItem(TITLES, index);
    const style = getArrayItem(STYLES, index);
    const aspectRatio = getArrayItem(ASPECT_RATIOS, index);

    const artwork: ArtworkPreview = {
      id: `artwork_${index + 1}`,
      slug: `artwork-${index + 1}`,
      thumbnailSrc: `${imageUrl}?w=400&h=300&fit=crop&auto=format`,
      previewSrc: `${imageUrl}?w=800&h=600&fit=crop&auto=format`,
      blurDataURL: '',
      title: title,
      categorySlug: categorySlug,
      subCategorySlug: subCategorySlug,
      aspectRatio: aspectRatio,
      style: style,
      isFeatured: index % 5 === 0,
      isNew: index % 7 === 0,
    };

    artworks.push(artwork);
  }

  return artworks;
}

// =============================================================================
// EXPORT DEFAULT MOCK DATA
// =============================================================================

export const mockArtworks: ArtworkPreview[] = generateMockArtworks(24);