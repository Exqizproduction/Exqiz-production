import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Play } from "lucide-react";

import pubThumb from "../assets/images/thumbnails/pub_fictive.png";
import courtThumb from "../assets/images/thumbnails/court_metrage.png";
import instaThumb from "../assets/images/thumbnails/instagram.png";
import musicThumb from "../assets/images/thumbnails/clip_musicale.png";
import publiThumb from "../assets/images/thumbnails/publi_portrait.png";
import interviewThumb from "../assets/images/thumbnails/interview.png";
import { cn } from "./ui/utils";

const projects = [
    {
        id: 1,
        title: "MAKE IT FLUID",
        category: "Pubilicité Fictive",
        image: pubThumb,
        duration: "00:39",
    },
    {
        id: 2,
        title: "S'EMMÊLER",
        category: "Court Métrage",
        image: courtThumb,
        duration: "1:49",
        style: "scale-125",
        alreadyZoomed: true,
    },
    {
        id: 3,
        title: "OCTOPOOL",
        category: "Vidéo Promotionnelle",
        image: instaThumb,
        duration: "1:09",
        style: "translate-x--26",
    },
    {
        id: 4,
        title: "SHOOT FOR THE STARS",
        category: "Clip Musical",
        image: musicThumb,
        duration: "4:50",
    },
    {
        id: 5,
        title: "LA STACHE",
        category: "Publi-Portrait",
        image: publiThumb,
        duration: "3:03",
    },
    {
        id: 6,
        title: "BESSARD VISION",
        category: "Portrait Artisant",
        image: interviewThumb,
        duration: "4:06",
    },
];

export function Portfolio() {
    return (
        <section id="portfolio" className="py-16">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="mb-4">Portfolio</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Découvrez une sélection de mes projets récents, vidéos
                        d’entreprises, clip musical, posts instagram, soirées
                        événementielles...
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className="group relative overflow-hidden rounded-lg cursor-pointer aspect-video"
                        >
                            <ImageWithFallback
                                src={project.image}
                                alt={project.title}
                                className={cn(
                                    "object-cover transition-transform duration-500 group-hover:scale-110",
                                    project?.style,
                                    project?.alreadyZoomed
                                        ? "group-hover:scale-135"
                                        : ""
                                )}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>

                            <div className="absolute inset-0 flex flex-col justify-end p-6">
                                <div className="mb-2 text-sm text-gray-300">
                                    {project.category}
                                </div>
                                <div className="mb-2">{project.title}</div>
                                <div className="text-sm text-gray-400">
                                    {project.duration}
                                </div>
                            </div>

                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                    <Play className="w-8 h-8 text-white" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
