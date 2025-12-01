import React from 'react';
import FadeIn from '../components/FadeIn';

const PaidMediaPage: React.FC = () => {
    return (
        <FadeIn>
            <div className="container mx-auto px-6 py-20">
                <h1 className="text-4xl font-bold text-gray-900 mb-6">Paid Media y Social Ads</h1>
                <p className="text-xl text-gray-600">
                    Estrategias de publicidad en Google, Facebook y Native Ads para atraer tráfico cualificado y aumentar conversiones.
                </p>
            </div>
        </FadeIn>
    );
};

export default PaidMediaPage;
