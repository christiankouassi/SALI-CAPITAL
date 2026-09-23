import React from 'react';
import { translations, Language } from '../translations';
import Logo from './Logo';

interface SaliCommoditiesProps {
  onBack: () => void;
  currentSection?: number;
  onGoToSection?: (index: number) => void;
  lang?: Language;
}

export default function SaliCommodities({ onBack, lang }: SaliCommoditiesProps) {
  const activeLang = lang || 'fr';
  const t = translations[activeLang];

  const sectionPadds = activeLang === 'ar' 
    ? 'lg:pr-[290px] xl:pr-[330px] lg:pl-10 xl:pl-16' 
    : 'lg:pl-[290px] xl:pl-[330px] lg:pr-10 xl:pr-16';

  // Ensure hero animations trigger reliably
  React.useEffect(() => {
    const trigger = () => {
      const activeSec = document.getElementById('commodities-presentation');
      if (activeSec) {
        const elements = activeSec.querySelectorAll('.ae');
        if (elements.length > 0) {
          elements.forEach(el => el.classList.add('vis'));
          return true;
        }
      }
      return false;
    };

    trigger();
    const timers = [10, 30, 80, 150, 300, 600, 1000].map(delay => setTimeout(trigger, delay));
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="absolute inset-0 bg-[#0b0f19] text-white overflow-hidden w-full h-full select-none" dir={activeLang === 'ar' ? 'rtl' : 'ltr'}>
      {/* Slide Transition Wrapper locked to no translation */}
      <div className="w-full h-full">
        {/* PARALLAX SCREEN 0: PRESENTATION OF COMMODITIES (Hero) */}
        <section id="commodities-presentation" className={`relative h-[100dvh] flex items-center justify-center px-[5vw] overflow-hidden ${sectionPadds}`}>
          <div className="absolute inset-0 z-0 bg-[#ebf1f8]">
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=2074" 
              className="w-full h-full object-cover filter brightness-110 contrast-100 opacity-60" 
              alt="Organic produce Sali Commodities" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-[#ebf1f8]/70 backdrop-blur-[6px]" />
          </div>

          <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto py-12">
            <div 
              className="ae ae-pop flex flex-col items-center mb-6"
              data-d="1"
            >
              <Logo 
                variant="commodities" 
                type="icon" 
                className="w-36 h-36 md:w-44 md:h-44 object-contain filter drop-shadow-sm select-none" 
              />
            </div>

            <p 
              className="ae ae-up text-lg md:text-xl lg:text-2xl text-[#1c2c46] font-black tracking-wide leading-relaxed max-w-2xl mb-8"
              data-d="2"
              style={{ textShadow: '0 2px 4px rgba(235, 241, 248, 0.5)' }}
            >
              {activeLang === 'ar' 
                ? "سالي للسلع هي شركة استيراد وتصدير متخصصة في المنتجات الغذائية والمواد الخام." 
                : activeLang === 'en'
                ? "SALI Commodities is an import-export company specialized in agri-food and raw materials."
                : "SALI Commodities, société d’import-export, spécialisée dans l’agro-alimentaire ainsi que les matières premières."}
            </p>

            <div className="ae ae-up flex flex-wrap items-center justify-center gap-4 mt-2" data-d="3">
              <a 
                href="https://sali-commodities.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-[#1d9878] hover:bg-[#157159] text-white px-8 py-3.5 text-[10px] font-bold tracking-[2px] uppercase transition-all shadow-md shadow-[#1d9878]/10 cursor-pointer"
                style={{ clipPath: 'polygon(0 0, calc(100% - 11px) 0, 100% 11px, 100% 100%, 11px 100%, 0 calc(100% - 11px))' }}
              >
                {activeLang === 'ar' ? 'زيارة الموقع' : activeLang === 'en' ? 'Visit Website' : 'Visiter le site'}
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
