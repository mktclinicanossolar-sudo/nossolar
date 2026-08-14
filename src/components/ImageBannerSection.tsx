import React from 'react';
import regeneratedBanner from '../assets/images/regenerated_image_1786057452246.png';

export const ImageBannerSection: React.FC = () => {
  // Desktop image (1920x1080 resolution default)
  const desktopImage = regeneratedBanner;

  // Mobile image (Responsive mobile layout)
  const mobileImage = '/banner-mobile.png';

  return (
    <section className="relative w-full bg-slate-50 py-6 md:py-10 border-b border-slate-200/80">
      <div className="max-w-[1920px] mx-auto px-0 sm:px-4 lg:px-8">
        
        {/* Pastel Accent Line */}
        <div className="max-w-7xl mx-auto px-4 sm:px-0 mb-4 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
          <span className="w-2.5 h-2.5 rounded-full bg-rose-300" />
        </div>

        {/* Pure Image Display Container (No Text Overlay) */}
        <div className="relative w-full overflow-hidden border-y sm:border sm:rounded-md border-slate-200 bg-slate-900 shadow-xs">
          
          {/* Desktop Image (1920x1080 aspect ratio display) */}
          <div className="hidden md:block w-full aspect-[16/9] max-h-[720px] relative">
            <img
              src={desktopImage}
              alt="Clínica Comportamental Nosso Lar Banner 1920x1080"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Mobile Image (Responsive mobile layout optimized) */}
          <div className="block md:hidden w-full aspect-[4/5] relative">
            <img
              src={mobileImage}
              alt="Clínica Comportamental Nosso Lar Banner Mobile"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

