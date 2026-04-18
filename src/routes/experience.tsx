import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/section-header";
import { Briefcase, GraduationCap, BookOpen } from "lucide-react";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Elizabeth Tokomere" },
      {
        name: "description",
        content:
          "Professional experience and education of Elizabeth Tokomere — Founder of REFO and former intern at Sweet Valley Club.",
      },
      { property: "og:title", content: "Experience & Education" },
      {
        property: "og:description",
        content: "Founder of REFO, BSW graduate, child protection practitioner.",
      },
    ],
  }),
  component: ExperiencePage,
});

const items = [
  {
    icon: Briefcase,
    period: "2022 – Present",
    title: "Founder & Social Work Practitioner",
    org: "Rescue Foundation Trust (REFO) — NGO",
    bullets: [
      "Founded and currently manage a community-based organisation supporting the welfare of women and children.",
      "Provide basic counseling and psychosocial support to vulnerable clients.",
      "Conduct community awareness sessions on child protection and women’s welfare.",
      "Maintain case records and documentation of activities.",
      "Facilitate referrals to relevant health and social services when needed.",
    ],
  },
  {
    icon: Briefcase,
    period: "2022 – 2023",
    title: "Social Work Intern",
    org: "Sweet Valley Club",
    bullets: [
      "Assisted in child welfare and development activities under professional supervision.",
      "Conducted social assessments and supported counseling sessions.",
      "Facilitated group activities for children.",
      "Maintained case records and documentation.",
      "Applied social work theories and methods in practical, community-based settings.",
    ],
  },
];

function ExperiencePage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Experience"
        title={
          <>
            From the lecture hall <span className="italic text-primary">to the field.</span>
          </>
        }
        intro="A timeline of practice, supervision and continuous learning in Zimbabwean social work."
      />

      <section className="mx-auto max-w-5xl px-5 py-20 md:px-8">
        <ol className="relative space-y-12 border-l border-border pl-8">
          {items.map(({ icon: Icon, period, title, org, bullets }) => (
            <li key={title} className="relative">
              <span className="absolute -left-[2.35rem] flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft">
                <Icon className="h-4 w-4" />
              </span>
              <p className="text-xs uppercase tracking-[0.22em] text-accent">{period}</p>
              <h3 className="mt-2 font-display text-2xl text-foreground md:text-3xl">{title}</h3>
              <p className="text-sm text-muted-foreground">{org}</p>
              <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-foreground/85">
                {bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="mt-20 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
            <GraduationCap className="h-6 w-6 text-primary" />
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              2025
            </p>
            <h3 className="mt-2 font-display text-2xl text-foreground">
              Bachelor of Social Work (BSW)
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Zimbabwe Ezekiel Guti University · Upper Second Class (2.1)
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
            <BookOpen className="h-6 w-6 text-accent" />
            <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Dissertation
            </p>
            <h3 className="mt-2 font-display text-xl text-foreground">
              Assessing Cultural Sensitivity in Child Protection Services in Mufakose District, Harare
            </h3>
            <ul className="mt-3 space-y-1 text-sm text-muted-foreground">
              <li>• Community-based qualitative research</li>
              <li>• Stakeholder interviews & analysis</li>
              <li>• Insight into cultural & systemic dynamics</li>
            </ul>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
