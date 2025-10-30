
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import WhoWeHelp from './components/WhoWeHelp';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-white text-[#2C2C2C]">
      <Header />
      <main>
        <Hero />
        <ValueProposition />
        <WhoWeHelp />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
