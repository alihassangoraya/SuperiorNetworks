import React from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Phone, Mail, MapPin, ArrowUp, FileDown, ShieldCheck } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = translations[lang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#081726] text-slate-400 text-xs sm:text-sm border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Company Brief Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/assets/branding/logo.png"
                alt="Superior Networks Logo"
                className="h-12 w-auto object-contain bg-white p-1 rounded-lg"
              />
              <div>
                <h3 className="text-base font-extrabold text-white tracking-tight">
                  SUPERIOR NETWORKS COMPANY
                </h3>
                <p className="text-xs text-amber-500 font-semibold">
                  شركة سوبيريور نتوركس للمقاولات العامة
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              {t.footer.aboutCompany}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <img
                src="/assets/branding/vision-2030.png"
                alt="Vision 2030"
                className="h-8 w-auto object-contain bg-white/90 p-1 rounded"
              />
              <img
                src="/assets/branding/expo-2030.png"
                alt="Riyadh Expo 2030"
                className="h-8 w-auto object-contain bg-white/90 p-1 rounded"
              />
              <span className="text-[11px] text-slate-400">
                {t.footer.visionDisclaimer}
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer.quickLinks}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-amber-400 transition">
                  {t.nav.home}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition">
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-amber-400 transition">
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-amber-400 transition">
                  {t.nav.fleet}
                </a>
              </li>
              <li>
                <a href="#manpower" className="hover:text-amber-400 transition">
                  {t.nav.manpower}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-400 transition">
                  {t.nav.projects}
                </a>
              </li>
              <li>
                <a href="#clients" className="hover:text-amber-400 transition">
                  {t.nav.clients}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition">
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Core Services Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer.coreServices}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>{lang === 'ar' ? 'أسطول المعدات الثقيلة' : 'Heavy Equipment Fleet'}</li>
              <li>{lang === 'ar' ? 'أعمال الحفر والترنش' : 'Trenching Solutions'}</li>
              <li>{lang === 'ar' ? 'الألياف الضوئية والاتصالات' : 'Optical Fiber Splicing'}</li>
              <li>{lang === 'ar' ? 'أعمال الأسفلت وصيانة الطرق' : 'Asphalt Paving & Milling'}</li>
              <li>{lang === 'ar' ? 'أنظمة المراقبة CCTV' : 'CCTV & Security Networks'}</li>
              <li>{lang === 'ar' ? 'تمديد خطوط وشبكات المياه' : 'Water Excavation & Piping'}</li>
              <li>{lang === 'ar' ? 'توريد العمالة المتخصصة' : 'Manpower Supply'}</li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {t.footer.contactInfo}
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                <span>{t.contact.addressValue}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="tel:+966579421490" className="hover:text-amber-400 transition" dir="ltr">
                  (+966) 57 942 1490
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <a href="mailto:info@superiorksa.com" className="hover:text-amber-400 transition">
                  info@superiorksa.com
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="/assets/Superior_Networks_Company_Profile.pdf"
                  download
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700 font-semibold transition"
                >
                  <FileDown className="w-4 h-4" />
                  <span>{t.nav.downloadProfile}</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Superior Networks Company. {t.footer.rights}</p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition cursor-pointer"
          >
            <span>{lang === 'ar' ? 'العودة للأعلى' : 'Back to Top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

