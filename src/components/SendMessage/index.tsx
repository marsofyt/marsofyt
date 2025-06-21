'use client';

import { useState } from "react";
import { MdEmail, MdPhone, MdMessage, MdSend, MdCheckCircle, MdError, MdClose } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export function SendMessage() {
    const whatsapp = '(69) 992428222';
    const contato = '(69) 993015913';
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        title: "",
        message: "",
    });
    const [status, setStatus] = useState("");
    const [isToastVisible, setIsToastVisible] = useState(false);
    const [focusedField, setFocusedField] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.title || !formData.message) {
            setStatus("Todos os campos são obrigatórios!");
            setIsToastVisible(true);
            setTimeout(() => setIsToastVisible(false), 3000);
            return;
        }

        setStatus("Enviando...");
        setIsToastVisible(false);

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                setStatus(result.message);
                setFormData({ name: "", email: "", title: "", message: "" });
            } else {
                setStatus(result.message);
            }
        } catch (error) {
            console.error("Erro ao enviar:", error);
            setStatus("Erro ao enviar o e-mail.");
        }

        setIsToastVisible(true);
        setTimeout(() => setIsToastVisible(false), 3000);
    };

    const getToastIcon = () => {
        if (status.includes("sucesso") || status.includes("enviado")) {
            return <MdCheckCircle className="w-5 h-5 text-green-500" />;
        } else if (status.includes("Erro") || status.includes("obrigatórios")) {
            return <MdError className="w-5 h-5 text-red-500" />;
        }
        return <MdMessage className="w-5 h-5 text-cyan-500" />;
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4 py-8">
            <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 items-center">
                <div className="space-y-8 text-white">
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider">
                            FALE CONOSCO
                        </h3>
                        <h1 className="text-5xl font-bold leading-tight">
                            Pronto para começar?
                        </h1>
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Preencha o formulário e entraremos em contato para entender suas necessidades e apresentar a melhor solução para o seu negócio.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <div className="flex items-center space-x-4 text-gray-300">
                            <MdEmail className="w-6 h-6 text-cyan-400" />
                            <span>marsofyt.empresa@gmail.com</span>
                        </div>

                        <div className="flex items-center space-x-4 text-gray-300">
                            <FaWhatsapp className="w-6 h-6 text-green-400" />
                            <span>{whatsapp}</span>
                        </div>

                        <div className="flex items-center space-x-4 text-gray-300">
                            <MdPhone className="w-6 h-6 text-cyan-400" />
                            <span>{contato}</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-lg rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="block text-gray-300 font-medium">
                                Nome
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                onFocus={() => setFocusedField("name")}
                                onBlur={() => setFocusedField("")}
                                placeholder="Seu nome"
                                className={`w-full px-4 py-3 bg-gray-700/50 text-white rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-400 ${focusedField === "name" ? "border-cyan-500" : "border-gray-600"
                                    }`}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-gray-300 font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                onFocus={() => setFocusedField("email")}
                                onBlur={() => setFocusedField("")}
                                placeholder="seu@email.com"
                                className={`w-full px-4 py-3 bg-gray-700/50 text-white rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-400 ${focusedField === "email" ? "border-cyan-500" : "border-gray-600"
                                    }`}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-gray-300 font-medium">
                                Título
                            </label>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                onFocus={() => setFocusedField("title")}
                                onBlur={() => setFocusedField("")}
                                placeholder="Assunto da mensagem"
                                className={`w-full px-4 py-3 bg-gray-700/50 text-white rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-400 ${focusedField === "title" ? "border-cyan-500" : "border-gray-600"
                                    }`}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-gray-300 font-medium">
                                Mensagem
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                onFocus={() => setFocusedField("message")}
                                onBlur={() => setFocusedField("")}
                                placeholder="Como podemos ajudar?"
                                rows={4}
                                className={`w-full px-4 py-3 bg-gray-700/50 text-white rounded-lg border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 placeholder-gray-400 resize-none ${focusedField === "message" ? "border-cyan-500" : "border-gray-600"
                                    }`}
                            />
                        </div>
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className={`w-full px-6 py-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${status === "Enviando..."
                                ? "bg-gray-600 cursor-not-allowed"
                                : "bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 shadow-lg hover:shadow-cyan-500/25"
                                }`}
                            disabled={status === "Enviando..."}
                        >
                            {status === "Enviando..." ? (
                                <>
                                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                                    <span>Enviando...</span>
                                </>
                            ) : (
                                <>
                                    <MdSend className="w-5 h-5" />
                                    <span>Enviar Mensagem</span>
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {isToastVisible && (
                <div className="fixed bottom-6 right-6 z-50">
                    <div className="bg-gray-800/90 backdrop-blur-lg rounded-lg p-4 shadow-2xl max-w-sm border border-gray-600">
                        <div className="flex items-start space-x-3">
                            {getToastIcon()}
                            <div className="flex-1">
                                <p className="text-white text-sm font-medium">{status}</p>
                            </div>
                            <button
                                onClick={() => setIsToastVisible(false)}
                                className="text-gray-400 hover:text-white transition-colors duration-200"
                            >
                                <MdClose className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}