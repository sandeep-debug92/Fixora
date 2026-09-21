import React from 'react';
import { Wrench, Heart, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenReportModal: () => void;
  onOpenTrackModal: () => void;
  onOpenContactModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenReportModal,
  onOpenTrackModal,
  onOpenContactModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-sky-500 flex items-center justify-center text-white shadow-md">
                <Wrench className="w-5 h-5 stroke-[2.2]" />
              </div>
              <span className="font-['Outfit',sans-serif] text-2xl font-bold tracking-tight text-white">
                FIXORA
              </span>
            </div>
            
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Every Problem. One Place to Find a Solution. Fixora unifies civic issues, home repairs, educational concerns, transit problems, and public utilities into one accessible platform.
            </p>

            <div className="flex items-center gap-4 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>Systems Active</span>
              </div>
              <span>•</span>
              <span>All 7 Sectors Supported</span>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#hero" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">Problems & Categories</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services Directory</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Fixora</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Problem Sectors */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Problem Domains
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#categories" className="hover:text-white transition-colors">Home & Appliances</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">Education & Scholarships</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">Roads & Infrastructure</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">Railways & Transit</a>
              </li>
              <li>
                <a href="#categories" className="hover:text-white transition-colors">Water & Electricity</a>
              </li>
            </ul>
          </div>

          {/* Col 4: Help & Legal */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Support & Legal
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={onOpenContactModal} className="hover:text-white transition-colors text-left">
                  Contact Helpdesk
                </button>
              </li>
              <li>
                <button onClick={onOpenTrackModal} className="hover:text-white transition-colors text-left">
                  Track Existing Ticket
                </button>
              </li>
              <li>
                <button onClick={onOpenContactModal} className="hover:text-white transition-colors text-left">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button onClick={onOpenContactModal} className="hover:text-white transition-colors text-left">
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © 2026 Fixora. All rights reserved. Built for citizens, communities & service providers.
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
              title="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
