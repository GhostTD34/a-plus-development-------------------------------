import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Menu, X, ArrowUpRight } from 'lucide-react';
import { COMPANY_CONTACTS } from '../data/aplusData';

interface NavbarProps {
  onOpenConsultation: (projectName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenConsultation }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Проекты', href: '#projects' },
    { label: 'Планировки', href: '#floorplans' },
    { label: 'Калькулятор', href: '#calculator' },
    { label: 'Ход стройки', href: '#progress' },
    { label: 'О компании', href: '#about' },
    { label: 'Контакты', href: '#contacts' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-neutral-950/90 backdrop-blur-md border-b border-neutral-800/80 shadow-2xl py-3'
            : 'bg-gradient-to-b from-neutral-950/80 to-transparent border-b border-neutral-800/30 py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="/"
            className="group flex items-baseline gap-1.5 text-xl font-bold tracking-tight text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 rounded"
          >
            <span className="font-display tracking-wider">A<span className="text-red-500 font-black">+</span></span>
            <span className="text-neutral-300 font-light text-sm uppercase tracking-widest hidden sm:inline">DEVELOPMENT</span>
          </a>

          {/* Zone 2: 4–6 clean text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-red-500 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1–2 primary actions */}
          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY_CONTACTS.phone}`}
              className="hidden sm:flex items-center gap-2 text-xs font-semibold text-neutral-200 hover:text-white px-3 py-2 rounded-lg border border-neutral-800 hover:border-neutral-700 bg-neutral-900/60 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>{COMPANY_CONTACTS.phoneDisplay}</span>
            </a>

            <button
              onClick={() => onOpenConsultation()}
              className="px-4 py-2 text-xs font-medium text-white bg-red-600 rounded-lg hover:bg-red-500 active:bg-red-700 transition-colors shadow-lg shadow-red-950/40 whitespace-nowrap"
            >
              Консультация
            </button>

            {/* Mobile menu hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-900 border border-neutral-800"
              aria-label="Открыть меню"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden bg-neutral-950/95 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-8">
          <div className="space-y-4">
            <div className="border-b border-neutral-800 pb-4">
              <span className="text-xs uppercase tracking-wider text-neutral-500">Навигация по сайту</span>
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-xl font-medium text-neutral-200 hover:text-red-500 transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="border-t border-neutral-800 pt-6 space-y-4">
            <div className="flex flex-col gap-2">
              <span className="text-xs text-neutral-400">Прямая связь с офисом продаж</span>
              <a
                href={`tel:${COMPANY_CONTACTS.phone}`}
                className="flex items-center justify-between p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white font-medium text-sm"
              >
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-red-500" />
                  {COMPANY_CONTACTS.phoneDisplay}
                </span>
                <ArrowUpRight className="w-4 h-4 text-neutral-500" />
              </a>

              <a
                href={COMPANY_CONTACTS.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-xl bg-emerald-950/40 border border-emerald-800/40 text-emerald-400 font-medium text-sm"
              >
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  Написать на WhatsApp
                </span>
                <ArrowUpRight className="w-4 h-4 text-emerald-400" />
              </a>
            </div>

            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 text-sm font-semibold text-white bg-red-600 rounded-xl hover:bg-red-500 transition-colors"
            >
              Заказать обратный звонок
            </button>
          </div>
        </div>
      )}
    </>
  );
};
