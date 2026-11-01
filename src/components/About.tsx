import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Target, Eye, ShieldCheck, Zap, HardHat, Compass } from 'lucide-react';

interface AboutProps {
  lang: Language;
}

export const About: React.FC<AboutProps> = ({ lang }) => {
  const t = translations[lang];
  const [activeTab, setActiveTab] = useState<'mission' | 'vision' | 'values'>('mission');

  return (
    <section id="about" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-700 mb-3">
            {t.about.sectionBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2b45] tracking-tight">
            {t.about.title}
          </h2>
          <div className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed space-y-2">
            <p>{t.about.p1}</p>
            <p className="font-medium text-slate-800">{t.about.p2}</p>
          </div>
        </div>

        {/* Mission / Vision / Strengths Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
            <button
              onClick={() => setActiveTab('mission')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'mission'
                  ? 'bg-white text-[#0d2b45] shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Target className="w-4 h-4 text-amber-500" />
              <span>{t.about.missionTitle}</span>
            </button>
            <button
              onClick={() => setActiveTab('vision')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'vision'
                  ? 'bg-white text-[#0d2b45] shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Eye className="w-4 h-4 text-amber-500" />
              <span>{t.about.visionTitle}</span>
            </button>
            <button
              onClick={() => setActiveTab('values')}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'values'
                  ? 'bg-white text-[#0d2b45] shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Compass className="w-4 h-4 text-amber-500" />
              <span>{t.about.valuesTitle}</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-50/80 rounded-3xl p-6 sm:p-10 border border-slate-200">
          
          {/* Left Text Detail */}
          <div className="lg:col-span-7 space-y-6">
            {activeTab === 'mission' && (
              <div className="space-y-4">
                <div className="inline-flex p-3 rounded-2xl bg-amber-500/10 text-amber-600">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0d2b45]">
                  {t.about.missionTitle}
                </h3>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                  {t.about.missionDesc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200">
                    <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      {lang === 'ar' ? 'أعلى معايير السلامة المهنية' : 'Highest Standards of Safety'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200">
                    <Zap className="w-5 h-5 text-amber-500 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-800">
                      {lang === 'ar' ? 'سرعة الإنجاز ودقة التنفيذ' : 'Speed, Strength & Precision'}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'vision' && (
              <div className="space-y-4">
                <div className="inline-flex p-3 rounded-2xl bg-amber-500/10 text-amber-600">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0d2b45]">
                  {t.about.visionTitle}
                </h3>
                <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
                  {t.about.visionDesc}
                </p>
                <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center gap-4">
                  <img
                    src="/assets/branding/vision-2030.png"
                    alt="Vision 2030"
                    className="h-10 w-auto object-contain"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#0d2b45]">
                      {lang === 'ar' ? 'مواكبة رؤية السعودية 2030' : 'Powering Saudi Vision 2030'}
                    </h4>
                    <p className="text-xs text-slate-600">
                      {lang === 'ar'
                        ? 'مشاريع البنية التحتية العملاقة، المدن الذكية ومشاريع استضافة إكسبو 2030 بالرياض.'
                        : 'Supporting mega infrastructure, smart city development, and Riyadh Expo 2030 hosting.'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'values' && (
              <div className="space-y-4">
                <div className="inline-flex p-3 rounded-2xl bg-amber-500/10 text-amber-600">
                  <Compass className="w-8 h-8" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0d2b45]">
                  {t.about.valuesTitle}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {t.about.values.map((val, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 hover:border-amber-400 transition shadow-sm">
                      <div className="flex items-center gap-2 mb-1.5">
                        <HardHat className="w-4 h-4 text-amber-500" />
                        <h4 className="font-bold text-sm text-[#0d2b45]">{val.title}</h4>
                      </div>
                      <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right Visual Image Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3 border-4 border-white">
              <img
                src={
                  activeTab === 'mission'
                    ? '/assets/services/mission-team.jpg'
                    : activeTab === 'vision'
                    ? '/assets/services/vision-team.jpg'
                    : '/assets/services/intro-building.jpg'
                }
                alt="Superior Networks on site"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e33]/80 via-transparent to-transparent flex items-end p-5">
                <div className="text-white">
                  <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                    {lang === 'ar' ? 'الميدان يتحدث عن الجودة' : 'Proven Quality On Site'}
                  </p>
                  <p className="text-sm font-bold">
                    {lang === 'ar' ? 'سوبيريور نتوركس - الرياض' : 'Superior Networks Operations'}
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
