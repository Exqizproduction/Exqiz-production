import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Play, X } from "lucide-react";

import pubThumb from "../assets/images/thumbnails/pub_fictive.png";
import courtThumb from "../assets/images/thumbnails/court_metrage.png";
import instaThumb from "../assets/images/thumbnails/instagram.png";
import musicThumb from "../assets/images/thumbnails/clip_musicale.png";
import publiThumb from "../assets/images/thumbnails/publi_portrait.png";
import interviewThumb from "../assets/images/thumbnails/interview.png";
import { cn } from "./ui/utils";
import { useState } from "react";
import { useIsMobile } from "./ui/use-mobile";

const projects = [
    {
        id: 1,
        title: "MAKE IT FLUID",
        category: "Pubilicité Fictive",
        image: pubThumb,
        duration: "00:39",
        videoId: "vXCHl_iaoVQ",
    },
    {
        id: 2,
        title: "S'EMMÊLER",
        category: "Court Métrage",
        image: courtThumb,
        duration: "1:49",
        style: "scale-125",
        alreadyZoomed: true,
        videoId: "IAekrddCuqo"
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
        videoId: "HbxzS1oRTT8"
    },
    {
        id: 5,
        title: "LA STACHE",
        category: "Publi-Portrait",
        image: publiThumb,
        duration: "3:03",
        videoId: "J_avGuwM9Js"
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
    const isMobile = useIsMobile();
    const [displayVideo, setDisplayVideo] = useState<boolean>(false);
    const [videoId, setVideoId] = useState<string>("");
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
                                <button
                                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                                    onClick={() => {
                                        setDisplayVideo(true);
                                        setVideoId(project.videoId || "");
                                    }}
                                >
                                    <Play className="w-8 h-8 text-white" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {displayVideo && (
                <div className="flex justify-center items-center absolute from-black/70 fixed inset-0 bg-black/80 z-50">
                    {!isMobile ? (
                        <div className="flex flex-col items-end gap-4">
                            <button
                                className="w-auto right-0"
                                onClick={() => setDisplayVideo(false)}
                            >
                                <X size={32}></X>
                            </button>
                            <iframe
                                width="800"
                                height="450"
                                src={`https://www.youtube.com/embed/${videoId}?rel=0&controls=1&autoplay=1`}
                                title="Ma vidéo"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                                allowFullScreen
                                style={{ borderRadius: "8px" }}
                            ></iframe>
                        </div>
                    ) : (
                        <div className="w-full aspect-video relative overflow-hidden flex flex-col items-end gap-4">
                            <button
                                className="w-auto right-0"
                                onClick={() => setDisplayVideo(false)}
                            >
                                <X size={32}></X>
                            </button>

                            <div
                                style={{
                                    width: "100%",
                                    aspectRatio: "16/9",
                                    position: "relative",
                                    overflow: "hidden",
                                    backgroundColor: "#000",
                                }}
                            >
                                <iframe
                                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1&rel=0`}
                                    title="Ma vidéo"
                                    allow="autoplay; encrypted-media; picture-in-picture"
                                    allowFullScreen
                                    style={{
                                        position: "absolute",
                                        inset: 0,
                                        width: "100%",
                                        height: "100%",
                                        border: 0,
                                    }}
                                />
                            </div>
                        </div>
                    )}
                </div>
            )}
        </section>
    );
}
