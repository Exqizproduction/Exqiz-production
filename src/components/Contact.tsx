import {
    Instagram,
    Link,
    Linkedin,
    Mail,
    MapPin,
    Phone,
    Send,
} from "lucide-react";
import { useState } from "react";

import { createLucideIcon } from "lucide-react";

export const TiktokIcon = createLucideIcon("TiktokIcon", [
    [
        "path",
        {
            d: "M12.9167 8.425C12.9167 12.4583 12.4583 16.5833 12 17.5917C10.8083 19.7917 7.78333 19.8833 6.59167 17.775C5.58333 15.85 6.86667 12.9167 8.79167 12.9167C9.525 12.9167 10.1667 12.0917 10.1667 11.0833C10.1667 8.7 8.33333 8.79167 5.21667 11.175C0.45 14.9333 3.2 23 9.25 23C13.5583 23 15.6667 19.975 15.6667 13.8333V8.33333L18.05 9.25C22.0833 10.8083 23.9167 7.78333 20.0667 6.04167C18.875 5.49167 17.5917 4.20833 17.0417 3.01667C16.5833 1.91667 15.3917 1 14.5667 1C13.1 1 12.9167 1.91667 12.9167 8.425Z",
            key: "tiktok-path",
        },
    ],
]);

export function Contact() {
    const mailtoEmail = "contact@exqiz-prod.fr";
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
        window.location.href = `mailto:${mailtoEmail}?from=${email}&subject=${subject} - ${name}&body=${message}`;

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
        <section id="contact" className="py-16 bg-black relative z-10">
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
                                    <div>{mailtoEmail}</div>
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
                                    <Link className="w-6 h-6" />
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
                                        <a
                                            href="https://www.tiktok.com/@exqiz_prod"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center transition-colors"
                                        >
                                            <TiktokIcon className="w-5 h-5" />
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
                                className="w-full text-primary-foreground px-8 py-3 rounded-lg bg-primary/80 hover:bg-primary/70 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                            >
                                <Send className="w-5 h-5" />
                                Envoyer le message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="mt-24 px-4 border-t border-white/10 text-center text-gray-500 text-sm">
                <p>
                    © 2025 Exqiz Prod - Réalisateur & Monteur Vidéo. Tous
                    droits réservés. Designed by Equinox Dev.
                </p>
            </div>
        </section>
    );
}
