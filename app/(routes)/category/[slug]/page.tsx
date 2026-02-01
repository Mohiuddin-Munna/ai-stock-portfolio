import { Container } from '@/components/ui';
import { getCategoryBySlug, getAllCategories } from '@/lib/data';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  
  if (!category) {
    return { title: 'Category Not Found' };
  }

  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <Container>
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            {category.name}
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            {category.description}
          </p>
          <div className="mt-4 text-sm text-neutral-500">
            {category.stats.totalImages} artworks • {category.subCategories.length} sub-categories
          </div>
        </div>

        {/* Sub-categories */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {category.subCategories.map((sub) => (
            <div
              key={sub.id}
              className="p-4 rounded-xl bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
            >
              <h3 className="font-medium text-neutral-900 dark:text-white">
                {sub.name}
              </h3>
              <p className="text-sm text-neutral-500 mt-1">
                {sub.imageCount} images
              </p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}