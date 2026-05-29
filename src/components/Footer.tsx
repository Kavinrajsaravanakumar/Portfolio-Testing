import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/constants';

export default function Footer() {
  return (
    <footer className="relative py-12 px-6 border-t border-border-glass">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        {/* Social icons */}
        <div className="flex items-center gap-4">
          {SOCIAL_LINKS.map((link) => (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="w-11 h-11 rounded-xl glass flex items-center justify-center text-text-muted hover:text-neon-blue hover:glow-blue transition-all duration-300"
              aria-label={link.name}
            >
              <link.icon size={18} />
            </motion.a>
          ))}
        </div>

        {/* Links */}
        <div className="flex items-center gap-6 text-xs text-text-muted">
          <a href="#hero" className="hover:text-neon-blue transition-colors">Home</a>
          <a href="#about" className="hover:text-neon-blue transition-colors">About</a>
          <a href="#projects" className="hover:text-neon-blue transition-colors">Projects</a>
          <a href="#contact" className="hover:text-neon-blue transition-colors">Contact</a>
        </div>

        {/* Credit */}
        <p className="text-xs text-text-muted flex items-center gap-1.5">
          Built with{' '}
          <Heart size={12} className="text-neon-pink fill-neon-pink" />{' '}
          by Alex Chen &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
