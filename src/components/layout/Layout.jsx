import Navbar from './Navbar';
import Footer from './Footer';
import SEOHead from '../seo/SEOHead';

export default function Layout({ children }) {
  return (
    <>
      <SEOHead />
      <div className="relative min-h-screen">
        {/* Global Ambient Background */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="glow-orb w-[600px] h-[600px] bg-accent-400/30 dark:bg-accent-500/20 top-[-200px] right-[-200px] animate-float" />
          <div className="glow-orb w-[500px] h-[500px] bg-purple-400/20 dark:bg-purple-500/10 bottom-[-100px] left-[-150px] animate-float-delayed" />
          <div className="glow-orb w-[400px] h-[400px] bg-cyan-400/15 dark:bg-cyan-500/10 top-[40%] left-[50%] animate-float-slow" />
        </div>

        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
}