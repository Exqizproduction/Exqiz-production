import { Instagram, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const name = encodeURIComponent(formData.name);
        const email = encodeURIComponent(formData.email);
        const subject = encodeURIComponent(formData.subject);
        const message = encodeURIComponent(formData.message);
        window.location.href = `mailto:bastienbillard69100@gmail.com?from=${email}&subject=${subject} - ${name}&body=${message}`;

        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <section id="contact" className="py-24 bg-black relative z-10">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="mb-4">Contactez-moi</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Un projet en tête ? Discutons-en ensemble et donnons vie
                        à vos idées.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    <div>
                        <h3 className="mb-6">Informations de contact</h3>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-gray-400 text-sm mb-1">
                                        Email
                                    </div>
                                    <div>bastienbillard69100@gmail.com</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-gray-400 text-sm mb-1">
                                        Téléphone
                                    </div>
                                    <div>+33 6 29 84 29 22</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <div className="text-gray-400 text-sm mb-1">
                                        Localisation
                                    </div>
                                    <div>Lyon, France</div>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Instagram className="w-6 h-6" />
                                </div>
                                <div className="flex-1">
                                    <div className="text-gray-400 text-sm mb-2">
                                        Réseaux sociaux
                                    </div>
                                    <div className="flex gap-3">
                                        <a
                                            href="https://www.instagram.com/exqiz_prod/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
                                        >
                                            <Instagram className="w-5 h-5" />
                                        </a>
                                        <a
                                            href="https://www.linkedin.com/in/bastien-billard-983839151/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
                                        >
                                            <Linkedin className="w-5 h-5" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-6 bg-white/5 rounded-lg border border-white/10">
                            <p className="text-gray-300">
                                Je suis disponible pour des projets en freelance
                                et ouvert à toute collaboration créative.
                                N'hésitez pas à me contacter pour discuter de
                                votre projet.
                            </p>
                        </div>
                    </div>

                    <div>
                        <form className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm mb-2 text-gray-300"
                                >
                                    Nom complet *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                                    placeholder="Votre nom"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm mb-2 text-gray-300"
                                >
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                                    placeholder="votre@email.fr"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="subject"
                                    className="block text-sm mb-2 text-gray-300"
                                >
                                    Type de projet *
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/30 transition-colors"
                                >
                                    <option value="">
                                        Sélectionnez un type
                                    </option>
                                    <option value="Vidéo d'entreprise">
                                        Vidéo d'entreprise
                                    </option>
                                    <option value="Clip musical">
                                        Clip musical
                                    </option>
                                    <option value="réseaus sociaux">
                                        {" "}
                                        Réseaux sociaux
                                    </option>
                                    <option value="documentary">
                                        Documentaire
                                    </option>
                                    <option value="Événementiel">
                                        Événementiel
                                    </option>
                                    <option value="Publicité / Commercial">
                                        Publicité / Commercial
                                    </option>
                                    <option value="Autre">Autre</option>
                                </select>
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm mb-2 text-gray-300"
                                >
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors resize-none"
                                    placeholder="Décrivez votre projet..."
                                />
                            </div>

                            <button
                                type="submit"
                                onClick={handleSubmit}
                                className="w-full bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
                            >
                                <Send className="w-5 h-5" />
                                Envoyer le message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="mt-24 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
                <p>
                    © 2025 Exqiz Production - Réalisateur & Monteur Vidéo. Tous
                    droits réservés. Designed by Equinox Dev.
                </p>
            </div>
        </section>
    );
}
