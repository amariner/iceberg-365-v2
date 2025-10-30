
import React from 'react';

const ArrowIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20" viewBox="0 0 24 20" fill="none" className="inline-block ml-2">
      <path d="M23.7067 10.7075L14.707 19.7072C14.5194 19.8948 14.2649 20.0002 13.9995 20.0002C13.7342 20.0002 13.4797 19.8948 13.2921 19.7072C13.1044 19.5195 12.999 19.2651 12.999 18.9997C12.999 18.7344 13.1044 18.4799 13.2921 18.2922L20.5856 11H0.999967C0.734759 11 0.480414 10.8946 0.292884 10.7071C0.105354 10.5196 0 10.2652 0 10C0 9.73479 0.105354 9.48045 0.292884 9.29292C0.480414 9.10539 0.734759 9.00003 0.999967 9.00003H20.5856L13.2921 1.70777C13.1044 1.52014 12.999 1.26565 12.999 1.00029C12.999 0.734939 13.1044 0.480452 13.2921 0.292818C13.4797 0.105183 13.7342 -0.000228882 13.9995 -0.000228882C14.2649 -0.000228882 14.5194 0.105183 14.707 0.292818L23.7067 9.29252C23.7997 9.38539 23.8735 9.49568 23.9238 9.61707C23.9741 9.73847 24 9.86859 24 10C24 10.1314 23.9741 10.2615 23.9238 10.3829C23.8735 10.5043 23.7997 10.6146 23.7067 10.7075Z" fill="#2B2925"></path>
  </svg>
);

const Hero: React.FC = () => {
  return (
    <section className="bg-[#F4EDE5] pt-16 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <p className="font-dm-mono text-lg text-[#DD8B26] font-bold tracking-widest">¿CÓMO PODEMOS AYUDARTE?</p>
            <h1 className="font-dm-sans-black text-5xl md:text-6xl lg:text-7xl leading-none text-[#2B2925] tracking-tighter mt-4">
              Concéntrate en tu{' '}
              <span className="relative inline-block">
                negocio
                <span className="absolute left-0 right-0 bottom-1 h-3 md:h-5 bg-[#DD8B26]/80 -z-10"></span>
              </span>
            </h1>
            <p className="mt-8 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 text-[#62605C]">
              Nosotros diseñamos tu estrategia en Amazon y otros Marketplaces para que incrementes tus ventas.
            </p>
            <div className="mt-10">
              <a href="#servicios" className="bg-transparent border-2 border-[#DD8B26] text-[#2B2925] text-base font-bold py-4 px-8 rounded-full hover:bg-[#DD8B26] hover:text-white transition-colors flex items-center justify-center max-w-sm mx-auto lg:mx-0">
                Descubre Nuestros Servicios <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="relative">
             <img src="https://iceberg-25-v1.netlify.app/_next/image?url=%2Fbost-amazon.jpg&w=640&q=75" alt="Vendedora de Amazon trabajando en su laptop" className="rounded-2xl shadow-2xl w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
