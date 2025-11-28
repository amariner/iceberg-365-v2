import React from 'react';
import FadeIn from '../components/FadeIn';

const EcommercePage: React.FC = () => {
    return (
        <FadeIn>
            <div className="container mx-auto px-6 py-20">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Ecommerce y Tiendas Online</h1>
                <p className="text-xl text-gray-600">
                    Creamos tu tienda online desde cero. Especialistas en Shopify y desarrollo a medida para tu canal directo.
                </p>
            </div>
        </FadeIn>
    );
};

export default EcommercePage;
