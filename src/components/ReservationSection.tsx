import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ReservationFormData } from '../types';
import {
  Calendar,
  Clock,
  Users,
  Phone,
  Mail,
  User,
  Sparkles,
  CheckCircle,
  MessageSquare,
  AlertCircle,
  Armchair,
} from 'lucide-react';

export const ReservationSection: React.FC = () => {
  const [formData, setFormData] = useState<ReservationFormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    date: new Date(Date.now() + 86400000).toISOString().split('T')[0], // tomorrow
    time: '20:00',
    guests: 2,
    seatingPreference: 'indoor-main',
    occasion: 'dinner',
    specialRequests: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ReservationFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const timeSlots = [
    '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00'
  ];

  const validate = () => {
    const newErrors: Partial<Record<keyof ReservationFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name.';
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Please provide a contact phone number.';
    } else if (formData.phoneNumber.replace(/\D/g, '').length < 8) {
      newErrors.phoneNumber = 'Please enter a valid phone number.';
    }
    if (!formData.date) {
      newErrors.date = 'Please select a reservation date.';
    }
    if (!formData.time) {
      newErrors.time = 'Please pick a preferred seating time.';
    }
    if (formData.guests < 1 || formData.guests > 20) {
      newErrors.guests = 'Please select between 1 and 20 guests.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate luxury booking dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      date: new Date(Date.now() + 86400000).toISOString().split('T')[0],
      time: '20:00',
      guests: 2,
      seatingPreference: 'indoor-main',
      occasion: 'dinner',
      specialRequests: '',
    });
  };

  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello Kiado Steak House, I would like to reserve a table for ${formData.guests} guests on ${formData.date} at ${formData.time}. Name: ${formData.fullName || 'Guest'}.`
    );
    return `https://wa.me/923231602333?text=${text}`;
  };

  return (
    <section id="reservation" className="py-24 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background Graphic & Glow */}
      <div className="absolute inset-0 z-0 opacity-15">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80"
          alt="Kiado Steak House ambient background"
          className="w-full h-full object-cover filter contrast-125"
        />
        <div className="absolute inset-0 bg-[#0A0A0A] opacity-90" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 text-[#C5A059] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Table Reservations</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl font-normal text-white mb-4">
            Your Table Awaits
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            Make your next evening one to remember. Reserve your table at Reef Tower 2, DHA Phase 8 Emaar.
          </p>
        </div>

        {/* Form Container */}
        <div className="glass border border-white/10 hover:border-[#C5A059]/30 transition-all rounded-sm p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          {isSubmitted ? (
            /* Success View */
            <div id="reservation-success-state" className="text-center py-10 px-4 max-w-lg mx-auto animate-fadeIn">
              <div className="w-16 h-16 rounded-sm glass border border-[#C5A059] flex items-center justify-center text-[#C5A059] mx-auto mb-6 shadow-xl">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white mb-3">
                Reservation Request Received
              </h3>
              <p className="text-sm text-neutral-300 font-light leading-relaxed mb-6">
                Thank you, <strong className="text-white">{formData.fullName}</strong>. We have logged your request for <strong className="text-[#C5A059]">{formData.guests} guests</strong> on <strong className="text-white">{formData.date}</strong> at <strong className="text-white">{formData.time}</strong>. Our host will confirm availability shortly.
              </p>

              {/* Demo Notice */}
              <div className="glass border border-white/10 rounded-sm p-4 mb-8 text-xs text-neutral-400 text-left">
                <span className="font-semibold text-white block mb-1">Instant Direct Confirmation:</span>
                For instant priority confirmation or last-minute table inquiries, you can also connect directly via phone or WhatsApp:
              </div>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="px-6 py-3.5 rounded-sm bg-[#C5A059] text-black font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {RESTAURANT_INFO.phone}</span>
                </a>
                <a
                  href={generateWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-sm glass border border-[#25D366]/50 text-[#25D366] hover:bg-[#25D366]/10 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Booking</span>
                </a>
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-6 py-3.5 rounded-sm border border-white/20 text-neutral-400 hover:text-white text-xs font-bold uppercase tracking-widest transition-colors"
                >
                  Book Another Table
                </button>
              </div>
            </div>
          ) : (
            /* Reservation Form */
            <form onSubmit={handleSubmit} noValidate id="reservation-form">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Full Name */}
                <div>
                  <label htmlFor="res-name" className="block text-xs uppercase tracking-wider text-neutral-300 mb-2 font-medium">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      id="res-name"
                      placeholder="e.g. Tariq Khan"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full glass border ${
                        errors.fullName ? 'border-red-500' : 'border-white/10 focus:border-[#C5A059]'
                      } rounded-sm pl-10 pr-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors`}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label htmlFor="res-phone" className="block text-xs uppercase tracking-wider text-neutral-300 mb-2 font-medium">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="tel"
                      id="res-phone"
                      placeholder="0323XXXXXXX"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className={`w-full glass border ${
                        errors.phoneNumber ? 'border-red-500' : 'border-white/10 focus:border-[#C5A059]'
                      } rounded-sm pl-10 pr-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors`}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.phoneNumber}
                    </p>
                  )}
                </div>

                {/* Email Address (Optional) */}
                <div>
                  <label htmlFor="res-email" className="block text-xs uppercase tracking-wider text-neutral-300 mb-2 font-medium">
                    Email Address (Optional)
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      id="res-email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full glass border border-white/10 focus:border-[#C5A059] rounded-sm pl-10 pr-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Date */}
                <div>
                  <label htmlFor="res-date" className="block text-xs uppercase tracking-wider text-neutral-300 mb-2 font-medium">
                    Reservation Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="date"
                      id="res-date"
                      value={formData.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className={`w-full glass border ${
                        errors.date ? 'border-red-500' : 'border-white/10 focus:border-[#C5A059]'
                      } rounded-sm pl-10 pr-4 py-3 text-sm text-white focus:outline-none transition-colors`}
                    />
                  </div>
                  {errors.date && (
                    <p className="text-red-400 text-xs mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.date}
                    </p>
                  )}
                </div>

                {/* Number of Guests */}
                <div>
                  <label htmlFor="res-guests" className="block text-xs uppercase tracking-wider text-neutral-300 mb-2 font-medium">
                    Number of Guests *
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      id="res-guests"
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value, 10) })}
                      className="w-full glass border border-white/10 focus:border-[#C5A059] rounded-sm pl-10 pr-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 16, 20].map((num) => (
                        <option key={num} value={num} className="bg-neutral-900 text-white">
                          {num} {num === 1 ? 'Guest' : 'Guests'} {num >= 8 ? '(Private Table)' : ''}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Seating Preference */}
                <div>
                  <label htmlFor="res-seating" className="block text-xs uppercase tracking-wider text-neutral-300 mb-2 font-medium">
                    Seating Preference
                  </label>
                  <div className="relative">
                    <Armchair className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <select
                      id="res-seating"
                      value={formData.seatingPreference}
                      onChange={(e) => setFormData({ ...formData, seatingPreference: e.target.value as any })}
                      className="w-full glass border border-white/10 focus:border-[#C5A059] rounded-sm pl-10 pr-4 py-3 text-sm text-white focus:outline-none transition-colors"
                    >
                      <option value="indoor-main" className="bg-neutral-900 text-white">Main Dining Room (Ambient)</option>
                      <option value="window-view" className="bg-neutral-900 text-white">Reef Tower Window Area</option>
                      <option value="private-dining" className="bg-neutral-900 text-white">Private Dining Booth</option>
                      <option value="chef-counter" className="bg-neutral-900 text-white">Grill View Seating</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Time Slots Selector */}
              <div className="mb-8">
                <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-3 font-medium flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Select Dining Time *</span>
                </label>
                <div className="grid grid-cols-5 sm:grid-cols-10 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setFormData({ ...formData, time: slot })}
                      className={`py-2.5 rounded-sm text-xs font-mono font-medium transition-all ${
                        formData.time === slot
                          ? 'bg-[#C5A059] text-black font-bold shadow-md shadow-[#C5A059]/20'
                          : 'glass text-neutral-400 hover:text-white border border-white/10'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Special Requests */}
              <div className="mb-8">
                <label htmlFor="res-requests" className="block text-xs uppercase tracking-wider text-neutral-300 mb-2 font-medium">
                  Special Requests or Dietary Notes (Optional)
                </label>
                <textarea
                  id="res-requests"
                  rows={2}
                  placeholder="Anniversary, birthday celebration, dietary preferences, or steak cut requests..."
                  value={formData.specialRequests}
                  onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                  className="w-full glass border border-white/10 focus:border-[#C5A059] rounded-sm px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                />
              </div>

              {/* Action and Phone Fallback */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                <div className="text-xs text-neutral-400 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C5A059]" />
                  <span>Prefer direct telephone reservation? </span>
                  <a href={`tel:${RESTAURANT_INFO.phone}`} className="font-mono text-white underline hover:text-[#C5A059]">
                    {RESTAURANT_INFO.phone}
                  </a>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  id="submit-reservation-btn"
                  className="w-full sm:w-auto px-8 py-4 rounded-sm bg-[#C5A059] text-black font-bold text-xs uppercase tracking-widest shadow-xl shadow-[#C5A059]/20 hover:bg-[#b08e4d] transition-all disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting Request...' : 'CONFIRM RESERVATION REQUEST'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
