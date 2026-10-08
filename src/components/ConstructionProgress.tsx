import React, { useState } from 'react';
import { CONSTRUCTION_UPDATES, ConstructionUpdate } from '../data/aplusData';
import { Video, Calendar, CheckCircle2, ChevronRight, Eye } from 'lucide-react';

export const ConstructionProgress: React.FC = () => {
  const [selectedProjectId, setSelectedProjectId] = useState<string>('senator');
  const [activePhoto, setActivePhoto] = useState<string | null>(null);
  const [isLiveModalOpen, setIsLiveModalOpen] = useState(false);

  const currentUpdate =
    CONSTRUCTION_UPDATES.find((u) => u.projectId === selectedProjectId) ||
    CONSTRUCTION_UPDATES[0];

  return (
    <section id="progress" className="py-20 bg-neutral-950 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-red-500 uppercase tracking-wider">
              <span>Динамика строительства</span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span className="text-neutral-400">Ежемесячные фотоотчеты</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight text-balance">
              Ход строительства и открытость
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed text-pretty">
              Мы отчитываемся за каждый этап реализации. Следите за возведением вашего будущего дома в режиме реального времени.
            </p>
          </div>

          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => setIsLiveModalOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-red-600/10 border border-red-500/30 text-red-400 hover:bg-red-600/20 text-xs font-semibold transition-colors"
            >
              <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
              <Video className="w-4 h-4" />
              <span>Камера онлайн-трансляции</span>
            </button>
          </div>
        </div>

        {/* Project Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-neutral-900 rounded-2xl border border-neutral-800 mb-8 max-w-fit">
          {CONSTRUCTION_UPDATES.map((u) => (
            <button
              key={u.projectId}
              onClick={() => setSelectedProjectId(u.projectId)}
              className={`px-4 py-2 text-xs font-semibold rounded-xl transition-all ${
                selectedProjectId === u.projectId
                  ? 'bg-neutral-800 text-white shadow'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              {u.projectName} ({u.overallProgress}%)
            </button>
          ))}
        </div>

        {/* Detailed Progress Card */}
        <div className="rounded-3xl bg-neutral-900/60 border border-neutral-800 p-6 sm:p-8 space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Overall metric and stage breakdown */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
                <div>
                  <div className="text-xs text-neutral-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-neutral-500" />
                    <span>Отчет за {currentUpdate.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {currentUpdate.projectName}
                  </h3>
                </div>

                <div className="text-right">
                  <div className="text-xs text-neutral-400">Общая готовность</div>
                  <div className="text-3xl font-mono font-bold text-red-500 tabular-nums">
                    {currentUpdate.overallProgress}%
                  </div>
                </div>
              </div>

              {/* Overall Progress Bar */}
              <div className="space-y-1.5">
                <div className="w-full h-3 bg-neutral-950 rounded-full overflow-hidden p-0.5 border border-neutral-800">
                  <div
                    className="h-full bg-gradient-to-r from-red-600 to-amber-500 rounded-full transition-all duration-1000"
                    style={{ width: `${currentUpdate.overallProgress}%` }}
                  />
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-2">
                <h4 className="text-sm font-bold text-white">{currentUpdate.title}</h4>
                <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                  {currentUpdate.description}
                </p>
              </div>

              {/* Stages List */}
              <div className="space-y-3 pt-2">
                <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block">
                  Текущие строительные этапы:
                </span>
                {currentUpdate.stages.map((stage, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-neutral-300">{stage.name}</span>
                      <span className="font-mono text-neutral-400 tabular-nums">{stage.progress}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-neutral-950 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-red-600 rounded-full transition-all duration-700"
                        style={{ width: `${stage.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Actual Photos from Jobsite */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-[11px] font-semibold text-neutral-400 uppercase tracking-wider block">
                Фотофиксация со стройплощадки ({currentUpdate.date}):
              </span>

              {/* Main Photo Slot */}
              <div
                className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 cursor-pointer group"
                onClick={() => setActivePhoto(currentUpdate.images[0])}
              >
                <img
                  src={currentUpdate.images[0]}
                  alt="Ход строительства"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="bg-neutral-900/80 backdrop-blur-md px-3 py-1 rounded-lg border border-neutral-700">
                    Нажмите для полноэкранного просмотра
                  </span>
                  <Eye className="w-4 h-4 text-neutral-300" />
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-3">
                {currentUpdate.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setActivePhoto(img)}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-950 border border-neutral-800 cursor-pointer hover:border-red-500 transition-colors"
                  >
                    <img
                      src={img}
                      alt={`Фото стройки ${idx + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Photo Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div className="max-w-5xl w-full p-2 relative" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-end pb-2">
              <button
                onClick={() => setActivePhoto(null)}
                className="text-xs text-neutral-400 hover:text-white px-3 py-1 bg-neutral-800 rounded-lg"
              >
                Закрыть (Esc)
              </button>
            </div>
            <img
              src={activePhoto}
              alt="Увеличенное фото стройки"
              className="max-h-[80vh] w-auto mx-auto rounded-2xl object-contain border border-neutral-800"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}

      {/* Live Stream Camera Modal */}
      {isLiveModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setIsLiveModalOpen(false)}
        >
          <div
            className="max-w-3xl w-full bg-neutral-900 border border-neutral-800 rounded-3xl p-6 relative space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-neutral-800 pb-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-ping" />
                <span className="text-sm font-bold text-white">
                  Камера №1 · {currentUpdate.projectName} (LIVE STREAM)
                </span>
              </div>
              <button
                onClick={() => setIsLiveModalOpen(false)}
                className="text-xs text-neutral-400 hover:text-white px-3 py-1 bg-neutral-800 rounded-lg"
              >
                Закрыть
              </button>
            </div>

            <div className="relative aspect-[16/9] rounded-2xl bg-neutral-950 border border-neutral-800 overflow-hidden flex items-center justify-center">
              <img
                src={currentUpdate.images[0]}
                alt="Live Camera Feed"
                className="w-full h-full object-cover filter brightness-90"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 bg-red-600 text-white text-[10px] font-bold px-2 py-0.5 rounded tracking-widest flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                REC 1080P
              </div>
              <div className="absolute top-4 right-4 bg-neutral-900/80 backdrop-blur text-neutral-300 font-mono text-[11px] px-2.5 py-1 rounded">
                Бишкек · 24/7 CCTV
              </div>
              <div className="absolute bottom-4 left-4 text-xs font-mono text-neutral-200 bg-neutral-950/80 backdrop-blur px-3 py-1.5 rounded-lg border border-neutral-800">
                Камера направлена на фасадный контур и башенные краны
              </div>
            </div>

            <div className="text-xs text-neutral-400 text-center">
              Прямая трансляция доступна для всех покупателей и инвесторов A PLUS Development.
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
