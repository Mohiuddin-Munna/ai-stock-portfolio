import { Container } from '@/components/ui';

export const metadata = {
  title: 'About Us',
  description: 'Learn about Culinary Canvas and our AI-generated food photography.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-brand-500 to-pink-500 bg-clip-text text-transparent">
              Culinary Canvas
            </span>
          </h1>
          
          <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-8">
            Culinary Canvas is a premium portfolio showcasing breathtaking AI-generated 
            food photography. Our collection features stunning culinary artworks perfect 
            for creative professionals, designers, and food enthusiasts.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900">
              <div className="text-4xl mb-3">🎨</div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                AI-Generated Art
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Created using cutting-edge AI technology
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900">
              <div className="text-4xl mb-3">📸</div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                Premium Quality
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                High-resolution images for professional use
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-900">
              <div className="text-4xl mb-3">🍽️</div>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-2">
                Curated Collection
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Carefully selected culinary artworks
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}