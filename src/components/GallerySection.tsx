import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GALLERY_CAROUSEL_DATA, GalleryItem } from '../data/loremData';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';

function getYouTubeEmbedUrl(url?: string): string | null {
  if (!url) return null;
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|shorts\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) {
    return `https://www.youtube.com/embed/${match[2]}?autoplay=1&rel=0`;
  }
  if (url.includes('youtube.com/embed/')) {
    return url.includes('?') ? `${url}&autoplay=1` : `${url}?autoplay=1`;
  }
  return null;
}

export const GallerySection: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [activeVideoModal, setActiveVideoModal] = useState<GalleryItem | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const totalItems = GALLERY_CAROUSEL_DATA.length;

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % totalItems);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  // Autoplay every 3.5 seconds
  useEffect(() => {
    if (isPaused || activeVideoModal !== null) return;
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % totalItems);
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, activeVideoModal, totalItems]);

  const prevIndex = (startIndex - 1 + totalItems) % totalItems;
  const centerIndex = startIndex;
  const nextIndex = (startIndex + 1) % totalItems;

  const prevItem = GALLERY_CAROUSEL_DATA[prevIndex];
  const centerItem = GALLERY_CAROUSEL_DATA[centerIndex];
  const nextItem = GALLERY_CAROUSEL_DATA[nextIndex];

  return (
    <section id="gallery" className="py-16 lg:py-24 bg-slate-50 relative border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 font-poppins leading-tight">
            Galeria da Clínica
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Conheça nossos espaços terapêuticos e acompanhe nossa rotina de acolhimento.
          </p>
        </div>

        {/* Carousel Container with Overlaid Navigation Arrows */}
        <div 
          className="relative px-2 sm:px-8"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Overlaid Navigation Arrows */}
          <button
            onClick={() => {
              prevSlide();
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 5000);
            }}
            aria-label="Anterior"
            className="absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white/95 hover:bg-white text-slate-800 shadow-xl backdrop-blur-md border border-slate-200 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6 text-slate-800" />
          </button>

          <button
            onClick={() => {
              nextSlide();
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 5000);
            }}
            aria-label="Próximo"
            className="absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 z-20 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-sky-600 hover:bg-sky-500 text-white shadow-xl backdrop-blur-md border border-sky-600 flex items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Carousel Layout: 1 item on mobile, 3 items with center highlight on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 items-center">
            
            {/* Left Item (Blurred on side for Desktop) */}
            <div 
              onClick={() => {
                prevSlide();
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 5000);
              }}
              className="hidden md:block relative w-full aspect-[1080/1350] rounded-xl overflow-hidden border border-slate-200 shadow-md transition-all duration-500 transform scale-90 opacity-60 blur-[2px] hover:blur-none hover:opacity-90 hover:scale-95 cursor-pointer bg-slate-900"
            >
              <img
                key={`prev-${prevItem.id}`}
                src={prevItem.image}
                alt="Galeria Clínica Nosso Lar"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  if (prevItem.fallbackImage) {
                    (e.target as HTMLImageElement).src = prevItem.fallbackImage;
                  }
                }}
                className="w-full h-full object-cover object-center"
              />
              {prevItem.type === 'video' && (
                <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-black/50 border border-white/60 flex items-center justify-center">
                  <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                </div>
              )}
            </div>

            {/* Center Item (Highlighted in Middle) */}
            <div 
              onClick={() => {
                if (centerItem.type === 'video') {
                  setActiveVideoModal(centerItem);
                }
              }}
              className={`relative w-full aspect-[1080/1350] rounded-2xl overflow-hidden border-2 border-sky-500/80 shadow-2xl z-10 bg-slate-900 group ${centerItem.type === 'video' ? 'cursor-pointer' : ''}`}
            >
              <motion.img
                key={`center-${centerItem.id}`}
                initial={{ opacity: 0.7, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.35, ease: [0.25, 1, 0.5, 1] }}
                src={centerItem.image}
                alt="Galeria Clínica Nosso Lar"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  if (centerItem.fallbackImage) {
                    (e.target as HTMLImageElement).src = centerItem.fallbackImage;
                  }
                }}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />

              {/* Play Button for Video in Center Item */}
              {centerItem.type === 'video' && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-sky-600/90 group-hover:bg-sky-500 text-white shadow-2xl backdrop-blur-xs border-2 border-white flex items-center justify-center transition-transform group-hover:scale-110 active:scale-95 pointer-events-auto">
                    <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-white ml-1" />
                  </div>
                </div>
              )}
            </div>

            {/* Right Item (Blurred on side for Desktop) */}
            <div 
              onClick={() => {
                nextSlide();
                setIsPaused(true);
                setTimeout(() => setIsPaused(false), 5000);
              }}
              className="hidden md:block relative w-full aspect-[1080/1350] rounded-xl overflow-hidden border border-slate-200 shadow-md transition-all duration-500 transform scale-90 opacity-60 blur-[2px] hover:blur-none hover:opacity-90 hover:scale-95 cursor-pointer bg-slate-900"
            >
              <img
                key={`next-${nextItem.id}`}
                src={nextItem.image}
                alt="Galeria Clínica Nosso Lar"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  if (nextItem.fallbackImage) {
                    (e.target as HTMLImageElement).src = nextItem.fallbackImage;
                  }
                }}
                className="w-full h-full object-cover object-center"
              />
              {nextItem.type === 'video' && (
                <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-black/50 border border-white/60 flex items-center justify-center">
                  <Play className="w-5 h-5 fill-white text-white ml-0.5" />
                </div>
              )}
            </div>

          </div>

          {/* Carousel Pagination Dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {GALLERY_CAROUSEL_DATA.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  setStartIndex(index);
                  setIsPaused(true);
                  setTimeout(() => setIsPaused(false), 5000);
                }}
                aria-label={`Ir para a imagem ${index + 1}: ${item.title}`}
                className={`h-2.5 transition-all cursor-pointer ${
                  startIndex === index
                    ? 'w-8 bg-sky-600 rounded-full'
                    : 'w-2.5 bg-slate-300 hover:bg-slate-400 rounded-full'
                }`}
              />
            ))}
          </div>
        </div>

      </div>

      {/* Video Modal Player (Vertical Format for Reels/Shorts) */}
      <AnimatePresence>
        {activeVideoModal && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md"
            onClick={() => setActiveVideoModal(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 10 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-xs sm:max-w-sm aspect-[9/16] max-h-[85vh] bg-black rounded-2xl overflow-hidden border border-slate-800 shadow-2xl flex items-center justify-center"
            >
              <button
                onClick={() => setActiveVideoModal(null)}
                className="absolute top-3 right-3 z-30 p-2 bg-slate-900/80 text-white hover:bg-slate-800 rounded-full transition-colors border border-white/20 shadow-lg cursor-pointer"
                aria-label="Fechar Vídeo"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full h-full bg-black flex items-center justify-center overflow-hidden">
                {activeVideoModal.videoUrl ? (
                  getYouTubeEmbedUrl(activeVideoModal.videoUrl) ? (
                    <iframe
                      src={getYouTubeEmbedUrl(activeVideoModal.videoUrl)!}
                      title={activeVideoModal.title}
                      className="w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      src={activeVideoModal.videoUrl}
                      controls
                      autoPlay
                      className="w-full h-full object-cover"
                    />
                  )
                ) : (
                  <img
                    src={activeVideoModal.image}
                    alt={activeVideoModal.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};


