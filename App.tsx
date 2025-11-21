
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
    <div className="bg-[#FDFBF7] text-[#111827]">
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
