'use client';

import { useState } from "react";
import { handleScrollToSection } from "@/utils/handleScrollSection";
import { IoMdClose } from "react-icons/io";
import { FiAlignJustify } from "react-icons/fi";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="relative z-100 flex justify-between items-center p-6 lg:px-12" >
            <div className="flex items-center space-x-2">
                <img
                    src="./logo.png"
                    alt="MarSofyt Logo"
                    className="w-8 h-8 object-contain"
                />
                <span className="text-white font-semibold text-lg">MarSofyt</span>
            </div>

            <button
                className="block md:hidden text-2xl z-50 relative"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <IoMdClose /> : <FiAlignJustify />}
            </button>

            <nav className="hidden md:flex items-center space-x-8">
                <a onClick={() => handleScrollToSection("aboutCompany")} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Sobre a empresa</a>


                <a className="text-gray-400 hover:text-white transition-colors cursor-pointer" onClick={() => handleScrollToSection("ourService")}>Serviços que oferecemos</a>


                <a className="text-gray-400 hover:text-white transition-colors cursor-pointer" onClick={() => handleScrollToSection("technology")}>Tecnologia que usamos</a>


                <div className="flex items-center space-x-1">
                    <a href="https://api.whatsapp.com/send?phone=5569992438222" target="_blank" className="text-gray-400 hover:text-white transition-colors">Conversar</a>
                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                </div>
            </nav>

            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-100 flex flex-col items-center justify-center space-y-8 z-40 md:hidden">
                    <a onClick={() => {
                        handleScrollToSection("aboutCompany")
                        setIsOpen(false)
                    }} className="text-gray-400 hover:text-white transition-colors cursor-pointer">Sobre a empresa</a>


                    <a className="text-gray-400 hover:text-white transition-colors cursor-pointer" onClick={() => {
                        handleScrollToSection("ourService")
                        setIsOpen(false)
                    }}>Serviços que oferecemos</a>


                    <a className="text-gray-400 hover:text-white transition-colors cursor-pointer" onClick={() => {
                        handleScrollToSection("technology")
                        setIsOpen(false)
                    }}>Tecnologia que usamos</a>


                    <div className="flex items-center space-x-1">
                        <a href="https://api.whatsapp.com/send?phone=5569992438222" target="_blank" className="text-gray-400 hover:text-white transition-colors">Conversar</a>
                        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </div>
                </div>
            )}
        </header >
    );
}