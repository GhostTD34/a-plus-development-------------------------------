import React, { useState } from 'react';
import { X, CheckCircle, Phone, MessageSquare, Send, Sparkles } from 'lucide-react';
import { COMPANY_CONTACTS } from '../data/aplusData';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProject?: string;
  initialNotes?: string;
}

export const ConsultationModal: React.FC<ConsultationModalProps> = ({
  isOpen,
  onClose,
  defaultProject = '',
  initialNotes = ''
}) => {
  if (!isOpen) return null;

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('+996 ');
  const [project, setProject] = useState(defaultProject || 'senator');
  const [contactMethod, setContactMethod] = useState<'whatsapp' | 'call' | 'telegram'>('whatsapp');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim().length < 2) {
      setError('Пожалуйста, укажите ваше имя');
      return;
    }
    if (phone.trim().length < 10) {
      setError('Пожалуйста, укажите корректный номер телефона');
      return;
    }

    setError('');
    setIsSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="max-w-lg w-full bg-neutral-900 border border-neutral-800 rounded-3xl p-6 sm:p-8 relative my-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-colors"
          aria-label="Закрыть"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-red-600/20 border border-red-500/40 text-red-500 flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-white">Заявка успешно принята!</h3>

            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-sm mx-auto">
              Спасибо, <span className="text-white font-semibold">{name}</span>. Менеджер отдела продаж A PLUS Development свяжется с вами в течение 10 минут.
            </p>

            <div className="p-4 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-400 space-y-1">
              <div>Объект: <strong className="text-white uppercase">{project}</strong></div>
              <div>Способ связи: <strong className="text-white">{contactMethod}</strong></div>
              <div>Статус: <span className="text-emerald-400">Передано в офис продаж</span></div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <a
                href={COMPANY_CONTACTS.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="py-3 px-4 rounded-xl bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Написать нам в WhatsApp прямо сейчас</span>
              </a>

              <button
                onClick={onClose}
                className="py-2.5 px-4 text-xs font-medium text-neutral-400 hover:text-white"
              >
                Закрыть окно
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-red-500 uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Официальный офис продаж A PLUS</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                Персональная консультация и расчет
              </h3>
              <p className="text-xs text-neutral-400">
                Зафиксируйте индивидуальные условия рассрочки 0% или запишитесь на экскурсию на объект.
              </p>
            </div>

            {initialNotes && (
              <div className="p-3 rounded-xl bg-neutral-950 border border-neutral-800 text-xs text-neutral-300">
                <span className="text-neutral-500 block text-[10px] uppercase">Выбранный расчет:</span>
                {initialNotes}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-3 rounded-xl bg-red-950/40 border border-red-800/60 text-xs text-red-400">
                  {error}
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1">
                  Ваше имя
                </label>
                <input
                  type="text"
                  required
                  placeholder="Иван или Айбек"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-red-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1">
                  Номер телефона (Кыргызстан или международный)
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+996 555 12-34-56"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white placeholder-neutral-600 focus:outline-none focus:border-red-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1">
                  Интересующий жилой комплекс
                </label>
                <select
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-red-500"
                >
                  <option value="senator">ЖК SENATOR (Асанбай)</option>
                  <option value="grand">ЖК GRAND (пр. Ч. Айтматова)</option>
                  <option value="tunguch">ЖК TUNGUCH RESIDENCE (2 га)</option>
                  <option value="aristocrat">ЖК АРИСТОКРАТ (Южная магистраль)</option>
                  <option value="other">Хочу получить консультацию по всем объектам</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-400 mb-1.5">
                  Удобный способ связи
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setContactMethod('whatsapp')}
                    className={`py-2 px-3 rounded-xl border text-xs font-medium transition-colors ${
                      contactMethod === 'whatsapp'
                        ? 'bg-emerald-950/60 border-emerald-500 text-emerald-400'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    WhatsApp
                  </button>
                  <button
                    type="button"
                    onClick={() => setContactMethod('call')}
                    className={`py-2 px-3 rounded-xl border text-xs font-medium transition-colors ${
                      contactMethod === 'call'
                        ? 'bg-red-950/60 border-red-500 text-red-400'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    Звонок
                  </button>
                  <button
                    type="button"
                    onClick={() => setContactMethod('telegram')}
                    className={`py-2 px-3 rounded-xl border text-xs font-medium transition-colors ${
                      contactMethod === 'telegram'
                        ? 'bg-sky-950/60 border-sky-500 text-sky-400'
                        : 'bg-neutral-950 border-neutral-800 text-neutral-400 hover:text-white'
                    }`}
                  >
                    Telegram
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl bg-red-600 hover:bg-red-500 text-white font-semibold text-xs tracking-wider transition-all shadow-xl shadow-red-950/50 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Отправить заявку в отдел продаж</span>
                </button>
              </div>

              <p className="text-[10px] text-neutral-500 text-center leading-normal">
                Нажимая кнопку, вы соглашаетесь на обработку персональных данных. Конфиденциальность гарантируется.
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
