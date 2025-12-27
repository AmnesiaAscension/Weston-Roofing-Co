
import React from 'react';
import { BUSINESS_DATA } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=1920&auto=format&fit=crop" 
          alt="Roofing background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center bg-blue-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
            Open & Serving Deer Park
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Professional Roofing Services in <span className="text-blue-400">{BUSINESS_DATA.city}, TX</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-lg leading-relaxed">
            Reliable roof repairs, replacements, and storm damage inspections you can trust. Local, insured, and ready to protect your home.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a 
              href={`tel:${BUSINESS_DATA.phone}`}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center transition-all transform hover:-translate-y-1 shadow-lg"
            >
              <i className="fa-solid fa-phone mr-3"></i>
              Call Now: {BUSINESS_DATA.phone}
            </a>
            <a 
              href="#contact"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-bold text-lg flex items-center justify-center transition-all shadow-md"
            >
              Get Free Estimate
            </a>
          </div>
          
          <div className="mt-8 flex items-center space-x-6 text-sm text-gray-300">
            <div className="flex items-center">
              <i className="fa-solid fa-check text-green-400 mr-2"></i>
              Free Inspections
            </div>
            <div className="flex items-center">
              <i className="fa-solid fa-check text-green-400 mr-2"></i>
              Licensed & Insured
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
