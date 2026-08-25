import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Star, Award, ShieldCheck, HeartHandshake } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section
      id="trust"
      className="relative z-10 py-16 bg-[#0A0A0A] border-y border-white/10 overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-[#C5A059]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center divide-y md:divide-y-0 md:divide-x divide-white/10">
          {/* Main Credibility Score Block */}
          <div className="flex flex-col items-center text-center p-4">
            <div className="flex items-center gap-1.5 text-[#C5A059] mb-3">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 fill-[#C5A059] text-[#C5A059] drop-shadow-[0_0_8px_rgba(197,160,89,0.4)]"
                />
              ))}
            </div>
            <div className="flex items-baseline gap-2 mb-1">
              <span className="font-serif-luxury text-4xl sm:text-5xl font-bold text-white">
                {RESTAURANT_INFO.rating}
              </span>
              <span className="text-neutral-400 text-lg font-serif">/ 5.0</span>
            </div>
            <div className="text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-2">
              {RESTAURANT_INFO.totalReviews} Customer Reviews
            </div>
            <p className="text-sm text-neutral-400 max-w-xs italic font-serif">
              "A dining experience appreciated by our guests."
            </p>
          </div>

          {/* Dining Commitment 1: Charcoal & Flame */}
          <div className="flex flex-col items-center text-center p-4 pt-6 md:pt-4">
            <div className="w-12 h-12 rounded-sm glass border border-white/10 flex items-center justify-center text-[#C5A059] mb-4 shadow-md">
              <Award className="w-6 h-6 text-[#C5A059]" />
            </div>
            <h3 className="font-serif-luxury text-lg text-white font-medium tracking-wide mb-1">
              Prime Cuts & Fire Sear
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-xs font-sans">
              Hand-selected cuts prepared with precision heat control and seasoned with flaked mineral salt.
            </p>
          </div>

          {/* Dining Commitment 2: DHA Phase 8 Destination */}
          <div className="flex flex-col items-center text-center p-4 pt-6 md:pt-4">
            <div className="w-12 h-12 rounded-sm glass border border-white/10 flex items-center justify-center text-[#C5A059] mb-4 shadow-md">
              <HeartHandshake className="w-6 h-6 text-[#C5A059]" />
            </div>
            <h3 className="font-serif-luxury text-lg text-white font-medium tracking-wide mb-1">
              Warm Evening Hospitality
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed max-w-xs font-sans">
              An unhurried dining environment designed for intimate celebrations, family evenings, and gatherings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
