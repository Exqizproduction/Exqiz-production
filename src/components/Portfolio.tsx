import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Play } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Documentaire Corporatif",
    category: "Documentaire",
    image: "https://images.unsplash.com/photo-1759521528494-fd6ceb6049e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudGFyeSUyMGZpbG18ZW58MXx8fHwxNzY0NTIyNzk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "12:30"
  },
  {
    id: 2,
    title: "Clip Musical Indépendant",
    category: "Clip Musical",
    image: "https://images.unsplash.com/photo-1723396612574-961649793bb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc2NDQyMjEyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "3:45"
  },
  {
    id: 3,
    title: "Vidéo Promotionnelle",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1713392824135-a7c7db3d9465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlb2dyYXBoZXIlMjBmaWxtaW5nfGVufDF8fHx8MTc2NDQwNzk1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "1:30"
  },
  {
    id: 4,
    title: "Court-métrage Fiction",
    category: "Fiction",
    image: "https://images.unsplash.com/photo-1583215794430-78a2c664751e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtJTIwZWRpdGluZyUyMHN0dWRpb3xlbnwxfHx8fDE3NjQ1MTkyMTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "18:20"
  },
  {
    id: 5,
    title: "Reportage Événementiel",
    category: "Événementiel",
    image: "https://images.unsplash.com/photo-1654288891700-95f67982cbcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBjYW1lcmF8ZW58MXx8fHwxNzY0NDg1MjgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "8:15"
  },
  {
    id: 6,
    title: "Vidéo Institutionnelle",
    category: "Institutionnel",
    image: "https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjQ0NjU0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    duration: "5:40"
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="mb-4">Portfolio</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Découvrez une sélection de mes projets récents, du documentaire au clip musical, 
            en passant par la vidéo d'entreprise.
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
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="mb-2 text-sm text-gray-300">{project.category}</div>
                <div className="mb-2">{project.title}</div>
                <div className="text-sm text-gray-400">{project.duration}</div>
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
