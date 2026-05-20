"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { services } from "@/lib/services";

type NavItem = { label: string; href: string; children?: typeof services };

const links: NavItem[] = [
  { label: "Services", href: "/services", children: services },
  { label: "Works", href: "/works" },
  { label: "Process", href: "/process" },
  { label: "Studio", href: "/studio" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [hoverOpen, setHoverOpen] = useState<string | null>(null);
  const ref = useRef<HTMLElement>(null);
  const hoverTimeout = useRef<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function openMenu(label: string) {
    if (hoverTimeout.current) window.clearTimeout(hoverTimeout.current);
    setHoverOpen(label);
  }
  function closeMenu() {
    if (hoverTimeout.current) window.clearTimeout(hoverTimeout.current);
    hoverTimeout.current = window.setTimeout(() => setHoverOpen(null), 120);
  }

  return (
    <header
      ref={ref}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-md bg-[color:var(--color-paper)]/80 border-b hairline"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between py-5">
        <Link href="/" className="flex items-center group" aria-label="Djitugo home">
          <Logo />
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) =>
            l.children ? (
              <div
                key={l.href}
                className="relative"
                onMouseEnter={() => openMenu(l.label)}
                onMouseLeave={closeMenu}
              >
                <Link
                  href={l.href}
                  className="text-[13px] uppercase tracking-[0.18em] underline-grow flex items-center gap-1.5"
                  aria-expanded={hoverOpen === l.label}
                  aria-haspopup="menu"
                >
                  {l.label}
                  <Caret open={hoverOpen === l.label} />
                </Link>

                {/* Dropdown */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-full pt-5 transition-all duration-300 ${
                    hoverOpen === l.label
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-1 pointer-events-none"
                  }`}
                  role="menu"
                >
                  <div className="bg-[color:var(--color-ink)] text-[color:var(--color-paper)] rounded-2xl border border-[color:var(--color-paper)]/10 shadow-2xl p-3 min-w-[440px] grain">
                    <Link
                      href={l.href}
                      onClick={() => setHoverOpen(null)}
                      className="block px-4 py-3 rounded-xl hover:bg-[color:var(--color-paper)]/8 transition-colors"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div className="font-mono text-[10px] uppercase tracking-[0.28em] opacity-60">
                            Overview
                          </div>
                          <div className="font-display text-xl mt-1 tracking-tight">
                            All six services
                          </div>
                        </div>
                        <span className="text-[color:var(--color-paper)]/60">→</span>
                      </div>
                    </Link>

                    <div className="my-2 h-px bg-[color:var(--color-paper)]/10" />

                    <ul className="grid grid-cols-1">
                      {l.children.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            onClick={() => setHoverOpen(null)}
                            className="group flex items-start gap-4 px-4 py-3 rounded-xl hover:bg-[color:var(--color-paper)]/8 transition-colors"
                          >
                            <span className="font-mono text-[10px] uppercase tracking-[0.28em] opacity-60 mt-1.5 shrink-0">
                              {s.num}
                            </span>
                            <span className="flex-1">
                              <span className="block font-display text-lg tracking-tight">
                                {s.title}
                              </span>
                              <span className="block text-[12px] opacity-65 mt-0.5">
                                {s.tagline}
                              </span>
                            </span>
                            <span className="opacity-30 group-hover:opacity-100 transition-opacity mt-1.5">
                              →
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href}
                className="text-[13px] uppercase tracking-[0.18em] underline-grow"
              >
                {l.label}
              </Link>
            )
          )}
        </nav>

        <Link
          href="/contact"
          className="hidden md:inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.18em] bg-[color:var(--color-ink)] text-[color:var(--color-paper)] px-5 py-3 rounded-full hover:opacity-90 transition-opacity"
        >
          <span>Start a project</span>
          <ArrowUpRight />
        </Link>

        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className="md:hidden h-10 w-10 grid place-items-center border hairline rounded-full"
        >
          <span className={`block w-4 h-px bg-current transition-transform ${open ? "translate-y-[3px] rotate-45" : "-translate-y-1"}`} />
          <span className={`block w-4 h-px bg-current transition-transform ${open ? "-translate-y-[0px] -rotate-45" : "translate-y-1"}`} />
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t hairline bg-[color:var(--color-paper)] max-h-[80vh] overflow-y-auto">
          <nav className="container-x py-6 flex flex-col gap-1">
            {links.map((l) =>
              l.children ? (
                <div key={l.href} className="flex flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <Link
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="font-display text-3xl py-2"
                    >
                      {l.label}
                    </Link>
                    <button
                      type="button"
                      aria-label="Toggle services list"
                      aria-expanded={mobileServicesOpen}
                      onClick={() => setMobileServicesOpen((s) => !s)}
                      className="h-9 w-9 grid place-items-center border hairline rounded-full font-mono text-[14px]"
                    >
                      {mobileServicesOpen ? "−" : "+"}
                    </button>
                  </div>
                  {mobileServicesOpen && (
                    <ul className="pl-4 mt-1 mb-3 space-y-1 border-l hairline">
                      {l.children.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            onClick={() => setOpen(false)}
                            className="flex items-baseline gap-3 py-2"
                          >
                            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)]">
                              {s.num}
                            </span>
                            <span className="font-display text-xl">
                              {s.title}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display text-3xl py-2"
                >
                  {l.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.18em] bg-[color:var(--color-ink)] text-[color:var(--color-paper)] px-5 py-3 rounded-full w-fit"
            >
              Start a project <ArrowUpRight />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function Logo() {
  return (
    <img
      src="/logo.png"
      alt="Djitugo"
      width="36"
      height="36"
      className="shrink-0 rounded-[8px]"
    />
  );
}

function ArrowUpRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}

function Caret({ open }: { open: boolean }) {
  return (
    <svg
      width="9"
      height="9"
      viewBox="0 0 9 9"
      aria-hidden
      className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
    >
      <path d="M1 3 L4.5 6.5 L8 3" stroke="currentColor" strokeWidth="1" fill="none" />
    </svg>
  );
}
