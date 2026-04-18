import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/section-header";
import pad from "@/assets/gallery-pad-campaign.jpg";
import gbv from "@/assets/gallery-gbv.jpg";
import cleanup from "@/assets/gallery-cleanup.jpg";
import counseling from "@/assets/gallery-counseling.jpg";

const projects = [
  {
    img: pad,
    title: "Pad Awareness Campaign",
    summary:
      "Educated young girls and women on menstrual health and hygiene, promoting awareness and safe practices.",
    tag: "Health & Hygiene",
  },
  {
    img: gbv,
    title: "Women’s Reproductive Health & GBV Awareness",
    summary:
      "Facilitated sessions on reproductive health, personal protection and prevention of gender-based violence.",
    tag: "Advocacy",
  },
  {
    img: cleanup,
    title: "Community Clean-Up Campaign",
    summary:
      "Mobilised volunteers to clean public spaces — promoting hygiene and environmental health.",
    tag: "Community",
  },
  {
    img: counseling,
    title: "Counseling & Support Services",
    summary:
      "Provided psychosocial support to children, women and bereaved families navigating emotional and social challenges.",
    tag: "Psychosocial",
  },
];

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Elizabeth Tokomere" },
      {
        name: "description",
        content:
          "Community projects led by Elizabeth Tokomere — pad awareness, GBV prevention, clean-up campaigns and counseling services.",
      },
      { property: "og:title", content: "Community Projects" },
      {
        property: "og:description",
        content: "Pad awareness, GBV prevention, community clean-ups and psychosocial support.",
      },
      { property: "og:image", content: "/images/elizabeth-portrait.jpeg" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title={
          <>
            Programmes that <span className="italic text-primary">change everyday lives.</span>
          </>
        }
        intro="Hands-on initiatives I’ve led or co-facilitated across Harare communities."
      />

      <section className="mx-auto max-w-7xl px-5 py-20 md:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((p, i) => (
            <article
              key={p.title}
              className={`group relative overflow-hidden rounded-3xl border border-border bg-card shadow-soft ${
                i % 2 === 1 ? "md:translate-y-10" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  width={1280}
                  height={896}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-background/85 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-accent backdrop-blur">
                  {p.tag}
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-display text-2xl text-foreground md:text-3xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
