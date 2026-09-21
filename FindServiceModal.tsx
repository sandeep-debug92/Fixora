import React, { useState } from 'react';
import { 
  X, 
  Search, 
  Star, 
  ShieldCheck, 
  Clock, 
  Phone, 
  Calendar, 
  CheckCircle2, 
  ArrowRight,
  Filter
} from 'lucide-react';
import { SAMPLE_SERVICE_PROFESSIONALS } from '../data/mockData';
import { ServiceProfessional } from '../types';

interface FindServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookProfessional: (pro: ServiceProfessional) => void;
}

export const FindServiceModal: React.FC<FindServiceModalProps> = ({
  isOpen,
  onClose,
  onBookProfessional,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'electrician', label: 'Electricians' },
    { id: 'plumber', label: 'Plumbers' },
    { id: 'ac', label: 'AC & HVAC' },
    { id: 'carpenter', label: 'Carpenters' },
    { id: 'cleaner', label: 'Cleaners' },
    { id: 'refrigerator', label: 'Appliance Repair' },
    { id: 'painter', label: 'Painters' },
    { id: 'cook', label: 'Home Cooks' },
  ];

  const filteredPros = SAMPLE_SERVICE_PROFESSIONALS.filter((pro) => {
    const matchesSearch = 
      pro.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pro.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pro.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCat = selectedCategory === 'all' || pro.category.toLowerCase().includes(selectedCategory.toLowerCase());

    return matchesSearch && matchesCat;
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-100 bg-slate-50/70">
          <div>
            <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider">
              Fixora Service Marketplace
            </span>
            <h3 className="font-['Outfit',sans-serif] text-lg sm:text-xl font-bold text-slate-900">
              Find a Verified Service Professional
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter controls */}
        <div className="p-4 sm:p-6 border-b border-slate-100 bg-white space-y-3">
          
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by specialty, skill or professional name..."
              className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 font-medium text-slate-800"
            />
          </div>

          {/* Categories Pill bar */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === c.id
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results list */}
        <div className="p-4 sm:p-6 max-h-[60vh] overflow-y-auto divide-y divide-slate-100">
          {filteredPros.length > 0 ? (
            filteredPros.map((pro) => (
              <div key={pro.id} className="py-4 first:pt-0 last:pb-0 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-blue-600 text-white font-bold flex items-center justify-center text-lg flex-shrink-0">
                    {pro.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-['Outfit',sans-serif] text-sm font-bold text-slate-900">
                        {pro.name}
                      </h4>
                      {pro.verified && (
                        <span className="inline-flex items-center gap-0.5 text-[10px] font-semibold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">
                          <ShieldCheck className="w-3 h-3" /> Verified
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-500 font-medium">
                      {pro.role} • {pro.experienceYears} Years Exp
                    </p>

                    <div className="flex items-center gap-3 mt-1.5 text-xs">
                      <div className="flex items-center gap-1 text-amber-600 font-bold">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        <span>{pro.rating}</span>
                        <span className="text-slate-400 font-normal">({pro.reviewsCount})</span>
                      </div>
                      <span className="text-slate-300">•</span>
                      <span className="text-emerald-600 font-medium text-[11px]">
                        {pro.availability}
                      </span>
                      <span className="text-slate-300">•</span>
                      <span className="text-slate-700 font-semibold text-[11px]">
                        {pro.startingRate}
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-1 mt-2">
                      {pro.skills.map((s, idx) => (
                        <span key={idx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex sm:flex-col items-end justify-between sm:justify-center gap-2">
                  <button
                    onClick={() => {
                      onBookProfessional(pro);
                      onClose();
                    }}
                    className="w-full sm:w-auto px-4 py-2 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                  >
                    <span>Request Booking</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="p-8 text-center text-slate-500 text-sm">
              No service professionals found for this filter.
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Complete direct-calling & verified dispatch arrives in Phase 3.</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-slate-200 bg-white font-medium text-slate-700 hover:bg-slate-100"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
