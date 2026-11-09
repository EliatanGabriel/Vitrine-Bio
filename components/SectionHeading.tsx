import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ eyebrow, title, description, align = "center" }: SectionHeadingProps) {
  const isCenter = align === "center";
  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Reveal>
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-300">
          <span className="h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={160}>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{description}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
