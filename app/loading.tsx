import { Container } from '@/components/ui';

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Container className="text-center">
        {/* Animated Logo/Spinner */}
        <div className="relative mx-auto h-16 w-16">
          {/* Outer Ring */}
          <div className="absolute inset-0 animate-spin rounded-full border-4 border-neutral-200 border-t-brand-500 dark:border-neutral-700 dark:border-t-brand-400" />
          
          {/* Inner Logo */}
          <div className="absolute inset-2 flex items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-pink-500">
            <span className="font-display text-lg font-bold text-white">C</span>
          </div>
        </div>

        {/* Loading Text */}
        <p className="mt-6 text-sm text-neutral-500 dark:text-neutral-400">
          Loading...
        </p>
      </Container>
    </div>
  );
}