import { useState } from 'react';
import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import GlassCard from '../ui/GlassCard';
import { projects } from '../../data/portfolioData';
import { cn } from '../../utils/helpers';

const categories = ['All', ...new Set(projects.map((p) => p.category))];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All' ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative" aria-label="Projects">
      <div className="container-custom">
        <SectionHeader
          badge="Projects"
          title="Featured Work"
          subtitle="A selection of projects that showcase my skills and passion for building great software."
        />

        {/* Filters */}
        <ScrollReveal animation="fade-in" delay={100}>
          <div className="flex items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={cn(
                  'px-4 py-2 text-sm font-medium rounded-full transition-all duration-300',
                  activeFilter === cat
                    ? 'bg-surface-900 dark:bg-white text-white dark:text-surface-900 shadow-md'
                    : 'bg-surface-100 dark:bg-white/[0.04] text-surface-600 dark:text-surface-400 hover:bg-surface-200 dark:hover:bg-white/[0.08]'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} animation="scale-in" delay={index * 150}>
              <GlassCard className="h-full group overflow-hidden" padding="p-0">
                {/* Image Placeholder */}
                <div className="relative aspect-video bg-gradient-to-br from-surface-100 to-surface-200 dark:from-surface-800 dark:to-surface-900 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto rounded-xl bg-accent-500/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          className="text-accent-500"
                          strokeWidth="1.5"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <polyline points="21 15 16 10 5 21" />
                        </svg>
                      </div>
                      <p className="text-xs text-surface-400 dark:text-surface-500">Project Preview</p>
                    </div>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 text-[11px] font-semibold rounded-full bg-accent-500/10 text-accent-600 dark:text-accent-400 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-surface-500 dark:text-surface-400 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-surface-100 dark:bg-white/[0.04] text-surface-600 dark:text-surface-400 border border-surface-200/50 dark:border-white/[0.06]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-3">
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-surface-600 dark:text-surface-400 hover:text-surface-900 dark:hover:text-white transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                      Source
                    </a>
                  </div>
                </div>
              </GlassCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}