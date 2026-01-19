
import React from 'react';
import { AuthMode } from '../types';

interface NavbarProps {
  onOpenAuth: (mode: AuthMode) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenAuth }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">L</span>
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">Lumina AI</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Features</a>
            <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Success Stories</a>
            <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition-colors">Pricing</a>
          </div>

          <div className="flex items-center space-x-4">
            <button 
              onClick={() => onOpenAuth('login')}
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-indigo-600 transition-colors"
            >
              Log in
            </button>
            <button 
              onClick={() => onOpenAuth('signup')}
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
