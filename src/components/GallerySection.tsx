import React, { useState, useEffect, useCallback } from 'react';
import { GALLERY_ITEMS } from '../data/restaurantData';
import { GalleryItem } from '../types';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Views' },
    { id: 'steaks', label: 'Prime Steaks & Cuts' },
    { id: 'atmosphere', label: 'Dining Atmosphere' },
    { id: 'plating', label: 'Culinary Plating' },
    { id: 'desserts', label: 'Desserts & Sweets' },
  ];

  const filteredGallery = selectedCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const showNext = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredGallery.length);
    }
  }, [lightboxIndex, filteredGallery.length]);

  const showPrev = useCallback(() => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
    }
  }, [lightboxIndex, filteredGallery.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, showNext, showPrev]);

  return (
    <section id="gallery" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[#C5A059] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Showcase</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-4">
            Atmosphere &amp; Plates
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            A visual glimpse into our culinary creations, candlelight ambiance, and artisanal fire grilling.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-widest transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#C5A059] text-black shadow-md shadow-[#C5A059]/20'
                  : 'glass text-neutral-400 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Masonry / Grid Gallery */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item, index) => (
            <div
              key={item.id}
              id={`gallery-card-${item.id}`}
              onClick={() => openLightbox(index)}
              className="group relative rounded-sm overflow-hidden glass border border-white/10 hover:border-[#C5A059]/60 cursor-pointer shadow-xl transition-all duration-500 h-80 sm:h-96"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700 filter brightness-90 contrast-105"
                loading="lazy"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/95 via-[#0A0A0A]/50 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-between p-6">
                <div className="flex justify-end">
                  <span className="w-9 h-9 rounded-sm glass border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:scale-110">
                    <Maximize2 className="w-4 h-4" />
                  </span>
                </div>

                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#C5A059] block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif-luxury text-xl font-normal text-white mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.caption}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredGallery[lightboxIndex] && (
        <div
          id="gallery-lightbox"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Top Bar with counter & close */}
          <div
            className="absolute top-4 left-0 right-0 max-w-6xl mx-auto px-6 flex items-center justify-between z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 text-sm text-neutral-400 font-mono">
              <span className="text-[#C5A059]">0{lightboxIndex + 1}</span>
              <span>/</span>
              <span>0{filteredGallery.length}</span>
            </div>
            <button
              type="button"
              onClick={closeLightbox}
              id="close-lightbox-btn"
              className="p-2.5 rounded-sm glass border border-white/10 text-white hover:text-[#C5A059] transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Main Lightbox Content */}
          <div
            className="relative max-w-5xl w-full max-h-[80vh] flex flex-col items-center justify-center my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filteredGallery[lightboxIndex].image}
              alt={filteredGallery[lightboxIndex].title}
              className="max-h-[68vh] w-auto max-w-full object-contain rounded-sm border border-white/15 shadow-2xl"
            />
            <div className="mt-4 text-center">
              <h3 className="font-serif-luxury text-xl sm:text-2xl text-white">
                {filteredGallery[lightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-lg mx-auto">
                {filteredGallery[lightboxIndex].caption}
              </p>
            </div>

            {/* Navigation Arrows */}
            <button
              type="button"
              onClick={showPrev}
              id="lightbox-prev-btn"
              className="absolute left-2 sm:-left-14 top-1/2 -translate-y-1/2 p-3 rounded-sm glass border border-white/15 text-white hover:text-[#C5A059] hover:border-[#C5A059] transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              type="button"
              onClick={showNext}
              id="lightbox-next-btn"
              className="absolute right-2 sm:-right-14 top-1/2 -translate-y-1/2 p-3 rounded-sm glass border border-white/15 text-white hover:text-[#C5A059] hover:border-[#C5A059] transition-all"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
