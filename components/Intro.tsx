import React from 'react';

const Intro: React.FC = () => {
  return (
    <section className="bg-[#F4EDE5] py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <img 
              src="https://images.unsplash.com/photo-1586528116311-08dd6e784b78?w=700&h=450&fit=crop" 
              alt="Almacén con cajas de inventario" 
              className="rounded-2xl shadow-xl object-cover"
            />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-3xl lg:text-4xl leading-snug text-[#2B2925]">
              Los vendedores de Amazon FBA experimentan discrepancias que pueden valer miles de millones de dólares cada año en inventario perdido o dañado, sobrecargos y otros reembolsos que pueden quedar sin reclamar. Pero no con Iceberg365.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;