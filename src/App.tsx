import { useEffect, useState } from "react";
import { Hero } from "./components/Hero";
import { Clients } from "./components/Clients";
import { Portfolio } from "./components/Portfolio";
import { Services } from "./components/Services";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { ServiceDetail } from "./components/ServiceDetail";
import { Helmet } from "react-helmet-async";

export default function App() {
    const [selectedService, setSelectedService] = useState<string | null>(null);

    const handleServiceClick = (serviceId: string) => {
        setSelectedService(serviceId);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleCloseService = () => {
        setSelectedService(null);
        // Scroll back to services section
        setTimeout(() => {
            document
                .getElementById("services")
                ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    const handleContact = () => {
        setSelectedService(null);
        // Scroll to contact section
        setTimeout(() => {
            document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    };

    useEffect(() => {
        // Vérifie si la page a un hash
        if (window.location.hash) {
            const el = document.querySelector(window.location.hash);
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        }
    }, []);

    if (selectedService) {
        return (
            <ServiceDetail
                serviceId={selectedService}
                onClose={handleCloseService}
                onContact={handleContact}
            />
        );
    }

    return (
        <div className="min-h-screen relative text-white overflow-hidden">
            <Helmet>
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "Organization",
                                name: "Exqiz Prod",
                                url: "https://www.exqiz-prod.fr",
                                logo: "https://www.exqiz-prod.fr/assets/logo.avif",
                            },
                            {
                                "@type": "Service",
                                serviceType: "Production audiovisuelle",
                                provider: {
                                    "@type": "Organization",
                                    name: "Exqiz Prod",
                                },
                                areaServed: "Lyon, France",
                                url: "https://www.exqiz-prod.fr/#services",
                            },
                            {
                                "@type": "CreativeWork",
                                name: "Portfolio",
                                url: "https://www.exqiz-prod.fr/#portfolio",
                                creator: {
                                    "@type": "Organization",
                                    name: "Exqiz Prod",
                                },
                            },
                            {
                                "@type": "ContactPoint",
                                contactType: "Customer Service",
                                telephone: "+33 6 29 84 29 22",
                                areaServed: "FR",
                                availableLanguage: "French",
                                url: "https://www.exqiz-prod.fr/#contact",
                            },
                        ],
                    })}
                </script>
            </Helmet>
            <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-primary/5"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="absolute top-3/4 left-1/2 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

            <div className="relative z-10">
                <Navigation />
                <Hero />
                <Portfolio />
                <Services onServiceClick={handleServiceClick} />
                <Clients />
                <Contact />
            </div>
        </div>
    );
}
