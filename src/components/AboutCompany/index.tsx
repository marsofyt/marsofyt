'use client';

import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Robot } from '../3D';
import { Environment, OrbitControls, Scroll, ScrollControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

export function AboutCompany() {
    const [activeFeature, setActiveFeature] = useState(0);

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
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h2 className="text-5xl font-bold bg-clip-text">
                                Sobre Nossa <i className='text-cyan-600'>Empresa</i>
                            </h2>
                            <p className=" text-gray-300 leading-relaxed">
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

                    {/* Right side - 3D Floating Technologies */}
                    <div className="">
                        <div className="w-full h-[500px]">
                            <Canvas
                                camera={{ position: [0, 1.5, 6], fov: 35 }}
                                style={{ width: '100%', height: '100%' }}
                            >
                                <ambientLight intensity={0.9} />
                                <spotLight
                                    position={[5, 15, 5]}
                                    angle={0.3}
                                    penumbra={1}
                                    intensity={2}
                                    castShadow
                                />

                                <Robot scale={0.2} position={[0, -1.1, 0]} />

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
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-gray-800">
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
                        <div className="text-gray-400">Projetos Concluídos</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-400 mb-2">50+</div>
                        <div className="text-gray-400">Clientes Satisfeitos</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-400 mb-2">5</div>
                        <div className="text-gray-400">Anos de Experiência</div>
                    </div>
                    <div className="text-center">
                        <div className="text-4xl font-bold text-blue-400 mb-2">24/7</div>
                        <div className="text-gray-400">Suporte Disponível</div>
                    </div>
                </div>
            </div>
        </section>
    );
}