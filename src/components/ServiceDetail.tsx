import { ArrowLeft, Check, Clock, Euro } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface ServiceDetailProps {
  serviceId: string;
  onClose: () => void;
}

const serviceDetails = {
  "realisation": {
    title: "Réalisation",
    tagline: "Donnez vie à vos idées avec une direction artistique unique",
    image: "https://images.unsplash.com/photo-1654288891700-95f67982cbcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y3Rpb24lMjBjYW1lcmF8ZW58MXx8fHwxNzY0NDg1MjgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "En tant que réalisateur, je prends en charge l'ensemble du processus créatif de votre projet vidéo. De la conception du scénario à la direction d'équipe sur le terrain, je m'assure que chaque plan raconte votre histoire de la manière la plus impactante possible.",
    features: [
      "Développement du concept et scénarisation",
      "Direction artistique et visuelle",
      "Repérages et préparation technique",
      "Direction d'acteurs et d'équipe",
      "Supervision de la prise de vue",
      "Coordination avec les différents corps de métier"
    ],
    process: [
      { step: "Brief & Concept", description: "Analyse de vos besoins et développement créatif" },
      { step: "Pré-production", description: "Scénario, storyboard, repérages, casting" },
      { step: "Tournage", description: "Réalisation sur le terrain avec l'équipe technique" },
      { step: "Livraison", description: "Supervision de la post-production jusqu'à la livraison" }
    ],
    pricing: "Sur devis - À partir de 2 500€",
    duration: "Variable selon le projet"
  },
  "montage": {
    title: "Montage Vidéo",
    tagline: "Transformez vos rushes en récits captivants",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB0aW1lbGluZXxlbnwxfHx8fDE3NjQ0NjMzOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Le montage est l'art de raconter une histoire à travers l'assemblage des images. Avec une maîtrise technique pointue et une sensibilité narrative, je donne du rythme et de l'émotion à vos contenus vidéo.",
    features: [
      "Montage cut classique et dynamique",
      "Montage multi-caméras",
      "Synchronisation audio/vidéo",
      "Création de transitions créatives",
      "Optimisation du rythme narratif",
      "Export dans tous formats (HD, 4K, Web, Broadcast)"
    ],
    process: [
      { step: "Dérushage", description: "Analyse et sélection des meilleurs plans" },
      { step: "Montage", description: "Première version de la structure narrative" },
      { step: "Colorimétrie", description: "Affinage, ajustements et peaufinage" },
      { step: "Validation", description: "Aller-retours et modifications selon vos retours" }
    ],
    pricing: "400€ / jour de montage",
    duration: "1 à 10 jours selon la complexité"
  },
  "conception": {
    title: "Conception Créative",
    tagline: "Des concepts originaux pour vous démarquer",
    image: "https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjQ0NjU0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Chaque projet mérite une approche unique. Je développe des concepts créatifs sur-mesure qui reflètent votre identité et captent l'attention de votre audience cible.",
    features: [
      "Brainstorming et développement d'idées",
      "Écriture de synopsis et scénarios",
      "Création de storyboards illustrés",
      "Définition de l'univers visuel",
      "Moodboards et références artistiques",
      "Présentation pitch deck professionnel"
    ],
    process: [
      { step: "Immersion", description: "Découverte de votre univers et objectifs" },
      { step: "Recherche", description: "Veille créative et identification des tendances" },
      { step: "Idéation", description: "Génération de concepts multiples" },
      { step: "Présentation", description: "Pitch des meilleures idées avec supports visuels" }
    ],
    pricing: "800€ - 2 000€ selon l'ampleur",
    duration: "1 à 2 semaines"
  },
  "post-production": {
    title: "Post-Production",
    tagline: "Sublimez vos images avec un rendu professionnel",
    image: "https://images.unsplash.com/photo-1574717024757-c1ec4d86ae82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvciUyMGdyYWRpbmclMjBzY3JlZW58ZW58MXx8fHwxNzY0NTIzMjYxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "La post-production est l'étape finale qui transforme vos rushes en œuvre aboutie. Étalonnage colorimétrique, design sonore et effets visuels : chaque détail compte pour un rendu cinématographique.",
    features: [
      "Étalonnage colorimétrique (DaVinci Resolve)",
      "Correction et harmonisation des couleurs",
      "Mixage et mastering audio",
      "Sound design et bruitage",
      "Effets visuels (VFX) et compositing",
      "Nettoyage d'image et stabilisation"
    ],
    process: [
      { step: "Analyse", description: "Évaluation des besoins techniques" },
      { step: "Color grading", description: "Création d'une palette cohérente" },
      { step: "Audio", description: "Mixage, equalisation, effets sonores" },
      { step: "Finalisation", description: "Export master et déclinaisons" }
    ],
    pricing: "500€ / jour de post-production",
    duration: "2 à 5 jours selon le projet"
  },
  "entreprise": {
    title: "Vidéo d'Entreprise",
    tagline: "Communiquez efficacement avec vos équipes et clients",
    image: "https://images.unsplash.com/photo-1723396612574-961649793bb9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc2NDQyMjEyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "La vidéo corporate est un outil puissant pour valoriser votre entreprise, former vos équipes ou présenter vos produits. Je crée des contenus professionnels adaptés à vos enjeux business.",
    features: [
      "Vidéos institutionnelles et de présentation",
      "Témoignages clients et collaborateurs",
      "Tutoriels et vidéos de formation",
      "Captation d'événements corporate",
      "Reportages d'entreprise",
      "Vidéos produits et démonstrations"
    ],
    process: [
      { step: "Cadrage", description: "Définition des objectifs et messages clés" },
      { step: "Production", description: "Tournage dans vos locaux ou en studio" },
      { step: "Montage", description: "Habillage aux couleurs de votre charte" },
      { step: "Diffusion", description: "Formats optimisés pour tous supports" }
    ],
    pricing: "1 500€ - 5 000€ selon le format",
    duration: "1 à 3 semaines"
  },
  "motion-design": {
    title: "Motion Design",
    tagline: "Dynamisez vos messages avec des animations percutantes",
    image: "https://images.unsplash.com/photo-1740174459694-4da6669ef2b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltYXRpb24lMjBtb3Rpb24lMjBncmFwaGljc3xlbnwxfHx8fDE3NjQ1MDk1NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Le motion design allie créativité graphique et animation pour créer des visuels dynamiques et mémorables. Parfait pour vulgariser des concepts complexes ou créer un habillage unique.",
    features: [
      "Animations graphiques 2D",
      "Habillage vidéo personnalisé",
      "Génériques et transitions",
      "Infographies animées",
      "Typographies cinétiques",
      "Logo animations et bumpers"
    ],
    process: [
      { step: "Direction artistique", description: "Définition du style graphique" },
      { step: "Design", description: "Création des éléments graphiques" },
      { step: "Animation", description: "Mise en mouvement et timing" },
      { step: "Intégration", description: "Composition finale avec audio" }
    ],
    pricing: "600€ - 3 000€ selon la complexité",
    duration: "3 à 10 jours"
  }
};

export function ServiceDetail({ serviceId, onClose }: ServiceDetailProps) {
  const service = serviceDetails[serviceId as keyof typeof serviceDetails];
  
  if (!service) {
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <button
            onClick={onClose}
            className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Retour aux services
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden">
        <ImageWithFallback 
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/70 to-black"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <h1 className="mb-4">{service.title}</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {service.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Description */}
          <div className="mb-16">
            <p className="text-lg text-gray-300 leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h2 className="mb-8">Ce qui est inclus</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div className="mb-16">
            <h2 className="mb-8">Processus de travail</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {service.process.map((item, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-lg border border-white/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center flex-shrink-0">
                      {index + 1}
                    </div>
                    <h3>{item.step}</h3>
                  </div>
                  <p className="text-gray-400">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & Duration */}
          <div className="bg-zinc-950 p-8 rounded-lg border border-white/10">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-2 text-gray-400">
                  <Euro className="w-5 h-5" />
                  <span className="text-sm">Tarification</span>
                </div>
                <div className="text-xl">{service.pricing}</div>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2 text-gray-400">
                  <Clock className="w-5 h-5" />
                  <span className="text-sm">Délai moyen</span>
                </div>
                <div className="text-xl">{service.duration}</div>
              </div>
            </div>
            <div className="mt-8">
              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="w-full bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
              >
                Demander un devis
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}