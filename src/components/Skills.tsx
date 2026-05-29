import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { SKILLS, FLOATING_TECH } from '../data/constants';

export default function Skills() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="skills" ref={ref} className="relative py-28 px-6">
      {/* Ambient bg */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 rounded-full bg-neon-purple/[0.03] blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-neon-purple text-sm font-semibold tracking-widest uppercase mb-3">
            Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-[Outfit] mb-4">
            Technologies I{' '}
            <span className="gradient-text">Work With</span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-neon-purple to-neon-pink" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Progress bars */}
          <div className="space-y-5">
            {SKILLS.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-text-primary">
                    {skill.name}
                  </span>
                  <span className="text-xs text-text-muted font-mono">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 rounded-full bg-white/5 overflow-hidden">
                  <motion.div
                    className="h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                    transition={{ duration: 1.2, delay: 0.3 + i * 0.1, ease: 'easeOut' }}
                    style={{
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}aa)`,
                      boxShadow: `0 0 12px ${skill.color}33`,
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Floating tech icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative h-80 hidden lg:block"
          >
            {FLOATING_TECH.map((emoji, i) => {
              const angle = (i / FLOATING_TECH.length) * Math.PI * 2;
              const radius = 100 + (i % 3) * 30;
              const x = 50 + (Math.cos(angle) * radius) / 3.5;
              const y = 50 + (Math.sin(angle) * radius) / 3.5;

              return (
                <motion.div
                  key={i}
                  className="absolute text-3xl"
                  style={{ left: `${x}%`, top: `${y}%` }}
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4 + i * 0.3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.2,
                  }}
                >
                  {emoji}
                </motion.div>
              );
            })}

            {/* Center glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-neon-blue/10 blur-3xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
