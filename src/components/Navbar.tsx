import React, { useState, useEffect } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Flame, Phone, Menu as MenuIcon, X, Calendar } from 'lucide-react';

interface NavbarProps {
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenReservation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check active section
      const sections = ['hero', 'about', 'experience', 'menu', 'gallery', 'reviews', 'reservation', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero', id: 'hero' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Menu', href: '#menu', id: 'menu' },
    { name: 'Gallery', href: '#gallery', id: 'gallery' },
    { name: 'Reviews', href: '#reviews', id: 'reviews' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/60'
            : 'bg-gradient-to-b from-[#0A0A0A]/90 via-[#0A0A0A]/60 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, '#hero')}
              className="flex items-center gap-3 group"
              id="navbar-brand-logo"
            >
              <div className="w-10 h-10 rounded-sm border border-[#C5A059]/40 bg-white/5 flex items-center justify-center text-[#C5A059] shadow-inner group-hover:border-[#C5A059] transition-colors">
                <Flame className="w-5 h-5 text-[#C5A059]" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif-luxury tracking-[0.2em] text-lg sm:text-xl font-bold text-[#C5A059] uppercase group-hover:text-white transition-colors">
                  KIADO
                </span>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#A3A3A3] font-sans -mt-0.5">
                  STEAK HOUSE • KARACHI
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    id={`nav-link-${link.id}`}
                    className={`text-xs uppercase tracking-[0.2em] transition-all relative py-1 font-medium ${
                      isActive
                        ? 'text-[#C5A059]'
                        : 'text-[#A3A3A3] hover:text-white'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#C5A059]" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-4">
              {/* Direct Click-to-call Phone */}
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                id="navbar-phone-btn"
                className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#E5E5E5] hover:text-[#C5A059] transition-colors px-3 py-2 rounded-sm border border-white/10 bg-white/5 hover:border-white/20"
                title="Call Kiado Steak House"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
                <span className="font-mono">{RESTAURANT_INFO.phone}</span>
              </a>

              {/* Primary CTA */}
              <button
                type="button"
                onClick={onOpenReservation}
                id="navbar-reserve-btn"
                className="bg-[#C5A059] text-black text-xs font-bold px-6 py-2.5 rounded-sm uppercase tracking-widest hover:bg-[#b08e4d] transition-all transform hover:-translate-y-0.5 shadow-lg shadow-[#C5A059]/20"
              >
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  RESERVE A TABLE
                </span>
              </button>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                id="mobile-phone-btn"
                className="p-2 text-[#C5A059] bg-white/5 rounded-sm border border-white/10"
                aria-label="Call restaurant"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                id="mobile-menu-toggle-btn"
                className="p-2 text-white hover:text-[#C5A059] bg-white/5 rounded-sm border border-white/10 transition-colors"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-drawer-overlay"
          className="fixed inset-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-6 pb-8 animate-fadeIn border-b border-white/10"
        >
          <div className="flex flex-col space-y-5 border-b border-white/10 pb-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-lg font-serif-luxury tracking-wide text-white hover:text-[#C5A059] transition-colors flex items-center justify-between py-1"
              >
                <span>{link.name}</span>
                <span className="text-xs text-[#737373] tracking-widest font-mono">0{navLinks.indexOf(link) + 1}</span>
              </a>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-4">
            <div className="text-xs text-[#A3A3A3] flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Call: </span>
              <a href={`tel:${RESTAURANT_INFO.phone}`} className="font-mono text-white underline">
                {RESTAURANT_INFO.phone}
              </a>
            </div>
            <p className="text-xs text-[#737373] leading-relaxed">
              {RESTAURANT_INFO.address}
            </p>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-3.5 rounded-sm bg-[#C5A059] text-black font-bold text-xs tracking-widest uppercase shadow-lg shadow-[#C5A059]/20 flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              RESERVE A TABLE
            </button>
          </div>
        </div>
      )}
    </>
  );
};
