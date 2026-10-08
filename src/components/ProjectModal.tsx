import React, { useState } from 'react';
import { Project } from '../data/aplusData';
import { X, MapPin, Calendar, Check, Layers, Phone, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { COMPANY_CONTACTS } from '../data/aplusData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectFloorPlans: (projectId: string) => void;
  onOpenConsultation: (projectName: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectFloorPlans,
  onOpenConsultation
}) => {
  if (!project) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const images = [project.mainImage, ...(project.gallery || [])];

  const nextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="max-w-5xl w-full bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden my-auto max-h-[92vh] flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-neutral-800 shrink-0">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-red-500 uppercase tracking-wider">
              <span>{project.classType}</span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span className="text-neutral-400">Сдача: {project.completion}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mt-0.5">
              {project.name}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
            aria-label="Закрыть"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          {/* Gallery Carousel */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800">
              <img
                src={images[activeImageIndex]}
                alt={project.name}
                className="w-full h-full object-cover transition-all duration-300"
                referrerPolicy="no-referrer"
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-neutral-950/70 hover:bg-neutral-900 text-white border border-neutral-700 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-xl bg-neutral-950/70 hover:bg-neutral-900 text-white border border-neutral-700 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-4 right-4 bg-neutral-900/80 backdrop-blur px-3 py-1 rounded-lg text-xs font-mono text-white border border-neutral-700">
                    {activeImageIndex + 1} / {images.length}
                  </div>
                </>
              )}
            </div>

            {/* Thumbnail bar */}
            {images.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-20 h-14 rounded-lg overflow-hidden shrink-0 border-2 transition-all ${
                      idx === activeImageIndex
                        ? 'border-red-500 scale-95'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Description & Location */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              <h4 className="text-base font-bold text-white">О концепции объекта</h4>
              <p className="text-sm text-neutral-300 leading-relaxed font-normal">
                {project.description}
              </p>

              <div className="flex items-center gap-2 text-xs text-neutral-400 pt-2">
                <MapPin className="w-4 h-4 text-red-500 shrink-0" />
                <span>{project.location}</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-neutral-950 border border-neutral-800 space-y-3">
              <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider block">
                Финансовые условия
              </span>
              <div className="space-y-1">
                <div className="text-xs text-neutral-500">Стоимость квадрата:</div>
                <div className="text-2xl font-mono font-bold text-white">
                  от ${project.pricePerSqM} / м²
                </div>
              </div>
              <div className="space-y-1 pt-2 border-t border-neutral-800 text-xs text-neutral-400">
                <div>Первоначальный взнос: <strong className="text-white">от 30%</strong></div>
                <div>Рассрочка: <strong className="text-white">0% до сдачи</strong></div>
                <div>Лотерея BMW X7: <strong className="text-red-400">Включена</strong></div>
              </div>
            </div>
          </div>

          {/* Specifications Grid */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white">Технические характеристики</h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {project.specs.map((spec, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-neutral-950/60 border border-neutral-800 text-xs">
                  <div className="text-neutral-500 text-[11px]">{spec.label}</div>
                  <div className="text-white font-semibold mt-0.5">{spec.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Advantages */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white">Преимущества для резидентов</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.advantages.map((adv, i) => (
                <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-neutral-950/40 border border-neutral-800/80 text-xs text-neutral-300">
                  <Check className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                  <span>{adv}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons Footer */}
        <div className="p-6 border-t border-neutral-800 bg-neutral-950 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div className="flex items-center gap-3">
            <a
              href={`tel:${COMPANY_CONTACTS.phone}`}
              className="text-xs font-semibold text-neutral-300 hover:text-white flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-red-500" />
              <span>{COMPANY_CONTACTS.phoneDisplay}</span>
            </a>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onSelectFloorPlans(project.id);
                const el = document.getElementById('floorplans');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold transition-colors"
            >
              Смотреть планировки
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenConsultation(project.name);
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 rounded-xl bg-red-600 hover:bg-red-500 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
            >
              <span>Забронировать квартиру</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
