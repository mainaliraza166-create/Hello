import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket, ChevronRight } from 'lucide-react';
import { trackPixelEvent } from '../utils.tsx';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ease-out ${
        scrolled 
          ? 'bg-secondary/95 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] py-3' 
          : 'bg-white/95 backdrop-blur-md border-b border-slate-100 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="bg-primary p-2.5 rounded-2xl transition-all duration-300 group-hover:rotate-[15deg] group-hover:scale-110 shadow-[0_10px_20px_rgba(0,123,255,0.3)] text-white">
                <Rocket className="w-6 h-6 fill-current" />
              </div>
              <span className={`text-2xl font-black tracking-tighter transition-colors duration-300 ${
                scrolled ? 'text-white' : 'text-secondary'
              }`}>
                ALI RAZA<span className="text-primary italic">.DS</span>
              </span>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => {
                      if (link.name === 'Contact') trackPixelEvent('Lead', { content_name: 'Navbar Contact Link' });
                    }}
                    className={`relative px-3 py-2 text-sm font-black transition-all duration-300 group ${
                      isActive
                        ? (scrolled ? 'text-primary' : 'text-primary')
                        : (scrolled ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-primary')
                    }`}
                  >
                    {link.name}
                    <span className={`absolute bottom-0 left-3 h-1 bg-primary transition-all duration-300 rounded-full ${
                      isActive ? 'w-[calc(100%-24px)]' : 'w-0 group-hover:w-[calc(100%-24px)]'
                    }`}></span>
                  </Link>
                );
              })}
              
              <div className="ml-4 pl-4 border-l border-slate-200/20 flex items-center space-x-3">
                <Link 
                  to="/contact" 
                  onClick={() => trackPixelEvent('Lead', { content_name: 'Navbar Get Free Audit' })}
                  className={`flex items-center space-x-2 px-6 py-3.5 rounded-full text-[10px] font-black transition-all duration-300 hover:scale-105 active:scale-95 group shadow-xl uppercase tracking-widest ${
                    scrolled 
                      ? 'bg-primary text-white hover:bg-blue-600' 
                      : 'bg-secondary text-white hover:bg-black shadow-slate-200'
                  }`}
                >
                  <span>Get Free Audit</span>
                  <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          <div className="md:hidden flex items-center space-x-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-3 rounded-2xl transition-all duration-300 active:scale-90 ${
                scrolled ? 'text-white hover:bg-white/10' : 'text-secondary hover:bg-slate-100'
              }`}
            >
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute w-full left-0 shadow-2xl transition-all duration-500 overflow-hidden ${
        isOpen ? 'max-h-[600px] border-t' : 'max-h-0'
      } ${
        scrolled ? 'bg-secondary border-white/10' : 'bg-white border-slate-100'
      }`}>
        <div className="px-6 py-10 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => {
                setIsOpen(false);
                if (link.name === 'Contact') trackPixelEvent('Lead', { content_name: 'Mobile Navbar Contact Link' });
              }}
              className={`block px-6 py-5 rounded-3xl text-xl font-black transition-all active:scale-95 ${
                location.pathname === link.path 
                  ? 'bg-primary text-white shadow-xl' 
                  : (scrolled ? 'text-slate-300 hover:bg-white/5' : 'text-slate-700 hover:bg-slate-50')
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;