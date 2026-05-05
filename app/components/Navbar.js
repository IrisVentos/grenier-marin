"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/menaces", label: "Menaces" },
  { href: "/actions", label: "Actions" },
  { href: "/calendrier", label: "Calendrier" },
  { href: "/references", label: "Références" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-8 py-4 border-b border-white/10 bg-[#0a0f1e]/90 backdrop-blur-md">
        <Link href="/" className="font-bold text-base sm:text-lg tracking-tight">
          Projet Grenier Marin
        </Link>

        <div className="hidden md:flex gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative py-1 transition-colors hover:text-[#a8d5f7] ${
                isActive(l.href) ? "text-[#4a9ede]" : "text-white"
              }`}
            >
              {l.label}
              {isActive(l.href) && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#4a9ede] rounded-full" />
              )}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 rounded-lg hover:bg-white/5 transition-colors"
        >
          <span
            className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded-full transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white rounded-full transition-all duration-300 ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      <aside
        className={`md:hidden fixed top-0 right-0 h-full w-72 max-w-[85vw] bg-[#0a0f1e] border-l border-white/10 z-40 shadow-2xl transform transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <nav className="flex flex-col gap-1 pt-24 px-4">
          {links.map((l) => {
            const active = isActive(l.href);
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 text-lg font-medium py-3 px-4 rounded-xl transition-colors ${
                  active
                    ? "bg-[#4a9ede]/15 text-[#a8d5f7]"
                    : "text-white hover:bg-white/5"
                }`}
              >
                <span
                  className={`w-1 h-6 rounded-full transition-colors ${
                    active ? "bg-[#4a9ede]" : "bg-transparent"
                  }`}
                />
                {l.label}
              </Link>
            );
          })}
        </nav>
      </aside>
    </>
  );
}
