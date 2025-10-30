
import React from 'react';

const ArrowIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none" className="inline-block ml-2 group-hover:fill-white fill-[#FF7A00] transition-colors">
      <path d="M23.7067 10.7075L14.707 19.7072C14.5194 19.8948 14.2649 20.0002 13.9995 20.0002C13.7342 20.0002 13.4797 19.8948 13.2921 19.7072C13.1044 19.5195 12.999 19.2651 12.999 18.9997C12.999 18.7344 13.1044 18.4799 13.2921 18.2922L20.5856 11H0.999967C0.734759 11 0.480414 10.8946 0.292884 10.7071C0.105354 10.5196 0 10.2652 0 10C0 9.73479 0.105354 9.48045 0.292884 9.29292C0.480414 9.10539 0.734759 9.00003 0.999967 9.00003H20.5856L13.2921 1.70777C13.1044 1.52014 12.999 1.26565 12.999 1.00029C12.999 0.734939 13.1044 0.480452 13.2921 0.292818C13.4797 0.105183 13.7342 -0.000228882 13.9995 -0.000228882C14.2649 -0.000228882 14.5194 0.105183 14.707 0.292818L23.7067 9.29252C23.7997 9.38539 23.8735 9.49568 23.9238 9.61707C23.9741 9.73847 24 9.86859 24 10C24 10.1314 23.9741 10.2615 23.9238 10.3829C23.8735 10.5043 23.7997 10.6146 23.7067 10.7075Z"></path>
  </svg>
);

const FeatureCard: React.FC<{ 
  number: string; 
  title: string; 
  description: string; 
}> = ({ number, title, description }) => (
  <div className="bg-[#2C2C2C] p-8 rounded-2xl border border-[#E6E6E6]/30">
    <div className="font-dm-mono text-5xl text-[#17EBEB] font-bold">{number}</div>
    <h3 className="font-dm-sans-black text-3xl text-white mt-4">{title}</h3>
    <p className="text-[#E6E6E6]/80 text-lg mt-4">{description}</p>
  </div>
);


const ValueProposition: React.FC = () => {
  const features = [
    {
      number: "01",
      title: "Optimización de ACOS y publicidad",
      description: "Controlar el ACOS es clave para ser rentable. Revisamos tus campañas y ajustamos todo para que bajen los costos mientras crecen tus ventas.",
    },
    {
      number: "02",
      title: "Máxima rentabilidad de tu inversión",
      description: "Cada euro que inviertes en Amazon Ads debe contar. Nos encargamos de que cada campaña genere el máximo retorno posible.",
    },
    {
      number: "03",
      title: "Expansión a mercados internacionales",
      description: "Quieres vender fuera? Nosotros abrimos y configuramos tus cuentas en nuevos países. Tu marca llega donde quieras.",
    },
    {
      number: "04",
      title: "Gestión de cuentas y campañas globales",
      description: "Ya estás en varios países? Gestionamos tus productos y campañas para que todo funcione bien y sigas vendiendo más.",
    },
    {
      number: "05",
      title: "Marketing 360",
      description: "No solo Amazon. Creamos una estrategia que conecta todos tus canales digitales para que tus clientes tengan una experiencia coherente en todos lados.",
    },
    {
      number: "06",
      title: "Ecommerce",
      description: "Tu propia tienda online. La diseñamos y desarrollamos desde cero, optimizada para convertir y lista para crecer. Complementa perfectamente tu presencia en Amazon.",
    },
  ];

  return (
    <section id="servicios" className="bg-[#2C2C2C] text-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="font-dm-mono text-lg text-[#17EBEB] font-bold tracking-widest">Servicios</p>
            <h2 className="font-dm-sans-black text-5xl md:text-6xl leading-none tracking-tighter mt-4">
              Lleva tus ventas en Amazon al{' '}
              <span className="relative inline-block">
                siguiente
                <span className="absolute left-0 -right-2 bottom-0 h-4 md:h-6 bg-[#FF7A00]/40 -z-10"></span>
              </span>{' '}
              nivel
            </h2>
          </div>
          <div>
            <p className="text-[#E6E6E6]/80 text-lg md:text-xl">
              En Iceberg365 nos dedicamos a hacer crecer tu negocio en Amazon. Optimizamos tus campañas, reducimos costos y abrimos nuevos mercados. Sin complicaciones.
            </p>
            <div className="mt-8 flex justify-center lg:justify-start">
              <a href="#" className="group bg-white text-[#2C2C2C] text-base font-bold py-4 px-8 rounded-full hover:bg-transparent hover:text-white border-2 border-white transition-colors flex items-center">
                Solicita tu propuesta <ArrowIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 grid md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <FeatureCard 
                key={feature.number} 
                number={feature.number}
                title={feature.title} 
                description={feature.description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
