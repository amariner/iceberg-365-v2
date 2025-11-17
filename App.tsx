
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import WhoWeHelp from './components/WhoWeHelp';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ClientLogos from './components/ClientLogos';
import Resources from './components/Resources';

const App: React.FC = () => {
  return (
    <div className="bg-[#f7f5f1] text-[#2C2C2C]">
      <Header />
      <main>
        <Hero />
        <ClientLogos />
        <ValueProposition />
        <WhoWeHelp />
        <Resources />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
