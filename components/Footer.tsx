import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Loader2, CheckCircle } from 'lucide-react';
import { trackPixelEvent } from '../utils.tsx';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    try {
      const response = await fetch("https://formspree.io/f/mqealrwg", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('success');
        setEmail('');
        trackPixelEvent('CompleteRegistration', { content_name: 'Newsletter Subscription' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-2xl font-bold mb-6">Ali Raza<span className="text-primary">.DS</span></h3>
            <p className="text-gray-400 mb-6">
              Empowering businesses through digital excellence and specialized Daraz virtual assistant solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
              <a href="https://pk.linkedin.com/in/ali-raza-310056227" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary" />
                <span className="break-all text-xs">info@alirazads.site</span>
              </li>
              <li className="flex items-center space-x-3">
                <a 
                  href="https://wa.me/923334503264" 
                  onClick={() => trackPixelEvent('Lead', { content_name: 'Footer WhatsApp/Call' })}
                  className="flex items-center space-x-3 hover:text-white transition-colors"
                >
                  <Phone size={18} className="text-primary" />
                  <span>+92 333 4503264</span>
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={18} className="text-primary" />
                <span>Karachi, Sindh, Pakistan</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to get latest updates and marketing tips.</p>
            {status === 'success' ? (
              <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-xl flex items-center space-x-3 text-green-400 animate-in fade-in zoom-in duration-300">
                <CheckCircle size={20} />
                <span className="text-xs font-bold uppercase tracking-widest">Subscription Active!</span>
              </div>
            ) : (
              <form className="flex flex-col space-y-2" onSubmit={handleSubscribe}>
                <input 
                  type="email" 
                  required
                  placeholder="Email Address" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading'}
                  className="bg-gray-800 border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary text-white text-sm placeholder:text-gray-500 disabled:opacity-50"
                />
                <button 
                  type="submit"
                  disabled={status === 'loading'}
                  className="bg-primary hover:bg-blue-600 text-white font-black py-3 px-4 rounded-xl transition-all active:scale-95 flex items-center justify-center space-x-2 disabled:opacity-70 disabled:cursor-not-allowed uppercase tracking-widest text-xs"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Syncing...</span>
                    </>
                  ) : (
                    <span>Subscribe Now</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Ali Raza Digital Solutions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;