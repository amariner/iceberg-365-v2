import React from 'react';

const resources = [
  {
    tag: 'Guía',
    color: 'from-[#fef6d4] to-[#fff8e8]',
    title: 'Checklist para auditar tu catálogo en Amazon en una tarde',
    description: 'Los 10 puntos clave que revisamos antes de escalar inversión.',
  },
  {
    tag: 'Caso',
    color: 'from-[#f0f5ff] to-[#f7faff]',
    title: 'Cómo duplicamos el share de categoría en 90 días',
    description: 'Historia real de una marca de cuidado personal.',
  },
  {
    tag: 'Podcast',
    color: 'from-[#fef0fb] to-[#fff5fb]',
    title: 'Retail Media sin humo: métricas que sí importan',
    description: 'Conversación con equipos de marketing in-house.',
  },
  {
    tag: 'Artículo',
    color: 'from-[#edf8f2] to-[#f4fbf7]',
    title: 'Plantilla para coordinar lanzamientos omnicanal',
    description: 'Un board sencillo para alinear retail, paid y CRM.',
  },
];

const Resources: React.FC = () => {
  return (
    <section id="recursos" className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div>
            <p className="text-xs tracking-[0.4em] uppercase font-semibold text-[#7a7772]">Recursos</p>
            <h2 className="font-dm-sans-black text-3xl md:text-[40px] text-[#131313] mt-3">
              Compartimos lo que aprendemos con marcas como la tuya.
            </h2>
          </div>
          <a
            href="#contacto"
            className="self-start bg-[#131313] text-white px-6 py-3 rounded-full font-semibold hover:-translate-y-0.5 transition-transform"
          >
            Ver todos
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {resources.map((resource) => (
            <article
              key={resource.title}
              className={`bg-gradient-to-b ${resource.color} border border-[#ebe7de] rounded-[28px] p-6 flex flex-col min-h-[220px]`}
            >
              <span className="text-xs uppercase tracking-[0.4em] text-[#969186]">{resource.tag}</span>
              <h3 className="text-xl font-semibold text-[#131313] mt-4">{resource.title}</h3>
              <p className="text-sm text-[#4d4d4d] mt-3 flex-grow">{resource.description}</p>
              <button className="mt-6 text-sm font-semibold text-left text-[#131313] flex items-center gap-2">
                Descargar
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
