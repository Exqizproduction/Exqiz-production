import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "./ui/use-mobile";

export function Clients() {
    const testimonials = [
        {
            name: "Coaster Blast",
            role: "Groupe de musique (metal band)",
            testimonial:
                "Bastien a réalisé un clip vidéo pour notre groupe avec un résultat professionnel, dynamique et fidèle à notre univers. Disponible, à l’écoute et créatif, nous recommandons vivement son travail à tous ceux qui recherchent un vidéaste fiable et talentueux.",
        },
        {
            name: "Kymbaya",
            role: "Duo de DJs / Percussionnistes",
            testimonial:
                "Lors d’une de nos soirée DJ & percussions, Bastien a magnifiquement pu capturer et retranscrire les émotions du public et la vibe qui découlait de cette soirée ! ",
        },
        {
            name: "Théo Lafont",
            role: "Agent d’artiste",
            testimonial:
                "Bastien a sublimé notre soirée grâce à son œil de vidéaste talentueux. Il a su saisir l’ambiance et les moments forts avec une grande sensibilité. Professionnel, réactif et créatif, il a largement dépassé nos attentes. Une collaboration fluide et un résultat impeccable",
        },
        {
            name: "Philippe Bessard",
            role: "Opticien / Lunetier",
            testimonial:
                "ExqiZ prod a réalisé pour moi une vidéo portrait d'artisan d'une qualité exceptionnelle. Son sens du détail, son regard artistique et sa capacité à capturer l'authenticité de mon travail ont été remarquables. Le rendu est fluide, élégant et parfaitement fidèle à mon univers. Professionnel, à l'écoute et passionné, je le recommande pour tout projet vidéo de haute qualité.",
        },
        {
            name: "Benjamin Philippot",
            role: "Octopool",
            testimonial:
                "Un immense merci Bastien pour la vidéo aftermovie de notre soirée billard ! Tu as su capturer parfaitement l’ambiance, les moments forts et toute l’énergie de l’événement. Le résultat est dynamique, chaleureux et met vraiment en valeur chaque instant. Merci pour ton professionnalisme, ta créativité et ta réactivité. Nous sommes ravis du rendu et nous te recommandons sans hésiter !",
        },
        {
            name: "Aqlk",
            role: "Cuisinier",
            testimonial:
                "Un grand merci à Bastien pour son professionnalisme, le respect des délais et, surtout, l’excellente qualité de son travail final. Grâce à son expertise, son sens du détail et sa créativité, il a su sublimer chacun des plats.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(true);
    const itemsPerView = !useIsMobile() ? 3 : 1;

    // Créer une liste avec des clones pour la boucle infinie
    const extendedTestimonials = [
        ...testimonials.slice(-itemsPerView),
        ...testimonials,
        ...testimonials.slice(0, itemsPerView),
    ];

    useEffect(() => {
        if (!isPaused) {
            const interval = setInterval(() => {
                setCurrentIndex((prev) => prev + 1);
            }, 5000);

            return () => clearInterval(interval);
        }
    }, [isPaused, testimonials.length]);

    // Gérer la boucle infinie
    useEffect(() => {
        if (currentIndex === 0) {
            // On est au début des clones, sauter à la vraie fin
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(testimonials.length);
            }, 500);
            setTimeout(() => {
                setIsTransitioning(true);
            }, 550);
        } else if (currentIndex === testimonials.length + itemsPerView) {
            // On est à la fin des clones, sauter au vrai début
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(itemsPerView);
            }, 500);
            setTimeout(() => {
                setIsTransitioning(true);
            }, 550);
        }
    }, [currentIndex, testimonials.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => prev + 1);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => prev - 1);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index + itemsPerView);
    };

    return (
        <section id="clients" className="py-16">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="mb-4">Ils me font confiance</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Découvrez les artistes, entreprises et projets qui m’ont
                        fait confiance pour leurs vidéos.
                    </p>
                </div>

                <div
                    className="relative"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {/* Navigation buttons */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-20 z-10 w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                        aria-label="Précédent"
                    >
                        <ChevronLeft className="w-8 h-8" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-20 z-10 w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                        aria-label="Suivant"
                    >
                        <ChevronRight className="w-8 h-8" />
                    </button>

                    {/* Carousel container */}
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${
                                    currentIndex * (100 / itemsPerView)
                                }%)`,
                                transition: isTransitioning
                                    ? "transform 500ms"
                                    : "none",
                            }}
                        >
                            {extendedTestimonials.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 px-8"
                                    style={{ width: `${100 / itemsPerView}%` }}
                                >
                                    <div
                                        key={index}
                                        className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors"
                                    >
                                        <Quote className="w-10 h-10 text-primary mb-4 opacity-50" />
                                        <p className="text-gray-300 text-pretty mb-6 italic">
                                            "{item.testimonial}"
                                        </p>
                                        <div className="border-t border-white/10 pt-4">
                                            <div className="text-sm text-gray-400">
                                                {item.role}
                                            </div>
                                            <div className="text-sm text-primary mt-1">
                                                {item.name}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Dots indicator */}
                    <div className="flex justify-center gap-3 mt-16">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`w-4 h-4 rounded-full transition-colors ${
                                    (currentIndex -
                                        itemsPerView +
                                        testimonials.length) %
                                        testimonials.length ===
                                    index
                                        ? "bg-primary"
                                        : "bg-white/30 hover:bg-white/50"
                                }`}
                                aria-label={`Aller à la diapositive ${
                                    index + 1
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
