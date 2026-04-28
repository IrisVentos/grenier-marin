// Welcome page

import Image from "next/image";
import Link from "next/link";

// span balise texte , avec css dans class name
export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-[#0a0f1e] font-sans">
      <main className="flex flex-1 w-full flex-col items-center justify-between py-32 px-0 bg-[#0a0f1e] text-center font-space-grotesk">
{/* Container for logo and text side by side */}
        <div className="flex items-center gap-8">
          <Image
            src="/logo_alma.png"  
            alt="Posidonie"
            width={200}
            height={500}
            priority
          />
          
          <div className="flex flex-col items-start gap-2 text-left">
            <h1 className="text-4xl font-bold leading-10 tracking-tight text-[#a8d5f7] font-space-grotesk">
              Grenier Marin 
            </h1>
            <h1 className="text-3xl font-bold leading-10 tracking-tight text-[#4a9ede] font-space-grotesk">
              Sanctuaire de Posidonie en Méditerranée 
            </h1>
          </div>
        </div>

          <br></br>
          <br></br>
          <br></br>

          <div className="max-w-3xl space-y-6 text-lg leading-relaxed text-slate-300">
            <p className="text-xl text-white font-medium">
              Notre but?
              <br></br>
              Créer une zone de 200 hectares d'herbier protégé entre la Madrague et la Pointe Fauconnière.
            </p>
            
            <p>
              La Posidonie est le <span className="text-[#4a9ede] font-semibold">poumon de la Méditerranée</span>, 
              abritant 25% des espèces marines. 
              <br></br>
              Elle lutte contre l'érosion des côtes, produit de l'oxygène et capture le CO2.
              <br></br>
              Mais cette belle plante est victime des activités humaines : arrachée par les ancres, polluée et affaiblie par le réchauffement climatique et le surtourisme. 
            </p>
            <br></br>

            <div className="bg-white/5 rounded-lg p-6 mt-8 text-center">
              <h2 className="text-2xl font-bold text-[#4a9ede] mb-4">Nos propositions pour la protéger</h2>
              <ul className="text-left space-y-3 max-w-2xl mx-auto">
                <li> <span className="font-medium">Mouillage responsable</span> - Interdiction d'ancrage sur les herbiers (Zone ZMEL)</li>
                <li> <span className="font-medium">Éducation</span> - Sensibilisation dans les écoles de Saint-Cyr</li>
                <li> <span className="font-medium">Découverte</span> - Chemin de snorkeling balisé</li>
                <li> <span className="font-medium">Dépollution</span> - Collectes  de déchets littorales organisées</li>
                <li> <span className="font-medium">Recherche</span> - Accueil d'associations marines (Miraceti)</li>
              </ul>
            </div>

          <div className=" rounded-lg p-6 mt-8 text-lg leading-8 text-slate-300 text-center">
            Tu t'intéresses aux fonds marins et aux animaux qui y habitent? 
            <br></br>
            Viens nous aider à protéger les herbiers de posidonie! <br></br>
            Pour en savoir plus, tu peux aller lire nos recherches sur les {" "}
            <Link
              href="/menaces"
              className="font-medium text-white underline"
            >
              Menaces
            </Link>{" "}
            qui guettent la posidonie ou t'engager sur des {" "}
            <Link
              href="/calendrier"
              className="font-medium text-white underline"
            >
              Actions citoyennes
            </Link>{" "}
            .
          </div>
          <Image
            src="/maps.png"  
            alt="Maps"
            width={1500}
            height={300}
            priority
        />
          <br></br>
          <p className="font-medium text-white max-w-2xl text-lg leading-8">
            Contacts :
          </p>
          <ul className="max-w-2xl text-lg leading-8 text-slate-300 list-disc list-inside space-y-2">
            <li>Porteur du projet : Philippe Ventos — philippe.ventos@club-internet.fr </li>
            <li>Conseil en biodiversité marine : Iris Ventos</li>
            <li>Photographe plongeur : Philippe Cortes</li>
            <li>Communication et aide au projet : Delphine Rousseau-Ventos</li>
            <li>Graphisme & design : Alma Ventos</li>
          </ul>
          
          <br></br>
          <br></br>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <Link
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#4a9ede] px-5 text-white transition-colors hover:border-transparent hover:bg-white/10 md:w-[158px]"
            href="/calendrier"
          >
            Calendrier
          </Link>
          <Link
            className="flex h-12 w-full items-center justify-center rounded-full px-5 bg-[#4a9ede] text-white transition-colors hover:border-transparent hover:bg-white/10 md:w-[158px]"
            href="/references"
          >
            Références
          </Link>
        </div>
      </main>
      <Image
          src="/logo_alma.png"  
          alt="logo"
          width={200}
          height={500}
          priority
        />
        <br></br>
        <br></br>
        <br></br>
        <p className="text-l text-[#808080] font-medium">
              Saint-Cyr sur Mer - 83270
            </p>
    </div>
    
  );
}