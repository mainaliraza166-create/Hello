import React, { useState } from 'react';
import { PORTFOLIO, EnhancedPortfolioItem } from '../constants.tsx';
import { TrendingUp, Layers, Tag, ArrowUpRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SEO, trackPixelEvent } from '../utils.tsx';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Digital Marketing', 'Daraz VA'];
  
  const filteredItems = filter === 'All' 
    ? PORTFOLIO 
    : PORTFOLIO.filter(item => item.category === filter);

  return (
    <div className="pt-40 pb-32 bg-[#f8fafc]">
      <SEO title="Portfolio | Proven Growth Results & Case Studies" description="Discover how Ali Raza Digital Solutions helps businesses achieve 5x ROAS and massive Daraz growth." />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary/10 px-4 py-2 rounded-full text-primary text-[10px] font-black mb-6 uppercase tracking-[0.2em]">
            <Layers size={14} className="fill-current" />
            <span>Success Stories that Matter</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-secondary mb-10 tracking-tighter leading-none">
            Growth That Speaks <br className="hidden md:block"/> <span className="text-primary italic">Loud & Clear.</span>
          </h1>
          
          {/* Filter UI */}
          <div className="flex flex-wrap justify-center items-center gap-3 mt-12">
            <div className="flex bg-white p-2 rounded-full shadow-sm border border-slate-100">
               {categories.map(cat => (
                 <button
                    key={cat}
                    onClick={() => {
                      setFilter(cat);
                      trackPixelEvent('ViewContent', { content_name: `Portfolio Filter: ${cat}` });
                    }}
                    className={`px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                      filter === cat 
                        ? 'bg-primary text-white shadow-lg' 
                        : 'text-slate-500 hover:text-primary'
                    }`}
                 >
                   {cat}
                 </button>
               ))}
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item: EnhancedPortfolioItem) => (
            <div 
              key={item.id} 
              className="group flex flex-col bg-white rounded-[4rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-700 border border-slate-50 animate-in fade-in slide-in-from-bottom duration-700"
            >
               {/* Image Container */}
               <div className="relative aspect-[16/11] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  />
                  
                  {/* Category Tag Overlay */}
                  <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md border border-white/30 text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                    {item.category}
                  </div>

                  {/* Stats Badge Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-xl p-6 rounded-[2.5rem] shadow-2xl transform translate-y-2 group-hover:translate-y-0 transition-all duration-700">
                      <div className="flex items-center space-x-3 text-primary mb-1">
                        <TrendingUp size={20} />
                        <span className="text-xl font-black tracking-tight">{item.stats}</span>
                      </div>
                      <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Verified Growth Metric</p>
                    </div>
                  </div>
               </div>

               {/* Content Container */}
               <div className="p-10 flex-grow flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {item.tags.map(tag => (
                      <span key={tag} className="flex items-center space-x-1.5 text-[9px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                        <Tag size={10} />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-black text-secondary mb-4 leading-tight group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-sm font-medium text-slate-500 leading-relaxed mb-8 flex-grow">
                    {item.description}
                  </p>
                  
                  <Link 
                    to="/contact" 
                    onClick={() => trackPixelEvent('ViewContent', { content_name: item.title, content_category: item.category })}
                    className="mt-auto inline-flex items-center justify-between w-full p-6 bg-slate-50 rounded-3xl group/link hover:bg-primary transition-all duration-500"
                  >
                    <span className="text-secondary font-black uppercase tracking-widest text-[10px] group-hover/link:text-white transition-colors">View Case Study</span>
                    <div className="bg-white p-2 rounded-full shadow-md group-hover/link:scale-110 group-hover/link:rotate-45 transition-all">
                      <ArrowUpRight size={18} className="text-primary" />
                    </div>
                  </Link>
               </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-32 text-center">
            <div className="bg-secondary rounded-[4rem] p-12 md:p-20 text-white relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(0,123,255,0.2),transparent)]"></div>
                <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">Your Brand Could Be <span className="text-primary italic">Next.</span></h2>
                <p className="text-lg text-slate-300 font-medium mb-12 max-w-2xl mx-auto">
                  We specialize in taking businesses from zero to seven figures on Daraz and social media. Let's discuss your roadmap today.
                </p>
                <Link 
                  to="/contact" 
                  className="bg-primary text-white px-12 py-6 rounded-full font-black text-xl hover:scale-110 active:scale-95 transition-all shadow-2xl inline-flex items-center space-x-3 group"
                >
                  <span>Start Your Story</span>
                  <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;