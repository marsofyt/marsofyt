'use client';

import { useState } from 'react';
import { BiMailSend } from "react-icons/bi";
import { Robot } from '../3D';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { CiGift } from 'react-icons/ci';

export function AboutCompany() {
    const [activeFeature, setActiveFeature] = useState(0);

    function randomSignedDecimal(min = 0.5, max = 1.5) {
        const sign = Math.random() < 0.5 ? -1 : 1;
        const value = Math.random() * (max - min) + min;
        return parseFloat((value * sign).toFixed(1));
    }

    const companyFeatures = [
        {
            title: "Inovação Tecnológica",
            description: "Desenvolvemos soluções cutting-edge usando as mais avançadas tecnologias do mercado.",
            icon: "🚀"
        },
        {
            title: "Agentes de IA",
            description: "Implementamos Agente de IA para automatizar e otimizar processos complexos.",
            icon: "🤖"
        },
        {
            title: "Experiência do Usuário",
            description: "Criamos interfaces intuitivas e experiências digitais que encantam nossos usuários.",
            icon: "✨"
        },
        {
            title: "Suporte 24/7",
            description: "Nossa equipe está sempre disponível para garantir o melhor atendimento aos clientes.",
            icon: "🛠️"
        }
    ];

    return (
        <section className="min-h-screen bg-black text-white py-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                                Sobre Nossa <i className="text-cyan-600">Empresa</i>
                            </h2>
                            <p className="text-gray-300 leading-relaxed">
                                Somos uma empresa de tecnologia inovadora, especializada em criar
                                soluções digitais que transformam negócios e melhoram vidas.
                            </p>
                        </div>

                        <div className="grid gap-6">
                            {companyFeatures.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${activeFeature === index
                                        ? 'bg-cyan-600/20 border-cyan-500 border-2'
                                        : 'bg-gray-800/50 border-gray-700 border hover:bg-gray-700/50'
                                        }`}
                                    onClick={() => setActiveFeature(index)}
                                >
                                    <div className="flex items-start space-x-4">
                                        <div className="text-3xl">{feature.icon}</div>
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold mb-2 text-white">
                                                {feature.title}
                                            </h3>
                                            <p className="text-gray-300 leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full h-[300px] sm:h-[400px] md:h-[500px]">
                        <Canvas camera={{ position: [0, 1.5, 6], fov: 35 }}>
                            <ambientLight intensity={0.9} />
                            <spotLight
                                position={[5, 15, 5]}
                                angle={0.3}
                                penumbra={1}
                                intensity={2}
                                castShadow
                            />

                            <Robot
                                scale={0.2}
                                position={[0, -1.1, 0]}
                                rotation={[0, Math.PI / randomSignedDecimal(), 0]}
                            />

                            <OrbitControls
                                enableZoom={false}
                                enablePan={false}
                                minPolarAngle={Math.PI / 2}
                                maxPolarAngle={Math.PI / 2}
                                makeDefault
                            />
                        </Canvas>
                    </div>
                </div>

                <div className="mt-20 flex flex-wrap gap-10 justify-center items-center relative">
                    <div className="absolute inset-0 bg-[radial-gradient(#1f1f1f_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none z-0" />
                    {[
                        { icon: '<>', label: 'Conectar' },
                        { icon: <BiMailSend size="30px" />, label: 'Enviar' },
                        { icon: '$', label: 'Lucrar' },
                        { icon: <CiGift size="30px" />, label: 'Celebrar' },
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="relative z-10 flex flex-col items-center min-w-[80px]"
                        >
                            <div className="w-14 h-14 bg-[#0e0e0e] border border-[#2a2a2a] rounded-xl flex items-center justify-center text-2xl shadow-[0_8px_20px_0_rgba(0,255,255,0.3)]">
                                {item.icon}
                            </div>
                            <span className="mt-3 text-sm text-gray-400">{item.label}</span>
                        </div>
                    ))}
                </div>

                {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pb-12 pt-12 border-t border-b border-gray-800">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                        <div className="text-gray-400">Projetos Concluídos</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                        <div className="text-gray-400">Clientes Satisfeitos</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-cyan-400 mb-2">5</div>
                        <div className="text-gray-400">Anos de Experiência</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                        <div className="text-gray-400">Suporte Disponível</div>
                    </div>
                </div> */}
            </div>
        </section>
    );
}