//  app/menaces/page.js
 
import Image from "next/image";
import Link from "next/link";
 
export default function Menaces() {
  return (
    <div className="flex flex-col flex-1 items-center bg-[#0a0f1e] font-sans text-white">
      <main className="flex flex-1 w-full flex-col items-center py-24 px-6 max-w-5xl mx-auto">
 
        {/* Header: logo + title */}
        <div className="flex items-center gap-8 mb-16 w-full">
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
            <h2 className="text-3xl font-bold leading-10 tracking-tight text-[#4a9ede] font-space-grotesk">
              Les menaces qui pèsent sur la Posidonie et les conséquences
            </h2>
          </div>
        </div>
 
        {/* Key figures */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-2 text-left">
            <span className="text-4xl font-bold text-[#4a9ede]">100M</span>
            <span className="text-xs uppercase tracking-widest text-slate-400 font-medium">d'années</span>
            <p className="text-sm text-slate-300 leading-relaxed mt-1">
              La posidonie est apparue il y a 100 millions d'années.
            </p>
          </div>
 
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-2 text-left">
            <span className="text-4xl font-bold text-[#e05a5a]">−34%</span>
            <span className="text-xs uppercase tracking-widest text-slate-400 font-medium">en 50 ans</span>
            <p className="text-sm text-slate-300 leading-relaxed mt-1">
              Les herbiers méditerranéens ont perdu 34 % de leur surface, notamment à cause des ancres.
            </p>
          </div>
 
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-2 text-left">
            <span className="text-4xl font-bold text-[#e05a5a]">×100</span>
            <span className="text-xs uppercase tracking-widest text-slate-400 font-medium">trop vite</span>
            <p className="text-sm text-slate-300 leading-relaxed mt-1">
              La posidonie décline 100 fois plus vite qu'elle ne se forme.
            </p>
          </div>
 
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 flex flex-col gap-2 text-left">
            <span className="text-4xl font-bold text-[#4a9ede]">86 000€</span>
            <span className="text-xs uppercase tracking-widest text-slate-400 font-medium">/ hectare / an</span>
            <p className="text-sm text-slate-300 leading-relaxed mt-1">
              La valeur écosystémique estimée d'un hectare d'herbier en services rendus à la nature.
            </p>
          </div>
 
        </div>
 
        {/* Intro */}
        <div className="w-full mb-16 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-[#a8d5f7] mb-4">Les Posidonies en Danger</h3>
          <p className="text-lg text-slate-300 leading-relaxed italic">
            La posidonie a survécu 100 millions d'années. Elle pourrait ne pas survivre à l'homme.
          </p>
        </div>
 
        {/* Section 1 */}
        <div className="w-full mb-16 border-l-4 border-[#4a9ede] pl-8">
          <h3 className="text-xl font-bold text-[#a8d5f7] mb-4">🏗️ L'urbanisation étouffe les herbiers</h3>
          <p className="text-slate-300 leading-relaxed">
            Ports, digues, rechargements de plage, retrait des banquettes : les aménagements côtiers augmentent 
            la turbidité de l'eau et privent les posidonies de lumière, indispensable à leur photosynthèse. 
            Sans lumière, l'herbier régresse — et avec lui, toute la vie qui en dépend. Et en l'occurrence, 
            les services que l'herbier rend aux côtes sont inestimables : air plus pur, moins étouffant, 
            littoraux protégés des tempêtes...
          </p>
        </div>
 
        {/* Section 2 */}
        <div className="w-full mb-16 border-l-4 border-[#e05a5a] pl-8">
          <h3 className="text-xl font-bold text-[#a8d5f7] mb-4">⚓ La plaisance, première menace directe</h3>
          <p className="text-slate-300 leading-relaxed mb-6">
            1 000 à 1 500 hectares détruits chaque année en France par les ancres et mouillages. 
            Une ancre détruit plusieurs m² en quelques secondes. La repousse ? 10 à 15 ans. 
            La fréquentation des côtes augmente de 3 à 5 % par an depuis le COVID : le compte est alarmant.
          </p>
          {/* Image placeholders */}
          <div className="flex-col flex gap-4 flex-wrap">
            <Image
                        src="/posidonie_map.jpg"  
                        alt="Localisation herbiers"
                        width={500}
                        height={500}
                        priority
                      />         
            <p className="flex-col text-slate-300 leading-relaxed mb-6">
              <em>Localisation des principaux herbiers sur la zone. Source : Donia. </em>  
              </p>        
            <Image
                        src="/posidonie_arrachée.png"  
                        alt="Ancre posidonie"
                        width={500}
                        height={500}
                        priority
                      />        
            <p className="flex-col text-slate-300 leading-relaxed mb-6">
              <em>Herbier déraciné par un bateau de plaisance.  </em>  
              </p>           
          </div>
        </div>
 
        {/* Section 3 */}
        <div className="w-full mb-16 border-l-4 border-[#4a9ede] pl-8">
          <h3 className="text-xl font-bold text-[#a8d5f7] mb-4">🧪 Des pollutions de toutes origines</h3>
          <p className="text-slate-300 leading-relaxed mb-6">
            500 tonnes de microplastiques flottent en Méditerranée. 80 % de la pollution marine vient de la terre : 
            pesticides, engrais, crèmes solaires (parabènes). Les herbiers filtrent tout... jusqu'à saturation.
          </p>
          <div className="flex-col flex gap-4 flex-wrap">
            <Image
                        src="/posidonie_pollution.png"  
                        alt="Pollution plastique"
                        width={500}
                        height={500}
                        priority
                      />
            <p className="flex-col text-slate-300 leading-relaxed mb-6">
              <em>Les micro, mais aussi les macroplastiques.  </em>  
              </p>          
          </div>
        </div>
 
        {/* Section 4 */}
        <div className="w-full mb-16 border-l-4 border-[#e05a5a] pl-8">
          <h3 className="text-xl font-bold text-[#a8d5f7] mb-4">🌡️ Le changement climatique et les algues invasives</h3>
          <p className="text-slate-300 leading-relaxed">
            Réchauffement, acidification des océans, modification de la salinité : la posidonie, plante sensible 
            car proche de la surface, perd ses conditions de vie idéales. Deux algues tropicales introduites 
            accidentellement (<em>Caulerpa taxifolia</em> et <em>Caulerpa racemosa</em>) colonisent et suffoquent 
            les herbiers à une vitesse qu'ils ne peuvent pas suivre.
          </p>
        </div>
 
        {/* Conclusion */}
        <div className="w-full bg-white/5 border border-[#e05a5a]/40 rounded-xl p-8 text-center max-w-3xl mx-auto">
          <p className="text-lg text-slate-200 leading-relaxed font-medium">
            Résultat : une <span className="text-[#e05a5a] font-bold">fragilisation cumulative</span>. 
            Le constat est fait. Les actions doivent suivre.
          </p>
        </div>
 
      </main>
    </div>
  );
}