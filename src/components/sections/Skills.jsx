import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import GlassCard from '../ui/GlassCard';
import { skills } from '../../data/portfolioData';

// --- Category Icons ---
const categoryIcons = {
  Frontend: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
      <line x1="9" y1="21" x2="9" y2="9" />
    </svg>
  ),
  Backend: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 2 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 20 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  Database: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  ),
  'Tools & DevOps': (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
};

// --- Tech Stack Icons ---
const TechIcon = ({ name }) => {
  const icons = {
    'React': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="2.5"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)"/></svg>,
    'Next.js': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M15 15l-4-6-4 6M9 9v6"/></svg>,
    'TypeScript': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M9 10v6M7 10h4M14 16c-1.5 0-2-.5-2-1.5v-1c0-1 .5-1.5 2-1.5s2-.5 2-1.5v-1c0-1-.5-1.5-2-1.5-1.2 0-1.8.4-2 1"/></svg>,
    'JavaScript': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M10 16v-4c0-1-.5-1.5-2-1.5s-2 .5-2 1.5M17 16c-1.5 0-2-.5-2-1.5v-1c0-1 .5-1.5 2-1.5s2-.5 2-1.5v-1c0-1-.5-1.5-2-1.5-1.2 0-1.8.4-2 1"/></svg>,
    'Tailwind CSS': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12.5 5c-2.5 0-4 1.5-4 4 0 2.5 1.5 3 3 4s1 2.5-1 4c2.5 0 4-1.5 4-4 0-2.5-1.5-3-3-4s-1-2.5 1-4z"/><path d="M6.5 9c-1.5 0-2.5 1-2.5 2.5S5 13.5 6 14s.5 1.5-.5 2.5c1.5 0 2.5-1 2.5-2.5S7 11.5 6 11s-.5-1.5.5-2.5z"/></svg>,
    'HTML/CSS': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
    'Node.js': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 22l-8-4.5v-9L12 4l8 4.5v9L12 22z"/><path d="M12 12v10M12 12L3.5 7.5M12 12l8.5-4.5"/></svg>,
    'Express.js': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M8 12h8M12 8v8"/></svg>,
    'Python': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 5.5v1h4v-1h-4zM8.5 8h7c1 0 1.5.5 1.5 1.5v3c0 1-.5 1.5-1.5 1.5h-1v2h1c2 0 3.5-1 3.5-3.5v-3c0-2.5-1.5-3.5-3.5-3.5h-7c-2 0-3.5 1-3.5 3.5v1h2v-1c0-1 .5-1.5 1.5-1.5z"/><path d="M14 18.5v-1h-4v1h4zM15.5 16h-7C7.5 16 7 15.5 7 14.5v-3C7 10.5 7.5 10 8.5 10h1V8h-1C6.5 8 5 9 5 11.5v3C5 17 6.5 18 8.5 18h7c2 0 3.5-1 3.5-3.5v-1h-2v1c0 1-.5 1.5-1.5 1.5z"/></svg>,
    'REST APIs': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 9l3 3-3 3M13 15h3M5 4h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/></svg>,
    'GraphQL': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="4" r="2"/><circle cx="20" cy="12" r="2"/><circle cx="12" cy="20" r="2"/><circle cx="4" cy="12" r="2"/><path d="M12 6v12M6 12h12M7.5 7.5l9 9M16.5 7.5l-9 9"/></svg>,
    'MongoDB': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C8 2 8 8 8 12s4 10 4 10 4-6 4-10-4-10-4-10zM12 2v20"/></svg>,
    'PostgreSQL': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>,
    'MySQL': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></svg>,
    'Redis': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 4L4 8l8 4 8-4-8-4z"/><path d="M4 12l8 4 8-4M4 16l8 4 8-4"/></svg>,
    'Git': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M6 9v6M15.88 15.88L9 9"/></svg>,
    'Docker': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="14" width="18" height="6" rx="2" ry="2"/><rect x="8" y="10" width="4" height="4"/><rect x="12" y="10" width="4" height="4"/><rect x="12" y="6" width="4" height="4"/></svg>,
    'AWS': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17.5 19C15 20.5 12 21 9 20.5c-3-.5-5-2-7-4 3.5 1.5 7.5 1.5 11 0 1.5-.5 3-1.5 4.5-2.5"/></svg>,
    'CI/CD': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    'Linux': <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2a4 4 0 0 1 4 4c0 2-2 4-2 6v2c0 2 2 4 2 6a2 2 0 0 1-4 0v-2H10v2a2 2 0 0 1-4 0c0-2 2-4 2-6v-2c0-2-2-4-2-6a4 4 0 0 1 4-4z"/></svg>,
  };

  return icons[name] || <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>;
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative" aria-label="Skills">
      <div className="container-custom">
        <SectionHeader
          badge="Skills"
          title="Technical Expertise"
          subtitle="A comprehensive toolkit built through years of hands-on experience and continuous learning."
        />

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {skills.map((group, groupIndex) => (
            <ScrollReveal
              key={group.category}
              animation="fade-in-up"
              delay={groupIndex * 150}
            >
              <GlassCard className="h-full">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-accent-500/10 flex items-center justify-center text-accent-600 dark:text-accent-400">
                    {categoryIcons[group.category]}
                  </div>
                  <h3 className="text-lg font-semibold">{group.category}</h3>
                </div>

                {/* Tech Pills Grid */}
                <div className="flex flex-wrap gap-2.5 sm:gap-3">
                  {group.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg 
                        bg-surface-100 dark:bg-white/[0.03] 
                        border border-surface-200/50 dark:border-white/[0.05] 
                        hover:bg-surface-200 dark:hover:bg-white/[0.08] 
                        hover:border-surface-300 dark:hover:border-white/[0.1] 
                        transition-all duration-300 ease-out
                        hover:-translate-y-0.5 hover:shadow-sm group"
                    >
                      <span className="w-[18px] h-[18px] flex items-center justify-center text-surface-500 dark:text-surface-400 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                        <TechIcon name={skill.name} />
                      </span>
                      <span className="text-[13px] sm:text-sm font-medium text-surface-700 dark:text-surface-300 group-hover:text-surface-900 dark:group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}