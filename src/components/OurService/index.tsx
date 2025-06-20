import { FaCode, FaLaptop, FaMobileAlt, FaCloud, FaTools } from "react-icons/fa";
import { RiBugFill } from "react-icons/ri";

export function OurService() {
    const services = [
        {
            icon: <FaCode size={24} />,
            title: "Desenvolvimento Web",
            description: "Criação de sites e sistemas responsivos.",
            destaque: true,
        },
        {
            icon: <FaLaptop size={24} />,
            title: "Aplicativos Desktop",
            description: "Soluções personalizadas para computadores.",
        },
        {
            icon: <FaMobileAlt size={24} />,
            title: "Desenvolvimento Mobile",
            description: "Apps nativos para Android e iOS.",
        },
        {
            icon: <FaTools size={24} />,
            title: "Manutenção de Sites",
            description: "Suporte a manutenção de sites.",
        },
        {
            icon: <FaCloud size={24} />,
            title: "Serviços na Nuvem",
            description: "Infraestrutura escalável e segura.",
        },
        {
            icon: <RiBugFill size={24} />,
            title: "Pentest web",
            description: "Análise de vulnerabilidade web para o seu sistema.",
        },
    ];

    return (
        <section className="min-h-screen bg-black flex flex-col justify-center items-center py-6 md:py-12">
            <div className="w-11/12 max-w-7xl">
                <div className="space-y-4">
                    <h2 className="text-5xl font-bold bg-clip-text">
                        Nossos <i className='text-cyan-600'>Serviços</i>
                    </h2>
                    <p className=" text-gray-300 leading-relaxed">
                        Oferecemos soluções digitais completas para transformar ideias em resultados reais. Do desenvolvimento web à infraestrutura em nuvem, nossos serviços são pensados para impulsionar o crescimento da sua empresa com segurança, performance e inovação. Conte com uma equipe experiente, tecnologia de ponta e atendimento personalizado em cada etapa do seu projeto.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`relative p-6 rounded-2xl bg-[#0e0e0e] border border-[#2a2a2a] hover:border-cyan-500 transition duration-300 shadow-sm ${service.destaque ? "bg-gradient-to-tr from-[#066f6f] to-[#0e1f1f]" : ""
                                }`}
                        >
                            {service.destaque && (
                                <div className="absolute top-2 right-2 bg-white text-black text-xs font-semibold px-3 py-1 rounded-full">
                                    Popular
                                </div>
                            )}

                            <div className="w-10 h-10 bg-[#1e1e1e] rounded-xl flex items-center justify-center mb-4">
                                {service.icon}
                            </div>
                            <h2 className="text-white font-bold text-lg">{service.title}</h2>
                            <p className="text-gray-400 text-sm mt-1">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
