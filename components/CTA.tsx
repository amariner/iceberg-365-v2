
import React from 'react';

const CTA: React.FC = () => {
  return (
    <section id="contacto" className="py-20 bg-[#f7f5f1]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center bg-white border border-[#e6e3dd] rounded-[40px] p-10 shadow-[0_35px_90px_rgba(17,17,17,0.08)]">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase font-semibold text-[#7a7772]">Próximo paso</p>
            <h2 className="font-dm-sans-black text-3xl md:text-[42px] text-[#131313] leading-tight mt-3">
              Agendemos una sesión para entender tus objetivos y priorizar juntos.
            </h2>
            <p className="text-lg text-[#4d4d4d] mt-4">
              45 minutos para revisar tu situación, identificar quick wins y definir cómo puede ayudarte Iceberg365.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:hola@iceberg365.com"
                className="bg-[#131313] text-white px-6 py-4 rounded-full font-semibold hover:-translate-y-0.5 transition-transform"
              >
                Reservar llamada
              </a>
              <a
                href="#recursos"
                className="text-[#131313] font-semibold flex items-center gap-3"
              >
                Ver metodología
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
          <div className="relative rounded-[32px] overflow-hidden h-full min-h-[260px]">
            <img
              src="https://images.pexels.com/photos/1181352/pexels-photo-1181352.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Reunión con clientes"
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-xl border border-[#ebe7de] rounded-2xl p-4 shadow-lg text-sm text-[#4d4d4d] max-w-[220px]">
              Agenda flexible: sesiones en remoto adaptadas a tu equipo.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
