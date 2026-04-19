/**
 * Rebrand.jsx — The Zero One rebrand story page
 *
 * Layout:
 *   - Left: written rebrand narrative + timeline
 *   - Right: interactive 7-slide launch sequence player (sticky on desktop)
 *
 * The slide content is defined locally as SLIDES array.
 * The SlidePlayer is a self-contained sub-component with its own state.
 */

import { useState } from 'react';
import { timeline } from '../data/content';

// ── Slide content ────────────────────────────────────────────────────────────
// Each slide has a label (for the dot tooltip) and a render function.
// The render function receives no props — all values are baked in.

const SLIDES = [
  {
    label: 'Hook',
    render: () => (
      <div className="flex flex-col items-center justify-center h-full text-center gap-5">
        <p className="font-mono text-[9px] text-neutral-600 tracking-[0.2em] uppercase">
          Pay attention — this matters
        </p>
        <h2 className="font-display text-[clamp(52px,12vw,80px)] leading-none text-white">
          SOME<br />THING<br /><span className="text-brand-green">NEW</span><br />IS<br />HERE.
        </h2>
        <p className="font-body text-[11px] font-light text-neutral-600 tracking-[0.1em] uppercase">
          A message from Ibrahim
        </p>
      </div>
    ),
  },
  {
    label: 'Story',
    render: () => (
      <div className="flex flex-col items-center justify-center h-full text-center gap-5">
        <p className="font-mono text-[9px] text-brand-green tracking-[0.22em] uppercase">The story</p>
        <h2 className="font-display text-[clamp(40px,9vw,60px)] leading-none text-white">
          4 YEARS.<br />BUILT FROM<br />SCRATCH.
        </h2>
        <p className="font-body text-[13px] font-light text-neutral-500 leading-relaxed">
          Started with just a phone and a hustle.<br />
          No shop. No sign. Just <span className="text-neutral-300">trust.</span>
        </p>
        <div className="flex gap-3 w-full mt-2">
          {[['4+','Years'],['100s','Customers'],['01','Mission']].map(([n, l]) => (
            <div key={l} className="flex-1 border border-neutral-800 rounded bg-neutral-900 py-3 text-center">
              <div className="font-display text-[30px] text-brand-green leading-none">{n}</div>
              <div className="font-mono text-[9px] text-neutral-600 mt-1 uppercase tracking-wide">{l}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    label: 'The Change',
    render: () => (
      <div className="flex flex-col items-center justify-center h-full gap-3 w-full">
        <p className="font-mono text-[9px] text-brand-green tracking-[0.22em] uppercase mb-1">The change</p>

        {/* Old brand block */}
        <div className="relative w-full border border-neutral-800 rounded bg-neutral-900 py-4 text-center">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#060606] border border-neutral-800 font-mono text-[8px] text-neutral-600 px-3 py-0.5 rounded-full whitespace-nowrap">
            THEN · @ebrahimgadgets
          </span>
          <p className="font-display text-[32px] text-blue-700 leading-none line-through decoration-brand-green decoration-2">
            EBRAHIM GADGETS
          </p>
          <p className="font-mono text-[9px] text-neutral-700 mt-1">Blue · White · Busy</p>
        </div>

        {/* Arrow */}
        <div className="flex flex-col items-center gap-0">
          <div className="w-px h-8 bg-gradient-to-b from-transparent to-brand-green" />
          <div className="border-l-[5px] border-r-[5px] border-t-[8px] border-l-transparent border-r-transparent border-t-brand-green" />
        </div>

        {/* New brand block */}
        <div className="relative w-full border border-brand-green rounded bg-brand-green-10 py-4 text-center">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#060606] border border-brand-green font-mono text-[8px] text-brand-green px-3 py-0.5 rounded-full whitespace-nowrap">
            NOW · @zero.one_digitalhub
          </span>
          <p className="font-display text-[50px] leading-none">
            <span className="text-white">0</span>
            <span className="text-brand-green">1</span>
          </p>
          <p className="font-mono text-[9px] text-brand-green/60 mt-1 tracking-widest uppercase">
            Digital Hub · Black · Emerald
          </p>
        </div>

        <p className="font-body text-[12px] font-light text-neutral-600 mt-2">
          Same guy. Upgraded everything else.
        </p>
      </div>
    ),
  },
  {
    label: 'What Changed',
    render: () => (
      <div className="flex flex-col items-center justify-center h-full gap-4 w-full">
        <p className="font-mono text-[9px] text-brand-green tracking-[0.22em] uppercase">What changed. What didn't.</p>
        <h2 className="font-display text-[clamp(36px,8vw,52px)] leading-none text-white text-center">
          SAME HUSTLE.<br />NEW IDENTITY.
        </h2>
        <div className="w-full flex flex-col gap-2 mt-2">
          {[
            ['@ebrahimgadgets',  '@zero.one_digitalhub'],
            ['Blue & White',     'Black & Emerald'],
            ['Ebrahim Gadgets',  'Zero One Digital Hub'],
            ['Unregistered',     'CAC Registered ✓'],
          ].map(([old, next]) => (
            <div key={old} className="flex items-center gap-2 text-[11px]">
              <span className="flex-1 text-right text-neutral-700 line-through">{old}</span>
              <span className="text-brand-green font-mono">→</span>
              <span className="flex-1 text-neutral-400 font-medium">{next}</span>
            </div>
          ))}
          <p className="text-center font-body text-[11px] text-neutral-700 italic mt-1">
            — Quality? Never changing. —
          </p>
        </div>
      </div>
    ),
  },
  {
    label: 'Why Zero One',
    render: () => (
      <div className="flex flex-col items-start justify-center h-full gap-5 w-full">
        <p className="font-mono text-[9px] text-brand-green tracking-[0.22em] uppercase self-center">
          Why "Zero One"?
        </p>
        {[
          ['Binary code — the language everything is built on'],
          ['The aspiration — to always be number one'],
          ['Personal — Zero Fugazzi. That\'s me.'],
        ].map(([text], i) => (
          <div key={i} className="border-l-2 border-brand-green pl-4 w-full">
            <div className="font-mono text-[24px] text-brand-green leading-none mb-1">01</div>
            <p className="font-body text-[12px] font-light text-neutral-500 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    label: 'The Mark',
    render: () => (
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="font-display text-[clamp(90px,20vw,130px)] leading-none tracking-tight">
          <span className="text-white">0</span>
          <span className="text-brand-green">1</span>
        </div>
        <p className="font-body text-[10px] font-semibold tracking-[0.38em] text-neutral-700 uppercase mt-1">
          Digital Hub
        </p>
        <div className="w-8 h-0.5 bg-brand-green my-5" />
        <p className="font-body text-[11px] text-neutral-700 tracking-[0.16em] uppercase">Lagos · Nigeria</p>
        <p className="font-mono text-[9px] text-brand-green/50 mt-3 tracking-wide">
          CAC Registered · Officially in business.
        </p>
      </div>
    ),
  },
  {
    label: "We're Live",
    render: () => (
      <div className="flex flex-col items-center justify-center h-full text-center gap-4">
        <h2 className="font-display text-[clamp(48px,11vw,68px)] leading-none text-white">
          WE'RE<br /><span className="text-brand-green">LIVE.</span><br />LET'S GO.
        </h2>
        <div className="border border-brand-green bg-brand-green-10 text-brand-green font-mono text-[11px] px-5 py-2.5 rounded-sm tracking-wide">
          @zero.one_digitalhub
        </div>
        <p className="font-body text-[12px] text-neutral-600 leading-relaxed max-w-[220px]">
          Drop a 🔥 if you knew me as Ebrahim Gadgets.<br />
          Same number. New energy. Let's get it.
        </p>
        <p className="font-mono text-[12px] text-neutral-500">08144345484</p>
        <a
          href="https://wa.me/2348144345484?text=Congrats%20on%20the%20rebrand!%20%F0%9F%94%A5"
          target="_blank"
          rel="noreferrer"
          className="mt-1 bg-brand-green text-white font-semibold text-[12px] px-6 py-2.5 rounded transition-opacity hover:opacity-85"
        >
          💬 Order on WhatsApp
        </a>
      </div>
    ),
  },
];

// ── SlidePlayer ──────────────────────────────────────────────────────────────

const SlidePlayer = () => {
  const [current, setCurrent] = useState(0);
  const total = SLIDES.length;

  const goTo = (index) => setCurrent(Math.max(0, Math.min(total - 1, index)));

  const { render: SlideContent } = SLIDES[current];

  return (
    <div className="sticky top-24">
      {/* Progress bar */}
      <div className="h-0.5 bg-dark-border rounded-full overflow-hidden mb-0">
        <div
          className="h-full bg-brand-green transition-all duration-400"
          style={{ width: `${((current + 1) / total) * 100}%` }}
        />
      </div>

      {/* Slide frame — 9:16 aspect ratio */}
      <div className="
        border-x border-b border-dark-border overflow-hidden
        bg-[#060606] relative
      "
        style={{ aspectRatio: '9/16' }}
      >
        {/* Decorative glow blobs */}
        <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-brand-green opacity-[0.04] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-28 h-28 rounded-full bg-brand-green opacity-[0.04] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        {/* Slide number */}
        <p className="absolute top-4 left-4 font-mono text-[9px] text-neutral-800">
          {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </p>

        {/* Handle */}
        <p className="absolute bottom-4 right-4 font-mono text-[9px] text-brand-green/60">
          @zero.one_digitalhub
        </p>

        {/* Slide content */}
        <div className="absolute inset-0 flex flex-col px-7 py-12">
          <SlideContent />
        </div>
      </div>

      {/* Controls */}
      <div className="
        flex items-center justify-between px-4 py-3
        bg-dark-surface border border-dark-border border-t-dark-bg
      ">
        {/* Dot indicators */}
        <div className="flex gap-1.5">
          {SLIDES.map((slide, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              title={slide.label}
              className={`
                w-1.5 h-1.5 rounded-full transition-colors duration-200
                ${i === current ? 'bg-brand-green' : 'bg-dark-border2'}
              `}
            />
          ))}
        </div>

        {/* Counter */}
        <span className="font-mono text-[11px] text-neutral-600">
          {String(current + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
        </span>

        {/* Prev / Next */}
        <div className="flex gap-2">
          {['←', '→'].map((arrow, i) => (
            <button
              key={arrow}
              onClick={() => goTo(current + (i === 0 ? -1 : 1))}
              disabled={i === 0 ? current === 0 : current === total - 1}
              className="
                w-7 h-7 rounded-full flex items-center justify-center
                border border-dark-border text-neutral-600 text-[13px]
                transition-all duration-200
                hover:border-brand-green hover:text-brand-green
                disabled:opacity-15 disabled:cursor-not-allowed
              "
            >
              {arrow}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// ── Main component ───────────────────────────────────────────────────────────

const Rebrand = () => (
  <div className="pt-nav min-h-screen bg-light-bg dark:bg-dark-bg">

    {/* ── Page hero ───────────────────────────────────────────────── */}
    <div className="bg-light-surface dark:bg-dark-surface border-b border-light-border dark:border-dark-border py-14">
      <div className="container-custom">
        <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-green mb-4">
          The rebrand
        </p>
        <h1 className="font-display text-display-lg text-dark-bg dark:text-white leading-none mb-4">
          FROM <span className="text-blue-600">EBRAHIM GADGETS</span><br />
          TO <span className="text-brand-green">ZERO ONE</span>
        </h1>
        <p className="text-[17px] font-light text-dark-raised dark:text-white/50 max-w-lg">
          Four years in the making. Here's the full story of why, how, and what comes next.
        </p>
      </div>
    </div>

    {/* ── Content ─────────────────────────────────────────────────── */}
    <section className="section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Written story */}
          <div>
            <h2 className="font-display text-display-sm text-dark-bg dark:text-white leading-none mb-5">
              WHY WE <span className="text-brand-green">REBRANDED</span>
            </h2>

            {[
              "Ebrahim Gadgets was never supposed to be a brand name. It was just a WhatsApp number with a reputation attached to it. But as the business grew — more products, more customers, more trust — the name started to feel too small for what we were becoming.",
              "The rebrand wasn't about running from Ebrahim Gadgets. Everything that made it work — the honesty, the speed, the quality — stays. What changed is the identity. The name. The visual language. The ambition.",
            ].map((para, i) => (
              <p key={i} className="text-[15px] font-light text-dark-raised dark:text-white/50 leading-relaxed mb-4">
                {para}
              </p>
            ))}

            {/* Highlight box */}
            <div className="bg-brand-green-10 border-l-4 border-brand-green px-5 py-4 rounded-r-lg my-6">
              <p className="text-[15px] text-dark-bg dark:text-white leading-relaxed">
                <strong>Zero One Digital Hub</strong> is the same business, built on the same values,
                with a clearer vision of where it's going. CAC registered. Premium branding. Long-term play.
              </p>
            </div>

            <p className="text-[15px] font-light text-dark-raised dark:text-white/50 leading-relaxed mb-8">
              The name "Zero One" carries three meanings: binary code — the language of all technology;
              the aspiration to always be number one; and Zero Fugazzi — Ibrahim's personal alias and a
              promise of zero fakeness in everything we do.
            </p>

            {/* Timeline */}
            <div className="flex flex-col gap-5">
              {timeline.map(({ year, text }) => (
                <div key={year} className="pl-5 border-l-2 border-brand-green">
                  <p className="font-mono text-[11px] text-brand-green mb-1">{year}</p>
                  <p className="text-[14px] font-light text-dark-raised dark:text-white/50 leading-relaxed">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Slide player */}
          <SlidePlayer />

        </div>
      </div>
    </section>
  </div>
);

export default Rebrand;
