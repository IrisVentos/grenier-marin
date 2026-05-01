"use client"

// app/references/page.js

import Image from "next/image";
import BottomNav from "../components/BottomNav";

const references = [
  {
    emoji: "",
    type: "Livre",
    title: "La révolution des algues",
    author: "Vincent Doumeizel",
    description: "Un plaidoyer fascinant pour les algues et les plantes marines, leur rôle vital dans nos écosystèmes et leur potentiel pour l'avenir.",
    link: null,
  },
  {
    emoji: "",
    type: "Institution",
    title: "Office Français de la Biodiversité",
    author: "ofb.gouv.fr",
    description: "Sauver les herbiers de posidonies — ressources officielles et programmes de protection.",
    link: "https://ofb.gouv.fr/actualites/sauver-les-herbiers-de-posidonies",
  },
  {
    emoji: "",
    type: "Article",
    title: "Les services rendus par la posidonie",
    author: "bandol-littoral.org",
    description: "État des lieux complet sur les fonctions écosystémiques de la posidonie : oxygène, biodiversité, protection des côtes.",
    link: "https://bandol-littoral.org/posidonie-etat-des-lieux/",
  },
  {
    emoji: "",
    type: "Etude marketing",
    title: "Rapport IUCN : Un tourisme raisonné et durable",
    author: "iucn.org",
    description: "Guide sur le marketing des destinations nature — pour concilier attractivité touristique et protection des milieux marins.",
    link: "https://iucn.org/sites/default/files/2023-06/nature-oriented-destination-marketing_fr_compressed.pdf",
  },
  {
    emoji: "",
    type: "Étude scientifique",
    title: "Surveillance de la posidonie",
    author: "Sartoretto et al. — Conseil Régional PACA & Ifremer",
    description: "Étude de référence sur le suivi et la cartographie des herbiers de Posidonie en Méditerranée.",
    link: "http://cartocean.fr/biblio/Sartoretto_et_al_2009.pdf",
  },
  {
    emoji: "",
    type: "Association",
    title: "Plaisanciers et herbiers : quelle réglementation ?",
    author: "wwf.fr",
    description: "Les bateaux de 24m ne peuvent plus jeter l'ancre sur les posidonies — mais qu'en est-il de la majorité des plaisanciers ?",
    link: "https://www.wwf.fr/especes-prioritaires/posidonie",
  },
  {
    emoji: "",
    type: "Article",
    title: "La posidonie, réservoir de biodiversité",
    author: "naturdive.com",
    description: "La croissance la plus lente de toutes les plantes marines, mais aussi la plus longue durée de vie — un trésor de patience.",
    link: "https://naturdive.com/actions/la-posidonie-un-reservoir-de-biodiversite/",
  },
  {
    emoji: "",
    type: "Article",
    title: "Le coût écosystémique de l'herbier",
    author: "ici.fr",
    description: "Destruction des herbiers à Marseille : le préjudice écologique chiffré devant la justice — une première en France.",
    link: "https://www.ici.fr/infos/environnement/destruction-des-herbiers-de-posidonie-a-marseille-le-prejudice-ecologique-chiffre-devant-la-justice-4216209",
  },
  {
    emoji: "",
    type: "Application",
    title: "Donia — Visualiser les fonds sensibles",
    author: "donia.fr",
    description: "Application gratuite (Android & iOS) pour visualiser les herbiers et fonds sensibles en temps réel avant de mouiller.",
    link: "https://donia.fr/",
  },
  {
    emoji: "",
    type: "Arrêté préfectoral",
    title: "Protéger plutôt que restaurer",
    author: "Préfecture maritime de Méditerranée",
    description: "Cadre réglementaire de protection des herbiers en Méditerranée — la prévention reste la meilleure des thérapies.",
    link: "https://www.premar-mediterranee.gouv.fr/uploads/mediterranee/arretes/73e018b2c8cedc104133643ae6e2c1ae.pdf",
  },
  {
    emoji: "",
    type: "Association",
    title: "Surfrider Foundation",
    author: "surfrider.fr",
    description: "Soutenir Surfrider, c'est financer des actions concrètes anti-pollution marine partout en France.",
    link: "https://www.surfrider.fr/",
  },
];

export default function ReferencesPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-[#0a0f1e] font-sans text-white min-h-screen">
      <main className="flex flex-1 w-full flex-col items-center py-24 px-6 max-w-3xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-8 mb-16 w-full">
          <Image src="/logo_alma.png" alt="Logo" width={200} height={500} priority />
          <div className="flex flex-col items-start gap-2 text-left">
            <h1 className="text-4xl font-bold leading-10 tracking-tight text-[#a8d5f7] font-space-grotesk">Grenier Marin</h1>
            <h2 className="text-3xl font-bold leading-10 tracking-tight text-[#4a9ede] font-space-grotesk">Références & Sources</h2>
          </div>
        </div>

        {/* Intro */}
        <p className="w-full text-[#7ab8e8] leading-relaxed text-base italic mb-16">
          Une sélection de sources scientifiques, institutionnelles et associatives pour aller plus loin 
          dans la compréhension et la protection des herbiers de Posidonie.
        </p>

        {/* List */}
        <ul className="w-full flex flex-col">
          {references.map((ref, i) => (
            <li key={i} className="flex flex-col gap-1 py-7 border-b border-[#4a9ede]/15 last:border-none">
              <span className="text-xs uppercase tracking-widest font-semibold text-[#4a9ede]/60">{ref.type}</span>
              <div className="flex items-start justify-between gap-6">
                <div className="flex flex-col gap-1">
                  <h3 className="text-lg font-bold text-[#a8d5f7] leading-snug">{ref.title}</h3>
                  <p className="text-sm text-[#4a9ede]/70 font-medium">{ref.author}</p>
                  <p className="text-sm text-[#7ab8e8]/70 leading-relaxed mt-1">{ref.description}</p>
                </div>
                {ref.link && (
                  <a
                    href={ref.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#4a9ede] hover:text-[#a8d5f7] transition-colors flex-shrink-0 mt-1"
                  >
                    Ouvrir →
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>

        <BottomNav
          primary={{ href: "/actions", label: "Nos actions" }}
          secondary={{ href: "/", label: "Retour à l'accueil" }}
          className="flex gap-4 justify-center flex-wrap mt-20"
        />

      </main>
    </div>
  );
}