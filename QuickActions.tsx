import React from 'react';
import { 
  AlertOctagon, 
  Search, 
  Compass, 
  Layers, 
  ArrowUpRight,
  Clock,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface QuickActionsProps {
  onReportProblem: () => void;
  onFindService: () => void;
  onTrackRequest: () => void;
  onExploreCategories: () => void;
}

export const QuickActions: React.FC<QuickActionsProps> = ({
  onReportProblem,
  onFindService,
  onTrackRequest,
  onExploreCategories,
}) => {
  const actions = [
    {
      id: 'report',
      title: 'Report a Problem',
      description: 'Submit an issue with civic amenities, school, electricity, or public services in 2 minutes.',
      icon: AlertOctagon,
      action: onReportProblem,
      badge: 'Public & Civic Issues',
      color: 'from-amber-500/10 to-orange-500/5 hover:border-orange-300 text-orange-600',
      iconBg: 'bg-orange-100 text-orange-600',
      cta: 'Start Report',
    },
    {
      id: 'find-service',
      title: 'Find a Service',
      description: 'Book verified electricians, plumbers, carpenters, AC technicians & household cleaners.',
      icon: Search,
      action: onFindService,
      badge: 'Skilled Tradespeople',
      color: 'from-blue-500/10 to-indigo-500/5 hover:border-blue-300 text-blue-600',
      iconBg: 'bg-blue-100 text-blue-600',
      cta: 'Browse Trades',
    },
    {
      id: 'track',
      title: 'Track a Request',
      description: 'Check real-time status of your complaint, technician arrival, or government document triage.',
      icon: Compass,
      action: onTrackRequest,
      badge: 'Interactive Tracker',
      color: 'from-emerald-500/10 to-teal-500/5 hover:border-emerald-300 text-emerald-600',
      iconBg: 'bg-emerald-100 text-emerald-600',
      cta: 'Check Status',
    },
    {
      id: 'explore',
      title: 'Explore Categories',
      description: 'Browse the complete directory across Home, Education, Public Works, Transit & Utilities.',
      icon: Layers,
      action: onExploreCategories,
      badge: '7 Sectors & 60+ Subtypes',
      color: 'from-purple-500/10 to-violet-500/5 hover:border-purple-300 text-purple-600',
      iconBg: 'bg-purple-100 text-purple-600',
      cta: 'View All',
    },
  ];

  return (
    <section className="py-12 bg-white/60 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8">
          <div>
            <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase">
              Fast Access
            </span>
            <h2 className="font-['Outfit',sans-serif] text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              Quick Actions
            </h2>
          </div>
          <p className="text-sm text-slate-500 mt-1 sm:mt-0">
            Immediate tools to start or manage your request on Fixora
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {actions.map((act) => {
            const Icon = act.icon;
            return (
              <div
                key={act.id}
                onClick={act.action}
                className={`relative group p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden ${act.color}`}
              >
                {/* Ambient top right decorative hue */}
                <div className="absolute -top-8 -right-8 w-24 h-24 rounded-full bg-slate-50 group-hover:scale-150 transition-transform -z-0 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${act.iconBg} shadow-xs group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                      {act.badge}
                    </span>
                  </div>

                  <h3 className="font-['Outfit',sans-serif] text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {act.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-500 mt-2 line-clamp-3 leading-relaxed">
                    {act.description}
                  </p>
                </div>

                <div className="relative z-10 pt-5 mt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-700 group-hover:text-indigo-600 transition-colors flex items-center gap-1">
                    {act.cta}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-slate-50 group-hover:bg-indigo-600 group-hover:text-white text-slate-400 flex items-center justify-center transition-colors">
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
