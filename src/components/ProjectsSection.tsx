import React, { useState } from 'react';
import { PROJECTS, Project } from '../data/aplusData';
import { ArrowUpRight, MapPin, Calendar, Layers, Maximize2, ShieldAlert } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
  onFilterFloorPlans: (projectId: string) => void;
  activeFilter?: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  onFilterFloorPlans,
  activeFilter = 'all'
}) => {
  const [filter, setFilter] = useState<string>(activeFilter);

  const filteredProjects = PROJECTS.filter((proj) => {
    if (filter === 'all') return true;
    if (filter === 'business') return proj.classType === 'Business+';
    if (filter === 'premium') return proj.classType === 'Premium' || proj.classType === 'Club Premium';
    if (filter === 'family') return proj.id === 'tunguch';
    return proj.id === filter;
  });

  return (
    <section id="projects" className="py-20 bg-neutral-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-red-500 uppercase tracking-wider">
              <span>Портфель жилой недвижимости</span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span className="text-neutral-400">Бишкек</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight text-balance">
              Флагманские проекты A PLUS
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed text-pretty">
              Каждый объект строится по индивидуальному архитектурному проекту с применением монолитного железобетона, панорамных систем Schüco/Reynaers и фасадов из натурального травертина.
            </p>
          </div>

          {/* Functional Segmented Controls / Interactive Filter Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-neutral-900/90 border border-neutral-800 rounded-xl shrink-0 self-start md:self-end">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Все объекты ({PROJECTS.length})
            </button>
            <button
              onClick={() => setFilter('business')}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'business'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Бизнес+
            </button>
            <button
              onClick={() => setFilter('premium')}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'premium'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Премиум клуб
            </button>
            <button
              onClick={() => setFilter('family')}
              className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                filter === 'family'
                  ? 'bg-neutral-800 text-white shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Семейный квартал (2 га)
            </button>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-neutral-900/60 border border-neutral-800/90 overflow-hidden hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Image Slot */}
                <div className="relative aspect-[16/10] overflow-hidden bg-neutral-950">
                  <img
                    src={project.mainImage}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://static.tildacdn.net/tild3863-3966-4632-b230-333033333539/senator_002.png';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                  {/* Top Bar on Image: Class & Price */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wider text-white bg-neutral-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-neutral-700/60">
                      {project.classType}
                    </span>

                    <span className="text-xs font-mono font-semibold text-white bg-neutral-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-neutral-700/60">
                      от ${project.pricePerSqM} / м²
                    </span>
                  </div>

                  {/* Bottom Bar on Image: Completion */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-neutral-300">
                    <div className="flex items-center gap-1.5 drop-shadow">
                      <MapPin className="w-3.5 h-3.5 text-red-500" />
                      <span className="truncate max-w-[220px]">{project.district}</span>
                    </div>
                    <div className="flex items-center gap-1.5 drop-shadow">
                      <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{project.completion}</span>
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-7 space-y-4">
                  <div className="space-y-1.5">
                    <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-xs text-neutral-400 font-medium">
                      {project.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-neutral-300 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Key Metrics / Specs */}
                  <div className="grid grid-cols-3 gap-3 py-3 border-y border-neutral-800/80 text-xs">
                    <div>
                      <div className="text-neutral-500 text-[11px]">Этажность</div>
                      <div className="text-white font-mono font-semibold tabular-nums">{project.floors} этажей</div>
                    </div>
                    <div>
                      <div className="text-neutral-500 text-[11px]">Потолки</div>
                      <div className="text-white font-mono font-semibold">{project.ceilingHeight}</div>
                    </div>
                    <div>
                      <div className="text-neutral-500 text-[11px]">Площади</div>
                      <div className="text-white font-mono font-semibold text-xs">{project.areaRange}</div>
                    </div>
                  </div>

                  {/* Advantages list (first 2) */}
                  <div className="space-y-1.5 pt-1">
                    {project.advantages.slice(0, 2).map((adv, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                        <span className="line-clamp-1">{adv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 sm:p-7 pt-0 grid grid-cols-2 gap-3">
                <button
                  onClick={() => onSelectProject(project)}
                  className="w-full py-2.5 px-4 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <Maximize2 className="w-3.5 h-3.5 text-neutral-400" />
                  <span>О проекте</span>
                </button>

                <button
                  onClick={() => {
                    onFilterFloorPlans(project.id);
                    const el = document.getElementById('floorplans');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-2.5 px-4 rounded-xl bg-red-600/90 hover:bg-red-500 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
                >
                  <span>Планировки</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
