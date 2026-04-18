import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/section-header";
import pad from "@/assets/gallery-pad-campaign.jpg";
import gbv from "@/assets/gallery-gbv.jpg";
import jef from "@/assets/gallery-jef.jpeg";
import kids from "@/assets/gallery-kids.jpeg";
import pads1 from "@/assets/gallery-pads1.jpeg";
import pads2 from "@/assets/gallery-pads2.jpeg";
import pad4 from "@/assets/gallery-pad4.jpeg";

const photos = [
  { src: kids, caption: "Children welfare outreach", span: "col-span-2 row-span-2" },
  { src: pad, caption: "Pad Awareness Campaign" },
  { src: jef, caption: "Supporting children in the community" },
  { src: pads1, caption: "Women gathering for the campaign" },
  { src: pads2, caption: "Community engagement session", span: "col-span-2" },
  { src: pad4, caption: "REFO team distributing pads" },
  { src: gbv, caption: "Women's health & GBV awareness" },
];

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Elizabeth Tokomere at work" },
      {
        name: "description",
        content:
          "Photo gallery from Elizabeth Tokomere's community work — outreach, counseling, child welfare and awareness campaigns.",
      },
      { property: "og:title", content: "Gallery — Elizabeth Tokomere" },
      {
        property: "og:description",
        content: "Moments from outreach, counseling and community campaigns.",
      },
      { property: "og:image", content: "/images/elizabeth-portrait.jpeg" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title={
          <>
            Moments from <span className="italic text-primary">the work.</span>
          </>
        }
        intro="Glimpses into outreach, counseling and the everyday rhythm of community-based social work."
      />

      <section className="mx-auto max-w-7xl px-5 pb-24 pt-12 md:px-8">
        <div className="grid auto-rows-[220px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 md:auto-rows-[240px]">
          {photos.map((p) => (
            <figure
              key={p.caption}
              className={`group relative overflow-hidden rounded-3xl border border-border shadow-soft ${p.span ?? ""}`}
            >
              <img
                src={p.src}
                alt={p.caption}
                width={1280}
                height={896}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent p-4 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
                {p.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
