import {
    Video,
    Scissors,
    Camera,
    Lightbulb,
    Film,
    Sparkles,
    ArrowRight,
} from "lucide-react";

const services = [
    {
        id: "realisation",
        icon: Camera,
        title: "Réalisation",
        description:
            "Direction artistique et réalisation de vos projets vidéo, du concept initial à la livraison finale.",
    },
    {
        id: "montage",
        icon: Scissors,
        title: "Montage Vidéo",
        description:
            "Montage professionnel avec expertise sur Adobe Premiere Pro, DaVinci Resolve.",
    },
    {
        id: "conception",
        icon: Lightbulb,
        title: "Conception Créative",
        description:
            "Développement de concepts créatifs originaux adaptés à vos besoins et à votre identité.",
    },
    {
        id: "post-production",
        icon: Film,
        title: "Post-Production",
        description:
            "Étalonnage colorimétrique, mixage audio et effets visuels pour sublimer vos contenus.",
    },
    {
        id: "entreprise",
        icon: Video,
        title: "Vidéo d'Entreprise",
        description:
            "Création de contenus corporate : présentation, formation, communication interne.",
    },
];

interface ServicesProps {
    onServiceClick: (serviceId: string) => void;
}

export function Services({ onServiceClick }: ServicesProps) {
    return (
        <section id="services" className="py-16">
            <div className="container flex flex-col items-center mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="mb-4">Mes Services</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Un accompagnement complet pour tous vos projets
                        audiovisuels, de la conception à la diffusion.
                    </p>
                </div>

                <div className="flex flex-col flex-wrap justify-center mobile-size gap-8 max-w-7xl">
                    {services.map((service) => {
                        const Icon = service.icon;
                        return (
                            <button
                                key={service.id}
                                onClick={() => onServiceClick(service.id)}
                                className="max-w-m bg-white/5 p-8 rounded-lg hover:bg-white/10 transition-all border border-white/10 hover:border-white/30 text-left group cursor-pointer"
                            >
                                <div className="w-14 h-14 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                                    <Icon className="w-7 h-7 text-white" />
                                </div>
                                <h3 className="mb-3">{service.title}</h3>
                                <p className="text-gray-400 mb-4">
                                    {service.description}
                                </p>
                                <div className="flex items-center gap-2 text-sm text-white/70 group-hover:text-white transition-colors">
                                    <span>En savoir plus</span>
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
