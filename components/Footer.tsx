import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111827] text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12">
          <div>
            <img src="/images/logos/logo-w.png" alt="Iceberg365 Logo" className="h-8 mb-6" />
            <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
              Vende más y mejor en Marketplaces con estrategia.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-end gap-12 text-sm">
            <div className="flex flex-col space-y-4">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Enlaces</p>
              <a href="#servicios" className="hover:text-white/60">Servicios</a>
              <a href="#expertise" className="hover:text-white/60">Expertise</a>
              <a href="#recursos" className="hover:text-white/60">Recursos</a>
            </div>
            <div className="flex flex-col space-y-4">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Legal</p>
              <a href="#" className="hover:text-white/60">Aviso legal</a>
              <a href="#" className="hover:text-white/60">Cookies</a>
            </div>
            <div className="flex flex-col space-y-4">
              <p className="text-xs uppercase tracking-widest text-gray-500 font-semibold">Contacto</p>
              <a href="mailto:hola@iceberg365.com" className="hover:text-white/60">hola@iceberg365.com</a>
              <a href="#contacto" className="hover:text-white/60">Agenda una sesión</a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-gray-800 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Iceberg365. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
