import Image from "next/image";

export default function PageHeader({ subtitle, className = "flex items-center gap-8 mb-16 w-full" }) {
  return (
    <div className={className}>
      <Image
        src="/logo_alma.svg"
        alt="Logo Grenier Marin"
        width={200}
        height={200}
        priority
      />
      <div className="flex flex-col items-start gap-2 text-left">
        <h1 className="text-4xl font-bold leading-10 tracking-tight text-[#a8d5f7] font-space-grotesk">
          Grenier Marin
        </h1>
        <h2 className="text-3xl font-bold leading-10 tracking-tight text-[#4a9ede] font-space-grotesk">
          {subtitle}
        </h2>
      </div>
    </div>
  );
}
