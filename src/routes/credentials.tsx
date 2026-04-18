import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/section-header";
import cert from "@/assets/social-worker-certificate.jpeg";
import { Award, Download, BadgeCheck, GraduationCap } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/credentials")({
  head: () => ({
    meta: [
      { title: "Credentials — Elizabeth Tokomere, Registered Social Worker" },
      {
        name: "description",
        content:
          "Professional registration and academic qualifications of Elizabeth Tokomere — Council of Social Workers Cert. No. 7622W.",
      },
      { property: "og:title", content: "Credentials & Certification" },
      {
        property: "og:description",
        content: "Council of Social Workers (Zimbabwe) registration and academic qualifications.",
      },
      { property: "og:image", content: "/images/social-worker-certificate.jpeg" },
    ],
  }),
  component: CredentialsPage,
});

function CredentialsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Credentials"
        title={
          <>
            Officially registered, <span className="italic text-primary">ethically committed.</span>
          </>
        }
        intro="Elizabeth is a registered social worker with the Council of Social Workers of Zimbabwe under the Social Workers Act (Chapter 27:21)."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr] md:items-start">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-card p-3 shadow-elegant">
            <img
              src={cert}
              alt="Council of Social Workers Zimbabwe — Certificate of Registration for Elizabeth Rutendo Tokomere"
              loading="lazy"
              className="w-full rounded-[1.5rem] object-cover"
            />
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <BadgeCheck className="h-6 w-6" />
              </span>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Professional Registration
              </p>
              <h3 className="mt-2 font-display text-2xl text-foreground">
                Council of Social Workers — Zimbabwe
              </h3>
              <dl className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-muted-foreground">Certificate No.</dt>
                  <dd className="font-display text-lg text-primary">{SITE.certNo}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Issued</dt>
                  <dd className="font-display text-lg text-foreground">03 March 2026</dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-muted-foreground">Act</dt>
                  <dd className="text-foreground">Social Workers Act (Chapter 27:21)</dd>
                </div>
              </dl>
            </div>

            <div className="rounded-3xl border border-border bg-card p-7 shadow-soft">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/15 text-accent">
                <GraduationCap className="h-6 w-6" />
              </span>
              <p className="mt-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Academic Qualification
              </p>
              <h3 className="mt-2 font-display text-2xl text-foreground">
                Bachelor of Social Work (BSW)
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {SITE.university} · {SITE.grade}
              </p>
            </div>

            <div className="rounded-3xl border border-border bg-gradient-forest p-7 text-primary-foreground shadow-elegant">
              <Award className="h-6 w-6 text-gold" />
              <h3 className="mt-3 font-display text-2xl">Download official documents</h3>
              <p className="mt-2 text-sm text-white/80">
                Get a printable copy of Elizabeth’s resume or her full academic
                qualifications (including the registration certificate) as a single PDF.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/downloads/Elizabeth-Tokomere-Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-medium text-ink hover:bg-gold/90"
                >
                  <Download className="h-4 w-4" /> Resume (PDF)
                </a>
                <a
                  href="/downloads/Elizabeth-Tokomere-Academic-Qualifications.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-sm font-medium text-white hover:bg-white/10"
                >
                  <Download className="h-4 w-4" /> Academic qualifications (PDF)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
