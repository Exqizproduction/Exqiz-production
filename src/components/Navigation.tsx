import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/images/logo.avif";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useIsMobile } from "./ui/use-mobile";

export function Navigation() {
    const isMobile = useIsMobile();

    const [menuOpen, setMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };
    if (isMobile) {
        return (
            <>
                <div className="container px-6 py-4 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <ImageWithFallback
                            src={logo}
                            alt="Production vidéo"
                            className="w-16 h-16"
                        />
                        <span>Exqiz Production</span>
                    </div>
                    <button
                        onClick={() => {
                            setMenuOpen(!menuOpen);
                        }}
                    >
                        <Menu></Menu>
                    </button>
                </div>

                {menuOpen && (
                    <>
                        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b-2 py-16 border-white/10 inset-0">
                            <button
                                className="top-0 right-0 p-8 absolute"
                                onClick={() => {
                                    setMenuOpen(false);
                                }}
                            >
                                <X></X>
                            </button>
                            <ul className="relative z-50 flex flex-col items-center justify-center gap-12 h-full px-12">
                                <li className="w-full text-center">
                                    <button
                                        onClick={() => {
                                            setMenuOpen(false);
                                            scrollToSection("accueil");
                                        }}
                                        className="hover:text-gray-300 transition-colors"
                                    >
                                        Accueil
                                    </button>
                                </li>
                                <li className="w-full text-center">
                                    <button
                                        onClick={() => {
                                            setMenuOpen(false);
                                            scrollToSection("portfolio");
                                        }}
                                        className="hover:text-gray-300 transition-colors"
                                    >
                                        Portfolio
                                    </button>
                                </li>
                                <li className="w-full text-center">
                                    <button
                                        onClick={() => {
                                            setMenuOpen(false);
                                            scrollToSection("services");
                                        }}
                                        className="hover:text-gray-300 transition-colors"
                                    >
                                        Services
                                    </button>
                                </li>
                                <li className="w-full text-center">
                                    <button
                                        onClick={() => {
                                            setMenuOpen(false);
                                            scrollToSection("clients");
                                        }}
                                        className="hover:text-gray-300 transition-colors"
                                    >
                                        Témoignages
                                    </button>
                                </li>
                                <li className="w-full text-center">
                                    <button
                                        onClick={() => {
                                            setMenuOpen(false);
                                            scrollToSection("contact");
                                        }}
                                        className="hover:text-gray-300 transition-colors"
                                    >
                                        Contact
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </>
                )}
            </>
        );
    }
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <div className="flex items-center gap-2">                    
                    <span>Exqiz Production</span>
                </div>

                <ul className="flex gap-8">
                    <li>
                        <button
                            onClick={() => scrollToSection("accueil")}
                            className="hover:text-gray-300 transition-colors"
                        >
                            Accueil
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection("portfolio")}
                            className="hover:text-gray-300 transition-colors"
                        >
                            Portfolio
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection("services")}
                            className="hover:text-gray-300 transition-colors"
                        >
                            Services
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection("clients")}
                            className="hover:text-gray-300 transition-colors"
                        >
                            Témoignages
                        </button>
                    </li>
                    <li>
                        <button
                            onClick={() => scrollToSection("contact")}
                            className="hover:text-gray-300 transition-colors"
                        >
                            Contact
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
