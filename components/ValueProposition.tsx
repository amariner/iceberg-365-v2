import React from 'react';

const ArrowIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none" className="inline-block ml-2 group-hover:fill-white fill-[#DD8B26] transition-colors">
      <path d="M23.7067 10.7075L14.707 19.7072C14.5194 19.8948 14.2649 20.0002 13.9995 20.0002C13.7342 20.0002 13.4797 19.8948 13.2921 19.7072C13.1044 19.5195 12.999 19.2651 12.999 18.9997C12.999 18.7344 13.1044 18.4799 13.2921 18.2922L20.5856 11H0.999967C0.734759 11 0.480414 10.8946 0.292884 10.7071C0.105354 10.5196 0 10.2652 0 10C0 9.73479 0.105354 9.48045 0.292884 9.29292C0.480414 9.10539 0.734759 9.00003 0.999967 9.00003H20.5856L13.2921 1.70777C13.1044 1.52014 12.999 1.26565 12.999 1.00029C12.999 0.734939 13.1044 0.480452 13.2921 0.292818C13.4797 0.105183 13.7342 -0.000228882 13.9995 -0.000228882C14.2649 -0.000228882 14.5194 0.105183 14.707 0.292818L23.7067 9.29252C23.7997 9.38539 23.8735 9.49568 23.9238 9.61707C23.9741 9.73847 24 9.86859 24 10C24 10.1314 23.9741 10.2615 23.9238 10.3829C23.8735 10.5043 23.7997 10.6146 23.7067 10.7075Z"></path>
  </svg>
);

const FeatureCard: React.FC<{ 
  topTitle: string; 
  topTitleColor: string;
  mainTitle: string; 
  description: string; 
}> = ({ topTitle, topTitleColor, mainTitle, description }) => (
  <div className="p-8">
    <div className="mb-4">
        <div className={`font-bold text-3xl ${topTitleColor}`}>{topTitle}</div>
        <div className="font-dm-sans-black text-6xl text-white -mt-4">{mainTitle}</div>
    </div>
    <p className="text-[#cbc8c5] text-lg mt-8">{description}</p>
  </div>
);


const ValueProposition: React.FC = () => {
  const features = [
    {
      topTitle: "MÁS",
      mainTitle: "CONSISTENCIA",
      topTitleColor: "text-[#DD8B26]",
      description: "Iceberg365 audita decenas de miles de millones de dólares en transacciones de Amazon FBA diariamente. Y ese tipo de consistencia significa que nunca tendrás que auditar a las personas que se supone que deben auditar por ti.",
    },
    {
      topTitle: "MÁS",
      mainTitle: "EFICIENCIA",
      topTitleColor: "text-[#76B4A2]",
      description: "Nuestro tenaz equipo presenta reclamaciones según las reglas y rastrea las discrepancias más complejas en tu nombre. Incluso logramos que un promedio del 63% de las reclamaciones previamente fallidas sean aprobadas y reembolsadas por Amazon.",
    },
    {
      topTitle: "MÁS",
      mainTitle: "FLEXIBILIDAD",
      topTitleColor: "text-[#8A63D2]",
      description: "Conoce tu nuevo truco para ahorrar tiempo: nos encargamos del proceso de recuperación de reclamaciones para que tu negocio pueda canalizar su potencial y energía donde más se necesita.",
    },
    {
      topTitle: "MÁS",
      mainTitle: "DINERO",
      topTitleColor: "text-[#77AADD]",
      description: "Es simple: buscamos más y encontramos más para que recuperes más, más a menudo. Aseguramos un promedio del 90% de las reclamaciones que abrimos.",
    },
  ];

  return (
    <section className="bg-[#2B2925] text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="font-dm-sans-black text-5xl md:text-7xl leading-none tracking-tighter">
              Obtén más de lo que{' '}
              <span className="relative inline-block">
                importa
                <span className="absolute left-0 -right-2 bottom-0 h-4 md:h-6 bg-[#8A63D2]/80 -z-10"></span>
              </span>{' '}
              más
            </h2>
          </div>
          <div>
            <p className="text-[#cbc8c5] text-lg md:text-xl">
              Nuestro único enfoque son los reembolsos de Amazon FBA, y ayudar a los vendedores individuales y a las marcas de consumo a desbloquear un flujo de ingresos continuo. Eso es combustible para reinvertir en tu negocio. Es libertad para planificar tu futuro. Con Iceberg365, obtienes más.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <a href="#" className="group bg-white text-[#2B2925] text-base font-bold py-4 px-8 rounded-full hover:bg-transparent hover:text-white border-2 border-white transition-colors flex items-center">
                Aprende Más <ArrowIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
                key={index} 
                topTitle={feature.topTitle} 
                topTitleColor={feature.topTitleColor} 
                mainTitle={feature.mainTitle} 
                description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;