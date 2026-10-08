import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PromoBanner } from './components/PromoBanner';
import { ProjectsSection } from './components/ProjectsSection';
import { FloorPlansSection } from './components/FloorPlansSection';
import { CalculatorSection } from './components/CalculatorSection';
import { ArchitectureAndMaterials } from './components/ArchitectureAndMaterials';
import { ConstructionProgress } from './components/ConstructionProgress';
import { AboutAndLeadership } from './components/AboutAndLeadership';
import { ProjectModal } from './components/ProjectModal';
import { ConsultationModal } from './components/ConsultationModal';
import { Footer } from './components/Footer';
import { Project, FloorPlan, COMPANY_CONTACTS } from './data/aplusData';
import { MessageSquare, Phone } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [floorPlansFilter, setFloorPlansFilter] = useState<string>('all');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationProject, setConsultationProject] = useState<string>('senator');
  const [consultationNotes, setConsultationNotes] = useState<string>('');

  const handleOpenConsultation = (projectName?: string) => {
    if (projectName) {
      setConsultationProject(projectName);
    }
    setConsultationNotes('');
    setIsConsultationOpen(true);
  };

  const handleBookPlan = (plan: FloorPlan) => {
    setConsultationProject(plan.projectName);
    setConsultationNotes(`Бронирование: ${plan.roomsLabel} (${plan.area} м²), ориентир $${plan.priceTotal.toLocaleString()}`);
    setIsConsultationOpen(true);
  };

  const handleApplyCalculation = (terms: {
    price: number;
    initialPayment: number;
    initialPercent: number;
    months: number;
    monthlyPayment: number;
    program: string;
    tickets: number;
  }) => {
    setConsultationProject('senator');
    setConsultationNotes(
      `${terms.program}: Стоимость $${terms.price.toLocaleString()}, Первоначальный $${terms.initialPayment.toLocaleString()} (${terms.initialPercent}%), Срок ${terms.months} мес., Ежемесячно $${terms.monthlyPayment}/мес. Билетов BMW X7: ${terms.tickets} шт.`
    );
    setIsConsultationOpen(true);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col font-sans selection:bg-red-600 selection:text-white">
      {/* Top Navigation */}
      <Navbar onOpenConsultation={() => handleOpenConsultation()} />

      <main className="flex-1">
        {/* Hero Section with Quick Apartment Finder */}
        <Hero
          onSelectProjectFilter={(projId) => {
            setFloorPlansFilter(projId);
          }}
          onOpenConsultation={() => handleOpenConsultation()}
        />

        {/* BMW X7 Luxury Promo Spotlight */}
        <PromoBanner onOpenConsultation={() => handleOpenConsultation()} />

        {/* Residential Projects Catalog */}
        <ProjectsSection
          onSelectProject={(proj) => setSelectedProject(proj)}
          onFilterFloorPlans={(projId) => setFloorPlansFilter(projId)}
          activeFilter="all"
        />

        {/* Interactive Floor Plans & Blueprints */}
        <FloorPlansSection
          selectedProjectFilter={floorPlansFilter}
          onBookPlan={handleBookPlan}
        />

        {/* 0% Developer Installment & Mortgage Calculator */}
        <CalculatorSection onApplyCalculation={handleApplyCalculation} />

        {/* Day & Night Interactive Facade Lighting & European Materials */}
        <ArchitectureAndMaterials />

        {/* Live Construction Updates & Webcam Feed */}
        <ConstructionProgress />

        {/* About Company, Landmark Industrial Projects & Leadership */}
        <AboutAndLeadership />
      </main>

      {/* Footer & Contacts */}
      <Footer />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectFloorPlans={(projId) => {
          setFloorPlansFilter(projId);
          const el = document.getElementById('floorplans');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenConsultation={(projName) => handleOpenConsultation(projName)}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        defaultProject={consultationProject}
        initialNotes={consultationNotes}
      />

      {/* Floating Quick Action Widget for Instant WhatsApp Access */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        <a
          href={COMPANY_CONTACTS.whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2.5 pl-3.5 pr-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-2xl transition-all hover:scale-105 active:scale-95"
          aria-label="Написать в WhatsApp"
        >
          <MessageSquare className="w-5 h-5" />
          <span className="text-xs font-semibold tracking-wide hidden sm:inline">WhatsApp A PLUS</span>
        </a>
      </div>
    </div>
  );
}
