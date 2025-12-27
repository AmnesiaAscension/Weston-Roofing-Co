
import React from 'react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 italic">Customer Success Stories</h2>
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <i key={i} className="fa-solid fa-star text-yellow-400 text-2xl mx-0.5"></i>
            ))}
          </div>
          <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">Top Rated on Google & Facebook</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {REVIEWS.map((review, idx) => (
            <div key={idx} className="bg-gray-50 p-8 rounded-3xl relative">
              <div className="absolute -top-4 left-8 text-blue-900 text-4xl opacity-20 italic font-serif">"</div>
              <div className="mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star text-yellow-400 text-sm"></i>
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                {review.snippet}
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 font-bold mr-3">
                  {review.author[0]}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{review.author}</h4>
                  <span className="text-xs text-gray-500">Verified Client</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
