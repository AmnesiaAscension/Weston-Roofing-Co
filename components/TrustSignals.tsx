
import React from 'react';

const TrustSignals: React.FC = () => {
  const badges = [
    { label: "Locally Owned", icon: "fa-location-dot" },
    { label: "Storm Specialist", icon: "fa-cloud-bolt" },
    { label: "Fully Insured", icon: "fa-shield-halved" },
    { label: "Free Estimates", icon: "fa-tag" },
    { label: "Quality Work", icon: "fa-award" },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {badges.map((badge, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-2 group">
              <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-900 text-xl group-hover:scale-110 transition-transform">
                <i className={`fa-solid ${badge.icon}`}></i>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-gray-600">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
