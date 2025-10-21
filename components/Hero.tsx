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
            <h1 className="font-dm-sans-black text-5xl md:text-7xl lg:text-[5.5rem] leading-none text-[#2B2925] tracking-tighter">
              LOS REEMBOLSOS DE AMAZON FBA QUE IMPULSAN TU{' '}
              <span className="relative inline-block">
                CRECIMIENTO
                <span className="absolute left-0 right-0 bottom-1 h-3 md:h-5 bg-[#DD8B26]/80 -z-10"></span>
              </span>
            </h1>
            <p className="mt-8 text-lg md:text-xl max-w-xl mx-auto lg:mx-0 text-[#62605C]">
              Auditamos con más consistencia. Encontramos más discrepancias. Conciliamos más reclamaciones. Los reembolsos llegan, desbloqueando una fuente de ingresos adicional para reinvertir en tu negocio de Amazon. Es más que la devolución de tu dinero, es el camino a seguir.
            </p>
            <div className="mt-10">
              <a href="#" className="bg-transparent border-2 border-[#DD8B26] text-[#2B2925] text-base font-bold py-4 px-8 rounded-full hover:bg-[#DD8B26] hover:text-white transition-colors flex items-center justify-center max-w-xs mx-auto lg:mx-0">
                Descubre Más <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="relative">
             <img src="https://picsum.photos/seed/iceberg-hero/800/600" alt="Connect your Amazon store" className="rounded-2xl shadow-2xl w-full" />
             <div className="absolute inset-0 bg-black/20 rounded-2xl flex items-center justify-center">
                <div className="w-20 h-20 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;