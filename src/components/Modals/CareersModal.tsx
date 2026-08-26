import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  Send, 
  Mail,
  Building2,
  Filter
} from 'lucide-react';
import { jobsData } from '../../data/jobsData';
import { JobItem } from '../../types';

interface CareersModalProps {
  isOpen: boolean;
  onClose: () => void;
  phoneNumber?: string;
  email?: string;
}

export const CareersModal: React.FC<CareersModalProps> = ({
  isOpen,
  onClose,
  phoneNumber = '5519953314342',
  email = 'clinicanossolarlideranca@gmail.com'
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'mogi-guacu' | 'mogi-mirim'>('all');

  // Robust Scroll Lock across iOS, Safari, Chrome, and Desktop
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.left = '';
        document.body.style.right = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  const filteredJobs = jobsData.filter(job => {
    if (selectedFilter === 'mogi-guacu') return job.location.includes('Mogi Guaçu');
    if (selectedFilter === 'mogi-mirim') return job.location.includes('Mogi Mirim');
    return true;
  });

  const handleApplyWhatsApp = (job: JobItem) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(job.whatsappMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 md:p-6 bg-slate-900/75 backdrop-blur-xs"
          onClick={onClose}
        >
          {/* Main Modal Box - fixed height structure with absolute internal scroll */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[82vh] max-h-[640px] text-slate-700"
          >
            {/* Header with #f97068 background */}
            <div 
              className="text-white px-4 py-3 sm:px-5 sm:py-3.5 shrink-0 shadow-xs" 
              style={{ backgroundColor: '#f97068' }}
            >
              <div className="flex items-center justify-between gap-2">
                <div>
                  <h3 className="text-base sm:text-lg font-bold font-poppins text-white leading-tight">
                    Trabalhe Conosco
                  </h3>
                  <p className="text-[10px] sm:text-xs text-white/90">
                    Vagas abertas • Envie seu currículo
                  </p>
                </div>

                <button
                  onClick={onClose}
                  className="p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors shrink-0 cursor-pointer"
                  aria-label="Fechar"
                >
                  <X className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              {/* Filter Tabs */}
              <div className="flex items-center gap-1.5 mt-2 pt-2 border-t border-white/20 overflow-x-auto pb-0.5 scrollbar-none">
                <span className="text-[10px] sm:text-xs text-white/90 flex items-center gap-0.5 shrink-0 font-medium mr-0.5">
                  <Filter className="w-3 h-3" />
                </span>
                <button
                  onClick={() => setSelectedFilter('all')}
                  className={`px-2.5 py-0.5 rounded-md text-[10px] sm:text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedFilter === 'all'
                      ? 'bg-white text-[#d64f47] shadow-xs font-bold'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Todas ({jobsData.length})
                </button>
                <button
                  onClick={() => setSelectedFilter('mogi-guacu')}
                  className={`px-2.5 py-0.5 rounded-md text-[10px] sm:text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedFilter === 'mogi-guacu'
                      ? 'bg-white text-[#d64f47] shadow-xs font-bold'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Mogi Guaçu (3)
                </button>
                <button
                  onClick={() => setSelectedFilter('mogi-mirim')}
                  className={`px-2.5 py-0.5 rounded-md text-[10px] sm:text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    selectedFilter === 'mogi-mirim'
                      ? 'bg-white text-[#d64f47] shadow-xs font-bold'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                >
                  Mogi Mirim (1)
                </button>
              </div>
            </div>

            {/* Guaranteed Scrollable Jobs Area */}
            <div 
              className="flex-1 overflow-y-scroll p-3 sm:p-4 space-y-2.5 bg-slate-50"
              style={{
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-xl border border-slate-200 hover:border-slate-300 transition-all p-3 shadow-xs"
                >
                  {/* Job Header */}
                  <div className="flex items-start justify-between gap-2 pb-2 border-b border-slate-100">
                    <div className="min-w-0 flex-1">
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-poppins leading-tight truncate">
                        {job.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-1 mt-1">
                        <span className="inline-flex items-center gap-0.5 text-[9px] sm:text-[10px] font-semibold text-slate-700 bg-slate-100 px-1.5 py-0.5 rounded border border-slate-200/60">
                          <MapPin className="w-2.5 h-2.5 text-[#f97068]" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-0.5 text-[9px] sm:text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/70">
                          <Building2 className="w-2.5 h-2.5 text-emerald-600" />
                          {job.contractType}
                        </span>
                        <span className="inline-flex items-center gap-0.5 text-[9px] sm:text-[10px] font-semibold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200/70">
                          <Clock className="w-2.5 h-2.5 text-amber-600" />
                          {job.availability}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleApplyWhatsApp(job)}
                      className="px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-[10px] sm:text-xs transition-colors flex items-center justify-center gap-1 shadow-xs shrink-0 cursor-pointer"
                    >
                      <Send className="w-3 h-3" />
                      <span>Candidatar</span>
                    </button>
                  </div>

                  {/* Requirements List */}
                  <div className="mt-1.5 space-y-1 text-[10px] sm:text-[11px]">
                    <ul className="space-y-0.5">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-1 text-slate-600 leading-tight">
                          <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                      {job.differentials && job.differentials.map((diff, idx) => (
                        <li key={`diff-${idx}`} className="flex items-start gap-1 text-slate-700 font-medium bg-amber-50/70 px-1.5 py-0.5 rounded border border-amber-200/60 leading-tight mt-0.5">
                          <Sparkles className="w-3 h-3 text-amber-600 shrink-0 mt-0.5" />
                          <span>{diff}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              {/* Informational Contacts Box */}
              <div className="bg-white rounded-xl p-2.5 sm:p-3 border border-slate-200 text-[10px] sm:text-xs space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <span className="font-bold text-slate-900">Envio direto de currículo por e-mail:</span>
                  <a 
                    href={`mailto:${email}`}
                    className="inline-flex items-center gap-1 text-[#d64f47] hover:underline font-medium"
                  >
                    <Mail className="w-3 h-3 shrink-0" />
                    <span>{email}</span>
                  </a>
                </div>
                <div className="text-[10px] text-slate-500 pt-1 border-t border-slate-100">
                  WhatsApp Recrutamento: <strong className="text-slate-700">(19) 95331-4342</strong>
                </div>
              </div>
            </div>

            {/* Footer Close */}
            <div className="p-2.5 sm:p-3 bg-white border-t border-slate-200 flex items-center justify-between gap-2 shrink-0">
              <span className="text-[10px] text-slate-400">
                Clínica Nosso Lar
              </span>
              <button
                onClick={onClose}
                className="px-4 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
