import { Container } from '@/components/ui';

export const metadata = {
  title: 'Collections',
  description: 'Browse our curated collections of AI-generated culinary artworks.',
};

export default function CollectionsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <Container>
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            Curated{' '}
            <span className="bg-gradient-to-r from-brand-500 to-pink-500 bg-clip-text text-transparent">
              Collections
            </span>
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Explore our handpicked collections of stunning culinary artworks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { name: 'Seasonal Favorites', count: 45, emoji: '🍂' },
            { name: 'Breakfast Vibes', count: 32, emoji: '☀️' },
            { name: 'Sweet Treats', count: 58, emoji: '🍰' },
            { name: 'Healthy Choices', count: 41, emoji: '🥗' },
            { name: 'Comfort Food', count: 37, emoji: '🍲' },
            { name: 'Gourmet Delights', count: 29, emoji: '✨' },
          ].map((collection) => (
            <div
              key={collection.name}
              className="group p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all cursor-pointer"
            >
              <div className="text-4xl mb-4">{collection.emoji}</div>
              <h3 className="font-semibold text-lg text-neutral-900 dark:text-white group-hover:text-brand-500 transition-colors">
                {collection.name}
              </h3>
              <p className="text-sm text-neutral-500 mt-1">
                {collection.count} artworks
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-neutral-500">
            More collections coming soon...
          </p>
        </div>
      </Container>
    </div>
  );
}