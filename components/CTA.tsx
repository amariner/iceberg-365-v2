
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-iceberg-bg">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center bg-white border border-gray-100 rounded-3xl p-8 md:p-12 shadow-2xl shadow-gray-200/50">
          <div>
            <p className="text-xs tracking-widest uppercase font-semibold text-gray-500">Próximo paso</p>
            <h2 className="font-dm-sans-black text-3xl md:text-[42px] text-gray-900 leading-[1.1] mt-3">
              Deja de perder margen y empieza a escalar hoy.
            </h2>
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              45 minutos para revisar tu situación, identificar quick wins y definir cómo puede ayudarte Iceberg365.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:hola@iceberg365.com"
                className="bg-gradient-to-r from-[#FFB088] to-[#FFA07A] text-white px-8 py-4 rounded-2xl font-bold hover:-translate-y-1 transition-all duration-300 shadow-lg shadow-orange-200/40"
              >
                Quiero escalar mi marca
              </a>
              <a
                href="#recursos"
                className="text-gray-900 font-semibold flex items-center gap-3 px-4 py-2 rounded-xl hover:bg-gray-50 transition-colors"
              >
                Ver metodología
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative rounded-3xl overflow-hidden h-full min-h-[300px]">
            <img
              src="/images/contacto.jpeg"
              alt="Reunión con clientes"
              className="w-full h-full object-cover"
            />
            <div className="hidden md:block absolute top-6 right-6 bg-white/90 backdrop-blur-xl border border-gray-100 rounded-2xl p-5 shadow-lg text-sm text-gray-600 max-w-[220px]">
              Agenda flexible: sesiones en remoto adaptadas a tu equipo.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
