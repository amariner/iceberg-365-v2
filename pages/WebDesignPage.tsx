import React from 'react';
import FadeIn from '../components/FadeIn';

const WebDesignPage: React.FC = () => {
    return (
        <FadeIn>
            <div className="container mx-auto px-6 py-20">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Diseño Web y Automatizaciones</h1>
                <p className="text-xl text-gray-600">
                    Diseño web moderno y automatización de procesos para escalar tu negocio y mejorar la eficiencia operativa.
                </p>
            </div>
        </FadeIn>
    );
};

export default WebDesignPage;
