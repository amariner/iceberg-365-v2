
import React from 'react';

const ArrowIcon: React.FC = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="ml-3">
    <path
      d="M5 12H19M19 12L12 5M19 12L12 19"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-iceberg-bg min-h-[calc(100vh-80px)] flex items-center">
      <div className="absolute inset-x-0 top-[-200px] sm:top-[-300px] mx-auto h-[480px] w-[480px] sm:h-[640px] sm:w-[640px] rounded-full bg-[#f5f0e4] blur-[160px] opacity-70 pointer-events-none" />
      <div className="container mx-auto px-6 py-12 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="lg:order-1">
            <span className="inline-flex items-center gap-2 text-xs tracking-wider uppercase font-semibold text-gray-500 bg-white/50 border border-gray-200 rounded-full px-3 py-1.5 backdrop-blur-sm">
              Consultoría Amazon & Retail Media
            </span>
            <h1 className="font-dm-sans font-bold text-3xl md:text-5xl lg:text-[64px] leading-[1.1] text-gray-900 mt-6 md:mt-8 tracking-tight">
              Vende más en Amazon y Marketplaces con estrategia basada en datos.
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mt-6 max-w-xl leading-relaxed">
              Nos ocupamos de la estrategia, la operativa y la medición para que te centres en lo importante: tu producto y tus clientes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#servicios"
                className="bg-gradient-to-r from-[#FFB088] to-[#FFA07A] text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-orange-200/40 hover:-translate-y-1 transition-all duration-300"
              >
                Solicitar auditoría
              </a>
              <a
                href="#recursos"
                className="flex items-center text-gray-900 font-semibold hover:gap-3 transition-all gap-2 px-4 py-2 rounded-xl hover:bg-white/50"
              >
                Casos y recursos <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="lg:order-2 flex justify-end">
            <div className="relative w-full max-w-[600px] aspect-[4/5] lg:h-[calc(100vh-180px)] max-h-[700px] rounded-3xl overflow-hidden border border-gray-200 shadow-2xl shadow-gray-200/50 bg-white">
              <img
                src="/images/hero-warehouse.png"
                alt="Especialista gestionando logística en almacén"
                className="w-full h-full object-cover"
              />
              <div className="hidden md:block absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl rounded-2xl border border-[#ebe7de] p-4 shadow-lg">
                <p className="text-sm text-[#4d4d4d]">Acompañamos a equipos de marketing y eCommerce que necesitan resultados visibles.</p>
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((item) => (
                      <img
                        key={item}
                        src={`https://i.pravatar.cc/56?img=${item + 30}`}
                        alt="Cliente"
                        className="w-10 h-10 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-[#969186]">Clientes activos</p>
                    <p className="text-sm font-semibold text-[#131313]">+35 marcas acompañadas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
