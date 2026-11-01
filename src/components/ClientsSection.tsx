import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { clientsData } from '../data/clients';
import { CheckCircle2, Building, ShieldCheck } from 'lucide-react';

interface ClientsSectionProps {
  lang: Language;
}

export const ClientsSection: React.FC<ClientsSectionProps> = ({ lang }) => {
  const t = translations[lang];

  return (
    <section id="clients" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-700 mb-3">
            {t.clients.sectionBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2b45] tracking-tight">
            {t.clients.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.clients.subtitle}
          </p>
        </div>

        {/* Clients Grid (From Page 26 of PDF) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {clientsData.map((client) => (
            <div
              key={client.id}
              className="group bg-slate-50/80 rounded-2xl p-6 border border-slate-200/90 hover:border-amber-400 transition-all duration-300 hover:shadow-lg flex flex-col items-center text-center justify-between"
            >
              <div className="w-full flex flex-col items-center">
                {/* Logo Frame */}
                <div className="h-24 w-full flex items-center justify-center p-3 bg-white rounded-xl border border-slate-100 shadow-xs mb-4 group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={client.logo}
                    alt={client.nameEn}
                    className="max-h-16 max-w-[85%] object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Client Name */}
                <h3 className="text-base font-bold text-[#0d2b45] mb-1">
                  {lang === 'ar' ? client.nameAr : client.nameEn}
                </h3>
                <p className="text-xs text-slate-500 mb-3 font-medium">
                  {lang === 'ar' ? client.nameEn : client.nameAr}
                </p>

                {/* Scope Description */}
                <p className="text-xs text-slate-600 leading-relaxed">
                  {lang === 'ar' ? client.roleAr : client.roleEn}
                </p>
              </div>

              <div className="w-full pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-center gap-1.5 text-[11px] font-semibold text-emerald-600">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{lang === 'ar' ? 'شراكة إنجاز موثوقة' : 'Trusted Partner'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Vision 2030 & Riyadh Expo 2030 National Alignment Box */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#0d2b45] to-[#12365a] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-start">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
              {lang === 'ar' ? 'المساهمة في النهضة الوطنية' : 'National Infrastructure Commitment'}
            </span>
            <h3 className="text-xl sm:text-2xl font-black">
              {lang === 'ar'
                ? 'فخورون بالمشاركة في بناء مشاريع رؤية 2030 وإكسبو 2030'
                : 'Proudly Building the Infrastructure of Vision 2030 & Expo 2030'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              {lang === 'ar'
                ? 'نعمل جنباً إلى جنب مع كبرى المؤسسات الوطنية لتشييد شبكات اتصالات وبنى تحتية متطورة تليق بمكانة المملكة العالمية.'
                : 'Working alongside top Saudi organizations to engineer world-class telecommunications, utilities, and roads across the Kingdom.'}
            </p>
          </div>

          <div className="flex items-center gap-4 bg-white/10 p-3 rounded-2xl border border-white/20 shrink-0">
            <img
              src="/assets/branding/vision-2030.png"
              alt="Vision 2030"
              className="h-10 w-auto object-contain bg-white/90 p-1 rounded-lg"
            />
            <img
              src="/assets/branding/expo-2030.png"
              alt="Riyadh Expo 2030"
              className="h-10 w-auto object-contain bg-white/90 p-1 rounded-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
