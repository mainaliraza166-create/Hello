import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES } from '../constants.tsx';
import * as Icons from 'lucide-react';
import { SEO, trackPixelEvent } from '../utils.tsx';

const Card: React.FC<{ service: any; index: number; theme: 'blue' | 'navy' | 'indigo' | 'orange' }> = ({ service, index, theme }) => {
  const Icon = (Icons as any)[service.icon];
  
  const themes = {
    blue: { overlay: "bg-primary/90", btn: "bg-white text-primary", hover: "card-glow-blue" },
    navy: { overlay: "bg-secondary/90", btn: "bg-primary text-white", hover: "card-glow-indigo" },
    indigo: { overlay: "bg-[#4f46e5]/90", btn: "bg-white text-[#4f46e5]", hover: "card-glow-indigo" },
    orange: { overlay: "bg-accent/90", btn: "bg-white text-accent", hover: "card-glow-orange" }
  };

  const style = themes[theme];

  return (
    <div id={service.id} className={`group relative flex flex-col h-[550px] rounded-[3.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-4 shadow-xl ${style.hover}`}>
      <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className={`absolute inset-0 ${style.overlay} transition-opacity duration-500`}></div>
      <div className="relative z-10 flex flex-col h-full p-12 text-white">
        <div className="bg-white/20 w-16 h-16 rounded-[1.5rem] flex items-center justify-center mb-10 text-white shadow-inner backdrop-blur-md">
          <Icon size={32} strokeWidth={1.5} />
        </div>
        <h3 className="text-3xl font-black mb-6 text-white leading-tight tracking-tight">{service.title}</h3>
        <p className="text-lg opacity-90 mb-10 leading-relaxed font-medium text-white flex-grow">{service.description}</p>
        <div className="flex flex-col space-y-4">
          <Link 
            to="/contact" 
            onClick={() => trackPixelEvent('Lead', { content_name: `Services Page: ${service.title}` })}
            className={`flex items-center justify-center space-x-3 px-8 py-5 rounded-2xl ${style.btn} font-black transition-all hover:scale-105 shadow-xl`}
          >
            <span>Claim Your Slot</span>
            <Icons.ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const digitalMarketingServices = SERVICES.filter(s => s.category === 'Digital Marketing');
  const darazVAServices = SERVICES.filter(s => s.category === 'Daraz VA');

  useEffect(() => {
    trackPixelEvent('ViewContent', { content_category: 'Services', content_ids: SERVICES.map(s => s.id) });
  }, []);

  return (
    <div className="pt-40 pb-32 bg-white">
      <SEO title="Our Services | SEO, Meta Ads, & Full Daraz Store Management" description="Comprehensive digital services for E-commerce growth in Pakistan." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-32">
          <h1 className="text-5xl md:text-8xl font-black text-secondary mb-10 tracking-tighter leading-none">
            High-Performance <br/> <span className="text-primary italic">Business Scaling</span>
          </h1>
        </div>
        <div className="mb-40">
          <h2 className="text-4xl md:text-6xl font-black text-secondary tracking-tighter mb-20">Digital Marketing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {digitalMarketingServices.map((service, idx) => {
              const themes: ('blue' | 'navy' | 'indigo')[] = ['blue', 'navy', 'indigo'];
              return <Card key={service.id} service={service} index={idx} theme={themes[idx % 3]} />;
            })}
          </div>
        </div>
        <div className="relative">
          <h2 className="text-4xl md:text-6xl font-black text-secondary tracking-tighter mb-20">Daraz Store Mastery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {darazVAServices.map((service, idx) => {
              const themes: ('orange' | 'navy' | 'blue')[] = ['orange', 'navy', 'blue'];
              return <Card key={service.id} service={service} index={idx} theme={themes[idx % 3]} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;