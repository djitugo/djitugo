"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const links = [
  { label: "Services", href: "/services" },
  { label: "Works", href: "/works" },
  { label: "Process", href: "/process" },
  { label: "Studio", href: "/studio" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
        <Link
          href="/"
          className="flex items-center gap-2 group"
          aria-label="Djitugo home"
        >
          <Logo />
          <span className="font-display text-2xl tracking-tight">djitugo</span>
        </Link>

        <nav className="hidden md:flex items-center gap-9">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[13px] uppercase tracking-[0.18em] underline-grow"
            >
              {l.label}
            </Link>
          ))}
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
        <div className="md:hidden border-t hairline bg-[color:var(--color-paper)]">
          <nav className="container-x py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl"
              >
                {l.label}
              </Link>
            ))}
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
    <svg
      width="36"
      height="36"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
      aria-hidden
    >
      <rect width="100" height="100" rx="18" fill="currentColor" />
      <g fill="var(--color-paper)">
        <path d="M19 22 L60 22 A28 28 0 0 1 60 78 L19 78 L19 65 L58 65 A15 15 0 0 0 58 35 L19 35 Z" />
        <rect x="19" y="44" width="32" height="12" rx="0.5" />
      </g>
    </svg>
  );
}

function ArrowUpRight() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path d="M3 9L9 3M9 3H4M9 3V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </svg>
  );
}
