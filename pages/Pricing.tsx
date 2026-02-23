import React from 'react';
import { PRICING_PLANS } from '../constants.tsx';
import { CheckCircle2, ArrowRight, Zap, Star, Clock, Gift, AlertCircle, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO, trackPixelEvent } from '../utils.tsx';

const PricingCard: React.FC<{ item: any; category: string }> = ({ item, category }) => (
  <div className={`relative bg-white rounded-[3rem] p-8 md:p-10 shadow-sm border transition-all duration-500 flex flex-col group ${
    item.isPopular ? 'border-primary ring-2 ring-primary/20 scale-105 z-10 shadow-2xl' : 'border-slate-100 hover:shadow-xl hover:-translate-y-2'
  }`}>
    {item.isPopular && (
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl flex items-center space-x-2">
        <Star size={12} fill="currentColor" />
        <span>Most Popular Strategy</span>
      </div>
    )}
    
    <div className="mb-8">
      <h3 className="text-2xl font-black text-secondary mb-2">{item.title}</h3>
      <div className="flex items-baseline space-x-2">
        <span className="text-5xl font-black text-primary tracking-tighter">PKR {item.price}</span>
        <span className="text-slate-400 font-bold uppercase text-[10px] tracking-widest">/ Project</span>
      </div>
    </div>

    <ul className="space-y-4 mb-10 flex-grow">
      {item.features.map((feature: string, idx: number) => (
        <li key={idx} className="flex items-start space-x-3 group/li">
          <CheckCircle2 size={18} className="text-primary mt-0.5 flex-shrink-0 group-hover/li:scale-110 transition-transform" />
          <span className="text-sm font-medium text-slate-600 leading-tight">{feature}</span>
        </li>
      ))}
    </ul>

    <Link 
      to="/contact" 
      onClick={() => trackPixelEvent('Lead', { content_name: `Pricing: ${category} - ${item.title}` })}
      className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-widest flex items-center justify-center space-x-3 transition-all ${
        item.isPopular 
          ? 'bg-primary text-white shadow-xl hover:bg-blue-600' 
          : 'bg-secondary text-white hover:bg-black'
      }`}
    >
      <span>Initiate Growth</span>
      <ArrowRight size={16} />
    </Link>
  </div>
);

const Pricing: React.FC = () => {
  return (
    <div className="pt-40 pb-32 bg-[#f8fafc]">
      <SEO 
        title="Pricing Plans | Scalable Digital Marketing & Daraz VA Rates" 
        description="Affordable and ROI-focused pricing for social media management, content creation, and Daraz store scaling in Pakistan." 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24 relative">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full text-primary text-[10px] font-black mb-6 uppercase tracking-[0.2em]">
            <Zap size={14} className="fill-current" />
            <span>Transparent ROI-Based Pricing</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-secondary mb-8 tracking-tighter leading-none">
            Invest in <br className="hidden md:block"/> <span className="text-primary italic">Real Growth.</span>
          </h1>
          <p className="text-xl text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">
            Choose a roadmap that fits your ambition. No hidden fees, just pure data-driven scaling for your brand.
          </p>
        </div>

        {/* PROMOTIONAL BOOK CALL SECTION - HIGH URGENCY */}
        <div className="mb-32 relative">
          <div className="bg-gradient-to-br from-secondary to-black rounded-[4rem] p-10 md:p-20 text-white shadow-2xl overflow-hidden border border-white/10 group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/30 transition-all duration-1000"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="max-w-2xl text-center lg:text-left">
                <div className="inline-flex items-center space-x-2 bg-accent/20 border border-accent/40 px-4 py-1.5 rounded-full text-accent text-[10px] font-black mb-6 uppercase tracking-[0.2em] animate-pulse">
                  <Gift size={12} fill="currentColor" />
                  <span>Limited Daily Priority</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-none">
                  Book a 1-on-1 <br/> <span className="text-primary italic">Strategy Session</span>
                </h2>
                <p className="text-lg md:text-xl text-slate-300 font-medium mb-8 leading-relaxed">
                  Get a dedicated 30-minute growth roadmap session directly with Ali Raza. We'll audit your store or ads and find your "Hidden Gold".
                </p>
                
                <div className="flex flex-wrap justify-center lg:justify-start gap-6">
                  <div className="flex items-center space-x-3 bg-white/5 p-4 rounded-3xl border border-white/10">
                    <Clock className="text-primary" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Duration</p>
                      <p className="text-sm font-bold">30 Minutes</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 bg-white/5 p-4 rounded-3xl border border-white/10">
                    <TrendingUp className="text-primary" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Value</p>
                      <p className="text-sm font-bold">Custom Roadmap</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-xl p-10 rounded-[3.5rem] border border-white/10 text-center w-full max-sm:max-w-none max-w-sm relative">
                {/* Urgent Badge */}
                <div className="absolute -top-6 -right-4 bg-accent text-white p-5 rounded-3xl shadow-2xl rotate-12 font-black text-xs uppercase tracking-tighter flex flex-col items-center border-4 border-black z-20">
                   <span className="text-[10px] opacity-80">DAILY LIMIT</span>
                   <span className="text-3xl leading-none">3</span>
                   <span>SLOTS</span>
                </div>
                
                <div className="mb-8">
                  <p className="text-slate-400 font-black uppercase tracking-widest text-[10px] mb-2">Standard Consultation Fee</p>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl line-through text-slate-500 font-bold opacity-50 mb-1">PKR 1,000</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-6xl font-black text-white tracking-tighter">FREE</span>
                      <span className="bg-primary text-white text-[9px] font-black px-2 py-1 rounded uppercase">NOW</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 mb-10">
                   {/* Realistic urgency tracker */}
                   <div className="relative h-12 bg-white/5 rounded-2xl overflow-hidden flex items-center justify-center border border-white/10">
                      <div className="absolute top-0 left-0 h-full bg-green-500/20 w-[66%]"></div>
                      <div className="relative flex items-center space-x-3 px-4">
                        <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-[0_0_10px_#4ade80]"></div>
                        <span className="text-[10px] font-black text-green-400 uppercase tracking-widest">2 of 3 Free Slots Claimed</span>
                      </div>
                   </div>
                   <p className="text-[10px] text-slate-400 font-bold italic uppercase tracking-widest">Resets in 14 hours</p>
                </div>

                {/* BOOKING BUTTON - Points to the correct Calendly link */}
                <a 
                  href="https://calendly.com/alirazachandyo100/consultation-call"
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => trackPixelEvent('Schedule', { content_name: 'Book Free Session CTA' })}
                  className="w-full bg-primary text-white py-6 rounded-3xl font-black text-xl hover:bg-blue-600 transition-all shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center space-x-3 group/btn"
                >
                  <span>Book Free Session</span>
                  <ArrowRight size={24} className="group-hover/btn:translate-x-2 transition-transform" />
                </a>

                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-center space-x-2 text-slate-500">
                  <AlertCircle size={14} />
                  <span className="text-[9px] font-bold uppercase tracking-widest">Strictly 1 session per business</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {PRICING_PLANS.map((group, idx) => (
          <div key={idx} className="mb-32">
            <div className="flex items-center space-x-6 mb-12">
              <div className="h-px bg-slate-200 flex-grow"></div>
              <h2 className="text-2xl md:text-4xl font-black text-secondary tracking-tighter shrink-0">{group.category}</h2>
              <div className="h-px bg-slate-200 flex-grow"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {group.items.map((item, i) => (
                <PricingCard key={i} item={item} category={group.category} />
              ))}
            </div>
          </div>
        ))}

        {/* Custom Inquiry CTA */}
        <div className="bg-white p-12 md:p-20 rounded-[4rem] text-center shadow-sm border border-slate-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
            <h2 className="text-3xl md:text-5xl font-black text-secondary mb-6 tracking-tighter">Need a Custom Roadmap?</h2>
            <p className="text-lg text-slate-500 font-medium mb-10 max-w-2xl mx-auto">
              If your brand needs a specialized multi-channel approach, we can build a custom package tailored for your specific revenue targets.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center space-x-3 bg-secondary text-white px-10 py-5 rounded-full font-black hover:bg-black transition-all shadow-xl"
            >
              <span>Get a Custom Quote</span>
              <ArrowRight size={20} />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Pricing;