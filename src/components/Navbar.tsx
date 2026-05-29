import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Volume2, VolumeX } from 'lucide-react';
import { NAV_LINKS } from '../data/constants';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [musicOn, setMusicOn] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Background music toggle
  useEffect(() => {
    // Placeholder — in production, link an actual audio file
  }, [musicOn]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'glass shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-bold font-[Outfit] gradient-text">
          {'<Dev />'}
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-text-secondary hover:text-neon-blue transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-neon-blue transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Music toggle */}
          <button
            id="music-toggle"
            onClick={() => setMusicOn(!musicOn)}
            className="p-2 rounded-xl text-text-muted hover:text-neon-purple transition-colors duration-300"
            aria-label="Toggle background music"
          >
            {musicOn ? <Volume2 size={18} /> : <VolumeX size={18} />}
          </button>

          {/* CTA */}
          <a
            href="#contact"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-xl text-sm font-medium bg-gradient-to-r from-neon-blue to-neon-purple text-bg-primary hover:shadow-lg hover:shadow-neon-blue/20 transition-all duration-300 btn-ripple"
          >
            Let's Talk
          </a>

          {/* Mobile hamburger */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-xl text-text-secondary hover:text-neon-blue transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden glass border-t border-border-glass"
        >
          <ul className="flex flex-col px-6 py-4 gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-text-secondary hover:text-neon-blue transition-colors text-base"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </motion.nav>
  );
}
