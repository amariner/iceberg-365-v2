
import React from 'react';

const bullets = [
  'Auditorías profundas de catálogo y posicionamiento.',
  'Planes de lanzamiento y expansión 100% medibles.',
  'Automatización de reporting y gobierno de datos.',
];

const WhoWeHelp: React.FC = () => {
  return (
    <section id="expertise" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xs tracking-[0.4em] uppercase font-semibold text-[#7a7772]">Expertise</p>
            <h2 className="font-dm-sans-black text-3xl md:text-[40px] text-[#131313] leading-tight">
              Integramos marketing, ventas y operaciones para que cada mercado funcione como un reloj.
            </h2>
            <p className="text-lg text-[#4d4d4d]">
              Trabajamos junto a equipos internos que necesitan foco y acompañamiento senior. Conectamos marketplaces, eCommerce y retail para que tus decisiones tengan contexto y números.
            </p>
            <ul className="space-y-4">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-[#2c2c2c]">
                  <span className="mt-1 w-2.5 h-2.5 rounded-full bg-[#131313]" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 pt-4">
              <div className="text-4xl font-dm-sans-black text-[#131313]">+8</div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#969186]">
                años construyendo estrategias para marcas líderes
              </p>
            </div>
          </div>
          <div className="bg-[#f7f5f1] rounded-[32px] border border-[#e6e3dd] p-6 shadow-[0_20px_60px_rgba(17,17,17,0.05)]">
            <div className="rounded-[24px] overflow-hidden">
              <img
                src="https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Equipo colaborando"
                className="w-full h-[360px] object-cover"
              />
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl border border-[#ebe7de] p-5">
                <p className="text-sm text-[#7a7772] uppercase tracking-[0.3em]">Sectores</p>
                <p className="text-lg font-semibold text-[#131313] mt-2">Beauty, Home, Tech, Lifestyle</p>
              </div>
              <div className="bg-white rounded-2xl border border-[#ebe7de] p-5">
                <p className="text-sm text-[#7a7772] uppercase tracking-[0.3em]">Modelos</p>
                <p className="text-lg font-semibold text-[#131313] mt-2">Vendor, Seller, híbridos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
