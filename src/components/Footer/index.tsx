import { FaInstagram, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export default function Footer() {
    return (
        <footer className="bg-black text-gray-300 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="lg:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                                <span className="text-gray-900 font-bold text-sm">M</span>
                            </div>
                            <span className="text-white font-semibold text-lg">Marsofyt</span>
                        </div>
                        <p className="text-gray-400 text-sm">
                            © Marsofyt - Todos os direitos reservados.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Empresa</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Carreiras
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Time
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Contato
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white font-semibold mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Termos & Condições
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Política de Privacidade
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                                    Política de Reembolso
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Redes Sociais</h3>
                        <ul className="space-y-3">
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    <BsTwitterX className="w-4 h-4" />
                                    <span>Twitter</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/marsofyt/"
                                    target="_blank"
                                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    <FaInstagram className="w-4 h-4" />
                                    <span>Instagram</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    <FaYoutube className="w-4 h-4" />
                                    <span>YouTube</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    <FaLinkedin className="w-4 h-4" />
                                    <span>LinkedIn</span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/marsofyt"
                                    target="_blank"
                                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                                >
                                    <FaGithub className="w-4 h-4" />
                                    <span>GitHub</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">
                            Desenvolvido com ❤️ pela equipe Marsofyt
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}