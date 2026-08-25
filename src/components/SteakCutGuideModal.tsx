import React from 'react';
import { STEAK_DONENESS_GUIDE } from '../data/restaurantData';
import { X, Flame, Thermometer, Info } from 'lucide-react';

interface SteakCutGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SteakCutGuideModal: React.FC<SteakCutGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="steak-guide-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        id="steak-guide-modal-content"
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0A0A0A] border border-white/15 rounded-sm p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-sm glass border border-[#C5A059]/40 flex items-center justify-center text-[#C5A059]">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif-luxury text-xl sm:text-2xl text-white">
                Steak Temperature &amp; Doneness Guide
              </h3>
              <p className="text-xs text-neutral-400 tracking-wider uppercase">
                How we grill your cut at Kiado Steak House
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            id="close-steak-guide-btn"
            className="p-2 text-neutral-400 hover:text-white rounded-sm glass border border-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tip Box */}
        <div className="glass border border-white/10 rounded-sm p-4 mb-6 flex items-start gap-3 text-xs text-neutral-300">
          <Info className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
          <p>
            For maximum tenderness and natural juiciness, our kitchen recommends <strong className="text-[#C5A059]">Medium Rare</strong> for ribeye and tomahawk cuts, and <strong className="text-[#C5A059]">Rare to Medium Rare</strong> for tenderloin filet mignon.
          </p>
        </div>

        {/* Doneness Levels List */}
        <div className="space-y-4">
          {STEAK_DONENESS_GUIDE.map((guide) => (
            <div
              key={guide.level}
              className="p-4 rounded-sm glass border border-white/10 hover:border-[#C5A059]/40 transition-all flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-4 h-12 rounded-sm flex-shrink-0 shadow-inner"
                  style={{ backgroundColor: guide.colorHex }}
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-serif-luxury text-lg font-bold text-white">
                      {guide.level}
                    </h4>
                    <span className="text-[11px] font-mono text-[#C5A059] glass px-2 py-0.5 rounded-sm border border-white/10">
                      {guide.temp}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-200 font-medium mt-1">
                    {guide.center}
                  </p>
                  <p className="text-xs text-neutral-400 mt-0.5">
                    {guide.recommendation}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-5 border-t border-white/10 flex items-center justify-between">
          <span className="text-xs text-neutral-500">
            Custom temperature requests gladly accommodated.
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-sm bg-[#C5A059] text-black hover:bg-[#b08e4d] text-xs font-bold uppercase tracking-widest transition-colors"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
