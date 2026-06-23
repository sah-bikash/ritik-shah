import { personalInfo } from '../../data/portfolioData';
import SocialLinks from '../ui/SocialLinks';
import Button from '../ui/Button';
import { smoothScrollTo } from '../../utils/helpers';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.015)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white dark:to-surface-950" />
      </div>

      {/* Floating Orbs */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-accent-500/40 rounded-full animate-float" />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-500/30 rounded-full animate-float-delayed" />
      <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-cyan-500/30 rounded-full animate-float-slow" />

      <div className="container-custom relative pt-32 pb-20 sm:pt-36 sm:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="animate-fade-in-down mb-8 sm:mb-10">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-medium
              bg-emerald-500/10 text-emerald-600 dark:text-emerald-400
              border border-emerald-500/20 dark:border-emerald-400/20
              backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              {personalInfo.availability}
            </span>
          </div>

          {/* Heading */}
          <h1 className="animate-fade-in-up text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05]">
            <span className="gradient-text">Hi, I'm</span>
            <br />
            <span className="relative">
              <span className="gradient-text-accent">{personalInfo.name}</span>
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-accent-500/30"
                viewBox="0 0 300 12"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 10C50 4 100 2 150 6C200 10 250 4 298 8"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </span>

            {/* Avatar */}
              <div className="animate-fade-in-down mb-6 flex justify-center">
                <div className="relative">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-white dark:border-surface-800 shadow-glow">
                    <img
                      src="/profile.webp"
                      alt="Ritik Shah"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Online indicator */}
                  <span className="absolute bottom-1 right-1 w-4 h-4 bg-emerald-500 border-2 border-white dark:border-surface-950 rounded-full" />
                </div>
              </div>
          </h1>

          {/* Title */}
          <div className="animate-fade-in-up animate-delay-200 mt-6 sm:mt-8">
            <p className="text-xl sm:text-2xl md:text-3xl font-medium text-surface-600 dark:text-surface-400 tracking-tight">
              {personalInfo.title}
            </p>
          </div>

          {/* Description */}
          <div className="animate-fade-in-up animate-delay-300 mt-6 sm:mt-8 max-w-2xl mx-auto">
            <p className="text-base sm:text-lg text-surface-500 dark:text-surface-400 leading-relaxed text-balance">
              {personalInfo.tagline}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-fade-in-up animate-delay-400 mt-10 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              onClick={() => smoothScrollTo('projects')}
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              }
            >
              View My Work
            </Button>
            <Button
              variant="secondary"
              onClick={() => smoothScrollTo('contact')}
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              }
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="animate-fade-in-up animate-delay-500 mt-12 sm:mt-14 flex justify-center">
            <SocialLinks />
          </div>

          {/* Scroll Indicator */}
          <div className="animate-fade-in animate-delay-700 mt-16 sm:mt-20">
            <button
              onClick={() => smoothScrollTo('about')}
              className="inline-flex flex-col items-center gap-2 text-surface-400 dark:text-surface-500 hover:text-surface-600 dark:hover:text-surface-300 transition-colors group"
              aria-label="Scroll down"
            >
              <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
              <div className="w-5 h-8 rounded-full border-2 border-current flex items-start justify-center p-1 group-hover:border-accent-500 transition-colors">
                <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}