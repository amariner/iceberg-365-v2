
import React from 'react';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={`w-6 h-6 ${className}`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
    </svg>
);

const Testimonials: React.FC = () => {
    return (
        <section id="testimonios" className="bg-white py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="font-dm-sans-black text-4xl md:text-5xl text-[#2C2C2C]">Lo que dicen nuestros clientes</h2>
                <p className="mt-4 text-lg md:text-xl text-[#2C2C2C]/70 max-w-2xl mx-auto">Por qué nuestros clientes confían en nosotros.</p>

                <div className="max-w-3xl mx-auto mt-12">
                    <div className="bg-gradient-to-br from-[#17EBEB]/10 to-[#17EBEB]/5 text-[#2C2C2C] p-10 rounded-2xl shadow-xl border border-[#17EBEB]/20">
                        <p className="text-2xl md:text-3xl font-medium text-[#2C2C2C] leading-snug">
                            "En un año multiplicamos las ventas por 3. No podemos estar más contentos."
                        </p>
                        <div className="mt-8 text-left">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <StarIcon key={i} className="text-[#FF7A00]" />
                                ))}
                            </div>
                            <p className="font-dm-mono text-xl mt-4 text-[#2C2C2C]">Cliente real</p>
                            <p className="text-md text-[#2C2C2C]/70">Manager en Ejemplo S.L.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
