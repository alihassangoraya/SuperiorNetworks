import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Phone, MessageCircle, Send, Globe } from 'lucide-react';

interface MobileQuickBarProps {
  lang: Language;
  onOpenQuote: () => void;
  onToggleLang: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({
  lang,
  onOpenQuote,
  onToggleLang,
}) => {
  const t = translations[lang];

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl py-2 px-3">
      <div className="grid grid-cols-4 gap-2 text-center">
        
        {/* Call Button */}
        <a
          href="tel:+966579421490"
          className="flex flex-col items-center justify-center p-1.5 rounded-xl text-slate-700 hover:text-amber-600 active:bg-slate-100 transition"
        >
          <Phone className="w-5 h-5 text-amber-500 mb-0.5" />
          <span className="text-[10px] font-bold leading-tight">
            {lang === 'ar' ? 'اتصال' : 'Call'}
          </span>
        </a>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/966579421490?text=Hello%20Superior%20Networks%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center p-1.5 rounded-xl text-slate-700 hover:text-emerald-600 active:bg-slate-100 transition"
        >
          <MessageCircle className="w-5 h-5 text-emerald-500 mb-0.5" />
          <span className="text-[10px] font-bold leading-tight">
            {lang === 'ar' ? 'واتساب' : 'WhatsApp'}
          </span>
        </a>

        {/* Quote Button */}
        <button
          onClick={onOpenQuote}
          className="flex flex-col items-center justify-center p-1.5 rounded-xl bg-amber-500 text-white font-bold shadow-md shadow-amber-500/20 active:bg-amber-600 transition"
        >
          <Send className="w-4 h-4 mb-0.5" />
          <span className="text-[10px] font-bold leading-tight">
            {lang === 'ar' ? 'عرض سعر' : 'Quote'}
          </span>
        </button>

        {/* Language Switcher */}
        <button
          onClick={onToggleLang}
          className="flex flex-col items-center justify-center p-1.5 rounded-xl text-slate-700 hover:text-amber-600 active:bg-slate-100 transition"
        >
          <Globe className="w-5 h-5 text-blue-600 mb-0.5" />
          <span className="text-[10px] font-bold leading-tight">
            {t.nav.language}
          </span>
        </button>

      </div>
    </div>
  );
};

