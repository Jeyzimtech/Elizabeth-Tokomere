import { Link, useRouterState } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, Download, ArrowRight } from "lucide-react";
import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });

  // Prevent scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-8">
        <Link to="/" onClick={() => setOpen(false)} className="group flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center transition-transform group-hover:scale-110">
            <img 
              src="/logo.svg" 
              alt="Elizabeth Tokomere Logo" 
              className="h-9 w-9"
            />
          </div>
          <span className="hidden flex-col leading-tight xs:flex">
            <span className="font-display text-base text-foreground tracking-tight">{SITE.shortName}</span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground/80">
              {SITE.role}
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            const active = path === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                preload="intent"
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm transition-all hover:bg-secondary/40",
                  active
                    ? "text-primary font-medium"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {item.label}
                {active && (
                  <motion.span 
                    layoutId="activeNav"
                    className="absolute inset-x-3 -bottom-0.5 h-px bg-accent" 
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/downloads/Elizabeth-Tokomere-Resume.pdf"
            download
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-elegant transition-all hover:-translate-y-0.5 hover:shadow-primary/20 md:inline-flex"
          >
            Download Resume
          </a>
          <button
            type="button"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
            className={cn(
              "relative z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border transition-all lg:hidden",
              open ? "bg-ink text-white border-transparent rotate-90" : "border-border bg-background hover:bg-secondary"
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-0 z-[45] bg-background/60 backdrop-blur-md lg:hidden"
          >
            <motion.nav 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="ml-auto flex h-full w-[85%] max-w-sm flex-col bg-white p-6 pt-24 shadow-2xl border-l border-border dark:bg-background"
            >
              <div className="flex flex-col gap-2">
                <p className="px-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground/80 mb-3">Principal Menu</p>
                {NAV.map((item, idx) => {
                  const active = path === item.to;
                  return (
                    <motion.div
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + idx * 0.05 }}
                      key={item.to}
                    >
                      <Link
                        to={item.to}
                        preload="intent"
                        onClick={() => setOpen(false)}
                        className={cn(
                          "group flex items-center justify-between rounded-2xl px-5 py-4 text-lg transition-all active:scale-[0.98]",
                          active 
                            ? "bg-primary text-primary-foreground font-display shadow-soft" 
                            : "text-foreground hover:bg-secondary border border-transparent hover:border-border/40"
                        )}
                      >
                        <span>{item.label}</span>
                        {active ? (
                          <motion.div layoutId="mobileActive" className="h-1.5 w-1.5 rounded-full bg-accent" />
                        ) : (
                          <ArrowRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100 text-muted-foreground" />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
              
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-auto pt-10"
              >
                <div className="rounded-3xl bg-primary/5 p-6 border border-primary/10">
                  <p className="text-sm font-medium text-foreground mb-1">
                    Professional Services
                  </p>
                  <p className="text-xs text-muted-foreground mb-5 leading-relaxed">
                    Available for child protection and community outreach roles across Zimbabwe.
                  </p>
                  <a
                    href="/downloads/Elizabeth-Tokomere-Resume.pdf"
                    download
                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-primary py-3.5 text-sm font-medium text-primary-foreground shadow-soft transition-transform active:scale-[0.97]"
                  >
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </div>
                <p className="mt-8 text-center text-[10px] font-medium uppercase tracking-[0.25em] text-muted-foreground/60">
                  {SITE.shortName} · {new Date().getFullYear()}
                </p>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
