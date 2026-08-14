import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ImageBannerSection } from './components/ImageBannerSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { FooterSection } from './components/FooterSection';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

import { AppointmentModal } from './components/Modals/AppointmentModal';
import { ServiceDetailModal } from './components/Modals/ServiceDetailModal';

import { ServiceItem } from './types';

export default function App() {
  // Modal States
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleOpenAppointment = (serviceName?: string) => {
    const message = serviceName
      ? `Olá, gostaria de solicitar um agendamento de avaliação para ${serviceName}.`
      : 'Olá, gostaria de solicitar um agendamento de avaliação.';
    const whatsappUrl = `https://wa.me/5519988930792?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handleScrollToServices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-slate-700 font-sans antialiased selection:bg-sky-200 selection:text-slate-900 relative">
      {/* Header */}
      <Header onOpenAppointment={() => handleOpenAppointment()} />

      {/* Main Content */}
      <main>
        {/* 1. Responsive Hero Banner */}
        <HeroSection
          onOpenAppointment={() => handleOpenAppointment()}
          onExploreServices={handleScrollToServices}
        />

        {/* 2. Standalone Media Image Section (1920x1080 / Mobile responsive) */}
        <ImageBannerSection />

        {/* 3. Services Grid */}
        <ServicesSection onSelectService={(s) => setSelectedService(s)} />

        {/* 4. Image Gallery Carousel */}
        <GallerySection />

        {/* 5. Contact Location & WhatsApp */}
        <ContactSection />
      </main>

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Footer */}
      <FooterSection />

      {/* Modals & Interactive Overlays */}
      <AppointmentModal
        isOpen={appointmentOpen}
        onClose={() => setAppointmentOpen(false)}
        preselectedService={preselectedService}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBook={(title) => handleOpenAppointment(title)}
      />
    </div>
  );
}
