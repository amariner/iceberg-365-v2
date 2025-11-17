
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
  const stats = [
    { label: 'Marketplace gestionados', value: '+12', detail: 'Amazon, Fnac, ECI y más' },
    { label: 'Crecimiento medio', value: '2.3x', detail: 'en los primeros 6 meses' },
  ];

  return (
    <section className="relative overflow-hidden bg-[#f7f5f1]">
      <div className="absolute inset-x-0 top-[-200px] sm:top-[-300px] mx-auto h-[480px] w-[480px] sm:h-[640px] sm:w-[640px] rounded-full bg-[#f5f0e4] blur-[160px] opacity-70 pointer-events-none" />
      <div className="container mx-auto px-6 pt-24 pb-20 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 text-xs tracking-[0.4em] uppercase font-semibold text-[#5e5c58] bg-white/70 border border-[#e6e3dd] rounded-full px-4 py-2">
              Consultoría Amazon & Retail Media
            </span>
            <h1 className="font-dm-sans-black text-4xl md:text-5xl lg:text-[56px] leading-tight text-[#131313] mt-6 tracking-tight">
              Expertos en hacer crecer tu negocio en Amazon y marketplaces, sin perder tu esencia.
            </h1>
            <p className="text-lg md:text-xl text-[#4d4d4d] mt-6 max-w-xl">
              Nos ocupamos de la estrategia, la operativa y la medición para que te centres en lo importante: tu producto y tus clientes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#servicios"
                className="bg-[#ebf213] text-[#131313] px-6 py-4 rounded-full font-semibold shadow-[0_15px_45px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 transition-transform"
              >
                Ver servicios
              </a>
              <a
                href="#recursos"
                className="flex items-center text-[#131313] font-semibold hover:gap-3 transition-all gap-2"
              >
                Casos y recursos <ArrowIcon />
              </a>
            </div>
            <div className="mt-12 grid sm:grid-cols-2 gap-4 text-sm">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white border border-[#e6e3dd] rounded-2xl px-4 py-3 shadow-[0_15px_60px_rgba(17,17,17,0.05)]"
                >
                  <p className="text-[10px] tracking-[0.3em] uppercase text-[#969186]">{stat.label}</p>
                  <p className="text-xl font-dm-sans-black text-[#131313] leading-tight mt-1">{stat.value}</p>
                  <p className="text-[11px] text-[#4d4d4d] leading-tight mt-1">{stat.detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative h-[70vh] lg:h-[calc(100vh-176px)] rounded-[32px] overflow-hidden border border-[#e7e1d8] shadow-[0_25px_80px_rgba(17,17,17,0.08)] bg-white">
              <img
                src="/images/hero-warehouse.png"
                alt="Especialista gestionando logística en almacén"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-xl rounded-2xl border border-[#ebe7de] p-4 shadow-lg">
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
