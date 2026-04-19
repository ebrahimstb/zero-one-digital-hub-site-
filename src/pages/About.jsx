/**
 * About.jsx — Brand story, values, and promise
 *
 * Sections:
 *   1. Page hero
 *   2. Story + Timeline (two-column grid)
 *   3. Values list
 *   4. Promise block
 */

import SectionHeader from '../components/ui/SectionHeader';
import { timeline, values } from '../data/content';
import { Link } from 'react-router-dom';

// ── Sub-components ───────────────────────────────────────────────────────────

/** A single timeline entry */
const TimelineItem = ({ year, text }) => (
  <div className="pl-6 border-l-2 border-brand-green">
    <p className="font-mono text-[11px] text-brand-green tracking-wide mb-1">{year}</p>
    <p className="text-[14px] font-light text-dark-raised dark:text-white/50 leading-relaxed">{text}</p>
  </div>
);

/** A single value card */
const ValueCard = ({ icon, title, description }) => (
  <div className="card card-hover flex gap-4 p-5">
    <span className="text-2xl flex-shrink-0 mt-0.5">{icon}</span>
    <div>
      <h3 className="font-semibold text-[15px] text-dark-bg dark:text-white mb-1.5">{title}</h3>
      <p className="text-[14px] font-light text-dark-raised dark:text-white/50 leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

// ── Main component ───────────────────────────────────────────────────────────

const About = () => (
  <div className="pt-nav min-h-screen bg-light-bg dark:bg-dark-bg">

    {/* ── Page hero ───────────────────────────────────────────────── */}
  {/* ── Page hero ───────────────────────────────────────────────── */}
<div className="bg-light-surface dark:bg-dark-surface border-b border-light-border dark:border-dark-border py-16">
  <div className="container-custom max-w-2xl">
    <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-green mb-4">
      Our story
    </p>
    <h1 className="font-display text-display-lg text-dark-bg dark:text-white leading-none mb-4">
      BUILT ON <span className="text-brand-green">TRUST.</span>
    </h1>
    <p className="text-[17px] font-light text-dark-raised dark:text-white/50 mb-8">
      From a one-man hustle to a registered digital hub — here's where we came
      from and where we're going.
    </p>

    {/* 👇 Add this button */}
    <Link
      to="/rebrand"
      className="inline-flex items-center gap-2 bg-brand-green text-white font-semibold text-sm px-6 py-3 rounded-md transition-opacity duration-200 hover:opacity-85"
    >
      Our Rebrand Story →
    </Link>
  </div>
</div>

    {/* ── Story + Timeline ────────────────────────────────────────── */}
    <section className="section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Story text */}
          <div>
            <h2 className="font-display text-display-sm text-dark-bg dark:text-white leading-none mb-5">
              FROM EBRAHIM GADGETS<br />
              TO <span className="text-brand-green">ZERO ONE</span>
            </h2>

            {[
              "It started simply — Ibrahim, a phone, and a determination to give people in Lagos access to genuine devices at honest prices. No shop. No sign. Just a WhatsApp number and a reputation that spread by word of mouth.",
              "4+ years and hundreds of satisfied customers later, Ebrahim Gadgets evolved into something bigger than a name. Zero One Digital Hub — registered with the CAC, built on the same values, but with a clearer identity and a longer vision.",
              "The name means everything. Binary code — the foundation of all technology. The aspiration to always be number one. And Zero Fugazzi — that's Ibrahim, the person behind every order.",
            ].map((para, i) => (
              <p
                key={i}
                className="text-[15px] font-light text-dark-raised dark:text-white/50 leading-relaxed mb-4"
              >
                {para}
              </p>
            ))}

            {/* Timeline */}
            <div className="flex flex-col gap-5 mt-8">
              {timeline.map(({ year, text }) => (
                <TimelineItem key={year} year={year} text={text} />
              ))}
            </div>
          </div>

          {/* Values */}
          <div>
            <h2 className="font-display text-display-sm text-dark-bg dark:text-white leading-none mb-5">
              OUR <span className="text-brand-green">VALUES</span>
            </h2>
            <div className="flex flex-col gap-4">
              {values.map((value) => (
                <ValueCard key={value.title} {...value} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* ── Promise block ────────────────────────────────────────────── */}
    <section className="pb-20">
      <div className="container-custom">
        <div className="bg-brand-green-10 border border-brand-green/25 rounded-2xl p-8 md:p-10">
          <h2 className="font-display text-display-sm text-dark-bg dark:text-white leading-none mb-4">
            OUR <span className="text-brand-green">PROMISE</span> TO YOU
          </h2>
          <p className="text-[15px] font-light text-dark-raised dark:text-white/60 leading-relaxed max-w-2xl">
            We make sure every device you buy from us meets high standards. No fake
            parts, no hidden faults, no stories. If something isn't right, we make it
            right — that's not a slogan, that's how we've kept customers coming back
            for 4+ years. Zero One Digital Hub exists because people trusted Ibrahim
            with their money. We take that seriously every single day.
          </p>
        </div>
      </div>
      <button>
        <a href="/rebrand" className="btn-primary mt-4 inline-flex">
          Read the full rebrand story →
        </a>
     </button>
    </section>

  </div>
);

export default About;
