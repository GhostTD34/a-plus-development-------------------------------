import React, { useState } from 'react';
import { FLOOR_PLANS, FloorPlan, PROJECTS } from '../data/aplusData';
import { Maximize, Calculator, Bookmark, Check, ZoomIn } from 'lucide-react';

interface FloorPlansSectionProps {
  selectedProjectFilter?: string;
  onBookPlan: (plan: FloorPlan) => void;
}

export const FloorPlansSection: React.FC<FloorPlansSectionProps> = ({
  selectedProjectFilter = 'all',
  onBookPlan
}) => {
  const [projectFilter, setProjectFilter] = useState<string>(selectedProjectFilter);
  const [roomFilter, setRoomFilter] = useState<string>('all');
  const [activePlan, setActivePlan] = useState<FloorPlan>(FLOOR_PLANS[0]);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  // Sync if parent filter changes
  React.useEffect(() => {
    if (selectedProjectFilter !== 'all') {
      setProjectFilter(selectedProjectFilter);
    }
  }, [selectedProjectFilter]);

  const filteredPlans = FLOOR_PLANS.filter((plan) => {
    if (projectFilter !== 'all' && plan.projectId !== projectFilter) return false;
    if (roomFilter === '1' && plan.rooms !== 1) return false;
    if (roomFilter === '2' && plan.rooms !== 2) return false;
    if (roomFilter === '3' && plan.rooms !== 3) return false;
    if (roomFilter === 'penthouse' && plan.rooms !== 'penthouse') return false;
    return true;
  });

  const currentPlan = filteredPlans.find((p) => p.id === activePlan?.id) || filteredPlans[0] || FLOOR_PLANS[0];

  return (
    <section id="floorplans" className="py-20 bg-neutral-900/40 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-red-500 uppercase tracking-wider">
            <span>Каталог планировок</span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span className="text-neutral-400">Евро-форматы от 46 до 268 м²</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight text-balance">
            Выберите идеальное пространство
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed text-pretty">
            Эргономичные мастер-спальни, высокие потолки до 3.6 метров, просторные кухни-гостиные и гардеробные блоки в каждом проекте A PLUS Development.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8 p-3 rounded-2xl bg-neutral-900 border border-neutral-800">
          {/* Project Segment */}
          <div className="flex flex-wrap items-center gap-1">
            <span className="text-[11px] font-semibold text-neutral-500 uppercase px-2">ЖК:</span>
            <button
              onClick={() => setProjectFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                projectFilter === 'all' ? 'bg-neutral-800 text-white shadow' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Все ЖК
            </button>
            <button
              onClick={() => setProjectFilter('senator')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                projectFilter === 'senator' ? 'bg-neutral-800 text-white shadow' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Senator (Асанбай)
            </button>
            <button
              onClick={() => setProjectFilter('grand')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                projectFilter === 'grand' ? 'bg-neutral-800 text-white shadow' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Grand (пр. Айтматова)
            </button>
            <button
              onClick={() => setProjectFilter('tunguch')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                projectFilter === 'tunguch' ? 'bg-neutral-800 text-white shadow' : 'text-neutral-400 hover:text-white'
              }`}
            >
              Tunguch Residence
            </button>
          </div>

          {/* Rooms Segment */}
          <div className="flex flex-wrap items-center gap-1 border-t md:border-t-0 md:border-l border-neutral-800 pt-2 md:pt-0 md:pl-4">
            <span className="text-[11px] font-semibold text-neutral-500 uppercase px-2">Комнат:</span>
            {['all', '1', '2', '3', 'penthouse'].map((r) => (
              <button
                key={r}
                onClick={() => setRoomFilter(r)}
                className={`px-2.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                  roomFilter === r ? 'bg-red-600 text-white shadow' : 'text-neutral-400 hover:text-white'
                }`}
              >
                {r === 'all' ? 'Все' : r === 'penthouse' ? 'Пентхаусы' : `${r}-комн.`}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Viewer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: List of filtered plans */}
          <div className="lg:col-span-4 space-y-3 max-h-[640px] overflow-y-auto pr-1">
            {filteredPlans.length === 0 ? (
              <div className="p-8 text-center rounded-2xl bg-neutral-900 border border-neutral-800 text-neutral-400 text-sm">
                Нет планировок по выбранным параметрам. Сбросьте фильтр для просмотра всех вариантов.
              </div>
            ) : (
              filteredPlans.map((plan) => {
                const isSelected = plan.id === currentPlan.id;
                return (
                  <div
                    key={plan.id}
                    onClick={() => setActivePlan(plan)}
                    className={`p-4 rounded-2xl cursor-pointer transition-all border text-left ${
                      isSelected
                        ? 'bg-neutral-800/90 border-red-500 shadow-xl'
                        : 'bg-neutral-900/60 border-neutral-800 hover:border-neutral-700 hover:bg-neutral-900'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-semibold text-white">{plan.projectName}</span>
                      <span className="font-mono text-neutral-400">{plan.area} м²</span>
                    </div>

                    <div className="text-sm font-bold text-white mb-2">
                      {plan.roomsLabel}
                    </div>

                    <div className="flex items-center justify-between text-xs pt-2 border-t border-neutral-800/80">
                      <span className="text-neutral-400">Стоимость:</span>
                      <span className="text-red-400 font-mono font-bold">
                        ${plan.priceTotal.toLocaleString()}
                      </span>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Right Column: Detailed Blueprint & Room breakdown */}
          <div className="lg:col-span-8 bg-neutral-900/70 border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-5">
              <div>
                <div className="text-xs text-red-500 font-semibold uppercase tracking-wider">
                  {currentPlan.projectName} · {currentPlan.floorRange}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white mt-1">
                  {currentPlan.roomsLabel} · <span className="text-neutral-300 font-mono">{currentPlan.area} м²</span>
                </h3>
              </div>

              <div className="text-right sm:text-right">
                <div className="text-xs text-neutral-400">Полная стоимость</div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-white">
                  ${currentPlan.priceTotal.toLocaleString()}
                </div>
                <div className="text-xs text-neutral-500 font-mono">
                  Рассрочка 0%: от ${currentPlan.monthlyPaymentEstimate} / мес.
                </div>
              </div>
            </div>

            {/* Blueprint Drawing Display */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] rounded-2xl bg-neutral-950 border border-neutral-800 flex items-center justify-center p-6 overflow-hidden group">
              <img
                src={currentPlan.image}
                alt={currentPlan.roomsLabel}
                className="max-h-full max-w-full object-contain filter contrast-125 group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />

              <button
                onClick={() => setIsZoomOpen(true)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 text-white border border-neutral-700 transition-colors flex items-center gap-1.5 text-xs"
              >
                <ZoomIn className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Увеличить схему</span>
              </button>
            </div>

            {/* Room Area Breakdown and Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              <div>
                <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                  Экспликация помещений
                </h4>
                <div className="space-y-2 text-xs">
                  {currentPlan.roomsBreakdown.map((r, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-1.5 border-b border-neutral-800/60"
                    >
                      <span className="text-neutral-300">{r.name}</span>
                      <span className="font-mono text-white font-semibold tabular-nums">{r.area} м²</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">
                    Ключевые преимущества планировки
                  </h4>
                  <div className="space-y-2">
                    {currentPlan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-300">
                        <Check className="w-3.5 h-3.5 text-red-500 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Booking Trigger Button */}
                <div className="pt-2">
                  <button
                    onClick={() => onBookPlan(currentPlan)}
                    className="w-full py-3 px-5 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs tracking-wide transition-all shadow-lg shadow-red-950/50 flex items-center justify-center gap-2"
                  >
                    <Bookmark className="w-4 h-4" />
                    <span>Забронировать планировку {currentPlan.area} м²</span>
                  </button>
                  <p className="text-[11px] text-neutral-500 text-center mt-2">
                    Бронь фиксирует цену на 7 дней без обязательств
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blueprint Lightbox Modal */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsZoomOpen(false)}
        >
          <div
            className="max-w-4xl w-full bg-neutral-900 border border-neutral-800 rounded-3xl p-6 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
              <span className="text-sm font-bold text-white">
                {currentPlan.projectName} — {currentPlan.roomsLabel} ({currentPlan.area} м²)
              </span>
              <button
                onClick={() => setIsZoomOpen(false)}
                className="text-neutral-400 hover:text-white text-xs px-3 py-1 bg-neutral-800 rounded-lg"
              >
                Закрыть (Esc)
              </button>
            </div>
            <div className="p-4 flex items-center justify-center bg-neutral-950 rounded-2xl mt-4">
              <img
                src={currentPlan.image}
                alt={currentPlan.roomsLabel}
                className="max-h-[75vh] w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
