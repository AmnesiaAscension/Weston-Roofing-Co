
import React from 'react';
import { BUSINESS_DATA } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 p-2 rounded">
                <i className="fa-solid fa-house-chimney text-white text-xl"></i>
              </div>
              <span className="text-2xl font-bold text-white uppercase tracking-tighter">Weston Roofing Co</span>
            </div>
            <p className="max-w-md leading-relaxed mb-6">
              Providing professional roofing services for the Deer Park, TX community. We pride ourselves on reliability, transparency, and top-tier craftsmanship.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"><i className="fa-brands fa-facebook-f"></i></a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"><i className="fa-brands fa-google"></i></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contact Details</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <i className="fa-solid fa-location-dot mt-1 mr-3 text-blue-600"></i>
                <span>{BUSINESS_DATA.address}</span>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-phone mr-3 text-blue-600"></i>
                <a href={`tel:${BUSINESS_DATA.phone}`} className="hover:text-white transition-colors">{BUSINESS_DATA.phone}</a>
              </li>
              <li className="flex items-center">
                <i className="fa-solid fa-envelope mr-3 text-blue-600"></i>
                <span>info@westonroofing.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Business Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span>8:00 AM - 6:00 PM</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span>9:00 AM - 4:00 PM</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span className="text-blue-500 font-bold uppercase">Emergency Only</span></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© {new Date().getFullYear()} Weston Roofing Co. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
