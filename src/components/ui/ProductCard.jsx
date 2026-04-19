/**
 * ProductCard.jsx
 *
 * Displays a product with real image, stock status,
 * badge, price, and WhatsApp order button.
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { waLink, BADGE_COLORS } from '../../utils/constants';

const FALLBACK_EMOJI = {
  phones:      '📱',
  laptops:     '💻',
  accessories: '🎧',
};

const ProductCard = ({ product }) => {
  const { name, model, price, badge, description, image, category, inStock, id } = product;
  const [imgError, setImgError] = useState(false);

  const orderMessage = `Hi! I'm interested in the ${name} (${model}) — ${price}. Is it available?`;

  return (
    <article className={`card card-hover flex flex-col overflow-hidden ${!inStock ? 'opacity-60' : ''}`}>

      {/* ── Image area ──────────────────────────────────────────── */}
      <div className="relative bg-light-raised dark:bg-dark-raised h-48 overflow-hidden">
        {image && !imgError ? (
          <img
            src={image}
            alt={name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-6xl">
            {FALLBACK_EMOJI[category] || '📦'}
          </div>
        )}

        {badge && (
          <span className={`badge absolute top-3 left-3 ${BADGE_COLORS[badge] || 'bg-brand-green'}`}>
            {badge}
          </span>
        )}

        {!inStock && (
          <div className="absolute inset-0 bg-dark-bg/70 flex items-center justify-center">
            <span className="font-mono text-[11px] tracking-widest uppercase text-white border border-white/30 px-3 py-1.5 rounded">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* ── Card body ────────────────────────────────────────────── */}
      <div className="p-5 flex flex-col flex-1 gap-2">
        <h3 className="font-semibold text-[15px] text-dark-bg dark:text-white">
          {name}
        </h3>
        <p className="font-mono text-[11px] tracking-wide text-dark-border2 dark:text-white/30">
          {model}
        </p>
        <p className="text-[13px] font-light text-dark-raised dark:text-white/50 leading-relaxed flex-1">
          {description}
        </p>

        {/* ── Price + Button ───────────────────────────────────── */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-light-border dark:border-dark-border">
          <span className="font-display text-[22px] text-brand-green">
            {price}
          </span>

          {inStock ? (
            
         <a href={waLink(orderMessage)} 
          target="_blank" 
          rel="noreferrer" 
          className="text-brand-green border border-brand-green bg-brand-green-10 text-[13px] font-semibold px-3 py-2 rounded-md transition-all duration-200 hover:bg-brand-green hover:text-white whitespace-nowrap">
          💬 Order
        </a>
          ) : (
            <span className="text-[12px] font-mono text-dark-border2 dark:text-white/25">
              Unavailable
            </span>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProductCard;