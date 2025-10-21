import React from 'react';

const StarIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg className={`w-6 h-6 ${className}`} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"/>
    </svg>
);

const TestimonialCard: React.FC<{ review: string; name: string; }> = ({ review, name }) => (
    <div className="bg-[#2B2925] text-white p-8 rounded-2xl flex flex-col justify-between h-full">
        <p className="text-[#cbc8c5] text-lg">{review}</p>
        <div>
            <p className="font-dm-mono text-xl mt-6">{name}</p>
            <div className="flex mt-2">
                {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="text-[#DD8B26]" />
                ))}
            </div>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            review: "¡Este es un gran servicio! Solo les pagan cuando A TI TE PAGAN, así que no hay que pensárselo. He podido recuperar entre $2K y $3K solo por registrarme. Así de fácil. Hazte un favor y deja que Iceberg365 te ayude a recuperar tus ganancias perdidas (fondos de inventario perdido) de Amazon... lo recomendaré a otros vendedores.",
            name: "Kareem R"
        },
        {
            review: "Me registré en Iceberg365 hace un mes y hoy recibí mi primer informe. Recuperaron el 100% del monto reclamado en mi nombre. Recomiendo encarecidamente Iceberg365. Como vendedor ocupado con un millón de cosas, descubrí que Iceberg365 es una herramienta increíble para ayudarte a recuperar algo de dinero.",
            name: "Mahalia S"
        },
        {
            review: "Me encontró dinero del que no era consciente. Ya es bastante difícil dirigir una pequeña empresa por tu cuenta, pero además tener que auditar a Amazon es demasiado trabajo, me alegro de que exista algo como Iceberg365. Ahora puedo centrarme en otros aspectos del negocio.",
            name: "Michael"
        }
    ];

    return (
        <section className="bg-[#F4EDE5] py-20">
            <div className="container mx-auto px-6">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="font-dm-sans-black text-4xl md:text-5xl">No te fíes solo de nuestra palabra...</h2>
                    <a href="#" className="hidden md:flex items-center text-[#DD8B26] font-bold text-lg">
                        Leer Más Reseñas
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none" className="ml-2">
                          <path d="M24.9996 8V21C24.9996 21.2652 24.8942 21.5196 24.7067 21.7071C24.5192 21.8946 24.2648 22 23.9996 22C23.7344 22 23.48 21.8946 23.2925 21.7071C23.1049 21.5196 22.9996 21.2652 22.9996 21V10.4137L8.70708 24.7075C8.51944 24.8951 8.26494 25.0006 7.99958 25.0006C7.73422 25.0006 7.47972 24.8951 7.29208 24.7075C7.10444 24.5199 6.99902 24.2654 6.99902 24C6.99902 23.7346 7.10444 23.4801 7.29208 23.2925L21.5858 9H10.9996C10.7344 9 10.48 8.89464 10.2925 8.70711C10.1049 8.51957 9.99958 8.26522 9.99958 8C9.99958 7.73478 10.1049 7.48043 10.2925 7.29289C10.48 7.10536 10.7344 7 10.9996 7H23.9996C24.2648 7 24.5192 7.10536 24.7067 7.29289C24.8942 7.48043 24.9996 7.73478 24.9996 8Z" fill="#DD8B26"></path>
                        </svg>
                    </a>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} review={testimonial.review} name={testimonial.name} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;