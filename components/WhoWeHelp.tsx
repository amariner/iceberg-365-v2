
import React from 'react';

const ObjectiveCard: React.FC<{ icon: string; title: string, description: string }> = ({ icon, title, description }) => (
    <div className="bg-white/5 p-8 rounded-2xl text-center border border-white/10">
        <div className="text-5xl">{icon}</div>
        <h3 className="font-dm-sans-black text-2xl text-white mt-6">{title}</h3>
        <p className="mt-4 text-[#cbc8c5] text-lg">{description}</p>
    </div>
);


const WhoWeHelp: React.FC = () => {
    return (
        <section id="objetivos" className="bg-[#2B2925] py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="font-dm-sans-black text-5xl md:text-6xl text-white leading-tight">
                    Potenciando y fortaleciendo tu éxito en ventas
                </h2>
                <p className="text-[#cbc8c5] text-lg md:text-xl mt-6 max-w-3xl mx-auto">
                    Nuestra plataforma proporciona herramientas e información avanzadas para ayudarte a gestionar, crecer y asegurar tus activos de venta.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
                    <ObjectiveCard 
                        icon="🚀"
                        title="Aumentar visibilidad"
                        description="Aumentar la visibilidad de tus productos en los principales marketplaces."
                    />
                    <ObjectiveCard 
                        icon="💰"
                        title="Optimizar inversión"
                        description="Optimizar la inversión publicitaria para maximizar el retorno."
                    />
                    <ObjectiveCard 
                        icon="⚙️"
                        title="Gestionar procesos"
                        description="Gestionar los procesos de venta de forma eficiente y simplificada."
                    />
                </div>
            </div>
        </section>
    );
}

export default WhoWeHelp;
