import React from 'react';
import { Flame, Sparkles, Utensils, Heart, Moon } from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const experiences = [
    {
      id: 'exp-flame',
      icon: Flame,
      title: 'Charcoal & Open Flame',
      subtitle: 'Flavour & Texture',
      description:
        'Harnessing high-temperature charcoal to create an aromatic crust while locking in the natural juices and deep richness of every cut.',
      image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'exp-craft',
      icon: Utensils,
      title: 'Carefully Composed Dishes',
      subtitle: 'Artisanal Preparation',
      description:
        'From delicate carpaccio starters and rich bone marrow to handcrafted sauces and truffle-infused sides, every dish is executed with care.',
      image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'exp-atmosphere',
      icon: Moon,
      title: 'Intimate Evening Setting',
      subtitle: 'Atmosphere & Architecture',
      description:
        'Warm ambient amber lighting, acoustic balance, and plush seating designed for unhurried conversations and private dining comfort.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    },
    {
      id: 'exp-hospitality',
      icon: Heart,
      title: 'Gracious Hospitality',
      subtitle: 'Personalized Attention',
      description:
        'Our service team is dedicated to curating a seamless evening, from cut recommendations and doneness guidance to course timing.',
      image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80',
    },
  ];

  return (
    <section id="experience" className="py-24 bg-[#0A0A0A] border-y border-white/10 relative overflow-hidden">
      {/* Glow */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#C5A059]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#C5A059] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Kiado Experience</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-4">
            Crafted for the Table
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            Every element at Kiado is curated to elevate your evening into an exceptional culinary memory.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                id={`exp-card-${item.id}`}
                className="group relative rounded-sm overflow-hidden glass border border-white/10 hover:border-[#C5A059]/40 hover:bg-[#C5A059]/5 transition-all duration-300 flex flex-col shadow-xl hover:-translate-y-1.5"
              >
                {/* Visual Image Header */}
                <div className="relative h-48 w-full overflow-hidden bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 contrast-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                  
                  {/* Floating Icon Badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-sm glass border border-white/20 flex items-center justify-center text-[#C5A059] shadow-lg backdrop-blur-sm">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-[11px] font-mono text-[#C5A059] uppercase tracking-widest mb-1.5">
                    {item.subtitle}
                  </span>
                  <h3 className="font-serif-luxury text-xl font-normal text-white mb-3 group-hover:text-[#C5A059] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light flex-1">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
