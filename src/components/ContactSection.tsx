import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { servicesData } from '../data/services';
import { fleetData } from '../data/fleet';
import { submitContactForm, generateWhatsAppLink } from '../services/contactService';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  FileDown,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';

interface ContactSectionProps {
  lang: Language;
  preselectedService?: string;
  preselectedEquipment?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  lang,
  preselectedService,
  preselectedEquipment,
}) => {
  const t = translations[lang];

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: preselectedService || '',
    equipment: preselectedEquipment || '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync if preselected props change
  React.useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({ ...prev, service: preselectedService }));
    }
  }, [preselectedService]);

  React.useEffect(() => {
    if (preselectedEquipment) {
      setFormData((prev) => ({ ...prev, equipment: preselectedEquipment }));
    }
  }, [preselectedEquipment]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitContactForm(formData);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }
  };

  const handleSendWhatsApp = () => {
    const url = generateWhatsAppLink(formData);
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-700 mb-3">
            {t.contact.sectionBadge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2b45] tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Info Cards & Map */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact details card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-sm space-y-6">
              <h3 className="text-xl font-bold text-[#0d2b45] border-b border-slate-100 pb-4">
                {lang === 'ar' ? 'معلومات التواصل الرسمية' : 'Headquarters & Inquiries'}
              </h3>

              <div className="space-y-5">
                {/* Phone */}
                <a
                  href="tel:+966579421490"
                  className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 transition group"
                  dir="ltr"
                >
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">{t.contact.phone}</span>
                    <span className="text-base font-bold text-[#0d2b45] group-hover:text-amber-600 transition">
                      (+966) 57 942 1490
                    </span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@superiorksa.com"
                  className="flex items-start gap-4 p-3 rounded-2xl hover:bg-slate-50 transition group"
                >
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0 group-hover:bg-amber-500 group-hover:text-white transition">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">{t.contact.email}</span>
                    <span className="text-base font-bold text-[#0d2b45] group-hover:text-amber-600 transition">
                      info@superiorksa.com
                    </span>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start gap-4 p-3 rounded-2xl">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">{t.contact.address}</span>
                    <span className="text-sm font-bold text-[#0d2b45] leading-snug">
                      {t.contact.addressValue}
                    </span>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="flex items-start gap-4 p-3 rounded-2xl">
                  <div className="w-11 h-11 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-400 block">{t.contact.hours}</span>
                    <span className="text-xs font-semibold text-slate-700">
                      {t.contact.hoursValue}
                    </span>
                  </div>
                </div>
              </div>

              {/* PDF Profile Download Button */}
              <div className="pt-4 border-t border-slate-100">
                <a
                  href="/assets/Superior_Networks_Company_Profile.pdf"
                  download
                  className="w-full py-3.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 transition shadow"
                >
                  <FileDown className="w-4 h-4 text-amber-400" />
                  <span>{t.nav.downloadProfile}</span>
                </a>
              </div>
            </div>

            {/* Embedded Google Map (Riyadh Makkah Mukarma Road) */}
            <div className="bg-white rounded-3xl p-3 border border-slate-200/90 shadow-sm overflow-hidden">
              <div className="rounded-2xl overflow-hidden h-64 border border-slate-100">
                <iframe
                  title="Superior Networks Company Location - Makkah Mukarma Road, Riyadh"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115993.47355153868!2d46.637500599999995!3d24.6937194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f03890d48939b%3A0x7d6a5e1975e1f0e4!2sMakkah%20Al%20Mukarramah%20Branch%20Rd%2C%20Riyadh%20Saudi%20Arabia!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive RFQ Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl relative overflow-hidden">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                  {lang === 'ar' ? 'طلب تسعيرة رسمية' : 'Official Quotation Request'}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0d2b45] mb-2">
                {t.contact.formTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                {t.contact.formSubtitle}
              </p>

              {isSubmitted ? (
                <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-900">{t.contact.successTitle}</h4>
                  <p className="text-sm text-emerald-700 max-w-md mx-auto">{t.contact.successMsg}</p>
                  
                  <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                    <button
                      onClick={handleSendWhatsApp}
                      className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{t.contact.whatsappBtn}</span>
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-5 py-2.5 rounded-xl bg-white border border-slate-300 text-slate-700 font-bold text-xs sm:text-sm hover:bg-slate-50"
                    >
                      {t.contact.sendAnother}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        {t.contact.fullName} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={t.contact.fullNamePlaceholder}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        {t.contact.company}
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder={t.contact.companyPlaceholder}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        {t.contact.phoneField} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={t.contact.phonePlaceholder}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition"
                        dir="ltr"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        {t.contact.emailField} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={t.contact.emailPlaceholder}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Service Selector */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        {t.contact.serviceField}
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-amber-500 focus:bg-white transition"
                      >
                        <option value="">{t.contact.serviceSelectPlaceholder}</option>
                        {servicesData.map((s) => (
                          <option key={s.id} value={lang === 'ar' ? s.titleAr : s.titleEn}>
                            {lang === 'ar' ? s.titleAr : s.titleEn}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Equipment Selector */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        {t.contact.equipmentField}
                      </label>
                      <select
                        value={formData.equipment}
                        onChange={(e) => setFormData({ ...formData, equipment: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:border-amber-500 focus:bg-white transition"
                      >
                        <option value="">{t.contact.equipmentSelectPlaceholder}</option>
                        {fleetData.map((f) => (
                          <option key={f.id} value={lang === 'ar' ? f.nameAr : f.nameEn}>
                            #{f.id} {lang === 'ar' ? f.nameAr : f.nameEn} ({f.quantity} {t.fleet.units})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      {t.contact.message}
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={t.contact.messagePlaceholder}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:bg-white transition resize-none"
                    ></textarea>
                  </div>

                  {/* Submit buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-sm shadow-md shadow-amber-500/20 hover:shadow-lg transition flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      <Send className="w-4 h-4" />
                      <span>{isSubmitting ? t.contact.submitting : t.contact.submitBtn}</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleSendWhatsApp}
                      className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md shadow-emerald-600/20 transition flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{t.contact.whatsappBtn}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

