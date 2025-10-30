
import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#2B2925] text-white pt-12 pb-8">
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <div className="inline-block bg-[#DD8B26] text-[#2B2925] font-bold text-sm px-4 py-2 rounded-full mb-6">
                        Official Partner Amazon Ads
                    </div>
                    <img src="https://iceberg365.com/img/logo-w.png" alt="Iceberg365 Logo" className="h-8 mx-auto mb-4" />
                    <p className="text-lg text-gray-400 mb-8">Diseñado para impulsar el crecimiento de tu negocio.</p>
                </div>

                <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
                    <p className="order-2 md:order-1 mt-4 md:mt-0">© 2025 Iceberg. Todos los derechos reservados.</p>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center order-1 md:order-2">
                        <a href="#" className="hover:text-white">Aviso legal</a>
                        <a href="#" className="hover:text-white">Cookies</a>
                        <a href="#" className="hover:text-white">Contacto</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
