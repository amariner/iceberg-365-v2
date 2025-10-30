
import React from 'react';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={`w-6 h-6 ${className}`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
    </svg>
);

const Testimonials: React.FC = () => {
    return (
        <section id="testimonios" className="bg-[#F4EDE5] py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="font-dm-sans-black text-4xl md:text-5xl">Lo que dicen nuestros clientes</h2>
                <p className="mt-4 text-lg md:text-xl text-[#62605C] max-w-2xl mx-auto">Nuestros clientes adoran cómo simplificamos sus procesos y agilizamos sus operaciones.</p>

                <div className="max-w-3xl mx-auto mt-12">
                    <div className="bg-[#2B2925] text-white p-10 rounded-2xl shadow-xl">
                        <p className="text-2xl md:text-3xl font-medium text-[#cbc8c5] leading-snug">
                            "Aumentamos en 1 año un 200% el volumen de ventas.”
                        </p>
                        <div className="mt-8 text-left">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} className="text-[#DD8B26]" />
                                ))}
                            </div>
                            <p className="font-dm-mono text-xl mt-4">Cliente real (ejemplo)</p>
                            <p className="text-md text-[#cbc8c5]">Manager en Ejemplo S.L.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
