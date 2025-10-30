
import React from 'react';

const ArrowUpIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20V4M18 10l-6-6-6 6"/>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.15"/>
  </svg>
);

const TrendingUpIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/>
    <polyline points="16 7 22 7 22 13"/>
    <circle cx="2" cy="17" r="2.5" fill="currentColor" opacity="0.2"/>
    <circle cx="8.5" cy="10.5" r="2.5" fill="currentColor" opacity="0.2"/>
    <circle cx="13.5" cy="15.5" r="2.5" fill="currentColor" opacity="0.2"/>
    <circle cx="22" cy="7" r="2.5" fill="currentColor" opacity="0.2"/>
  </svg>
);

const SettingsIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.15"/>
    <path d="M12 1v3m0 16v3m11-11h-3m-16 0H1m15.364-8.364l-2.12 2.12m-4.243 4.243l-2.12 2.12m8.485 0l-2.12-2.12m-4.243-4.243l-2.12-2.12M18.364 18.364l-2.12-2.12m-4.243-4.243l-2.12-2.12"/>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.15"/>
  </svg>
);

const ObjectiveCard: React.FC<{ icon: React.ReactNode; title: string, description: string }> = ({ icon, title, description }) => (
    <div className="bg-white p-8 rounded-2xl text-center border border-[#E6E6E6] shadow-sm">
        <div className="text-[#2C2C2C] flex justify-center">{icon}</div>
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
                        icon={<ArrowUpIcon />}
                        title="Aumentar visibilidad"
                        description="Más visibilidad en Amazon y otros marketplaces significa más ventas."
                    />
                    <ObjectiveCard 
                        icon={<TrendingUpIcon />}
                        title="Optimizar inversión"
                        description="Que cada euro que gastas en publicidad genere el máximo retorno."
                    />
                    <ObjectiveCard 
                        icon={<SettingsIcon />}
                        title="Gestionar procesos"
                        description="Automatizamos y simplificamos todo lo que puedas imaginar."
                    />
                </div>
            </div>
        </section>
    );
}

export default WhoWeHelp;
