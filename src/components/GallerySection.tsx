import React, { useState } from 'react';
import { Language, ProjectItem } from '../types';
import { translations } from '../data/translations';
import { projectsData } from '../data/projects';
import { Maximize2, MapPin, Eye, ChevronLeft, ChevronRight, X } from 'lucide-react';

interface GallerySectionProps {
  lang: Language;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ lang }) => {
  const t = translations[lang];
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filters = [
    { id: 'all', label: t.projects.filterAll },
    { id: 'trenching', label: t.projects.filterTrenching },
    { id: 'fiber', label: t.projects.filterFiber },
    { id: 'asphalt', label: t.projects.filterAsphalt },
    { id: 'earthmoving', label: t.projects.filterEarthmoving },
    { id: 'electrical', label: t.projects.filterElectrical },
  ];

  const filteredProjects = projectsData.filter(
    (p) => activeFilter === 'all' || p.category === activeFilter
  );

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredProjects.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredProjects.length) % filteredProjects.length);
    }
  };

  return (
    <section id="projects" className="py-20 lg:py-28 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30 mb-3">
            {t.projects.sectionBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {t.projects.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            {t.projects.subtitle}
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition cursor-pointer ${
                activeFilter === f.id
                  ? 'bg-amber-500 text-white shadow-lg shadow-amber-500/25'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700/60'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden aspect-4/3 bg-slate-800 cursor-pointer border border-slate-700 hover:border-amber-500/60 transition-all duration-300 shadow-md hover:shadow-2xl hover:shadow-amber-500/10"
            >
              <img
                src={project.image}
                alt={lang === 'ar' ? project.titleAr : project.titleEn}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              
              {/* Overlay with info */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity flex flex-col justify-end p-4">
                <div className="flex items-center gap-1.5 text-[11px] text-amber-400 font-semibold mb-1">
                  <MapPin className="w-3 h-3" />
                  <span>{lang === 'ar' ? project.locationAr : project.locationEn}</span>
                </div>
                <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition leading-snug line-clamp-2">
                  {lang === 'ar' ? project.titleAr : project.titleEn}
                </h4>
                <p className="text-[11px] text-slate-300 line-clamp-1 mt-1">
                  {lang === 'ar' ? project.descriptionAr : project.descriptionEn}
                </p>

                <div className="mt-2 pt-2 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="capitalize">{project.category}</span>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>{lang === 'ar' ? 'عرض مكبر' : 'Enlarge'}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {lightboxIndex !== null && filteredProjects[lightboxIndex] && (
          <div
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-5 inset-e-5 z-20 p-2.5 rounded-full bg-slate-800 hover:bg-slate-700 text-white cursor-pointer"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute top-1/2 -translate-y-1/2 inset-s-4 z-20 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white cursor-pointer"
              aria-label="Previous image"
            >
              <ChevronLeft className={`w-6 h-6 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute top-1/2 -translate-y-1/2 inset-e-4 z-20 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white cursor-pointer"
              aria-label="Next image"
            >
              <ChevronRight className={`w-6 h-6 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </button>

            {/* Image & Description container */}
            <div
              className="max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-2xl overflow-hidden max-h-[70vh] border border-slate-700 bg-slate-900 shadow-2xl">
                <img
                  src={filteredProjects[lightboxIndex].image}
                  alt={filteredProjects[lightboxIndex].titleEn}
                  className="max-h-[70vh] w-auto max-w-full object-contain mx-auto"
                />
              </div>

              <div className="mt-4 p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-center max-w-xl w-full">
                <div className="flex items-center justify-center gap-1.5 text-xs text-amber-400 font-semibold mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>
                    {lang === 'ar'
                      ? filteredProjects[lightboxIndex].locationAr
                      : filteredProjects[lightboxIndex].locationEn}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1">
                  {lang === 'ar'
                    ? filteredProjects[lightboxIndex].titleAr
                    : filteredProjects[lightboxIndex].titleEn}
                </h3>
                <p className="text-xs text-slate-300">
                  {lang === 'ar'
                    ? filteredProjects[lightboxIndex].descriptionAr
                    : filteredProjects[lightboxIndex].descriptionEn}
                </p>
                <div className="text-[11px] text-slate-500 mt-2">
                  {lightboxIndex + 1} / {filteredProjects.length}
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

