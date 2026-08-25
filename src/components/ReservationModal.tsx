import React, { useState } from 'react';
import { RESTAURANT_INFO } from '../data/restaurantData';
import { ReservationFormData } from '../types';
import {
  X,
  Calendar,
  Clock,
  Users,
  Phone,
  User,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Armchair,
} from 'lucide-react';

interface ReservationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<ReservationFormData>({
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

  const [errors, setErrors] = useState<Partial<Record<keyof ReservationFormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  if (!isOpen) return null;

  const timeSlots = ['18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30'];

  const validate = () => {
    const newErrors: Partial<Record<keyof ReservationFormData, string>> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Name is required.';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone number is required.';
    if (!formData.date) newErrors.date = 'Date is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const generateWhatsAppLink = () => {
    const text = encodeURIComponent(
      `Hello Kiado Steak House, I would like to reserve a table for ${formData.guests} guests on ${formData.date} at ${formData.time}. Name: ${formData.fullName || 'Guest'}.`
    );
    return `https://wa.me/923231602333?text=${text}`;
  };

  return (
    <div
      id="reservation-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="reservation-modal-content"
        className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto bg-[#0A0A0A] border border-white/15 rounded-sm p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
          <div>
            <span className="text-[10px] font-mono text-[#C5A059] uppercase tracking-widest block">
              Kiado Steak House • Karachi
            </span>
            <h3 className="font-serif-luxury text-2xl text-white">
              Reserve Your Table
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            id="modal-close-btn"
            className="p-2 text-neutral-400 hover:text-white rounded-sm glass border border-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="w-14 h-14 rounded-sm glass border border-[#C5A059] flex items-center justify-center text-[#C5A059] mx-auto mb-4">
              <CheckCircle className="w-7 h-7" />
            </div>
            <h4 className="font-serif-luxury text-2xl text-white mb-2">
              Request Received
            </h4>
            <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
              We look forward to hosting you on <strong className="text-white">{formData.date}</strong> at <strong className="text-white">{formData.time}</strong> for <strong className="text-[#C5A059]">{formData.guests} guests</strong>.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={generateWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-sm bg-[#25D366] text-black font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm via WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={onClose}
                className="w-full py-2.5 rounded-sm border border-white/15 text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-white"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            {/* Name */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className={`w-full glass border ${
                    errors.fullName ? 'border-red-500' : 'border-white/10 focus:border-[#C5A059]'
                  } rounded-sm pl-9 pr-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none`}
                />
              </div>
              {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="tel"
                  placeholder="0323XXXXXXX"
                  value={formData.phoneNumber}
                  onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                  className={`w-full glass border ${
                    errors.phoneNumber ? 'border-red-500' : 'border-white/10 focus:border-[#C5A059]'
                  } rounded-sm pl-9 pr-3 py-2.5 text-xs sm:text-sm text-white focus:outline-none`}
                />
              </div>
              {errors.phoneNumber && <p className="text-red-400 text-xs mt-1">{errors.phoneNumber}</p>}
            </div>

            {/* Date & Guests */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                  Date *
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="date"
                    value={formData.date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full glass border border-white/10 focus:border-[#C5A059] rounded-sm pl-9 pr-2 py-2.5 text-xs text-white focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 font-medium">
                  Guests *
                </label>
                <div className="relative">
                  <Users className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value, 10) })}
                    className="w-full glass border border-white/10 focus:border-[#C5A059] rounded-sm pl-9 pr-2 py-2.5 text-xs text-white focus:outline-none"
                  >
                    {[1, 2, 3, 4, 5, 6, 8, 10, 12, 16].map((n) => (
                      <option key={n} value={n} className="bg-neutral-900 text-white">
                        {n} {n === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Time Slot Picker */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 flex items-center gap-1 font-medium">
                <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Time Slot</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setFormData({ ...formData, time: slot })}
                    className={`py-2 rounded-sm text-xs font-mono font-medium transition-all ${
                      formData.time === slot
                        ? 'bg-[#C5A059] text-black font-bold shadow-md'
                        : 'glass text-neutral-400 hover:text-white border border-white/10'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Seating */}
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-300 mb-1.5 flex items-center gap-1 font-medium">
                <Armchair className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Seating Preference</span>
              </label>
              <select
                value={formData.seatingPreference}
                onChange={(e) => setFormData({ ...formData, seatingPreference: e.target.value as any })}
                className="w-full glass border border-white/10 focus:border-[#C5A059] rounded-sm px-3 py-2.5 text-xs text-white focus:outline-none"
              >
                <option value="indoor-main" className="bg-neutral-900 text-white">Main Dining Room (Ambient)</option>
                <option value="window-view" className="bg-neutral-900 text-white">Window Oceanfront View</option>
                <option value="private-dining" className="bg-neutral-900 text-white">Private Dining Booth</option>
                <option value="chef-counter" className="bg-neutral-900 text-white">Grill View Seating</option>
              </select>
            </div>

            {/* Submit CTA */}
            <div className="pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-sm bg-[#C5A059] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#b08e4d] hover:shadow-lg hover:shadow-[#C5A059]/30 transition-all"
              >
                {isSubmitting ? 'Sending...' : 'CONFIRM RESERVATION'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
