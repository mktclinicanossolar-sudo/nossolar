import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenAppointment: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenAppointment,
  onExploreServices
}) => {
  // Desktop banner default (/hero-desktop.jpg)
  const [desktopImage, setDesktopImage] = useState<string>('/hero-desktop.jpg');

  // Mobile banner default (/hero-mobile.jpg)
  const [mobileImage, setMobileImage] = useState<string>('/hero-mobile.jpg');

  return (
    <section className="relative w-full bg-slate-900 text-white overflow-hidden">
      {/* Responsive Banner Media Container */}
      <div className="relative w-full min-h-[500px] sm:min-h-[580px] lg:min-h-[660px] flex items-center">
        
        {/* 1. Desktop Image (1920x1080 Aspect Ratio) */}
        <img
          src={desktopImage}
          alt="Clínica Nosso Lar - Banner Principal"
          referrerPolicy="no-referrer"
          onError={() => setDesktopImage('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80')}
          className="hidden md:block absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* 2. Mobile Image */}
        <img
          src={mobileImage}
          alt="Clínica Nosso Lar - Banner Mobile"
          referrerPolicy="no-referrer"
          onError={() => setMobileImage('https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1080&h=1350&q=80')}
          className="block md:hidden absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Lighter Gradient Overlay so background image is exposed */}
        <div className="absolute inset-0 bg-slate-950/25 bg-gradient-to-r from-slate-950/50 via-slate-950/30 to-transparent" />

        {/* Content Overlay */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl space-y-6 text-left">
            


            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins text-white tracking-tight leading-tight drop-shadow-md"
            >
              Cuidado, Acolhimento e Desenvolvimento Infantil
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base sm:text-lg text-white/95 leading-relaxed font-medium drop-shadow-sm"
            >
              Clínica especializada em Psicologia, Intervenção ABA, Fonoaudiologia, Terapia Ocupacional e Psicopedagogia em Mogi Guaçu - SP.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2"
            >
              <button
                onClick={onOpenAppointment}
                className="px-7 py-3.5 rounded-md bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm transition-colors text-center flex items-center justify-center gap-2 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Avaliação</span>
              </button>

              <button
                onClick={onExploreServices}
                className="px-7 py-3.5 rounded-md bg-slate-900/70 hover:bg-slate-900/90 text-white border border-white/30 backdrop-blur-md font-semibold text-sm transition-colors text-center flex items-center justify-center gap-2"
              >
                <span>Nossas Especialidades</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};
