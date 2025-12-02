import { Quote } from "lucide-react";

export function Clients() {
    const testimonials = [
        {
            name: "Coaster Blast",
            role: "Groupe de musique (metal band)",
            testimonial:
                "Bastien a réalisé un clip vidéo pour notre groupe avec un résultat professionnel, dynamique et fidèle à notre univers. Disponible, à l’écoute et créatif, nous recommandons vivement son travail à tous ceux qui recherchent un vidéaste fiable et talentueux.",
        },
        {
            artiste: "",
            name: "Kymbaya",
            role: "Duo de DJs / Percussionnistes",
            testimonial:
                "Lors d’une de nos soirée DJ & percussions, Bastien a magnifiquement pu capturer et retranscrire les émotions du public et la vibe qui découlait de cette soirée ! ",
        },
        // {
        //     company: "Les Ateliers Créatifs",
        //     person: "Emma Rousseau",
        //     role: "Fondatrice",
        //     testimonial:
        //         "Marc a transformé notre vision en une vidéo corporate magnifique. Son sens du détail et sa capacité à raconter des histoires visuellement sont remarquables.",
        // },
        // {
        //     company: "Festival Lumière",
        //     person: "Jean-Pierre Dubois",
        //     role: "Directeur Artistique",
        //     testimonial:
        //         "Collaboration exceptionnelle sur nos aftermovies. Marc comprend parfaitement l'univers culturel et sait restituer l'atmosphère unique de nos événements.",
        // },
        // {
        //     company: "Agence Pixel",
        //     person: "Claire Fontaine",
        //     role: "Directrice Créative",
        //     testimonial:
        //         "Un monteur de talent avec une vraie expertise technique. Marc apporte toujours une touche créative qui fait la différence. Nos clients sont toujours ravis du résultat final.",
        // },
        // {
        //     company: "StartUp Innov",
        //     person: "Lucas Bernard",
        //     role: "CEO",
        //     testimonial:
        //         "Marc a su comprendre nos besoins et créer un contenu vidéo percutant pour notre levée de fonds. Son professionnalisme et sa réactivité sont exemplaires.",
        // },
    ];

    return (
        <section id="clients" className="py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="mb-4">Ils me font confiance</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Découvrez les artistes, entreprises et projets qui m’ont
                        fait confiance pour leurs vidéos.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors"
                        >
                            <Quote className="w-10 h-10 text-primary mb-4 opacity-50" />
                            <p className="text-gray-300 text-pretty mb-6 italic">
                                "{item.testimonial}"
                            </p>
                            <div className="border-t border-white/10 pt-4">
                                <div className="text-white">{item.artiste}</div>
                                <div className="text-sm text-gray-400">
                                    {item.role}
                                </div>
                                <div className="text-sm text-primary mt-1">
                                    {item.name}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
