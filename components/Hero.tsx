
import React from 'react';
import { AuthMode } from '../types';

interface HeroProps {
  onCtaClick: (mode: AuthMode) => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 mb-6">
              <span className="flex h-2 w-2 rounded-full bg-indigo-600"></span>
              <span className="text-xs font-semibold text-indigo-600 uppercase tracking-wider">New: GPT-4o Powered Tutoring</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              The Personal Tutor That <span className="text-indigo-600">Actually Knows You</span>.
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Lumina combines advanced artificial intelligence with cognitive science to provide a learning experience tailored to your brain. Master any subject, faster than ever.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button 
                onClick={() => onCtaClick('signup')}
                className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-white bg-indigo-600 rounded-2xl hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-200 hover:-translate-y-1"
              >
                Start Learning Free
              </button>
              <button 
                className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-gray-700 bg-white border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all"
              >
                Watch Demo
              </button>
            </div>
            <div className="mt-10 flex items-center justify-center lg:justify-start space-x-4 grayscale opacity-60">
              <span className="text-sm font-medium">Used by students from</span>
              <div className="flex space-x-4 font-bold text-xl">
                <span>MIT</span>
                <span>Oxford</span>
                <span>Stanford</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
              <img 
                src="https://picsum.photos/id/1/800/600" 
                alt="Student using Lumina AI" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Abstract background shapes */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse delay-700"></div>
            
            {/* Floating stats card */}
            <div className="absolute -bottom-4 -right-4 md:-right-8 bg-white p-4 rounded-2xl shadow-xl z-20 hidden sm:block border border-gray-100">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-lg">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">42% Faster Mastery</p>
                  <p className="text-xs text-gray-500">Based on user surveys</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
