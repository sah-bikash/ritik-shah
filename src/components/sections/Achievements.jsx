import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import AnimatedCounter from '../ui/AnimatedCounter';
import { achievements } from '../../data/portfolioData';

export default function Achievements() {
  return (
    <section id="achievements" className="section-padding relative" aria-label="Achievements">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent-500/[0.02] via-transparent to-transparent dark:from-accent-500/[0.03]" />

      <div className="container-custom relative">
        <SectionHeader
          badge="Achievements"
          title="Milestones & Impact"
          subtitle="Numbers that reflect my dedication to continuous growth and excellence."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {achievements.map((stat, index) => (
            <ScrollReveal key={stat.label} animation="scale-in" delay={index * 100}>
              <div className="glass-card p-6 sm:p-8 text-center group hover:shadow-glow transition-all duration-500">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold gradient-text-accent mb-2 sm:mb-3">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-xs sm:text-sm font-medium text-surface-500 dark:text-surface-400 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Additional Achievements */}
        <div className="mt-12 sm:mt-16 max-w-3xl mx-auto">
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                  </svg>
                ),
                title: 'Hackathon Winner',
                desc: 'First place in National Code Sprint 2024',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ),
                title: 'Open Source Contributor',
                desc: 'Active contributor to 10+ popular repos',
              },
              {
                icon: (
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                  </svg>
                ),
                title: 'Tech Blog Author',
                desc: 'Published 20+ technical articles',
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} animation="fade-in-up" delay={i * 100 + 300}>
                <div className="glass-card p-6 text-center group">
                  <div className="w-11 h-11 mx-auto rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-600 dark:text-accent-400 mb-4 group-hover:scale-110 transition-transform duration-500">
                    {item.icon}
                  </div>
                  <h4 className="text-sm font-semibold mb-1">{item.title}</h4>
                  <p className="text-xs text-surface-500 dark:text-surface-400">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}