import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, MapPin, Mail, Phone } from 'lucide-react';
import { useRipple } from '../hooks/useAnimations';

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const handleRipple = useRipple();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  const contactInfo = [
    { icon: MapPin, label: 'San Francisco, CA' },
    { icon: Mail, label: 'hello@alexchen.dev' },
    { icon: Phone, label: '+1 (555) 123-4567' },
  ];

  return (
    <section id="contact" ref={ref} className="relative py-28 px-6">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-neon-blue/[0.03] blur-[150px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-neon-purple/[0.04] blur-[120px]" />
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-neon-blue text-sm font-semibold tracking-widest uppercase mb-3">
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold font-[Outfit] mb-4">
            Let's Build Something{' '}
            <span className="gradient-text">Together</span>
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full bg-gradient-to-r from-neon-blue to-neon-purple" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            <p className="text-text-secondary text-sm leading-relaxed">
              I'm always excited to collaborate on innovative projects. Whether you have a startup idea,
              need a technical partner, or just want to say hi — my inbox is always open.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-center gap-3 group">
                  <div className="w-10 h-10 rounded-xl glass flex items-center justify-center group-hover:glow-blue transition-all duration-300">
                    <item.icon size={16} className="text-neon-blue" />
                  </div>
                  <span className="text-sm text-text-secondary group-hover:text-text-primary transition-colors">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="lg:col-span-3 p-6 sm:p-8 rounded-2xl glass space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-name" className="block text-xs text-text-muted mb-2 uppercase tracking-wider">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-border-glass text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-neon-blue/40 focus:ring-1 focus:ring-neon-blue/20 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-xs text-text-muted mb-2 uppercase tracking-wider">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-border-glass text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-neon-blue/40 focus:ring-1 focus:ring-neon-blue/20 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-xs text-text-muted mb-2 uppercase tracking-wider">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-border-glass text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-neon-blue/40 focus:ring-1 focus:ring-neon-blue/20 transition-all duration-300"
                placeholder="Project inquiry"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs text-text-muted mb-2 uppercase tracking-wider">
                Message
              </label>
              <textarea
                id="contact-message"
                rows={5}
                required
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-border-glass text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-neon-blue/40 focus:ring-1 focus:ring-neon-blue/20 transition-all duration-300 resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              onMouseMove={handleRipple}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl font-semibold text-sm bg-gradient-to-r from-neon-blue to-neon-purple text-bg-primary hover:shadow-xl hover:shadow-neon-blue/20 hover:-translate-y-0.5 transition-all duration-300 btn-ripple"
            >
              {sent ? (
                'Message Sent! ✨'
              ) : (
                <>
                  Send Message
                  <Send size={16} />
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
