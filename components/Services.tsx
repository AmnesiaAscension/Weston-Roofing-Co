
import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">Our Roofing Expertise</h2>
          <div className="w-24 h-1.5 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            From minor repairs to complete overhauls, Weston Roofing Co delivers quality craftsmanship to every home in Deer Park.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <div 
              key={idx} 
              className="p-8 bg-gray-50 rounded-2xl border border-gray-100 transition-all hover:bg-white hover:shadow-xl hover:-translate-y-2 group"
            >
              <div className="w-14 h-14 bg-blue-900/10 text-blue-900 rounded-lg flex items-center justify-center text-2xl mb-6 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                <i className={`fa-solid ${service.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
