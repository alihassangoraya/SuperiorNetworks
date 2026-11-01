import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { ShieldCheck, ArrowRight, MessageCircle, Truck, Award, Clock, Users, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  lang: Language;
  onOpenQuote: () => void;
  onExploreFleet: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, onOpenQuote, onExploreFleet }) => {
  const t = translations[lang];

  return (
    <section
      id="home"
      className="relative min-h-[95dvh] flex flex-col justify-center pt-32 sm:pt-36 md:pt-44 lg:pt-48 pb-16 lg:pb-24 overflow-hidden bg-[#0a1e33]"
    >
      {/* Background with real site imagery + overlay gradients */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/services/hero-excavator.jpg"
          alt="Superior Networks Heavy Equipment Komatsu Excavator on site in Saudi Arabia"
          fetchPriority="high"
          className="w-full h-full object-cover object-center opacity-30 scale-105 transform motion-safe:animate-pulse-subtle"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a1e33] via-[#0a1e33]/90 to-[#0a1e33]/70"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent"></div>
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Copy Column */}
          <div className="lg:col-span-8 text-white space-y-6">
            
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/30">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                {t.hero.badge}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/80 text-slate-300 border border-slate-700">
                {t.hero.tagline}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
              <span>{t.hero.titleStart} </span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                {t.hero.titleHighlight}
              </span>{" "}
              <span>{t.hero.titleEnd}</span>
            </h1>

            {/* Description Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              {t.hero.description}
            </p>

            {/* Vision 2030 / Expo 2030 Endorsement Card */}
            <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/60 backdrop-blur-md border border-slate-700/60 max-w-xl">
              <div className="flex items-center gap-3 shrink-0">
                <img
                  src="/assets/branding/vision-2030.png"
                  alt="Saudi Vision 2030"
                  className="h-7 w-auto object-contain bg-white/90 p-1 rounded"
                />
                <img
                  src="/assets/branding/expo-2030.png"
                  alt="Riyadh Expo 2030"
                  className="h-7 w-auto object-contain bg-white/90 p-1 rounded"
                />
              </div>
              <p className="text-xs text-slate-300 leading-snug">
                {t.hero.visionText}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35 transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <span>{t.hero.ctaSecondary}</span>
                <ArrowRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
              </button>

              <button
                onClick={onExploreFleet}
                className="px-6 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-750 text-slate-200 hover:text-white font-bold text-sm sm:text-base border border-slate-700 hover:border-amber-500/50 transition-all duration-200 flex items-center gap-2 cursor-pointer"
              >
                <Truck className="w-4 h-4 text-amber-400" />
                <span>{t.hero.ctaPrimary}</span>
              </button>

              <a
                href="https://wa.me/966579421490?text=Hello%20Superior%20Networks%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20machinery%20and%20contracting%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-emerald-600/20 transition-all duration-200 flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t.hero.ctaWhatsApp}</span>
              </a>
            </div>

          </div>

          {/* Right Highlights Visual Card */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 bg-slate-900/80 shadow-2xl backdrop-blur-md p-6 space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <span className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                    {lang === 'ar' ? 'الرياض - المملكة' : 'Riyadh, KSA'}
                  </span>
                  <h3 className="text-lg font-bold text-white">
                    {lang === 'ar' ? 'جاهزية كاملة للمشاريع' : 'Project-Ready Execution'}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold">
                  KSA
                </div>
              </div>

              {/* Quick capabilities preview */}
              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    {lang === 'ar'
                      ? 'أسطول متكامل من 37 فئة معدات تشمل جرافات D9 وحفارات 50 طن'
                      : 'Comprehensive fleet of 37 equipment types including D9 dozers and 50-ton excavators'}
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    {lang === 'ar'
                      ? 'طواقم متخصصة في لحام الألياف الضوئية وفحص الـ OTDR لشبكات STC وتوال'
                      : 'Certified fiber fusion splicing & OTDR testing crews trusted by STC & TAWAL'}
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    {lang === 'ar'
                      ? 'تنفيذ حفريات الترنش وتمديد خطوط المياه وشبكات الصرف والسفلتة'
                      : 'Trenching, deep water pipelines, electrical substations, and asphalt paving'}
                  </span>
                </div>
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>
                    {lang === 'ar'
                      ? '+115 من الكوادر الفنية والمشغلين المعتمدين والمشرفين الميدانيين'
                      : '115+ specialized certified operators, engineers, and site workforce'}
                  </span>
                </div>
              </div>

              {/* Front loader preview thumbnail */}
              <div className="relative rounded-xl overflow-hidden h-36 border border-slate-700">
                <img
                  src="/assets/services/hero-loader.jpg"
                  alt="Wheel loader on site"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-3">
                  <span className="text-[11px] font-semibold text-white bg-slate-900/70 px-2 py-0.5 rounded backdrop-blur">
                    {lang === 'ar' ? 'أسطول الآليات الثقيلة الميداني' : 'Superior Heavy Fleet Operations'}
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Stats Grid Bar (Page 2 of PDF: 15+ Years, 100+ Projects, 200+ Happy clients, 98% On-Time) */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            
            <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm hover:border-amber-500/40 transition">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">{t.hero.stats.years}</div>
                  <div className="text-xs text-slate-400 font-medium">{t.hero.stats.yearsLabel}</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm hover:border-amber-500/40 transition">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">{t.hero.stats.projects}</div>
                  <div className="text-xs text-slate-400 font-medium">{t.hero.stats.projectsLabel}</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm hover:border-amber-500/40 transition">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">{t.hero.stats.clients}</div>
                  <div className="text-xs text-slate-400 font-medium">{t.hero.stats.clientsLabel}</div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-800/40 border border-slate-700/50 backdrop-blur-sm hover:border-amber-500/40 transition">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-amber-500/10 text-amber-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">{t.hero.stats.delivery}</div>
                  <div className="text-xs text-slate-400 font-medium">{t.hero.stats.deliveryLabel}</div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

