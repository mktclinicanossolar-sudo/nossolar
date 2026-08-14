import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  message?: string;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({
  phoneNumber = '5519988930792',
  message = 'Olá! Gostaria de mais informações.'
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Contato via WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-lg hover:shadow-emerald-600/30 transition-all duration-300 group"
    >
      {/* Pulse effect */}
      <span className="absolute -inset-1 rounded-full bg-emerald-500/30 animate-ping pointer-events-none" />

      {/* WhatsApp Icon */}
      <MessageCircle className="w-6 h-6 text-white fill-white/20 relative z-10" />

      {/* Tooltip on hover */}
      <span className="absolute right-full mr-3 px-3 py-1.5 rounded-md bg-slate-900 text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-md">
        Falar no WhatsApp
      </span>
    </motion.a>
  );
};
