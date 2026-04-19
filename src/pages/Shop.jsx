/**
 * Shop.jsx — Product catalogue page
 *
 * Features:
 *   - Category filter tabs (synced with ?cat= URL param)
 *   - Live search by name or description
 *   - Empty state when no results match
 *
 * URL param: /shop?cat=phones | laptops | accessories
 */

import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import products from '../data/products';
import { CATEGORIES } from '../utils/constants';
import ProductCard from '../components/ui/ProductCard';

// ── Sub-components ───────────────────────────────────────────────────────────

/** Category filter tab button */
const CategoryTab = ({ label, value, isActive, onClick }) => (
  <button
    onClick={() => onClick(value)}
    className={`
      text-[14px] font-medium px-5 py-2 rounded-full border
      transition-all duration-200 capitalize
      ${isActive
        ? 'bg-brand-green text-white border-brand-green'
        : 'border-light-border2 dark:border-dark-border2 text-dark-raised dark:text-white/60 hover:border-brand-green hover:text-brand-green'
      }
    `}
  >
    {label}
  </button>
);

/** Shown when no products match the current filters */
const EmptyState = () => (
  <div className="col-span-full flex flex-col items-center justify-center py-24 text-center gap-4">
    <span className="text-5xl">🔍</span>
    <p className="text-[15px] text-dark-border2 dark:text-white/30">
      No products found. Try a different search or category.
    </p>
  </div>
);

// ── Main component ───────────────────────────────────────────────────────────

const Shop = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sync category filter from URL on mount and when URL changes
  useEffect(() => {
    const cat = searchParams.get('cat');
    const isValid = CATEGORIES.some((c) => c.value === cat);
    setActiveCategory(isValid ? cat : 'all');
  }, [searchParams]);

  const handleCategoryChange = (value) => {
    setActiveCategory(value);
    // Keep the URL in sync so users can share filtered links
    value === 'all' ? setSearchParams({}) : setSearchParams({ cat: value });
  };

  // Filter products by category AND search query
  const filtered = products.filter((p) => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      !query ||
      p.name.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.model.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-nav min-h-screen bg-light-bg dark:bg-dark-bg">

      {/* ── Page header ─────────────────────────────────────────── */}
      <div className="bg-light-surface dark:bg-dark-surface border-b border-light-border dark:border-dark-border py-14">
        <div className="container-custom">
          <h1 className="font-display text-display-lg text-dark-bg dark:text-white leading-none mb-2">
            THE <span className="text-brand-green">SHOP</span>
          </h1>
          <p className="text-[15px] font-light text-dark-raised dark:text-white/50">
            Phones · Laptops · Accessories — new, UK used, foreign used. Always genuine.
          </p>
        </div>
      </div>

      <div className="container-custom py-8 pb-20">

        {/* ── Controls row ────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">

          {/* Category tabs */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map(({ value, label }) => (
              <CategoryTab
                key={value}
                value={value}
                label={label}
                isActive={activeCategory === value}
                onClick={handleCategoryChange}
              />
            ))}
          </div>

          {/* Search input */}
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="
              w-full sm:w-56 px-4 py-2.5 rounded-md text-[14px]
              bg-light-surface dark:bg-dark-surface
              border border-light-border dark:border-dark-border
              text-dark-bg dark:text-white
              placeholder:text-dark-border2 dark:placeholder:text-white/25
              outline-none focus:border-brand-green
              transition-colors duration-200
            "
          />
        </div>

        {/* Results count */}
        <p className="font-mono text-[11px] text-dark-border2 dark:text-white/25 mb-6">
          {filtered.length} product{filtered.length !== 1 ? 's' : ''} found
        </p>

        {/* ── Product grid ────────────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.length > 0
            ? filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            : <EmptyState />
          }
        </div>
      </div>
    </div>
  );
};

export default Shop;
