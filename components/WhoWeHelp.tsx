
import React from 'react';

const bullets = [
  'Auditorías profundas de catálogo y posicionamiento.',
  'Planes de lanzamiento y expansión 100% medibles.',
  'Automatización de reporting y gobierno de datos.',
];

const WhoWeHelp: React.FC = () => {
  return (
    <section id="expertise" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <p className="text-xs tracking-widest uppercase font-semibold text-gray-500">Nosotros</p>
            <h2 className="font-dm-sans-black text-3xl md:text-[40px] text-gray-900 leading-[1.1]">
              Integramos marketing, ventas y operaciones para que cada mercado funcione como un reloj.
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Trabajamos junto a equipos internos que necesitan foco y acompañamiento senior. Conectamos marketplaces, eCommerce y retail para que tus decisiones tengan contexto y números.
            </p>
            <ul className="space-y-4">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-gray-700">
                  <span className="mt-2 w-2 h-2 rounded-full bg-gray-900" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-4 pt-4">
              <div className="text-4xl font-dm-sans-black text-gray-900">+8</div>
              <p className="text-sm uppercase tracking-widest text-gray-500 font-semibold">
                años construyendo estrategias para marcas líderes
              </p>
            </div>
          </div>
          <div className="bg-gray-50 rounded-3xl border border-gray-100 p-6 shadow-xl shadow-gray-100/50">
            <div className="rounded-[24px] overflow-hidden">
              <img
                src="/images/marketing-grupo.jpeg"
                alt="Equipo colaborando"
                className="w-full h-[360px] object-cover"
              />
            </div>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Sectores</p>
                <p className="text-lg font-semibold text-gray-900 mt-2">Beauty, Home, Tech, Lifestyle</p>
              </div>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                <p className="text-sm text-gray-400 uppercase tracking-widest font-semibold">Modelos</p>
                <p className="text-lg font-semibold text-gray-900 mt-2">Vendor, Seller, híbridos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
