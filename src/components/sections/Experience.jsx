import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import { experience } from '../../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative" aria-label="Experience">
      <div className="container-custom">
        <SectionHeader
          badge="Experience"
          title="Professional Journey"
          subtitle="My career path through impactful roles building products that matter."
        />

        <div className="max-w-3xl mx-auto">
          {experience.map((exp, index) => (
            <ScrollReveal key={exp.id} animation="fade-in-up" delay={index * 150}>
              <div className="relative pl-8 sm:pl-12 pb-12 last:pb-0 group">
                {/* Timeline Line */}
                {index < experience.length - 1 && (
                  <div className="absolute left-[11px] sm:left-[19px] top-6 bottom-0 w-px bg-surface-200 dark:bg-white/[0.06]" />
                )}

                {/* Timeline Dot */}
                <div className="absolute left-0 sm:left-2 top-1 w-[22px] h-[22px] rounded-full border-2 border-accent-500 bg-white dark:bg-surface-950 flex items-center justify-center z-10 group-hover:scale-125 transition-transform duration-300">
                  <div className="w-2 h-2 rounded-full bg-accent-500" />
                </div>

                {/* Content Card */}
                <div className="glass-card p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <span className="text-xs font-medium text-surface-400 dark:text-surface-500 bg-surface-100 dark:bg-white/[0.04] px-3 py-1 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-sm font-medium text-accent-600 dark:text-accent-400 mb-3">
                    {exp.company} · {exp.location}
                  </p>

                  <p className="text-sm text-surface-500 dark:text-surface-400 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <ul className="space-y-2">
                    {exp.highlights.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-surface-600 dark:text-surface-400">
                        <svg
                          className="w-4 h-4 mt-0.5 text-emerald-500 flex-shrink-0"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}