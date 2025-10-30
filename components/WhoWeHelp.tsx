
import React from 'react';

const ObjectiveCard: React.FC<{ icon: string; title: string, description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl text-center border border-[#E6E6E6] shadow-sm">
        <div className="text-6xl mb-4">{icon}</div>
        <h3 className="font-dm-sans-black text-2xl text-[#2C2C2C] mt-6">{title}</h3>
        <p className="mt-4 text-[#2C2C2C]/70 text-lg">{description}</p>
    </div>
);


const WhoWeHelp: React.FC = () => {
    return (
        <section id="objetivos" className="bg-[#E6E6E6] py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="font-dm-sans-black text-5xl md:text-6xl text-[#2C2C2C] leading-tight">
                    Cómo ayudamos a crecer tu negocio
                </h2>
                <p className="text-[#2C2C2C]/70 text-lg md:text-xl mt-6 max-w-3xl mx-auto">
                    Herramientas y estrategias claras para que vendas más y mejor en Amazon.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 max-w-6xl mx-auto">
                    <ObjectiveCard 
                        icon="🚀"
                        title="Aumentar visibilidad"
                        description="Más visibilidad en Amazon y otros marketplaces significa más ventas."
                    />
                    <ObjectiveCard 
                        icon="💰"
                        title="Optimizar inversión"
                        description="Que cada euro que gastas en publicidad genere el máximo retorno."
                    />
                    <ObjectiveCard 
                        icon="⚙️"
                        title="Gestionar procesos"
                        description="Automatizamos y simplificamos todo lo que puedas imaginar."
                    />
                </div>
            </div>
        </section>
    );
}

export default WhoWeHelp;
