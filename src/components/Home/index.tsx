'use client';

import { CiCalendar } from "react-icons/ci";
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Header } from '../Header';

export function About() {
    const mountRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!mountRef.current) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);

        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        const gridSize = 50;
        const divisions = 50;
        const gridHelper = new THREE.GridHelper(gridSize, divisions, 0x333333, 0x1a1a1a);
        gridHelper.position.y = -5;
        scene.add(gridHelper);

        const particleCount = 100;
        const particles = new THREE.BufferGeometry();
        const positions = new Float32Array(particleCount * 3);

        for (let i = 0; i < particleCount * 3; i += 3) {
            positions[i] = (Math.random() - 0.5) * 30;
            positions[i + 1] = Math.random() * 10;
            positions[i + 2] = (Math.random() - 0.5) * 30;
        }

        particles.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const particleMaterial = new THREE.PointsMaterial({
            size: 1,
            color: 0x666666,
            transparent: true,
            opacity: 0.3
        });

        const particleSystem = new THREE.Points(particles, particleMaterial);
        scene.add(particleSystem);

        camera.position.set(0, 2, 8);
        camera.lookAt(0, 0, 0);

        sceneRef.current = scene;
        rendererRef.current = renderer;

        let animationId: number;
        const animate = () => {
            animationId = requestAnimationFrame(animate);

            camera.position.x = Math.sin(Date.now() * 0.0005) * 0.5;
            camera.lookAt(0, 0, 0);

            const positions = particleSystem.geometry.attributes.position.array;
            for (let i = 1; i < positions.length; i += 3) {
                positions[i] += Math.sin(Date.now() * 0.001 + i) * 0.001;
            }
            particleSystem.geometry.attributes.position.needsUpdate = true;

            renderer.render(scene, camera);
        };

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        animate();
        setIsLoaded(true);

        return () => {
            window.removeEventListener('resize', handleResize);
            if (animationId) {
                cancelAnimationFrame(animationId);
            }
            if (mountRef.current && renderer.domElement && mountRef.current.contains(renderer.domElement)) {
                mountRef.current.removeChild(renderer.domElement);
            }
            renderer.dispose();
        };
    }, []);

    return (
        <div className="relative min-h-screen bg-black overflow-hidden">
            <div
                ref={mountRef}
                className="absolute inset-0 z-0"
                style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 1s ease-in-out' }}
            />

            <div
                className="absolute inset-0 z-5 opacity-20"
                style={{
                    backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
                    backgroundSize: '50px 50px'
                }}
            />

            <Header />

            <div className="relative z-20 flex justify-center pt-12">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 flex items-center space-x-2">
                    <span className="text-sm text-gray-300">Softwares emocionantes</span>
                    <span className="text-sm">🎉</span>
                </div>
            </div>

            <main className="relative z-20 flex flex-col items-center justify-center px-6 text-center pt-16">
                <h1 className="text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
                    Softwares de qualidade
                    <br />
                    <span className="text-white">
                        que funciona para você
                    </span>
                </h1>

                <p className="text-lg text-gray-400 mb-12 max-w-2xl leading-relaxed">
                    Crie lindas landing page 3D para sua startup, softwares seguros
                    <br />
                    Agentes de IA, montagem de infra e hospedagem na nuvem.
                </p>

                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <button className="bg-cyan-700 hover:bg-cyan-600 text-white px-6 py-3 rounded-md transition-colors flex items-center space-x-2 font-medium">
                        <span>Saber mais</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>

                    <a
                        href="https://api.whatsapp.com/send?phone=5569992438222"
                        target="_blank"
                        className="cursor-pointer text-gray-400 hover:text-white transition-colors font-medium flex items-center">
                        <span className="mr-1">
                            Agendamento
                        </span>
                        <CiCalendar size={'24px'} />
                    </a>
                </div>
            </main>
        </div>
    );
};