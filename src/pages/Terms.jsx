/**
 * Terms.jsx — Terms & Conditions page
 *
 * Layout: sticky sidebar TOC (desktop) + scrollable sections (right column).
 * Content lives entirely in src/data/content.js — zero copy-paste in JSX.
 */

import { termsSections } from '../data/content';
import { BRAND } from '../utils/constants';

// ── Sub-components ───────────────────────────────────────────────────────────

/** Single terms section */
const TermsSection = ({ id, title, body }) => (
  <div id={id} className="scroll-mt-24">
    <h2 className="
      font-display text-[24px] text-dark-bg dark:text-white
      pb-3 mb-4 border-b border-light-border dark:border-dark-border
    ">
      {title}
    </h2>
    <p className="text-[15px] font-light text-dark-raised dark:text-white/50 leading-[1.8]">
      {body}
    </p>
  </div>
);

// ── Main component ───────────────────────────────────────────────────────────

const Terms = () => (
  <div className="pt-nav min-h-screen bg-light-bg dark:bg-dark-bg">

    {/* ── Page hero ───────────────────────────────────────────────── */}
    <div className="bg-light-surface dark:bg-dark-surface border-b border-light-border dark:border-dark-border py-14">
      <div className="container-custom">
        <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-green mb-4">Legal</p>
        <h1 className="font-display text-display-lg text-dark-bg dark:text-white leading-none mb-2">
          TERMS &amp; <span className="text-brand-green">CONDITIONS</span>
        </h1>
        <p className="text-[17px] font-light text-dark-raised dark:text-white/50 max-w-lg">
          Simple and straight. Read these so we're always on the same page.
        </p>
      </div>
    </div>

    {/* ── Layout ──────────────────────────────────────────────────── */}
    <section className="section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-14 items-start">

          {/* Sidebar TOC — hidden on mobile, sticky on desktop */}
          <nav className="hidden lg:block sticky top-24" aria-label="Table of contents">
            <h4 className="font-mono text-[10px] text-dark-border2 dark:text-white/25 tracking-[0.18em] uppercase mb-4">
              Contents
            </h4>
            <ul className="flex flex-col gap-2 list-none">
              {termsSections.map(({ id, title }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className="text-[13px] text-dark-raised dark:text-white/40 hover:text-brand-green transition-colors duration-200"
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Sections */}
          <div className="lg:col-span-3 flex flex-col gap-10">
            {termsSections.map((section) => (
              <TermsSection key={section.id} {...section} />
            ))}

            {/* Last updated */}
            <p className="font-mono text-[11px] text-dark-border2 dark:text-white/20 pt-6 border-t border-light-border dark:border-dark-border">
              Last updated: March {BRAND.year} · {BRAND.name} · {BRAND.location}
            </p>
          </div>

        </div>
      </div>
    </section>
  </div>
);

export default Terms;
