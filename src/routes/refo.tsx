import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/section-header";
import refoLogo from "@/assets/refo-logo.jpeg";
import { ArrowRight, HandHeart, Sprout, Users2 } from "lucide-react";

export const Route = createFileRoute("/refo")({
  head: () => ({
    meta: [
      { title: "REFO — Rescue Foundation Trust" },
      {
        name: "description",
        content:
          "Rescue Foundation Trust (REFO) — community-based NGO founded by Elizabeth Tokomere supporting women and children in Zimbabwe.",
      },
      { property: "og:title", content: "Rescue Foundation Trust (REFO)" },
      {
        property: "og:description",
        content:
          "Community-based organisation supporting the welfare of vulnerable women and children.",
      },
      { property: "og:image", content: "/images/elizabeth-portrait.jpeg" },
    ],
  }),
  component: RefoPage,
});

function RefoPage() {
  return (
    <>
      <PageHero
        eyebrow="The Trust"
        title={
          <>
            REFO — <span className="italic text-primary">Rescue Foundation Trust.</span>
          </>
        }
        intro="A community-based organisation founded in 2022 to walk alongside vulnerable women and children with dignity, care and practical support."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div className="flex aspect-square items-center justify-center overflow-hidden rounded-[2rem] border border-border bg-white p-10 shadow-soft md:p-14">
            <img
              src={refoLogo}
              alt="Rescue Foundation Trust (REFO) logo"
              width={800}
              height={800}
              loading="lazy"
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl text-foreground md:text-4xl">
              Our mission
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Rescue Foundation Trust exists to support the welfare of women and children
              who are often invisible to formal systems. We provide basic counseling,
              psychosocial support, awareness campaigns and referrals to clients across
              Zimbabwean communities.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
              Through partnerships, volunteers and supervised practice, REFO is building a
              quiet but consistent network of care.
            </p>
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-soft hover:-translate-y-0.5 transition-transform"
              >
                Partner with REFO <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: HandHeart,
              title: "Counseling",
              copy: "Basic counseling and psychosocial support for vulnerable women and children.",
            },
            {
              icon: Users2,
              title: "Awareness",
              copy: "Community sessions on child protection, women’s welfare and GBV prevention.",
            },
            {
              icon: Sprout,
              title: "Referrals",
              copy: "Linking clients with health, legal and social services when they need them most.",
            },
          ].map(({ icon: Icon, title, copy }) => (
            <div key={title} className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-2xl text-foreground">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{copy}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
