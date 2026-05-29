import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { EXPERIENCES } from '../data/constants';

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="experience" ref={ref} className="relative py-28 px-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-neon-pink/[0.03] blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-neon-pink text-sm font-semibold tracking-widest uppercase mb-3">
            Experience
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-[Outfit] mb-4">
            Where I've{' '}
            <span className="gradient-text">Worked</span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-neon-pink to-neon-purple" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-neon-blue/30 via-neon-purple/30 to-transparent" />

          {EXPERIENCES.map((exp, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className={`relative flex items-start gap-6 mb-12 md:mb-16 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-neon-purple border-2 border-bg-primary z-10 mt-2 glow-purple" />

                {/* Card */}
                <div
                  className={`ml-14 md:ml-0 md:w-[45%] ${
                    isLeft ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  <div className="p-6 rounded-2xl glass group hover:glow-purple hover:-translate-y-1 transition-all duration-500">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-neon-purple/10 flex items-center justify-center">
                        <Briefcase size={16} className="text-neon-purple" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold font-[Outfit] text-text-primary">
                          {exp.role}
                        </h3>
                        <p className="text-xs text-neon-purple font-medium">
                          {exp.company}
                        </p>
                      </div>
                    </div>
                    <p className="text-xs text-text-muted mb-3 font-mono">
                      {exp.duration}
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded-md text-[10px] font-medium bg-neon-purple/10 text-neon-purple/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
