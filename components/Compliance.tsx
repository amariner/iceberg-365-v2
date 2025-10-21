import React from 'react';

const Compliance: React.FC = () => {
    return (
        <section className="bg-[#2B2925] text-white py-20">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="text-center lg:text-left">
                        <h2 className="font-dm-sans-black text-7xl lg:text-8xl leading-none tracking-tighter text-[#8A63D2]">
                            LA CONFORMIDAD ES LO PRIMERO
                        </h2>
                    </div>
                    <div>
                        <p className="text-[#cbc8c5] text-lg md:text-xl mb-8">
                            Como socio de ventas autorizado de Amazon, somos expertos en las políticas de FBA de Amazon, desde los términos de servicio hasta la protección de datos. Iceberg365 se ha asociado con Amazon para probar en beta funciones de Seller Central como las Notificaciones y someterse a revisiones de cumplimiento exhaustivas para que tu experiencia de recuperación de FBA esté siempre a la altura de los estándares de la industria. Obtienes la máxima eficiencia y experiencia sin compromisos.
                        </p>
                        <div className="flex items-center justify-center lg:justify-start space-x-4">
                            <img src="https://getida.com/wp-content/uploads/2023/08/amazon-footer-img1.svg" alt="Amazon Service Partner" className="h-28" />
                            <img src="https://getida.com/wp-content/uploads/2023/08/amazon-footer-img2.svg" alt="Amazon Software Partner" className="h-28" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Compliance;