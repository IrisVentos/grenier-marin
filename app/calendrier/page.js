// app/calendrier/page.js

import Image from "next/image";
import Link from "next/link";

const upcomingEvents = [
  // --- SENSIBILISATION ---
  {
    category: "Sensibilisation",
    categoryColor: "#4a9ede",
    emoji: "",
    date: "9 mai 2026",
    title: "Conférence sur la Posidonie",
    description: "Conférence menée par Philippe et Iris sur la Posidonie, pour l'association RPT (Rassemblement pour la Transition Écologique et Solidaire).",
    link: "https://www.saintcyrsurmer.fr/vie-associative/annuaire-des-associations-1083/rassemblement-pour-la-transition-ecologique-et-solidaire-rpt-4000.html?cHash=afe7c5afdf0ab9f7e84e5a534038c7a3",
    linkLabel: "En savoir plus sur le RPT",
    status: "confirmed", 
  },
  {
    category: "Sensibilisation",
    categoryColor: "#4a9ede",
    emoji: "",
    date: "2026",
    title: "RDV avec le Conservatoire du Littoral",
    description: "Rencontre à planifier avec le Conservatoire du Littoral pour discussion sur la protection des herbiers.",
    link: null,
    status: "pending",
  },
  {
    category: "Sensibilisation",
    categoryColor: "#4a9ede",
    emoji: "",
    date: "2026",
    title: "Partenariat avec Azur Plongée",
    description: "Appui discuté avec le club de plongée Azur Plongée pour sensibilisation des plongeurs locaux.",
    link: null,
    status: "pending",
  },
  // --- NETTOYAGE ---
  {
    category: "Campagne nettoyage",
    categoryColor: "#4ade80",
    emoji: "",
    date: "2026",
    title: "Collecte littorale avec Surfrider Foundation",
    description: "Organisation d'une campagne de nettoyage du littoral en partenariat avec Surfrider Foundation.",
    link: null,
    status: "tbd",
  },
  // --- ÉDUCATION ---
  {
    category: "Écoles & Éducation",
    categoryColor: "#f59e0b",
    emoji: "",
    date: "2026",
    title: "Projets pédagogiques",
    description: "Actions de sensibilisation dans les écoles de Saint-Cyr-sur-Mer. Détails à venir.",
    link: null,
    status: "tbd",
  },
];

const stateOfPlay = [
  {
    emoji: "",
    title: "Vidéo sous-marine de la zone",
    description: "Exploration filmée des herbiers de la zone Grenier Marin.",
    link: null, // replace with actual URL when available
    linkLabel: "Voir la vidéo",
  },
];

const pastEvents = [
  {
    date: "15 oct. 2025",
    emoji: "",
    title: "Réunion à la mairie",
    description: "Réunion tenue à la mairie avec Arthur et Valentin Gauthier (garde du parc Natura 2000).",
  },
  {
    date: "22 oct. 2025 & 10 fév. 2026",
    emoji: "",
    title: "Rencontres liste Y. Maubé",
    description: "Contact à entretenir avec Dominique Hocquet, adjoint en charge des ports et du littoral.",
  },
  {
    date: "24 oct. 2025 & 2 mars 2026",
    emoji: "",
    title: "Rencontres liste Luciano",
    description: "Contact à entretenir avec Alain, responsable nautisme à la mairie.",
  },
  {
    date: "2026",
    emoji: "",
    title: "Discussion avec Luciano Oddone (liste Mme Sama)",
    description: "Échanges autour d'une ferme aquacole, d'une maison de la mer et d'un projet de nurserie à poissons — pas de meilleure nurserie que l'herbier !",
  },
];

// ============================================================

const statusBadge = (status) => {
  if (status === "confirmed") return { label: "Confirmé", color: "#4ade80", bg: "rgba(74,222,128,0.1)" };
  if (status === "pending")   return { label: "À fixer",  color: "#f59e0b", bg: "rgba(245,158,11,0.1)" };
  return                             { label: "À venir",  color: "#94a3b8", bg: "rgba(148,163,184,0.1)" };
};

export default function CalendrierPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-[#0a0f1e] font-sans text-white min-h-screen">
      <main className="flex flex-1 w-full flex-col items-center py-24 px-6 max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-8 mb-16 w-full">
          <Image src="/logo_alma.png" alt="Logo" width={200} height={500} priority />
          <div className="flex flex-col items-start gap-2 text-left">
            <h1 className="text-4xl font-bold leading-10 tracking-tight text-[#a8d5f7] font-space-grotesk">Grenier Marin</h1>
            <h2 className="text-3xl font-bold text-[#4a9ede] font-space-grotesk">Calendrier des actions</h2>
          </div>
        </div>

        {/* ── UPCOMING EVENTS ── */}
        <section className="w-full mb-20">
          <h3 className="text-2xl font-bold text-[#4ade80] mb-8 flex items-center gap-3">
            <span>🗓️</span> Actions à venir
          </h3>

          <div className="flex flex-col gap-4">
            {upcomingEvents.map((event, i) => {
              const badge = statusBadge(event.status);
              return (
                <div key={i} className="w-full rounded-xl bg-white/5 border border-white/10 p-6 flex flex-col gap-3"
                  style={{ borderLeftColor: event.categoryColor, borderLeftWidth: "4px" }}>

                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{event.emoji}</span>
                      <div>
                        <span className="text-xs uppercase tracking-widest font-semibold"
                          style={{ color: event.categoryColor }}>{event.category}</span>
                        <h4 className="text-lg font-bold text-white">{event.title}</h4>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="text-sm font-medium text-slate-400">{event.date}</span>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full"
                        style={{ color: badge.color, background: badge.bg }}>{badge.label}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 leading-relaxed text-sm">{event.description}</p>

                  {event.link && (
                    <a href={event.link} target="_blank" rel="noopener noreferrer"
                      className="text-sm font-semibold underline"
                      style={{ color: event.categoryColor }}>
                      {event.linkLabel} →
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* ── STATE OF PLAY ── */}
        <section className="w-full mb-20">
          <h3 className="text-2xl font-bold text-[#4a9ede] mb-8 flex items-center gap-3">
            <span>🔍</span> État des lieux
          </h3>
          <div className="flex flex-col gap-4">
            {stateOfPlay.map((item, i) => (
              <div key={i} className="w-full rounded-xl bg-white/5 border border-[#4a9ede]/30 p-6 flex items-center gap-4">
                <span className="text-3xl">{item.emoji}</span>
                <div className="flex flex-col gap-1">
                  <h4 className="text-lg font-bold text-white">{item.title}</h4>
                  <p className="text-slate-300 text-sm">{item.description}</p>
                  {item.link ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer"
                      className="text-[#4a9ede] underline font-semibold text-sm">{item.linkLabel} →</a>
                  ) : (
                    <span className="text-slate-500 text-sm italic">Lien à venir</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── PAST EVENTS ── */}
        <section className="w-full mb-16">
          <h3 className="text-2xl font-bold text-slate-400 mb-8 flex items-center gap-3">
            <span>✅</span> Actions passées
          </h3>
          <div className="flex flex-col gap-4">
            {pastEvents.map((event, i) => (
              <div key={i} className="w-full rounded-xl bg-white/3 border border-white/5 p-6 flex gap-4 opacity-80">
                <span className="text-2xl flex-shrink-0">{event.emoji}</span>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h4 className="text-base font-bold text-slate-300">{event.title}</h4>
                    <span className="text-xs text-slate-500 font-medium">{event.date}</span>
                  </div>
                  <p className="text-slate-400 leading-relaxed text-sm">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom nav */}
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="/actions"
            className="px-8 py-3 rounded-full bg-[#4a9ede] text-white font-semibold hover:bg-[#4a9ede]/80 transition-colors">
            Nos actions
          </Link>
          <Link href="/"
            className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors">
            Retour à l'accueil
          </Link>
        </div>

      </main>
    </div>
  );
}