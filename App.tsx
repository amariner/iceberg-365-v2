
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import ValueProposition from './components/ValueProposition';
import WhoWeHelp from './components/WhoWeHelp';
import ClientLogos from './components/ClientLogos';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Compliance from './components/Compliance';
import Stats from './components/Stats';
import Resources from './components/Resources';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#F4EDE5] text-[#2B2925]">
      <Header />
      <main>
        <Hero />
        <Intro />
        <ValueProposition />
        <WhoWeHelp />
        <ClientLogos />
        <Testimonials />
        <FAQ />
        <Compliance />
        <Stats />
        <Resources />
      </main>
      <Footer />
    </div>
  );
};

export default App;
