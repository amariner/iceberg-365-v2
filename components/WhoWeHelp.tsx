import React from 'react';

const ArrowIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none" className="inline-block ml-2 fill-current">
        <path d="M23.7067 10.7075L14.707 19.7072C14.5194 19.8948 14.2649 20.0002 13.9995 20.0002C13.7342 20.0002 13.4797 19.8948 13.2921 19.7072C13.1044 19.5195 12.999 19.2651 12.999 18.9997C12.999 18.7344 13.1044 18.4799 13.2921 18.2922L20.5856 11H0.999967C0.734759 11 0.480414 10.8946 0.292884 10.7071C0.105354 10.5196 0 10.2652 0 10C0 9.73479 0.105354 9.48045 0.292884 9.29292C0.480414 9.10539 0.734759 9.00003 0.999967 9.00003H20.5856L13.2921 1.70777C13.1044 1.52014 12.999 1.26565 12.999 1.00029C12.999 0.734939 13.1044 0.480452 13.2921 0.292818C13.4797 0.105183 13.7342 -0.000228882 13.9995 -0.000228882C14.2649 -0.000228882 14.5194 0.105183 14.707 0.292818L23.7067 9.29252C23.7997 9.38539 23.8735 9.49568 23.9238 9.61707C23.9741 9.73847 24 9.86859 24 10C24 10.1314 23.9741 10.2615 23.9238 10.3829C23.8735 10.5043 23.7997 10.6146 23.7067 10.7075Z"></path>
    </svg>
);


const HelpCard: React.FC<{title: string, description: string, href: string}> = ({title, description, href}) => (
    <div>
        <h3 className="font-dm-sans-black text-2xl lg:text-3xl text-white">{title}</h3>
        <p className="mt-4 text-[#cbc8c5] text-lg">{description}</p>
        <div className="mt-8">
            <a href={href} className="text-[#DD8B26] bg-[#DD8B26]/20 border-2 border-transparent text-base font-bold py-4 px-8 rounded-full hover:bg-[#DD8B26] hover:text-[#2B2925] transition-colors flex items-center justify-center max-w-xs">
                Aprende Más <ArrowIcon />
            </a>
        </div>
    </div>
);


const WhoWeHelp: React.FC = () => {
    return (
        <section className="bg-[#2B2925] py-20">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <p className="font-dm-mono text-[#76B4A2] font-bold tracking-widest">A QUIÉN AYUDAMOS</p>
                        <h2 className="font-dm-sans-black text-5xl md:text-6xl text-white mt-4 leading-tight">
                            Hecho para Vendedores.<br/>
                            Para Marcas.<br/>
                            Para ti.
                        </h2>
                        <p className="text-[#cbc8c5] text-lg mt-8 max-w-md">
                            Ya sea que acabes de lanzar tu primer producto o hayas escalado a cientos de millones de dólares en ingresos de FBA en Amazon, profundizamos para maximizar tu recuperación de FBA.
                        </p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-12">
                        <HelpCard 
                            title="Emprendedores y Pequeñas Empresas"
                            description="¿Marca única? ¿Multimarca? Te conocemos porque también hemos estado allí, así que te cubrimos las espaldas. Ya sea que busques una colaboración estrecha con tu socio de auditoría y conciliación de FBA o prefieras un enfoque de no intervención, Iceberg365 sabe cómo maximizar tus reembolsos de FBA."
                            href="#"
                        />
                        <HelpCard 
                            title="Marcas Empresariales"
                            description="Somos más que un socio; somos una extensión de tu equipo que ofrece una escalabilidad inigualable y un servicio excepcional. Nuestro compromiso con la transparencia y la orientación profesional transforma los reembolsos de FBA en un flujo de ingresos estratégico que ofrece el máximo ROI."
                            href="#"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhoWeHelp;