import { Play } from "lucide-react";
import banner from "../assets/images/banner.avif";
import logo from "../assets/images/logo.avif";
import profilePic from "../assets/images/profil.avif";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useIsMobile } from "./ui/use-mobile";
import { cn } from "./ui/utils";

export function Hero() {
    const isMobile = useIsMobile();
    return (
        <section
            id="accueil"
            className="relative min-h-screen flex items-center justify-center overflow-hidden py-16"
        >
            <div className="absolute inset-0 z-0">
                <ImageWithFallback
                    src={banner}
                    alt="Production vidéo"
                    className="w-full h-full scale-125 object-cover"
                />

                <div className="absolute inset-0 bg-black/70"></div>
                {!isMobile && (
                    <ImageWithFallback
                        src={logo}
                        alt="Production vidéo"
                        className="absolute w-64 h-64 right-0 bottom-0"
                    />
                )}
            </div>

            <div className="relative z-10 container mx-auto px-6 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Photo de profil */}
                    <div className="flex justify-center">
                        <div className="relative">
                            <div
                                className={cn(
                                    "rounded-full overflow-hidden border-4 border-primary/30",
                                    isMobile ? "w-32 h-32" : "w-80 h-80"
                                )}
                            >
                                <ImageWithFallback
                                    src={profilePic}
                                    alt="Bastien BILLARD"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Présentation */}
                    <div className="p-4">
                        <div className="mb-4">
                            <span className="text-primary mb-2 block">
                                Réalisateur & Monteur Vidéo
                            </span>
                            <h1>Bastien BILLARD</h1>
                        </div>
                        <p className="mb-6 text-gray-300">
                            Je suis un jeune réalisateur et vidéaste passionné,
                            fort de deux années d’expérience derrière la caméra.
                            Ce qui me pousse à créer, c’est l’envie profonde de
                            raconter des histoires — des récits qui touchent,
                            qui inspirent et qui restent en mémoire.
                        </p>
                        <p className="mb-8 text-gray-300">
                            De l’écriture à la réalisation, jusqu’au montage,
                            j’aime travailler chaque étape du processus créatif
                            pour donner vie à des vidéos authentiques et
                            chargées d’émotion. Ma sensibilité artistique guide
                            chacune de mes décisions : elle me permet d’apporter
                            une vision personnelle et une esthétique qui
                            marquent les esprits.
                        </p>
                        <p className="mb-8 text-gray-300">
                            Mon objectif est simple : créer des images qui
                            résonnent, capturer des instants qui racontent
                            quelque chose et offrir des projets qui laissent une
                            trace.
                        </p>
                        <div className="flex gap-4">
                            <button
                                onClick={() =>
                                    document
                                        .getElementById("portfolio")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="text-primary-foreground px-8 py-3 rounded-full bg-primary/80 hover:bg-primary/70 transition-colors flex items-center gap-2"
                            >
                                <Play className="w-5 h-5" />
                                Voir mon travail
                            </button>
                            <button
                                onClick={() =>
                                    document
                                        .getElementById("contact")
                                        ?.scrollIntoView({ behavior: "smooth" })
                                }
                                className="border border-white px-8 py-3 rounded-full hover:bg-white/10 transition-colors"
                            >
                                Me contacter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
