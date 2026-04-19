/**
 * FAQItem.jsx
 *
 * Animated accordion item for the FAQ page.
 *
 * Props:
 *   faq      - { id, question, answer }
 *   isOpen   - boolean controlling open/closed state
 *   onToggle - callback to toggle open state in parent
 */

const FAQItem = ({ faq, isOpen, onToggle }) => (
  <div
    className={`
      border rounded-xl overflow-hidden
      transition-colors duration-200
      ${isOpen
        ? 'border-brand-green'
        : 'border-light-border dark:border-dark-border'
      }
    `}
  >
    {/* ── Question row (clickable) ───────────────────────────────── */}
    <button
      className="
        w-full flex items-center justify-between gap-4
        px-6 py-5 text-left
        font-medium text-[15px] text-dark-bg dark:text-white
        bg-transparent
        hover:bg-light-raised dark:hover:bg-dark-raised
        transition-colors duration-200
      "
      onClick={onToggle}
      aria-expanded={isOpen}
    >
      <span>{faq.question}</span>

      {/* Animated +/× icon */}
      <span
        className={`
          flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center
          border text-brand-green text-sm font-bold
          transition-all duration-300
          ${isOpen
            ? 'rotate-45 bg-brand-green-10 border-brand-green'
            : 'border-light-border2 dark:border-dark-border2'
          }
        `}
      >
        +
      </span>
    </button>

    {/* ── Answer panel (CSS height transition) ──────────────────── */}
    <div
      className={`
        overflow-hidden transition-all duration-300 ease-in-out
        ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}
      `}
    >
      <p className="px-6 text-[15px] font-light text-dark-raised dark:text-white/50 leading-relaxed">
        {faq.answer}
      </p>
    </div>
  </div>
);

export default FAQItem;
