
// Main Application component
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TrustSignals from './components/TrustSignals';
import Services from './components/Services';
import Offer from './components/Offer';
import ServiceArea from './components/ServiceArea';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TrustSignals />
        <Services />
        <Offer />
        <ServiceArea />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;
