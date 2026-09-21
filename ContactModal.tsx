import React, { useState } from 'react';
import { X, Mail, Phone, MapPin, ShieldCheck, FileText, Send, CheckCircle2 } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'contact' | 'privacy' | 'terms';
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'contact',
}) => {
  const [activeTab, setActiveTab] = useState<'contact' | 'privacy' | 'terms'>(defaultTab);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
      onClose();
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('contact')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                activeTab === 'contact' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-200'
              }`}
            >
              Contact Helpdesk
            </button>
            <button
              onClick={() => setActiveTab('privacy')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                activeTab === 'privacy' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-200'
              }`}
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                activeTab === 'terms' ? 'bg-indigo-600 text-white' : 'text-slate-600 hover:bg-slate-200'
              }`}
            >
              Terms of Use
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {activeTab === 'contact' && (
            <div>
              <div className="mb-5">
                <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-slate-900">
                  Fixora Support & Inquiries
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Have questions about submitting a problem, onboarding as a service trade partner, or connecting your municipal department?
                </p>
              </div>

              {submitted ? (
                <div className="p-8 text-center space-y-3 bg-emerald-50 rounded-2xl border border-emerald-200">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-slate-900">Message Received</h4>
                  <p className="text-xs text-slate-600">
                    A Fixora support representative will follow up within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full name"
                        className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@domain.com"
                        className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                      Message / Inquiry
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="How can Fixora assist you today?"
                      className="w-full p-2.5 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-xl font-bold text-xs text-white bg-indigo-600 hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs"
                  >
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
              <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-slate-900">
                Fixora Privacy Commitment
              </h3>
              <p>
                At Fixora, we respect citizen privacy. When you report an everyday problem or request a service technician:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Your contact details are shared exclusively with the assigned department or verified tradesperson assigned to your case.</li>
                <li>Location and photos submitted for public civic infrastructure problems (e.g. road potholes) are anonymized for public community view.</li>
                <li>We do not sell personal identification data to third-party telemarketers.</li>
              </ul>
            </div>
          )}

          {activeTab === 'terms' && (
            <div className="space-y-4 text-xs text-slate-600 leading-relaxed">
              <h3 className="font-['Outfit',sans-serif] text-xl font-bold text-slate-900">
                Terms of Use
              </h3>
              <p>
                Fixora provides a discovery, guidance, and community routing platform for everyday problems across multiple sectors.
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>Users agree to submit truthful, accurate problem descriptions and avoid false emergency reports.</li>
                <li>Fixora connects users to civic bodies and service professionals; resolution timelines are subject to departmental and trade availability.</li>
                <li>All intellectual property and trademarks belong to Fixora (2026).</li>
              </ul>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 text-right">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-semibold text-slate-700 hover:bg-slate-100"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};
