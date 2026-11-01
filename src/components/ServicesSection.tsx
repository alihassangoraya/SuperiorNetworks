import React, { useState } from 'react';
import { Language, ServiceItem } from '../types';
import { translations } from '../data/translations';
import { servicesData } from '../data/services';
import {
  Truck,
  Shovel,
  Network,
  Layers,
  Video,
  Zap,
  Droplets,
  Home,
  Building2,
  Factory,
  Users,
  Boxes,
  ArrowRight,
  CheckCircle2,
  X,
} from 'lucide-react';

interface ServicesSectionProps {
  lang: Language;
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ lang, onSelectService }) => {
  const t = translations[lang];
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);

  const getIcon = (name: string) => {
    switch (name) {
      case 'Truck': return <Truck className="w-5 h-5 text-amber-500" />;
      case 'Shovel': return <Shovel className="w-5 h-5 text-amber-500" />;
      case 'Network': return <Network className="w-5 h-5 text-amber-500" />;
      case 'Layers': return <Layers className="w-5 h-5 text-amber-500" />;
      case 'Video': return <Video className="w-5 h-5 text-amber-500" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-500" />;
      case 'Droplets': return <Droplets className="w-5 h-5 text-amber-500" />;
      case 'Home': return <Home className="w-5 h-5 text-amber-500" />;
      case 'Building2': return <Building2 className="w-5 h-5 text-amber-500" />;
      case 'Factory': return <Factory className="w-5 h-5 text-amber-500" />;
      case 'Users': return <Users className="w-5 h-5 text-amber-500" />;
      case 'Boxes': return <Boxes className="w-5 h-5 text-amber-500" />;
      default: return <Truck className="w-5 h-5 text-amber-500" />;
    }
  };

  const categories = [
    { id: 'all', label: lang === 'ar' ? 'كافة الخدمات' : 'All Services' },
    { id: 'Equipment', label: lang === 'ar' ? 'المعدات والآليات' : 'Heavy Equipment' },
    { id: 'Infrastructure', label: lang === 'ar' ? 'الحفريات والترنش' : 'Trenching & Earthworks' },
    { id: 'Telecom', label: lang === 'ar' ? 'الألياف الضوئية' : 'Optical Fiber' },
    { id: 'Roads', label: lang === 'ar' ? 'الأسفلت والطرق' : 'Asphalt & Roads' },
    { id: 'Utilities', label: lang === 'ar' ? 'المياه والكهرباء' : 'Utilities & Power' },
    { id: 'Construction', label: lang === 'ar' ? 'الإنشاءات والمباني' : 'Construction' },
    { id: 'Workforce', label: lang === 'ar' ? 'القوى العاملة والتوريد' : 'Manpower & Supply' },
  ];

  const filteredServices = servicesData.filter(
    (s) => activeCategory === 'all' || s.category === activeCategory
  );

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-700 mb-3">
            {t.services.sectionBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2b45] tracking-tight">
            {t.services.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                activeCategory === c.id
                  ? 'bg-[#0d2b45] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image header */}
                <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-200">
                  <img
                    src={service.image}
                    alt={lang === 'ar' ? service.titleAr : service.titleEn}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 inset-s-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#0d2b45]/90 text-white backdrop-blur shadow-sm">
                      {getIcon(service.iconName)}
                      <span>{service.category}</span>
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#0d2b45] group-hover:text-amber-600 transition mb-1 leading-snug">
                    {lang === 'ar' ? service.titleAr : service.titleEn}
                  </h3>
                  <p className="text-xs text-slate-400 mb-3 font-medium">
                    {lang === 'ar' ? service.titleEn : service.titleAr}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4 line-clamp-3">
                    {lang === 'ar' ? service.summaryAr : service.summaryEn}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {(lang === 'ar' ? service.featuresAr : service.featuresEn).slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100">
                <button
                  onClick={() => setSelectedServiceModal(service)}
                  className="text-xs font-bold text-[#0d2b45] hover:text-amber-600 transition flex items-center gap-1 cursor-pointer"
                >
                  <span>{t.services.learnMore}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                </button>

                <button
                  onClick={() => onSelectService(lang === 'ar' ? service.titleAr : service.titleEn)}
                  className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow-sm transition cursor-pointer"
                >
                  {t.nav.getQuote}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Full Service Details */}
        {selectedServiceModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm">
            <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative">
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="absolute top-5 inset-e-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-amber-500/10">
                  {getIcon(selectedServiceModal.iconName)}
                </div>
                <div>
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                    {selectedServiceModal.category}
                  </span>
                  <h3 className="text-2xl font-black text-[#0d2b45]">
                    {lang === 'ar' ? selectedServiceModal.titleAr : selectedServiceModal.titleEn}
                  </h3>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden h-56 mb-5 border border-slate-200">
                <img
                  src={selectedServiceModal.image}
                  alt={selectedServiceModal.titleEn}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  {lang === 'ar' ? selectedServiceModal.descriptionAr : selectedServiceModal.descriptionEn}
                </p>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2.5">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                    {lang === 'ar' ? 'المواصفات والقدرات الفنية' : 'Key Technical Capabilities'}
                  </h4>
                  {(lang === 'ar' ? selectedServiceModal.featuresAr : selectedServiceModal.featuresEn).map((f, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedServiceModal(null)}
                  className="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  {lang === 'ar' ? 'إغلاق' : 'Close'}
                </button>
                <button
                  onClick={() => {
                    const name = lang === 'ar' ? selectedServiceModal.titleAr : selectedServiceModal.titleEn;
                    setSelectedServiceModal(null);
                    onSelectService(name);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs sm:text-sm shadow-md cursor-pointer"
                >
                  {t.nav.getQuote}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
