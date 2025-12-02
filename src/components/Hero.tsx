import { Play } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">
      <div className="absolute inset-0 z-0">
        <ImageWithFallback 
          src="https://images.unsplash.com/photo-1654288891700-95f67982cbcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBjYW1lcmF8ZW58MXx8fHwxNzY0NDg1MjgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Production vidéo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo de profil */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1739296385104-f9e3087897f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBmaWxtbWFrZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQ2NzA4MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Marc Dubois"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Présentation */}
          <div>
            <div className="mb-4">
              <span className="text-primary mb-2 block">Réalisateur & Monteur Vidéo</span>
              <h1>Marc Dubois</h1>
            </div>
            <p className="mb-6 text-gray-300">
              Passionné par l'art de raconter des histoires à travers l'image, je mets mon expertise au service de vos projets audiovisuels depuis plus de 10 ans. Spécialisé dans la réalisation et le montage vidéo, je transforme vos idées en contenus visuels captivants et percutants.
            </p>
            <p className="mb-8 text-gray-300">
              De la conception créative à la post-production finale, j'accompagne mes clients dans toutes les étapes de leurs projets : films d'entreprise, clips musicaux, documentaires, publicités et contenus web. Mon approche allie technique professionnelle et sensibilité artistique pour créer des vidéos qui marquent les esprits.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-full hover:bg-primary/90 transition-colors flex items-center gap-2"
              >
                <Play className="w-5 h-5" />
                Voir mon travail
              </button>
              <button 
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
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