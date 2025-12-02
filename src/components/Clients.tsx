import { Quote } from "lucide-react";

export function Clients() {
  const testimonials = [
    {
      company: "Airbnb France",
      person: "Sophie Martin",
      role: "Directrice Marketing",
      testimonial: "Marc a su capturer l'essence de notre marque dans une série de vidéos promotionnelles. Son professionnalisme et sa créativité ont dépassé nos attentes. Un vrai plaisir de collaboration.",
    },
    {
      company: "Studio Médiatech",
      person: "Thomas Legrand",
      role: "Producteur",
      testimonial: "Travail impeccable sur notre documentaire. La qualité du montage et le respect des délais font de Marc un partenaire de confiance pour tous nos projets audiovisuels.",
    },
    {
      company: "Les Ateliers Créatifs",
      person: "Emma Rousseau",
      role: "Fondatrice",
      testimonial: "Marc a transformé notre vision en une vidéo corporate magnifique. Son sens du détail et sa capacité à raconter des histoires visuellement sont remarquables.",
    },
    {
      company: "Festival Lumière",
      person: "Jean-Pierre Dubois",
      role: "Directeur Artistique",
      testimonial: "Collaboration exceptionnelle sur nos aftermovies. Marc comprend parfaitement l'univers culturel et sait restituer l'atmosphère unique de nos événements.",
    },
    {
      company: "Agence Pixel",
      person: "Claire Fontaine",
      role: "Directrice Créative",
      testimonial: "Un monteur de talent avec une vraie expertise technique. Marc apporte toujours une touche créative qui fait la différence. Nos clients sont toujours ravis du résultat final.",
    },
    {
      company: "StartUp Innov",
      person: "Lucas Bernard",
      role: "CEO",
      testimonial: "Marc a su comprendre nos besoins et créer un contenu vidéo percutant pour notre levée de fonds. Son professionnalisme et sa réactivité sont exemplaires.",
    },
  ];

  return (
    <section id="clients" className="py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-center mb-16">Ils me font confiance</h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors"
            >
              <Quote className="w-10 h-10 text-primary mb-4 opacity-50" />
              <p className="text-gray-300 mb-6 italic">
                "{item.testimonial}"
              </p>
              <div className="border-t border-white/10 pt-4">
                <div className="text-white">{item.person}</div>
                <div className="text-sm text-gray-400">{item.role}</div>
                <div className="text-sm text-primary mt-1">{item.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
