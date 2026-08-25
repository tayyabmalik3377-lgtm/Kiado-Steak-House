import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Flame, Phone, MapPin, ArrowUp, Calendar, Heart } from 'lucide-react';

interface FooterProps {
  onOpenReservation: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenReservation }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer id="main-footer" className="bg-[#0A0A0A] border-t border-white/10 text-neutral-400 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-sm border border-white/15 glass flex items-center justify-center text-[#C5A059]">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <span className="font-display tracking-[0.2em] text-xl font-bold text-white uppercase">
                  KIADO
                </span>
                <span className="block text-[10px] uppercase tracking-[0.3em] text-neutral-400">
                  STEAK HOUSE
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm mb-6 font-light">
              An unhurried sanctuary of fine dining in Karachi. Celebrating wood-fired charcoal searing, prime cuts, and refined evening hospitality at Reef Tower 2, DHA Phase 8.
            </p>

            <button
              type="button"
              onClick={onOpenReservation}
              id="footer-reserve-btn"
              className="px-6 py-3 rounded-sm bg-[#C5A059] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#b08e4d] hover:shadow-lg transition-all flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>RESERVE A TABLE</span>
            </button>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3">
            <h3 className="font-serif-luxury text-sm uppercase tracking-[0.2em] text-white mb-4 font-semibold">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-xs uppercase tracking-wider text-neutral-400 hover:text-[#C5A059] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact & Address */}
          <div className="lg:col-span-4">
            <h3 className="font-serif-luxury text-sm uppercase tracking-[0.2em] text-white mb-4 font-semibold">
              Kiado Location &amp; Contact
            </h3>
            <div className="space-y-3.5 text-xs text-neutral-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  {RESTAURANT_INFO.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="font-mono text-sm text-white hover:text-[#C5A059] transition-colors font-medium"
                >
                  {RESTAURANT_INFO.phone}
                </a>
              </div>
              <div className="pt-2 text-[11px] text-neutral-500">
                Rating: <strong className="text-white">{RESTAURANT_INFO.rating}/5</strong> ({RESTAURANT_INFO.totalReviews} Customer Reviews)
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>© 2026 {RESTAURANT_INFO.name}. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-600">
              DHA Phase 8 Emaar • Karachi
            </span>
            <button
              type="button"
              onClick={scrollToTop}
              id="back-to-top-btn"
              className="flex items-center gap-1 text-neutral-400 hover:text-[#C5A059] transition-colors group"
            >
              <span>TOP</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
