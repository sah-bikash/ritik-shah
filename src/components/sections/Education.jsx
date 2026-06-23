import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import { education } from '../../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="section-padding relative" aria-label="Education">
      <div className="container-custom">
        <SectionHeader
          badge="Education"
          title="Academic Background"
          subtitle="The educational foundation that built my technical expertise."
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <ScrollReveal key={edu.id} animation="fade-in-up" delay={index * 150}>
              <div className="glass-card p-6 sm:p-8 group">
                <div className="flex items-start gap-5">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent-500/20 to-purple-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="text-accent-600 dark:text-accent-400"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                      <path d="M6 12v5c3 3 9 3 12 0v-5" />
                    </svg>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold">{edu.degree}</h3>
                      <span className="text-xs font-medium text-surface-400 dark:text-surface-500 bg-surface-100 dark:bg-white/[0.04] px-3 py-1 rounded-full whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-accent-600 dark:text-accent-400 mb-2">
                      {edu.institution} · {edu.location}
                    </p>

                    <p className="text-sm text-surface-500 dark:text-surface-400 leading-relaxed mb-3">
                      {edu.description}
                    </p>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                      GPA: {edu.gpa}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}