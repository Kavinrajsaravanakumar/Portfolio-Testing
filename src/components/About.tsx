import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code2, Palette, Rocket, Zap } from 'lucide-react';

const highlights = [
  { icon: Code2, label: 'Clean Code', desc: 'Scalable & maintainable architectures' },
  { icon: Palette, label: 'Design Sense', desc: 'Pixel-perfect, user-centered UI' },
  { icon: Rocket, label: 'Performance', desc: 'Optimized for speed & SEO' },
  { icon: Zap, label: 'Fast Delivery', desc: 'Agile workflows & rapid iteration' },
];

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="about" ref={ref} className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-neon-blue text-sm font-semibold tracking-widest uppercase mb-3">
            About Me
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-[Outfit] mb-4">
            Turning Ideas Into{' '}
            <span className="gradient-text">Digital Reality</span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-neon-blue to-neon-purple" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-text-secondary leading-relaxed mb-6 text-base">
              I'm a full-stack engineer with 5+ years of experience building modern web applications.
              My passion lies at the intersection of design and engineering — creating experiences
              that are not only visually stunning but also lightning-fast and accessible.
            </p>
            <p className="text-text-secondary leading-relaxed mb-6 text-base">
              From ideation to deployment, I handle the entire development lifecycle. I specialize
              in React ecosystems, cloud-native architectures, and developer experience tooling.
              When I'm not coding, you'll find me contributing to open source or writing technical articles.
            </p>
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg text-xs font-medium glass text-neon-blue"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="p-5 rounded-2xl glass group hover:glow-blue cursor-default transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 rounded-xl bg-neon-blue/10 flex items-center justify-center mb-3 group-hover:bg-neon-blue/20 transition-colors">
                  <item.icon size={20} className="text-neon-blue" />
                </div>
                <h3 className="text-sm font-semibold text-text-primary mb-1">
                  {item.label}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
