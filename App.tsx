
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProposition from './components/ValueProposition';
import WhoWeHelp from './components/WhoWeHelp';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ClientLogos from './components/ClientLogos';
import Resources from './components/Resources';
import FadeIn from './components/FadeIn';

const App: React.FC = () => {
  return (
    <div className="bg-[#FDFBF7] text-[#111827]">
      <Header />
      <main className="pt-20">
        <FadeIn><Hero /></FadeIn>
        <FadeIn delay={100}><ClientLogos /></FadeIn>
        <FadeIn delay={100}><ValueProposition /></FadeIn>
        <FadeIn delay={100}><WhoWeHelp /></FadeIn>
        <FadeIn delay={100}><Resources /></FadeIn>
        <FadeIn delay={100}><CTA /></FadeIn>
      </main>
      <Footer />
    </div>
  );
};

export default App;
