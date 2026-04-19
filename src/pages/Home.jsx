/**
 * Home.jsx — Landing page
 *
 * Sections (in order):
 *   1. Hero           — headline, tagline, CTAs, stats
 *   2. Categories     — shop by category cards
 *   3. Why Choose Us  — trust signals
 *   4. Featured       — first 6 products
 *   5. Reviews        — customer testimonials
 *   6. CTA Banner     — final WhatsApp call-to-action
 */

import { Link } from 'react-router-dom';
import products from '../data/products';
import { reviews } from '../data/content';
import ProductCard from '../components/ui/ProductCard';
import SectionHeader from '../components/ui/SectionHeader';
import Button from '../components/ui/Button';
import { waLink, BRAND } from '../utils/constants';

// ── Static data local to this page ──────────────────────────────────────────

const CATEGORIES = [
  { icon: '📱', label: 'Phones',           desc: 'iPhones, Samsung, Tecno & more', slug: 'phones'      },
  { icon: '💻', label: 'Laptops',          desc: 'MacBooks, Dell, HP, ASUS',       slug: 'laptops'     },
  { icon: '🎧', label: 'Accessories',      desc: 'Chargers, earbuds, speakers',    slug: 'accessories' },
  { icon: '🔧', label: 'Digital Services', desc: 'Screen repair & diagnostics',    slug: 'services'    },
];

const WHY_US = [
  { icon: '✅', title: 'Trustworthy Seller',  desc: '4+ years of honest dealing. Our reputation is our business.'         },
  { icon: '⚡', title: 'Fast Delivery',       desc: 'Same day Lagos. 1–3 days nationwide with courier tracking.'           },
  { icon: '💎', title: 'Genuine Products',    desc: 'Every device is tested and graded honestly. No fake parts.'           },
  { icon: '💰', title: 'Great Pricing',       desc: 'Competitive rates, no hidden charges, bulk discounts available.'      },
  { icon: '🛡️', title: 'Warranty Coverage',  desc: '30-day fault warranty on all UK used and foreign used devices.'       },
  { icon: '💬', title: 'Always Responsive',   desc: 'We respond fast on WhatsApp — no ghosting, ever.'                    },
];

const STATS = [
  { value: '4+',   label: 'Years in business'   },
  { value: '500+', label: 'Happy customers'      },
  { value: '100%', label: 'Genuine products'     },
  { value: '01',   label: 'Mission: your trust'  },
];

// ── Component ────────────────────────────────────────────────────────────────

const Home = () => {
  // Show only the first 6 products as "featured"
  const featured = products.slice(0, 6);

  return (
    <div className="pt-nav">

      {/* ── 1. HERO ───────────────────────────────────────────────── */}
    {/* ── 1. HERO ───────────────────────────────────────────────── */}
<section className="
  relative min-h-screen flex items-center overflow-hidden
  bg-light-bg dark:bg-dark-bg
">
  {/* Decorative backgrounds */}
  <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-100 pointer-events-none" />
  <div className="absolute inset-0 bg-hero-glow pointer-events-none" />

  <div className="container-custom relative z-10 py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

      {/* ── LEFT: Text content ──────────────────────────────── */}
      <div className="animate-fade-up">

        {/* Live badge */}
        <div className="
          inline-flex items-center gap-2 mb-7
          bg-brand-green-10 border border-brand-green/30
          text-brand-green font-mono text-[11px] tracking-[0.16em] uppercase
          px-4 py-1.5 rounded-full
        ">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse-dot" />
          Lagos, Nigeria · CAC Registered
        </div>

        {/* Main headline */}
        <h1 className="
          font-display text-display-xl leading-none tracking-wide mb-6
          text-dark-bg dark:text-white
        ">
          ZERO ONE<br />
          <span className="text-brand-green">DIGITAL HUB</span>
        </h1>

        <p className="text-lg font-light text-dark-raised dark:text-white/60 leading-relaxed mb-9 max-w-lg">
          <strong className="text-dark-bg dark:text-white font-medium">{BRAND.tagline}</strong>
          <br />
          Your most trusted plug for phones, laptops & accessories in Lagos.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3">
          <Button href={waLink()} external>
            💬 WhatsApp Order
          </Button>
          <Button variant="outline" href="/shop">
            Browse Shop
          </Button>
        </div>

        {/* Stats row */}
        <div className="
          flex flex-wrap gap-8 mt-14 pt-8
          border-t border-light-border dark:border-dark-border
        ">
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <div className="font-display text-3xl text-brand-green">{value}</div>
              <div className="text-[13px] text-dark-border2 dark:text-white/30 mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── RIGHT: Device showcase ──────────────────────────── */}
      <div className="hidden lg:flex items-center justify-center relative h-[580px]">

        {/* Glow behind devices */}
        <div className="
          absolute w-72 h-72 rounded-full
          bg-brand-green opacity-10 blur-3xl
          top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          pointer-events-none
        " />

        {/* ── Laptop (centre-back) ── */}
        <div className="
          absolute top-1/2 left-1/2
          -translate-x-1/2 -translate-y-[55%]
          animate-[float-slow_6s_ease-in-out_infinite]
        "
          style={{ animation: 'floatSlow 6s ease-in-out infinite' }}
        >
          {/* Screen */}
          <div className="
            w-64 h-40 rounded-t-xl border-[3px]
            border-dark-border2 dark:border-white/20
            bg-dark-surface dark:bg-dark-raised
            flex items-center justify-center
            shadow-2xl overflow-hidden relative
          ">
            {/* Fake screen content */}
            <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg opacity-90" />
            <div className="relative z-10 text-center px-4">
              <div className="font-display text-4xl">
                <span className="text-white">0</span>
                <span className="text-brand-green">1</span>
              </div>
              <div className="font-mono text-[8px] text-brand-green/60 tracking-widest mt-1 uppercase">
                Digital Hub
              </div>
              {/* Fake UI bars */}
              <div className="flex flex-col gap-1 mt-3">
                <div className="h-1 w-24 bg-brand-green/20 rounded-full mx-auto" />
                <div className="h-1 w-16 bg-brand-green/10 rounded-full mx-auto" />
                <div className="h-1 w-20 bg-brand-green/10 rounded-full mx-auto" />
              </div>
            </div>
          </div>
          {/* Base */}
          <div className="
            w-64 h-3 rounded-b-sm
            bg-dark-border dark:bg-white/10
            shadow-lg
          " />
          {/* Hinge line */}
          <div className="w-32 h-1 bg-dark-border2 dark:bg-white/5 rounded-full mx-auto" />
        </div>

        {/* ── Phone left ── */}
        <div
          className="absolute left-8 top-1/2 -translate-y-1/3"
          style={{ animation: 'floatLeft 5s ease-in-out infinite' }}
        >
          <div className="
            w-24 h-44 rounded-2xl border-[2.5px]
            border-dark-border2 dark:border-white/20
            bg-dark-surface dark:bg-dark-raised
            shadow-2xl overflow-hidden relative
            flex flex-col items-center justify-center gap-2
          ">
            {/* Notch */}
            <div className="absolute top-2 w-8 h-1.5 bg-dark-border2 dark:bg-white/10 rounded-full" />
            <span className="text-2xl mt-4">📱</span>
            <div className="flex flex-col gap-1 px-3 w-full">
              <div className="h-1 w-full bg-brand-green/20 rounded-full" />
              <div className="h-1 w-3/4 bg-white/5 rounded-full" />
            </div>
            {/* Home bar */}
            <div className="absolute bottom-2 w-8 h-1 bg-dark-border2 dark:bg-white/10 rounded-full" />
          </div>
        </div>

        {/* ── Phone right ── */}
        <div
          className="absolute right-8 top-1/2 -translate-y-1/4"
          style={{ animation: 'floatRight 4.5s ease-in-out infinite 0.5s' }}
        >
          <div className="
            w-24 h-44 rounded-2xl border-[2.5px]
            border-brand-green/40
            bg-dark-surface dark:bg-dark-raised
            shadow-[0_0_24px_rgba(31,173,92,0.15)]
            overflow-hidden relative
            flex flex-col items-center justify-center gap-2
          ">
            <div className="absolute top-2 w-8 h-1.5 bg-dark-border2 dark:bg-white/10 rounded-full" />
            <span className="text-2xl mt-4">📱</span>
            <div className="flex flex-col gap-1 px-3 w-full">
              <div className="h-1 w-full bg-brand-green/30 rounded-full" />
              <div className="h-1 w-2/3 bg-brand-green/10 rounded-full" />
            </div>
            <div className="absolute bottom-2 w-8 h-1 bg-dark-border2 dark:bg-white/10 rounded-full" />
          </div>
        </div>

        {/* ── Floating accessory icons ── */}
        {[
          { emoji: '🎧', top: '12%',  left: '20%', delay: '0s',    size: 'text-2xl' },
          { emoji: '💻', top: '15%',  right: '18%', delay: '0.8s', size: 'text-xl'  },
          { emoji: '🔌', bottom: '20%', left: '15%', delay: '1.2s', size: 'text-lg' },
          { emoji: '🔊', bottom: '18%', right: '12%', delay: '0.4s', size: 'text-xl' },
          { emoji: '⌚', top: '40%',  left: '5%',   delay: '1.6s', size: 'text-lg'  },
          { emoji: '🖥️', top: '38%', right: '4%',  delay: '0.6s', size: 'text-lg'  },
        ].map(({ emoji, top, left, right, bottom, delay, size }) => (
          <div
            key={emoji}
            className={`
              absolute ${size}
              w-10 h-10 rounded-xl
              bg-light-surface dark:bg-dark-surface
              border border-light-border dark:border-dark-border
              flex items-center justify-center
              shadow-lg
            `}
            style={{
              top, left, right, bottom,
              animation: `floatIcon 4s ease-in-out infinite`,
              animationDelay: delay,
            }}
          >
            {emoji}
          </div>
        ))}

        {/* ── Price tag floating badges ── */}
        <div
          className="
            absolute bottom-16 left-12
            bg-light-surface dark:bg-dark-surface
            border border-brand-green/30
            rounded-xl px-3 py-2 shadow-xl
          "
          style={{ animation: 'floatIcon 5s ease-in-out infinite 1s' }}
        >
          <p className="font-mono text-[9px] text-brand-green uppercase tracking-wide">iPhone 15 Pro</p>
          <p className="font-display text-[16px] text-dark-bg dark:text-white leading-none mt-0.5">₦850,000</p>
        </div>

        <div
          className="
            absolute top-16 right-10
            bg-light-surface dark:bg-dark-surface
            border border-brand-green/30
            rounded-xl px-3 py-2 shadow-xl
          "
          style={{ animation: 'floatIcon 4.5s ease-in-out infinite 0.3s' }}
        >
          <p className="font-mono text-[9px] text-brand-green uppercase tracking-wide">MacBook Air M2</p>
          <p className="font-display text-[16px] text-dark-bg dark:text-white leading-none mt-0.5">₦620,000</p>
        </div>

      </div>
      {/* ── End device showcase ── */}

    </div>
  </div>
</section>

      {/* ── 2. CATEGORIES ─────────────────────────────────────────── */}
      <section className="section bg-light-bg dark:bg-dark-bg">
        <div className="container-custom">
          <SectionHeader
            tag="What we sell"
            title={<>Shop by <span className="text-brand-green">Category</span></>}
            subtitle="Everything you need. Nothing you don't."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CATEGORIES.map(({ icon, label, desc, slug }) => (
              <Link
                key={slug}
                to={`/shop?cat=${slug}`}
                className="card card-hover p-6 text-center block"
              >
                <div className="text-4xl mb-3">{icon}</div>
                <div className="font-semibold text-[15px] text-dark-bg dark:text-white mb-1">{label}</div>
                <div className="text-[13px] text-dark-border2 dark:text-white/30">{desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. WHY CHOOSE US ──────────────────────────────────────── */}
      <section className="section bg-light-raised dark:bg-dark-surface">
        <div className="container-custom">
          <SectionHeader
            tag="Why Zero One"
            title={<>Why <span className="text-brand-green">Choose Us</span></>}
            subtitle="We don't just sell devices — we build trust."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY_US.map(({ icon, title, desc }) => (
              <div key={title} className="card card-hover p-6">
                <div className="text-3xl mb-3">{icon}</div>
                <h3 className="font-semibold text-[15px] text-dark-bg dark:text-white mb-2">{title}</h3>
                <p className="text-[14px] font-light text-dark-raised dark:text-white/50 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. FEATURED PRODUCTS ──────────────────────────────────── */}
      <section className="section bg-light-bg dark:bg-dark-bg">
        <div className="container-custom">
          <SectionHeader
            tag="Featured"
            title={<>Hot <span className="text-brand-green">Right Now</span></>}
            subtitle="Our most popular items this week."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Button variant="outline" href="/shop">
              View All Products →
            </Button>
          </div>
        </div>
      </section>

      {/* ── 5. REVIEWS ────────────────────────────────────────────── */}
      <section className="section bg-light-raised dark:bg-dark-surface">
        <div className="container-custom">
          <SectionHeader
            tag="Social proof"
            title={<>What <span className="text-brand-green">Customers Say</span></>}
            subtitle="Real people. Real orders. Real results."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map(({ id, name, text, rating }) => (
              <div key={id} className="card p-6">
                <div className="text-yellow-400 text-sm mb-3">{'★'.repeat(rating)}</div>
                <p className="text-[14px] font-light text-dark-raised dark:text-white/50 leading-relaxed italic mb-4">
                  "{text}"
                </p>
                <p className="font-mono text-[12px] text-brand-green">— {name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. CTA BANNER ─────────────────────────────────────────── */}
      <section className="section bg-light-bg dark:bg-dark-bg">
        <div className="container-custom">
          <div className="
            bg-brand-green-10 border border-brand-green/25
            rounded-2xl px-8 py-14 text-center
          ">
            <h2 className="font-display text-display-md text-dark-bg dark:text-white mb-3">
              READY TO <span className="text-brand-green">ORDER?</span>
            </h2>
            <p className="text-base font-light text-dark-raised dark:text-white/50 mb-7">
              Drop us a message on WhatsApp and we'll get you sorted in minutes.
            </p>
            <Button href={waLink('Hi! I want to place an order from Zero One Digital Hub.')} external>
              💬 Chat with us on WhatsApp
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
