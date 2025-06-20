'use client';

import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { Header } from '../Header';

export function About() {
    const mountRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<THREE.Scene | null>(null);
    const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        if (!mountRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);

        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        // Create grid
        const gridSize = 50;
        const divisions = 50;
        const gridHelper = new THREE.GridHelper(gridSize, divisions, 0x333333, 0x1a1a1a);
        gridHelper.position.y = -5;
        scene.add(gridHelper);

        // Add some subtle floating particles
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

        // Store references
        sceneRef.current = scene;
        rendererRef.current = renderer;

        // Animation loop
        let animationId: number;
        const animate = () => {
            animationId = requestAnimationFrame(animate);

            // Subtle camera movement
            camera.position.x = Math.sin(Date.now() * 0.0005) * 0.5;
            camera.lookAt(0, 0, 0);

            // Subtle particle movement
            const positions = particleSystem.geometry.attributes.position.array;
            for (let i = 1; i < positions.length; i += 3) {
                positions[i] += Math.sin(Date.now() * 0.001 + i) * 0.001;
            }
            particleSystem.geometry.attributes.position.needsUpdate = true;

            renderer.render(scene, camera);
        };

        // Handle resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);
        animate();
        setIsLoaded(true);

        // Cleanup
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
            {/* Three.js Canvas */}
            <div
                ref={mountRef}
                className="absolute inset-0 z-0"
                style={{ opacity: isLoaded ? 1 : 0, transition: 'opacity 1s ease-in-out' }}
            />

            {/* Grid overlay pattern */}
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

            {/* Announcement Banner */}
            <div className="relative z-20 flex justify-center pt-12">
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-4 py-2 flex items-center space-x-2">
                    <span className="text-sm text-gray-300">Exciting announcement</span>
                    <span className="text-sm">🎉</span>
                </div>
            </div>

            {/* Hero Section */}
            <main className="relative z-20 flex flex-col items-center justify-center px-6 text-center pt-16">
                <h1 className="text-6xl lg:text-8xl font-bold text-white mb-8 leading-tight tracking-tight">
                    A landing page template
                    <br />
                    <span className="text-white">
                        that works for you
                    </span>
                </h1>

                <p className="text-lg text-gray-400 mb-12 max-w-2xl leading-relaxed">
                    Build beautiful landing pages for your startups, clients, and side projects,
                    <br />
                    without having to think about design.
                </p>

                <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors flex items-center space-x-2 font-medium">
                        <span>Try it free</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </button>

                    <button className="text-gray-400 hover:text-white transition-colors font-medium">
                        Learn more
                    </button>
                </div>
            </main>
        </div>
    );
};