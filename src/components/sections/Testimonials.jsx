import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import GlassCard from '../ui/GlassCard';
import { testimonials } from '../../data/portfolioData';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding relative" aria-label="Testimonials">
      <div className="container-custom">
        <SectionHeader
          badge="Testimonials"
          title="What People Say"
          subtitle="Feedback from colleagues and clients I've had the pleasure of working with."
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.id} animation="fade-in-up" delay={index * 150}>
              <GlassCard className="h-full flex flex-col">
                {/* Quote Icon */}
                <svg
                  className="w-8 h-8 text-accent-500/30 mb-4"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                </svg>

                {/* Content */}
                <p className="text-sm sm:text-[15px] text-surface-600 dark:text-surface-400 leading-relaxed flex-1 mb-6">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-4 border-t border-surface-200/50 dark:border-white/[0.06]">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-surface-400 dark:text-surface-500">
                      {testimonial.role}
                    </p>
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