/**
 * Contact.jsx — All contact methods + business hours
 */

import { SOCIALS, PHONE_DISPLAY, EMAIL, waLink } from '../utils/constants';

// ── Contact methods data ─────────────────────────────────────────────────────
// Add or remove entries here without touching JSX
const CONTACT_METHODS = [
  {
    icon: '💬',
    label: 'WhatsApp (Fastest)',
    value: PHONE_DISPLAY,
    sub: 'Tap to open WhatsApp chat',
    href: waLink('Hi! I want to reach Zero One Digital Hub.'),
    highlight: true,
  },
  {
    icon: '📞',
    label: 'Phone',
    value: PHONE_DISPLAY,
    sub: 'Call during business hours',
    href: `tel:+${PHONE_DISPLAY}`,
  },
  {
    icon: '📧',
    label: 'Email',
    value: EMAIL,
    sub: 'For formal enquiries & invoices',
    href: `mailto:${EMAIL}`,
  },
  {
    icon: '🎵',
    label: 'TikTok',
    value: '@zero.one_digitalhub',
    sub: 'Watch product drops & reviews',
    href: SOCIALS.tiktok,
  },
  {
    icon: '📸',
    label: 'Instagram',
    value: '@zero.one_digitalhub',
    sub: 'Product listings & brand updates',
    href: SOCIALS.instagram,
  },
];

const HOURS = [
  { day: 'Monday – Friday', time: '8am – 9pm'  },
  { day: 'Saturday',        time: '9am – 8pm'  },
  { day: 'Sunday',          time: '12pm – 6pm' },
  { day: 'WhatsApp Response', time: 'Usually within 30 mins', green: true },
];

// ── Sub-components ───────────────────────────────────────────────────────────

const ContactCard = ({ icon, label, value, sub, href, highlight }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className={`
      card card-hover flex items-center gap-5 p-5
      ${highlight ? 'border-brand-green/40 bg-brand-green-10' : ''}
    `}
  >
    <span className="text-3xl flex-shrink-0">{icon}</span>
    <div>
      <p className="font-mono text-[10px] tracking-[0.14em] uppercase text-dark-border2 dark:text-white/25 mb-1">
        {label}
      </p>
      <p className={`font-semibold text-[15px] ${highlight ? 'text-brand-green' : 'text-dark-bg dark:text-white'}`}>
        {value}
      </p>
      <p className="text-[13px] text-dark-border2 dark:text-white/25 mt-0.5">{sub}</p>
    </div>
  </a>
);

// ── Main component ───────────────────────────────────────────────────────────

const Contact = () => (
  <div className="pt-nav min-h-screen bg-light-bg dark:bg-dark-bg">

    {/* ── Page hero ───────────────────────────────────────────────── */}
    <div className="bg-light-surface dark:bg-dark-surface border-b border-light-border dark:border-dark-border py-14">
      <div className="container-custom">
        <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-green mb-4">
          Get in touch
        </p>
        <h1 className="font-display text-display-lg text-dark-bg dark:text-white leading-none mb-2">
          LET'S <span className="text-brand-green">TALK.</span>
        </h1>
        <p className="text-[17px] font-light text-dark-raised dark:text-white/50">
          Fastest way to reach us is always WhatsApp — we respond quickly.
        </p>
      </div>
    </div>

    {/* ── Main grid ───────────────────────────────────────────────── */}
    <section className="section">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Contact cards */}
          <div className="flex flex-col gap-4">
            {CONTACT_METHODS.map((method) => (
              <ContactCard key={method.label} {...method} />
            ))}
          </div>

          {/* Info + hours */}
          <div>
            <h2 className="font-display text-display-sm text-dark-bg dark:text-white leading-none mb-4">
              BASED IN <span className="text-brand-green">LAGOS.</span><br />
              SHIPS NATIONWIDE.
            </h2>
            <p className="text-[15px] font-light text-dark-raised dark:text-white/50 leading-relaxed mb-8">
              We're online-first — no physical shop yet, but everything is handled
              professionally. Lagos orders can be same-day. All other states: 1–3 business days.
            </p>

            {/* Business hours card */}
            <div className="card p-6">
              <h4 className="font-mono text-[11px] text-brand-green tracking-[0.14em] uppercase mb-5">
                Business Hours
              </h4>
              <div className="flex flex-col divide-y divide-light-border dark:divide-dark-border">
                {HOURS.map(({ day, time, green }) => (
                  <div key={day} className="flex justify-between py-3 text-[14px]">
                    <span className="text-dark-raised dark:text-white/50">{day}</span>
                    <span className={`font-medium ${green ? 'text-brand-green' : 'text-dark-bg dark:text-white'}`}>
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </div>
);

export default Contact;
