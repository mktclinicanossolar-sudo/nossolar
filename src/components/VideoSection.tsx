import React from 'react';
import { motion } from 'motion/react';

interface VideoSectionProps {
  videoUrl?: string;
}

export const VideoSection: React.FC<VideoSectionProps> = ({
  videoUrl = 'https://www.youtube.com/embed/0BlaeAf2BdA?rel=0'
}) => {
  return (
    <section id="video-section" className="py-14 sm:py-18 lg:py-22 bg-sky-600 relative overflow-hidden text-white">
      {/* Subtle decorative background pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-700/40 via-transparent to-sky-700/40 pointer-events-none" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-500/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Video Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="bg-white/10 backdrop-blur-md p-2.5 sm:p-4 md:p-5 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/20"
        >
          {/* Horizontal Aspect Ratio (16:9) Video Embed Container */}
          <div className="relative w-full rounded-xl sm:rounded-2xl overflow-hidden shadow-lg bg-slate-900 aspect-video">
            <iframe
              src={videoUrl}
              title="Vídeo Clínica Nosso Lar"
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};
