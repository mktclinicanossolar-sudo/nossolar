import React from 'react';
import { motion } from 'motion/react';
import { ABOUT_DATA } from '../data/loremData';
import { HeartHandshake, ShieldCheck } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-poppins leading-tight">
            {ABOUT_DATA.title}
          </h2>
        </div>

        {/* Un-boxed Open Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <p className="text-lg text-slate-800 leading-relaxed font-medium">
              {ABOUT_DATA.paragraph1}
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              {ABOUT_DATA.paragraph2}
            </p>

            {/* Subtle Highlights with gentle pastel accents */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {ABOUT_DATA.highlights.map((item, idx) => {
                const pastelBgs = ['bg-amber-100/60 border-amber-200/60', 'bg-emerald-100/60 border-emerald-200/60', 'bg-rose-100/60 border-rose-200/60'];
                return (
                  <div key={idx} className={`p-4 rounded-md border ${pastelBgs[idx % 3]} space-y-1`}>
                    <h4 className="text-xs font-bold text-slate-900 font-poppins uppercase tracking-wider">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-700 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column Quote & Directive */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 border-l-2 border-sky-500 pl-6 sm:pl-8 space-y-6"
          >
            <div className="w-10 h-10 text-sky-600 flex items-center justify-center">
              <HeartHandshake className="w-8 h-8 text-sky-600" />
            </div>

            <blockquote className="text-xl font-medium text-slate-900 font-poppins italic leading-relaxed">
              {ABOUT_DATA.quote}
            </blockquote>

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <span className="text-sm font-bold text-slate-900 block font-poppins">
                Lorem Ipsum Dolor
              </span>
              <div className="flex items-center gap-2 text-slate-600 text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Lorem Ipsum Dolor Sit Amet</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
