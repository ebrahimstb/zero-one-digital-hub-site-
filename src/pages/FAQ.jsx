/**
 * FAQ.jsx — Accordion-style frequently asked questions
 *
 * State: tracks which FAQ item is currently open (by id).
 * Clicking an open item closes it (accordion behaviour).
 */

import { useState } from 'react';
import { faqs } from '../data/content';
import FAQItem from '../components/ui/FAQItem';
import Button from '../components/ui/Button';
import { waLink } from '../utils/constants';

const FAQ = () => {
  // null means all items are closed
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <div className="pt-nav min-h-screen bg-light-bg dark:bg-dark-bg">

      {/* ── Page hero ───────────────────────────────────────────────── */}
      <div className="bg-light-surface dark:bg-dark-surface border-b border-light-border dark:border-dark-border py-14">
        <div className="container-custom">
          <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-green mb-4">FAQ</p>
          <h1 className="font-display text-display-lg text-dark-bg dark:text-white leading-none mb-2">
            GOT <span className="text-brand-green">QUESTIONS?</span>
          </h1>
          <p className="text-[17px] font-light text-dark-raised dark:text-white/50">
            We've answered the ones we get asked the most.
          </p>
        </div>
      </div>

      {/* ── Content ─────────────────────────────────────────────────── */}
      <section className="section">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">

            {/* Sidebar — sticky on desktop */}
            <div className="lg:sticky lg:top-24">
              <h2 className="font-display text-display-sm text-dark-bg dark:text-white leading-none mb-4">
                YOUR QUESTIONS,<br />
                <span className="text-brand-green">ANSWERED.</span>
              </h2>
              <p className="text-[14px] font-light text-dark-raised dark:text-white/50 leading-relaxed mb-6">
                Can't find what you're looking for? Hit us on WhatsApp and we'll
                respond fast.
              </p>
              <Button href={waLink('Hi! I have a question for Zero One Digital Hub.')} external>
                💬 Ask on WhatsApp
              </Button>
            </div>

            {/* Accordion list */}
            <div className="lg:col-span-2 flex flex-col gap-3">
              {faqs.map((faq) => (
                <FAQItem
                  key={faq.id}
                  faq={faq}
                  isOpen={openId === faq.id}
                  onToggle={() => handleToggle(faq.id)}
                />
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
