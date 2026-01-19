
import React, { useState, useCallback } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import AuthModal from './components/AuthModal';
import { AuthMode } from './types';

const App: React.FC = () => {
  const [authMode, setAuthMode] = useState<AuthMode>(null);

  const handleOpenAuth = useCallback((mode: AuthMode) => {
    setAuthMode(mode);
    // Prevent scrolling when modal is open
    document.body.style.overflow = mode ? 'hidden' : 'unset';
  }, []);

  const handleCloseAuth = useCallback(() => {
    setAuthMode(null);
    document.body.style.overflow = 'unset';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onOpenAuth={handleOpenAuth} />
      
      <main className="flex-grow">
        <Hero onCtaClick={handleOpenAuth} />
        
        <Features />
        
        {/* Banner Section */}
        <section className="py-20 bg-indigo-600 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="grid grid-cols-6 h-full">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="border border-white"></div>
              ))}
            </div>
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">Ready to reach your full potential?</h2>
            <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
              Get started today with our free trial. No credit card required.
            </p>
            <button 
              onClick={() => handleOpenAuth('signup')}
              className="px-8 py-4 bg-white text-indigo-600 font-bold rounded-2xl hover:bg-gray-50 transition-all shadow-xl active:scale-95"
            >
              Start Free Trial
            </button>
          </div>
        </section>

        <Testimonials />

        {/* FAQ/Simple section could go here */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Stop guessing. Start knowing.</h2>
            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl bg-gray-900 group cursor-pointer relative">
               <img src="https://picsum.photos/id/42/1200/800" alt="Learning Experience" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
               <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                 </div>
               </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <AuthModal 
        mode={authMode} 
        onClose={handleCloseAuth} 
        onSwitchMode={handleOpenAuth} 
      />
    </div>
  );
};

export default App;
