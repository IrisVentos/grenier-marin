import Image from "next/image";
import Link from "next/link";

const projet = [
  { href: "/menaces", label: "Les menaces" },
  { href: "/actions", label: "Nos actions" },
  { href: "/#equipe", label: "L'équipe" },
];

const participer = [
  { href: "/calendrier", label: "Calendrier" },
  {
    href: "mailto:philippe.ventos@club-internet.fr?subject=Grenier%20Marin%20%E2%80%94%20Contact",
    label: "Écrire à Grenier Marin",
    external: true,
  },
];

const ressources = [
  { href: "/references", label: "Références & sources" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#0a0f1e] text-slate-400 text-sm">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-10 md:gap-12 mb-12">
          <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Image src="/logo_alma.svg" alt="" width={40} height={40} aria-hidden />
              <span className="text-[#a8d5f7] font-bold tracking-wide font-space-grotesk">
                Grenier Marin
              </span>
            </div>
            <p className="leading-relaxed max-w-[36ch]">
              Sanctuaire de Posidonie en Méditerranée. Baie de Saint-Cyr-sur-Mer.
            </p>
          </div>

          <FooterColumn title="Le projet" links={projet} />
          <FooterColumn title="Participer" links={participer} />
          <FooterColumn title="Ressources" links={ressources} />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 pt-6 border-t border-white/5 font-mono text-[10px] tracking-[0.16em] uppercase text-slate-500">
          <span>© {new Date().getFullYear()} Grenier Marin · Saint-Cyr-sur-Mer</span>
          <span>43°10′N · 5°41′E</span>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, links }) {
  return (
    <div>
      <h5 className="font-mono text-[11px] tracking-[0.14em] uppercase text-[#a8d5f7] font-semibold mb-4">
        {title}
      </h5>
      <ul className="flex flex-col gap-2 list-none p-0 m-0">
        {links.map((l) => (
          <li key={l.href}>
            {l.external ? (
              <a
                href={l.href}
                className="hover:text-[#a8d5f7] transition-colors"
              >
                {l.label}
              </a>
            ) : (
              <Link href={l.href} className="hover:text-[#a8d5f7] transition-colors">
                {l.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
