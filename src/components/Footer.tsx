import React, { useState } from 'react';
import { COMPANY_CONTACTS } from '../data/aplusData';
import { Phone, Mail, MapPin, Clock, MessageSquare, ArrowUpRight, Copy, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    navigator.clipboard.writeText(COMPANY_CONTACTS.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contacts" className="bg-neutral-950 border-t border-neutral-900 pt-16 pb-12 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          {/* Brand & Mission (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-baseline gap-1.5 text-2xl font-bold tracking-tight text-white">
              <span className="font-display tracking-wider">A<span className="text-red-500 font-black">+</span></span>
              <span className="text-neutral-400 font-light text-sm uppercase tracking-widest">DEVELOPMENT</span>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Строительная компания полного цикла в Кыргызстане. Создаем знаковую архитектуру, комфортную жилую среду и премиальные жилые комплексы в Бишкеке.
            </p>

            <div className="pt-2 text-xs text-neutral-500 font-mono space-y-1">
              <div>{COMPANY_CONTACTS.legalName}</div>
              <div className="text-neutral-400">Лицензия: {COMPANY_CONTACTS.license}</div>
            </div>
          </div>

          {/* Contacts & Working Hours (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Центральный офис продаж
            </h4>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-medium">{COMPANY_CONTACTS.address}</div>
                  <button
                    onClick={copyAddress}
                    className="mt-1 text-[11px] text-red-400 hover:text-red-300 flex items-center gap-1 transition-colors"
                  >
                    {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copied ? 'Адрес скопирован!' : 'Скопировать точный адрес'}</span>
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-neutral-500 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <div className="text-neutral-300">{COMPANY_CONTACTS.workHours.weekdays}</div>
                  <div className="text-neutral-400">{COMPANY_CONTACTS.workHours.saturday}</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-red-500 shrink-0" />
                <a
                  href={`tel:${COMPANY_CONTACTS.phone}`}
                  className="text-white hover:text-red-400 font-mono font-bold transition-colors text-sm"
                >
                  {COMPANY_CONTACTS.phoneDisplay}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-neutral-500 shrink-0" />
                <a
                  href={`mailto:${COMPANY_CONTACTS.email}`}
                  className="hover:text-white transition-colors"
                >
                  {COMPANY_CONTACTS.email}
                </a>
              </div>
            </div>
          </div>

          {/* Quick Actions & Messenger (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Прямая связь с отделом продаж
            </h4>

            <p className="text-xs text-neutral-400 leading-relaxed">
              Получите актуальные шахматки доступных квартир, персональный расчет рассрочки и презентацию в WhatsApp:
            </p>

            <div className="flex flex-col gap-2.5">
              <a
                href={COMPANY_CONTACTS.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-4 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-800/60 text-emerald-400 hover:text-white font-semibold text-xs transition-colors flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-4 h-4" />
                  <span>Написать на WhatsApp (24/7)</span>
                </span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="https://2gis.kg/bishkek"
                target="_blank"
                rel="noreferrer"
                className="py-2.5 px-4 rounded-xl bg-neutral-900 hover:bg-neutral-800 border border-neutral-800 text-neutral-300 hover:text-white text-xs transition-colors flex items-center justify-between"
              >
                <span>Открыть локацию в 2GIS</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-500" />
              </a>
            </div>
          </div>
        </div>

        {/* Quiet Bottom Legal Line */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © 2026 A PLUS Development. Все права защищены.
          </div>
          <div className="flex items-center gap-4">
            <span>г. Бишкек, Кыргызская Республика</span>
            <span aria-hidden="true">·</span>
            <span>Серия КРЦ-2 № 012064</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
