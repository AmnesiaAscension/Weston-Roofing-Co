
import React from 'react';
import { BUSINESS_DATA } from '../constants';

const StickyCTA: React.FC = () => {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t p-3 flex shadow-[0_-5px_15px_rgba(0,0,0,0.1)]">
      <a 
        href={`tel:${BUSINESS_DATA.phone}`}
        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-3 transition-transform active:scale-95"
      >
        <i className="fa-solid fa-phone text-xl animate-bounce"></i>
        <span className="text-lg uppercase">Call Now</span>
      </a>
      <a 
        href="#contact"
        className="ml-3 w-16 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-xl flex items-center justify-center transition-transform active:scale-95"
      >
        <i className="fa-solid fa-calendar-check text-xl"></i>
      </a>
    </div>
  );
};

export default StickyCTA;
