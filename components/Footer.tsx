import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0d0d0d] text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12">
          <div>
            <img src="https://iceberg365.com/img/logo.png" alt="Iceberg365 Logo" className="h-8 mb-6" />
            <p className="text-lg text-white/70 max-w-lg">
              Consultoría para marcas que quieren vender más y mejor en marketplaces sin improvisar.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-end gap-6 text-sm">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Enlaces</p>
              <a href="#servicios" className="hover:text-white/60">Servicios</a>
              <a href="#expertise" className="hover:text-white/60">Expertise</a>
              <a href="#recursos" className="hover:text-white/60">Recursos</a>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Legal</p>
              <a href="#" className="hover:text-white/60">Aviso legal</a>
              <a href="#" className="hover:text-white/60">Cookies</a>
            </div>
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Contacto</p>
              <a href="mailto:hola@iceberg365.com" className="hover:text-white/60">hola@iceberg365.com</a>
              <a href="#contacto" className="hover:text-white/60">Agenda una sesión</a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-sm text-white/50">© {new Date().getFullYear()} Iceberg365. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
