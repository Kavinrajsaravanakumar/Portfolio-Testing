import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './icons';
import { PROJECTS } from '../data/constants';
import { useRipple } from '../hooks/useAnimations';

export default function Projects() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const handleRipple = useRipple();

  return (
    <section id="projects" ref={ref} className="relative py-28 px-6">
      {/* Ambient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] rounded-full bg-neon-blue/[0.03] blur-[150px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-neon-blue text-sm font-semibold tracking-widest uppercase mb-3">
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-[Outfit] mb-4">
            Featured{' '}
            <span className="gradient-text">Work</span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-neon-blue to-neon-purple" />
        </motion.div>

        {/* Project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="group relative rounded-2xl glass overflow-hidden hover:-translate-y-2 hover:shadow-xl hover:shadow-neon-blue/10 transition-all duration-500 cursor-default"
            >
              {/* Glow overlay on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, rgba(0,212,255,0.05), rgba(168,85,247,0.05))',
                }}
              />

              {/* Top gradient bar */}
              <div className="h-1 w-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="p-6">
                {/* Title */}
                <h3 className="text-lg font-bold font-[Outfit] text-text-primary mb-2 group-hover:text-neon-blue transition-colors duration-300">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-text-muted leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-white/5 text-text-secondary border border-border-glass"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex items-center gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseMove={handleRipple}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium glass text-text-secondary hover:text-neon-blue hover:border-neon-blue/20 transition-all duration-300 btn-ripple"
                  >
                    <GithubIcon size={14} />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onMouseMove={handleRipple}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-medium bg-gradient-to-r from-neon-blue/20 to-neon-purple/20 text-neon-blue hover:from-neon-blue/30 hover:to-neon-purple/30 transition-all duration-300 btn-ripple"
                  >
                    <ExternalLink size={14} />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
