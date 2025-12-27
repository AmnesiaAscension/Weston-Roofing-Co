
import React from 'react';
import { BUSINESS_DATA } from '../constants';

const ServiceArea: React.FC = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Serving Deer Park & Surrounding Areas</h2>
            <p className="text-gray-600 text-lg mb-8">
              Based at 402 Ivy Ave, we are centrally located to provide rapid response times for all roofing emergencies in the Deer Park area.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <i className="fa-solid fa-location-dot text-blue-600 mr-3"></i>
                <span className="font-semibold">Deer Park</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <i className="fa-solid fa-location-dot text-blue-600 mr-3"></i>
                <span className="font-semibold">Pasadena</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <i className="fa-solid fa-location-dot text-blue-600 mr-3"></i>
                <span className="font-semibold">La Porte</span>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                <i className="fa-solid fa-location-dot text-blue-600 mr-3"></i>
                <span className="font-semibold">Baytown</span>
              </div>
            </div>
            <div className="mt-10 p-6 bg-blue-50 rounded-xl border-l-4 border-blue-600">
              <p className="font-medium text-blue-900 italic">
                "We know Texas weather because we live here. We're your neighbors first, roofers second."
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 w-full h-80 lg:h-[450px] bg-gray-200 rounded-3xl overflow-hidden shadow-2xl relative">
            <img 
              src="https://picsum.photos/id/1015/800/600" 
              alt="Deer Park Area Map" 
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white p-4 rounded-2xl shadow-2xl animate-bounce">
                <i className="fa-solid fa-location-pin text-blue-600 text-4xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
