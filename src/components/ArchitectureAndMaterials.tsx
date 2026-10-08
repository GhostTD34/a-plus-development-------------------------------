import React, { useState } from 'react';
import { Sun, Moon, Shield, Award, Sparkles, Building, Layers, CheckCircle } from 'lucide-react';
import { PARTNERS_AND_MATERIALS } from '../data/aplusData';
import terraceRender from '../assets/images/aplus_penthouse_terrace_1791353174507.jpg';

export const ArchitectureAndMaterials: React.FC = () => {
  const [viewMode, setViewMode] = useState<'day' | 'night'>('day');
  const [selectedBuilding, setSelectedBuilding] = useState<'senator' | 'grand'>('senator');

  const buildings = {
    senator: {
      name: 'ЖК SENATOR (Асанбай)',
      dayImg: 'https://static.tildacdn.net/tild3330-6564-4033-a261-613031303031/senator_001_3.png',
      nightImg: 'https://static.tildacdn.net/tild3737-3663-4432-b235-333930616439/32_night__1_2.png',
      desc: 'Вентилируемый фасад из южного травертина и полированного гранита. Контурная архитектурная подсветка теплого спектра 3000K.'
    },
    grand: {
      name: 'ЖК GRAND (пр. Ч. Айтматова)',
      dayImg: 'https://static.tildacdn.net/tild6232-6437-4235-b634-613231373063/grand_001_3.png',
      nightImg: 'https://static.tildacdn.net/tild6436-6331-4463-b461-646233626333/12_night__2_1_1_3.png',
      desc: '21 этаж с панорамным остеклением Schuco. Архитектурная медиа-подсветка, выделяющая устремленность башни к звездам.'
    }
  };

  const current = buildings[selectedBuilding];
  const activeImage = viewMode === 'day' ? current.dayImg : current.nightImg;

  return (
    <section className="py-20 bg-neutral-900/30 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-red-500 uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Архитектурные стандарты</span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span className="text-neutral-400">Премиальные европейские материалы</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight text-balance">
            Эстетика дня и величие ночной подсветки
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed text-pretty">
            Индивидуальные сценарии фасадного освещения и благородные натуральные материалы, сохраняющие безупречный вид на десятилетия вперед.
          </p>
        </div>

        {/* Day / Night Interactive Switcher Frame */}
        <div className="rounded-3xl bg-neutral-900/80 border border-neutral-800 p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-5">
            {/* Building Selector */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-neutral-400 uppercase tracking-wider">Объект:</span>
              <button
                onClick={() => setSelectedBuilding('senator')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  selectedBuilding === 'senator'
                    ? 'bg-neutral-800 text-white border border-neutral-700'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                ЖК Senator
              </button>
              <button
                onClick={() => setSelectedBuilding('grand')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  selectedBuilding === 'grand'
                    ? 'bg-neutral-800 text-white border border-neutral-700'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                ЖК Grand
              </button>
            </div>

            {/* Day / Night Toggle Segment */}
            <div className="flex items-center gap-1.5 p-1 bg-neutral-950 rounded-xl border border-neutral-800">
              <button
                onClick={() => setViewMode('day')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'day'
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30 shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>Дневной вид</span>
              </button>
              <button
                onClick={() => setViewMode('night')}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  viewMode === 'night'
                    ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 shadow-sm'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                <Moon className="w-3.5 h-3.5 text-indigo-400" />
                <span>Ночная иллюминация</span>
              </button>
            </div>
          </div>

          {/* Interactive Visual Window */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800">
            <img
              src={activeImage}
              alt={`${current.name} ${viewMode === 'day' ? 'день' : 'ночь'}`}
              className="w-full h-full object-cover transition-all duration-700"
              referrerPolicy="no-referrer"
              onError={(e) => {
                (e.target as HTMLImageElement).src = current.dayImg;
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-transparent to-transparent pointer-events-none" />

            {/* Description overlay */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
              <div className="max-w-xl">
                <span className="text-xs uppercase font-mono tracking-wider text-red-400">
                  {current.name} · {viewMode === 'day' ? 'Естественное освещение' : 'Архитектурный свет'}
                </span>
                <p className="text-xs sm:text-sm text-neutral-200 mt-1 drop-shadow">
                  {current.desc}
                </p>
              </div>

              <div className="text-[11px] font-mono text-neutral-400 shrink-0 bg-neutral-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-neutral-800">
                Reynaers & Schüco Glass
              </div>
            </div>
          </div>
        </div>

        {/* 4 Architectural Standards Bento Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-red-600/10 border border-red-500/20 text-red-500 flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Сейсмостойкость 9 баллов</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Монолитные железобетонные сердечники и фундаментные плиты толщиной до 1.4 м из бетона высшей марки B30.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-600/10 border border-amber-500/20 text-amber-500 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Травертин и гранит</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Вентилируемые фасады с базальтовым утеплителем плотностью 135 кг/м³ и отделкой натуральным южным камнем.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-600/10 border border-sky-500/20 text-sky-500 flex items-center justify-center">
              <Building className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Витражи Schüco & Reynaers</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Алюминиевые профили с тройным энергосберегающим стеклопакетом (Бельгия и Германия) для идеальной шумоизоляции.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-600/10 border border-emerald-500/20 text-emerald-500 flex items-center justify-center">
              <CheckCircle className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Автономные котельные</h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Независимое газовое отопление с немецкими котлами и погодозависимой автоматикой регулирования температуры.
            </p>
          </div>
        </div>

        {/* Partners & Brands Grid */}
        <div className="mt-16 pt-12 border-t border-neutral-800/80">
          <div className="text-center max-w-xl mx-auto mb-8 space-y-2">
            <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
              Партнеры и поставщики материалов
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Мировые бренды, которым мы доверяем
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {PARTNERS_AND_MATERIALS.map((p, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-neutral-900/50 border border-neutral-800 flex flex-col items-center justify-center text-center space-y-2 hover:border-neutral-700 transition-colors"
              >
                <div className="h-10 w-full flex items-center justify-center">
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="max-h-8 max-w-[90px] object-contain filter grayscale invert opacity-80 hover:opacity-100 transition-opacity"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                </div>
                <div className="text-xs font-bold text-white">{p.name}</div>
                <div className="text-[10px] text-neutral-400">{p.country}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
