import React, { useState } from 'react';
import { MENU_CATEGORIES, SAMPLE_MENU_ITEMS } from '../data/restaurantData';
import { MenuItem } from '../types';
import { Sparkles, Flame, HelpCircle, Utensils, Tag, Info } from 'lucide-react';
import { SteakCutGuideModal } from './SteakCutGuideModal';

interface MenuSectionProps {
  onOpenReservation: () => void;
}

export const MenuSection: React.FC<MenuSectionProps> = ({ onOpenReservation }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [isGuideOpen, setIsGuideOpen] = useState<boolean>(false);
  const [selectedItemForDetails, setSelectedItemForDetails] = useState<MenuItem | null>(null);

  const filteredItems = activeCategory === 'all'
    ? SAMPLE_MENU_ITEMS
    : SAMPLE_MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#C5A059]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[#C5A059] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Selections</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-white mb-4">
            Explore Our Menu
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed mb-6">
            From hardwood-grilled prime steaks to delicate appetizers and decadent desserts, every plate is crafted to order.
          </p>

          {/* Sample Menu Notice & Doneness Guide Trigger */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm glass border border-white/10 text-xs text-neutral-400">
              <Info className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Sample Menu Selection • Market availability may vary</span>
            </div>
            <button
              type="button"
              onClick={() => setIsGuideOpen(true)}
              id="open-steak-guide-btn"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-sm glass hover:bg-white/10 border border-[#C5A059]/40 text-xs text-[#C5A059] transition-colors"
            >
              <Flame className="w-3.5 h-3.5" />
              <span>Steak Doneness Guide</span>
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-12 gap-2 scrollbar-none">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all ${
              activeCategory === 'all'
                ? 'bg-[#C5A059] text-black shadow-lg shadow-[#C5A059]/20'
                : 'glass text-neutral-400 hover:text-white border border-white/10'
            }`}
          >
            All Selections
          </button>
          {MENU_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-sm text-xs font-bold uppercase tracking-widest whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#C5A059] text-black shadow-lg shadow-[#C5A059]/20'
                  : 'glass text-neutral-400 hover:text-white border border-white/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`menu-item-${item.id}`}
              className="menu-card group relative rounded-sm glass border border-white/10 hover:border-[#C5A059]/50 transition-all duration-300 overflow-hidden flex flex-col shadow-xl"
            >
              {/* Optional Item Image */}
              {item.image && (
                <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                  
                  {/* Badge */}
                  {item.badge && (
                    <span className="absolute top-3 left-3 glass border border-[#C5A059]/50 text-[#C5A059] text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-sm shadow-md">
                      {item.badge}
                    </span>
                  )}
                </div>
              )}

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-serif-luxury text-xl font-normal text-white group-hover:text-[#C5A059] transition-colors">
                      {item.name}
                    </h3>
                    <span className="font-serif-luxury font-bold text-lg text-[#C5A059] whitespace-nowrap">
                      {item.price}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light mb-4">
                    {item.description}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded-sm glass border border-white/5 text-neutral-500"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Reserve / Order Inquiry Button */}
                  <button
                    type="button"
                    onClick={onOpenReservation}
                    className="w-full py-2.5 rounded-sm border border-white/15 hover:border-[#C5A059] text-xs uppercase tracking-widest text-neutral-300 hover:text-[#C5A059] hover:bg-white/5 transition-all flex items-center justify-center gap-1.5 font-bold"
                  >
                    <Utensils className="w-3 h-3 text-[#C5A059]" />
                    <span>Reserve to Savour</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Menu Action */}
        <div className="mt-16 text-center glass border border-white/10 rounded-sm p-8 max-w-2xl mx-auto">
          <h3 className="font-serif-luxury text-2xl text-white mb-2">
            Looking for Our Complete Season Lineup?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 mb-6">
            Our culinary team features special seasonal butcher cuts and signature mocktails. Inquire directly or reserve your table.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={onOpenReservation}
              id="menu-reserve-cta"
              className="px-8 py-3.5 rounded-sm bg-[#C5A059] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#b08e4d] shadow-lg shadow-[#C5A059]/20 transition-all"
            >
              Reserve a Table
            </button>
            <a
              href="tel:03231602333"
              id="menu-call-inquire-btn"
              className="px-8 py-3.5 rounded-sm border border-white/20 text-white hover:text-[#C5A059] hover:border-white/40 text-xs font-bold uppercase tracking-widest transition-all bg-white/5"
            >
              Call for Daily Cuts: 03231602333
            </a>
          </div>
        </div>
      </div>

      {/* Interactive Doneness Guide Modal */}
      <SteakCutGuideModal isOpen={isGuideOpen} onClose={() => setIsGuideOpen(false)} />
    </section>
  );
};
