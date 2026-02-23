import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Search, 
  Share2, 
  TrendingUp, 
  ShoppingBag, 
  Settings, 
  BarChart3, 
  Star, 
  Zap, 
  Gift,
  CreditCard
} from 'lucide-react';
import { SERVICES, TESTIMONIALS, TRUST_BADGES } from '../constants.tsx';
import { SEO, trackPixelEvent } from '../utils.tsx';

const Home: React.FC = () => {
  const iconMap: Record<string, any> = {
    Search, Share2, TrendingUp, ShoppingBag, Settings, BarChart3
  };

  return (
    <div className="flex flex-col">
      <SEO 
        title="Ali Raza Digital Solutions | Best Digital Marketing Agency & Daraz VA in Pakistan" 
        description="Expert Digital Marketing Agency in Karachi, Pakistan. Specialized in Daraz VA services, SEO, Meta Ads, and E-commerce growth for high ROI." 
      />
      
      {/* Promotional Banner */}
      <div className="fixed top-0 left-0 w-full z-[60] bg-accent text-white py-2 px-4 text-center overflow-hidden">
        <div className="flex items-center justify-center space-x-3 animate-pulse">
          <Gift size={16} className="fill-current" />
          <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
            Limited Time: <span className="underline decoration-2">30% Off</span> for First 5 Clients
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-secondary">
        <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-primary/10 to-transparent skew-x-12 transform translate-x-1/4"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-in fade-in slide-in-from-left duration-1000">
              <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-primary text-xs font-black mb-8 uppercase tracking-widest">
                <Zap size={14} className="fill-current" />
                <span>Pakistan's Premier Digital Growth Partner</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.95] mb-8 tracking-tighter">
                Scale Faster. <br />
                <span className="text-primary">Sell Smarter.</span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-12 leading-relaxed max-w-xl font-medium">
                Expert-led <strong>Digital Marketing</strong> & <strong>Daraz VA Services</strong> designed to turn your ambition into measurable revenue.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
                <Link 
                  to="/contact" 
                  onClick={() => trackPixelEvent('Lead', { content_name: 'Hero Start Project' })}
                  className="bg-primary text-white px-10 py-5 rounded-full font-black text-center shadow-[0_20px_50px_rgba(0,123,255,0.3)] hover:bg-blue-600 hover:-translate-y-1 transition-all flex items-center justify-center space-x-3 group"
                >
                  <span>Start Your Project</span>
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/pricing" 
                  onClick={() => trackPixelEvent('ViewContent', { content_name: 'Hero View Pricing' })}
                  className="bg-white/5 backdrop-blur-md text-white border border-white/10 px-10 py-5 rounded-full font-black text-center hover:bg-white/10 transition-all flex items-center justify-center space-x-3"
                >
                  <CreditCard size={20} />
                  <span>View Pricing</span>
                </Link>
              </div>
            </div>
            
            <div className="relative hidden lg:block animate-in fade-in zoom-in duration-1000 delay-200">
               <div className="relative z-10 rounded-5xl overflow-hidden shadow-2xl border border-white/10 aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000" 
                    alt="Creative Digital Team Collaboration" 
                    className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-60"></div>
               </div>
               <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-4xl shadow-2xl animate-subtle-float z-20">
                  <div className="flex items-center space-x-4">
                     <div className="bg-primary/10 p-4 rounded-2xl text-primary">
                        <TrendingUp size={32} />
                     </div>
                     <div>
                        <div className="text-4xl font-black text-secondary tracking-tighter">99.8%</div>
                        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">Growth Success Rate</div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Bar */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {TRUST_BADGES.map((badge, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-4 group">
                <div className="bg-slate-50 p-6 rounded-[2.5rem] text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
                  <badge.icon size={32} />
                </div>
                <div>
                  <h4 className="font-black text-secondary text-lg">{badge.label}</h4>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{badge.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4">Our Expertise</div>
            <h2 className="text-4xl md:text-6xl font-black text-secondary mb-6 tracking-tighter">Strategic Solutions for <br/> <span className="text-primary italic">High-Impact</span> Brands</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service, index) => {
              const Icon = iconMap[service.icon];
              const overlays = ["bg-primary/90", "bg-secondary/90", "bg-[#4f46e5]/90"];
              const overlay = overlays[index % overlays.length];
              
              return (
                <div key={service.id} className="group relative h-[500px] rounded-[3.5rem] overflow-hidden transition-all duration-500 hover:-translate-y-4 shadow-xl card-glow-blue">
                  <img src={service.image} alt={service.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className={`absolute inset-0 ${overlay} transition-opacity duration-500`}></div>
                  <div className="relative z-10 p-12 flex flex-col h-full text-white">
                    <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-10 text-white backdrop-blur-md shadow-inner">
                      <Icon size={32} strokeWidth={1.5} />
                    </div>
                    <h3 className="text-3xl font-black mb-6 leading-tight">{service.title}</h3>
                    <p className="text-lg mb-10 font-medium leading-relaxed opacity-90">{service.description}</p>
                    <div className="mt-auto">
                        <Link 
                            to="/services" 
                            className="inline-flex items-center space-x-3 font-black uppercase tracking-widest text-xs py-2 group-hover:translate-x-2 transition-transform"
                        >
                            <span>View Full Strategy</span>
                            <div className="bg-white/20 p-2 rounded-full">
                                <ArrowRight size={16} />
                            </div>
                        </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="text-primary font-black uppercase tracking-[0.4em] text-sm mb-6">Client Love</div>
          <h2 className="text-4xl md:text-6xl font-black mb-20 tracking-tighter">Trusted by Industry <span className="text-primary italic">Giants</span></h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white/5 backdrop-blur-md p-10 rounded-[3.5rem] border border-white/10 text-left hover:border-primary/50 transition-all duration-500 group flex flex-col h-full">
                <div className="flex text-primary mb-8 space-x-1 group-hover:scale-110 transition-transform origin-left">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
                </div>
                <p className="text-xl italic mb-10 leading-relaxed font-medium text-slate-100 flex-grow">"{t.content}"</p>
                <div className="flex items-center space-x-5 pt-8 border-t border-white/10">
                  <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-2xl object-cover ring-4 ring-white/10 group-hover:ring-primary transition-all shadow-2xl" />
                  <div>
                    <h4 className="font-black text-lg">{t.name}</h4>
                    <p className="text-primary text-[10px] font-bold uppercase tracking-[0.2em] mt-1">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-5xl mx-auto px-4 text-center">
            <div className="bg-brandLight p-16 md:p-24 rounded-[4rem] border border-blue-100 shadow-2xl relative overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
                <h2 className="text-5xl md:text-7xl font-black text-secondary mb-10 tracking-tighter leading-none">Ready to Rewrite Your <br/> <span className="text-primary italic">Success Story?</span></h2>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                    <Link 
                      to="/contact" 
                      onClick={() => trackPixelEvent('Schedule', { content_name: 'Home Bottom Talk to Ali Raza' })}
                      className="bg-primary text-white px-12 py-6 rounded-full font-black text-xl shadow-2xl hover:bg-blue-600 hover:scale-110 active:scale-95 transition-all w-full sm:w-auto"
                    >
                        Talk to Ali Raza
                    </Link>
                    <Link 
                      to="/pricing" 
                      onClick={() => trackPixelEvent('ViewContent', { content_name: 'Home Bottom View Pricing' })}
                      className="bg-white text-secondary border-2 border-slate-200 px-12 py-6 rounded-full font-black text-xl hover:border-primary hover:text-primary transition-all flex items-center justify-center space-x-3 w-full sm:w-auto"
                    >
                        <CreditCard size={24} />
                        <span>See Our Packages</span>
                    </Link>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Home;