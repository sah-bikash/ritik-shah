import { cn } from '../../utils/helpers';

export default function GlassCard({
  children,
  className = '',
  hover = true,
  padding = 'p-6 sm:p-8',
  as: Component = 'div',
  ...props
}) {
  return (
    <Component
      className={cn(
        'glass-card',
        padding,
        hover && 'hover:border-surface-300/60 dark:hover:border-white/[0.1] hover:shadow-glow dark:hover:shadow-glow hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}