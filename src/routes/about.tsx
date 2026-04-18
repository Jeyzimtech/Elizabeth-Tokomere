import { createFileRoute } from "@tanstack/react-router";
import portrait from "@/assets/elizabeth-portrait.jpeg";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/section-header";
import { SITE } from "@/lib/site";
import { Heart, GraduationCap, Languages, Users } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Elizabeth Rutendo Tokomere" },
      {
        name: "description",
        content:
          "Get to know Elizabeth Tokomere — a registered social worker, founder of REFO, and graduate of Zimbabwe Ezekiel Guti University.",
      },
      { property: "og:title", content: "About Elizabeth Tokomere" },
      {
        property: "og:description",
        content: "Recent BSW graduate and registered social worker passionate about child protection.",
      },
      { property: "og:image", content: "/images/elizabeth-portrait.jpeg" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={
          <>
            A social worker rooted in <span className="italic text-primary">community.</span>
          </>
        }
        intro="Recent Social Work graduate from Zimbabwe Ezekiel Guti University with a strong passion for child protection, education support and community development."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-border shadow-soft">
              <img
                src={portrait}
                alt="Portrait of Elizabeth Rutendo Tokomere"
                width={860}
                height={1075}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-border bg-card p-5 shadow-elegant md:block">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Status</p>
              <p className="mt-1 font-display text-xl text-primary">Married · Harare</p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-3xl text-foreground md:text-4xl">
              Hello, I’m Elizabeth.
            </h2>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                I hold a <strong className="text-foreground">{SITE.degree}</strong> from{" "}
                <strong className="text-foreground">{SITE.university}</strong>, completed
                with an Upper Second Class (2.1) in 2025. I am officially registered with
                the {SITE.council} under Certificate No. <strong className="text-foreground">{SITE.certNo}</strong>.
              </p>
              <p>
                My work centres around the wellbeing of vulnerable children and women through
                community outreach, awareness campaigns, basic counseling and academic
                research. I founded <strong className="text-foreground">Rescue Foundation Trust (REFO)</strong> in
                2022 to extend that mission to families that often fall through the cracks.
              </p>
              <p>
                I’m highly motivated, organised and eager to keep learning especially in
                education programming where I can meaningfully contribute to the next
                generation.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { icon: GraduationCap, label: "Education", value: SITE.grade },
                { icon: Heart, label: "Focus", value: "Child Protection" },
                { icon: Languages, label: "Languages", value: "English · Shona" },
                { icon: Users, label: "Affiliation", value: "Founder, REFO" },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="rounded-2xl border border-border bg-card p-5">
                  <Icon className="h-5 w-5 text-accent" />
                  <p className="mt-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {label}
                  </p>
                  <p className="mt-1 font-display text-lg text-foreground">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="bg-secondary/40 py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <p className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-accent">
            <span className="h-px w-8 bg-accent" /> Skills
          </p>
          <h2 className="font-display text-3xl text-foreground md:text-4xl">
            What I bring to the work.
          </h2>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Child Protection & Safeguarding",
              "Counseling & Psychosocial Support",
              "Case Management",
              "Community Outreach & Advocacy",
              "Communication & Interpersonal Skills",
              "Problem-Solving & Critical Thinking",
              "Organizational & Time Management",
              "Report Writing & Documentation",
              "Microsoft Word & Excel",
              "Data Collection & Record Keeping",
              "Monitoring & Field Support",
              "Confidentiality & Professionalism",
            ].map((skill) => (
              <div
                key={skill}
                className="flex items-center justify-between rounded-2xl border border-border bg-card px-5 py-4"
              >
                <span className="text-sm text-foreground">{skill}</span>
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
