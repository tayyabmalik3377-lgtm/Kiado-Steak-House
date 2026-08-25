import React from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { Phone, MapPin, Navigation, Clock, MessageSquare, Calendar, ExternalLink } from 'lucide-react';

interface ContactSectionProps {
  onOpenReservation: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenReservation }) => {
  return (
    <section id="contact" className="py-24 bg-[#0A0A0A] border-t border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Contact Info & Action Cards */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-flex items-center gap-2 text-[#C5A059] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
              <MapPin className="w-3.5 h-3.5" />
              <span>Location &amp; Inquiries</span>
            </div>

            <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-4">
              Visit Kiado
            </h2>

            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed mb-8">
              We look forward to hosting you for an exceptional dinner. For table reservations, private dining inquiries, or directions, please reach out directly.
            </p>

            <div className="space-y-6 mb-8">
              {/* Address Card */}
              <div className="p-5 rounded-sm glass border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm glass border border-white/15 flex items-center justify-center text-[#C5A059] flex-shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-luxury text-base text-white font-medium mb-1">
                    Restaurant Address
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light leading-relaxed mb-2">
                    {RESTAURANT_INFO.address}
                  </p>
                  <a
                    href={RESTAURANT_INFO.googleMapsQuery}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-[#C5A059] hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Direct Telephone Card */}
              <div className="p-5 rounded-sm glass border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm glass border border-white/15 flex items-center justify-center text-[#C5A059] flex-shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-luxury text-base text-white font-medium mb-1">
                    Telephone Reservations
                  </h3>
                  <a
                    href={`tel:${RESTAURANT_INFO.phone}`}
                    className="font-mono text-base sm:text-lg text-white hover:text-[#C5A059] transition-colors font-bold block"
                  >
                    {RESTAURANT_INFO.phone}
                  </a>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Direct line for reservations &amp; guest assistance
                  </p>
                </div>
              </div>

              {/* Dining Hours Note */}
              <div className="p-5 rounded-sm glass border border-white/10 flex items-start gap-4">
                <div className="w-10 h-10 rounded-sm glass border border-white/15 flex items-center justify-center text-[#C5A059] flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif-luxury text-base text-white font-medium mb-1">
                    Evening Dining Hours
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 font-light">
                    Dinner Service: 6:30 PM – 12:00 Midnight
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Reservations recommended for peak evening hours
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${RESTAURANT_INFO.phone}`}
                id="contact-call-btn"
                className="px-6 py-3.5 rounded-sm glass border border-[#C5A059]/60 text-[#C5A059] hover:bg-[#C5A059] hover:text-black font-bold text-xs uppercase tracking-widest transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>CALL NOW</span>
              </a>

              <a
                href={RESTAURANT_INFO.googleMapsQuery}
                target="_blank"
                rel="noopener noreferrer"
                id="contact-directions-btn"
                className="px-6 py-3.5 rounded-sm glass border border-white/15 text-white hover:border-[#C5A059] text-xs font-bold uppercase tracking-widest transition-all flex items-center gap-2"
              >
                <Navigation className="w-4 h-4 text-[#C5A059]" />
                <span>GET DIRECTIONS</span>
              </a>

              <button
                type="button"
                onClick={onOpenReservation}
                id="contact-reserve-btn"
                className="px-6 py-3.5 rounded-sm bg-[#C5A059] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#b08e4d] hover:shadow-lg transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>RESERVE A TABLE</span>
              </button>
            </div>
          </div>

          {/* Right: Map & Location Card */}
          <div className="lg:col-span-6">
            <div className="relative rounded-sm overflow-hidden glass border border-white/10 shadow-2xl p-2">
              {/* Stylized Map View Frame */}
              <div className="relative h-[420px] sm:h-[480px] w-full rounded-sm overflow-hidden bg-[#0A0A0A]">
                {/* Visual Satellite / Dark Map Graphic */}
                <div className="absolute inset-0 bg-[#0A0A0A] flex items-center justify-center p-6 text-center">
                  <div className="relative z-10 max-w-sm flex flex-col items-center">
                    <div className="w-16 h-16 rounded-sm glass border-2 border-[#C5A059] flex items-center justify-center text-[#C5A059] mb-4 shadow-2xl animate-bounce">
                      <MapPin className="w-8 h-8 fill-[#C5A059]/20" />
                    </div>
                    <h3 className="font-serif-luxury text-2xl text-white mb-2">
                      Reef Tower 2
                    </h3>
                    <p className="text-xs text-[#C5A059] font-mono uppercase tracking-widest mb-3">
                      D.H.A. Phase 8 Zone D • Emaar
                    </p>
                    <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                      Located in the serene oceanfront enclave of Phase 8 Emaar, Karachi. Valet and dedicated parking available.
                    </p>
                    <a
                      href={RESTAURANT_INFO.googleMapsQuery}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3.5 rounded-sm bg-[#C5A059] text-black font-bold text-xs uppercase tracking-widest shadow-xl flex items-center gap-2 hover:bg-[#b08e4d] transition-colors"
                    >
                      <Navigation className="w-4 h-4" />
                      <span>Open Interactive Navigation</span>
                    </a>
                  </div>
                </div>

                {/* Ambient Grid overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:24px_24px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
