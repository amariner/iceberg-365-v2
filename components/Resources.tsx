import React from 'react';

const ArrowIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none" className="inline-block ml-2 fill-current">
        <path d="M23.7067 10.7075L14.707 19.7072C14.5194 19.8948 14.2649 20.0002 13.9995 20.0002C13.7342 20.0002 13.4797 19.8948 13.2921 19.7072C13.1044 19.5195 12.999 19.2651 12.999 18.9997C12.999 18.7344 13.1044 18.4799 13.2921 18.2922L20.5856 11H0.999967C0.734759 11 0.480414 10.8946 0.292884 10.7071C0.105354 10.5196 0 10.2652 0 10C0 9.73479 0.105354 9.48045 0.292884 9.29292C0.480414 9.10539 0.734759 9.00003 0.999967 9.00003H20.5856L13.2921 1.70777C13.1044 1.52014 12.999 1.26565 12.999 1.00029C12.999 0.734939 13.1044 0.480452 13.2921 0.292818C13.4797 0.105183 13.7342 -0.000228882 13.9995 -0.000228882C14.2649 -0.000228882 14.5194 0.105183 14.707 0.292818L23.7067 9.29252C23.7997 9.38539 23.8735 9.49568 23.9238 9.61707C23.9741 9.73847 24 9.86859 24 10C24 10.1314 23.9741 10.2615 23.9238 10.3829C23.8735 10.5043 23.7997 10.6146 23.7067 10.7075Z"></path>
    </svg>
);

interface ResourceCardProps {
    category: string;
    imageUrl: string;
    title: string;
    description: string;
    href: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ category, imageUrl, title, description, href }) => (
    <div className="bg-[#2B2925] flex flex-col h-full group">
        <div className="relative">
            <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
            <p className="font-dm-mono text-[#2B2925] bg-[#DD8B26] px-3 py-1 text-sm font-bold absolute top-4 left-4">{category}</p>
        </div>
        <div className="p-6 flex flex-col flex-grow">
            <h3 className="font-dm-sans-black text-2xl text-white mb-4">{title}</h3>
            <p className="text-[#cbc8c5] text-lg mb-6 flex-grow">{description}</p>
            <a href={href} className="font-bold text-[#DD8B26] hover:text-white transition-colors group-hover:text-white">
                Continuar Leyendo <span className="transition-transform group-hover:translate-x-1 inline-block">→</span>
            </a>
        </div>
    </div>
);


const Resources: React.FC = () => {
    const resourceItems = [
        {
            category: "PODCAST",
            imageUrl: "https://picsum.photos/seed/podcast/400/225",
            title: "La diversificación es la clave del éxito en el comercio electrónico",
            description: "En este Prime Talk Podcast patrocinado por Iceberg365 – Rick Mirsky – Fundador de Ecom Diversify – habla sobre cómo la diversificación es la clave del éxito...",
            href: "#"
        },
        {
            category: "GUÍA",
            imageUrl: "https://picsum.photos/seed/guide/400/225",
            title: "Principales herramientas para vendedores de Amazon: Reembolso, PPC, SE...",
            description: "Leer y comprender el estado de resultados de Amazon puede ser un desafío para los vendedores de Amazon. Obtén el eBook gratuito hoy y aprende a leer tu Amazon...",
            href: "#"
        },
        {
            category: "BLOG",
            imageUrl: "https://picsum.photos/seed/blog/400/225",
            title: "Las tarifas ocultas en los reembolsos de FBA: lo que Amazon...",
            description: "Como vendedor de Amazon FBA, es posible que no te des cuenta de que podrías estar pagando tarifas innecesarias por reembolsos que deberían haberte llegado automáticamente.",
            href: "#"
        }
    ];

    return (
        <section className="bg-[#2B2925] py-20">
            <div className="container mx-auto px-6">
                <p className="font-dm-mono text-[#DD8B26] font-bold tracking-widest text-center lg:text-left">RECURSOS</p>
                <div className="grid lg:grid-cols-2 gap-8 items-center mt-4">
                    <div className="text-center lg:text-left">
                        <h2 className="font-dm-sans-black text-5xl md:text-6xl text-white leading-tight">
                        El Conocimiento {' '}
                        <span className="relative inline-block">
                            Enciende
                            <span className="absolute -left-2 -right-2 -bottom-1 h-4 md:h-5 bg-[#8A63D2]/80 -z-10"></span>
                        </span>
                        {' '}Nuevas Oportunidades
                        </h2>
                    </div>
                    <div className="text-center lg:text-left">
                        <p className="text-[#cbc8c5] text-lg md:text-xl">Nos encanta aprender: sobre ti, contigo, para ti. Iceberg365 crea y selecciona los recursos que pueden ayudar a transformar la forma en que haces negocios, para que puedas lograr más.</p>
                        <div className="mt-8 flex justify-center lg:justify-start">
                             <a href="#" className="bg-[#F4EDE5] text-[#2B2925] text-base font-bold py-4 px-8 rounded-full hover:opacity-90 transition-opacity">Explora Más</a>
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {resourceItems.map((item, index) => (
                        <ResourceCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Resources;