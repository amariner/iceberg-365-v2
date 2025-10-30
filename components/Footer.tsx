
import React, { useState } from 'react';

const Footer: React.FC = () => {
    const [logoError, setLogoError] = useState(false);
    
    return (
        <footer className="bg-white text-[#2C2C2C] pt-12 pb-8">
            <div className="container mx-auto px-6">
                <div className="text-center">
                    <img src="https://iceberg365.com/img/logo.png" alt="Iceberg365 Logo" className="h-8 mx-auto mb-4" />
                    <p className="text-lg text-[#2C2C2C]/70 mb-8">Diseñado para hacer crecer tu negocio.</p>
                </div>

                <div className="border-t border-[#2C2C2C]/20 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-[#2C2C2C]/70">
                    <div className="order-2 md:order-1 mt-4 md:mt-0 flex items-center gap-4 flex-wrap justify-center md:justify-start">
                        <p>© 2025 Iceberg.</p>
                        <div className="inline-flex items-center gap-2 bg-[#FFD814]/20 px-3 py-1.5 rounded-full border border-[#FFD814]/30">
                            {!logoError && (
                                <img 
                                    src="https://images-na.ssl-images-amazon.com/images/G/01/ads/partners/partner-badge.svg" 
                                    alt="Amazon Ads Partner" 
                                    className="h-4"
                                    onError={() => setLogoError(true)}
                                />
                            )}
                            <span className="text-[#2C2C2C] font-bold text-xs">Official Partner Amazon Ads</span>
                        </div>
                    </div>
                    <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center order-1 md:order-2">
                        <a href="#" className="hover:text-[#FF7A00] transition-colors">Aviso legal</a>
                        <a href="#" className="hover:text-[#FF7A00] transition-colors">Cookies</a>
                        <a href="#" className="hover:text-[#FF7A00] transition-colors">Contacto</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
