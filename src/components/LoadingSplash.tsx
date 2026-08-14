import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Activity } from 'lucide-react';

export const LoadingSplash: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 300);
          return 100;
        }
        return prev + 5;
      });
    }, 40);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-mesh-soft bg-[#F7FAFD]"
      >
        <div className="relative flex flex-col items-center">
          {/* Animated Logo Container */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#8EC5FF] via-[#B8D8FF] to-[#D6E9FF] p-0.5 shadow-xl flex items-center justify-center mb-6"
          >
            <div className="w-full h-full rounded-[22px] bg-white/80 backdrop-blur-md flex items-center justify-center text-[#27496D]">
              <Activity className="w-10 h-10 text-[#27496D] animate-pulse" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold font-poppins text-[#27496D] tracking-tight mb-2"
          >
            Clínica Nosso Lar
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs font-mono text-[#8FA6BF] uppercase tracking-widest mb-8"
          >
            Clínica Comportamental & Desenvolvimento Infantil
          </motion.p>

          {/* Progress bar */}
          <div className="w-64 h-1.5 bg-[#EEF5FC] rounded-full overflow-hidden border border-[#B8D8FF]/30 shadow-inner">
            <motion.div
              className="h-full bg-gradient-to-r from-[#8EC5FF] to-[#B8D8FF]"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut' }}
            />
          </div>

          <div className="mt-3 text-xs font-mono text-[#27496D] font-semibold">
            {progress}%
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
