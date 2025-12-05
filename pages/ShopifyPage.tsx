import React, { useState } from 'react';
import FadeIn from '../components/FadeIn';
import CTA from '../components/CTA';

const CheckIcon = () => (
    <svg className="w-5 h-5 text-[#DD8B26] mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);

const AccordionItem: React.FC<{ question: string; answer: React.ReactNode }> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200 last:border-0">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full text-left py-6 flex justify-between items-center group"
            >
                <span className="text-lg font-medium text-gray-900 group-hover:text-[#DD8B26] transition-colors font-dm-sans">{question}</span>
                <span className={`text-2xl font-thin text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
            </button>
            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mb-6' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="text-gray-600 leading-relaxed font-dm-sans">{answer}</div>
            </div>
        </div>
    );
};

const ShopifyPage: React.FC = () => {
    return (
        <div className="bg-white font-dm-sans">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-iceberg-bg pt-32 pb-20 lg:pt-40 lg:pb-28 min-h-[60vh] flex items-center">
                <div className="absolute inset-x-0 top-[-200px] sm:top-[-300px] mx-auto h-[480px] w-[480px] sm:h-[640px] sm:w-[640px] rounded-full bg-[#E2E8F0] blur-[160px] opacity-70 pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <FadeIn>
                        <div className="max-w-4xl mx-auto text-center">
                            <span className="inline-flex items-center gap-2 text-xs tracking-wider uppercase font-semibold text-gray-500 bg-white/50 border border-gray-200 rounded-full px-3 py-1.5 backdrop-blur-sm mb-6">
                                SHOPIFY EXPERTS & ECOMMERCE AGENCY
                            </span>
                            <h1 className="font-dm-sans font-bold text-4xl md:text-6xl text-gray-900 mb-8 leading-[1.1] tracking-tight">
                                Desbloquea tu Potencial Ecommerce: <br className="hidden md:block" />
                                <span className="text-[#DD8B26]">Tu Tienda Shopify, Optimizada para Vender.</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                                No solo diseñamos tiendas bonitas; construimos máquinas de ventas. Desde migraciones complejas hasta desarrollo de temas a medida y estrategias de CRO.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="#contacto" className="bg-gradient-to-r from-[#FFB088] to-[#FFA07A] text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-orange-200/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                                    Auditoría Gratuita
                                    <ArrowRightIcon />
                                </a>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Problem Identification */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <FadeIn>
                        <div className="max-w-3xl mx-auto text-center mb-16">
                            <h2 className="font-dm-sans font-bold text-3xl md:text-4xl text-gray-900 mb-6">¿Tu ecommerce tiene fugas de dinero?</h2>
                            <p className="text-lg text-gray-600">La mayoría de las tiendas pierden el 98% de sus visitas. Cambiemos eso.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {[
                                "¿Tu tasa de conversión está estancada por debajo del 1.5%?",
                                "¿La experiencia en móvil es lenta y frustrante para tus usuarios?",
                                "¿Te cuesta integrar tu ERP, CRM o logística con Shopify?",
                                "¿Sientes que tu plantilla actual limita el crecimiento de tu marca?"
                            ].map((item, index) => (
                                <div key={index} className="flex items-start p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                                    <div className="bg-[#FDF0D6] p-2 rounded-full mr-4 flex-shrink-0">
                                        <svg className="w-6 h-6 text-[#DD8B26]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                        </svg>
                                    </div>
                                    <p className="text-lg text-gray-800 font-medium font-dm-sans">{item}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-dm-sans font-bold text-3xl md:text-4xl text-gray-900 mb-4">Soluciones Shopify 360º</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Expertos certificados en el ecosistema Shopify para marcas DTC que buscan escalar.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <FadeIn>
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full flex flex-col">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-dm-sans">Diseño y Desarrollo a Medida</h3>
                                <p className="text-gray-500 mb-6">Tiendas únicas que reflejan la identidad de tu marca y convierten.</p>
                                <ul className="space-y-4 mt-auto">
                                    {[
                                        { title: "Diseño UX/UI Centrado en Conversión", desc: "Interfaces intuitivas diseñadas para guiar al usuario a la compra." },
                                        { title: "Desarrollo de Temas Shopify 2.0", desc: "Código limpio, rápido y 100% optimizado para Core Web Vitals." },
                                        { title: "Headless Commerce", desc: "Arquitecturas avanzadas con Hydrogen para máxima velocidad y flexibilidad." },
                                        { title: "Optimización Mobile First", desc: "Experiencia de compra perfecta en cualquier dispositivo." }
                                    ].map((service, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckIcon />
                                            <div className="ml-3">
                                                <span className="font-bold text-gray-900 block font-dm-sans">{service.title}</span>
                                                <span className="text-sm text-gray-600">{service.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>

                        <FadeIn>
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full flex flex-col">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-dm-sans">Crecimiento y Operaciones</h3>
                                <p className="text-gray-500 mb-6">Más allá del lanzamiento: optimización continua y escalado.</p>
                                <ul className="space-y-4 mt-auto">
                                    {[
                                        { title: "Migraciones sin Dolor", desc: "Traemos tu tienda desde WooCommerce, PrestaShop o Magento sin perder SEO ni datos." },
                                        { title: "Integraciones Avanzadas (ERP/CRM)", desc: "Conectamos tu tienda con tus herramientas de gestión y logística." },
                                        { title: "CRO (Conversion Rate Optimization)", desc: "Auditorías y tests A/B continuos para mejorar el rendimiento." },
                                        { title: "Soporte y Mantenimiento", desc: "Tu partner técnico de confianza para actualizaciones y mejoras constantes." }
                                    ].map((service, i) => (
                                        <li key={i} className="flex items-start">
                                            <CheckIcon />
                                            <div className="ml-3">
                                                <span className="font-bold text-gray-900 block font-dm-sans">{service.title}</span>
                                                <span className="text-sm text-gray-600">{service.desc}</span>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Methodology */}
            <section className="py-20 bg-[#EBF5FF]">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <FadeIn>
                            <div>
                                <h2 className="font-dm-sans font-bold text-3xl md:text-5xl mb-6 text-gray-900">Metodología: De la Idea al Éxito</h2>
                                <p className="text-xl text-gray-600 mb-8">Un proceso probado para garantizar calidad, velocidad y resultados.</p>
                                <div className="space-y-6">
                                    {[
                                        { title: "Discovery & Estrategia", desc: "Analizamos tu negocio, competencia y objetivos para trazar la hoja de ruta." },
                                        { title: "Diseño & Prototipado", desc: "Visualizamos la experiencia de usuario antes de escribir una sola línea de código." },
                                        { title: "Desarrollo & QA", desc: "Construcción técnica robusta y pruebas exhaustivas en todos los dispositivos." },
                                        { title: "Lanzamiento & Growth", desc: "Despliegue controlado y plan de crecimiento post-launch para escalar ventas." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#DD8B26]/10 flex items-center justify-center text-[#DD8B26] font-bold text-xl font-dm-sans">
                                                {i + 1}
                                            </div>
                                            <div className="ml-6">
                                                <h4 className="text-xl font-bold mb-2 font-dm-sans text-gray-900">{item.title}</h4>
                                                <p className="text-gray-600">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                        <FadeIn>
                            <div className="relative">
                                <div className="aspect-square rounded-3xl overflow-hidden bg-white border border-blue-100 shadow-2xl">
                                    <img
                                        src="/images/shopify_mockup.png"
                                        alt="Mockup de tienda Shopify diseñada por Iceberg"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-dm-sans font-bold text-3xl md:text-4xl text-gray-900 mb-8 text-center">Preguntas Frecuentes</h2>
                        <div className="space-y-2">
                            <AccordionItem
                                question="¿Por qué elegir Shopify frente a otras plataformas?"
                                answer="Shopify es la plataforma líder mundial por su estabilidad, seguridad y ecosistema. Permite escalar desde una startup hasta una multinacional (Shopify Plus) sin preocuparse por servidores, parches de seguridad o caídas en Black Friday."
                            />
                            <AccordionItem
                                question="¿Cuánto tiempo tarda en desarrollarse una tienda?"
                                answer="Un proyecto típico de Shopify a medida puede tardar entre 4 y 8 semanas. Esto incluye fases de diseño, desarrollo, configuración de pagos/envíos y carga de productos. Para proyectos más complejos o migraciones grandes, evaluamos los plazos caso por caso."
                            />
                            <AccordionItem
                                question="¿Podré gestionar la tienda yo mismo?"
                                answer="Absolutamente. Una de las grandes ventajas de Shopify es su panel de administración intuitivo. Te entregamos la tienda con una formación completa para que puedas gestionar productos, pedidos, clientes y marketing con total autonomía."
                            />
                            <AccordionItem
                                question="¿Hacéis migraciones desde WooCommerce o PrestaShop?"
                                answer="Sí, somos expertos en migraciones complejas. Nos aseguramos de transferir todo tu catálogo, clientes, pedidos históricos y, lo más importante, realizamos redirecciones 301 para que no pierdas tu posicionamiento SEO actual."
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Shared CTA Section */}
            <FadeIn>
                <CTA />
            </FadeIn>
        </div>
    );
};

export default ShopifyPage;
