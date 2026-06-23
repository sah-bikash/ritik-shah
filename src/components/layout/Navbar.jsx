import { useState, useEffect, useCallback } from 'react';
import { navItems } from '../../data/portfolioData';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import ThemeToggle from '../ui/ThemeToggle';
import { cn, smoothScrollTo } from '../../utils/helpers';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const sectionIds = navItems.map((item) => item.href);
  const activeSection = useScrollSpy(sectionIds, 120);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  const handleNavClick = useCallback(
    (href) => {
      smoothScrollTo(href);
      setIsMobileOpen(false);
    },
    []
  );

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out',
          isScrolled
            ? 'py-3'
            : 'py-4 sm:py-5'
        )}
        role="banner"
      >
        <div className="container-custom">
          <nav
            className={cn(
              'relative flex items-center justify-between rounded-2xl px-4 sm:px-6 py-3 transition-all duration-500',
              isScrolled
                ? 'glass shadow-lg'
                : 'bg-transparent'
            )}
            role="navigation"
            aria-label="Main navigation"
          >
            {/* Logo */}
              <button
                onClick={() => handleNavClick('home')}
                className="relative z-10 flex items-center gap-2 group"
                aria-label="Go to home"
              >
                {/* Replaced 'R' with Photo */}
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-110 border border-surface-200 dark:border-surface-700">
                  <img 
                    src="/profile.webp" 
                    alt="Ritik Shah" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-semibold text-base sm:text-lg tracking-tight hidden xs:block">
                  Ritik<span className="text-accent-500">.</span>
                </span>
              </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    'relative px-3 xl:px-4 py-2 text-[13px] xl:text-sm font-medium rounded-lg transition-all duration-300',
                    activeSection === item.href
                      ? 'text-accent-600 dark:text-accent-400'
                      : 'text-surface-600 dark:text-surface-400 hover:text-surface-900 dark:hover:text-white'
                  )}
                  aria-current={activeSection === item.href ? 'page' : undefined}
                >
                  {item.label}
                  {activeSection === item.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent-500 rounded-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Right side: Theme + Mobile */}
            <div className="relative z-10 flex items-center gap-3">
              <ThemeToggle />

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden relative w-9 h-9 flex items-center justify-center rounded-lg hover:bg-surface-100 dark:hover:bg-white/[0.06] transition-colors"
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileOpen}
              >
                <div className="w-5 h-4 relative flex flex-col justify-between">
                  <span
                    className={cn(
                      'w-full h-[1.5px] bg-current rounded-full transition-all duration-300 origin-center',
                      isMobileOpen && 'rotate-45 translate-y-[5px]'
                    )}
                  />
                  <span
                    className={cn(
                      'w-full h-[1.5px] bg-current rounded-full transition-all duration-300',
                      isMobileOpen && 'opacity-0 scale-0'
                    )}
                  />
                  <span
                    className={cn(
                      'w-full h-[1.5px] bg-current rounded-full transition-all duration-300 origin-center',
                      isMobileOpen && '-rotate-45 -translate-y-[5px]'
                    )}
                  />
                </div>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 lg:hidden transition-all duration-500',
          isMobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/20 dark:bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={cn(
            'absolute top-20 left-4 right-4 glass rounded-2xl p-6 shadow-2xl transition-all duration-500',
            isMobileOpen
              ? 'translate-y-0 opacity-100'
              : '-translate-y-8 opacity-0'
          )}
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map((item, i) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  'w-full text-left px-4 py-3 rounded-xl text-[15px] font-medium transition-all duration-300',
                  activeSection === item.href
                    ? 'bg-accent-500/10 text-accent-600 dark:text-accent-400'
                    : 'text-surface-600 dark:text-surface-400 hover:bg-surface-100 dark:hover:bg-white/[0.04]'
                )}
                style={{ animationDelay: `${i * 50}ms` }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}