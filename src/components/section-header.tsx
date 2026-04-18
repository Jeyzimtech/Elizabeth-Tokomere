import type { ReactNode } from "react";

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-accent">
          <span className="h-px w-8 bg-accent" /> {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl text-foreground sm:text-4xl md:text-5xl">{title}</h2>
      {intro && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
          {intro}
        </p>
      )}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
}) {
  return (
    <section className="bg-gradient-warm">
      <div className="mx-auto max-w-7xl px-5 pb-16 pt-20 md:px-8 md:pb-24 md:pt-28">
        <p className="mb-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-accent">
          <span className="h-px w-8 bg-accent" /> {eyebrow}
        </p>
        <h1 className="font-display text-3xl leading-[1.1] text-foreground text-balance xs:text-4xl sm:text-5xl md:text-6xl md:leading-[1.05]">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">{intro}</p>
        )}
      </div>
    </section>
  );
}
