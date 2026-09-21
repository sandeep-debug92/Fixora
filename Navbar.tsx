import React, { useState } from 'react';
import { 
  Wrench, 
  Menu, 
  X, 
  Search, 
  Compass, 
  ShieldCheck, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { UserRole } from '../types';

interface NavbarProps {
  onOpenReportModal: () => void;
  onOpenTrackModal: () => void;
  onOpenServiceModal: () => void;
  onOpenRoleModal: (role: UserRole) => void;
  currentRole: UserRole;
  setCurrentRole: (role: UserRole) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenReportModal,
  onOpenTrackModal,
  onOpenServiceModal,
  onOpenRoleModal,
  currentRole,
  setCurrentRole,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Problems', href: '#categories' },
    { name: 'Services', href: '#services' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'About', href: '#about' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <a 
              href="#hero" 
              className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-xl"
              aria-label="Fixora Home"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-600 via-blue-600 to-sky-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-200">
                <Wrench className="w-5 h-5 stroke-[2.2]" />
              </div>
              <div className="flex flex-col">
                <span className="font-['Outfit',sans-serif] text-2xl font-bold tracking-tight text-slate-900 leading-none">
                  FIXORA
                </span>
                <span className="text-[10px] font-semibold text-indigo-600 tracking-wider uppercase mt-0.5">
                  Universal Solution Hub
                </span>
              </div>
            </a>

            {/* Persona Tag */}
            <div className="hidden lg:flex items-center ml-4 pl-4 border-l border-slate-200">
              <button
                onClick={() => onOpenRoleModal(currentRole)}
                className="text-xs inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 font-medium border border-slate-200 transition-colors"
                title="Switch perspective preview"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Mode: {currentRole === 'citizen' ? 'Citizen' : currentRole === 'provider' ? 'Provider' : currentRole === 'authority' ? 'Authority' : 'Admin'}</span>
                <span className="text-[10px] text-slate-400 font-normal ml-0.5">(Phase 1 UI)</span>
              </button>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right Actions */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenTrackModal}
              className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-indigo-600 hover:bg-slate-50 rounded-lg border border-slate-200 transition-colors flex items-center gap-1.5"
            >
              <Compass className="w-4 h-4 text-indigo-600" />
              <span>Track Request</span>
            </button>

            <button
              onClick={onOpenReportModal}
              className="px-5 py-2 text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg shadow-sm shadow-indigo-600/30 hover:shadow-indigo-600/40 transition-all flex items-center gap-2 group"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenTrackModal}
              className="p-2 text-slate-600 hover:text-indigo-600 hover:bg-slate-100 rounded-lg"
              title="Track Request"
              aria-label="Track Request"
            >
              <Compass className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-indigo-600"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReportModal();
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-indigo-600 text-white font-medium text-center shadow-sm flex items-center justify-center gap-2"
            >
              <span>Report a Problem</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTrackModal();
              }}
              className="w-full py-2.5 px-4 rounded-lg border border-slate-200 text-slate-700 font-medium text-center hover:bg-slate-50 flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4 text-indigo-600" />
              <span>Track Existing Request</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRoleModal(currentRole);
              }}
              className="w-full py-2 px-3 rounded-lg bg-slate-50 text-slate-600 text-xs font-medium text-center flex items-center justify-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-indigo-500" />
              <span>User Mode: {currentRole.toUpperCase()} (Phase 1 Architecture)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
