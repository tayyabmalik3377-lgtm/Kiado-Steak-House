import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Flame, Sparkles, MapPin, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenReservation, onExploreMenu }) => {
  return (
    <section id="about" className="py-24 sm:py-32 bg-[#0A0A0A] relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-1/4 -right-48 w-96 h-96 bg-[#C5A059]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Editorial Image Composition with Gold Accent Border */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Image */}
              <div className="relative rounded-sm overflow-hidden border border-white/10 shadow-2xl bg-neutral-900">
                <img
                  src="https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=1200&q=85"
                  alt="Artisanal steak searing at Kiado Steak House"
                  className="w-full h-[460px] sm:h-[540px] object-cover object-center filter contrast-105 hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
              </div>

              {/* Floating Floating Accent Card */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 glass border border-white/15 rounded-sm p-5 shadow-2xl backdrop-blur-md max-w-[260px] hidden sm:block">
                <div className="flex items-center gap-2 text-[#C5A059] text-xs font-semibold uppercase tracking-wider mb-1.5">
                  <Flame className="w-4 h-4" />
                  <span>Wood & Charcoal Flame</span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Every cut is seared at high heat to achieve a deep caramelized crust and tender center.
                </p>
              </div>

              {/* Top Left Location Accent Pill */}
              <div className="absolute -top-4 -left-4 glass border border-white/15 rounded-sm px-4 py-2 text-xs text-white shadow-xl flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="font-mono text-[11px] uppercase tracking-wider">Reef Tower 2 • Karachi</span>
              </div>
            </div>
          </div>

          {/* Right: Editorial Narrative Content */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 text-[#C5A059] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>About Kiado Steak House</span>
            </div>

            {/* Heading */}
            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-[1.15] mb-6">
              The Art of a <br />
              <span className="italic font-serif text-[#C5A059]">Great Steak</span>
            </h2>

            {/* Narrative Body */}
            <div className="space-y-4 text-sm sm:text-base text-neutral-400 leading-relaxed font-light mb-8">
              <p>
                At <strong className="text-white font-medium">Kiado Steak House</strong>, dining is an unhurried ritual. We believe that an unforgettable steak begins with quality cuts, refined seasoning, and an uncompromising mastery of open-flame heat.
              </p>
              <p>
                Set within the coastal atmosphere of Reef Tower 2 in DHA Phase 8 Emaar, Kiado was created to offer Karachi a sanctuary of quiet luxury. Warm candlelit tables, rich architectural textures, and attentive service set the stage for celebratory dinners and intimate evenings.
              </p>
              <p>
                From the crisp sear of our prime cuts to freshly prepared starters, crafted sides, and decadent finishes, every plate is composed with care and served with warmth.
              </p>
            </div>

            {/* Key Distinction Pillars */}
            <div className="grid grid-cols-2 gap-4 border-t border-b border-white/10 py-6 mb-8">
              <div>
                <span className="block font-serif-luxury text-xl font-bold text-white mb-1">
                  Prime Selection
                </span>
                <span className="text-xs text-neutral-500">
                  Carefully sourced cuts &amp; precise resting times
                </span>
              </div>
              <div>
                <span className="block font-serif-luxury text-xl font-bold text-white mb-1">
                  Intimate Setting
                </span>
                <span className="text-xs text-neutral-500">
                  Atmospheric lighting &amp; spacious seating
                </span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenReservation}
                id="about-reserve-cta"
                className="px-8 py-3.5 rounded-sm bg-[#C5A059] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#b08e4d] transition-all flex items-center gap-2 shadow-lg shadow-[#C5A059]/20"
              >
                <span>RESERVE A TABLE</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreMenu}
                id="about-menu-cta"
                className="px-8 py-3.5 rounded-sm border border-white/20 text-white hover:bg-white/10 hover:border-white/40 font-bold text-xs uppercase tracking-widest transition-all"
              >
                DISCOVER OUR MENU
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
