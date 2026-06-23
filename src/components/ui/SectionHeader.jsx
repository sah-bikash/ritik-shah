import ScrollReveal from './ScrollReveal';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  center = true,
}) {
  return (
    <div className={`mb-16 sm:mb-20 ${center ? 'text-center' : ''}`}>
      {badge && (
        <ScrollReveal animation="fade-in" delay={0}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase
            bg-accent-500/10 text-accent-600 dark:text-accent-400 
            border border-accent-500/20 dark:border-accent-400/20
            mb-6">
            {badge}
          </span>
        </ScrollReveal>
      )}

      <ScrollReveal animation="fade-in-up" delay={100}>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">
          <span className="gradient-text">{title}</span>
        </h2>
      </ScrollReveal>

      {subtitle && (
        <ScrollReveal animation="fade-in-up" delay={200}>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg text-surface-500 dark:text-surface-400 max-w-2xl mx-auto leading-relaxed text-balance">
            {subtitle}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}