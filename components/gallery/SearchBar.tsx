'use client';

// =============================================================================
// SEARCH BAR COMPONENT
// =============================================================================
// Description: Search input with suggestions and keyboard navigation
// =============================================================================

import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, Clock, TrendingUp, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { Category, SearchSuggestion } from '@/types';

// =============================================================================
// TYPES
// =============================================================================

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: (query: string) => void;
  suggestions?: SearchSuggestion[];
  recentSearches?: string[];
  trendingSearches?: string[];
  isLoading?: boolean;
  placeholder?: string;
  className?: string;
  autoFocus?: boolean;
}

// =============================================================================
// COMPONENT
// =============================================================================

export function SearchBar({
  value,
  onChange,
  onSearch,
  suggestions = [],
  recentSearches = [],
  trendingSearches = [],
  isLoading = false,
  placeholder = 'Search artworks...',
  className,
  autoFocus = false,
}: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const showDropdown = isFocused && (value.length > 0 || recentSearches.length > 0);

  // ===========================================================================
  // HANDLERS
  // ===========================================================================

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (value.trim()) {
        onSearch(value.trim());
        inputRef.current?.blur();
      }
    },
    [value, onSearch]
  );

  const handleClear = useCallback(() => {
    onChange('');
    inputRef.current?.focus();
  }, [onChange]);

  const handleSuggestionClick = useCallback(
    (suggestion: string) => {
      onChange(suggestion);
      onSearch(suggestion);
      inputRef.current?.blur();
    },
    [onChange, onSearch]
  );

  // ===========================================================================
  // KEYBOARD NAVIGATION
  // ===========================================================================

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const allItems = [...suggestions.map((s) => s.label), ...recentSearches];
      const maxIndex = allItems.length - 1;

      switch (e.key) {
        case 'ArrowDown':
          e.preventDefault();
          setSelectedIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
          break;
        case 'ArrowUp':
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
          break;
        case 'Enter':
          if (selectedIndex >= 0 && allItems[selectedIndex]) {
            e.preventDefault();
            handleSuggestionClick(allItems[selectedIndex]);
          }
          break;
        case 'Escape':
          inputRef.current?.blur();
          break;
      }
    },
    [suggestions, recentSearches, selectedIndex, handleSuggestionClick]
  );

  // Reset selected index when value changes
  useEffect(() => {
    setSelectedIndex(-1);
  }, [value]);

  // ===========================================================================
  // RENDER
  // ===========================================================================

  return (
    <div className={cn('relative', className)}>
      <form onSubmit={handleSubmit}>
        <div
          className={cn(
            'relative flex items-center',
            'bg-neutral-100 dark:bg-neutral-800',
            'rounded-2xl',
            'transition-all duration-200',
            isFocused && 'ring-2 ring-brand-500 bg-white dark:bg-neutral-900'
          )}
        >
          {/* Search Icon */}
          <div className="absolute left-4 text-neutral-400">
            {isLoading ? (
              <div className="w-5 h-5 border-2 border-neutral-300 border-t-brand-500 rounded-full animate-spin" />
            ) : (
              <Search className="w-5 h-5" />
            )}
          </div>

          {/* Input */}
          <input
            ref={inputRef}
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setTimeout(() => setIsFocused(false), 200)}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            autoFocus={autoFocus}
            className={cn(
              'w-full py-3 pl-12 pr-10',
              'bg-transparent',
              'text-neutral-900 dark:text-white',
              'placeholder:text-neutral-400',
              'focus:outline-none',
              'text-sm'
            )}
          />

          {/* Clear Button */}
          <AnimatePresence>
            {value && (
              <motion.button
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                type="button"
                onClick={handleClear}
                className={cn(
                  'absolute right-3',
                  'p-1 rounded-full',
                  'text-neutral-400 hover:text-neutral-600',
                  'hover:bg-neutral-200 dark:hover:bg-neutral-700',
                  'transition-colors'
                )}
              >
                <X className="w-4 h-4" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </form>

      {/* Dropdown */}
      <AnimatePresence>
        {showDropdown && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className={cn(
              'absolute top-full left-0 right-0 mt-2 z-50',
              'bg-white dark:bg-neutral-900',
              'rounded-2xl',
              'border border-neutral-200 dark:border-neutral-800',
              'shadow-xl',
              'overflow-hidden'
            )}
          >
            {/* Suggestions */}
            {value && suggestions.length > 0 && (
              <div className="p-2">
                <p className="px-3 py-2 text-xs font-medium text-neutral-500 uppercase">
                  Suggestions
                </p>
                {suggestions.map((suggestion, index) => (
                  <button
                    key={suggestion.id}
                    onClick={() => handleSuggestionClick(suggestion.label)}
                    className={cn(
                      'w-full flex items-center gap-3 px-3 py-2 rounded-lg',
                      'text-left text-sm',
                      'transition-colors',
                      selectedIndex === index
                        ? 'bg-neutral-100 dark:bg-neutral-800'
                        : 'hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
                    )}
                  >
                    <Search className="w-4 h-4 text-neutral-400" />
                    <span className="flex-1 text-neutral-900 dark:text-white">
                      {suggestion.label}
                    </span>
                    {suggestion.imageCount && (
                      <span className="text-xs text-neutral-400">
                        {suggestion.imageCount} images
                      </span>
                    )}
                    <ArrowRight className="w-4 h-4 text-neutral-300" />
                  </button>
                ))}
              </div>
            )}

            {/* Recent Searches */}
            {!value && recentSearches.length > 0 && (
              <div className="p-2">
                <p className="px-3 py-2 text-xs font-medium text-neutral-500 uppercase flex items-center gap-2">
                  <Clock className="w-3 h-3" />
                  Recent Searches
                </p>
                {recentSearches.map((search, index) => (
                  <button
                    key={search}
                    onClick={() => handleSuggestionClick(search)}
                    className={cn(
                      'w-full flex items-center gap-3 px-3 py-2 rounded-lg',
                      'text-left text-sm',
                      'transition-colors',
                      selectedIndex === index
                        ? 'bg-neutral-100 dark:bg-neutral-800'
                        : 'hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
                    )}
                  >
                    <Clock className="w-4 h-4 text-neutral-400" />
                    <span className="flex-1 text-neutral-900 dark:text-white">
                      {search}
                    </span>
                  </button>
                ))}
              </div>
            )}

            {/* Trending */}
            {!value && trendingSearches.length > 0 && (
              <div className="p-2 border-t border-neutral-100 dark:border-neutral-800">
                <p className="px-3 py-2 text-xs font-medium text-neutral-500 uppercase flex items-center gap-2">
                  <TrendingUp className="w-3 h-3" />
                  Trending
                </p>
                <div className="flex flex-wrap gap-2 px-3 py-2">
                  {trendingSearches.map((search) => (
                    <button
                      key={search}
                      onClick={() => handleSuggestionClick(search)}
                      className={cn(
                        'px-3 py-1.5 rounded-full',
                        'bg-neutral-100 dark:bg-neutral-800',
                        'text-sm text-neutral-700 dark:text-neutral-300',
                        'hover:bg-neutral-200 dark:hover:bg-neutral-700',
                        'transition-colors'
                      )}
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// =============================================================================
// EXPORTS
// =============================================================================

export default SearchBar;