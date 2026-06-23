import { personalInfo, navItems, socialLinks } from '../../data/portfolioData';
import SocialLinks from '../ui/SocialLinks';
import { smoothScrollTo } from '../../utils/helpers';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-surface-200/50 dark:border-white/[0.04]" role="contentinfo">
      <div className="container-custom py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <button
              onClick={() => smoothScrollTo('home')}
              className="flex items-center gap-2 mb-4 group"
              aria-label="Go to home"
            >
              {/* Replaced 'R' with Photo */}
              <div className="w-9 h-9 rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-110 border border-surface-200 dark:border-surface-700">
                <img 
                  src="/profile.webp" 
                  alt="Ritik Shah" 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="font-semibold text-lg tracking-tight">
                Ritik<span className="text-accent-500">.</span>
              </span>
            </button>
            <p className="text-sm text-surface-500 dark:text-surface-400 leading-relaxed mb-6 max-w-xs">
              {personalInfo.tagline}
            </p>
            <SocialLinks />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-surface-400 dark:text-surface-500 mb-4">
              Navigation
            </h4>
            <nav aria-label="Footer navigation">
              <ul className="space-y-2.5">
                {navItems.slice(0, 6).map((item) => (
                  <li key={item.href}>
                    <button
                      onClick={() => smoothScrollTo(item.href)}
                      className="text-sm text-surface-600 dark:text-surface-400 hover:text-surface-900 dark:hover:text-white transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-surface-400 dark:text-surface-500 mb-4">
              More
            </h4>
            <nav aria-label="Footer secondary navigation">
              <ul className="space-y-2.5">
                {navItems.slice(6).map((item) => (
                  <li key={item.href}>
                    <button
                      onClick={() => smoothScrollTo(item.href)}
                      className="text-sm text-surface-600 dark:text-surface-400 hover:text-surface-900 dark:hover:text-white transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-surface-400 dark:text-surface-500 mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-sm text-surface-600 dark:text-surface-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone.replace(/\s/g, '')}`}
                  className="text-sm text-surface-600 dark:text-surface-400 hover:text-accent-600 dark:hover:text-accent-400 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </li>
              <li>
                <span className="text-sm text-surface-600 dark:text-surface-400">
                  {personalInfo.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-surface-200/50 dark:border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-surface-400 dark:text-surface-500">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-surface-400 dark:text-surface-500">
            Crafted with{' '}
            <span className="text-red-500" aria-label="love">
              ♥
            </span>{' '}
            by{' '}
            <a 
              href="https://bikashkumarsah.com.np" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-surface-600 dark:hover:text-surface-300 transition-colors duration-200 underline underline-offset-2"
            >
              Bikash
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}