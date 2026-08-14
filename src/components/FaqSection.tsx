import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQS_DATA } from '../data/loremData';
import { ChevronDown, Search, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('f1');
  const [searchTerm, setSearchTerm] = useState('');

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const filteredFaqs = FAQS_DATA.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="faq" className="py-20 lg:py-28 bg-slate-50/60 relative border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-poppins leading-tight">
            Dúvidas Frequentes
          </h2>
          <p className="text-base text-slate-600 mt-2 leading-relaxed">
            Esclareça suas principais dúvidas sobre o tratamento, avaliação e nosso método de trabalho.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative mb-8">
          <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Pesquisar uma dúvida..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-colors shadow-xs"
          />
        </div>

        {/* FAQ List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            const pastelBgs = ['bg-amber-100/70', 'bg-emerald-100/70', 'bg-rose-100/70', 'bg-sky-100/70'];
            const pastelBg = pastelBgs[idx % pastelBgs.length];

            return (
              <div
                key={faq.id}
                className="rounded-md border border-slate-200 bg-white overflow-hidden transition-colors shadow-xs"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-poppins font-semibold text-slate-900 hover:text-sky-700 text-sm sm:text-base transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <div className={`w-7 h-7 rounded-sm flex items-center justify-center shrink-0 ${pastelBg}`}>
                      <HelpCircle className="w-4 h-4 text-slate-800" />
                    </div>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-slate-400"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
