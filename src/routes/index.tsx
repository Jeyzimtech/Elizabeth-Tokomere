import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Download, HeartHandshake, ShieldCheck, Megaphone, BadgeCheck } from "lucide-react";
import portrait from "@/assets/elizabeth-portrait.jpeg";
import heroChildren from "@/assets/hero-children.png";
import outreach from "@/assets/gallery-outreach.jpg";
import children from "@/assets/gallery-children.jpg";
import { SiteLayout } from "@/components/site-layout";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Elizabeth Rutendo Tokomere — Registered Social Worker, Zimbabwe" },
      {
        name: "description",
        content:
          "Portfolio of Elizabeth Rutendo Tokomere — registered social worker in Zimbabwe specialising in child protection, community outreach and psychosocial support.",
      },
      { property: "og:title", content: "Elizabeth Rutendo Tokomere — Social Worker" },
      {
        property: "og:description",
        content:
          "Child protection, education support and community development across Zimbabwe.",
      },
      { property: "og:image", content: "/images/elizabeth-portrait.jpeg" },
      { name: "twitter:image", content: "/images/elizabeth-portrait.jpeg" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-warm">
        <div className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-accent/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-16 md:grid-cols-[1.1fr_1fr] md:items-center md:gap-12 md:px-8 md:pb-28 md:pt-24">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-accent backdrop-blur">
              <BadgeCheck className="h-3.5 w-3.5" /> CSW Cert No. {SITE.certNo}
            </p>
            <h1 className="mt-6 font-display text-4xl leading-[1.1] text-foreground text-balance xs:text-5xl sm:text-6xl md:text-7xl md:leading-[1.02]">
              Caring work,<br />
              <span className="italic text-primary">grounded in dignity.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground text-pretty">
              I’m {SITE.shortName} a registered social worker in Zimbabwe walking with
              children, women and families through protection, counseling and community
              development.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
              >
                Work with me <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="/downloads/Elizabeth-Tokomere-Resume.pdf"
                download
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-5 py-3 text-sm font-medium text-foreground backdrop-blur hover:bg-background"
              >
                <Download className="h-4 w-4" /> Download resume
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-border/70 pt-8 xs:grid-cols-3">
              {[
                ["2+", "Years in practice"],
                ["20+", "Lives reached"],
                ["1", "NGO founded"],
              ].map(([n, l]) => (
                <div key={l}>
                  <dt className="font-display text-3xl text-primary">{n}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-forest opacity-90 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border/60 shadow-elegant">
              <img
                src={portrait}
                alt="Portrait of Elizabeth Rutendo Tokomere, registered social worker"
                width={860}
                height={1075}
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl border border-white/15 bg-black/35 px-4 py-3 text-white backdrop-blur-md">
                <div>
                  <p className="font-display text-base">Elizabeth Tokomere, BSW</p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-white/75">
                    Founder · Rescue Foundation
                  </p>
                </div>
                <span className="rounded-full bg-gold/90 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-ink">
                  Registered
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRACTICE AREAS */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-10 md:grid-cols-[1fr_2fr] md:items-end">
          <div>
            <p className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-accent">
              <span className="h-px w-8 bg-accent" /> Practice
            </p>
            <h2 className="font-display text-4xl text-foreground md:text-5xl">
              How I serve communities.
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">
            From child protection casework to community outreach campaigns, my practice
            blends ethical social work theory with deep cultural understanding of
            Zimbabwean families.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Child Protection & Safeguarding",
              copy: "Casework, social assessments and referrals that keep children safe and supported.",
            },
            {
              icon: HeartHandshake,
              title: "Counseling & Psychosocial Support",
              copy: "Compassionate support for women, children and bereaved families navigating hardship.",
            },
            {
              icon: Megaphone,
              title: "Community Outreach & Advocacy",
              copy: "Awareness campaigns on health, hygiene and gender-based violence prevention.",
            },
          ].map(({ icon: Icon, title, copy }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card p-7 shadow-soft transition-transform hover:-translate-y-1"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </article>
          ))}
        </div>
      </section>

      {/* IN THE FIELD */}
      <section className="bg-secondary/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="grid grid-cols-1 gap-4 xs:grid-cols-2">
              <img
                src={heroChildren}
                alt="Children participating in community activities"
                width={1280}
                height={896}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] rounded-2xl object-cover shadow-soft"
              />
              <img
                src={children}
                alt="Children at a welfare session"
                width={1280}
                height={896}
                loading="lazy"
                className="mt-6 aspect-[4/5] rounded-2xl object-cover shadow-soft xs:mt-10"
              />
            </div>
            <div>
              <p className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-accent">
                <span className="h-px w-8 bg-accent" /> In the field
              </p>
              <h2 className="font-display text-4xl text-foreground md:text-5xl">
                Walking with families,<br /> one home at a time.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
                As founder of <strong className="text-foreground">Rescue Foundation Trust (REFO)</strong>,
                I run community awareness sessions, basic counseling and referral services
                for vulnerable women and children across Harare and surrounding districts.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/refo"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-soft hover:-translate-y-0.5 transition-transform"
                >
                  Discover REFO <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary"
                >
                  View gallery
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="relative overflow-hidden rounded-[2rem] bg-gradient-forest p-10 text-primary-foreground md:p-16">
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[2fr_1fr] lg:items-center">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-gold">Let’s collaborate</p>
              <h2 className="mt-3 font-display text-4xl text-white md:text-5xl">
                Looking for a passionate social worker for your programme?
              </h2>
              <p className="mt-4 max-w-xl text-base text-white/80 md:text-lg">
                I’m available for education programming, child protection roles,
                community outreach and consultation across Zimbabwe.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-medium text-ink hover:bg-gold/90"
              >
                Get in touch <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="/downloads/Elizabeth-Tokomere-Academic-Qualifications.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
              >
                <Download className="h-4 w-4" /> Academic qualifications
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
