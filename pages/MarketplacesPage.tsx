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

const MarketplacesPage: React.FC = () => {
    return (
        <div className="bg-white font-dm-sans">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-iceberg-bg pt-32 pb-20 lg:pt-40 lg:pb-28 min-h-[60vh] flex items-center">
                {/* Background effects from Hero.tsx */}
                <div className="absolute inset-x-0 top-[-200px] sm:top-[-300px] mx-auto h-[480px] w-[480px] sm:h-[640px] sm:w-[640px] rounded-full bg-[#f5f0e4] blur-[160px] opacity-70 pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <FadeIn>
                        <div className="max-w-4xl mx-auto text-center">
                            <span className="inline-flex items-center gap-2 text-xs tracking-wider uppercase font-semibold text-gray-500 bg-white/50 border border-gray-200 rounded-full px-3 py-1.5 backdrop-blur-sm mb-6">
                                MARKETPLACES
                            </span>
                            <h1 className="font-dm-sans font-bold text-4xl md:text-6xl text-gray-900 mb-8 leading-[1.1] tracking-tight">
                                Gestión Integral de Marketplaces: <br className="hidden md:block" />
                                <span className="text-[#DD8B26]">Escala tus Ventas</span> en Amazon y Miravia.
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Transformamos tu catálogo en un canal de ventas rentable. Estrategia, protección de marca y expansión internacional con foco obsesivo en tu margen neto.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="#contacto" className="bg-gradient-to-r from-[#FFB088] to-[#FFA07A] text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-orange-200/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                                    Solicitar Auditoría de Mercado
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
                            <h2 className="font-dm-sans font-bold text-3xl md:text-4xl text-gray-900 mb-6">¿Te identificas con estos desafíos?</h2>
                            <p className="text-lg text-gray-600">Antes de vender, empatiza. Sabemos que el camino en los marketplaces está lleno de obstáculos.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {[
                                "¿Tus campañas de publicidad (PPC) se comen todo tu margen?",
                                "¿Tienes problemas con vendedores no autorizados o copias de tu marca?",
                                "¿Vendes en Amazon pero no sabes cómo entrar en Miravia?",
                                "¿Tu expansión internacional está frenada por la burocracia logística?"
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
                        <h2 className="font-dm-sans font-bold text-3xl md:text-4xl text-gray-900 mb-4">Nuestros Servicios: Dominando el Ecosistema</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Dividimos la estrategia para captar tráfico específico de cada plataforma.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Amazon */}
                        <FadeIn>
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full flex flex-col">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
                                    alt="Amazon"
                                    className="h-8 w-auto object-contain mb-6"
                                />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-dm-sans">Amazon 360º (El Gigante)</h3>
                                <p className="text-gray-500 mb-6">Maximiza tu presencia en el marketplace más grande del mundo.</p>
                                <ul className="space-y-4 mt-auto">
                                    {[
                                        { title: "SEO en Amazon", desc: "Optimización de títulos, bullets y descripciones con keywords de alto volumen." },
                                        { title: "Publicidad (Amazon Ads)", desc: "Gestión de campañas Sponsored Products, Brands y Display." },
                                        { title: "Contenido A+ y Storefront", desc: "Diseño de fichas de producto premium que mejoran la conversión." },
                                        { title: "Logística FBA y FBM", desc: "Asesoramiento para elegir el modelo logístico más rentable." }
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

                        {/* Miravia */}
                        <FadeIn>
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full relative overflow-hidden flex flex-col">
                                <div className="absolute top-0 right-0 bg-[#E6007E] text-white text-xs font-bold px-3 py-1 rounded-bl-xl">TENDENCIA</div>
                                <img
                                    src="/images/logos/miravia.png"
                                    alt="Miravia"
                                    className="h-[58px] mb-5 w-auto object-contain"
                                />
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-dm-sans">Miravia (La Oportunidad)</h3>
                                <p className="text-gray-500 mb-6">Posicionarte aquí te dará ventaja competitiva rápida.</p>
                                <ul className="space-y-4 mt-auto">
                                    {[
                                        { title: "Estrategia de Lanzamiento", desc: "Aprovechamos el algoritmo de 'novedad' para posicionamiento rápido." },
                                        { title: "Campañas Flash y Cupones", desc: "Gestión de herramientas promocionales exclusivas." },
                                        { title: "Enfoque Lifestyle", desc: "Adaptación de contenido visual. En Miravia la estética lo es todo." }
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
                                <h2 className="font-dm-sans font-bold text-3xl md:text-5xl mb-6 text-gray-900">Metodología: El enfoque en "Margen Neto"</h2>
                                <p className="text-xl text-gray-600 mb-8">No buscamos solo facturación, buscamos rentabilidad.</p>
                                <div className="space-y-6">
                                    {[
                                        { title: "Auditoría Inicial", desc: "Analizamos la salud de tu cuenta y la viabilidad de tus productos." },
                                        { title: "Protección de Marca", desc: "Registro en Amazon Brand Registry, eliminación de falsificaciones." },
                                        { title: "Optimización de Costes", desc: "Revisión de tarifas logísticas y comisiones." },
                                        { title: "Reporting Transparente", desc: "Informes mensuales donde el KPI principal es el beneficio real." }
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
                                    {/* Placeholder for methodology image */}
                                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
                                        <span className="text-blue-900/50 font-semibold font-dm-sans">Gráfico de Rentabilidad / Dashboard</span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Internationalization */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6 text-center">
                    <FadeIn>
                        <h2 className="font-dm-sans font-bold text-3xl md:text-4xl text-gray-900 mb-6">Internacionalización: Tu marca sin fronteras</h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
                            De local a global en un clic. Llevamos tu marca a Amazon Alemania, Francia, Italia, UK y nuevos mercados europeos a través de Miravia.
                        </p>
                        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            <div className="p-6 bg-[#FDF0D6]/30 rounded-2xl border border-[#FDF0D6]">
                                <div className="text-4xl mb-4">🌍</div>
                                <h3 className="font-bold text-xl mb-2 font-dm-sans">Expansión Europea</h3>
                                <p className="text-gray-600 text-sm">Amazon DE, FR, IT, UK y más.</p>
                            </div>
                            <div className="p-6 bg-[#FDF0D6]/30 rounded-2xl border border-[#FDF0D6]">
                                <div className="text-4xl mb-4">🗣️</div>
                                <h3 className="font-bold text-xl mb-2 font-dm-sans">Traducciones Nativas</h3>
                                <p className="text-gray-600 text-sm">No automáticas. Con SEO local.</p>
                            </div>
                            <div className="p-6 bg-[#FDF0D6]/30 rounded-2xl border border-[#FDF0D6]">
                                <div className="text-4xl mb-4">⚖️</div>
                                <h3 className="font-bold text-xl mb-2 font-dm-sans">Gestión de IVA</h3>
                                <p className="text-gray-600 text-sm">Pan-European FBA y cumplimiento fiscal.</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-dm-sans font-bold text-3xl md:text-4xl text-gray-900 mb-8 text-center">Preguntas Frecuentes</h2>
                        <div className="space-y-2">
                            <AccordionItem
                                question="¿Es mejor vender en Amazon o en Miravia?"
                                answer="Depende del producto, pero recomendamos una estrategia omnicanal para diversificar riesgo. Amazon ofrece volumen masivo, mientras que Miravia es ideal para marcas de moda, belleza y lifestyle con un enfoque más visual."
                            />
                            <AccordionItem
                                question="¿Cuánto cuesta la gestión de marketplaces?"
                                answer="Nuestros honorarios se adaptan al volumen y necesidades de cada cuenta. Trabajamos con un modelo híbrido (fijo + variable) para alinear nuestros intereses con tus resultados."
                            />
                            <AccordionItem
                                question="¿Necesito tener mi propia logística?"
                                answer="No necesariamente. Podemos gestionar tu logística a través de FBA (Fulfilled by Amazon) o ayudarte a configurar una logística híbrida. Analizamos qué opción es más rentable para tu caso."
                            />
                            <AccordionItem
                                question="¿Qué es el ACOS y por qué es importante?"
                                answer="El ACOS (Advertising Cost of Sales) mide la eficiencia de tus campañas publicitarias. Es el porcentaje de las ventas gastado en publicidad. Un ACOS bajo significa mayor rentabilidad, aunque en fases de lanzamiento podemos tolerar un ACOS más alto para ganar visibilidad."
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

export default MarketplacesPage;
