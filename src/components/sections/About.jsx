import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import GlassCard from '../ui/GlassCard';

export default function About() {
  return (
    <section id="about" className="section-padding relative" aria-label="About me">
      <div className="container-custom">
        <SectionHeader
          badge="About Me"
          title="Passionate About Building"
          subtitle="A dedicated software engineer with a love for crafting elegant, scalable digital solutions."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Profile Visual */}
          <ScrollReveal animation="slide-in-left" delay={100}>
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto rounded-3xl overflow-hidden glass-card p-1 group">
                <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-gradient-to-br from-accent-500/20 via-purple-500/10 to-cyan-500/20 dark:from-accent-500/10 dark:via-purple-500/5 dark:to-cyan-500/10">
                  {/* Profile Image */}
                  <img
                    src="/profile.webp"
                    alt="Ritik Shah — Software Engineer"
                    loading="lazy"
                    // 👇 Added these classes
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-105 
                      dark:brightness-[0.85] dark:grayscale-[0.05]" 
                  />

                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                  {/* Name badge at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                    <div className="glass rounded-2xl px-4 py-3 backdrop-blur-2xl">
                      <p className="text-surface-900 dark:text-white font-semibold">
                        Ritik Shah
                      </p>
                      <p className="text-surface-900 dark:text-white font-semibold">
                        Software Engineer
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Decorations */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent-500/10 rounded-2xl rotate-12 animate-float" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/10 rounded-2xl -rotate-12 animate-float-delayed" />
            </div>
          </ScrollReveal>
          {/* Right — Content */}
          <div className="space-y-6">
            <ScrollReveal animation="fade-in-up" delay={200}>
              <p className="text-base sm:text-lg leading-relaxed text-surface-600 dark:text-surface-400">
                I'm <strong className="text-surface-900 dark:text-white font-semibold">Ritik Shah</strong>, a
                software engineer based in Nepal with a deep passion for building products that live at the
                intersection of technology and design. I believe great software is not just functional — it's
                beautiful, intuitive, and impactful.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={300}>
              <p className="text-base sm:text-lg leading-relaxed text-surface-600 dark:text-surface-400">
                My journey in software engineering started with curiosity — taking apart how things work on the
                web and rebuilding them better. Today, I specialize in full-stack development, creating
                everything from interactive frontends to scalable backend systems.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={400}>
              <p className="text-base sm:text-lg leading-relaxed text-surface-600 dark:text-surface-400">
                I'm driven by the vision of using technology to solve real-world problems. Whether it's building
                a startup MVP or optimizing a high-traffic application, I approach every project with the same
                level of dedication and attention to detail.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={500}>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { label: 'Location', value: 'Nepal 🇳🇵' },
                  { label: 'Experience', value: '4+ Years' },
                  { label: 'Specialization', value: 'Full Stack' },
                  { label: 'Status', value: 'Open to Work' },
                ].map((item) => (
                  <GlassCard key={item.label} padding="p-4" hover={false}>
                    <p className="text-xs font-medium text-surface-400 dark:text-surface-500 uppercase tracking-wider mb-1">
                      {item.label}
                    </p>
                    <p className="text-sm font-semibold text-surface-900 dark:text-white">
                      {item.value}
                    </p>
                  </GlassCard>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}