import React from 'react';
import { TRUST_BENEFITS } from '../data/mockData';
import { 
  Layers, 
  Grid, 
  Search, 
  CheckCircle2, 
  UserCheck, 
  Compass, 
  HeartHandshake, 
  Smartphone 
} from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layers': return Layers;
      case 'Grid': return Grid;
      case 'Search': return Search;
      case 'CheckCircle2': return CheckCircle2;
      case 'UserCheck': return UserCheck;
      case 'Compass': return Compass;
      case 'HeartHandshake': return HeartHandshake;
      case 'Smartphone': return Smartphone;
      default: return CheckCircle2;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            Why Choose Fixora
          </span>
          <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Designed for Simplicity, Clarity & Trust
          </h2>
          <p className="text-base text-slate-600 mt-3 font-normal">
            Every feature is purposefully tailored to reduce delays, eliminate multiple phone numbers, and give you confidence that your problem is actively tracked.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {TRUST_BENEFITS.map((benefit, idx) => {
            const IconComponent = getIcon(benefit.icon);
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/90 hover:border-indigo-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-5 h-5 stroke-[2.2]" />
                  </div>

                  <h3 className="font-['Outfit',sans-serif] text-base font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {benefit.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-slate-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  <span>Fixora Core Promise</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
