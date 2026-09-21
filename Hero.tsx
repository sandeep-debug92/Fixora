import React from 'react';
import { 
  ArrowRight, 
  Search, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Wrench, 
  Wind, 
  Refrigerator, 
  Zap, 
  Droplets, 
  GraduationCap, 
  Landmark, 
  TrainTrack, 
  FileText,
  AlertCircle
} from 'lucide-react';

interface HeroProps {
  onOpenReportModal: () => void;
  onExploreServices: () => void;
  onSelectCategory: (categoryId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenReportModal,
  onExploreServices,
  onSelectCategory,
}) => {
  // 9 visual problem representations requested in the prompt
  const problemShowcases = [
    {
      id: 'ac',
      title: 'Broken AC',
      sub: 'HVAC & Gas Leakage',
      icon: Wind,
      color: 'bg-sky-50 text-sky-600 border-sky-200',
      tag: 'Home Service',
      catId: 'home-personal',
    },
    {
      id: 'fridge',
      title: 'Fridge Repair',
      sub: 'Cooling & Compressor',
      icon: Refrigerator,
      color: 'bg-blue-50 text-blue-600 border-blue-200',
      tag: 'Appliance',
      catId: 'home-personal',
    },
    {
      id: 'plumber',
      title: 'Plumber Needed',
      sub: 'Pipe Leak & Tap Fix',
      icon: Droplets,
      color: 'bg-cyan-50 text-cyan-600 border-cyan-200',
      tag: 'Personal Service',
      catId: 'home-personal',
    },
    {
      id: 'electrician',
      title: 'Electrician',
      sub: 'Short Circuit & Wiring',
      icon: Zap,
      color: 'bg-amber-50 text-amber-600 border-amber-200',
      tag: 'Immediate Repair',
      catId: 'home-personal',
    },
    {
      id: 'road',
      title: 'Road & Potholes',
      sub: 'Dangerous craters & asphalt',
      icon: AlertCircle,
      color: 'bg-orange-50 text-orange-600 border-orange-200',
      tag: 'Public Works',
      catId: 'public-infrastructure',
    },
    {
      id: 'drainage',
      title: 'Water / Drainage',
      sub: 'Sewer blocks & low pressure',
      icon: Droplets,
      color: 'bg-teal-50 text-teal-600 border-teal-200',
      tag: 'Civic Utility',
      catId: 'public-infrastructure',
    },
    {
      id: 'school',
      title: 'School Problem',
      sub: 'Scholarships & admissions',
      icon: GraduationCap,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      tag: 'Education',
      catId: 'education',
    },
    {
      id: 'gov',
      title: 'Government Service',
      sub: 'Certificates & schemes',
      icon: FileText,
      color: 'bg-rose-50 text-rose-600 border-rose-200',
      tag: 'Citizen Welfare',
      catId: 'government-services',
    },
    {
      id: 'transport',
      title: 'Transportation',
      sub: 'Railway & Bus stations',
      icon: TrainTrack,
      color: 'bg-purple-50 text-purple-600 border-purple-200',
      tag: 'Transit Issue',
      catId: 'transportation',
    },
  ];

  return (
    <section id="hero" className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden">
      {/* Soft background ambient gradient blobs */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-indigo-50/70 via-sky-50/40 to-transparent pointer-events-none -z-10" />
      <div className="absolute -top-16 right-10 w-72 h-72 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 left-10 w-80 h-80 bg-purple-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600 animate-pulse" />
              <span>Fixora Universal Solution Ecosystem</span>
              <span className="text-slate-300">|</span>
              <span className="text-indigo-800 font-medium">Phase 1 Foundation</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-['Outfit',sans-serif] text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
              Every Problem.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-600 to-sky-600">
                One Place to Find a Solution.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Fixora helps citizens, students, and families discover the appropriate service, department, authority, or skilled professional for any everyday problem — from home repairs to civic infrastructure.
            </p>

            {/* Call To Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={onOpenReportModal}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/30 hover:shadow-lg hover:shadow-indigo-600/40 transition-all flex items-center justify-center gap-2.5 text-base group"
              >
                <span>Report a Problem</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-slate-700 hover:text-indigo-600 bg-white hover:bg-slate-50 border border-slate-300/80 shadow-xs hover:border-indigo-300 transition-all flex items-center justify-center gap-2 text-base"
              >
                <Search className="w-4 h-4 text-indigo-600" />
                <span>Explore Services</span>
              </button>
            </div>

            {/* Quick Trust Highlights */}
            <div className="pt-4 border-t border-slate-200/70 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>No Department Guesswork</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                <span>Transparent Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600" />
                <span>Public & Private Services</span>
              </div>
            </div>

          </div>

          {/* Right Hero Illustration Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Frame */}
              <div className="p-4 sm:p-5 rounded-3xl bg-white/80 backdrop-blur-xl border border-slate-200/90 shadow-xl shadow-slate-200/50 relative overflow-hidden">
                
                {/* Header inside illustration card */}
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="text-xs font-semibold text-slate-500 ml-2">
                      Fixora Unified Dispatch
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-full">
                    9 Core Sectors
                  </span>
                </div>

                {/* Grid of Problem Types */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3">
                  {problemShowcases.map((item) => {
                    const IconComp = item.icon;
                    return (
                      <button
                        key={item.id}
                        onClick={() => onSelectCategory(item.catId)}
                        className={`p-2.5 sm:p-3 rounded-2xl border text-left transition-all hover:scale-[1.03] hover:shadow-md cursor-pointer group bg-white ${item.color}`}
                        title={`Explore ${item.title}`}
                      >
                        <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-white shadow-xs mb-2 group-hover:rotate-6 transition-transform">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <div className="text-xs font-bold text-slate-800 line-clamp-1 leading-tight group-hover:text-indigo-600 transition-colors">
                          {item.title}
                        </div>
                        <div className="text-[10px] text-slate-500 line-clamp-1 mt-0.5 font-normal">
                          {item.sub}
                        </div>
                        <div className="mt-1.5 text-[9px] font-semibold text-slate-400 uppercase tracking-wider">
                          {item.tag}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Bottom interactive status teaser */}
                <div className="mt-3.5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    <span className="text-slate-600 font-medium text-[11px]">
                      Select any problem to discover its solution
                    </span>
                  </div>
                  <span className="text-[11px] font-semibold text-indigo-600">
                    Fixora Engine →
                  </span>
                </div>

              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -bottom-4 -left-4 bg-white px-3.5 py-2 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2.5 text-xs font-semibold text-slate-800 animate-bounce duration-1000">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  ✓
                </div>
                <span>One unified platform</span>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -top-3 -right-3 bg-white px-3.5 py-2 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-800">
                <span className="w-2 h-2 rounded-full bg-indigo-600"></span>
                <span>Real-Time Triage Ready</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
