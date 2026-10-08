import React, { useState } from 'react';
import { ArrowRight, Compass, ShieldCheck, Building2, Award } from 'lucide-react';
import heroImageGenerated from '../assets/images/aplus_hero_architecture_1791353163256.jpg';

interface HeroProps {
  onSelectProjectFilter: (projectId: string) => void;
  onOpenConsultation: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectProjectFilter, onOpenConsultation }) => {
  const [selectedProject, setSelectedProject] = useState('all');
  const [selectedRooms, setSelectedRooms] = useState('all');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedProject !== 'all') {
      onSelectProjectFilter(selectedProject);
    }
    const section = document.getElementById(selectedRooms !== 'all' ? 'floorplans' : 'projects');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-neutral-950">
      {/* Background Image with Measured Scrim Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImageGenerated}
          alt="A PLUS Development Архитектурный комплекс Бишкек"
          className="w-full h-full object-cover object-center scale-105 transform animate-pulse duration-[8000ms]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/75 to-neutral-950/40" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(220,38,38,0.12),transparent_50%)]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 sm:pt-16">
        <div className="max-w-3xl space-y-6">
          {/* Subtle unboxed metadata kicker */}
          <div className="flex items-center gap-2 text-xs font-semibold text-neutral-300 tracking-wider uppercase">
            <span className="text-red-500 font-bold">A PLUS DEVELOPMENT</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span>Бишкек, Кыргызстан</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-400">Основана в 2016</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] text-balance">
            Создаём архитектуру <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-neutral-400">завтрашнего дня</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-2xl text-pretty font-normal">
            Строительная компания <strong className="font-semibold text-white">A PLUS Development</strong> объединяет 10 лет инженерной экспертизы в промышленном строительстве и бескомпромиссные европейские стандарты для создания комфортных жилых резиденций в Бишкеке.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 text-sm font-semibold text-white bg-red-600 rounded-xl hover:bg-red-500 active:bg-red-700 transition-all shadow-xl shadow-red-950/40 group whitespace-nowrap"
            >
              <span>Смотреть объекты</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-neutral-200 rounded-xl border border-neutral-700 bg-neutral-900/60 hover:bg-neutral-800/80 hover:text-white transition-all backdrop-blur-sm whitespace-nowrap"
            >
              <span>Записаться на просмотр</span>
            </button>
          </div>
        </div>

        {/* Quick Apartment Finder Filter Bar */}
        <div className="mt-12 p-3 sm:p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800/90 backdrop-blur-xl shadow-2xl max-w-4xl">
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-[11px] font-medium text-neutral-400 mb-1">
                Выберите жилой комплекс
              </label>
              <select
                value={selectedProject}
                onChange={(e) => setSelectedProject(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-red-500 transition-colors"
              >
                <option value="all">Все проекты A PLUS</option>
                <option value="senator">ЖК Senator (Асанбай)</option>
                <option value="grand">ЖК Grand (пр. Айтматова)</option>
                <option value="tunguch">ЖК Tunguch Residence (2 га)</option>
                <option value="aristocrat">ЖК Aristocrat (Южная магистраль)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-medium text-neutral-400 mb-1">
                Количество комнат
              </label>
              <select
                value={selectedRooms}
                onChange={(e) => setSelectedRooms(e.target.value)}
                className="w-full bg-neutral-950 border border-neutral-800 rounded-lg px-3 py-2.5 text-xs text-white focus:outline-none focus:border-red-500 transition-colors"
              >
                <option value="all">Любая планировка</option>
                <option value="1">1-комнатные (от 46 м²)</option>
                <option value="2">2-комнатные (от 68 м²)</option>
                <option value="3">3-комнатные (от 98 м²)</option>
                <option value="penthouse">Пентхаусы с террасой</option>
              </select>
            </div>

            <div className="flex items-end">
              <button
                type="submit"
                className="w-full py-2.5 px-4 bg-white text-neutral-950 rounded-lg text-xs font-bold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-1.5 whitespace-nowrap"
              >
                <Compass className="w-4 h-4 text-red-600" />
                <span>Подобрать варианты</span>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Quantitative Proof Adjacency Strip */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-4 border-t border-neutral-800/80">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-red-500 shrink-0">
              <Award className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">10+ лет</div>
              <div className="text-xs text-neutral-400">опыта в промышленном девелопменте</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-red-500 shrink-0">
              <Building2 className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">4 объекта</div>
              <div className="text-xs text-neutral-400">флагманских ЖК в Бишкеке</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-red-500 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">9 баллов</div>
              <div className="text-xs text-neutral-400">сейсмостойкость монолитного каркаса</div>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-neutral-900 border border-neutral-800 text-red-500 shrink-0">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold text-white font-mono tabular-nums">КРЦ-2 №012064</div>
              <div className="text-xs text-neutral-400">гослицензия от 31.01.2025 г.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
