import React from 'react';
import { 
  HelpCircle, 
  MapPin, 
  PhoneCall, 
  CheckCircle2, 
  Compass, 
  Shield, 
  Layers,
  ArrowRight
} from 'lucide-react';

interface AboutSectionProps {
  onStartReport: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onStartReport }) => {
  const confusionPillars = [
    {
      title: 'Where to complain',
      desc: 'No more scouring municipal websites or finding out after 3 days that your issue belonged to a different ward or department.',
      icon: MapPin,
    },
    {
      title: 'Whom to contact',
      desc: 'Whether it is a certified electrician or the local water supply division, Fixora provides the exact contact and routing channel.',
      icon: PhoneCall,
    },
    {
      title: 'Which service to choose',
      desc: 'Clear descriptions of repair trades, verified credentials, ratings, and transparent upfront process expectations.',
      icon: CheckCircle2,
    },
    {
      title: 'How to track a request',
      desc: 'A single, easy tracking code to follow updates step-by-step from initial triage to verified problem resolution.',
      icon: Compass,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Description */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-indigo-600 tracking-wider uppercase bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              About Fixora
            </span>

            <h2 className="font-['Outfit',sans-serif] text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              One Unified Platform For All Everyday Problems
            </h2>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Fixora brings different everyday problems and relevant solutions together in one platform.
            </p>

            <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
              When something breaks in our daily life — whether it’s an AC cooling failure, a pothole on our street, a delayed scholarship, or an electrical short circuit — we usually don’t know where to turn. Fixora is designed specifically to eliminate this daily friction.
            </p>

            {/* Note on transparency */}
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 leading-relaxed">
              <span className="font-semibold text-slate-700">Transparency Commitment:</span> Fixora operates as an independent discovery, guidance, and community routing network designed to organize civic and everyday problems. We empower users with transparent public channels and vetted local tradespeople.
            </div>

            <div>
              <button
                onClick={onStartReport}
                className="px-6 py-3 rounded-xl font-semibold text-white bg-indigo-600 hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition-all inline-flex items-center gap-2 cursor-pointer text-sm"
              >
                <span>Report an Issue on Fixora</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Cards: Addressing Confusion */}
          <div className="lg:col-span-6">
            <div className="bg-[#F8FAFC] p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm">
              <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
                Designed to eliminate confusion about:
              </div>

              <div className="space-y-4">
                {confusionPillars.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs flex items-start gap-4 hover:border-indigo-300 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 stroke-[2]" />
                      </div>
                      <div>
                        <h4 className="font-['Outfit',sans-serif] text-base font-bold text-slate-900">
                          {item.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
