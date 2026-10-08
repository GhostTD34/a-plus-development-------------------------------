import React, { useState } from 'react';
import { Calculator, Ticket, Sparkles, Send, CheckCircle2, DollarSign } from 'lucide-react';

interface CalculatorSectionProps {
  onApplyCalculation: (terms: {
    price: number;
    initialPayment: number;
    initialPercent: number;
    months: number;
    monthlyPayment: number;
    program: string;
    tickets: number;
  }) => void;
}

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({ onApplyCalculation }) => {
  const [price, setPrice] = useState<number>(85000);
  const [initialPercent, setInitialPercent] = useState<number>(30); // 30% standard
  const [months, setMonths] = useState<number>(36); // 36 months
  const [program, setProgram] = useState<'installment' | 'mortgage'>('installment');

  const USD_TO_KGS = 87.5;

  const initialPaymentUsd = (price * initialPercent) / 100;
  const remainingAmount = price - initialPaymentUsd;

  let monthlyPaymentUsd = 0;
  if (program === 'installment') {
    // 0% interest directly from developer
    monthlyPaymentUsd = remainingAmount / months;
  } else {
    // Bank mortgage ~14% annual rate
    const monthlyRate = 0.14 / 12;
    monthlyPaymentUsd =
      (remainingAmount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
  }

  const tickets = Math.floor(price / 20000);

  const handleApply = () => {
    onApplyCalculation({
      price,
      initialPayment: Math.round(initialPaymentUsd),
      initialPercent,
      months,
      monthlyPayment: Math.round(monthlyPaymentUsd),
      program: program === 'installment' ? 'Рассрочка 0% от застройщика' : 'Ипотека банков-партнеров (14%)',
      tickets
    });
  };

  return (
    <section id="calculator" className="py-20 bg-neutral-950 border-t border-neutral-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold text-red-500 uppercase tracking-wider">
            <Calculator className="w-4 h-4" />
            <span>Финансовые программы</span>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <span className="text-neutral-400">Прозрачные условия без скрытых комиссий</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight text-balance">
            Калькулятор рассрочки от застройщика
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 leading-relaxed text-pretty">
            Прямая беспроцентная рассрочка от компании A PLUS Development на срок до 5 лет с первым взносом от 30%. Рассчитайте индивидуальный график выплат.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-neutral-900/60 border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-7">
            {/* Program Selection Buttons */}
            <div>
              <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2.5">
                Программа финансирования
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setProgram('installment')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    program === 'installment'
                      ? 'bg-neutral-800 border-red-500 shadow-md'
                      : 'bg-neutral-950/60 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <div className="text-sm font-bold text-white flex items-center justify-between">
                    <span>Рассрочка 0%</span>
                    <span className="text-xs text-red-400 font-mono">Без переплат</span>
                  </div>
                  <div className="text-xs text-neutral-400 mt-1">От застройщика A PLUS до 5 лет</div>
                </button>

                <button
                  type="button"
                  onClick={() => setProgram('mortgage')}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    program === 'mortgage'
                      ? 'bg-neutral-800 border-red-500 shadow-md'
                      : 'bg-neutral-950/60 border-neutral-800 text-neutral-400 hover:border-neutral-700'
                  }`}
                >
                  <div className="text-sm font-bold text-white flex items-center justify-between">
                    <span>Ипотека партнеров</span>
                    <span className="text-xs text-neutral-400 font-mono">14% годовых</span>
                  </div>
                  <div className="text-xs text-neutral-400 mt-1">Ведущие коммерческие банки КР</div>
                </button>
              </div>
            </div>

            {/* Price Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-400 font-medium">Стоимость недвижимости</span>
                <span className="font-mono font-bold text-white text-base">
                  ${price.toLocaleString()} <span className="text-xs text-neutral-500">({Math.round(price * USD_TO_KGS).toLocaleString()} сом)</span>
                </span>
              </div>
              <input
                type="range"
                min="45000"
                max="350000"
                step="5000"
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full h-2 bg-neutral-950 rounded-lg accent-red-600 cursor-pointer border border-neutral-800"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 font-mono">
                <span>$45 000 (1-комн.)</span>
                <span>$120 000 (2-3 комн.)</span>
                <span>$350 000 (Пентхаус)</span>
              </div>
            </div>

            {/* Down Payment Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-400 font-medium">Первоначальный взнос ({initialPercent}%)</span>
                <span className="font-mono font-bold text-white text-base">
                  ${Math.round(initialPaymentUsd).toLocaleString()}{' '}
                  <span className="text-xs text-neutral-500">
                    ({Math.round(initialPaymentUsd * USD_TO_KGS).toLocaleString()} сом)
                  </span>
                </span>
              </div>
              <input
                type="range"
                min="30"
                max="70"
                step="5"
                value={initialPercent}
                onChange={(e) => setInitialPercent(Number(e.target.value))}
                className="w-full h-2 bg-neutral-950 rounded-lg accent-red-600 cursor-pointer border border-neutral-800"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 font-mono">
                <span>30% (Мин. по условиям)</span>
                <span>50%</span>
                <span>70%</span>
              </div>
            </div>

            {/* Term Slider */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <span className="text-neutral-400 font-medium">Срок выплат</span>
                <span className="font-mono font-bold text-white text-base">
                  {months} месяцев <span className="text-xs text-neutral-500">({(months / 12).toFixed(1)} г.)</span>
                </span>
              </div>
              <input
                type="range"
                min="12"
                max="60"
                step="6"
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="w-full h-2 bg-neutral-950 rounded-lg accent-red-600 cursor-pointer border border-neutral-800"
              />
              <div className="flex justify-between text-[11px] text-neutral-500 font-mono">
                <span>12 мес (1 год)</span>
                <span>36 мес (3 года)</span>
                <span>60 мес (5 лет)</span>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-neutral-900 to-neutral-950 border border-neutral-800 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="border-b border-neutral-800 pb-4">
              <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
                Итоговый расчет условий
              </span>
              <div className="text-xs text-red-500 font-medium mt-1">
                {program === 'installment' ? 'Прямой договор рассрочки 0%' : 'Партнерская программа кредитования'}
              </div>
            </div>

            {/* Big Monthly Payment Metric */}
            <div className="p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800 space-y-1">
              <span className="text-xs text-neutral-400">Ежемесячный платёж:</span>
              <div className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight">
                ${Math.round(monthlyPaymentUsd).toLocaleString()}
              </div>
              <div className="text-xs text-neutral-500 font-mono">
                ≈ {Math.round(monthlyPaymentUsd * USD_TO_KGS).toLocaleString()} KGS / в месяц
              </div>
            </div>

            {/* Breakdown List */}
            <div className="space-y-3 text-xs">
              <div className="flex justify-between py-1.5 border-b border-neutral-800/60">
                <span className="text-neutral-400">Первоначальный платеж:</span>
                <span className="font-mono font-bold text-white tabular-nums">
                  ${Math.round(initialPaymentUsd).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-neutral-800/60">
                <span className="text-neutral-400">Остаток к выплате:</span>
                <span className="font-mono font-bold text-white tabular-nums">
                  ${Math.round(remainingAmount).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-neutral-800/60">
                <span className="text-neutral-400">Срок рассрочки:</span>
                <span className="font-mono font-bold text-white tabular-nums">{months} мес.</span>
              </div>
              <div className="flex justify-between py-1.5 border-b border-neutral-800/60">
                <span className="text-neutral-400">Переплата процентов:</span>
                <span className="font-mono font-bold text-emerald-400 tabular-nums">
                  {program === 'installment' ? '$0 (0% годовых)' : `~$${Math.round(monthlyPaymentUsd * months - remainingAmount).toLocaleString()}`}
                </span>
              </div>
            </div>

            {/* BMW X7 Promo Connection */}
            <div className="p-4 rounded-xl bg-red-950/20 border border-red-900/40 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Ticket className="w-5 h-5 text-amber-400 shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-white">Участие в розыгрыше BMW X7</div>
                  <div className="text-neutral-400 text-[11px]">
                    При стоимости ${price.toLocaleString()}
                  </div>
                </div>
              </div>
              <span className="px-3 py-1 rounded-lg bg-red-600/30 text-red-400 font-mono font-bold text-xs">
                {tickets} {tickets === 1 ? 'билет' : tickets < 5 ? 'билета' : 'билетов'}
              </span>
            </div>

            {/* Apply Action */}
            <button
              onClick={handleApply}
              className="w-full py-3.5 px-6 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs tracking-wide transition-all shadow-xl shadow-red-950/60 flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Зафиксировать расчет и получить график выплат</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
