
import React from 'react';

const CTA: React.FC = () => {
    return (
        <section className="bg-[#2C2C2C] text-white py-24">
            <div className="container mx-auto px-6 text-center">
                <h2 className="font-dm-sans-black text-5xl md:text-7xl lg:text-8xl leading-none tracking-tighter">
                    ¿Listo para <span className="text-[#FF7A00]">vender</span> más?
                </h2>
                <p className="text-xl md:text-2xl font-medium mt-6 max-w-3xl mx-auto text-[#E6E6E6]/80">
                    Contacta con nosotros y te contamos cómo podemos ayudarte.
                </p>
                <div className="mt-10">
                    <a href="#" className="bg-[#FF7A00] text-white text-lg font-bold py-5 px-10 rounded-full hover:opacity-90 transition-opacity">
                        Quiero aumentar mis ventas
                    </a>
                </div>
            </div>
        </section>
    );
}

export default CTA;
