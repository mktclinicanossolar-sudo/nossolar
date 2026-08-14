import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Clock, MessageCircle, ExternalLink } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const sharedMapUrl = 'https://maps.app.goo.gl/VEzUF7Q6YXXYVFST7';
  const preciseEmbedUrl = 'https://maps.google.com/maps?q=Rua+Rosa+Aparecida+Ricci+Simoni+302+Chacara+do+Ouro+Mogi+Guacu+SP&t=&z=17&ie=UTF8&iwloc=&output=embed';

  const unitsData = [
    {
      id: 'unit-1',
      title: 'Clínica Comportamental Nosso Lar - Unidade 1',
      badge: 'Chácara do Ouro',
      address: 'Rua Rosa Aparecida Ricci Simoni, 302 - Chácara do Ouro, Mogi Guaçu - SP',
      phone: '(19) 98893-0792 / (19) 3841-6090',
      hours: 'Seg a Sex: 07:00 - 18:00 | Sáb: 08:00 - 11:00',
      whatsappUrl: 'https://wa.me/5519988930792?text=Olá!%20Gostaria%20de%20atendimento%20para%20a%20Unidade%201%20em%20Mogi%20Guaçu.',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Rua+Rosa+Aparecida+Ricci+Simoni+302+Chacara+do+Ouro+Mogi+Guacu+SP',
      mapEmbedUrl: preciseEmbedUrl
    },
    {
      id: 'unit-2',
      title: 'Clínica Comportamental Nosso Lar - Unidade 2',
      badge: 'Parque Itacolomi',
      address: 'R. Conselheiro João Amélio de Oliveira, 290 - Lot. Parque Itacolomi, Mogi Guaçu - SP',
      phone: '(19) 98893-0792 / (19) 3841-6090',
      hours: 'Seg a Sex: 07:00 - 18:00 | Sáb: 08:00 - 11:00',
      whatsappUrl: 'https://wa.me/5519988930792?text=Olá!%20Gostaria%20de%20atendimento%20para%20a%20Unidade%202%20em%20Mogi%20Guaçu.',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=R.+Conselheiro+Joao+Amelio+de+Oliveira,+290+-+Lot.+Parque+Itacolomi,+Mogi+Guacu+-+SP',
      mapEmbedUrl: 'https://maps.google.com/maps?q=R.+Conselheiro+Joao+Amelio+de+Oliveira,+290+-+Lot.+Parque+Itacolomi,+Mogi+Guacu+-+SP&t=&z=17&ie=UTF8&iwloc=&output=embed'
    }
  ];

  const generalWhatsappUrl = 'https://wa.me/5519988930792?text=Olá!%20Gostaria%20de%20atendimento%20na%20Clínica%20Comportamental%20Nosso%20Lar.';

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-1.5 mb-3">
            <span className="w-3 h-1 rounded-sm bg-amber-300" />
            <span className="w-3 h-1 rounded-sm bg-emerald-300" />
            <span className="w-3 h-1 rounded-sm bg-rose-300" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-poppins leading-tight">
            Nossas Unidades & Localização
          </h2>
          <p className="text-base text-slate-600 mt-3 leading-relaxed">
            Conheça as nossas 2 unidades. Escolha a mais próxima e venha nos visitar ou entre em contato direto pelo WhatsApp.
          </p>
        </div>

        {/* Units Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {unitsData.map((unit, idx) => (
            <motion.div
              key={unit.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-md border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between"
            >
              {/* Card Header Info */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-bold text-slate-900 font-poppins">
                    {unit.title}
                  </h3>
                  <span className="px-3 py-1 rounded-sm text-xs font-semibold bg-emerald-100/90 text-emerald-900 border border-emerald-200">
                    {unit.badge}
                  </span>
                </div>

                <div className="space-y-2.5 pt-2 border-t border-slate-100">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span className="text-xs text-slate-700 leading-relaxed">
                      {unit.address}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span className="text-xs font-medium text-slate-700">
                      {unit.phone}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-sky-600 shrink-0" />
                    <span className="text-xs text-slate-600">
                      {unit.hours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Interactive Google Map Embed */}
              <div className="w-full h-64 bg-slate-100 relative border-y border-slate-200">
                <iframe
                  title={`Google Maps ${unit.title}`}
                  src={unit.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full grayscale-[15%] hover:grayscale-0 transition-all"
                />
              </div>

              {/* Action Bar */}
              <div className="p-4 bg-slate-50 flex items-center justify-between gap-3">
                <a
                  href={unit.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-white fill-white/20" />
                  <span>Falar com Unidade</span>
                </a>

                <a
                  href={unit.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-4 rounded-md bg-white border border-slate-200 hover:bg-slate-100 text-slate-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <span>Abrir Mapa</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* General Contact Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center p-8 bg-white rounded-md border border-slate-200 shadow-xs max-w-3xl mx-auto space-y-4"
        >
          <h4 className="text-lg font-bold text-slate-900 font-poppins">
            Precisa de Atendimento Imediato?
          </h4>
          <p className="text-xs sm:text-sm text-slate-600 max-w-xl mx-auto">
            Nossa equipe está disponível online para tirar suas dúvidas, enviar orçamentos ou agendar a sua visita.
          </p>
          <div>
            <a
              href={generalWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <MessageCircle className="w-5 h-5 text-white fill-white/20" />
              <span>Atendimento Geral via WhatsApp</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

