/**
 * Blog.jsx — Article listing + inline article reader
 *
 * State machine:
 *   selectedPost === null  →  show the grid of blog cards
 *   selectedPost !== null  →  show the full article view
 *
 * No extra routing needed — article content is embedded in data/content.js.
 * If the blog grows large, migrate each post to its own route.
 */

import { useState } from 'react';
import { blogPosts } from '../data/content';
import { waLink } from '../utils/constants';
import Button from '../components/ui/Button';
import SectionHeader from '../components/ui/SectionHeader';

// ── Sub-components ───────────────────────────────────────────────────────────

/** Card shown in the grid view */
const BlogCard = ({ post, onClick }) => (
  <article
    onClick={() => onClick(post)}
    className="card card-hover p-7 flex flex-col cursor-pointer"
  >
    <p className="font-mono text-[10px] text-brand-green tracking-[0.14em] uppercase mb-3">
      {post.date}
    </p>
    <h2 className="font-semibold text-[17px] text-dark-bg dark:text-white leading-snug mb-3 flex-1">
      {post.title}
    </h2>
    <p className="text-[14px] font-light text-dark-raised dark:text-white/50 leading-relaxed mb-5">
      {post.excerpt}
    </p>
    <div className="flex items-center justify-between pt-4 border-t border-light-border dark:border-dark-border">
      <span className="font-mono text-[11px] text-dark-border2 dark:text-white/25">
        {post.readTime}
      </span>
      <span className="text-brand-green text-lg">→</span>
    </div>
  </article>
);

/** Full article view */
const ArticleView = ({ post, onBack }) => (
  <div className="max-w-2xl mx-auto py-12 pb-20">

    {/* Back button */}
    <button
      onClick={onBack}
      className="
        inline-flex items-center gap-2 text-[14px]
        text-dark-border2 dark:text-white/30
        hover:text-brand-green transition-colors duration-200
        mb-8
      "
    >
      ← Back to Blog
    </button>

    {/* Meta */}
    <p className="font-mono text-[10px] text-brand-green tracking-[0.14em] uppercase mb-4">
      {post.date} · {post.readTime}
    </p>

    <h1 className="font-display text-display-md text-dark-bg dark:text-white leading-tight mb-6">
      {post.title}
    </h1>

    <p className="font-mono text-[11px] text-dark-border2 dark:text-white/25 mb-8">
      By Ibrahim — Zero One Digital Hub
    </p>

    {/* Green divider */}
    <div className="w-10 h-0.5 bg-brand-green mb-8" />

    {/* Article content — each string in the array is a paragraph */}
    <div className="flex flex-col gap-5">
      {post.content.map((paragraph, index) => {
        // Convert **bold** markdown to <strong> tags
        const html = paragraph.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
        return (
          <p
            key={index}
            className="text-[16px] font-light text-dark-raised dark:text-white/60 leading-[1.85]"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      })}
    </div>

    {/* End-of-article CTA */}
    <div className="bg-brand-green-10 border border-brand-green/25 rounded-xl p-7 mt-10 text-center">
      <p className="text-[15px] text-dark-raised dark:text-white/50 mb-5">
        Looking to buy or sell a device? We're one message away.
      </p>
      <Button href={waLink('Hi! I read your blog and want to make an enquiry.')} external>
        💬 Chat on WhatsApp
      </Button>
    </div>
  </div>
);

// ── Main component ───────────────────────────────────────────────────────────

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="pt-nav min-h-screen bg-light-bg dark:bg-dark-bg">

      {/* Page hero — always visible */}
      <div className="bg-light-surface dark:bg-dark-surface border-b border-light-border dark:border-dark-border py-14">
        <div className="container-custom">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-green mb-4">
            Knowledge base
          </p>
          <h1 className="font-display text-display-lg text-dark-bg dark:text-white leading-none mb-2">
            THE <span className="text-brand-green">BLOG</span>
          </h1>
          <p className="text-[17px] font-light text-dark-raised dark:text-white/50">
            Gadget guides, buying tips, and knowledge to help you make smarter choices.
          </p>
        </div>
      </div>

      <div className="container-custom">
        {selectedPost ? (
          /* Article reader */
          <ArticleView
            post={selectedPost}
            onBack={() => setSelectedPost(null)}
          />
        ) : (
          /* Blog grid */
          <div className="py-12 pb-20">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  onClick={setSelectedPost}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;
