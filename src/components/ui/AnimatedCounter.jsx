import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';

export default function AnimatedCounter({ value, suffix = '', duration = 2000 }) {
  const [ref, count] = useAnimatedCounter(value, duration);

  return (
    <span ref={ref} className="tabular-nums">
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}