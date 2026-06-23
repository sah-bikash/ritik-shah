import { cn } from '../../utils/helpers';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  icon,
  ...props
}) {
  const classes = cn(
    variant === 'primary' && 'btn-primary',
    variant === 'secondary' && 'btn-secondary',
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {children}
        {icon && icon}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {icon && icon}
    </button>
  );
}