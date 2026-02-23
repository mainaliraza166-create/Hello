import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import AIConsultant from './components/AIConsultant.tsx';
import { trackPixelEvent } from './utils.tsx';

// Pages
import Home from './pages/Home.tsx';
import About from './pages/About.tsx';
import Services from './pages/Services.tsx';
import Portfolio from './pages/Portfolio.tsx';
import Pricing from './pages/Pricing.tsx';
import Contact from './pages/Contact.tsx';

// Scroll to top and track PageView on route change
const RouteTracker = () => {
  const location = useLocation();
  
  React.useEffect(() => {
    // Scroll to top
    window.scrollTo(0, 0);
    
    // Track PageView on every route change for SPA compatibility
    trackPixelEvent('PageView');
  }, [location.pathname]);
  
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
        <RouteTracker />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
        <AIConsultant />
        <Footer />
      </div>
    </Router>
  );
};

export default App;