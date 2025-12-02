import { Film } from "lucide-react";

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Film className="w-6 h-6" />
          <span>Marc Dubois</span>
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