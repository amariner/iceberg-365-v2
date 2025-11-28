import React from 'react';
import FadeIn from '../components/FadeIn';

const MarketplacesPage: React.FC = () => {
    return (
        <FadeIn>
            <div className="container mx-auto px-6 py-20">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Gestión de Marketplaces</h1>
                <p className="text-xl text-gray-600">
                    Expertos en Amazon y marketplaces. Estrategia, optimización de listings y gestión de cuentas para maximizar tus ventas.
                </p>
            </div>
        </FadeIn>
    );
};

export default MarketplacesPage;
