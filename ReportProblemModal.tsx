import React, { useState, useEffect } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Upload, 
  MapPin, 
  AlertCircle, 
  Sparkles, 
  Wrench, 
  Copy,
  ArrowRight
} from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { Category, SubCategory } from '../types';

interface ReportProblemModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: Category | null;
  initialSubcategory?: SubCategory | null;
  initialQuery?: string;
  onTicketCreated?: (trackingId: string) => void;
}

export const ReportProblemModal: React.FC<ReportProblemModalProps> = ({
  isOpen,
  onClose,
  initialCategory,
  initialSubcategory,
  initialQuery,
  onTicketCreated,
}) => {
  const [selectedCatId, setSelectedCatId] = useState<string>(
    initialCategory?.id || CATEGORIES[0].id
  );
  const [selectedSubId, setSelectedSubId] = useState<string>(
    initialSubcategory?.id || CATEGORIES[0].subcategories[0].id
  );
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [urgency, setUrgency] = useState<'low' | 'medium' | 'high' | 'emergency'>('medium');
  const [location, setLocation] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [photoAttached, setPhotoAttached] = useState(false);
  
  // Submission state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generatedTicket, setGeneratedTicket] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCatId(initialCategory.id);
    }
    if (initialSubcategory) {
      setSelectedSubId(initialSubcategory.id);
      setTitle(initialSubcategory.name);
    } else if (initialQuery) {
      setTitle(initialQuery);
    }
  }, [initialCategory, initialSubcategory, initialQuery]);

  if (!isOpen) return null;

  const currentCategory = CATEGORIES.find((c) => c.id === selectedCatId) || CATEGORIES[0];
  const currentSubcategories = currentCategory.subcategories;

  const handleCategoryChange = (catId: string) => {
    setSelectedCatId(catId);
    const cat = CATEGORIES.find((c) => c.id === catId);
    if (cat && cat.subcategories.length > 0) {
      setSelectedSubId(cat.subcategories[0].id);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate instant ticket dispatch
    setTimeout(() => {
      const randomNum = Math.floor(1000 + Math.random() * 9000);
      const ticketId = `FX-2026-${randomNum}`;
      setIsSubmitting(false);
      setGeneratedTicket(ticketId);
    }, 600);
  };

  const handleCopyTicket = () => {
    if (generatedTicket) {
      navigator.clipboard.writeText(generatedTicket);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleReset = () => {
    setGeneratedTicket(null);
    setTitle('');
    setDescription('');
    setLocation('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-xs">
              <Wrench className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-['Outfit',sans-serif] text-lg sm:text-xl font-bold text-slate-900 leading-tight">
                {generatedTicket ? 'Request Successfully Logged' : 'Report a Problem'}
              </h3>
              <p className="text-xs text-slate-500">
                Fixora Unified Triage & Dispatch Engine
              </p>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        {generatedTicket ? (
          <div className="p-6 sm:p-8 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Ticket Registered & Routed
              </span>
              <h4 className="font-['Outfit',sans-serif] text-2xl font-extrabold text-slate-900">
                Your Problem Request is Active
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Fixora has categorized your problem under <span className="font-semibold text-slate-800">{currentCategory.name}</span>. It is now awaiting assignment to the relevant authority or technician.
              </p>
            </div>

            {/* Generated Ticket Box */}
            <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-slate-200 max-w-sm mx-auto flex items-center justify-between">
              <div className="text-left">
                <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                  Tracking Identifier
                </span>
                <span className="font-mono text-lg font-bold text-indigo-700">
                  {generatedTicket}
                </span>
              </div>
              <button
                onClick={handleCopyTicket}
                className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5" />
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  if (onTicketCreated) onTicketCreated(generatedTicket);
                  handleReset();
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-indigo-600 text-white font-semibold text-sm hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Track Request in Tracker</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-slate-50 transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4 max-h-[75vh] overflow-y-auto">
            
            {/* Category selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                1. Select Sector Domain
              </label>
              <select
                value={selectedCatId}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full p-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 font-medium text-slate-800"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Subcategory selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                2. Select Specific Issue Type
              </label>
              <select
                value={selectedSubId}
                onChange={(e) => setSelectedSubId(e.target.value)}
                className="w-full p-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 font-medium text-slate-800"
              >
                {currentSubcategories.map((sub) => (
                  <option key={sub.id} value={sub.id}>
                    {sub.name} ({sub.estimatedResolutionTime || 'Standard SLA'})
                  </option>
                ))}
              </select>
            </div>

            {/* Title / Brief summary */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                3. Problem Headline
              </label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g., Severe road pothole near bus stand or Inverter AC not cooling"
                className="w-full p-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 font-medium text-slate-800"
              />
            </div>

            {/* Detailed Description */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                4. Description of Problem
              </label>
              <textarea
                rows={3}
                required
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Provide helpful context: since when did it happen, symptoms, urgency details..."
                className="w-full p-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 font-medium text-slate-800"
              />
            </div>

            {/* Urgency selection */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                5. Severity / Urgency Level
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { id: 'low', label: 'Low', desc: 'Routine inquiry' },
                  { id: 'medium', label: 'Medium', desc: 'Needs attention' },
                  { id: 'high', label: 'High', desc: 'Disruptive' },
                  { id: 'emergency', label: 'Emergency', desc: 'Hazardous' },
                ].map((lvl) => (
                  <button
                    key={lvl.id}
                    type="button"
                    onClick={() => setUrgency(lvl.id as any)}
                    className={`py-2 px-1 text-center rounded-xl border text-xs font-semibold transition-all cursor-pointer ${
                      urgency === lvl.id
                        ? lvl.id === 'emergency'
                          ? 'bg-rose-50 border-rose-500 text-rose-700'
                          : 'bg-indigo-50 border-indigo-500 text-indigo-700'
                        : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div>{lvl.label}</div>
                    <div className="text-[9px] font-normal opacity-70 mt-0.5">{lvl.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Location & Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Location / Address / Ward
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="Street name, landmark, area"
                    className="w-full pl-9 pr-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 font-medium text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Your Name / Contact
                </label>
                <input
                  type="text"
                  required
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  placeholder="Citizen / Reporter Name"
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500 font-medium text-slate-800"
                />
              </div>
            </div>

            {/* Attachment preview toggle */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setPhotoAttached(!photoAttached)}
                className={`w-full py-2 px-3 border border-dashed rounded-xl text-xs font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                  photoAttached 
                    ? 'bg-emerald-50 border-emerald-300 text-emerald-800' 
                    : 'bg-slate-50 border-slate-300 text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Upload className="w-3.5 h-3.5" />
                <span>{photoAttached ? '✓ Photo of Problem Attached (Sample Image)' : '+ Attach Photo of Issue / Document (Optional)'}</span>
              </button>
            </div>

            {/* Submit Button */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-700 shadow-sm transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Routing to Department...</span>
                ) : (
                  <>
                    <span>Submit Request to Fixora</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
