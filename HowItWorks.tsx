import React from 'react';
import { 
  FileText, 
  FolderCheck, 
  Send, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  ShieldAlert
} from 'lucide-react';

interface HowItWorksProps {
  onStartReporting: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStartReporting }) => {
  const steps = [
    {
      step: '01',
      title: 'Tell Us Your Problem',
      subtitle: 'Describe in your words',
      desc: 'Whether it is an AC not cooling, a dangerous road crater, an examination admit card issue, or water pressure failure.',
      icon: FileText,
      color: 'bg-blue-500/10 text-blue-600 border-blue-200',
      badge: 'Step 1',
    },
    {
      step: '02',
      title: 'Choose the Right Category',
      subtitle: 'No guessing departments',
      desc: 'Fixora instantly maps your query to the exact civic authority, utility wing, or vetted private service trade.',
      icon: FolderCheck,
      color: 'bg-indigo-500/10 text-indigo-600 border-indigo-200',
      badge: 'Step 2',
    },
    {
      step: '03',
      title: 'Submit Your Request',
      subtitle: 'Quick & streamlined',
      desc: 'Enter key location details and optional photos. Your request is registered instantly without long phone queues.',
      icon: Send,
      color: 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
      badge: 'Step 3',
    },
    {
      step: '04',
      title: 'Track the Solution',
      subtitle: 'Real-time visibility',
      desc: 'Follow clear milestone updates from assignment to technician arrival or municipal officer clearance.',
      icon: Compass,
      color: 'bg-purple-500/10 text-purple-600 border-purple-200',
      badge: 'Step 4',
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-white border-y border-slate-200/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
            Simple 4-Step Journey
          </span>
          <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            How Fixora Works
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-3 font-normal">
            A seamless bridge connecting citizens and everyday problems directly to the appropriate authorities, municipal bodies, and skilled service professionals.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={item.step}
                className="relative bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200/90 hover:border-indigo-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between group"
              >
                {/* Step pill and number */}
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-['Outfit',sans-serif] text-2xl font-black text-slate-300 group-hover:text-indigo-400 transition-colors">
                      {item.step}
                    </span>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white border border-slate-200 text-slate-600 shadow-2xs">
                      {item.badge}
                    </span>
                  </div>

                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.color} border mb-4 shadow-2xs group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6 stroke-[2]" />
                  </div>

                  <h3 className="font-['Outfit',sans-serif] text-lg font-bold text-slate-900 leading-snug">
                    {item.title}
                  </h3>
                  <div className="text-xs font-medium text-indigo-600 mt-0.5">
                    {item.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-500 mt-3 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-medium text-slate-600">Zero Bureaucracy</span>
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-12 bg-gradient-to-r from-indigo-900 via-indigo-800 to-blue-900 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-['Outfit',sans-serif] text-xl sm:text-2xl font-bold">
              Facing an issue right now?
            </h3>
            <p className="text-indigo-200 text-xs sm:text-sm max-w-xl">
              Do not spend hours searching directory phone numbers. Start a Fixora ticket in less than 2 minutes.
            </p>
          </div>
          <button
            onClick={onStartReporting}
            className="px-6 py-3 rounded-xl bg-white text-indigo-900 font-bold text-sm hover:bg-indigo-50 shadow-md transition-colors flex-shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Report Problem Now</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
