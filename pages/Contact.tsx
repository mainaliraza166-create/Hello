import React, { useState, useMemo } from 'react';
import { 
  Mail, 
  ChevronRight, 
  Loader2, 
  Sparkles, 
  Box, 
  Wallet,
  MessageCircle,
  Linkedin,
  ArrowRight,
  ShieldCheck,
  CheckCircle
} from 'lucide-react';
import { SEO, trackPixelEvent } from '../utils.tsx';
import { PRICING_PLANS } from '../constants.tsx';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    serviceCategory: '',
    selectedPackage: '',
    budget: '',
    priority: 'Normal',
    message: '' 
  });

  const budgetOptions = [
    'Below PKR 10,000',
    'PKR 10,000 - 30,000',
    'PKR 30,000 - 70,000',
    'PKR 70,000 - 150,000',
    'PKR 150,000+',
    'Custom / Enterprise'
  ];

  const availablePackages = useMemo(() => {
    const group = PRICING_PLANS.find(p => p.category === formData.serviceCategory);
    return group ? group.items : [];
  }, [formData.serviceCategory]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mlgdlqaa", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        trackPixelEvent('Lead', {
          content_name: 'Strategic Lead Form',
          service: formData.serviceCategory,
          package: formData.selectedPackage,
          budget: formData.budget
        });
        
        setSubmitted(true);
      } else {
        alert("Oops! There was a problem submitting your form. Please try again.");
      }
    } catch (error) {
      alert("Oops! Connection error. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: value,
      ...(name === 'serviceCategory' ? { selectedPackage: '' } : {})
    }));
  };

  const trackDirectContact = (method: string) => {
    trackPixelEvent('Contact', { 
      content_name: 'Direct Contact Post-Submission',
      method: method
    });
  };

  const inputClasses = "w-full px-6 py-4 bg-white/5 border border-white/10 rounded-3xl focus:ring-4 focus:ring-primary/40 focus:border-primary outline-none font-bold transition-all placeholder:text-white/20 text-white backdrop-blur-sm disabled:opacity-50";
  const selectClasses = "w-full px-6 py-4 bg-white/5 border border-white/10 rounded-3xl focus:ring-4 focus:ring-primary/40 focus:border-primary outline-none font-bold transition-all text-white appearance-none cursor-pointer backdrop-blur-sm disabled:opacity-50";
  const textareaClasses = "w-full px-6 py-4 bg-white/5 border border-white/10 rounded-[2.5rem] focus:ring-4 focus:ring-primary/40 focus:border-primary outline-none font-bold transition-all resize-none placeholder:text-white/20 text-white backdrop-blur-sm disabled:opacity-50";

  return (
    <div className="pt-32 pb-24 bg-[#f8fafc] min-h-screen overflow-hidden">
      <SEO 
        title="Contact Us | Start Your Growth Journey with Ali Raza" 
        description="Ready to scale your business? Fill out our strategic intake form to unlock direct contact and a free growth roadmap." 
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">
          
          <div className={`w-full ${submitted ? 'lg:w-1/2' : 'lg:w-3/5'} transition-all duration-700 mx-auto`}>
            {submitted ? (
              <div className="bg-gradient-to-br from-green-600 to-green-800 p-12 md:p-16 rounded-[4rem] text-white shadow-2xl relative overflow-hidden h-full flex flex-col justify-center animate-in fade-in zoom-in duration-500">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <CheckCircle size={80} className="mb-8" />
                <h3 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Inquiry Received!</h3>
                <p className="text-xl opacity-90 mb-10 leading-relaxed font-medium">
                  Thank you, <span className="font-bold">{formData.name}</span>. Your request for <span className="underline">{formData.serviceCategory}</span> has been transmitted. 
                  <br /><br />
                  As a priority client, you now have **Direct Access** to Ali Raza's private contact channels on the right. 
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="bg-white text-green-700 px-10 py-5 rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-xl w-fit"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <div className="bg-secondary p-8 md:p-14 rounded-[4rem] shadow-2xl border border-white/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all duration-1000"></div>
                
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="mb-10">
                    <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tighter">Let's Talk <span className="text-primary italic">Strategy</span></h2>
                    <p className="text-white/40 font-bold uppercase tracking-widest text-[10px]">Complete the form to unlock Ali's direct contact details</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Full Name</label>
                      <input 
                        type="text" name="name" required disabled={isSubmitting}
                        value={formData.name} onChange={handleChange} className={inputClasses} placeholder="Ali Ahmed"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Work Email</label>
                      <input 
                        type="email" name="email" required disabled={isSubmitting}
                        value={formData.email} onChange={handleChange} className={inputClasses} placeholder="hello@brand.pk"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4 flex items-center">
                        <Sparkles size={12} className="mr-2 text-primary" /> Service Required
                      </label>
                      <div className="relative">
                        <select 
                            name="serviceCategory" required disabled={isSubmitting}
                            value={formData.serviceCategory} onChange={handleChange} className={selectClasses}
                        >
                            <option value="" className="bg-secondary">Select Category</option>
                            {PRICING_PLANS.map(plan => (
                              <option key={plan.category} value={plan.category} className="bg-secondary">{plan.category}</option>
                            ))}
                        </select>
                        <ChevronRight size={16} className="absolute right-6 top-1/2 -translate-y-1/2 rotate-90 text-primary pointer-events-none" />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4 flex items-center">
                        <Box size={12} className="mr-2 text-primary" /> Preferred Package
                      </label>
                      <div className="relative">
                        <select 
                            name="selectedPackage" required disabled={isSubmitting || !formData.serviceCategory}
                            value={formData.selectedPackage} onChange={handleChange} 
                            className={`${selectClasses} ${!formData.serviceCategory ? 'opacity-20 grayscale' : ''}`}
                        >
                            <option value="" className="bg-secondary">Pick a Package</option>
                            {availablePackages.map(pkg => (
                              <option key={pkg.title} value={pkg.title} className="bg-secondary">{pkg.title} (PKR {pkg.price})</option>
                            ))}
                        </select>
                        <ChevronRight size={16} className="absolute right-6 top-1/2 -translate-y-1/2 rotate-90 text-primary pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4 flex items-center">
                        <Wallet size={12} className="mr-2 text-primary" /> Monthly Budget
                      </label>
                      <div className="relative">
                        <select 
                            name="budget" required disabled={isSubmitting}
                            value={formData.budget} onChange={handleChange} className={selectClasses}
                        >
                            <option value="" className="bg-secondary">Investment Range</option>
                            {budgetOptions.map(opt => (
                              <option key={opt} value={opt} className="bg-secondary">{opt}</option>
                            ))}
                        </select>
                        <ChevronRight size={16} className="absolute right-6 top-1/2 -translate-y-1/2 rotate-90 text-primary pointer-events-none" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">WhatsApp / Phone</label>
                      <input 
                        type="tel" name="phone" required disabled={isSubmitting}
                        value={formData.phone} onChange={handleChange} className={inputClasses} placeholder="+92 333 4503264"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Brief Project Description</label>
                    <textarea 
                      rows={3} name="message" required disabled={isSubmitting}
                      value={formData.message} onChange={handleChange} className={textareaClasses}
                      placeholder="Tell us about your brand and what you want to achieve..."
                    ></textarea>
                  </div>

                  <button 
                      type="submit" disabled={isSubmitting}
                      className="w-full bg-primary text-white py-6 rounded-3xl font-black text-xl hover:bg-blue-600 transition-all shadow-xl flex items-center justify-center space-x-4 active:scale-95 disabled:opacity-50"
                  >
                      {isSubmitting ? <Loader2 className="animate-spin" /> : <span>Unlock Direct Contact</span>}
                      {!isSubmitting && <ArrowRight size={24} />}
                  </button>
                </form>
              </div>
            )}
          </div>

          <div className={`w-full ${submitted ? 'lg:w-1/2' : 'lg:w-2/5'} transition-all duration-700`}>
             <div className="h-full flex flex-col">
                <div className="mb-12">
                   <h4 className="text-xl font-black text-secondary uppercase tracking-[0.2em] mb-4">Ali Raza's Desk</h4>
                   <p className="text-slate-500 font-medium">Professional support for Daraz Mall brands & high-growth performance campaigns.</p>
                </div>

                <div className="space-y-6 flex-grow">
                   {submitted ? (
                     <div className="grid grid-cols-1 gap-6 animate-in fade-in slide-in-from-bottom duration-700">
                        <a 
                          href="mailto:info@alirazads.site" 
                          onClick={() => trackDirectContact('Email')}
                          className="flex items-center space-x-6 p-8 bg-white rounded-[2.5rem] border-2 border-primary shadow-xl hover:bg-primary hover:text-white transition-all group"
                        >
                           <div className="bg-primary/10 p-4 rounded-2xl text-primary group-hover:bg-white transition-colors">
                              <Mail size={32} />
                           </div>
                           <div>
                              <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Direct Email</p>
                              <p className="text-lg font-black">info@alirazads.site</p>
                           </div>
                        </a>

                        <a 
                          href="https://wa.me/923334503264" target="_blank"
                          onClick={() => trackDirectContact('WhatsApp')}
                          className="flex items-center space-x-6 p-8 bg-white rounded-[2.5rem] border-2 border-green-500 shadow-xl hover:bg-green-500 hover:text-white transition-all group"
                        >
                           <div className="bg-green-500/10 p-4 rounded-2xl text-green-500 group-hover:bg-white transition-colors">
                              <MessageCircle size={32} />
                           </div>
                           <div>
                              <p className="text-[10px] font-black uppercase tracking-widest opacity-60">WhatsApp Priority</p>
                              <p className="text-lg font-black">+92 333 4503264</p>
                           </div>
                        </a>

                        <a 
                          href="https://pk.linkedin.com/in/ali-raza-310056227" target="_blank"
                          onClick={() => trackDirectContact('LinkedIn')}
                          className="flex items-center space-x-6 p-8 bg-white rounded-[2.5rem] border-2 border-[#0077b5] shadow-xl hover:bg-[#0077b5] hover:text-white transition-all group"
                        >
                           <div className="bg-[#0077b5]/10 p-4 rounded-2xl text-[#0077b5] group-hover:bg-white transition-colors">
                              <Linkedin size={32} />
                           </div>
                           <div>
                              <p className="text-[10px] font-black uppercase tracking-widest opacity-60">LinkedIn Profile</p>
                              <p className="text-lg font-black">Ali Raza - Growth Expert</p>
                           </div>
                        </a>
                     </div>
                   ) : (
                     <div className="relative group/lock">
                        <div className="space-y-6 blur-md grayscale opacity-20 pointer-events-none transition-all">
                           <div className="h-24 bg-slate-200 rounded-[2.5rem]"></div>
                           <div className="h-24 bg-slate-200 rounded-[2.5rem]"></div>
                           <div className="h-24 bg-slate-200 rounded-[2.5rem]"></div>
                        </div>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-white/40 backdrop-blur-sm rounded-[3rem] border-2 border-dashed border-slate-300">
                           <div className="bg-secondary text-white p-6 rounded-full mb-6 shadow-2xl">
                              <ShieldCheck size={48} />
                           </div>
                           <h5 className="text-2xl font-black text-secondary mb-3 tracking-tighter">Direct Details Locked</h5>
                           <p className="text-slate-600 font-bold text-sm max-w-[280px]">Fill out the growth intake form to reveal Ali Raza's private contact channels.</p>
                        </div>
                     </div>
                   )}
                </div>

                <div className="mt-12 pt-12 border-t border-slate-200">
                   <div className="flex items-center space-x-4">
                      <div className="flex -space-x-3">
                         {[1,2,3].map(i => (
                           <img key={i} src={`https://i.pravatar.cc/100?u=${i+40}`} className="w-10 h-10 rounded-full border-2 border-white shadow-sm" alt="Client" />
                         ))}
                      </div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Trusted by 500+ Sellers Worldwide</p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;