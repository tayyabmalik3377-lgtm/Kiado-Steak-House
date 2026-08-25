import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustSection } from './components/TrustSection';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { MenuSection } from './components/MenuSection';
import { WhyDineSection } from './components/WhyDineSection';
import { GallerySection } from './components/GallerySection';
import { ReviewsSection } from './components/ReviewsSection';
import { ReservationSection } from './components/ReservationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ReservationModal } from './components/ReservationModal';
import { RESTAURANT_INFO } from './data/restaurantData';
import { Calendar, Phone } from 'lucide-react';

export default function App() {
  const [isReservationModalOpen, setIsReservationModalOpen] = useState(false);

  const handleOpenReservation = () => {
    // Smooth scroll to reservation section, or open modal if preferred
    const reservationSection = document.getElementById('reservation');
    if (reservationSection) {
      reservationSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsReservationModalOpen(true);
    }
  };

  const handleExploreMenu = () => {
    const menuSection = document.getElementById('menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E5E5E5] font-sans selection:bg-[#C5A059] selection:text-black flex flex-col">
      {/* 1. Navigation Bar */}
      <Navbar onOpenReservation={handleOpenReservation} />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 2. Hero Section */}
        <Hero
          onOpenReservation={handleOpenReservation}
          onExploreMenu={handleExploreMenu}
        />

        {/* 3. Rating & Trust Section */}
        <TrustSection />

        {/* 4. About Kiado Steak House */}
        <AboutSection
          onOpenReservation={handleOpenReservation}
          onExploreMenu={handleExploreMenu}
        />

        {/* 5. Signature Experience Section */}
        <ExperienceSection />

        {/* 6. Menu Section */}
        <MenuSection onOpenReservation={handleOpenReservation} />

        {/* 7. Why Dine With Us */}
        <WhyDineSection />

        {/* 8. Restaurant Gallery */}
        <GallerySection />

        {/* 9. Customer Reviews */}
        <ReviewsSection />

        {/* 10 & 11. Reservation CTA & Form */}
        <ReservationSection />

        {/* 12. Contact & Location */}
        <ContactSection onOpenReservation={handleOpenReservation} />
      </main>

      {/* 13. Footer */}
      <Footer onOpenReservation={handleOpenReservation} />

      {/* Floating Action Quick Dial on Mobile */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 sm:hidden">
        <a
          href={`tel:${RESTAURANT_INFO.phone}`}
          id="floating-call-btn"
          className="w-12 h-12 rounded-full glass border border-[#C5A059]/40 text-[#C5A059] flex items-center justify-center shadow-2xl active:scale-95 transition-transform"
          aria-label="Call Kiado Steak House"
        >
          <Phone className="w-5 h-5" />
        </a>
        <button
          type="button"
          onClick={handleOpenReservation}
          id="floating-reserve-btn"
          className="w-12 h-12 rounded-full bg-[#C5A059] text-black flex items-center justify-center shadow-2xl active:scale-95 transition-transform font-bold"
          aria-label="Reserve a Table"
        >
          <Calendar className="w-5 h-5 font-bold" />
        </button>
      </div>

      {/* Quick Reservation Modal */}
      <ReservationModal
        isOpen={isReservationModalOpen}
        onClose={() => setIsReservationModalOpen(false)}
      />
    </div>
  );
}
