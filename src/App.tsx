import React, { useState, useEffect } from 'react';
import { Language } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ServicesSection } from './components/ServicesSection';
import { FleetSection } from './components/FleetSection';
import { ManpowerSection } from './components/ManpowerSection';
import { GallerySection } from './components/GallerySection';
import { ClientsSection } from './components/ClientsSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileQuickBar } from './components/MobileQuickBar';
import { QuoteModal } from './components/QuoteModal';

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);
  const [selectedEquipment, setSelectedEquipment] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Update HTML dir, lang, title and description dynamically for SEO & localization
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;

    if (lang === 'ar') {
      document.title = "شركة سوبيريور نتوركس | مقاولات عامة وأسطول معدات ثقيلة وألياف ضوئية - الرياض، المملكة العربية السعودية";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'شركة سوبيريور نتوركس للمقاولات العامة في الرياض - حلول متكاملة لأسطول المعدات الثقيلة، أعمال الترنش والحفر، تمديد ولحام الألياف الضوئية، وأعمال الأسفلت والبنية التحتية مواكبة لرؤية المملكة 2030.'
        );
      }
    } else {
      document.title = "Superior Networks Company | General Contracting & Heavy Equipment Fleet - Riyadh, Saudi Arabia";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute(
          'content',
          'Superior Networks Company (شركة سوبيريور نتوركس) is a leading Saudi general contracting company based in Riyadh. Specializing in heavy machinery fleet rental (CAT D9, excavators), trenching, optical fiber splicing, asphalt paving, and civil infrastructure aligned with Saudi Vision 2030.'
        );
      }
    }
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'ar' : 'en'));
  };

  const handleOpenQuote = (service?: string, equipment?: string) => {
    setSelectedService(service);
    setSelectedEquipment(equipment);
    setQuoteModalOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    handleOpenQuote(serviceName, undefined);
  };

  const handleSelectEquipment = (equipmentName: string) => {
    handleOpenQuote(undefined, equipmentName);
  };

  const scrollToFleet = () => {
    const el = document.getElementById('fleet');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans transition-colors duration-200">
      {/* Header */}
      <Header
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          lang={lang}
          onOpenQuote={() => handleOpenQuote()}
          onExploreFleet={scrollToFleet}
        />

        {/* About Us & Vision 2030 */}
        <About lang={lang} />

        {/* Core Services Breakdown */}
        <ServicesSection
          lang={lang}
          onSelectService={handleSelectService}
        />

        {/* Heavy Machinery Fleet Catalog */}
        <FleetSection
          lang={lang}
          onSelectEquipment={handleSelectEquipment}
        />

        {/* Project-Based Manpower & Material */}
        <ManpowerSection
          lang={lang}
          onOpenQuote={handleOpenQuote}
        />

        {/* Project Photo Gallery & Lightbox */}
        <GallerySection lang={lang} />

        {/* Clients & Strategic Partners */}
        <ClientsSection lang={lang} />

        {/* SEO FAQ Section */}
        <FAQSection lang={lang} />

        {/* Contact Us, RFQ Form & Google Map */}
        <ContactSection
          lang={lang}
          preselectedService={selectedService}
          preselectedEquipment={selectedEquipment}
        />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Mobile Sticky Quick Action Bar */}
      <MobileQuickBar
        lang={lang}
        onOpenQuote={() => handleOpenQuote()}
        onToggleLang={toggleLanguage}
      />

      {/* Interactive Quotation Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        lang={lang}
        initialService={selectedService}
        initialEquipment={selectedEquipment}
      />
    </div>
  );
};

export default App;

