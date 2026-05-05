import Link from "next/link";

export default function BottomNav({
  primary,
  secondary,
  className = "flex gap-4 justify-center flex-wrap",
}) {
  return (
    <div className={className}>
      <Link
        href={primary.href}
        className="px-8 py-3 rounded-full bg-[#4a9ede] text-white font-semibold hover:bg-[#4a9ede]/80 transition-colors"
      >
        {primary.label}
      </Link>
      <Link
        href={secondary.href}
        className="px-8 py-3 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
      >
        {secondary.label}
      </Link>
    </div>
  );
}
