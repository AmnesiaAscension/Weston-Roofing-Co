
import React from 'react';
import { BUSINESS_DATA } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-900 p-2 rounded">
              <i className="fa-solid fa-house-chimney text-white text-xl"></i>
            </div>
            <div>
              <span className="text-xl font-bold text-gray-900 uppercase tracking-tighter block leading-none">
                Weston
              </span>
              <span className="text-sm font-semibold text-blue-900 uppercase tracking-widest block">
                Roofing Co
              </span>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6 text-sm font-medium text-gray-600">
              <a href="#services" className="hover:text-blue-900">Services</a>
              <a href="#reviews" className="hover:text-blue-900">Reviews</a>
              <a href="#faq" className="hover:text-blue-900">FAQ</a>
            </nav>
            <a 
              href={`tel:${BUSINESS_DATA.phone}`} 
              className="flex items-center space-x-2 text-blue-900 font-bold hover:text-blue-800 transition-colors"
            >
              <i className="fa-solid fa-phone"></i>
              <span>{BUSINESS_DATA.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
