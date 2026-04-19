/**
 * content.js
 *
 * Static content data: reviews, FAQs, blog posts, about page content.
 * Separated from products.js to keep each file focused on one domain.
 */

// ── Customer reviews ──────────────────────────────────────────────────────────
export const reviews = [
  {
    id: 1,
    name: 'Tolu A.',
    text: 'Got my MacBook in 24 hours, came exactly as described. Grade A means Grade A with these guys. 10/10.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Chidi O.',
    text: 'Bought an iPhone 14 Pro, battery health 98%. Ibrahim was transparent from start to finish.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amina B.',
    text: 'Best gadget plug in Lagos hands down. Fast response, genuine products. No stories.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Seun K.',
    text: 'Ordered a JBL speaker on a Sunday, got it Monday morning. Fast delivery is real with Zero One.',
    rating: 5,
  },
  {
    id: 5,
    name: 'Blessing N.',
    text: "I was sceptical at first but after my first order I'm a loyal customer. The prices are unbeatable.",
    rating: 5,
  },
  {
    id: 6,
    name: 'David E.',
    text: 'Laptop came sealed, exactly what I paid for. Customer service is top tier too — quick to respond.',
    rating: 5,
  },
];

// ── FAQ items ─────────────────────────────────────────────────────────────────
export const faqs = [
  {
    id: 1,
    question: 'How do I place an order?',
    answer:
      "Simple — click any 'Order on WhatsApp' button, or message us directly at 08144345484. Tell us what you want, we confirm availability and price, you pay, we deliver.",
  },
  {
    id: 2,
    question: 'What payment methods do you accept?',
    answer:
      "We accept bank transfer to all major Nigerian banks. Payment is confirmed before dispatch — no payment, no dispatch. That protects both of us.",
  },
  {
    id: 3,
    question: 'How long does delivery take?',
    answer:
      'Lagos: same day or next day. Other states: 1–3 business days via trusted courier. We always share a tracking number once your item ships.',
  },
  {
    id: 4,
    question: 'Do your products come with warranty?',
    answer:
      'Brand new items carry the manufacturer warranty. UK used / foreign used items come with a 30-day fault warranty from us — if something is wrong, we fix it.',
  },
  {
    id: 5,
    question: "What's the refund policy?",
    answer:
      "If you receive a device that doesn't match what was described, we'll replace or refund within 48 hours of delivery. Change of mind after payment is not grounds for a refund — please be sure before you pay.",
  },
  {
    id: 6,
    question: 'How do you test your devices?',
    answer:
      'Every device goes through a checklist: screen, battery health, cameras, speakers, charging port, buttons, Face ID / fingerprint, and software. We grade honestly — Grade A means near perfect.',
  },
  {
    id: 7,
    question: "What's the difference between UK Used and refurbished?",
    answer:
      "UK Used means the device was used in the UK and imported — we don't touch the internals. Refurbished means parts may have been replaced professionally. We always state which one clearly.",
  },
  {
    id: 8,
    question: 'Can I negotiate the price?',
    answer:
      'Our prices are already competitive but chat us on WhatsApp — we do occasional deals, bundle discounts, and loyalty pricing for returning customers.',
  },
];

// ── Blog posts ────────────────────────────────────────────────────────────────
export const blogPosts = [
  {
    id: 1,
    title: '5 Things to Check Before Buying a Used iPhone',
    date: 'March 2025',
    excerpt:
      "Not every used iPhone is worth your money. Here's exactly what to look for before handing over any cash.",
    readTime: '4 min read',
    content: [
      "Buying a used iPhone can save you serious money — but only if you know what to look for. Here are 5 non-negotiables before you buy.",
      "**Battery Health** — Go to Settings → Battery → Battery Health. Anything below 80% means the battery will drain fast. We recommend 85% and above for daily use.",
      "**IMEI Check** — Dial *#06# and check the IMEI on imei.info. Confirm it's not blacklisted, stolen, or network-locked.",
      "**Face ID / Touch ID** — Test it yourself. If it doesn't work and the seller says 'it just needs resetting', walk away. Face ID failures usually mean a third-party screen replacement.",
      "**Activation Lock (iCloud)** — Ask the seller to sign out of iCloud in your presence or before payment. An iPhone with someone else's Apple ID is useless to you.",
      "**Screen Quality** — Look for dead pixels, yellow tint, or unresponsive touch. Shine a torch at an angle — you'll see cracks that aren't obvious in normal light.",
      "At Zero One Digital Hub, we check all of this before a device reaches you. That's the difference.",
    ],
  },
  {
    id: 2,
    title: 'How to Choose the Best Laptop Under ₦300k',
    date: 'February 2025',
    excerpt:
      "Your budget doesn't have to limit your performance. Here's how to get maximum value from every naira.",
    readTime: '5 min read',
    content: [
      "₦300,000 is a real budget for a laptop in Nigeria — if you know where to look and what to prioritise.",
      "**Define Your Use Case First** — School / documents / browsing: Core i5, 8GB RAM does the job. Video editing / design: you need at least 16GB RAM. Gaming at ₦300k is tough new, but UK used opens serious options.",
      "**New vs UK Used** — At ₦300k new you're looking at entry-level. At ₦300k UK used, you could get a MacBook Air, Dell XPS, or HP EliteBook that originally cost much more.",
      "**RAM is King** — Don't go below 8GB in 2025. 16GB is ideal. RAM determines how many tabs and apps you can run simultaneously.",
      "**SSD Over HDD Always** — A laptop with an SSD boots in 10 seconds. An HDD laptop will frustrate you every day.",
      "**Check the Generation** — A Core i5 10th Gen is slower than a Core i5 12th Gen. Always ask the processor generation — it matters more than the model number.",
      "Chat us on WhatsApp and we'll match you to the right laptop for exactly what you need.",
    ],
  },
  {
    id: 3,
    title: "UK Used vs Refurbished — What's the Real Difference?",
    date: 'January 2025',
    excerpt:
      "These two terms get mixed up constantly. Understanding the difference could save you from a bad deal.",
    readTime: '3 min read',
    content: [
      "Walk into any Lagos tech market and you'll hear 'UK Used' and 'Refurbished' used interchangeably. They are not the same thing.",
      "**UK Used** means the device was bought and used in the United Kingdom, then imported. The internals are original — nothing has been replaced. Battery, screen, camera — all original manufacturer parts.",
      "**Refurbished** means the device has been professionally repaired or had parts replaced — often by a third party, not Apple or Samsung. The screen might be a high-quality replacement. The battery might be new but not original.",
      "**Why It Matters** — An iPhone with a third-party screen loses Face ID. A Samsung with a non-original battery may not support fast charging. These affect your daily use.",
      "At Zero One Digital Hub, we always tell you exactly what you're getting. UK Used means untouched original. If parts have been replaced, we say so. No hidden surprises.",
    ],
  },
];

// ── About page — timeline entries ─────────────────────────────────────────────
export const timeline = [
  { year: '2021', text: 'Started as Ebrahim Gadgets — first sales on WhatsApp, no shop, no sign.' },
  { year: '2022–23', text: 'Expanded to 200+ customers. Added laptops and accessories.' },
  { year: '2024', text: 'Launched TikTok. Hit 500+ followers. Brand recognition growing.' },
  { year: '2025', text: 'Rebranded to Zero One Digital Hub. CAC registered. Website launched.' },
];

// ── About page — values ───────────────────────────────────────────────────────
export const values = [
  {
    icon: '🤝',
    title: 'Honesty',
    description:
      'We describe every device exactly as it is. Grade A means Grade A. No puffery, no surprises on delivery.',
  },
  {
    icon: '⚡',
    title: 'Fast Response',
    description:
      "We respond to every WhatsApp message quickly. Your time matters — we don't ghost.",
  },
  {
    icon: '💎',
    title: 'Quality First',
    description:
      "Every device goes through a thorough check. If it doesn't meet our standard, it doesn't leave our hands.",
  },
  {
    icon: '💰',
    title: 'Fair Pricing',
    description:
      'We price competitively and honestly. Our margin is fair. We want repeat customers, not one-time ones.',
  },
  {
    icon: '🔒',
    title: 'Your Trust',
    description:
      'Our entire business is built on trust. Protecting that trust is our internal rule number one.',
  },
];

// ── Terms sections ────────────────────────────────────────────────────────────
export const termsSections = [
  {
    id: 'payment',
    title: 'Payment Rules',
    body: "All payments must be made in full before dispatch. We accept bank transfer to our verified account details provided on WhatsApp. Once payment is confirmed, we proceed to pack and ship. Do not send money to unverified accounts — always confirm details directly with us before transferring.",
  },
  {
    id: 'delivery',
    title: 'Delivery Rules',
    body: "We ship nationwide via trusted courier partners. Lagos: same day or next day. Outside Lagos: 1–3 business days. A tracking number is shared once dispatched. Zero One Digital Hub is not liable for courier delays beyond our control, but we will always follow up on your behalf.",
  },
  {
    id: 'refunds',
    title: 'Refund & Return Policy',
    body: "Refunds or replacements are offered only when: (1) the device received does not match the description, or (2) a technical fault is confirmed within 48 hours of delivery. Change of mind after payment and delivery does not qualify. Items must be returned in the condition received.",
  },
  {
    id: 'warranty',
    title: 'Warranty Policy',
    body: "Brand new items are covered under the manufacturer's warranty. UK Used and Foreign Used devices carry a 30-day fault warranty from Zero One Digital Hub covering manufacturing defects and undisclosed faults. It does not cover physical damage, liquid damage, or faults from misuse.",
  },
  {
    id: 'privacy',
    title: 'Privacy Policy',
    body: "We collect only the information necessary to process your order: name, phone number, and delivery address. This is shared only with our courier for delivery. We do not sell or rent your personal data. Your WhatsApp conversations are kept confidential.",
  },
  {
    id: 'liability',
    title: 'Limitation of Liability',
    body: "Zero One Digital Hub's liability is limited to the value of the item purchased. We are not responsible for indirect losses or consequential damages from product use. Our obligation is to deliver what was described — if we fail to do so, we will replace or refund.",
  },
];
