import React, { useState } from 'react';
import { 
  CATEGORIES 
} from '../data/categories';
import { 
  Category, 
  SubCategory 
} from '../types';
import { 
  Wrench, 
  GraduationCap, 
  Landmark, 
  TrainTrack, 
  FileCheck, 
  Zap, 
  HelpCircle, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  Clock, 
  ShieldCheck,
  Search,
  Filter
} from 'lucide-react';

interface CategorySectionProps {
  onSelectSubcategory: (category: Category, subcategory: SubCategory) => void;
  selectedCategoryId?: string | null;
}

export const CategorySection: React.FC<CategorySectionProps> = ({
  onSelectSubcategory,
  selectedCategoryId,
}) => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    'home-personal': true,
    'public-infrastructure': true,
  });
  const [filterQuery, setFilterQuery] = useState('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wrench': return Wrench;
      case 'GraduationCap': return GraduationCap;
      case 'Landmark': return Landmark;
      case 'TrainTrack': return TrainTrack;
      case 'FileCheck': return FileCheck;
      case 'Zap': return Zap;
      default: return HelpCircle;
    }
  };

  const toggleCategoryExpand = (catId: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [catId]: !prev[catId],
    }));
  };

  const filteredCategories = CATEGORIES.filter((cat) => {
    if (activeTab !== 'all' && cat.id !== activeTab) {
      return false;
    }
    if (!filterQuery.trim()) return true;

    const query = filterQuery.toLowerCase();
    const matchesCat = cat.name.toLowerCase().includes(query) || cat.tagline.toLowerCase().includes(query);
    const matchesSub = cat.subcategories.some(
      (sub) => sub.name.toLowerCase().includes(query) || sub.description.toLowerCase().includes(query)
    );
    return matchesCat || matchesSub;
  });

  return (
    <section id="categories" className="py-16 sm:py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            Categorized Discovery
          </span>
          <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            What problem are you facing?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 font-normal">
            Select your concern from our multi-sector categories to get routed to the right authority, civic department, or certified professional.
          </p>
        </div>

        {/* Filter Toolbar: Category Tabs + Quick Filter Box */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white p-3 rounded-2xl border border-slate-200 shadow-xs">
          
          {/* Scrollable Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              All Categories ({CATEGORIES.length})
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                  activeTab === cat.id
                    ? 'bg-indigo-600 text-white shadow-xs'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Inline Filter Search */}
          <div className="relative w-full md:w-64 flex-shrink-0">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              placeholder="Filter specific problem..."
              className="w-full pl-9 pr-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 font-medium"
            />
          </div>

        </div>

        {/* Categories List */}
        <div className="space-y-6">
          {filteredCategories.map((cat) => {
            const IconComponent = getCategoryIcon(cat.iconName);
            const isExpanded = expandedCategories[cat.id] ?? true;

            // Filter subcategories if search query exists
            const displayedSubcategories = filterQuery.trim()
              ? cat.subcategories.filter(
                  (sub) =>
                    sub.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
                    sub.description.toLowerCase().includes(filterQuery.toLowerCase())
                )
              : cat.subcategories;

            if (filterQuery.trim() && displayedSubcategories.length === 0) {
              return null;
            }

            return (
              <div
                key={cat.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow overflow-hidden"
              >
                {/* Category Header Card */}
                <div
                  onClick={() => toggleCategoryExpand(cat.id)}
                  className="p-5 sm:p-6 flex items-center justify-between cursor-pointer hover:bg-slate-50/70 transition-colors select-none"
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${cat.colorScheme.bg} ${cat.colorScheme.text} border ${cat.colorScheme.border} flex-shrink-0 shadow-xs`}>
                      <IconComponent className="w-6 h-6 stroke-[2.2]" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5">
                        <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-slate-900">
                          {cat.name}
                        </h3>
                        <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${cat.colorScheme.badge}`}>
                          {cat.subcategories.length} Topics
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                        {cat.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-indigo-600 hidden sm:inline">
                      {isExpanded ? 'Collapse' : 'Expand Topics'}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center hover:bg-indigo-50 hover:text-indigo-600 transition-colors">
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Subcategories Grid (Expandable) */}
                {isExpanded && (
                  <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 bg-slate-50/40">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 pt-4">
                      {displayedSubcategories.map((sub) => (
                        <div
                          key={sub.id}
                          className="bg-white p-4 rounded-xl border border-slate-200/90 hover:border-indigo-300 hover:shadow-md transition-all group flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-start justify-between gap-2">
                              <h4 className="text-sm font-bold text-slate-800 group-hover:text-indigo-600 transition-colors">
                                {sub.name}
                              </h4>
                              {sub.estimatedResolutionTime && (
                                <span className="inline-flex items-center gap-1 text-[10px] font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md flex-shrink-0">
                                  <Clock className="w-3 h-3 text-slate-400" />
                                  <span>{sub.estimatedResolutionTime}</span>
                                </span>
                              )}
                            </div>

                            <p className="text-xs text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                              {sub.description}
                            </p>

                            {sub.departmentOrIndustry && (
                              <div className="mt-2.5 flex items-center gap-1.5 text-[11px] text-slate-400 font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                                <span className="line-clamp-1">{sub.departmentOrIndustry}</span>
                              </div>
                            )}
                          </div>

                          <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                            <span className="text-[11px] font-semibold text-slate-400 group-hover:text-indigo-600">
                              {sub.type === 'service' ? 'Request Specialist' : 'Submit Issue'}
                            </span>
                            <button
                              onClick={() => onSelectSubcategory(cat, sub)}
                              className="px-2.5 py-1 rounded-lg text-xs font-semibold text-indigo-600 bg-indigo-50 hover:bg-indigo-600 hover:text-white transition-all flex items-center gap-1 cursor-pointer"
                            >
                              <span>Select</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
