import React from 'react';
import { ArrowUp, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';

export const FooterSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100/90 border-t border-slate-200/80 text-slate-600 pt-8 sm:pt-14 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Compact 2 columns on mobile, 4 columns on lg */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 pb-8 sm:pb-10 border-b border-slate-200/80">
          
          {/* Brand Col - Full width on small mobile */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1 space-y-3">
            <a href="#" className="inline-block">
              <Logo className="h-8 sm:h-9" />
            </a>
            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Desenvolvimento infantil com amor, acolhimento e embasamento científico em Mogi Guaçu - SP.
            </p>
          </div>

          {/* Col 2 - Navegação */}
          <div className="space-y-2.5 text-xs">
            <h4 className="text-xs font-bold text-slate-900 font-poppins uppercase tracking-wider">
              Navegação
            </h4>
            <ul className="space-y-1.5 text-slate-600">
              <li><a href="#services" className="hover:text-sky-600 transition-colors inline-block py-0.5">Especialidades</a></li>
              <li><a href="#gallery" className="hover:text-sky-600 transition-colors inline-block py-0.5">Nossa Galeria</a></li>
              <li><a href="#contact" className="hover:text-sky-600 transition-colors inline-block py-0.5">Localização & Contato</a></li>
            </ul>
          </div>

          {/* Col 3 - Especialidades */}
          <div className="space-y-2.5 text-xs">
            <h4 className="text-xs font-bold text-slate-900 font-poppins uppercase tracking-wider">
              Especialidades
            </h4>
            <ul className="space-y-1.5 text-slate-600">
              <li><a href="#services" className="hover:text-sky-600 transition-colors inline-block py-0.5">Psicoterapia & ABA</a></li>
              <li><a href="#services" className="hover:text-sky-600 transition-colors inline-block py-0.5">Fonoaudiologia</a></li>
              <li><a href="#services" className="hover:text-sky-600 transition-colors inline-block py-0.5">Terapia Ocupacional</a></li>
              <li><a href="#services" className="hover:text-sky-600 transition-colors inline-block py-0.5">Acolhimento de Pais</a></li>
            </ul>
          </div>

          {/* Col 4 - Diferenciais / Selos */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1 space-y-2.5 text-xs">
            <h4 className="text-xs font-bold text-slate-900 font-poppins uppercase tracking-wider">
              Compromisso Clínico
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-2">
              <div className="flex items-center gap-2 text-slate-700 bg-white/70 sm:bg-transparent p-2 sm:p-0 rounded-md border border-slate-200/60 sm:border-0 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                <span className="text-[11px] sm:text-xs">Ambiente Seguro e Acolhedor</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 bg-white/70 sm:bg-transparent p-2 sm:p-0 rounded-md border border-slate-200/60 sm:border-0 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span className="text-[11px] sm:text-xs">Práticas Baseadas em Evidências</span>
              </div>
              <div className="flex items-center gap-2 text-slate-700 bg-white/70 sm:bg-transparent p-2 sm:p-0 rounded-md border border-slate-200/60 sm:border-0 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                <span className="text-[11px] sm:text-xs">Suporte Integral às Famílias</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col-reverse sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 text-center sm:text-left">
          <p className="text-[11px] sm:text-xs">
            © {new Date().getFullYear()} Clínica Comportamental Nosso Lar. Todos os direitos reservados.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-white border border-slate-200 text-slate-700 font-medium text-xs hover:bg-slate-50 transition-colors shadow-xs cursor-pointer"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3 h-3" />
          </button>
        </div>

      </div>
    </footer>
  );
};
