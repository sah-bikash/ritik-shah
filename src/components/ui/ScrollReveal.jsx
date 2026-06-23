import { useInView } from '../../hooks/useInView';
import { cn } from '../../utils/helpers';

export default function ScrollReveal({
  children,
  className = '',
  animation = 'fade-in-up',
  delay = 0,
  duration = 600,
  threshold = 0.1,
}) {
  const [ref, isInView] = useInView({ threshold, triggerOnce: true });

  const animations = {
    'fade-in': 'opacity-0',
    'fade-in-up': 'opacity-0 translate-y-8',
    'fade-in-down': 'opacity-0 -translate-y-8',
    'slide-in-left': 'opacity-0 -translate-x-10',
    'slide-in-right': 'opacity-0 translate-x-10',
    'scale-in': 'opacity-0 scale-95',
    'blur-in': 'opacity-0 blur-sm',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out',
        !isInView && animations[animation],
        isInView && 'opacity-100 translate-y-0 translate-x-0 scale-100 blur-0',
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}