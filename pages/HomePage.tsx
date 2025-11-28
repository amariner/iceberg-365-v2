import React from 'react';
import Hero from '../components/Hero';
import ValueProposition from '../components/ValueProposition';
import WhoWeHelp from '../components/WhoWeHelp';
import CTA from '../components/CTA';
import ClientLogos from '../components/ClientLogos';
import FadeIn from '../components/FadeIn';

const HomePage: React.FC = () => {
    return (
        <>
            <FadeIn><Hero /></FadeIn>
            <FadeIn delay={100}><ClientLogos /></FadeIn>
            <FadeIn delay={100}><ValueProposition /></FadeIn>
            <FadeIn delay={100}><WhoWeHelp /></FadeIn>
            <FadeIn delay={100}><CTA /></FadeIn>
        </>
    );
};

export default HomePage;
