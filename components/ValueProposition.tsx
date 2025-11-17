
import React from 'react';

const services = [
  {
    title: 'Optimización de ACOS',
    description: 'Ajustamos pujas, audiencias y creatividades para dominar Retail Media sin perder rentabilidad.',
    color: 'from-[#fef6d4] to-[#fff8e8]',
  },
  {
    title: 'Estrategia internacional',
    description: 'Abrimos y pulimos tus listings para escalar a nuevos países con la misma consistencia de marca.',
    color: 'from-[#f0f5ff] to-[#f7faff]',
  },
  {
    title: 'Operativa y catálogo',
    description: 'Nos ocupamos del stock, compliance y contenidos para que cada lanzamiento sea impecable.',
    color: 'from-[#fef0fb] to-[#fff5fb]',
  },
  {
    title: 'Marketing 360º',
    description: 'Integramos la estrategia de marketplaces con tu eCommerce, CRM y paid media.',
    color: 'from-[#edf8f2] to-[#f4fbf7]',
  },
];

const ValueProposition: React.FC = () => {
  return (
    <section id="servicios" className="bg-[#f7f5f1] pt-16 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-10 items-start">
          <div className="bg-white rounded-[32px] p-10 border border-[#e6e3dd] shadow-[0_25px_80px_rgba(17,17,17,0.06)]">
            <p className="text-xs tracking-[0.4em] uppercase font-semibold text-[#7a7772]">Servicios</p>
            <h2 className="font-dm-sans-black text-3xl md:text-[40px] text-[#131313] mt-4 leading-tight">
              Diseñamos un plan integral para que tus ventas online crezcan de forma sostenible.
            </h2>
            <p className="text-lg text-[#4d4d4d] mt-4">
              Diagnosticamos, priorizamos y ejecutamos junto a tu equipo. Cada sprint se acompaña de métricas claras para que sepas qué decisión impactó en tus resultados.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex-1 min-w-[220px] bg-[#fef6d4] border border-[#f5e7aa] rounded-2xl p-5">
                <p className="text-sm text-[#7a6d32] uppercase tracking-[0.2em]">Resultado medio</p>
                <p className="text-3xl font-dm-sans-black text-[#131313] mt-2">+42%</p>
                <p className="text-sm text-[#5a564d]">en ROAS en 3 meses</p>
              </div>
              <div className="flex-1 min-w-[220px] bg-[#f0f5ff] border border-[#d7e3ff] rounded-2xl p-5">
                <p className="text-sm text-[#4a5a7b] uppercase tracking-[0.2em]">Equipo senior</p>
                <p className="text-3xl font-dm-sans-black text-[#131313] mt-2">+15</p>
                <p className="text-sm text-[#4a4a4a]">consultores especializados</p>
              </div>
            </div>
          </div>
          <div className="rounded-[32px] overflow-hidden border border-[#e6e3dd]">
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Equipo de estrategia digital"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {services.map((service) => (
            <div
              key={service.title}
              className={`bg-gradient-to-b ${service.color} border border-[#ebe7de] rounded-[28px] p-8 flex flex-col min-h-[220px]`}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-[#969186]">Servicio</p>
              <h3 className="text-2xl font-dm-sans-black text-[#131313] mt-3">{service.title}</h3>
              <p className="text-[#4d4d4d] mt-3 flex-grow">{service.description}</p>
              <span className="mt-6 inline-flex items-center text-sm font-semibold text-[#131313]">
                Saber más
                <svg className="ml-2" width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
