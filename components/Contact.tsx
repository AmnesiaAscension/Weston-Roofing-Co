
import React from 'react';
import { BUSINESS_DATA } from '../constants';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We will call you shortly.');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-blue-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Protect Your Home?</h2>
            <p className="text-blue-100 mb-10 text-lg">
              Don't wait for a small leak to become a massive headache. Contact Weston Roofing Co today for a free, no-obligation inspection.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl mr-4 group-hover:bg-white group-hover:text-blue-900 transition-colors">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <p className="text-blue-200 text-sm uppercase font-bold">Call Us Direct</p>
                  <a href={`tel:${BUSINESS_DATA.phone}`} className="text-2xl font-bold hover:text-blue-300 transition-colors">{BUSINESS_DATA.phone}</a>
                </div>
              </div>
              
              <div className="flex items-start group">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-2xl mr-4 group-hover:bg-white group-hover:text-blue-900 transition-colors">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <p className="text-blue-200 text-sm uppercase font-bold">Visit Our Office</p>
                  <p className="text-xl">{BUSINESS_DATA.address}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 pt-6">
                <div className="h-px bg-blue-400 flex-grow"></div>
                <span className="text-blue-400 text-sm font-bold uppercase">Family Owned & Operated</span>
                <div className="h-px bg-blue-400 flex-grow"></div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2 bg-white p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Name</label>
                  <input required type="text" placeholder="Your Full Name" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Phone</label>
                  <input required type="tel" placeholder="Best Contact Number" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Service Needed</label>
                <select className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none">
                  <option>Free Inspection</option>
                  <option>Roof Repair</option>
                  <option>Roof Replacement</option>
                  <option>Emergency Tarping</option>
                  <option>Gutter Work</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">Message</label>
                <textarea rows={4} placeholder="How can we help you today?" className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-600 focus:outline-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-lg text-lg uppercase shadow-xl transition-all transform active:scale-[0.98]">
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
