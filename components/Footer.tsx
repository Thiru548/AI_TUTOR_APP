
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-6 h-6 bg-indigo-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">L</span>
              </div>
              <span className="text-lg font-bold text-gray-900">Lumina AI</span>
            </div>
            <p className="text-sm text-gray-500 max-w-xs">
              Empowering the next generation of learners through personalized artificial intelligence.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-indigo-600">Features</a></li>
              <li><a href="#" className="hover:text-indigo-600">Subjects</a></li>
              <li><a href="#" className="hover:text-indigo-600">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-indigo-600">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-600">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-600">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-600"><span className="sr-only">Twitter</span>𝕏</a>
              <a href="#" className="text-gray-400 hover:text-indigo-600"><span className="sr-only">LinkedIn</span>in</a>
              <a href="#" className="text-gray-400 hover:text-indigo-600"><span className="sr-only">GitHub</span>gh</a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400">© 2024 Lumina Learning Inc. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="text-xs text-gray-400 hover:text-gray-600">Terms of Service</a>
            <a href="#" className="text-xs text-gray-400 hover:text-gray-600">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
