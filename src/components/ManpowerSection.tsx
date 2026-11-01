import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { manpowerData } from '../data/manpower';
import { Users, HardHat, Wrench, ShieldCheck, Truck, PackageCheck, Award } from 'lucide-react';

interface ManpowerSectionProps {
  lang: Language;
  onOpenQuote: (service?: string) => void;
}

export const ManpowerSection: React.FC<ManpowerSectionProps> = ({ lang, onOpenQuote }) => {
  const t = translations[lang];
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'operators' | 'technical' | 'supervisory' | 'general'>('all');

  const filteredRoles = manpowerData.filter(
    (item) => selectedCategory === 'all' || item.category === selectedCategory
  );

  const totalHeadcount = manpowerData.reduce((acc, curr) => acc + curr.count, 0);

  return (
    <section id="manpower" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-700 mb-3">
            {t.manpower.sectionBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2b45] tracking-tight">
            {t.manpower.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.manpower.subtitle}
          </p>
        </div>

        {/* 4 Pillars Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-amber-400 transition hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4">
              <Truck className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#0d2b45] mb-2">{t.manpower.operatorTitle}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{t.manpower.operatorDesc}</p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-amber-400 transition hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4">
              <Wrench className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#0d2b45] mb-2">{t.manpower.techTitle}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{t.manpower.techDesc}</p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-amber-400 transition hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4">
              <HardHat className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#0d2b45] mb-2">{t.manpower.engineeringTitle}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{t.manpower.engineeringDesc}</p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-amber-400 transition hover:shadow-md">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#0d2b45] mb-2">{t.manpower.laborTitle}</h3>
            <p className="text-xs text-slate-600 leading-relaxed">{t.manpower.laborDesc}</p>
          </div>

        </div>

        {/* Detailed Manpower Breakdown with Headcounts (From Page 25 of PDF) */}
        <div className="bg-gradient-to-br from-[#0d2b45] to-[#081827] rounded-3xl p-6 sm:p-10 text-white shadow-xl mb-12">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-700/80">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
                {lang === 'ar' ? 'بيانات القوى العاملة الميدانية' : 'Official PDF Manpower Registry'}
              </span>
              <h3 className="text-2xl font-black text-white">
                {lang === 'ar' ? 'قائمة توزيع العمالة والكوادر المعتمدة' : 'Verified Field Workforce Deployment'}
              </h3>
            </div>
            
            <div className="flex items-center gap-3 bg-white/10 px-4 py-2 rounded-2xl border border-white/15">
              <Award className="w-5 h-5 text-amber-400 shrink-0" />
              <div>
                <span className="text-xs text-slate-300 block">{lang === 'ar' ? 'إجمالي الكوادر الميدانية' : 'Total Field Headcount'}</span>
                <span className="text-xl font-black text-amber-400">{totalHeadcount} {lang === 'ar' ? 'كادر متخصص' : 'Certified Personnel'}</span>
              </div>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-amber-500 text-white shadow'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {lang === 'ar' ? 'الكل (18 تخصص)' : 'All Roles (18 Disciplines)'}
            </button>
            <button
              onClick={() => setSelectedCategory('operators')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                selectedCategory === 'operators'
                  ? 'bg-amber-500 text-white shadow'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {lang === 'ar' ? 'مشغلو المعدات الثقيلة' : 'Heavy Equipment Operators'}
            </button>
            <button
              onClick={() => setSelectedCategory('technical')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                selectedCategory === 'technical'
                  ? 'bg-amber-500 text-white shadow'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {lang === 'ar' ? 'الفنيون والاتصالات' : 'Telecom & Tech Specialists'}
            </button>
            <button
              onClick={() => setSelectedCategory('supervisory')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                selectedCategory === 'supervisory'
                  ? 'bg-amber-500 text-white shadow'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {lang === 'ar' ? 'المهندسون والإشراف' : 'Engineers & Supervisors'}
            </button>
            <button
              onClick={() => setSelectedCategory('general')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                selectedCategory === 'general'
                  ? 'bg-amber-500 text-white shadow'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              {lang === 'ar' ? 'السائقون والعمالة' : 'Drivers & Site Helpers'}
            </button>
          </div>

          {/* Grid of Roles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {filteredRoles.map((role, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-3.5 rounded-xl bg-slate-800/60 border border-slate-700 hover:border-amber-500/50 transition"
              >
                <div className="pe-2">
                  <p className="text-sm font-bold text-white leading-tight">
                    {lang === 'ar' ? role.roleAr : role.roleEn}
                  </p>
                  <p className="text-[11px] text-slate-400 font-medium">
                    {lang === 'ar' ? role.roleEn : role.roleAr}
                  </p>
                </div>
                <div className="shrink-0 flex items-center justify-center min-w-8 h-8 px-2 rounded-lg bg-amber-500/20 text-amber-400 font-black text-sm border border-amber-500/30">
                  {role.count}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Material Supply Banner (Page 23 of PDF) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-100/90 rounded-3xl p-6 sm:p-10 border border-slate-200">
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/20 text-amber-700 border border-amber-500/30">
              <PackageCheck className="w-4 h-4 text-amber-600" />
              <span>{t.manpower.materialTitle}</span>
            </div>
            <h3 className="text-2xl font-black text-[#0d2b45]">
              {lang === 'ar' ? 'توريد المواد ومستلزمات المشاريع الميدانية' : 'Comprehensive Project Material Supply'}
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {t.manpower.materialDesc}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onOpenQuote(lang === 'ar' ? 'توريد مواد ومعدات' : 'Material & Manpower Supply')}
                className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm shadow transition cursor-pointer"
              >
                {lang === 'ar' ? 'طلب توريد عمالة أو مواد' : 'Request Manpower or Material'}
              </button>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="relative rounded-2xl overflow-hidden aspect-4/3 border-2 border-white shadow-lg">
              <img
                src="/assets/services/manpower.jpg"
                alt="Manpower and site execution"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex items-end p-4">
                <span className="text-xs text-white font-bold">
                  {lang === 'ar' ? 'طواقم مؤهلة ومطابقة للاشتراطات' : 'Trained to Safety & Performance Standards'}
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

