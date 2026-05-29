import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen({ onFinish }: { onFinish: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(onFinish, 400);
          return 100;
        }
        return p + 2;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {progress <= 100 && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-bg-primary"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Ambient orbs */}
          <div className="absolute top-1/4 left-1/3 w-64 h-64 rounded-full bg-neon-blue/5 blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/3 w-64 h-64 rounded-full bg-neon-purple/5 blur-3xl animate-pulse-glow" />

          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center"
          >
            <h1 className="text-4xl font-bold font-[Outfit] gradient-text mb-2">
              Portfolio
            </h1>
            <p className="text-text-muted text-sm tracking-widest uppercase">
              Loading experience
            </p>
          </motion.div>

          {/* Spinner */}
          <div className="loader-ring mb-8" />

          {/* Progress bar */}
          <div className="w-48 h-0.5 rounded-full bg-white/5 overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{
                background: 'linear-gradient(90deg, #00d4ff, #a855f7)',
                width: `${progress}%`,
              }}
              transition={{ ease: 'linear' }}
            />
          </div>

          <p className="mt-4 text-text-muted text-xs font-mono">
            {progress}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
