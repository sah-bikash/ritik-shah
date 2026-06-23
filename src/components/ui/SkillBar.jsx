import { useInView } from '../../hooks/useInView';

export default function SkillBar({ name, level, delay = 0 }) {
  const [ref, isInView] = useInView({ threshold: 0.3 });

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-surface-700 dark:text-surface-300 group-hover:text-surface-900 dark:group-hover:text-white transition-colors">
          {name}
        </span>
        <span className="text-xs font-medium text-surface-400 dark:text-surface-500 tabular-nums">
          {level}%
        </span>
      </div>
      <div className="h-1.5 bg-surface-100 dark:bg-white/[0.06] rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-accent-500 to-blue-500 rounded-full transition-all ease-out"
          style={{
            width: isInView ? `${level}%` : '0%',
            transitionDuration: '1200ms',
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}