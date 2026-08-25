import React, { useState } from 'react';
import { SAMPLE_REVIEWS, RESTAURANT_INFO } from '../data/restaurantData';
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, Sparkles } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % SAMPLE_REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentIndex((prev) => (prev - 1 + SAMPLE_REVIEWS.length) % SAMPLE_REVIEWS.length);
  };

  return (
    <section id="reviews" className="py-24 bg-[#0A0A0A] border-y border-white/10 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-[#C5A059]/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#C5A059] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Verified Impressions</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-4">
            What Our Guests Say
          </h2>

          {/* Confirmed Rating Summary */}
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-sm glass border border-[#C5A059]/40 shadow-xl">
            <div className="flex items-center gap-1 text-[#C5A059]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#C5A059] text-[#C5A059]" />
              ))}
            </div>
            <span className="font-serif-luxury font-bold text-white text-base">
              {RESTAURANT_INFO.rating} / 5.0
            </span>
            <span className="text-xs text-neutral-400 tracking-wider uppercase border-l border-white/15 pl-3">
              Based on {RESTAURANT_INFO.totalReviews} Customer Reviews
            </span>
          </div>
        </div>

        {/* Carousel Card Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Main Review Card */}
          <div
            id={`review-card-${SAMPLE_REVIEWS[currentIndex].id}`}
            className="relative rounded-sm glass border border-white/10 p-8 sm:p-12 shadow-2xl overflow-hidden"
          >
            <Quote className="absolute top-6 right-8 w-20 h-20 text-white/5 pointer-events-none" />

            <div className="relative z-10 flex flex-col justify-between">
              {/* Rating stars & tag */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-1 text-[#C5A059]">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-[#C5A059] text-[#C5A059]"
                    />
                  ))}
                </div>
                <span className="text-[11px] font-mono text-[#C5A059] glass px-3 py-1 rounded-sm border border-white/10 uppercase tracking-wider">
                  {SAMPLE_REVIEWS[currentIndex].tag}
                </span>
              </div>

              {/* Review Highlight / Quote */}
              <h3 className="font-serif-luxury text-xl sm:text-2xl text-white font-normal italic mb-4 leading-snug">
                "{SAMPLE_REVIEWS[currentIndex].highlight}"
              </h3>

              {/* Body Text */}
              <p className="text-sm sm:text-base text-neutral-300 font-light leading-relaxed mb-8">
                {SAMPLE_REVIEWS[currentIndex].review}
              </p>

              {/* Author & Verification Footer */}
              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-serif-luxury font-medium text-white text-base">
                      {SAMPLE_REVIEWS[currentIndex].author}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059]" />
                  </div>
                  <span className="text-xs text-neutral-500">
                    {SAMPLE_REVIEWS[currentIndex].date}
                  </span>
                </div>

                {/* Counter */}
                <span className="text-xs font-mono text-neutral-500">
                  0{currentIndex + 1} / 0{SAMPLE_REVIEWS.length}
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              type="button"
              onClick={prevReview}
              id="prev-review-btn"
              className="p-3 rounded-sm glass border border-white/15 text-white hover:text-[#C5A059] hover:border-[#C5A059] transition-all shadow-md"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {SAMPLE_REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-sm transition-all ${
                    idx === currentIndex
                      ? 'w-8 bg-[#C5A059]'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to review ${idx + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextReview}
              id="next-review-btn"
              className="p-3 rounded-sm glass border border-white/15 text-white hover:text-[#C5A059] hover:border-[#C5A059] transition-all shadow-md"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
