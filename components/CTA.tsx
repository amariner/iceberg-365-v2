
import React from 'react';

const CTA: React.FC = () => {
    return (
        <section className="bg-[#DD8B26] text-white py-24">
            <div className="container mx-auto px-6 text-center">
                <h2 className="font-dm-sans-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tighter">
                    ¿Preparado para Aumentar tus Ventas?
                </h2>
                <p className="text-xl md:text-2xl font-medium mt-6 max-w-3xl mx-auto text-black/70">
                    Impulsa tu negocio al siguiente nivel con nuestras estrategias de marketplace.
                </p>
                <div className="mt-10">
                    <a href="#" className="bg-[#2B2925] text-white text-lg font-bold py-5 px-10 rounded-full hover:opacity-90 transition-opacity">
                        Quiero Aumentar Mis Ventas
                    </a>
                </div>
            </div>
        </section>
    );
}

export default CTA;
