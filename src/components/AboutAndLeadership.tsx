import React from 'react';
import { LEADERSHIP, LANDMARK_PROJECTS, COMPANY_CONTACTS } from '../data/aplusData';
import { ShieldCheck, Award, Heart, Users, HardHat, FileText, CheckCircle2 } from 'lucide-react';
import engineeringVisual from '../assets/images/aplus_engineering_site_1791353189238.jpg';

export const AboutAndLeadership: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-neutral-900/40 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section 1: Philosophy & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-semibold text-red-500 uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" />
              <span>О девелопере</span>
              <span aria-hidden="true" className="text-neutral-700">·</span>
              <span className="text-neutral-400">10 лет опыта в строительстве</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight text-balance">
              Человек — главная ценность каждого проекта
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed text-pretty">
              Строительная компания <strong className="text-white font-semibold">A PLUS Development</strong> выросла из генерального подрядчика сложнейших промышленных и гидротехнических сооружений национального масштаба.
            </p>

            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed text-pretty">
              Мы не разделяем строительство и жизнь. Для нас важен результат — ощущение комфорта, абсолютной тишины и уверенности, которое человек получает, переступая порог своего дома.
            </p>

            <div className="p-4 rounded-2xl bg-neutral-900 border border-neutral-800 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold text-white">
                <FileText className="w-4 h-4 text-red-500" />
                <span>Государственная лицензия Госстроя КР</span>
              </div>
              <div className="text-xs text-neutral-400 font-mono">
                {COMPANY_CONTACTS.license}
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-neutral-950 border border-neutral-800 shadow-2xl">
              <img
                src={engineeringVisual}
                alt="Инженерный контроль качества A PLUS"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white text-xs">
                <div>
                  <div className="font-bold">Многоступенчатый лабораторный контроль</div>
                  <div className="text-neutral-400 text-[11px]">Испытания бетона, ультразвуковой контроль швов арматуры</div>
                </div>
                <div className="p-2 rounded-xl bg-neutral-900/80 backdrop-blur border border-neutral-700 text-red-500">
                  <HardHat className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Large-Scale Industrial & Landmark Projects */}
        <div className="space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-wider text-red-500 font-semibold">
              Инженерная экспертиза
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Знаковые объекты A PLUS Development
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              Масштабные инфраструктурные проекты, подтверждающие высочайшую квалификацию нашей команды инженеров и строителей:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LANDMARK_PROJECTS.map((landmark, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-neutral-900/70 border border-neutral-800 overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-colors"
              >
                <div>
                  <div className="relative aspect-[16/10] bg-neutral-950 overflow-hidden">
                    <img
                      src={landmark.image}
                      alt={landmark.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-2.5 right-2.5 bg-neutral-900/80 backdrop-blur text-[10px] text-neutral-300 px-2 py-0.5 rounded border border-neutral-700 font-mono">
                      {landmark.stats}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="text-[11px] font-semibold text-red-500 uppercase">
                      {landmark.category}
                    </div>
                    <h4 className="text-base font-bold text-white">
                      {landmark.title}
                    </h4>
                    <p className="text-xs text-neutral-400 leading-relaxed">
                      {landmark.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 text-[11px] text-neutral-500 font-mono">
                  Локация: {landmark.location}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Leadership Team & Quotes */}
        <div className="space-y-8 pt-8 border-t border-neutral-800/80">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs uppercase tracking-wider text-red-500 font-semibold">
              Команда и руководство
            </span>
            <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Лидеры A PLUS Development
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              Руководители, которые несут персональную ответственность за каждый заложенный камень и каждый сданный дом:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEADERSHIP.map((leader, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-neutral-900/60 border border-neutral-800 p-6 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-700 shrink-0">
                      <img
                        src={leader.image}
                        alt={leader.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{leader.name}</h4>
                      <p className="text-xs text-red-400 mt-0.5">{leader.role}</p>
                    </div>
                  </div>

                  <blockquote className="text-xs text-neutral-300 italic leading-relaxed pt-2 border-t border-neutral-800">
                    {leader.quote}
                  </blockquote>
                </div>

                <div className="text-[11px] text-neutral-500 font-mono flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Личный контроль качества</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
