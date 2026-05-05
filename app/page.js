// Welcome page

import Image from "next/image";
import Link from "next/link";
import PageHeader from "./components/PageHeader";
import InteractiveMap from "./components/InteractiveMap";

// span balise texte , avec css dans class name
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[#0a0f1e] font-sans">
      <main className="flex flex-1 w-full flex-col items-center pt-16 pb-0 px-0 bg-[#0a0f1e] text-center font-space-grotesk">
        <PageHeader
          subtitle="Sanctuaire de Posidonie en Méditerranée"
          className="flex items-center gap-8"
        />

        {/* § 01 — Mission */}
        <section className="w-full max-w-3xl px-6 mt-12 mb-12 text-left">
          <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[#7ab8e8]/70 font-mono">
            <span className="w-6 h-px bg-current" />
            § 01 — Mission
          </span>
          <h2 className="mt-8 text-3xl md:text-4xl font-light text-white leading-[1.15] font-space-grotesk">
            Créer une zone de{" "}
            <em className="not-italic text-[#4a9ede] font-medium">200 hectares</em>{" "}
            d&apos;herbier protégé sur la côte varoise, entre la Madrague et la Pointe Fauconnière.
          </h2>
        </section>

        {/* § 02 — La posidonie */}
        <section className="w-full max-w-3xl px-6 mb-12 text-left">
          <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[#7ab8e8]/70 font-mono">
            <span className="w-6 h-px bg-current" />
            § 02 — La posidonie
          </span>

          <p className="mt-8 text-lg leading-relaxed text-slate-300">
            La Posidonie est le{" "}
            <span className="text-[#4a9ede] font-semibold">poumon de la Méditerranée</span>,
            abritant <span className="text-[#4a9ede] font-semibold">25%</span> des espèces marines.
            Elle lutte contre l&apos;érosion des côtes, produit de l&apos;oxygène et capture le CO2.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            Mais cette belle plante est victime des activités humaines : arrachée par les ancres, polluée et affaiblie par le réchauffement climatique et le surtourisme.
          </p>
        </section>

        {/* Carte 01 — interactive */}
        <figure className="w-full max-w-3xl px-6 mb-12 m-0">
          <InteractiveMap
            center={[46.5, 2.5]}
            zoom={5}
            markers={[
              { coords: [43.1763, 5.71], label: "Saint-Cyr-sur-Mer", direction: "right" },
            ]}
            ariaLabel="Localisation de Saint-Cyr-sur-Mer en France"
          />
          <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500 text-center">
            Carte 01 — Localisation
          </figcaption>
        </figure>

        {/* § 03 — Propositions */}
        <section className="w-full max-w-3xl px-6 mb-12 text-left">
          <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[#7ab8e8]/70 font-mono">
            <span className="w-6 h-px bg-current" />
            § 03 — Propositions
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl font-light text-[#a8d5f7] leading-tight font-space-grotesk">
            Nos propositions pour la protéger
          </h2>

          <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
            {[
              { title: "Mouillage responsable", desc: "Interdiction d'ancrage sur les herbiers (Zone ZMEL)", color: "#4a9ede" },
              { title: "Éducation", desc: "Sensibilisation dans les écoles de Saint-Cyr", color: "#f59e0b" },
              { title: "Découverte", desc: "Chemin de snorkeling balisé", color: "#4ade80" },
              { title: "Dépollution", desc: "Collectes  de déchets littorales organisées", color: "#f6ca46" },
              { title: "Recherche", desc: "Accueil d'associations marines (Miraceti)", color: "#a8d5f7" },
            ].map((p, i) => (
              <li
                key={p.title}
                className="border border-white/10 p-6 flex flex-col gap-3 md:[&:nth-child(5)]:col-span-2"
                style={{ borderLeft: `2px solid ${p.color}` }}
              >
                <span
                  className="font-mono text-[10px] uppercase tracking-[0.16em] font-medium"
                  style={{ color: p.color }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-medium text-[#a8d5f7] leading-snug">{p.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed m-0">{p.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Invitation */}
        <section className="w-full max-w-3xl px-6 mb-12 text-left">
          <p className="text-lg leading-relaxed text-slate-300">
            Tu t&apos;intéresses aux fonds marins et aux animaux qui y habitent?
            Viens nous aider à protéger les herbiers de posidonie!
            Pour en savoir plus, tu peux aller lire nos recherches sur les{" "}
            <Link
              href="/menaces"
              className="text-[#4a9ede] underline decoration-1 underline-offset-4 hover:text-[#a8d5f7] transition-colors"
            >
              Menaces
            </Link>{" "}
            qui guettent la posidonie ou t&apos;engager sur des{" "}
            <Link
              href="/calendrier"
              className="text-[#4a9ede] underline decoration-1 underline-offset-4 hover:text-[#a8d5f7] transition-colors"
            >
              Actions citoyennes
            </Link>
            .
          </p>
        </section>

        {/* Carte 02 — interactive */}
        <figure className="w-full max-w-3xl px-6 mb-12 m-0">
          <InteractiveMap
            center={[43.18, 5.706]}
            zoom={14}
            polygon={[
              [43.1745, 5.69],
              [43.1755, 5.694],
              [43.1815, 5.705],
              [43.183, 5.718],
              [43.181, 5.7195],
              [43.1735, 5.6915],
            ]}
            polygonPopup="<strong>Sanctuaire</strong><br/>~200 hectares"
            markers={[
              { coords: [43.1755, 5.692], label: "Pointe Grenier", direction: "left" },
              { coords: [43.183, 5.718], label: "La Madrague", direction: "right" },
            ]}
            ariaLabel="Périmètre du sanctuaire entre Pointe Grenier et La Madrague"
          />
          <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500 text-center">
            Carte 02 — Périmètre du sanctuaire (~200 ha)
          </figcaption>
        </figure>

        <section id="equipe" className="w-full max-w-3xl px-6 mb-12 text-left">
          <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[#7ab8e8]/70 font-mono">
            <span className="w-6 h-px bg-current" />
            § 04 — L&apos;équipe
          </span>

          <h2 className="text-3xl md:text-4xl font-light text-[#a8d5f7] leading-tight font-space-grotesk mt-6">
            Celles et ceux qui <em className="italic text-[#4a9ede]">portent</em> le projet.
          </h2>

          <ul className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-10 list-none p-0">
            {[
              { name: "Philippe Ventos", role: "Porteur du projet", initials: "PV" },
              { name: "Iris Ventos", role: "Conseil biodiversité", initials: "IV" },
              { name: "Philippe Cortes", role: "Photographe plongeur", initials: "PC" },
              { name: "Delphine Rousseau-Ventos", role: "Communication", initials: "DR" },
              { name: "Alma Ventos", role: "Graphisme & design", initials: "AV" },
            ].map((m) => (
              <li key={m.name} className="flex flex-col">
                <div
                  className="aspect-[4/5] mb-3 border border-white/15 relative flex items-center justify-center overflow-hidden"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(135deg, transparent 0 10px, rgba(168,213,247,0.05) 10px 11px), linear-gradient(180deg, rgba(74,158,222,0.10), rgba(10,15,30,0.55))",
                  }}
                >
                  <span className="font-space-grotesk italic text-4xl md:text-5xl text-[#a8d5f7]/35 select-none">
                    {m.initials}
                  </span>
                </div>
                <h4 className="text-base font-medium text-[#a8d5f7] leading-snug">{m.name}</h4>
                <small className="block text-[10px] uppercase tracking-[0.14em] text-[#4ade80] font-mono mt-1">
                  {m.role}
                </small>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="w-full max-w-3xl px-6 mb-16 text-left">
          <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[#7ab8e8]/70 font-mono">
            <span className="w-6 h-px bg-current" />
            § 05 — Nous rejoindre
          </span>

          <h2 className="text-3xl md:text-4xl font-light text-[#a8d5f7] leading-tight font-space-grotesk mt-6">
            Devenir <em className="italic text-[#4a9ede]">bénévole</em>, soutenir, ou simplement rester informé.
          </h2>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            Pas besoin d&apos;être plongeur pour participer. Le projet a besoin de cartographes, photographes, juristes, traducteurs, enseignants, et de tous les habitants attachés à la baie.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="mailto:philippe.ventos@club-internet.fr?subject=Grenier%20Marin%20%E2%80%94%20Contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#4a9ede] text-white font-medium hover:bg-[#a8d5f7] hover:text-[#0a0f1e] transition-colors"
            >
              Écrire à l&apos;association →
            </a>
            <Link
              href="/calendrier"
              className="inline-flex items-center px-6 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition-colors"
            >
              Voir le calendrier
            </Link>
          </div>
        </section>
      </main>
    </div>
    
  );
}