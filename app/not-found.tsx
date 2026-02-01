import Link from 'next/link';
import { Home, ArrowLeft, Search } from 'lucide-react';
import { Button, Container } from '@/components/ui';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Container className="text-center">
        {/* 404 Text */}
        <div className="relative">
          <h1 className="font-display text-[120px] font-bold leading-none text-neutral-100 dark:text-neutral-800 md:text-[180px]">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="font-display text-2xl font-bold text-neutral-900 dark:text-white md:text-3xl">
                Page Not Found
              </p>
              <p className="mt-2 text-neutral-600 dark:text-neutral-400">
                The page you&apos;re looking for doesn&apos;t exist or has been moved.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild variant="primary" leftIcon={<Home className="h-4 w-4" />}>
            <Link href="/">Go Home</Link>
          </Button>
          <Button asChild variant="outline" leftIcon={<ArrowLeft className="h-4 w-4" />}>
            <Link href="javascript:history.back()">Go Back</Link>
          </Button>
          <Button asChild variant="ghost" leftIcon={<Search className="h-4 w-4" />}>
            <Link href="/search">Search</Link>
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="mt-12">
          <p className="text-sm text-neutral-500">Popular categories:</p>
          <div className="mt-3 flex flex-wrap justify-center gap-2">
            {['Fresh Produce', 'Beverages', 'Desserts', 'Main Courses'].map(
              (category) => (
                <Link
                  key={category}
                  href={`/category/${category.toLowerCase().replace(' ', '-')}`}
                  className="rounded-full bg-neutral-100 px-4 py-2 text-sm text-neutral-700 transition-colors hover:bg-neutral-200 dark:bg-neutral-800 dark:text-neutral-300 dark:hover:bg-neutral-700"
                >
                  {category}
                </Link>
              )
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}