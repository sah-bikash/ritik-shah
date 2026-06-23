import SectionHeader from '../ui/SectionHeader';
import ScrollReveal from '../ui/ScrollReveal';
import GlassCard from '../ui/GlassCard';
import { certifications } from '../../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="section-padding relative" aria-label="Certifications">
      <div className="container-custom">
        <SectionHeader
          badge="Certifications"
          title="Professional Credentials"
          subtitle="Industry-recognized certifications that validate my technical skills."
        />

        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <ScrollReveal key={cert.id} animation="fade-in-up" delay={index * 100}>
              <GlassCard className="h-full group">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      className="text-amber-600 dark:text-amber-400"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="12" cy="8" r="7" />
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                    </svg>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-semibold mb-1 group-hover:text-accent-600 dark:group-hover:text-accent-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-surface-500 dark:text-surface-400 mb-2">
                      {cert.issuer} · {cert.date}
                    </p>
                    <a
                      href={cert.credentialUrl}
                      className="inline-flex items-center gap-1 text-xs font-medium text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Credential
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
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