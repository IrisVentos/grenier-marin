// app/actions/page.js

import Image from "next/image";
import BottomNav from "../components/BottomNav";

const actions = [
  {
    emoji: "",
    title: "Le cadre légal",
    color: "#f6ca46",
    tag: "Depuis 1988",
    content: (
      <>
        La posidonie est <strong>protégée en France depuis 1988</strong> : il est interdit de la détruire, 
        de la ramasser, de la vendre ou de l'utiliser, vivante ou morte. C'est pourquoi les communes 
        littorales laissent les banquettes de feuilles mortes se décomposer naturellement sur les plages : elles font partie de l'écosystème.
      </>
    ),
  },
  {
    emoji: "",
    title: "Mouiller responsable",
    color: "#4a9ede",
    tag: "Action immédiate",
    content: (
      <>
        La première règle est simple : <strong>ne jamais ancrer sur un herbier</strong>. Des zones 
        d'interdiction de mouillage (ZIM) existent, avec des sanctions renforcées depuis 2020. 
        <br /><br />
        Avant de mouiller, deux applications permettent de visualiser les fonds sensibles en temps réel:{" "}
        <a href="https://donia.fr/" target="_blank" rel="noopener noreferrer" className="text-[#4a9ede] underline font-semibold">Donia</a>{" "}
        et {" "}
        <a href="https://apps.apple.com/fr/app/nav-co/id1642742060" target="_blank" rel="noopener noreferrer" className="text-[#4a9ede] underline font-semibold">Nav& Co</a>{" "}.
        <br /><br />
        Quand l'ancrage est inévitable, on mouille sur le sable et on utilise un <strong>orin</strong> pour 
        récupérer l'ancre à la verticale. 
        <Image
                                src="/mouillage_responsable.png"  
                                alt="Mouillage responsable"
                                width={500}
                                height={500}
                                priority
                              />         
                    <p className="flex-col text-slate-300 leading-relaxed mb-6">
                      <em>Mouillage responsable. </em>  
                      </p>
        Mieux encore : recourir aux <strong>ZMEL</strong> ou aux coffres 
        publics, qui permettent de s'amarrer sans contact avec les fonds.
        <Image
                                src="/mouillage_eco.png"  
                                alt="Mouillage écologique"
                                width={500}
                                height={500}
                                priority
                              />         
                    <p className="flex-col text-slate-300 leading-relaxed mb-6">
                      <em>Mouillage écologique avec ZMEL. </em>  
                      </p>

      </>
    ),
  },
  {
    emoji: "",
    title: "Restaurer les herbiers",
    color: "#4ade80",
    tag: "Long terme",
    content: (
      <>
        Là où les dégâts sont avérés, deux techniques de repeuplement existent : le <strong>bouturage</strong> et 
        la <strong>transplantation de fragments</strong>. Ces programmes, portés notamment par{" "}
        <strong>Andromède Océanologie</strong>, sont longs et minutieux — un rappel que la prévention 
        reste infiniment préférable à la restauration.
      </>
    ),
  },
  {
    emoji: "",
    title: "Éduquer et sensibiliser",
    color: "#f59e0b",
    tag: "Transmission",
    content: (
      <>
        Protéger la posidonie passe aussi par la <strong>transmission</strong>. Cela peut prendre la forme 
        de projets pédagogiques dans les écoles, de <strong>parcours de snorkeling balisés</strong> pour 
        découvrir l'herbier sans le piétiner, ou de partenariats avec des associations et laboratoires 
        marins pour ancrer la recherche localement.
      </>
    ),
  },
  {
    emoji: "",
    title: "Agir contre la pollution",
    color: "#4ade80",
    tag: "Chaque geste compte",
    content: (
      <>
        La dépollution commence à terre : <strong>80 % de la pollution marine est d'origine terrestre</strong>.
        <Image
                                src="/multi_pollution.png"  
                                alt="Pollution terrestre"
                                width={500}
                                height={500}
                                priority
                              />         
                    <p className="flex-col text-slate-300 leading-relaxed mb-6">
                      <em>Pollution marine venue des terres. </em>  
                      </p> 
        Collectes littorales avec tri sélectif, actions sur les bassins versants, mobilisation citoyenne via{" "}
        <strong>Surfrider Foundation</strong> — chaque geste compte. Signaler une dégradation d'herbier 
        reste aussi un acte concret, via l'<strong>Office Français de la Biodiversité (OFB)</strong>.
      </>
    ),
  },
];

export default function ActionsPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-[#0a0f1e] font-sans text-white min-h-screen">
      <main className="flex flex-1 w-full flex-col items-center py-24 px-6 max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex items-center gap-8 mb-6 w-full">
          <Image
            src="/logo_alma.png"
            alt="Logo"
            width={200}
            height={500}
            priority
          />
          <div className="flex flex-col items-start gap-2 text-left">
            <h1 className="text-4xl font-bold leading-10 tracking-tight text-[#a8d5f7] font-space-grotesk">
              Grenier Marin
            </h1>
            <h2 className="text-3xl font-bold leading-10 tracking-tight text-[#4a9ede] font-space-grotesk">
              Comment protéger la Posidonie ?
            </h2>
          </div>
        </div>
        <br></br>
        <br></br>

        {/* Intro banner */}
        <div className="w-full rounded-2xl bg-gradient-to-r from-[#4a9ede]/20 to-[#4ade80]/10 border border-[#4a9ede]/30 p-8 mb-16 text-center">
          <p className="text-xl text-white font-medium leading-relaxed">
            La posidonie est en danger — mais elle peut être sauvée.<br />
            <span className="text-[#4ade80]">Voici ce que chacun peut faire, dès aujourd'hui.</span>
          </p>
        </div>

        {/* App highlight */}
        <div className="w-full flex items-center gap-6 bg-white/5 border border-[#4a9ede]/30 rounded-xl p-6 mb-16">
          <span className="text-5xl">📱</span>
          <div>
            <p className="text-[#4a9ede] font-bold text-lg mb-1">Téléchargez l'application Donia</p>
            <p className="text-slate-300 text-sm leading-relaxed">
              Avant de jeter l'ancre, vérifiez les fonds en temps réel. 
              <br></br> Donia vous indique en quelques 
              secondes si vous êtes au-dessus d'un herbier protégé et où mouiller en toute sécurité.
            </p>
          </div>
        </div>

        {/* Action cards */}
        <div className="w-full flex flex-col gap-8 mb-16">
          {actions.map((action, i) => (
            <div
              key={i}
              className="w-full rounded-xl bg-white/5 border border-white/10 p-8 flex flex-col gap-4"
              style={{ borderLeftColor: action.color, borderLeftWidth: '4px' }}
            >
              <div className="flex items-center gap-4">
                <span className="text-3xl">{action.emoji}</span>
                <div className="flex flex-col">
                  <h3 className="text-xl font-bold text-[#a8d5f7]">{action.title}</h3>
                  <span
                    className="text-xs uppercase tracking-widest font-semibold mt-1"
                    style={{ color: action.color }}
                  >
                    {action.tag}
                  </span>
                </div>
              </div>
              <p className="text-slate-300 leading-relaxed">{action.content}
              </p>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="w-full bg-gradient-to-r from-[#4ade80]/10 to-[#4a9ede]/10 border border-[#4ade80]/30 rounded-2xl p-10 text-center">
          <h3 className="text-2xl font-bold text-[#4a9ede] mb-4">Ensemble, on peut changer les choses. </h3>
          <p className="text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Rejoignez nos actions de terrain, participez à une collecte, ou partagez simplement 
            cette page autour de vous. Chaque geste compte pour les herbiers de demain.
          </p>
          <BottomNav
            primary={{ href: "/calendrier", label: "Voir le calendrier des actions" }}
            secondary={{ href: "/", label: "Retour à l'accueil" }}
          />
        </div>

      </main>
    </div>
  );
}