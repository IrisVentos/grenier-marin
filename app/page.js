// Welcome page

import Image from "next/image";
import Link from "next/link";
import PageHeader from "./components/PageHeader";
import InteractiveMap from "./components/InteractiveMap";

// span balise texte , avec css dans class name
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center font-sans relative">
      <div aria-hidden className="sunrays" />
      <div aria-hidden className="caustics" />
      <main className="relative z-10 flex flex-1 w-full flex-col items-center pt-16 pb-0 px-0 text-center font-space-grotesk">
        <PageHeader
          subtitle="Sanctuaire de Posidonie en Méditerranée"
          className="flex items-center gap-8"
        />

        {/* § 01 — Mission */}
        <section className="w-full max-w-3xl px-6 mt-12 mb-12 text-left">
          <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[#7ab8e8]/70 font-space-grotesk">
            <span className="w-6 h-px bg-current" />
            Notre mission
          </span>
          <h2 className="mt-8 text-3xl md:text-4xl font-medium text-white leading-[1.15] font-space-grotesk">
            Créer une zone de{" "}
            <em className="not-italic text-[#8cc6f3] font-medium">200 hectares</em>{" "}
            d&apos;herbier protégé sur la côte varoise, entre la Madrague et la Pointe Fauconnière.
          </h2>
        </section>

        {/* § 02 — La posidonie */}
        <section className="w-full max-w-3xl px-6 mb-12 text-left">
          <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[#7ab8e8]/70 font-space-grotesk">
            <span className="w-6 h-px bg-current" />
            Chapitre 1 — Présentation
          </span>

          <p className="mt-8 text-lg leading-relaxed text-slate-300">
            La Posidonie est le{" "}
            <span className="text-[#8cc6f3] font-semibold">poumon de la Méditerranée</span>,
            abritant <span className="text-[#8cc6f3] font-semibold">25% </span> des espèces marines.
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
          <figcaption className="mt-4 font-space-grotesk text-[10px] uppercase tracking-[0.16em] text-slate-500 text-center">
            Localisation de la zone d'herbier
          </figcaption>
        </figure>

        {/* § 03 — Propositions */}
        <section className="w-full max-w-3xl px-6 mb-12 text-left">
          <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[#7ab8e8]/70 font-space-grotesk">
            <span className="w-6 h-px bg-current" />
            Chapitre 2 — Leviers d'action
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl font-medium text-[#a8d5f7] leading-tight font-space-grotesk">
            Nos propositions pour la protéger
          </h2>

          <ul className="mt-10 flex flex-col gap-4 list-none p-0">
            {[
              { title: "Mouillage responsable", desc: "Sur sable, ou avec orin. Développement d'une Zone de Mouillages et d'Equipements Légers (ZMEL) ou de ZIM (Interdiction totale d'ancrage)", color: "#81c3f5" },
              { title: "Éducation", desc: "Sensibilisation des jeunes publics dans les écoles de Saint-Cyr-sur-Mer, pédagogie et apprentissage des milieux marins locaux", color: "#81c3f5" },
              { title: "Découverte", desc: "Chemin de snorkeling balisé, pour promouvoir le tourisme écologique et protéger le reste de la zone", color: "#81c3f5" },
              { title: "Dépollution", desc: "Collectes de déchets littorales organisées, d'hiver comme d'été", color: "#81c3f5" },
              { title: "Recherche", desc: "Accueil d'associations engagées pour la préservation de la vie marine", color: "#81c3f5" },
            ].map((p, i) => (
              <li
                key={p.title}
                className="border border-white/10 p-6 flex flex-col gap-3"
                style={{ borderLeft: `2px solid ${p.color}` }}
              >
                <span
                  className="font-space-grotesk text-[10px] uppercase tracking-[0.16em] font-medium"
                  style={{ color: p.color }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-medium text-[#edf0f3] leading-snug">{p.title}</h3>
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
              className="text-[#8cc6f3] underline decoration-1 underline-offset-4 hover:text-[#a8d5f7] transition-colors"
            >
              Menaces
            </Link>{" "}
            qui guettent la posidonie ou t&apos;engager sur des{" "}
            <Link
              href="/calendrier"
              className="text-[#8cc6f3] underline decoration-1 underline-offset-4 hover:text-[#a8d5f7] transition-colors"
            >
              Actions citoyennes
            </Link>
            .
          </p>
        </section>

        {/* Carte 02 — interactive */}
        <figure className="w-full max-w-3xl px-6 mb-12 m-0">
          <InteractiveMap
            center={[43.163, 5.685]}
            zoom={15}
            polygon={[
              [43.166, 5.6909],
              [43.165, 5.6917],
              [43.1648, 5.6908],
              [43.1635, 5.6898],
              [43.1628, 5.6869],
              [43.1608, 5.6825],
              [43.1616, 5.6819],
              [43.1636, 5.6861],
              [43.1645, 5.6852],
            ]}
            polygonPopup="<strong>Sanctuaire</strong><br/>~200 hectares"
            markers={[
              { coords: [43.1606, 5.6825], label: "Pointe Grenier", direction: "left" },
              { coords: [43.167, 5.6952], label: "La Madrague", direction: "right" },
            ]}
            ariaLabel="Périmètre du sanctuaire entre Pointe Grenier et La Madrague"
          />
          <figcaption className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500 text-center">
            Périmètre du sanctuaire (Surface ~200 ha)
          </figcaption>
        </figure>

        <section id="equipe" className="w-full max-w-3xl px-6 mb-12 text-left">
  <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[#7ab8e8]/70 font-mono">
    <span className="w-6 h-px bg-current" />
    Chapitre 3 — L&apos;équipe
  </span>

  <h2 className="text-3xl md:text-4xl font-medium text-[#a8d5f7] leading-tight font-space-grotesk mt-6">
    Celles et ceux qui portent le projet.
  </h2>

  <ul className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-10 list-none p-0">
    {[
      { name: "Philippe Ventos",          role: "Porteur du projet",          image: "/philippe-ventos.jpg" },
      { name: "Iris Ventos",              role: "Conseil biodiversité marine", image: "/iris-ventos.jpg" },
      { name: "Philippe Cortes",          role: "Photographe plongeur",        image: "/philippe-cortes.jpg" },
      { name: "Delphine Rousseau-Ventos", role: "Communication",               image: "/delphine-rousseau-ventos.jpg" },
      { name: "Alma Ventos",              role: "Graphisme & design",          image: "/alma-ventos.jpeg" },
    ].map((m) => (
      <li key={m.name} className="flex flex-col">
        <div className="aspect-[4/5] mb-3 border border-white/15 overflow-hidden">
          <img
            src={m.image}
            alt={m.name}
            className="w-full h-full object-cover object-top"
          />
        </div>
        <h4 className="text-base font-medium text-[#a8d5f7] leading-snug">{m.name}</h4>
        <small className="block text-[10px] uppercase tracking-[0.14em] text-[#4ade80] font-space-grotesk mt-1">
          {m.role}
        </small>
      </li>
    ))}
  </ul>
</section>

        <section id="contact" className="w-full max-w-3xl px-6 mb-16 text-left">
          <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[#7ab8e8]/70 font-mono">
            <span className="w-6 h-px bg-current" />
            Chapitre 4 — Nous rejoindre
          </span>

          <h2 className="text-3xl md:text-4xl font-medium text-[#a8d5f7] leading-tight font-space-grotesk mt-6">
            Soutenir, ou simplement rester informé.
          </h2>
          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            Pas besoin d&apos;être plongeur ou plaisancier pour participer. Le projet a besoin de locaux enthousiastes, membres d'institutions publiques, photographes, enseignants, et passionnés de la mer.
          </p>
          <div className="flex flex-wrap gap-3 mt-8">
            <a
              href="mailto:philippe.ventos@club-internet.fr?subject=Grenier%20Marin%20%E2%80%94%20Contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#8cc6f3] text-white font-medium hover:bg-[#a8d5f7] hover:text-[#0a0f1e] transition-colors"
            >
              Écrire à Grenier Marin →
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