import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, MessageCircle } from 'lucide-react';
import { ServiceItem } from '../../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onBook?: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose
}) => {
  // Lock body scroll when modal is active
  useEffect(() => {
    if (service) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [service]);

  if (!service) return null;

  // Custom professional WhatsApp message without emojis or markdown bold formatting
  const customMessage = `Olá, gostaria de obter mais informações sobre a especialidade de ${service.title} e verificar a disponibilidade de horários para atendimento.`;
  const whatsappUrl = `https://wa.me/5519988930792?text=${encodeURIComponent(customMessage)}`;

  return (
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/50 backdrop-blur-xs"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-xl rounded-lg p-5 sm:p-6 shadow-2xl border border-slate-200 bg-white my-auto max-h-[90vh] flex flex-col justify-between"
        >
          <button
            onClick={onClose}
            className="absolute top-3 right-3 p-1.5 text-slate-400 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-md transition-colors z-10"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>

          <div>
            {service.code && (
              <div className="mb-2">
                <span className="text-[11px] font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  {service.code}
                </span>
              </div>
            )}

            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-poppins pr-8 mb-1">
              {service.title}
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-slate-500 mb-4">
              {service.subtitle}
            </p>

            {/* O que é: */}
            <div className="p-3 bg-slate-50 rounded-md border border-slate-200 mb-3 space-y-1">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider font-poppins">
                O que é:
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {service.whatIs || service.description}
              </p>
            </div>

            {/* O que faz: */}
            {service.whatDoes && (
              <div className="p-3 bg-sky-50/70 rounded-md border border-sky-200/80 mb-4 space-y-1">
                <h4 className="text-xs font-bold text-sky-900 uppercase tracking-wider font-poppins">
                  O que faz:
                </h4>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed">
                  {service.whatDoes}
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex-1 py-2.5 px-5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm flex items-center justify-center gap-2 transition-colors shadow-xs"
            >
              <MessageCircle className="w-4 h-4 fill-white/20" />
              <span>Agendar Atendimento</span>
            </a>
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 font-semibold text-sm transition-colors border border-slate-200"
            >
              Fechar
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

