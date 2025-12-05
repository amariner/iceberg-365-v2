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

const PaidSocialPage: React.FC = () => {
    return (
        <div className="bg-white font-dm-sans">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-iceberg-bg pt-32 pb-20 lg:pt-40 lg:pb-28 min-h-[60vh] flex items-center">
                <div className="absolute inset-x-0 top-[-200px] sm:top-[-300px] mx-auto h-[480px] w-[480px] sm:h-[640px] sm:w-[640px] rounded-full bg-[#E2E8F0] blur-[160px] opacity-70 pointer-events-none" />

                <div className="container mx-auto px-6 relative z-10">
                    <FadeIn>
                        <div className="max-w-4xl mx-auto text-center">
                            <span className="inline-flex items-center gap-2 text-xs tracking-wider uppercase font-semibold text-gray-500 bg-white/50 border border-gray-200 rounded-full px-3 py-1.5 backdrop-blur-sm mb-6">
                                PAID MEDIA & SOCIAL ADS
                            </span>
                            <h1 className="font-dm-sans font-bold text-4xl md:text-6xl text-gray-900 mb-8 leading-[1.1] tracking-tight">
                                Paid Social for Sales: <br className="hidden md:block" />
                                <span className="text-[#DD8B26]">Publicidad que Vende.</span>
                            </h1>
                            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                                Deja de quemar presupuesto en "likes" y empieza a invertir en conversiones. Estrategias Full-Funnel en Meta, TikTok y Google Ads enfocadas en ROAS.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <a href="#contacto" className="bg-gradient-to-r from-[#FFB088] to-[#FFA07A] text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-orange-200/40 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                                    Escalar mis Campañas
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
                            <h2 className="font-dm-sans font-bold text-3xl md:text-4xl text-gray-900 mb-6">¿Tus anuncios no son rentables?</h2>
                            <p className="text-lg text-gray-600">El panorama publicitario ha cambiado. Lo que funcionaba en 2021 ya no sirve.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                            {[
                                "¿Tu CPA (Coste por Adquisición) no para de subir?",
                                "¿Tus creatividades se 'fatigan' en cuestión de días?",
                                "¿No sabes atribuir correctamente de dónde vienen tus ventas?",
                                "¿Te cuesta escalar sin perder rentabilidad?"
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
                        <h2 className="font-dm-sans font-bold text-3xl md:text-4xl text-gray-900 mb-4">Dominio Multicanal</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Estamos donde están tus clientes. Gestionamos todo el mix de medios.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <FadeIn>
                            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100 h-full flex flex-col">
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-dm-sans">Social Ads (Push)</h3>
                                <p className="text-gray-500 mb-6">Generamos demanda donde la atención es máxima.</p>
                                <ul className="space-y-4 mt-auto">
                                    {[
                                        { title: "Meta Ads (Facebook & Instagram)", desc: "Estructuras de campaña probadas (ASC+) para escalar." },
                                        { title: "TikTok Ads", desc: "Contenido nativo y Spark Ads que conectan con nuevas audiencias." },
                                        { title: "UGC & Creatividades", desc: "Producimos los vídeos e imágenes que tus anuncios necesitan." },
                                        { title: "Retargeting Dinámico", desc: "Recupera a los usuarios que visitaron tu web con el producto exacto." }
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
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 font-dm-sans">Google Ads (Pull)</h3>
                                <p className="text-gray-500 mb-6">Capturamos la intención de compra existente.</p>
                                <ul className="space-y-4 mt-auto">
                                    {[
                                        { title: "Google Shopping & PMax", desc: "Optimización de feed para aparecer primero y vender más." },
                                        { title: "Search (Búsqueda)", desc: "Campañas de palabras clave de alta intención transaccional." },
                                        { title: "YouTube Ads", desc: "Branding y conversión en formato vídeo para generar notoriedad." },
                                        { title: "Analítica y Atribución", desc: "Configuración avanzada de GA4 y GTM para medir cada euro." }
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
                                <h2 className="font-dm-sans font-bold text-3xl md:text-5xl mb-6 text-gray-900">Metodología: Creative First</h2>
                                <p className="text-xl text-gray-600 mb-8">El algoritmo ha cambiado. Hoy, la creatividad es el nuevo targeting.</p>
                                <div className="space-y-6">
                                    {[
                                        { title: "Análisis de Competencia", desc: "Espiamos qué le funciona a tus rivales para mejorarlo." },
                                        { title: "Producción de Creativos", desc: "Diseñamos hooks visuales que detienen el scroll." },
                                        { title: "Testing Científico", desc: "Probamos audiencias, ángulos y formatos sistemáticamente." },
                                        { title: "Escalado Vertical/Horizontal", desc: "Aumentamos presupuesto solo en lo que funciona." }
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
                                        src="/images/roas_dashboard.png"
                                        alt="Dashboard de ROAS y rendimiento publicitario"
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
                                question="¿Cuánto presupuesto necesito para empezar?"
                                answer="Recomendamos una inversión mínima de 1.000€ - 1.500€ mensuales en medios para poder obtener datos suficientes y optimizar las campañas. Menos de eso hace difícil salir de la fase de aprendizaje de los algoritmos."
                            />
                            <AccordionItem
                                question="¿Qué es mejor, Facebook Ads o Google Ads?"
                                answer="Son complementarios. Google captura la demanda existente (gente que busca tu producto), mientras que Facebook/Instagram genera nueva demanda (gente que no sabía que te necesitaba). Una estrategia sólida usa ambos."
                            />
                            <AccordionItem
                                question="¿Hacéis los creativos (imágenes/vídeos)?"
                                answer="Sí, y es nuestra gran diferencia. No somos solo 'media buyers', somos creativos. Te ayudamos con la estrategia de contenido, guiones para UGC y diseño gráfico para tus anuncios."
                            />
                            <AccordionItem
                                question="¿Cómo medís el éxito?"
                                answer="Nos centramos en el ROAS (Retorno de la Inversión Publicitaria) y el MER (Marketing Efficiency Ratio). No nos importan los likes ni las impresiones si no traen ventas reales."
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

export default PaidSocialPage;
