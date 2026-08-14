import React from 'react';
import { motion } from 'motion/react';
import { SERVICES_DATA } from '../data/loremData';
import { ServiceItem } from '../types';
import {
  Activity,
  HeartPulse,
  Brain,
  Baby,
  Sparkles,
  Stethoscope,
  Users,
  Compass
} from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Brain: <Brain className="w-5 h-5 text-emerald-600" />,
  Sparkles: <Sparkles className="w-5 h-5 text-amber-600" />,
  Activity: <Activity className="w-5 h-5 text-sky-600" />,
  HeartPulse: <HeartPulse className="w-5 h-5 text-rose-600" />,
  Baby: <Users className="w-5 h-5 text-indigo-600" />,
  Stethoscope: <Stethoscope className="w-5 h-5 text-teal-600" />,
  Compass: <Compass className="w-5 h-5 text-sky-600" />
};

interface ServicesSectionProps {
  onSelectService?: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-10 sm:py-16 lg:py-20 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="flex items-center gap-1.5 mb-2.5">
            <span className="w-3 h-1 rounded-sm bg-amber-300" />
            <span className="w-3 h-1 rounded-sm bg-emerald-300" />
            <span className="w-3 h-1 rounded-sm bg-rose-300" />
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-poppins leading-tight">
            Nossas Especialidades & Abordagens
          </h2>
          <p className="text-xs sm:text-base text-slate-600 mt-1.5 sm:mt-2 leading-relaxed">
            Conheça as áreas de atuação clínica e terapêutica dedicadas ao desenvolvimento infantil e suporte às famílias.
          </p>
        </div>

        {/* Services Grid (2x on mobile, 2x on md/lg, compact styling) */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-3 sm:gap-6">
          {SERVICES_DATA.map((service, idx) => {
            const pastelIconBgs = [
              'bg-emerald-50 border-emerald-200/80',
              'bg-amber-50 border-amber-200/80',
              'bg-sky-50 border-sky-200/80',
              'bg-rose-50 border-rose-200/80',
              'bg-indigo-50 border-indigo-200/80',
              'bg-teal-50 border-teal-200/80',
              'bg-violet-50 border-violet-200/80',
              'bg-cyan-50 border-cyan-200/80'
            ];
            const pastelBg = pastelIconBgs[idx % pastelIconBgs.length];

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.03 }}
                onClick={() => onSelectService && onSelectService(service)}
                className="group p-3.5 sm:p-6 rounded-lg sm:rounded-xl border border-slate-200/90 bg-white hover:bg-slate-50/50 cursor-pointer hover:border-sky-300 transition-all shadow-2xs hover:shadow-md flex flex-col justify-between"
              >
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-md sm:rounded-lg border flex items-center justify-center ${pastelBg}`}>
                      {iconMap[service.iconName] || <Brain className="w-4 h-4 sm:w-5 sm:h-5 text-sky-700" />}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs sm:text-lg font-bold text-slate-900 font-poppins leading-tight sm:leading-snug line-clamp-2">
                      {service.title}
                    </h3>
                    <span className="text-[11px] sm:text-xs font-medium text-slate-500 block mt-1 line-clamp-2 sm:line-clamp-none leading-tight">
                      {service.subtitle}
                    </span>
                  </div>
                </div>

                <div className="pt-2 sm:pt-3">
                  <div className="w-full py-1.5 sm:py-2 px-2 sm:px-3 rounded-md bg-sky-50 border border-sky-200 text-sky-800 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600 font-bold text-[10px] sm:text-xs text-center transition-colors flex items-center justify-center gap-1 sm:gap-1.5">
                    <span>Saber mais</span>
                    <span className="text-xs sm:text-sm">→</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
