import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, ArrowRight } from 'lucide-react';

interface CtaBannerSectionProps {
  onOpenAppointment: () => void;
}

export const CtaBannerSection: React.FC<CtaBannerSectionProps> = ({ onOpenAppointment }) => {
  return (
    <section className="w-full bg-slate-900 text-white border-y border-slate-800 relative overflow-hidden">
      <div className="w-full max-w-5xl mx-auto py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center space-y-6">
        
        {/* Pastel Accent Line */}
        <div className="flex items-center gap-1.5 justify-center mb-2">
          <span className="w-3 h-1 rounded-sm bg-amber-300/80" />
          <span className="w-3 h-1 rounded-sm bg-emerald-300/80" />
          <span className="w-3 h-1 rounded-sm bg-rose-300/80" />
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-poppins leading-tight text-white max-w-3xl"
        >
          Pronto para dar o próximo passo na evolução do seu filho?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          Entre em contato conosco pelo WhatsApp, tire suas dúvidas e agende uma avaliação com nossa equipe especializada.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="pt-2"
        >
          <a
            href="https://wa.me/5519988930792?text=Olá!%20Gostaria%20de%20agendar%20uma%20avaliação%20para%20meu%20filho."
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm sm:text-base flex items-center justify-center gap-3 transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-5 h-5 text-white fill-white/20" />
            <span>Falar com a Equipe no WhatsApp</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};
