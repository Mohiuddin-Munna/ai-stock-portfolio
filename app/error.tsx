'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, RefreshCw, Home } from 'lucide-react';
import { Button, Container } from '@/components/ui';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Container className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Error Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20"
          >
            <AlertTriangle className="h-12 w-12 text-red-500" />
          </motion.div>

          {/* Error Message */}
          <h1 className="font-display text-3xl font-bold text-neutral-900 dark:text-white md:text-4xl">
            Something went wrong!
          </h1>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
            We apologize for the inconvenience. An unexpected error has occurred.
          </p>

          {/* Error Details (Development) */}
          {process.env.NODE_ENV === 'development' && (
            <div className="mt-6 rounded-lg bg-neutral-100 p-4 text-left dark:bg-neutral-800">
              <p className="font-mono text-sm text-red-500">
                {error.message}
              </p>
              {error.digest && (
                <p className="mt-2 font-mono text-xs text-neutral-500">
                  Error ID: {error.digest}
                </p>
              )}
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              onClick={reset}
              variant="primary"
              leftIcon={<RefreshCw className="h-4 w-4" />}
            >
              Try Again
            </Button>
            <Button
              onClick={() => (window.location.href = '/')}
              variant="outline"
              leftIcon={<Home className="h-4 w-4" />}
            >
              Go Home
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}