
import React from 'react';
import { BUSINESS_DATA } from '../constants';

const Offer: React.FC = () => {
  return (
    <section className="py-12 bg-blue-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32"></div>
      <div className="max-w-7xl mx-auto px-4 relative flex flex-col md:flex-row items-center justify-between">
        <div className="mb-8 md:mb-0">
          <h2 className="text-3xl font-extrabold mb-2 uppercase tracking-tight">Summer Storm Protection Special</h2>
          <p className="text-blue-100 text-lg">Get a <span className="text-white font-bold">$250 Credit</span> towards any full roof replacement this month!</p>
        </div>
        <div className="flex flex-col items-center">
          <a 
            href={`tel:${BUSINESS_DATA.phone}`}
            className="bg-white text-blue-900 hover:bg-gray-100 px-10 py-4 rounded-lg font-black uppercase text-xl transition-transform active:scale-95 shadow-lg"
          >
            Claim Offer Now
          </a>
          <span className="text-xs text-blue-200 mt-2">Limited time only. Terms apply.</span>
        </div>
      </div>
    </section>
  );
};

export default Offer;
