import React, { useState } from 'react';
import { Sparkles, Ticket, Car, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BMW_PROMO } from '../data/aplusData';

interface PromoBannerProps {
  onOpenConsultation: () => void;
}

export const PromoBanner: React.FC<PromoBannerProps> = ({ onOpenConsultation }) => {
  const [apartmentPrice, setApartmentPrice] = useState<number>(80000);
  const ticketsCount = Math.floor(apartmentPrice / 20000);

  return (
    <section className="py-12 bg-neutral-950 border-y border-neutral-900 overflow-hidden relative">
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-neutral-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-950 border border-neutral-800 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Promotion Info */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 text-xs font-semibold text-red-500 tracking-wider uppercase">
                <Sparkles className="w-4 h-4" />
                <span>Грандиозный розыгрыш года</span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span className="text-neutral-400">Только в A PLUS Development</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight text-balance">
                Выиграйте новый <span className="text-red-500 font-display">BMW X7</span> при покупке квартиры в 2026 году!
              </h2>

              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                Приобретайте недвижимость в любом из наших жилых комплексов (<span className="text-white font-medium">Senator, Grand, Tunguch Residence, Aristocrat</span>) и автоматически становитесь участником официального розыгрыша премиального кроссовера.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-neutral-300">
                {BMW_PROMO.terms.map((term, idx) => (
                  <div key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{term}</span>
                  </div>
                ))}
              </div>

              {/* Interactive Ticket Calculator */}
              <div className="p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800/90 space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-neutral-400">Рассчитайте шансы: бюджет покупки квартиры</span>
                  <span className="text-white font-mono font-bold text-sm">${apartmentPrice.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min="40000"
                  max="300000"
                  step="10000"
                  value={apartmentPrice}
                  onChange={(e) => setApartmentPrice(Number(e.target.value))}
                  className="w-full accent-red-600 h-1.5 bg-neutral-800 rounded-lg cursor-pointer"
                />
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-2">
                    <Ticket className="w-4 h-4 text-amber-400" />
                    <span className="text-xs text-neutral-300">
                      Ваш гарантированный пакет: <strong className="text-white font-mono tabular-nums text-sm">{ticketsCount} {ticketsCount === 1 ? 'билет' : ticketsCount < 5 ? 'билета' : 'билетов'}</strong>
                    </span>
                  </div>
                  <button
                    onClick={onOpenConsultation}
                    className="text-xs font-semibold text-red-400 hover:text-red-300 flex items-center gap-1 transition-colors"
                  >
                    <span>Участвовать в акции</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Car Image & Badge */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-square max-h-[360px] rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 flex items-center justify-center p-4">
                <img
                  src={BMW_PROMO.image}
                  alt="BMW X7 Розыгрыш A PLUS Development"
                  className="w-full h-full object-contain filter drop-shadow-[0_20px_30px_rgba(0,0,0,0.8)] hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to secondary image or styled container
                    (e.target as HTMLImageElement).src = BMW_PROMO.altImage;
                  }}
                  referrerPolicy="no-referrer"
                />

                <div className="absolute top-4 right-4 bg-neutral-900/90 backdrop-blur-md border border-neutral-700/80 px-3 py-1.5 rounded-xl flex items-center gap-2">
                  <Car className="w-4 h-4 text-red-500" />
                  <span className="text-xs font-mono font-bold text-white">BMW X7 2026</span>
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-center">
                  <span className="text-[11px] text-neutral-400 font-mono">
                    1 билет за каждые $20 000 сделки · Финал в декабре 2026
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
