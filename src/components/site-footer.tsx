import { Link } from "@tanstack/react-router";
import { Mail, Phone, MessageCircle, MapPin, Linkedin } from "lucide-react";
import { SITE } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3 md:px-8">
        <div>
          <p className="font-display text-2xl text-foreground">{SITE.name}</p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Registered Social Worker committed to protecting children, empowering women
            and strengthening Zimbabwean communities.
          </p>
          <p className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <span className="h-px w-6 bg-accent" /> CSW Cert · {SITE.certNo}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Explore</p>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {[
              ["/about", "About"],
              ["/experience", "Experience"],
              ["/projects", "Projects"],
              ["/refo", "REFO"],
              ["/gallery", "Gallery"],
              ["/credentials", "Credentials"],
              ["/contact", "Contact"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-foreground/80 hover:text-primary">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Contact</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 text-accent" /> {SITE.location}
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 text-accent" />
              <a href={`mailto:${SITE.email}`} className="hover:text-primary">{SITE.email}</a>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 text-accent" />
              <a href={`tel:+${SITE.whatsapp}`} className="hover:text-primary">{SITE.phone}</a>
            </li>
            <li className="flex items-center gap-3">
              <MessageCircle className="h-4 w-4 text-accent" />
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                WhatsApp chat
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Linkedin className="h-4 w-4 text-accent" />
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary"
              >
                LinkedIn Profile
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs text-muted-foreground md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>developed by jefter tokomere brothers love · Harare, Zimbabwe</p>
        </div>
      </div>
    </footer>
  );
}
