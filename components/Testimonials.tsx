
import React from 'react';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={`w-6 h-6 ${className}`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
    </svg>
);

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            text: "Llevábamos 2 años con ventas estancadas en Amazon. En 6 meses ya habíamos duplicado los ingresos y ahora estamos en el top 3 de nuestra categoría. El equipo es súper profesional y nos explican todo paso a paso.",
            name: "María González",
            role: "Directora de Marketing",
            company: "Essencial Home",
            rating: 5
        },
        {
            text: "Al principio éramos escépticos con Amazon Ads porque habíamos probado antes sin resultados. Pero Iceberg nos ayudó a entender qué estábamos haciendo mal y ahora tenemos un ROAS de 4.2. Lo mejor es que nos dan informes cada semana con todo claro.",
            name: "Carlos Ruiz",
            role: "CEO",
            company: "TechFit Solutions",
            rating: 5
        },
        {
            text: "Necesitábamos expandirnos a otros marketplaces pero no teníamos ni idea por dónde empezar. Nos gestionaron Fnac, El Corte Inglés y Carrefour desde cero. En 3 meses ya estábamos vendiendo en los 3 y con beneficios. Recomendación total.",
            name: "Ana Martínez",
            role: "Fundadora",
            company: "EcoLiving Store",
            rating: 5
        }
    ];

    return (
        <section id="testimonios" className="bg-white py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="font-dm-sans-black text-4xl md:text-5xl text-[#2C2C2C]">Lo que dicen nuestros clientes</h2>
                <p className="mt-4 text-lg md:text-xl text-[#2C2C2C]/70 max-w-2xl mx-auto">Por qué nuestros clientes confían en nosotros.</p>

                <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-gradient-to-br from-[#17EBEB]/10 to-[#17EBEB]/5 text-[#2C2C2C] p-8 rounded-2xl shadow-lg border border-[#17EBEB]/20 flex flex-col">
                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <StarIcon key={i} className="text-[#FF7A00]" />
                                ))}
                            </div>
                            <p className="text-lg font-medium text-[#2C2C2C] leading-relaxed mb-6 flex-grow">
                                "{testimonial.text}"
                            </p>
                            <div className="text-left mt-auto">
                                <p className="font-semibold text-[#2C2C2C]">{testimonial.name}</p>
                                <p className="text-sm text-[#2C2C2C]/70">{testimonial.role}</p>
                                <p className="text-sm text-[#FF7A00] font-medium">{testimonial.company}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
