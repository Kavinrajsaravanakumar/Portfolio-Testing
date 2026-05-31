import { motion } from 'framer-motion';
import { ArrowDown, Download } from 'lucide-react';
import { useTypingEffect, useRipple } from '../hooks/useAnimations';

const roles = [
  'Full-Stack Engineer',
  'UI/UX Enthusiast',
  'Cloud Architect',
  'Open-Source Contributor',
];

export default function Hero() {
  const typedText = useTypingEffect(roles, 90, 50, 2200);
  const handleRipple = useRipple();

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Gradient orbs */}
      <div className="absolute top-20 -left-32 w-[500px] h-[500px] rounded-full bg-neon-blue/[0.04] blur-[120px] animate-float" />
      <div className="absolute bottom-20 -right-32 w-[500px] h-[500px] rounded-full bg-neon-purple/[0.06] blur-[120px] animate-float" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-pink/[0.03] blur-[150px] animate-pulse-glow" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs text-neon-blue mb-8 tracking-wider uppercase"
        >
          <span className="w-2 h-2 rounded-full bg-neon-blue animate-pulse" />
          Available for work
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold font-[Outfit] leading-tight mb-4"
        >
          Hi, I'm{' '}
          <span className="gradient-text">Kavinraj  S   </span>
        </motion.h1>

        {/* Typed role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl sm:text-2xl text-text-secondary mb-6 h-8 font-[Outfit]"
        >
          <span>{typedText}</span>
          <span className="typing-cursor text-neon-blue ml-0.5">|</span>
        </motion.div>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-text-muted text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I craft beautiful, performant web experiences with modern technologies.
          Passionate about clean code, elegant design, and pushing the boundaries of what's possible on the web.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            onMouseMove={handleRipple}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm bg-gradient-to-r from-neon-blue to-neon-purple text-bg-primary hover:shadow-xl hover:shadow-neon-blue/20 hover:-translate-y-0.5 transition-all duration-300 btn-ripple"
          >
            View Projects
            <ArrowDown size={16} />
          </a>
          <a
            href="#contact"
            onMouseMove={handleRipple}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-sm glass text-text-primary hover:border-neon-purple/30 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-neon-purple/10 transition-all duration-300 btn-ripple"
          >
            <Download size={16} />
            Download CV
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border border-border-glass flex items-start justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-neon-blue" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
