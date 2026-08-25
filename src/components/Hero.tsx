import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Star, MapPin, ChevronDown, UtensilsCrossed, Calendar } from 'lucide-react';

interface HeroProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onExploreMenu }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Cinematic Background Image with Dark Vignette and Warm Tones */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=2000&q=90"
          alt="Kiado Steak House sizzling prime steak on charcoal grill"
          className="w-full h-full object-cover object-center filter brightness-[0.38] contrast-[1.15]"
        />
        {/* Layered Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/70 to-[#0A0A0A]/40" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0A0A0A]/50 to-[#0A0A0A]/95" />
      </div>

      {/* Decorative Subtle Grid / Star lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-15 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:32px_32px]" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Top Eyebrow Tag / Location Pill */}
        <div
          id="hero-eyebrow-pill"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[#C5A059]/40 text-[#C5A059] text-xs uppercase tracking-[0.25em] mb-6 shadow-lg shadow-black/60 animate-fadeIn"
        >
          <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
          <span>DHA Phase 8 Emaar • Karachi</span>
        </div>

        {/* Major Headline with Playfair / Serif Luxury */}
        <h1
          id="hero-main-heading"
          className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight leading-[1.08] mb-6 drop-shadow-2xl"
        >
          The Art of the <br />
          <span className="italic font-serif text-[#C5A059]">Perfect Sear.</span>
        </h1>

        {/* Sophisticated Supporting Description */}
        <p
          id="hero-subtext"
          className="max-w-2xl text-base sm:text-lg text-neutral-400 font-light leading-relaxed mb-8 tracking-wide drop-shadow"
        >
          Welcome to <strong className="text-white font-medium">Kiado Steak House</strong>.
          Indulge in Karachi’s most refined dining experience, celebrating wood-fired searing, prime artisanal cuts, and warm evening hospitality at Reef Tower 2, DHA Phase 8 Emaar.
        </p>

        {/* Rating & Trust Indicator Pill */}
        <div
          id="hero-trust-indicator"
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 glass border border-white/10 rounded-sm px-6 py-2.5 mb-10 shadow-xl"
        >
          <div className="flex items-center gap-1 text-[#C5A059]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
            ))}
          </div>
          <span className="font-serif-luxury font-bold text-white text-base">
            {RESTAURANT_INFO.rating} Rating
          </span>
          <span className="text-xs text-[#A3A3A3] tracking-widest uppercase border-l border-white/15 pl-3">
            {RESTAURANT_INFO.totalReviews} Guest Reviews
          </span>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            type="button"
            onClick={onOpenReservation}
            id="hero-primary-cta"
            className="w-full sm:w-auto bg-[#C5A059] text-black px-8 py-3.5 text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#b08e4d] transition-all transform hover:-translate-y-0.5 shadow-xl shadow-[#C5A059]/20"
          >
            <span className="flex items-center justify-center gap-2">
              <Calendar className="w-4 h-4" />
              RESERVE A TABLE
            </span>
          </button>

          <button
            type="button"
            onClick={onExploreMenu}
            id="hero-secondary-cta"
            className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-sm px-8 py-3.5 border border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-bold text-xs uppercase tracking-widest transition-all"
          >
            <UtensilsCrossed className="w-4 h-4 text-[#C5A059]" />
            <span>EXPLORE MENU</span>
          </button>
        </div>
      </div>

      {/* Subtle Scroll Down Prompt */}
      <a
        href="#trust"
        id="hero-scroll-indicator"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-[#A3A3A3] hover:text-[#C5A059] transition-colors group cursor-pointer"
        aria-label="Scroll down to trust section"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-mono">SCROLL</span>
        <ChevronDown className="w-4 h-4 animate-bounce text-[#C5A059]" />
      </a>
    </section>
  );
};
