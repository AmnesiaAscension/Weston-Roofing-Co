
import React from 'react';
import { BUSINESS_DATA } from '../constants';

const WaaSReport: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 bg-white shadow-xl rounded-3xl p-8 md:p-12 border border-gray-100">
        <div className="flex items-center space-x-4 mb-10 border-b pb-6">
          <div className="bg-black text-white p-3 rounded-lg font-black text-xl italic">WaaS</div>
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Project Delivery Pack</h1>
            <p className="text-gray-500 uppercase tracking-widest text-xs font-bold mt-1">Weston Roofing Co • Deer Park, TX</p>
          </div>
        </div>

        {/* A) PROJECT SUMMARY */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 flex items-center"><span className="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-sm">A</span> Project Summary</h2>
          <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-blue-600">
            <p className="text-gray-700 leading-relaxed">
              High-converting, mobile-first lead-generation site for Weston Roofing Co in Deer Park, TX. This one-page design prioritizes direct phone conversions, emphasizes local storm-readiness, and builds rapid trust through credentials and local NAP (Name, Address, Phone) consistency.
            </p>
          </div>
        </section>

        {/* B) SITE STRUCTURE */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 flex items-center"><span className="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-sm">B</span> Site Structure & Section Order</h2>
          <ol className="grid md:grid-cols-2 gap-3">
            {[
              "Sticky Mobile CTA Bar (Call Now)",
              "Hero / Above-the-Fold",
              "Trust Signals (Badges)",
              "Services Overview (6 items)",
              "Primary Offer (Special)",
              "Service Area Coverage (Map/City list)",
              "Reviews / Social Proof",
              "FAQ (5 Homeowner Questions)",
              "Contact / Lead Form",
              "Footer (NAP + Hours)"
            ].map((step, i) => (
              <li key={i} className="flex items-center p-3 bg-white border border-gray-100 rounded-lg shadow-sm">
                <span className="text-blue-600 font-bold mr-3">{i+1}.</span> {step}
              </li>
            ))}
          </ol>
        </section>

        {/* C) SEO PACK */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 flex items-center"><span className="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-sm">C</span> SEO Pack</h2>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-gray-50 rounded-xl">
                <span className="text-xs font-bold text-gray-500 uppercase block mb-1">Page Title</span>
                <span className="text-sm font-medium">Weston Roofing Co | #1 Roofer in Deer Park, TX | Free Inspections</span>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl">
                <span className="text-xs font-bold text-gray-500 uppercase block mb-1">H1 Heading</span>
                <span className="text-sm font-medium">Professional Roofing Services in Deer Park, TX</span>
              </div>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl">
              <span className="text-xs font-bold text-gray-500 uppercase block mb-1">Meta Description</span>
              <p className="text-sm leading-relaxed">Need a roofer in Deer Park? Weston Roofing Co offers expert roof repairs, replacements, and storm damage assessments. Licensed, insured, and locally trusted. Call (832) 756-9287 for a free estimate!</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-xl">
              <span className="text-xs font-bold text-gray-500 uppercase block mb-1">Target Keywords</span>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Deer Park roofer", "roof repair TX 77536", "storm damage roofing", "roof replacement Deer Park", "roofing contractor Houston"].map(k => (
                  <span key={k} className="px-2 py-1 bg-white border rounded text-[10px] font-bold text-gray-600 uppercase">{k}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* F) UI/UX NOTES */}
        <section className="mb-12">
          <h2 className="text-xl font-bold mb-4 flex items-center"><span className="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-sm">F</span> Visual Effects & UI Notes</h2>
          <ul className="list-disc list-inside text-sm space-y-2 text-gray-600 bg-blue-50/50 p-6 rounded-2xl">
            <li>Sticky mobile call bar with high-contrast background for thumb-friendly accessibility.</li>
            <li>Trust badges placed immediately below hero for instant credibility establishment.</li>
            <li>Service cards use hover-lift (translate-y) and shadow expansion for interactive depth.</li>
            <li>Typography hierarchy using Oswald for urgency/authority and Inter for readability.</li>
            <li>Color palette: Navy/Blue (Reliability) + Green (Active/Live) + Yellow (Ratings).</li>
          </ul>
        </section>

        {/* G) LAUNCH CHECKLIST */}
        <section>
          <h2 className="text-xl font-bold mb-4 flex items-center"><span className="w-8 h-8 rounded bg-blue-100 text-blue-600 flex items-center justify-center mr-3 text-sm">G</span> Launch Checklist</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Verify {BUSINESS_DATA.phone} click-to-call functionality",
              "Check NAP consistency against 402 Ivy Ave, Deer Park, TX",
              "Validate Mobile Response (Breakpoints: 640px, 768px)",
              "Test Lead Form submission and UI feedback",
              "Confirm Schema Markup injection for local SEO",
              "Audit font contrast and accessibility compliance"
            ].map((check, i) => (
              <div key={i} className="flex items-start space-x-3 p-3 border rounded-lg bg-white">
                <i className="fa-solid fa-square-check text-green-500 mt-0.5"></i>
                <span className="text-sm font-medium text-gray-700">{check}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
      
      <div className="max-w-4xl mx-auto mt-8 text-center text-gray-400 text-xs uppercase tracking-[0.2em]">
        WaaS Engine • Operational Build v1.0.4
      </div>
    </div>
  );
};

export default WaaSReport;
