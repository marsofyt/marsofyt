'use client';

import React, { useState, useEffect } from 'react';
import {
    FaReact,
    FaNodeJs,
    FaDocker,
    FaAws,
    FaPython,
} from 'react-icons/fa';
import {
    SiNextdotjs,
    SiCloudflare,
    SiTailwindcss,
    SiTypescript,
    SiNginx,
    SiRockylinux,
    SiPrisma
} from 'react-icons/si';
import { FcLinux } from "react-icons/fc";
import { BiLogoPostgresql, BiLogoGoLang } from "react-icons/bi";

export function Technology() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [mounted, setMounted] = useState(false);

    const technologies = [
        { Icon: FaReact, color: '#61DAFB', name: 'React' },
        { Icon: FaNodeJs, color: '#339933', name: 'Node.js' },
        { Icon: FaDocker, color: '#2496ED', name: 'Docker' },
        { Icon: SiTailwindcss, color: '#00a2ed', name: 'Tailwindcss' },
        { Icon: BiLogoGoLang, color: '#00a2ed', name: 'Golang' },
        { Icon: SiTypescript, color: '#151d91', name: 'TypeScript' },
        { Icon: BiLogoPostgresql, color: '#3941ac', name: 'Postgresql' },
        { Icon: SiPrisma, color: '#76777a', name: 'Prisma' },
        { Icon: SiNginx, color: '#075019', name: 'Nginx' },
        { Icon: FaPython, color: '#3776AB', name: 'Python' },
        { Icon: SiNextdotjs, color: '#FFFFFF', name: 'Next' },
        { Icon: FaAws, color: '#f48942', name: 'Aws' },
        { Icon: SiCloudflare, color: '#F38020', name: 'Cloudflare' },
        { Icon: FcLinux, name: 'Linux' },
        { Icon: SiRockylinux, color: '#339933', name: 'Rocky Linux' },
    ];

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className="min-h-screen bg-black relative overflow-hidden">
            <div className="absolute inset-0">
                {mounted &&
                    [...Array(20)].map((_, i) => {
                        const left = Math.random() * 100;
                        const top = Math.random() * 100;
                        const delay = Math.random() * 2;
                        return (
                            <div
                                key={i}
                                className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full opacity-30"
                                style={{
                                    left: `${left}%`,
                                    top: `${top}%`,
                                    animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                                    animationDelay: `${delay}s`,
                                }}
                            />
                        );
                    })}
            </div>

            <div className="flex items-center justify-center min-h-screen px-6 md:px-20 py-16">
                <div className="w-full md:w-1/2 flex justify-center mb-12 md:mb-0">
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-700/20 to-cyan-950/20 rounded-full blur-3xl transform scale-150"></div>
                        <div className="relative grid grid-cols-5 gap-8 p-8">
                            {technologies.map((tech, index) => {
                                const delay = index * 0.1;
                                return (
                                    <div
                                        key={index}
                                        className={`
                                            relative group cursor-pointer transform transition-all duration-500 hover:scale-125
                                            ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
                                        `}
                                        style={{
                                            transitionDelay: `${delay}s`,
                                        }}
                                        onMouseEnter={() => setHoveredIndex(index)}
                                        onMouseLeave={() => setHoveredIndex(null)}
                                    >
                                        <div
                                            className="absolute inset-0 rounded-full blur-lg opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                                            style={{
                                                background: `radial-gradient(circle, ${tech.color}40, transparent)`
                                            }}
                                        />
                                        <div className="relative w-16 h-16 flex items-center justify-center">
                                            <tech.Icon
                                                className="text-4xl transition-all duration-300 group-hover:drop-shadow-lg"
                                                style={{
                                                    color: tech.color,
                                                    filter: hoveredIndex === index ? `drop-shadow(0 0 10px ${tech.color})` : 'none'
                                                }}
                                            />
                                        </div>
                                        <div className={`
                                            absolute -top-12 left-1/2 transform -translate-x-1/2
                                            bg-black/80 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-medium
                                            transition-all duration-300 pointer-events-none
                                            ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                                        `}>
                                            {tech.name}
                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-black/80"></div>
                                        </div>

                                        <div className={`
                                            absolute inset-0 rounded-full border-2 
                                            transition-all duration-500 scale-0 opacity-0
                                            ${hoveredIndex === index ? 'scale-150 opacity-30' : ''}
                                        `}
                                            style={{ borderColor: tech.color }}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 space-y-8 md:pl-12">
                    <div className="space-y-4">
                        <h2 className={`
                            text-5xl md:text-6xl font-bold leading-tight
                            bg-gradient-to-r from-white via-cyan-200 to-white bg-clip-text text-transparent
                            transform transition-all duration-1000
                            ${mounted ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}
                        `}>
                            Tecnologia que Garante{' '}
                            <span className="bg-gradient-to-r from-cyan-400 to-cyan-600 bg-clip-text text-transparent">
                                Resultados Reais
                            </span>
                        </h2>

                        <div className={`
                            w-24 h-1 bg-gradient-to-r from-cyan-500 to-cyan-500 rounded-full
                            transform transition-all duration-1000 delay-300
                            ${mounted ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}
                        `} />
                    </div>

                    <p className={`
                        text-xl text-gray-300 leading-relaxed
                        transform transition-all duration-1000 delay-500
                        ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                    `}>
                        Trabalhamos com as melhores tecnologias do mercado para oferecer
                        soluções com alto desempenho, segurança e escalabilidade.
                    </p>

                    <div className={`
                        relative p-6 rounded-xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-transparent
                        transform transition-all duration-1000 delay-700
                        ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
                    `}>
                        <p className="text-cyan-400 font-medium text-lg">
                            Simplifique seus processos e alcance novos patamares!<br />
                            Desenvolvemos software sob medida para qualquer necessidade.
                        </p>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
            `}</style>
        </section>
    );
}