import React, { useState } from 'react';
import { Language } from '../types';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQSectionProps {
  lang: Language;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = lang === 'ar' ? [
    {
      q: "ما هي المعدات والآليات الثقيلة المتاحة للتأجير لدى شركة سوبيريور نتوركس؟",
      a: "نوفر أسطولاً متكاملاً يضم أكثر من 75 آلية ثقيلة تغطي 37 فئة، من بينها جرافات كاتر بيلر D8 و D9 المزودة بكسارات صخرية، وحفارات هيدروليكية من 20 إلى 50 طن (CAT 320, CAT 349, Volvo 460)، ومكائن ترنش متخصصة (8 سم، 13 سم، 20 سم)، ومحاريث كابلات صحراوية (Mole Plough)، وتريلات لوبد 60 طن، وفرادات ومداحل أسفلت، وسيارات فان مجهزة بالكامل لمختبرات فحص ولحام الألياف الضوئية.",
    },
    {
      q: "هل توفرون مشغلين وكوادر فنية معتمدة للعمل في المشاريع؟",
      a: "نعم، تضم قوتنا العاملة أكثر من 115 كادراً متخصصاً يشمل مشغلي جرافات وحفارات معتمدين، وفنيي لحام واختبار ألياف ضوئية (Splicers)، ومهندسي مواقع، ومراقبي سلامة وصحة مهنية (HSE)، وجميعهم حاصلون على رخص مهنية ونظامية كاملة وفق أنظمة وزارة الموارد البشرية بالمملكة.",
    },
    {
      q: "أين يقع مقر الشركة وهل تقدمون خدماتكم في كافة مناطق المملكة؟",
      a: "يقع مقرنا الرئيسي في طريق مكة المكرمة بالعاصمة الرياض، ونمتلك أسطول ناقلات ثقيلة يمكننا من سرعة الانتشار والتحرك لتنفيذ المشاريع في جميع مناطق المملكة، بما في ذلك المنطقة الشرقية، والمنطقة الغربية، ومواقع نيوم والمشاريع الكبرى.",
    },
    {
      q: "ما هي خدمات البنية التحتية لشبكات الألياف الضوئية التي تنفذونها؟",
      a: "نقدم حلولاً متكاملة تشمل الحفر الميكروي (Micro-trenching)، وتمديد مواسير HDPE، ونفخ وسحب الكابلات، ولحام الألياف بمحاذاة النواة (Core Alignment)، واختبارات قياس الفقد والانعكاس بجهاز OTDR، بالإضافة إلى تجهيز غرف الربط وكبائن التوزيع لمزودي الاتصالات المعتمدين مثل STC وتوال وعلم.",
    },
    {
      q: "كيف يمكنني طلب تسعيرة فورية أو استئجار معدات لمشروع؟",
      a: "يمكنك تقديم طلب التسعيرة مباشرة عبر النموذج الإلكتروني في الموقع، أو التواصل الفوري عبر الواتساب على الرقم (+966) 57 942 1490 أو عبر البريد الإلكتروني info@superiorksa.com، وسيقوم فريق العمليات الهندسية بدراسة المتطلبات والرد خلال وقت قياسي.",
    },
  ] : [
    {
      q: "What heavy equipment and machinery does Superior Networks supply in Saudi Arabia?",
      a: "We maintain an extensive modern fleet of over 75+ units across 37 specialized categories. This includes Caterpillar D8 and D9 rock ripper bulldozers, 20 to 50-ton hydraulic excavators (CAT 320, CAT 349, Volvo 460), specialized trenchers (8cm, 13cm, 20cm), desert mole ploughs, 60-ton lowbed trailers, asphalt pavers, vibratory compactors, and fully equipped telecom splicing vans.",
    },
    {
      q: "Does Superior Networks provide certified operators and technical manpower?",
      a: "Yes. Our on-duty workforce exceeds 115+ certified professionals including heavy machinery operators, master fiber fusion splicers, site civil engineers, HSE foremen, and project managers. All personnel are trained to stringent safety standards and are fully compliant with Saudi labor regulations.",
    },
    {
      q: "Where is the company located and which regions do you serve?",
      a: "Our headquarters are strategically located on Makkah Mukarma Road in Riyadh, Saudi Arabia. With our fleet of 60-ton heavy haulage lowbeds and mobile support tankers, we mobilize teams and equipment across all regions of the Kingdom, including the Eastern Province, Western Region, and mega-project corridors.",
    },
    {
      q: "What telecommunication and optical fiber services do you execute?",
      a: "We provide complete turnkey fiber infrastructure services including microtrenching, HDPE duct installation, cable blowing and pulling, precision core-alignment fusion splicing, bi-directional OTDR loss testing, and outdoor cabinet distribution works. We have extensive experience with major operators like STC and TAWAL.",
    },
    {
      q: "How can I request a quotation or check equipment availability for a project?",
      a: "You can submit an RFQ directly through our online quotation form, message our engineering dispatch directly on WhatsApp at (+966) 57 942 1490, or email info@superiorksa.com for immediate review and competitive proposal generation.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-100/70 border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-700 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-amber-600" />
            {lang === 'ar' ? 'الأسئلة الشائعة' : 'Frequently Asked Questions'}
          </span>
          <h2 className="text-3xl font-extrabold text-[#0d2b45] tracking-tight">
            {lang === 'ar' ? 'كل ما تود معرفته عن خدماتنا وأسطولنا' : 'Everything You Need to Know About Our Capabilities'}
          </h2>
          <p className="mt-3 text-sm text-slate-600">
            {lang === 'ar'
              ? 'إجابات وافية حول استئجار المعدات، وتوريد العمالة، وأعمال الألياف الضوئية وحفريات البنية التحتية.'
              : 'Detailed answers about equipment rental, certified manpower supply, optical fiber networks, and civil works.'}
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full py-4.5 px-5 sm:px-6 flex items-center justify-between text-start cursor-pointer hover:bg-slate-50/80 transition"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#0d2b45] pe-4 leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 bg-amber-50 text-amber-600' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100/80 animate-in fade-in duration-200">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
