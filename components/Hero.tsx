"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(".hero-line > span", { yPercent: 110 });
      gsap.set(".hero-eyebrow > *", { yPercent: 100, opacity: 0 });
      gsap.set(".hero-meta > *", { opacity: 0, y: 24 });
      gsap.set(".hero-blob", { opacity: 0, scale: 0.92 });

      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
      tl.to(".hero-eyebrow > *", {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        stagger: 0.08,
      })
        .to(
          ".hero-line > span",
          {
            yPercent: 0,
            duration: 1.4,
            stagger: 0.06,
          },
          "-=0.5"
        )
        .to(
          ".hero-meta > *",
          { opacity: 1, y: 0, duration: 1, stagger: 0.08 },
          "-=0.7"
        )
        .to(".hero-blob", { opacity: 1, scale: 1, duration: 1.4 }, "-=1.2");

      // subtle parallax on blob
      const onMove = (e: MouseEvent) => {
        const { innerWidth: w, innerHeight: h } = window;
        const x = (e.clientX / w - 0.5) * 20;
        const y = (e.clientY / h - 0.5) * 20;
        gsap.to(".hero-blob", { x, y, duration: 1.2, ease: "power3.out" });
      };
      window.addEventListener("mousemove", onMove);
      return () => window.removeEventListener("mousemove", onMove);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative pt-36 md:pt-44 pb-24 md:pb-32 overflow-hidden"
    >
      <div className="container-x relative z-10">
        <div className="hero-eyebrow flex flex-wrap items-center gap-4 text-[11px] font-mono uppercase tracking-[0.28em] text-[color:var(--color-gray-4)]">
          <span className="inline-flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-ink)] animate-pulse" />
            Bali · Est. 2018
          </span>
          <span className="opacity-40">/</span>
          <span>Independent digital studio</span>
          <span className="opacity-40">/</span>
          <span>Trusted by 700+ brands</span>
        </div>

        <h1 className="mt-10 md:mt-14 max-w-[min(96vw,1280px)] relative z-10">
          <Line>Where creativity</Line>
          <Line>meets <em className="not-italic font-light italic">technology.</em></Line>
        </h1>

        <div className="hero-meta mt-14 grid grid-cols-12 gap-y-8 gap-x-6 items-end">
          <p className="col-span-12 md:col-span-5 text-[15px] md:text-base leading-relaxed text-[color:var(--color-gray-4)] max-w-md">
            We turn ideas into visual &amp; digital impact — brand visuals with purpose, digital presence that performs. From UMKM to multinational brands across Indonesia.
          </p>

          <div className="col-span-12 md:col-span-4 md:col-start-7">
            <Link
              href="/works"
              className="group inline-flex items-center gap-4 bg-[color:var(--color-ink)] text-[color:var(--color-paper)] rounded-full pl-6 pr-2 py-2 text-sm tracking-wide hover:translate-y-[-2px] transition-transform"
            >
              See selected works
              <span className="h-11 w-11 grid place-items-center rounded-full bg-[color:var(--color-paper)] text-[color:var(--color-ink)] transition-transform group-hover:rotate-45">
                →
              </span>
            </Link>
            <Link
              href="/services"
              className="ml-4 text-sm underline-grow"
            >
              or explore services
            </Link>
          </div>

          <div className="col-span-12 mt-4 hidden md:flex justify-end font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gray-4)]">
            <span>↓ scroll to discover</span>
          </div>
        </div>
      </div>

      {/* Decorative ring system — sits behind text, never obscures */}
      <div
        aria-hidden
        className="hero-blob absolute right-[-14vw] bottom-[-8vw] w-[44vw] h-[44vw] max-w-[640px] max-h-[640px] -z-10 pointer-events-none"
      >
        <svg viewBox="0 0 600 600" className="w-full h-full">
          <defs>
            <radialGradient id="hero-rg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="rgba(10,10,10,0.18)" />
              <stop offset="60%" stopColor="rgba(10,10,10,0.10)" />
              <stop offset="100%" stopColor="rgba(10,10,10,0)" />
            </radialGradient>
          </defs>
          <circle cx="300" cy="300" r="290" fill="url(#hero-rg)" />
          {Array.from({ length: 22 }).map((_, i) => (
            <circle
              key={i}
              cx="300"
              cy="300"
              r={30 + i * 12}
              fill="none"
              stroke="rgba(10,10,10,0.12)"
              strokeWidth="0.5"
            />
          ))}
          <circle cx="300" cy="300" r="6" fill="rgba(10,10,10,0.85)" />
        </svg>
      </div>

      {/* Hairline grid */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
    </section>
  );
}

function Line({ children }: { children: React.ReactNode }) {
  return (
    <div className="hero-line block overflow-hidden text-mega font-display">
      <span className="inline-block will-change-transform">{children}</span>
    </div>
  );
}
