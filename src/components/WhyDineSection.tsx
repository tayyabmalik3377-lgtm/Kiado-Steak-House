import React from 'react';
import { Sparkles, GlassWater, Crown, Flame, Gem } from 'lucide-react';

export const WhyDineSection: React.FC = () => {
  const pillars = [
    {
      id: 'pillar-1',
      icon: Flame,
      title: 'Dedicated Open-Flame Searing',
      description:
        'We believe nothing replaces the depth of true charcoal heat. Every steak receives a searing crust that seals in authentic natural juices and texture.',
    },
    {
      id: 'pillar-2',
      icon: Gem,
      title: 'Coastal DHA Phase 8 Setting',
      description:
        'Situated at Reef Tower 2 in DHA Phase 8 Zone D Emaar, providing a tranquil, secluded, and upscale ambiance away from city bustle.',
    },
    {
      id: 'pillar-3',
      icon: Crown,
      title: 'Artisanal Attention to Detail',
      description:
        'From table placement and custom doneness temperatures to warm bone marrow butter and delicate finishing salts, craftsmanship is at our core.',
    },
    {
      id: 'pillar-4',
      icon: GlassWater,
      title: 'Moments Worth Celebrating',
      description:
        'Whether marking an anniversary, hosting an executive dinner, or enjoying a serene weekend evening, we set the benchmark for memorable dining.',
    },
  ];

  return (
    <section className="py-24 bg-[#0A0A0A] border-y border-white/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#C5A059] text-xs font-semibold uppercase tracking-[0.25em] mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Kiado Standard</span>
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-4">
            Why Dine With Kiado
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
            Designed for those who appreciate culinary precision, intimate evening ambiance, and heartfelt service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p, index) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                id={`why-dine-${p.id}`}
                className="group relative p-8 rounded-sm glass border border-white/10 hover:border-[#C5A059]/40 hover:bg-[#C5A059]/5 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="w-12 h-12 rounded-sm glass border border-white/15 group-hover:border-[#C5A059]/50 flex items-center justify-center text-[#C5A059] mb-6 transition-colors shadow-inner">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest block mb-1">
                    0{index + 1}
                  </span>
                  <h3 className="font-serif-luxury text-xl font-normal text-white mb-3 group-hover:text-[#C5A059] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                    {p.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity">
                    Kiado Hospitality
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
