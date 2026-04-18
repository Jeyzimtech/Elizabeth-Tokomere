import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site-layout";
import { PageHero } from "@/components/section-header";
import { Mail, Phone, MessageCircle, MapPin, Download } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Elizabeth Tokomere" },
      {
        name: "description",
        content:
          "Get in touch with Elizabeth Tokomere via email, WhatsApp or phone for collaboration, consultation or programme work.",
      },
      { property: "og:title", content: "Contact Elizabeth Tokomere" },
      {
        property: "og:description",
        content: "Reach Elizabeth via email, WhatsApp or phone — Harare, Zimbabwe.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const cards = [
    {
      icon: Mail,
      title: "Email",
      value: SITE.email,
      href: `mailto:${SITE.email}`,
      cta: "Send a message",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: SITE.phone,
      href: `https://wa.me/${SITE.whatsapp}`,
      cta: "Open chat",
    },
    {
      icon: Phone,
      title: "Phone Call",
      value: SITE.phone,
      href: `tel:+${SITE.whatsapp}`,
      cta: "Call directly",
    },
  ];

  return (
    <SiteLayout>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Let’s build <span className="italic text-primary">something meaningful.</span>
          </>
        }
        intro="Available for education programming, child protection roles, community outreach and consultation across Zimbabwe."
      />

      <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, value, href, cta }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="group flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-soft transition-transform hover:-translate-y-1"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </span>
              <p className="mt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {title}
              </p>
              <p className="mt-1 break-all font-display text-xl text-foreground">{value}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-medium text-accent">
                {cta} →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-[1.4fr_1fr]">
          <div className="rounded-3xl border border-border bg-gradient-warm p-8 shadow-soft md:p-10">
            <p className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-accent">
              <MapPin className="h-4 w-4" /> Based in
            </p>
            <h3 className="mt-3 font-display text-3xl text-foreground md:text-4xl">
              {SITE.location}
            </h3>
            <p className="mt-3 max-w-xl text-base text-muted-foreground">
              I work across Harare and surrounding districts and am open to remote
              consultation, fieldwork and programme partnerships throughout Zimbabwe.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft">
            <h3 className="font-display text-2xl text-foreground">Quick downloads</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Share or print Elizabeth’s key documents.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href="/downloads/Elizabeth-Tokomere-Resume.pdf"
                download
                className="inline-flex items-center justify-between rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
              >
                Resume (PDF) <Download className="h-4 w-4" />
              </a>
              <a
                href="/downloads/Elizabeth-Tokomere-Academic-Qualifications.pdf"
                download
                className="inline-flex items-center justify-between rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground hover:bg-secondary"
              >
                Academic qualifications (PDF) <Download className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* References */}
        <div className="mt-16">
          <p className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-accent">
            <span className="h-px w-8 bg-accent" /> References
          </p>
          <h3 className="font-display text-3xl text-foreground md:text-4xl">
            Professional referees
          </h3>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              {
                name: "Witness Mafongoya",
                role: "Advisor — Rescue Foundation Trust",
                phone: "+263 77 827 2440",
              },
              {
                name: "Abel Musanhu",
                role: "Director — Sweet Valley Club",
                phone: "+263 77 383 699",
              },
            ].map((r) => (
              <div key={r.name} className="rounded-2xl border border-border bg-card p-6">
                <p className="font-display text-xl text-foreground">{r.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{r.role}</p>
                <p className="mt-3 text-sm text-accent">{r.phone}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
