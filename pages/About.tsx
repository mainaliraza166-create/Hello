import React from 'react';
import { 
  Target, 
  Eye, 
  Rocket, 
  ShieldCheck, 
  CheckCircle, 
  Award, 
  Users, 
  TrendingUp, 
  Briefcase, 
  Zap,
  Globe,
  Star,
  BarChart3,
  ArrowRight,
  BadgeCheck,
  Quote,
  Check
} from 'lucide-react';
import { SEO, trackPixelEvent } from '../utils.tsx';

const StatCard = ({ icon: Icon, value, label }: { icon: any, value: string, label: string }) => (
  <div className="bg-white p-8 rounded-[3rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
    <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
      <Icon size={32} />
    </div>
    <div className="text-4xl font-black text-secondary tracking-tighter mb-2">{value}</div>
    <div className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">{label}</div>
  </div>
);

const About: React.FC = () => {
  // Using the Thumbnail Proxy with the new ID: 1pb_aDjQ-hVPwkQDd6TejgZuVtIvxY9AJ
  const founderImageUrl = "https://drive.google.com/thumbnail?id=1pb_aDjQ-hVPwkQDd6TejgZuVtIvxY9AJ&sz=w1000";

  return (
    <div className="pt-32 pb-24 bg-white overflow-hidden">
      <SEO 
        title="About Ali Raza | Visionary Digital Marketing & Daraz Expert" 
        description="Discover the journey of Ali Raza, the founder of Ali Raza Digital Solutions. Specialized experience scaling E-commerce brands and Daraz stores in Pakistan and beyond." 
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section - Premium Founder Profile */}
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-24 mb-40">
          <div className="flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-1.5 rounded-full text-primary text-[10px] font-black mb-8 uppercase tracking-[0.2em]">
                <Zap size={14} className="fill-current" />
                <span>Meet The Founder</span>
            </div>
            <h1 className="text-6xl md:text-[5.5rem] font-black text-secondary mb-8 tracking-tighter leading-[0.85]">
              Ali <span className="text-primary italic">Raza.</span>
            </h1>
            <p className="text-2xl font-bold text-slate-400 mb-8 tracking-tight uppercase">Founder & Chief Growth Officer</p>
            
            <div className="relative mb-12">
               <Quote className="absolute -left-8 -top-8 text-primary/10 w-16 h-16" />
               <p className="text-xl text-slate-600 font-medium leading-relaxed max-w-xl italic relative z-10">
                "I don't just sell services; I build high-performance digital engines for brands. My goal is to bridge the gap between business vision and technical mastery."
               </p>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
               <div className="flex items-center space-x-2 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100 shadow-sm">
                  <CheckCircle size={18} className="text-green-500" />
                  <span className="text-sm font-black text-secondary">3+ Years Experience</span>
               </div>
               <div className="flex items-center space-x-2 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-100 shadow-sm">
                  <CheckCircle size={18} className="text-green-500" />
                  <span className="text-sm font-black text-secondary">Daraz Mall Expert</span>
               </div>
            </div>

            <a 
                href="https://calendly.com/alirazachandyo100/consultation-call" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackPixelEvent('Schedule', { content_name: 'About Page Hero CTA' })}
                className="inline-flex items-center space-x-4 bg-secondary text-white px-10 py-5 rounded-3xl font-black text-lg hover:bg-primary hover:scale-105 transition-all shadow-2xl group"
            >
                <span>Book Strategy Session</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </a>
          </div>

          <div className="flex-1 relative w-full order-1 lg:order-2">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Decorative backgrounds */}
              <div className="absolute -inset-10 bg-primary/5 rounded-[6rem] blur-3xl"></div>
              
              {/* Main Portrait Frame */}
              <div className="relative">
                {/* Accent border frame */}
                <div className="absolute -top-6 -left-6 -bottom-6 -right-6 border-2 border-slate-100 rounded-[5rem] pointer-events-none"></div>
                
                <div className="relative rounded-[4.5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.15)] bg-slate-100 group">
                    <img 
                      src={founderImageUrl} 
                      alt="Ali Raza - Digital Marketing Expert" 
                      className="w-full aspect-[4/5] object-cover hover:scale-[1.05] transition-all duration-1000 ease-out"
                      referrerPolicy="no-referrer"
                      loading="eager"
                      onError={(e) => {
                        console.error("Primary image load failed, attempting secondary proxy...");
                        // Try secondary LH3 proxy if thumbnail fails
                        const target = e.target as HTMLImageElement;
                        if (!target.src.includes('lh3.googleusercontent.com')) {
                          target.src = "https://lh3.googleusercontent.com/d/1pb_aDjQ-hVPwkQDd6TejgZuVtIvxY9AJ";
                        } else {
                          target.src = "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1000";
                        }
                      }}
                    />
                    
                    {/* Founder Credentials Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-secondary/95 via-secondary/40 to-transparent text-white">
                        <div className="flex items-center space-x-3 mb-2">
                           <BadgeCheck size={20} className="text-primary fill-primary/20" />
                           <span className="text-[10px] font-black uppercase tracking-[0.3em] text-primary">Verified Founder</span>
                        </div>
                        <h3 className="text-4xl font-black tracking-tighter mb-1">Ali Raza</h3>
                        <p className="text-slate-300 font-medium text-sm">Growth Architect & E-commerce Consultant</p>
                    </div>
                </div>

                {/* Floating Experience Badge */}
                <div className="absolute -bottom-8 -right-8 bg-white p-8 rounded-4xl shadow-2xl animate-subtle-float border border-slate-50 z-20">
                    <div className="flex items-center space-x-4">
                        <div className="bg-primary p-4 rounded-2xl text-white shadow-[0_10px_20px_rgba(0,123,255,0.4)]">
                            <Award size={32} />
                        </div>
                        <div>
                            <div className="text-3xl font-black text-secondary tracking-tighter">100%</div>
                            <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Client Satisfaction</div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
           <StatCard icon={TrendingUp} value="10M+" label="Revenue Managed (PKR)" />
           <StatCard icon={Users} value="50+" label="Brands Scaled" />
           <StatCard icon={Briefcase} value="3+" label="Years Industry Leadership" />
           <StatCard icon={Globe} value="5+" label="Markets Covered" />
        </div>

        {/* Core Narrative Section */}
        <div className="grid lg:grid-cols-2 gap-24 items-start mb-40">
           <div>
              <div className="inline-flex items-center space-x-2 bg-blue-50 px-4 py-1 rounded-full text-primary text-[10px] font-black mb-6 uppercase tracking-widest">
                 <span>My Story</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tighter mb-10 leading-none">The Vision Behind <span className="text-primary italic">The Agency.</span></h2>
              <div className="space-y-8 text-lg text-slate-600 font-medium leading-relaxed">
                 <p>
                    Ali Raza Digital Solutions was born out of a simple observation: most businesses have great products but lack the strategic digital execution to reach their true potential in the Pakistani market.
                 </p>
                 <p>
                    By specializing in the <strong>Daraz ecosystem</strong> and <strong>Performance Marketing</strong>, I provide a comprehensive service that covers everything from technical account onboarding to high-conversion advertising.
                 </p>
                 
                 <div className="bg-secondary p-12 rounded-[4rem] text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-8 opacity-5">
                       <ShieldCheck size={120} />
                    </div>
                    <h4 className="text-2xl font-black mb-6 flex items-center">
                       <Star className="mr-3 text-primary fill-current" /> My Promise To You
                    </h4>
                    <ul className="space-y-5 text-slate-300">
                       <li className="flex items-start">
                          <div className="mt-1 bg-primary/20 p-1.5 rounded-lg mr-4">
                             <Check size={14} className="text-primary" />
                          </div>
                          <span><strong>Precision Execution:</strong> Data-driven decisions based on live market audits.</span>
                       </li>
                       <li className="flex items-start">
                          <div className="mt-1 bg-primary/20 p-1.5 rounded-lg mr-4">
                             <Check size={14} className="text-primary" />
                          </div>
                          <span><strong>Direct Access:</strong> I personally consult on every high-level strategy to ensure quality.</span>
                       </li>
                       <li className="flex items-start">
                          <div className="mt-1 bg-primary/20 p-1.5 rounded-lg mr-4">
                             <Check size={14} className="text-primary" />
                          </div>
                          <span><strong>Scalable ROI:</strong> Our primary focus is always on your bottom-line profitability.</span>
                       </li>
                    </ul>
                 </div>
              </div>
           </div>

           <div className="space-y-12 lg:pt-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                 {[
                    { title: "Integrity First", desc: "Honest communication and realistic projections for every campaign.", icon: Eye },
                    { title: "Data Precision", desc: "Advanced tracking and optimization for maximum conversion rates.", icon: Target },
                    { title: "Agile Growth", desc: "Rapid adaptation to the ever-changing digital landscape.", icon: Rocket },
                    { title: "Dedicated Support", desc: "We treat your business with the same priority as our own.", icon: BarChart3 }
                 ].map((v, i) => (
                    <div key={i} className="flex flex-col p-8 rounded-[3rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all group">
                       <div className="bg-white w-14 h-14 rounded-2xl flex items-center justify-center text-primary shadow-sm mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                          <v.icon size={24} />
                       </div>
                       <h4 className="text-xl font-black text-secondary mb-3">{v.title}</h4>
                       <p className="text-slate-500 font-medium text-sm leading-relaxed">{v.desc}</p>
                    </div>
                 ))}
              </div>
           </div>
        </div>

        {/* Closing High-Authority CTA */}
        <div className="bg-primary rounded-[5rem] p-16 md:p-32 text-center text-white relative overflow-hidden shadow-[0_50px_100px_rgba(0,123,255,0.3)]">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
           <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-5xl md:text-[6rem] font-black mb-10 tracking-tighter leading-[0.85]">Ready to Build Your <br/> <span className="italic opacity-80">Success Story?</span></h2>
              <p className="text-xl md:text-2xl opacity-90 mb-14 font-medium max-w-2xl mx-auto">
                Join the ranks of top-performing Daraz sellers and digital brands. Let's design your growth roadmap today.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6">
                 <a 
                    href="https://calendly.com/alirazachandyo100/consultation-call" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-primary px-14 py-7 rounded-full font-black text-xl hover:scale-110 hover:shadow-2xl active:scale-95 transition-all inline-flex items-center justify-center space-x-4"
                 >
                    <span>Scale Your Brand</span>
                    <ArrowRight size={24} />
                 </a>
              </div>
           </div>
        </div>

      </div>
    </div>
  );
};

export default About;