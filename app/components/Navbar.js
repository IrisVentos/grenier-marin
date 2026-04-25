import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 border-b border-white/10">
      {/* Logo */}
      <span className="font-bold text-lg">Projet Grenier Marin</span>

      {/* Links */}
      <div className="flex gap-8">
        <Link href="/">Accueil</Link>          
        <Link href="/menaces">Menaces</Link>
        <Link href="/actions">Actions</Link>
        <Link href="/calendrier">Calendrier</Link>
        <Link href="/references">Références</Link>
      </div>
    </nav>
  );
}