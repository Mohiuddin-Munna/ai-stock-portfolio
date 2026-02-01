// =============================================================================
// CATEGORY & ARTWORK DATA
// =============================================================================
// Description: Complete data for all categories and sub-categories
// =============================================================================

import {
  Apple,
  Coffee,
  Cake,
  Egg,
  UtensilsCrossed,
  Croissant,
  Salad,
  Pizza,
  Wine,
  Leaf,
  type LucideIcon,
} from 'lucide-react';
import { Category, SubCategory } from '@/types';
import { generateId, slugify } from './utils';

// =============================================================================
// HELPER: Create SubCategory
// =============================================================================

function createSubCategory(
  name: string,
  nameBn: string,
  description: string,
  descriptionBn: string,
  isPopular: boolean = false
): SubCategory {
  return {
    id: generateId('subcat'),
    name,
    nameBn,
    slug: slugify(name),
    description,
    descriptionBn,
    imageCount: Math.floor(Math.random() * 50) + 20, // Placeholder
    isPopular,
    sortOrder: 0,
  };
}

// =============================================================================
// CATEGORY DATA
// =============================================================================

export const CATEGORIES: Category[] = [
  // =========================================================================
  // 1. FRESH PRODUCE
  // =========================================================================
  {
    id: 'cat_fresh_produce',
    name: 'Fresh Produce',
    nameBn: 'তাজা উৎপাদন',
    slug: 'fresh-produce',
    description: 'Vibrant fruits, vegetables, and farm-fresh ingredients captured in stunning detail.',
    descriptionBn: 'উজ্জ্বল ফল, সবজি এবং খামার-তাজা উপকরণ অত্যাশ্চর্য বিস্তারিত রূপে।',
    icon: {
      icon: Apple,
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
      gradient: 'from-green-500 to-emerald-600',
    },
    coverImage: '/images/gallery/fresh-produce/cover.jpg',
    heroImage: '/images/gallery/fresh-produce/hero.jpg',
    subCategories: [
      createSubCategory(
        'Tropical Fruits',
        'ট্রপিক্যাল ফল',
        'Exotic tropical fruits like mangoes, papayas, and dragon fruits',
        'আম, পেঁপে, ড্রাগন ফ্রুটের মতো বিদেশী ট্রপিক্যাল ফল',
        true
      ),
      createSubCategory(
        'Citrus Collection',
        'সাইট্রাস কালেকশন',
        'Oranges, lemons, limes, and grapefruits in vibrant compositions',
        'কমলা, লেবু, লাইম এবং জাম্বুরা প্রাণবন্ত রচনায়',
        true
      ),
      createSubCategory(
        'Berries & Cherries',
        'বেরি ও চেরি',
        'Strawberries, blueberries, raspberries, and cherry collections',
        'স্ট্রবেরি, ব্লুবেরি, রাস্পবেরি এবং চেরি সংগ্রহ'
      ),
      createSubCategory(
        'Leafy Greens',
        'শাক-পাতা',
        'Fresh spinach, kale, lettuce, and leafy vegetable textures',
        'তাজা পালং শাক, কেল, লেটুস এবং শাক-সবজির টেক্সচার'
      ),
      createSubCategory(
        'Root Vegetables',
        'মূল সবজি',
        'Carrots, potatoes, beets, and underground treasures',
        'গাজর, আলু, বিট এবং মাটির নিচের সম্পদ'
      ),
      createSubCategory(
        'Exotic Varieties',
        'বিদেশি জাত',
        'Rare and exotic fruits from around the world',
        'বিশ্বের বিভিন্ন প্রান্ত থেকে বিরল ও বিদেশী ফল'
      ),
      createSubCategory(
        'Seasonal Harvest',
        'মৌসুমী ফসল',
        'Seasonal fruits and vegetables at peak freshness',
        'মৌসুমী ফল ও সবজি তাদের সেরা সতেজতায়'
      ),
      createSubCategory(
        'Organic Selection',
        'অর্গানিক নির্বাচন',
        'Certified organic produce and natural farming',
        'সার্টিফাইড জৈব পণ্য এবং প্রাকৃতিক চাষ'
      ),
      createSubCategory(
        'Farm-Fresh Bundles',
        'খামার-তাজা বান্ডেল',
        'Fresh vegetable bundles straight from the farm',
        'খামার থেকে সরাসরি তাজা সবজির গুচ্ছ'
      ),
      createSubCategory(
        'Vegetable Textures',
        'সবজির টেক্সচার',
        'Close-up and macro shots of vegetable surfaces',
        'সবজির পৃষ্ঠের ক্লোজ-আপ এবং ম্যাক্রো শট',
        true
      ),
    ],
    stats: {
      totalImages: 285,
      featuredImages: 24,
      newImages: 12,
      subCategoryCount: 10,
    },
    isFeatured: true,
    isNew: false,
    sortOrder: 1,
    metaTitle: 'Fresh Produce Photography | AI Culinary Art',
    metaDescription: 'Explore stunning AI-generated images of fresh fruits, vegetables, and farm produce.',
    keywords: ['fresh produce', 'fruits', 'vegetables', 'organic', 'farm fresh'],
  },

  // =========================================================================
  // 2. BEVERAGES
  // =========================================================================
  {
    id: 'cat_beverages',
    name: 'Beverages',
    nameBn: 'পানীয়',
    slug: 'beverages',
    description: 'Artfully crafted drinks from steaming coffee to refreshing cocktails.',
    descriptionBn: 'গরম কফি থেকে সতেজ ককটেইল পর্যন্ত শৈল্পিকভাবে তৈরি পানীয়।',
    icon: {
      icon: Coffee,
      color: 'text-amber-600',
      bgColor: 'bg-amber-500/10',
      gradient: 'from-amber-500 to-orange-600',
    },
    coverImage: '/images/gallery/beverages/cover.jpg',
    heroImage: '/images/gallery/beverages/hero.jpg',
    subCategories: [
      createSubCategory(
        'Artisan Coffee',
        'আর্টিজান কফি',
        'Latte art, pour-over, espresso, and specialty coffee',
        'ল্যাটে আর্ট, পোর-ওভার, এসপ্রেসো এবং বিশেষ কফি',
        true
      ),
      createSubCategory(
        'Premium Teas',
        'প্রিমিয়াম চা',
        'Green tea, matcha, chai ceremonies, and tea culture',
        'গ্রিন টি, মাচা, চা অনুষ্ঠান এবং চা সংস্কৃতি',
        true
      ),
      createSubCategory(
        'Fresh Juices',
        'তাজা জুস',
        'Orange, apple, mixed fruit, and fresh-pressed juices',
        'কমলা, আপেল, মিশ্র ফল এবং তাজা প্রেস করা জুস'
      ),
      createSubCategory(
        'Smoothie Bowls',
        'স্মুদি বোল',
        'Açaí bowls, mango bowls, and colorful smoothie creations',
        'অ্যাসাই বোল, ম্যাঙ্গো বোল এবং রঙিন স্মুদি সৃষ্টি'
      ),
      createSubCategory(
        'Mocktails',
        'মকটেইল',
        'Virgin mojitos, fruit punches, and non-alcoholic drinks',
        'ভার্জিন মোহিতো, ফ্রুট পাঞ্চ এবং নন-অ্যালকোহলিক পানীয়'
      ),
      createSubCategory(
        'Signature Cocktails',
        'সিগনেচার ককটেইল',
        'Martinis, margaritas, and expertly crafted cocktails',
        'মার্টিনি, মার্গারিটা এবং দক্ষতার সাথে তৈরি ককটেইল',
        true
      ),
      createSubCategory(
        'Wine & Spirits',
        'ওয়াইন ও স্পিরিট',
        'Red wine, whiskey, brandy, and premium spirits',
        'রেড ওয়াইন, হুইস্কি, ব্র্যান্ডি এবং প্রিমিয়াম স্পিরিট'
      ),
      createSubCategory(
        'Hot Chocolate',
        'হট চকোলেট',
        'Marshmallow topped, cream swirled hot chocolate',
        'মার্শম্যালো টপড, ক্রিম ঘূর্ণিত হট চকোলেট'
      ),
      createSubCategory(
        'Infused Waters',
        'ইনফিউজড ওয়াটার',
        'Lemon-mint, berry infusion, and detox waters',
        'লেমন-মিন্ট, বেরি ইনফিউশন এবং ডিটক্স ওয়াটার'
      ),
      createSubCategory(
        'Iced & Cold Brew',
        'আইসড ও কোল্ড ব্রু',
        'Cold coffee, iced tea, and refreshing cold drinks',
        'কোল্ড কফি, আইসড টি এবং সতেজ ঠান্ডা পানীয়'
      ),
    ],
    stats: {
      totalImages: 312,
      featuredImages: 28,
      newImages: 18,
      subCategoryCount: 10,
    },
    isFeatured: true,
    isNew: false,
    sortOrder: 2,
    metaTitle: 'Beverage Photography | AI Culinary Art',
    metaDescription: 'Discover AI-generated beverage photography from artisan coffee to craft cocktails.',
    keywords: ['beverages', 'coffee', 'cocktails', 'drinks', 'tea'],
  },

  // =========================================================================
  // 3. DESSERTS & SWEETS
  // =========================================================================
  {
    id: 'cat_desserts',
    name: 'Desserts & Sweets',
    nameBn: 'ডেজার্ট ও মিষ্টি',
    slug: 'desserts-sweets',
    description: 'Decadent cakes, pastries, and sweet treats that delight the senses.',
    descriptionBn: 'সুস্বাদু কেক, পেস্ট্রি এবং মিষ্টি যা ইন্দ্রিয়কে আনন্দিত করে।',
    icon: {
      icon: Cake,
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
      gradient: 'from-pink-500 to-rose-600',
    },
    coverImage: '/images/gallery/desserts/cover.jpg',
    heroImage: '/images/gallery/desserts/hero.jpg',
    subCategories: [
      createSubCategory(
        'Layered Cakes',
        'লেয়ার্ড কেক',
        'Birthday cakes, wedding cakes, and multi-tier creations',
        'জন্মদিনের কেক, বিবাহের কেক এবং মাল্টি-টায়ার সৃষ্টি',
        true
      ),
      createSubCategory(
        'French Pastries',
        'ফ্রেঞ্চ পেস্ট্রি',
        'Macarons, éclairs, mille-feuille, and elegant pastries',
        'ম্যাকারন, এক্লেয়ার, মিল-ফয় এবং মার্জিত পেস্ট্রি',
        true
      ),
      createSubCategory(
        'Traditional Sweets',
        'দেশীয় মিষ্টি',
        'Rasgulla, sandesh, mishti doi, and Bengali sweets',
        'রসগোল্লা, সন্দেশ, মিষ্টি দই এবং বাঙালি মিষ্টি',
        true
      ),
      createSubCategory(
        'Artisan Chocolates',
        'আর্টিজান চকোলেট',
        'Truffles, pralines, chocolate bars, and confections',
        'ট্রাফল, প্রালিন, চকোলেট বার এবং মিষ্টান্ন'
      ),
      createSubCategory(
        'Ice Cream & Gelato',
        'আইসক্রিম ও জেলাটো',
        'Sundaes, cones, artisan gelato, and frozen delights',
        'সানডে, কোন, আর্টিজান জেলাটো এবং হিমায়িত আনন্দ'
      ),
      createSubCategory(
        'Puddings & Custards',
        'পুডিং ও কাস্টার্ড',
        'Crème brûlée, panna cotta, and silky puddings',
        'ক্রেম ব্রুলি, পান্না কোটা এবং সিল্কি পুডিং'
      ),
      createSubCategory(
        'Cookies & Biscotti',
        'কুকিজ ও বিস্কুট',
        'Chocolate chip, shortbread, and artisan cookies',
        'চকলেট চিপ, শর্টব্রেড এবং আর্টিজান কুকিজ'
      ),
      createSubCategory(
        'Pies & Tarts',
        'পাই ও টার্ট',
        'Apple pie, lemon tart, and fruit-filled pastries',
        'আপেল পাই, লেমন টার্ট এবং ফল ভরা পেস্ট্রি'
      ),
      createSubCategory(
        'Cheesecakes',
        'চিজকেক',
        'New York, Basque burnt, and creamy cheesecakes',
        'নিউ ইয়র্ক, বাস্ক বার্ন্ট এবং ক্রিমি চিজকেক'
      ),
      createSubCategory(
        'Festive Specials',
        'উৎসব বিশেষ',
        'Christmas, Eid, Diwali, and celebration desserts',
        'ক্রিসমাস, ঈদ, দিওয়ালি এবং উদযাপনের ডেজার্ট'
      ),
    ],
    stats: {
      totalImages: 356,
      featuredImages: 32,
      newImages: 22,
      subCategoryCount: 10,
    },
    isFeatured: true,
    isNew: true,
    sortOrder: 3,
    metaTitle: 'Dessert Photography | AI Culinary Art',
    metaDescription: 'Indulge in AI-generated dessert photography featuring cakes, pastries, and sweets.',
    keywords: ['desserts', 'cakes', 'pastries', 'sweets', 'chocolate'],
  },

  // =========================================================================
  // 4. BREAKFAST & BRUNCH
  // =========================================================================
  {
    id: 'cat_breakfast',
    name: 'Breakfast & Brunch',
    nameBn: 'সকালের নাস্তা',
    slug: 'breakfast-brunch',
    description: 'Morning delights from fluffy pancakes to elegant brunch spreads.',
    descriptionBn: 'ফ্লাফি প্যানকেক থেকে মার্জিত ব্রাঞ্চ স্প্রেড পর্যন্ত সকালের আনন্দ।',
    icon: {
      icon: Egg,
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
      gradient: 'from-yellow-500 to-amber-600',
    },
    coverImage: '/images/gallery/breakfast/cover.jpg',
    heroImage: '/images/gallery/breakfast/hero.jpg',
    subCategories: [
      createSubCategory(
        'Pancake Stacks',
        'প্যানকেক স্ট্যাক',
        'Blueberry, maple, butter topped fluffy pancakes',
        'ব্লুবেরি, ম্যাপেল, বাটার টপড ফ্লাফি প্যানকেক',
        true
      ),
      createSubCategory(
        'Waffle Creations',
        'ওয়াফেল ক্রিয়েশন',
        'Belgian, bubble waffles with toppings',
        'বেলজিয়ান, বাবল ওয়াফেল টপিংস সহ'
      ),
      createSubCategory(
        'Eggs & Omelets',
        'ডিম ও ওমলেট',
        'Poached, Benedict, scrambled eggs',
        'পোচড, বেনেডিক্ট, স্ক্র্যাম্বল এগ',
        true
      ),
      createSubCategory(
        'Avocado Toast',
        'অ্যাভোকাডো টোস্ট',
        'Trendy avocado toast with various toppings',
        'বিভিন্ন টপিংস সহ ট্রেন্ডি অ্যাভোকাডো টোস্ট',
        true
      ),
      createSubCategory(
        'French Toast',
        'ফ্রেঞ্চ টোস্ট',
        'Creamy, fruit-topped French toast',
        'ক্রিমি, ফল-টপড ফ্রেঞ্চ টোস্ট'
      ),
      createSubCategory(
        'Açaí & Smoothie Bowls',
        'অ্যাসাই বোল',
        'Granola, fruit, and nut topped bowls',
        'গ্রানোলা, ফল এবং বাদাম টপড বোল'
      ),
      createSubCategory(
        'Cereals & Granola',
        'সিরিয়াল ও গ্রানোলা',
        'Milk, berries, honey topped cereals',
        'দুধ, বেরি, মধু টপড সিরিয়াল'
      ),
      createSubCategory(
        'Full Brunch Platters',
        'ব্রাঞ্চ প্ল্যাটার',
        'English, American breakfast spreads',
        'ইংলিশ, আমেরিকান ব্রেকফাস্ট স্প্রেড'
      ),
      createSubCategory(
        'Morning Pastries',
        'সকালের পেস্ট্রি',
        'Croissants, Danish, and morning bakes',
        'ক্রোয়াসাঁ, ড্যানিশ এবং সকালের বেক'
      ),
      createSubCategory(
        'Coffee & Breakfast',
        'কফি ও নাস্তা',
        'Coffee and breakfast pairing shots',
        'কফি এবং ব্রেকফাস্ট পেয়ারিং শট'
      ),
    ],
    stats: {
      totalImages: 248,
      featuredImages: 20,
      newImages: 14,
      subCategoryCount: 10,
    },
    isFeatured: false,
    isNew: false,
    sortOrder: 4,
    metaTitle: 'Breakfast Photography | AI Culinary Art',
    metaDescription: 'Wake up to beautiful AI-generated breakfast and brunch photography.',
    keywords: ['breakfast', 'brunch', 'pancakes', 'eggs', 'morning'],
  },

  // =========================================================================
  // 5. MAIN COURSES
  // =========================================================================
  {
    id: 'cat_main_courses',
    name: 'Main Courses',
    nameBn: 'প্রধান খাবার',
    slug: 'main-courses',
    description: 'Stunning presentations of steaks, curries, and gourmet entrées.',
    descriptionBn: 'স্টেক, কারি এবং গুরমে এন্ট্রির অত্যাশ্চর্য উপস্থাপনা।',
    icon: {
      icon: UtensilsCrossed,
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
      gradient: 'from-red-500 to-rose-600',
    },
    coverImage: '/images/gallery/main-courses/cover.jpg',
    heroImage: '/images/gallery/main-courses/hero.jpg',
    subCategories: [
      createSubCategory(
        'Steaks & Grills',
        'স্টেক ও গ্রিল',
        'Ribeye, T-bone, filet mignon, and grilled meats',
        'রিবআই, টি-বোন, ফিলে মিগনন এবং গ্রিলড মিট',
        true
      ),
      createSubCategory(
        'Authentic Curries',
        'অথেনটিক কারি',
        'Butter chicken, rogan josh, and regional curries',
        'বাটার চিকেন, রোগান জোশ এবং আঞ্চলিক কারি',
        true
      ),
      createSubCategory(
        'Pasta Perfection',
        'পাস্তা পারফেকশন',
        'Carbonara, lasagna, and Italian pasta dishes',
        'কার্বোনারা, লাজানিয়া এবং ইতালিয়ান পাস্তা ডিশ',
        true
      ),
      createSubCategory(
        'Seafood Showcase',
        'সিফুড শোকেস',
        'Lobster, salmon, prawns, and oceanic delights',
        'লবস্টার, স্যামন, চিংড়ি এবং সামুদ্রিক আনন্দ'
      ),
      createSubCategory(
        'Roasted Mains',
        'রোস্টেড মেইন',
        'Roasted chicken, turkey, and lamb',
        'রোস্টেড চিকেন, টার্কি এবং ল্যাম্ব'
      ),
      createSubCategory(
        'Asian Cuisine',
        'এশিয়ান কুইজিন',
        'Sushi, ramen, stir-fry, and Asian flavors',
        'সুশি, রামেন, স্টির-ফ্রাই এবং এশিয়ান স্বাদ'
      ),
      createSubCategory(
        'Mediterranean Plates',
        'মেডিটেরেনিয়ান',
        'Greek, Italian, Middle Eastern cuisines',
        'গ্রীক, ইতালিয়ান, মধ্যপ্রাচ্যের রান্না'
      ),
      createSubCategory(
        'Rice Dishes',
        'ভাত/রাইস ডিশ',
        'Biryani, paella, risotto, and rice creations',
        'বিরিয়ানি, পায়েলা, রিসোট্টো এবং রাইস সৃষ্টি'
      ),
      createSubCategory(
        'Soups & Stews',
        'স্যুপ ও স্ট্যু',
        'Tomato, French onion, and hearty stews',
        'টমেটো, ফ্রেঞ্চ অনিয়ন এবং হার্টি স্ট্যু'
      ),
      createSubCategory(
        'Fine Dining Plated',
        'ফাইন ডাইনিং',
        'Michelin-style plating and presentations',
        'মিশেলিন-স্টাইল প্লেটিং এবং উপস্থাপনা'
      ),
    ],
    stats: {
      totalImages: 425,
      featuredImages: 38,
      newImages: 28,
      subCategoryCount: 10,
    },
    isFeatured: true,
    isNew: false,
    sortOrder: 5,
    metaTitle: 'Main Course Photography | AI Culinary Art',
    metaDescription: 'Explore AI-generated main course photography featuring steaks, curries, and fine dining.',
    keywords: ['main courses', 'steaks', 'curries', 'pasta', 'fine dining'],
  },

  // =========================================================================
  // 6. BREAD & BAKERY
  // =========================================================================
  {
    id: 'cat_bread_bakery',
    name: 'Bread & Bakery',
    nameBn: 'রুটি ও বেকারি',
    slug: 'bread-bakery',
    description: 'Artisan breads, flaky croissants, and rustic bakery delights.',
    descriptionBn: 'আর্টিজান রুটি, ফ্লেকি ক্রোয়াসাঁ এবং রাস্টিক বেকারি আনন্দ।',
    icon: {
      icon: Croissant,
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
      gradient: 'from-orange-500 to-amber-600',
    },
    coverImage: '/images/gallery/bread-bakery/cover.jpg',
    heroImage: '/images/gallery/bread-bakery/hero.jpg',
    subCategories: [
      createSubCategory(
        'Artisan Sourdough',
        'আর্টিজান সাওয়ারডো',
        'Crusty sourdough loaves with beautiful crumb',
        'সুন্দর ক্রাম্ব সহ ক্রাস্টি সাওয়ারডো লোফ',
        true
      ),
      createSubCategory(
        'Flaky Croissants',
        'ফ্লেকি ক্রোয়াসাঁ',
        'Plain, chocolate, almond croissants',
        'প্লেইন, চকোলেট, আমন্ড ক্রোয়াসাঁ',
        true
      ),
      createSubCategory(
        'French Baguettes',
        'ফ্রেঞ্চ বাগেট',
        'Crispy, golden French baguettes',
        'ক্রিস্পি, গোল্ডেন ফ্রেঞ্চ বাগেট'
      ),
      createSubCategory(
        'Rustic Loaves',
        'রাস্টিক লোফ',
        'Farmhouse, country bread loaves',
        'ফার্মহাউস, কান্ট্রি ব্রেড লোফ'
      ),
      createSubCategory(
        'Flatbreads',
        'ফ্ল্যাটব্রেড',
        'Naan, pita, focaccia, and flatbreads',
        'নান, পিটা, ফোকাচ্চিয়া এবং ফ্ল্যাটব্রেড'
      ),
      createSubCategory(
        'Dinner Rolls',
        'ডিনার রোল',
        'Butter rolls, brioche, and soft rolls',
        'বাটার রোল, ব্রিওশ এবং সফট রোল'
      ),
      createSubCategory(
        'Sweet Breads',
        'সুইট ব্রেড',
        'Cinnamon rolls, babka, and sweet bakes',
        'সিনামন রোল, ব্যাবকা এবং সুইট বেকস',
        true
      ),
      createSubCategory(
        'Gluten-Free Options',
        'গ্লুটেন-ফ্রি',
        'Gluten-free bread alternatives',
        'গ্লুটেন-ফ্রি ব্রেড বিকল্প'
      ),
      createSubCategory(
        'Dough & Process',
        'ডো ও প্রক্রিয়া',
        'Kneading, proofing, and process shots',
        'নিডিং, প্রুফিং এবং প্রক্রিয়া শট'
      ),
      createSubCategory(
        'Flour & Textures',
        'ময়দা ও টেক্সচার',
        'Raw ingredients, flour dusting shots',
        'কাঁচা উপকরণ, ময়দা ডাস্টিং শট'
      ),
    ],
    stats: {
      totalImages: 198,
      featuredImages: 18,
      newImages: 10,
      subCategoryCount: 10,
    },
    isFeatured: false,
    isNew: false,
    sortOrder: 6,
    metaTitle: 'Bread & Bakery Photography | AI Culinary Art',
    metaDescription: 'Discover AI-generated bakery photography featuring artisan breads and pastries.',
    keywords: ['bread', 'bakery', 'croissants', 'sourdough', 'pastries'],
  },

  // =========================================================================
  // 7. INGREDIENTS & SPICES
  // =========================================================================
  {
    id: 'cat_ingredients',
    name: 'Ingredients & Spices',
    nameBn: 'উপকরণ ও মসলা',
    slug: 'ingredients-spices',
    description: 'Raw ingredients, aromatic spices, and cooking essentials.',
    descriptionBn: 'কাঁচা উপকরণ, সুগন্ধি মসলা এবং রান্নার প্রয়োজনীয়তা।',
    icon: {
      icon: Leaf,
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
      gradient: 'from-emerald-500 to-green-600',
    },
    coverImage: '/images/gallery/ingredients/cover.jpg',
    heroImage: '/images/gallery/ingredients/hero.jpg',
    subCategories: [
      createSubCategory(
        'Spice Collections',
        'মসলা কালেকশন',
        'Cumin, turmeric, cinnamon, and spice arrays',
        'জিরা, হলুদ, দারুচিনি এবং মসলার সারণি',
        true
      ),
      createSubCategory(
        'Fresh Herbs',
        'তাজা হার্বস',
        'Basil, rosemary, thyme, and fresh herbs',
        'বেসিল, রোজমেরি, থাইম এবং তাজা হার্বস',
        true
      ),
      createSubCategory(
        'Oils & Vinegars',
        'তেল ও ভিনেগার',
        'Olive oil, balsamic, and premium oils',
        'অলিভ অয়েল, বালসামিক এবং প্রিমিয়াম তেল'
      ),
      createSubCategory(
        'Artisan Salts',
        'আর্টিজান সল্ট',
        'Himalayan, fleur de sel, and specialty salts',
        'হিমালয়ান, ফ্লেউর দে সেল এবং বিশেষ লবণ'
      ),
      createSubCategory(
        'Raw Proteins',
        'কাঁচা প্রোটিন',
        'Fresh meat, fish, and seafood',
        'তাজা মাংস, মাছ এবং সিফুড'
      ),
      createSubCategory(
        'Dairy Products',
        'দুগ্ধজাত',
        'Cheese, butter, cream, and dairy',
        'চিজ, বাটার, ক্রিম এবং দুগ্ধ'
      ),
      createSubCategory(
        'Grains & Legumes',
        'শস্য ও ডাল',
        'Quinoa, lentils, chickpeas, and grains',
        'কুইনোয়া, মসুর, ছোলা এবং শস্য'
      ),
      createSubCategory(
        'Nuts & Seeds',
        'বাদাম ও বীজ',
        'Almonds, chia, walnuts, and seeds',
        'আমন্ড, চিয়া, ওয়ালনাট এবং বীজ'
      ),
      createSubCategory(
        'Sauces & Condiments',
        'সস ও কন্ডিমেন্ট',
        'Soy sauce, tahini, hoisin, and sauces',
        'সয় সস, তাহিনি, হয়সিন এবং সস'
      ),
      createSubCategory(
        'Pantry Essentials',
        'প্যান্ট্রি এসেনশিয়াল',
        'Stocks, pastes, preserves, and essentials',
        'স্টক, পেস্ট, প্রিজার্ভ এবং প্রয়োজনীয়তা'
      ),
    ],
    stats: {
      totalImages: 276,
      featuredImages: 22,
      newImages: 16,
      subCategoryCount: 10,
    },
    isFeatured: false,
    isNew: true,
    sortOrder: 7,
    metaTitle: 'Ingredient Photography | AI Culinary Art',
    metaDescription: 'Explore AI-generated photography of spices, herbs, and cooking ingredients.',
    keywords: ['ingredients', 'spices', 'herbs', 'cooking', 'raw ingredients'],
  },

  // =========================================================================
  // 8. FAST FOOD & STREET
  // =========================================================================
  {
    id: 'cat_fast_food',
    name: 'Fast Food & Street',
    nameBn: 'ফাস্ট ফুড ও স্ট্রিট',
    slug: 'fast-food-street',
    description: 'Gourmet burgers, artisan pizzas, and global street food culture.',
    descriptionBn: 'গুরমে বার্গার, আর্টিজান পিৎজা এবং বৈশ্বিক স্ট্রিট ফুড সংস্কৃতি।',
    icon: {
      icon: Pizza,
      color: 'text-rose-500',
      bgColor: 'bg-rose-500/10',
      gradient: 'from-rose-500 to-red-600',
    },
    coverImage: '/images/gallery/fast-food/cover.jpg',
    heroImage: '/images/gallery/fast-food/hero.jpg',
    subCategories: [
      createSubCategory(
        'Gourmet Burgers',
        'গুরমে বার্গার',
        'Smash, double, wagyu burgers',
        'স্ম্যাশ, ডাবল, ওয়াগিউ বার্গার',
        true
      ),
      createSubCategory(
        'Artisan Pizzas',
        'আর্টিজান পিৎজা',
        'Neapolitan, deep dish, wood-fired pizzas',
        'নেপোলিটান, ডিপ ডিশ, উড-ফায়ার্ড পিৎজা',
        true
      ),
      createSubCategory(
        'Loaded Tacos',
        'লোডেড টাকো',
        'Beef, fish, veggie tacos with toppings',
        'বিফ, ফিশ, ভেজি টাকো টপিংস সহ'
      ),
      createSubCategory(
        'Classic Hot Dogs',
        'ক্লাসিক হট ডগ',
        'New York, Chicago style hot dogs',
        'নিউ ইয়র্ক, শিকাগো স্টাইল হট ডগ'
      ),
      createSubCategory(
        'Crispy Fried Chicken',
        'ক্রিস্পি ফ্রাইড চিকেন',
        'Buckets, wings, tenders, and fried chicken',
        'বাকেট, উইংস, টেন্ডার এবং ফ্রাইড চিকেন',
        true
      ),
      createSubCategory(
        'Food Truck Vibes',
        'ফুড ট্রাক ভাইবস',
        'Street setting and food truck aesthetics',
        'স্ট্রিট সেটিং এবং ফুড ট্রাক নান্দনিকতা'
      ),
      createSubCategory(
        'Global Street Food',
        'গ্লোবাল স্ট্রিট',
        'Samosas, dumplings, kebabs, and more',
        'সমোসা, ডাম্পলিং, কিবাব এবং আরও'
      ),
      createSubCategory(
        'Fries & Sides',
        'ফ্রাই ও সাইড',
        'Loaded, curly, wedges, and fry varieties',
        'লোডেড, কার্লি, ওয়েজেস এবং ফ্রাই জাত'
      ),
      createSubCategory(
        'Wraps & Sandwiches',
        'র‍্যাপ ও স্যান্ডউইচ',
        'Club, submarine, and gourmet sandwiches',
        'ক্লাব, সাবমেরিন এবং গুরমে স্যান্ডউইচ'
      ),
      createSubCategory(
        'Dipping Sauces',
        'ডিপিং সস',
        'Ketchup, mustard, aioli, and sauces',
        'কেচাপ, মাস্টার্ড, আয়োলি এবং সস'
      ),
    ],
    stats: {
      totalImages: 342,
      featuredImages: 30,
      newImages: 20,
      subCategoryCount: 10,
    },
    isFeatured: true,
    isNew: false,
    sortOrder: 8,
    metaTitle: 'Fast Food Photography | AI Culinary Art',
    metaDescription: 'Explore AI-generated fast food and street food photography.',
    keywords: ['fast food', 'burgers', 'pizza', 'street food', 'tacos'],
  },

  // =========================================================================
  // 9. TABLE SETTINGS
  // =========================================================================
  {
    id: 'cat_table_settings',
    name: 'Table Settings',
    nameBn: 'টেবিল সেটিংস',
    slug: 'table-settings',
    description: 'Elegant tablescapes, cutlery, and dining ambiance shots.',
    descriptionBn: 'মার্জিত টেবিলস্কেপ, কাটলারি এবং ডাইনিং পরিবেশের শট।',
    icon: {
      icon: Wine,
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
      gradient: 'from-purple-500 to-violet-600',
    },
    coverImage: '/images/gallery/table-settings/cover.jpg',
    heroImage: '/images/gallery/table-settings/hero.jpg',
    subCategories: [
      createSubCategory(
        'Empty Plates',
        'খালি প্লেট',
        'Ceramic, porcelain, and rustic plates',
        'সিরামিক, পোর্সেলিন এবং রাস্টিক প্লেট',
        true
      ),
      createSubCategory(
        'Cutlery Arrangements',
        'কাটলারি সাজানো',
        'Fork, knife, spoon sets and arrangements',
        'ফর্ক, নাইফ, স্পুন সেট এবং সাজানো'
      ),
      createSubCategory(
        'Linen & Napkins',
        'লিনেন ও ন্যাপকিন',
        'Folded, textured napkins and linens',
        'ফোল্ডেড, টেক্সচার্ড ন্যাপকিন এবং লিনেন'
      ),
      createSubCategory(
        'Glassware',
        'গ্লাসওয়্যার',
        'Wine, cocktail, water glasses',
        'ওয়াইন, ককটেইল, ওয়াটার গ্লাস'
      ),
      createSubCategory(
        'Centerpieces',
        'সেন্টারপিস',
        'Flowers, candles, and table decor',
        'ফুল, মোমবাতি এবং টেবিল সাজসজ্জা',
        true
      ),
      createSubCategory(
        'Rustic Settings',
        'রাস্টিক সেটিং',
        'Wood, vintage, farmhouse aesthetics',
        'কাঠ, ভিনটেজ, ফার্মহাউস নান্দনিকতা'
      ),
      createSubCategory(
        'Modern Minimalist',
        'মডার্ন মিনিমালিস্ট',
        'Clean lines, neutral, contemporary',
        'ক্লিন লাইন, নিউট্রাল, সমসাময়িক'
      ),
      createSubCategory(
        'Fine Dining Setup',
        'ফাইন ডাইনিং সেটআপ',
        'Formal, elegant dining arrangements',
        'ফর্মাল, মার্জিত ডাইনিং সাজানো'
      ),
      createSubCategory(
        'Outdoor & Al Fresco',
        'আউটডোর সেটিং',
        'Garden party, picnic settings',
        'গার্ডেন পার্টি, পিকনিক সেটিং'
      ),
      createSubCategory(
        'Mood & Ambiance',
        'মুড ও পরিবেশ',
        'Candlelit, sunlit dining moods',
        'ক্যান্ডেললিট, সানলিট ডাইনিং মুড'
      ),
    ],
    stats: {
      totalImages: 186,
      featuredImages: 16,
      newImages: 8,
      subCategoryCount: 10,
    },
    isFeatured: false,
    isNew: false,
    sortOrder: 9,
    metaTitle: 'Table Setting Photography | AI Culinary Art',
    metaDescription: 'Discover AI-generated table setting and dining ambiance photography.',
    keywords: ['table settings', 'cutlery', 'dining', 'ambiance', 'plates'],
  },

  // =========================================================================
  // 10. HEALTHY & DIET
  // =========================================================================
  {
    id: 'cat_healthy',
    name: 'Healthy & Diet',
    nameBn: 'স্বাস্থ্যকর ও ডায়েট',
    slug: 'healthy-diet',
    description: 'Nutritious salads, vegan bowls, and wellness-focused cuisine.',
    descriptionBn: 'পুষ্টিকর সালাদ, ভেগান বোল এবং স্বাস্থ্য-কেন্দ্রিক রান্না।',
    icon: {
      icon: Salad,
      color: 'text-lime-500',
      bgColor: 'bg-lime-500/10',
      gradient: 'from-lime-500 to-green-600',
    },
    coverImage: '/images/gallery/healthy/cover.jpg',
    heroImage: '/images/gallery/healthy/hero.jpg',
    subCategories: [
      createSubCategory(
        'Vibrant Salads',
        'ভাইব্রেন্ট স্যালাড',
        'Greek, Caesar, Cobb, and fresh salads',
        'গ্রীক, সিজার, কোব এবং তাজা সালাদ',
        true
      ),
      createSubCategory(
        'Keto Creations',
        'কিটো ক্রিয়েশন',
        'Low-carb, high-fat keto meals',
        'লো-কার্ব, হাই-ফ্যাট কিটো খাবার'
      ),
      createSubCategory(
        'Vegan Bowls',
        'ভেগান বোল',
        'Buddha bowls, grain bowls, plant-based',
        'বুদ্ধ বোল, গ্রেইন বোল, প্ল্যান্ট-বেসড',
        true
      ),
      createSubCategory(
        'Gluten-Free',
        'গ্লুটেন-ফ্রি',
        'Alternative grain healthy options',
        'বিকল্প শস্য স্বাস্থ্যকর অপশন'
      ),
      createSubCategory(
        'Protein-Rich',
        'প্রোটিন-রিচ',
        'Chicken, fish, tofu protein meals',
        'চিকেন, ফিশ, টোফু প্রোটিন খাবার'
      ),
      createSubCategory(
        'Meal Prep',
        'মিল প্রেপ',
        'Container, portion, meal prep shots',
        'কন্টেইনার, পোর্শন, মিল প্রেপ শট'
      ),
      createSubCategory(
        'Superfood Highlights',
        'সুপারফুড',
        'Quinoa, kale, avocado superfoods',
        'কুইনোয়া, কেল, অ্যাভোকাডো সুপারফুড',
        true
      ),
      createSubCategory(
        'Detox & Cleanse',
        'ডিটক্স ও ক্লিনজ',
        'Juices, smoothies, cleanse meals',
        'জুস, স্মুদি, ক্লিনজ মিল'
      ),
      createSubCategory(
        'Plant-Based Proteins',
        'প্ল্যান্ট-বেসড প্রোটিন',
        'Tempeh, seitan, legume proteins',
        'টেম্পে, সিটান, লেগিউম প্রোটিন'
      ),
      createSubCategory(
        'Calorie-Conscious',
        'ক্যালোরি-কনশাস',
        'Light meals, portion control',
        'লাইট মিল, পোর্শন কন্ট্রোল'
      ),
    ],
    stats: {
      totalImages: 234,
      featuredImages: 20,
      newImages: 15,
      subCategoryCount: 10,
    },
    isFeatured: true,
    isNew: true,
    sortOrder: 10,
    metaTitle: 'Healthy Food Photography | AI Culinary Art',
    metaDescription: 'Explore AI-generated healthy and diet-focused food photography.',
    keywords: ['healthy', 'diet', 'salads', 'vegan', 'nutrition'],
  },
];

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

/**
 * Get all categories
 */
export function getAllCategories(): Category[] {
  return CATEGORIES.sort((a, b) => a.sortOrder - b.sortOrder);
}

/**
 * Get featured categories
 */
export function getFeaturedCategories(): Category[] {
  return CATEGORIES.filter((cat) => cat.isFeatured).sort((a, b) => a.sortOrder - b.sortOrder);
}

/**
 * Get category by slug
 */
export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((cat) => cat.slug === slug);
}

/**
 * Get category by ID
 */
export function getCategoryById(id: string): Category | undefined {
  return CATEGORIES.find((cat) => cat.id === id);
}

/**
 * Get sub-category by slug within a category
 */
export function getSubCategoryBySlug(
  categorySlug: string,
  subCategorySlug: string
): SubCategory | undefined {
  const category = getCategoryBySlug(categorySlug);
  return category?.subCategories.find((sub) => sub.slug === subCategorySlug);
}

/**
 * Get all sub-categories across all categories
 */
export function getAllSubCategories(): (SubCategory & { categorySlug: string })[] {
  return CATEGORIES.flatMap((cat) =>
    cat.subCategories.map((sub) => ({
      ...sub,
      categorySlug: cat.slug,
    }))
  );
}

/**
 * Get popular sub-categories
 */
export function getPopularSubCategories(): (SubCategory & { categorySlug: string; categoryName: string })[] {
  return CATEGORIES.flatMap((cat) =>
    cat.subCategories
      .filter((sub) => sub.isPopular)
      .map((sub) => ({
        ...sub,
        categorySlug: cat.slug,
        categoryName: cat.name,
      }))
  );
}

/**
 * Get total image count
 */
export function getTotalImageCount(): number {
  return CATEGORIES.reduce((total, cat) => total + cat.stats.totalImages, 0);
}

/**
 * Get total sub-category count
 */
export function getTotalSubCategoryCount(): number {
  return CATEGORIES.reduce((total, cat) => total + cat.subCategories.length, 0);
}

/**
 * Search categories and sub-categories
 */
export function searchCategories(query: string): {
  categories: Category[];
  subCategories: (SubCategory & { categorySlug: string })[];
} {
  const lowerQuery = query.toLowerCase();
  
  const categories = CATEGORIES.filter(
    (cat) =>
      cat.name.toLowerCase().includes(lowerQuery) ||
      cat.nameBn.includes(query) ||
      cat.description.toLowerCase().includes(lowerQuery)
  );

  const subCategories = getAllSubCategories().filter(
    (sub) =>
      sub.name.toLowerCase().includes(lowerQuery) ||
      sub.nameBn.includes(query) ||
      sub.description.toLowerCase().includes(lowerQuery)
  );

  return { categories, subCategories };
}

/**
 * Get category navigation items (simplified for menus)
 */
export function getCategoryNavItems(): {
  id: string;
  name: string;
  slug: string;
  icon: LucideIcon;
  imageCount: number;
  subCategories: { name: string; slug: string }[];
}[] {
  return CATEGORIES.map((cat) => ({
    id: cat.id,
    name: cat.name,
    slug: cat.slug,
    icon: cat.icon.icon,
    imageCount: cat.stats.totalImages,
    subCategories: cat.subCategories.map((sub) => ({
      name: sub.name,
      slug: sub.slug,
    })),
  }));
}