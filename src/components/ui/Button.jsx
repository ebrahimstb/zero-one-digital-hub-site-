/**
 * Button.jsx
 *
 * Reusable button / link component.
 * Renders either a <button> or an <a> tag depending on whether `href` is passed.
 *
 * Props:
 *   variant   - 'primary' | 'outline'  (default: 'primary')
 *   href      - if provided, renders as an <a> tag
 *   external  - adds target="_blank" rel="noreferrer" when true
 *   className - extra Tailwind classes to merge in
 *   children  - button label / content
 *   ...rest   - any other native button or anchor props
 */

import clsx from 'clsx';

// We use a tiny helper to merge class names conditionally.
// If you don't want to install clsx, replace with template literals.

const variantClasses = {
  primary: [
    'bg-brand-green text-white font-semibold',
    'hover:opacity-85',
  ],
  outline: [
    'border border-light-border2 dark:border-dark-border2',
    'text-dark-bg dark:text-white font-medium',
    'hover:border-brand-green hover:text-brand-green',
  ],
};

const baseClasses = [
  'inline-flex items-center gap-2',
  'text-sm px-6 py-3 rounded-md',
  'transition-all duration-200',
  'cursor-pointer',
];

const Button = ({
  variant = 'primary',
  href,
  external = false,
  className = '',
  children,
  ...rest
}) => {
  const classes = clsx(
    ...baseClasses,
    ...(variantClasses[variant] || variantClasses.primary),
    className
  );

  // Render as anchor if href is provided
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};

export default Button;
