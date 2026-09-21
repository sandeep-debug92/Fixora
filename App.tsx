import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SearchBar } from './components/SearchBar';
import { QuickActions } from './components/QuickActions';
import { CategorySection } from './components/CategorySection';
import { HowItWorks } from './components/HowItWorks';
import { ServiceProvidersSection } from './components/ServiceProvidersSection';
import { PublicReportingSection } from './components/PublicReportingSection';
import { UserRolesSection } from './components/UserRolesSection';
import { BenefitsSection } from './components/BenefitsSection';
import { AboutSection } from './components/AboutSection';
import { Footer } from './components/Footer';

// Modals
import { ReportProblemModal } from './components/ReportProblemModal';
import { TrackRequestModal } from './components/TrackRequestModal';
import { FindServiceModal } from './components/FindServiceModal';
import { UserRoleModal } from './components/UserRoleModal';
import { ContactModal } from './components/ContactModal';

import { Category, SubCategory, UserRole, ServiceProfessional } from './types';
import { CATEGORIES } from './data/categories';

export default function App() {
  // Modal states
  const [reportModalOpen, setReportModalOpen] = useState(false);
  const [trackModalOpen, setTrackModalOpen] = useState(false);
  const [serviceModalOpen, setServiceModalOpen] = useState(false);
  const [roleModalOpen, setRoleModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactDefaultTab, setContactDefaultTab] = useState<'contact' | 'privacy' | 'terms'>('contact');

  // Interactive context
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<SubCategory | null>(null);
  const [searchDraftQuery, setSearchDraftQuery] = useState<string>('');
  const [activeTrackingId, setActiveTrackingId] = useState<string | null>(null);
  const [currentRole, setCurrentRole] = useState<UserRole>('citizen');

  // Handlers
  const handleOpenReportModal = (
    category?: Category | null,
    subcategory?: SubCategory | null,
    query?: string
  ) => {
    setSelectedCategory(category || null);
    setSelectedSubcategory(subcategory || null);
    setSearchDraftQuery(query || '');
    setReportModalOpen(true);
  };

  const handleSubcategorySelect = (category: Category, subcategory: SubCategory) => {
    handleOpenReportModal(category, subcategory, subcategory.name);
  };

  const handleOpenReportWithQuery = (query: string) => {
    handleOpenReportModal(null, null, query);
  };

  const handlePublicIssueReport = (issueTitle?: string) => {
    const publicCat = CATEGORIES.find((c) => c.id === 'public-infrastructure') || null;
    const sub = issueTitle 
      ? publicCat?.subcategories.find(s => issueTitle.toLowerCase().includes(s.name.toLowerCase())) || publicCat?.subcategories[0]
      : publicCat?.subcategories[0];
    handleOpenReportModal(publicCat, sub, issueTitle || 'Public Community Hazard');
  };

  const handleBookProfessional = (pro: ServiceProfessional) => {
    const homeCat = CATEGORIES.find((c) => c.id === 'home-personal') || null;
    const sub = homeCat?.subcategories.find(s => pro.category.toLowerCase().includes(s.name.toLowerCase())) || null;
    handleOpenReportModal(homeCat, sub, `Service Request: ${pro.role} (${pro.name})`);
  };

  const handleTicketCreated = (ticketId: string) => {
    setActiveTrackingId(ticketId);
    setTrackModalOpen(true);
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenRoleModal = (role: UserRole) => {
    setCurrentRole(role);
    setRoleModalOpen(true);
  };

  const handleOpenContact = (tab: 'contact' | 'privacy' | 'terms' = 'contact') => {
    setContactDefaultTab(tab);
    setContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-800 flex flex-col selection:bg-indigo-500 selection:text-white">
      
      {/* Top Navigation */}
      <Navbar
        onOpenReportModal={() => handleOpenReportModal()}
        onOpenTrackModal={() => setTrackModalOpen(true)}
        onOpenServiceModal={() => setServiceModalOpen(true)}
        onOpenRoleModal={handleOpenRoleModal}
        currentRole={currentRole}
        setCurrentRole={setCurrentRole}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero
          onOpenReportModal={() => handleOpenReportModal()}
          onExploreServices={() => scrollToSection('services')}
          onSelectCategory={(catId) => {
            const cat = CATEGORIES.find((c) => c.id === catId);
            if (cat) {
              setSelectedCategory(cat);
              scrollToSection('categories');
            }
          }}
        />

        {/* Smart Problem Search Box */}
        <SearchBar
          onSelectSubcategory={handleSubcategorySelect}
          onOpenReportWithQuery={handleOpenReportWithQuery}
        />

        {/* Quick Actions (Report, Find, Track, Explore) */}
        <QuickActions
          onReportProblem={() => handleOpenReportModal()}
          onFindService={() => setServiceModalOpen(true)}
          onTrackRequest={() => setTrackModalOpen(true)}
          onExploreCategories={() => scrollToSection('categories')}
        />

        {/* What Can Fixora Help With? (Category Discovery) */}
        <CategorySection
          onSelectSubcategory={handleSubcategorySelect}
          selectedCategoryId={selectedCategory?.id}
        />

        {/* How Fixora Works (4-Step Visual Process) */}
        <HowItWorks
          onStartReporting={() => handleOpenReportModal()}
        />

        {/* Service Providers Section */}
        <ServiceProvidersSection
          onFindService={() => setServiceModalOpen(true)}
          onBookProfessional={handleBookProfessional}
        />

        {/* Public Problem Reporting Section */}
        <PublicReportingSection
          onReportPublicProblem={handlePublicIssueReport}
        />

        {/* Multi-Stakeholder / 4 Core User Roles */}
        <UserRolesSection
          currentRole={currentRole}
          onSelectRole={setCurrentRole}
          onOpenRoleModal={handleOpenRoleModal}
        />

        {/* Trust & Benefits Section */}
        <BenefitsSection />

        {/* About Fixora Section */}
        <AboutSection
          onStartReport={() => handleOpenReportModal()}
        />

      </main>

      {/* Footer */}
      <Footer
        onOpenReportModal={() => handleOpenReportModal()}
        onOpenTrackModal={() => setTrackModalOpen(true)}
        onOpenContactModal={() => handleOpenContact('contact')}
      />

      {/* Interactive Modals */}
      <ReportProblemModal
        isOpen={reportModalOpen}
        onClose={() => setReportModalOpen(false)}
        initialCategory={selectedCategory}
        initialSubcategory={selectedSubcategory}
        initialQuery={searchDraftQuery}
        onTicketCreated={handleTicketCreated}
      />

      <TrackRequestModal
        isOpen={trackModalOpen}
        onClose={() => setTrackModalOpen(false)}
        initialTrackingId={activeTrackingId}
      />

      <FindServiceModal
        isOpen={serviceModalOpen}
        onClose={() => setServiceModalOpen(false)}
        onBookProfessional={handleBookProfessional}
      />

      <UserRoleModal
        isOpen={roleModalOpen}
        onClose={() => setRoleModalOpen(false)}
        currentRole={currentRole}
        onSelectRole={setCurrentRole}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        defaultTab={contactDefaultTab}
      />

    </div>
  );
}
