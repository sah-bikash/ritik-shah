import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import GlassCard from '../ui/GlassCard';
import { blogPosts } from '../../data/portfolioData';
import { formatDate } from '../../utils/helpers';

export default function Blog() {
  return (
    <section id="blog" className="section-padding relative" aria-label="Blog">
      <div className="container-custom">
        <SectionHeader
          badge="Blog"
          title="Latest Insights"
          subtitle="Thoughts on software engineering, design, and technology."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <ScrollReveal key={post.id} animation="fade-in-up" delay={index * 150}>
              <a
                href={post.url}
                className="block h-full group"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GlassCard className="h-full flex flex-col" padding="p-0">
                  {/* Image Placeholder */}
                  <div className="aspect-[16/9] bg-gradient-to-br from-surface-100 to-surface-200 dark:from-surface-800 dark:to-surface-900 rounded-t-2xl lg:rounded-t-3xl flex items-center justify-center">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-500/10 text-accent-600 dark:text-accent-400">
                      {post.category}
                    </span>
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-3 text-xs text-surface-400 dark:text-surface-500 mb-3">
                      <span>{formatDate(post.date)}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-base font-semibold mb-2 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors leading-snug">
                      {post.title}
                    </h3>

                    <p className="text-sm text-surface-500 dark:text-surface-400 leading-relaxed flex-1 mb-4">
                      {post.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-accent-600 dark:text-accent-400 group-hover:gap-2.5 transition-all">
                      Read Article
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </GlassCard>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}