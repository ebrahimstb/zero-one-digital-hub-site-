/**
 * SectionHeader.jsx
 *
 * Reusable section header: eyebrow tag → title → subtitle.
 * Used on every section across the site for visual consistency.
 *
 * Props:
 *   tag      - small uppercase label above the title (e.g. "Why Zero One")
 *   title    - main heading string or JSX (supports <span> for coloured words)
 *   subtitle - optional supporting text below the title
 *   align    - 'center' | 'left' (default: 'center')
 */

const SectionHeader = ({ tag, title, subtitle, align = 'center' }) => {
  const isCenter = align === 'center';

  return (
    <div className={`mb-12 ${isCenter ? 'text-center' : ''}`}>
      {tag && (
        <p className="font-mono text-[10px] tracking-[0.22em] uppercase text-brand-green mb-3">
          {tag}
        </p>
      )}
      <h2 className="font-display text-display-md text-dark-bg dark:text-white leading-none">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base font-light mt-3 text-dark-raised dark:text-white/50 max-w-xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
