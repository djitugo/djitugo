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
