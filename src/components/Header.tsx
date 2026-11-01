import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { Phone, Mail, MapPin, Menu, X, FileDown, Globe, ChevronRight } from 'lucide-react';

interface HeaderProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenQuote: (service?: string, equipment?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ lang, onToggleLang, onOpenQuote }) => {
  const t = translations[lang];
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#services', label: t.nav.services },
    { href: '#fleet', label: t.nav.fleet },
    { href: '#manpower', label: t.nav.manpower },
    { href: '#projects', label: t.nav.projects },
    { href: '#clients', label: t.nav.clients },
    { href: '#contact', label: t.nav.contact },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Bar */}
      <div className="bg-[#0b1f33] text-slate-300 text-xs border-b border-slate-700/50 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="tel:+966579421490"
              className="flex items-center gap-2 hover:text-amber-400 transition-colors"
              dir="ltr"
            >
              <Phone className="w-3.5 h-3.5 text-amber-500" />
              <span>(+966) 57 942 1490</span>
            </a>
            <a
              href="mailto:info@superiorksa.com"
              className="flex items-center gap-2 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-amber-500" />
              <span>info@superiorksa.com</span>
            </a>
            <div className="flex items-center gap-2 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-amber-500" />
              <span>{lang === 'ar' ? 'طريق مكة المكرمة، الرياض' : 'Makkah Mukarma Road, Riyadh'}</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700 text-[11px] text-amber-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              {lang === 'ar' ? 'رؤية 2030 وإكسبو 2030 الرياض' : 'Vision 2030 & Riyadh Expo 2030'}
            </div>

            <button
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-amber-400 text-xs font-semibold border border-slate-700 transition cursor-pointer"
              aria-label="Toggle language"
            >
              <Globe className="w-3.5 h-3.5" />
              <span>{t.nav.language}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'glass-nav shadow-lg py-2.5 border-b border-slate-200/80'
            : 'bg-white/95 backdrop-blur-md py-3.5 shadow-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo - Only Image Logo (Full with Arabic & English), Text removed */}
          <a
            href="#home"
            className="flex items-center group focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-lg py-0.5"
            aria-label="Superior Networks Company | شركة سوبيريور نتوركس"
          >
            <img
              src="/assets/branding/logo.png"
              alt="Superior Networks Company - شركة سوبيريور نتوركس"
              className="h-11 sm:h-12 md:h-13 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
            />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                className="px-3 py-2 text-sm font-semibold text-slate-700 hover:text-amber-600 rounded-lg hover:bg-amber-50/60 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="/assets/Superior_Networks_Company_Profile.pdf"
              download
              className="hidden xl:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-amber-600 border border-slate-300 rounded-lg hover:border-amber-500 transition"
              title="Download PDF Profile"
            >
              <FileDown className="w-4 h-4 text-amber-500" />
              <span>PDF</span>
            </a>

            <button
              onClick={() => onOpenQuote()}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold text-sm shadow-md shadow-amber-500/20 hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-200 cursor-pointer"
            >
              <span>{t.nav.getQuote}</span>
              <ChevronRight className={`w-4 h-4 ${lang === 'ar' ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onToggleLang}
              className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-300 transition"
              aria-label="Change Language"
            >
              <Globe className="w-3.5 h-3.5 text-amber-600" />
              <span>{t.nav.language}</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-amber-600 hover:bg-slate-100 transition focus:outline-none focus:ring-2 focus:ring-amber-500"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] sm:top-[72px] z-40 bg-slate-900/60 backdrop-blur-sm transition-opacity">
          <div
            className={`fixed inset-y-0 ${
              lang === 'ar' ? 'left-0' : 'right-0'
            } w-full max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto`}
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-4">
                <img
                  src="/assets/branding/logo.png"
                  alt="Superior Networks Company"
                  className="h-10 w-auto object-contain"
                />
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-slate-100 cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col gap-1.5">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(link.href);
                    }}
                    className="flex items-center justify-between px-3.5 py-2.5 text-sm font-semibold text-slate-800 rounded-lg hover:bg-amber-50 hover:text-amber-600 transition"
                  >
                    <span>{link.label}</span>
                    <ChevronRight className={`w-4 h-4 text-slate-400 ${lang === 'ar' ? 'rotate-180' : ''}`} />
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Footer CTAs */}
            <div className="pt-6 border-t border-slate-100 flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-sm text-center shadow-md shadow-amber-500/20"
              >
                {t.nav.getQuote}
              </button>

              <a
                href="tel:+966579421490"
                className="w-full py-2.5 rounded-lg border border-slate-200 hover:border-slate-300 text-slate-800 font-semibold text-xs flex items-center justify-center gap-2"
                dir="ltr"
              >
                <Phone className="w-4 h-4 text-amber-500" />
                <span>(+966) 57 942 1490</span>
              </a>

              <a
                href="/assets/Superior_Networks_Company_Profile.pdf"
                download
                className="w-full py-2.5 rounded-lg bg-slate-100 text-slate-700 font-semibold text-xs flex items-center justify-center gap-2 hover:bg-slate-200 transition"
              >
                <FileDown className="w-4 h-4 text-amber-600" />
                <span>{t.nav.downloadProfile}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

