import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#2B2925] text-white border-t-4 border-[#DD8B26] pt-16">
            <div className="container mx-auto px-6">
                {/* Top section with logo, nav, and partner badges */}
                <div className="grid lg:grid-cols-3 gap-8 border-b border-gray-700 pb-12">
                    <div className="lg:col-span-2">
                        <img src="https://iceberg365.com/img/logo-w.png" alt="Iceberg365 Logo" className="h-8 mb-8" />
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            <ul className="space-y-4">
                                <li><a href="#" className="hover:text-[#DD8B26] transition-colors">Cómo Ayudamos</a></li>
                                <li><a href="#" className="hover:text-[#DD8B26] transition-colors">Recursos</a></li>
                                <li><a href="#" className="hover:text-[#DD8B26] transition-colors">Socios</a></li>
                                <li><a href="#" className="hover:text-[#DD8B26] transition-colors">Contáctanos</a></li>
                            </ul>
                            <ul className="space-y-4">
                                <li><a href="#" className="hover:text-[#DD8B26] transition-colors">Para Empresas</a></li>
                                <li><a href="#" className="hover:text-[#DD8B26] transition-colors">Sobre Nosotros</a></li>
                                <li><a href="#" className="hover:text-[#DD8B26] transition-colors">Afiliado</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div className="flex flex-col md:flex-row lg:flex-col gap-4">
                            <a href="#" className="border border-white text-center py-3 px-6 rounded-full hover:bg-white hover:text-black transition-colors">Iniciar Sesión</a>
                            <a href="#" className="bg-[#DD8B26] text-center text-black font-bold py-3 px-6 rounded-full hover:opacity-90 transition-colors">Regístrate</a>
                        </div>
                        <div className="flex items-center space-x-4">
                            <img src="https://getida.com/wp-content/uploads/2023/08/amazon-footer-img1.svg" alt="Amazon Service Partner" className="h-20" />
                            <img src="https://getida.com/wp-content/uploads/2023/08/amazon-footer-img2.svg" alt="Amazon Software Partner" className="h-20" />
                        </div>
                        <img src="https://getida.com/wp-content/uploads/2023/09/amazon-ema.svg" alt="Amazon Emerald" className="h-8" />
                    </div>
                </div>

                {/* Bottom section with form, social, and legal */}
                <div className="py-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <form className="flex flex-col md:flex-row gap-4">
                                <label htmlFor="email" className="sr-only">Tu correo electrónico</label>
                                <input type="email" id="email" placeholder="Tu correo electrónico" className="bg-[#62605c] placeholder-gray-300 rounded-lg px-4 py-3 w-full md:w-auto flex-grow" />
                                <button type="submit" className="bg-[#F4EDE5] text-black font-bold py-3 px-8 rounded-full hover:opacity-90">Registrarse</button>
                            </form>
                        </div>
                        <div className="flex flex-col lg:items-end">
                            <div className="flex space-x-4 mb-4 justify-center lg:justify-end">
                                {/* Social Icons */}
                                <a href="#" className="hover:opacity-80"><img src="https://picsum.photos/seed/fb/32/32" className="rounded-full" alt="Facebook"/></a>
                                <a href="#" className="hover:opacity-80"><img src="https://picsum.photos/seed/li/32/32" className="rounded-full" alt="LinkedIn"/></a>
                                <a href="#" className="hover:opacity-80"><img src="https://picsum.photos/seed/ig/32/32" className="rounded-full" alt="Instagram"/></a>
                                <a href="#" className="hover:opacity-80"><img src="https://picsum.photos/seed/x/32/32" className="rounded-full" alt="X"/></a>
                                <a href="#" className="hover:opacity-80"><img src="https://picsum.photos/seed/yt/32/32" className="rounded-full" alt="YouTube"/></a>
                            </div>
                            <p className="text-sm text-gray-400 text-center lg:text-right">2025 © Iceberg365 | Todos los derechos reservados</p>
                            <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-400 mt-2 justify-center lg:justify-end">
                                <a href="#" className="hover:text-white">Política de Privacidad</a>
                                <a href="#" className="hover:text-white">Términos de Servicio</a>
                                <a href="#" className="hover:text-white">Solicitar Acceso a Tus Datos</a>
                                <a href="#" className="hover:text-white">Aviso de Privacidad</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;