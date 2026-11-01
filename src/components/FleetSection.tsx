import React, { useState, useMemo } from 'react';
import { Language, FleetItem } from '../types';
import { translations } from '../data/translations';
import { fleetData } from '../data/fleet';
import { Search, Filter, Layers, ListFilter, Check, ArrowUpRight, Shield } from 'lucide-react';

interface FleetSectionProps {
  lang: Language;
  onSelectEquipment: (equipmentName: string) => void;
}

export const FleetSection: React.FC<FleetSectionProps> = ({ lang, onSelectEquipment }) => {
  const t = translations[lang];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [viewMode, setViewMode] = useState<'cards' | 'table'>('cards');

  const categories = [
    { id: 'all', label: t.fleet.filterAll },
    { id: 'earthmoving', label: t.fleet.filterEarthmoving },
    { id: 'excavator', label: t.fleet.filterExcavator },
    { id: 'trenching', label: t.fleet.filterTrenching },
    { id: 'road', label: t.fleet.filterRoad },
    { id: 'trucks', label: t.fleet.filterTrucks },
    { id: 'power_telecom', label: t.fleet.filterPower },
  ];

  const filteredFleet = useMemo(() => {
    return fleetData.filter((item) => {
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === '' ||
        item.nameEn.toLowerCase().includes(q) ||
        item.nameAr.toLowerCase().includes(q) ||
        (item.brand && item.brand.toLowerCase().includes(q)) ||
        (item.capacity && item.capacity.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const totalUnits = useMemo(() => {
    return fleetData.reduce((acc, curr) => acc + curr.quantity, 0);
  }, []);

  return (
    <section id="fleet" className="py-20 lg:py-28 bg-slate-900 text-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30 mb-3">
              {t.fleet.sectionBadge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {t.fleet.title}
            </h2>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              {t.fleet.subtitle}
            </p>
          </div>

          {/* Quick Counter Badge & View Toggle */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="px-4 py-2.5 rounded-xl bg-slate-800/90 border border-slate-700 flex items-center gap-3">
              <div className="text-2xl font-black text-amber-400">{totalUnits}</div>
              <div className="text-xs text-slate-300 leading-tight">
                <span className="font-bold block">{t.fleet.totalUnits}</span>
                <span className="text-[11px] text-slate-400">37 {lang === 'ar' ? 'فئة معتمدة' : 'Equipment Types'}</span>
              </div>
            </div>

            <div className="flex rounded-xl bg-slate-800 p-1 border border-slate-700">
              <button
                onClick={() => setViewMode('cards')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'cards' ? 'bg-amber-500 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span>{lang === 'ar' ? 'بطاقات' : 'Cards'}</span>
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition cursor-pointer flex items-center gap-1.5 ${
                  viewMode === 'table' ? 'bg-amber-500 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                <ListFilter className="w-3.5 h-3.5" />
                <span>{lang === 'ar' ? 'جدول كامل' : 'Full Table'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Filter Bar & Search Input */}
        <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-slate-700 mb-8 space-y-4">
          
          {/* Search box */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute top-1/2 -translate-y-1/2 inset-s-3.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.fleet.searchPlaceholder}
              className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 ps-11 pe-4 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute top-1/2 -translate-y-1/2 inset-e-3 text-xs text-slate-400 hover:text-white bg-slate-800 px-2 py-0.5 rounded cursor-pointer"
              >
                {lang === 'ar' ? 'مسح' : 'Clear'}
              </button>
            )}
          </div>

          {/* Category Filter Chips */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <span className="text-xs font-bold text-slate-400 flex items-center gap-1 me-1">
              <Filter className="w-3.5 h-3.5 text-amber-500" />
              {lang === 'ar' ? 'الفئات:' : 'Filter:'}
            </span>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-amber-500 text-white shadow-md shadow-amber-500/20'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-700 border border-slate-700/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-4 px-1">
          <span>
            {lang === 'ar'
              ? `عرض ${filteredFleet.length} من أصل ${fleetData.length} معدة`
              : `Showing ${filteredFleet.length} of ${fleetData.length} machinery types`}
          </span>
        </div>

        {/* CARDS VIEW */}
        {viewMode === 'cards' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredFleet.map((item: FleetItem) => (
              <div
                key={item.id}
                className="group rounded-2xl bg-slate-800/70 border border-slate-700/80 hover:border-amber-500/50 p-5 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Bar: S.No + Quantity Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-bold text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                      #{item.id.toString().padStart(2, '0')}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-black bg-amber-500/20 text-amber-400 border border-amber-500/30">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                      {item.quantity} {item.quantity > 1 ? t.fleet.units : t.fleet.unit}
                    </span>
                  </div>

                  {/* Equipment Title */}
                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition mb-1 leading-snug">
                    {lang === 'ar' ? item.nameAr : item.nameEn}
                  </h3>
                  <p className="text-xs text-slate-400 mb-3 font-medium">
                    {lang === 'ar' ? item.nameEn : item.nameAr}
                  </p>

                  {/* Capacity / Spec pill */}
                  {item.capacity && (
                    <div className="inline-block text-[11px] font-semibold text-slate-300 bg-slate-900/90 px-2.5 py-1 rounded-lg border border-slate-700/70 mb-3">
                      {item.capacity}
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {lang === 'ar' ? item.descriptionAr : item.descriptionEn}
                  </p>
                </div>

                {/* Bottom Action */}
                <div className="pt-3 border-t border-slate-700/60 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-semibold">
                    <Shield className="w-3.5 h-3.5" />
                    <span>{lang === 'ar' ? 'جاهزية تشغيلية كاملة' : 'Certified & Inspected'}</span>
                  </div>
                  <button
                    onClick={() => onSelectEquipment(lang === 'ar' ? item.nameAr : item.nameEn)}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs shadow transition cursor-pointer"
                  >
                    <span>{t.fleet.requestEquipment}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* FULL DATA TABLE VIEW (Exact PDF format Pages 8-9) */}
        {viewMode === 'table' && (
          <div className="rounded-2xl border border-slate-700 overflow-hidden bg-slate-800/80 shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-start text-xs sm:text-sm">
                <thead className="bg-slate-900/90 text-slate-300 uppercase font-bold text-[11px] border-b border-slate-700">
                  <tr>
                    <th className="py-3.5 px-4 text-center w-16">{t.fleet.tableHeaderNo}</th>
                    <th className="py-3.5 px-4 text-start">{t.fleet.tableHeaderDescription}</th>
                    <th className="py-3.5 px-4 text-start hidden sm:table-cell">{t.fleet.tableHeaderCategory}</th>
                    <th className="py-3.5 px-4 text-center w-24">{t.fleet.tableHeaderQty}</th>
                    <th className="py-3.5 px-4 text-center w-36">{t.fleet.tableHeaderAction}</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-700/60 text-slate-200">
                  {filteredFleet.map((item: FleetItem) => (
                    <tr key={item.id} className="hover:bg-slate-750/70 transition">
                      <td className="py-3 px-4 text-center font-mono font-bold text-slate-400">
                        {item.id}
                      </td>
                      <td className="py-3 px-4">
                        <div className="font-bold text-white text-sm">
                          {lang === 'ar' ? item.nameAr : item.nameEn}
                        </div>
                        <div className="text-xs text-slate-400">
                          {lang === 'ar' ? item.nameEn : item.nameAr}
                        </div>
                      </td>
                      <td className="py-3 px-4 hidden sm:table-cell">
                        <span className="text-[11px] text-slate-300 bg-slate-900 px-2 py-0.5 rounded border border-slate-700">
                          {item.category}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <span className="inline-block px-2.5 py-1 rounded-full text-xs font-black bg-amber-500/20 text-amber-400 border border-amber-500/40">
                          {item.quantity}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center">
                        <button
                          onClick={() => onSelectEquipment(lang === 'ar' ? item.nameAr : item.nameEn)}
                          className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs transition cursor-pointer"
                        >
                          {t.fleet.requestEquipment}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
