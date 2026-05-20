"use client";

import { useEffect, useRef } from "react";
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

        <h1 className="mt-10 md:mt-14">
          <Line>Where creativity</Line>
          <Line>meets <em className="not-italic font-light italic">technology.</em></Line>
        </h1>

        <div className="hero-meta mt-14 grid grid-cols-12 gap-y-8 gap-x-6 items-end">
          <p className="col-span-12 md:col-span-5 text-[15px] md:text-base leading-relaxed text-[color:var(--color-gray-4)] max-w-md">
            We turn ideas into visual &amp; digital impact — brand visuals with purpose, digital presence that performs. From UMKM to multinational brands across Indonesia.
          </p>

          <div className="col-span-12 md:col-span-4 md:col-start-7">
            <a
              href="#works"
              className="group inline-flex items-center gap-4 bg-[color:var(--color-ink)] text-[color:var(--color-paper)] rounded-full pl-6 pr-2 py-2 text-sm tracking-wide hover:translate-y-[-2px] transition-transform"
            >
              See selected works
              <span className="h-11 w-11 grid place-items-center rounded-full bg-[color:var(--color-paper)] text-[color:var(--color-ink)] transition-transform group-hover:rotate-45">
                →
              </span>
            </a>
            <a
              href="#services"
              className="ml-4 text-sm underline-grow"
            >
              or explore services
            </a>
          </div>

          <div className="col-span-12 mt-4 hidden md:flex justify-end font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gray-4)]">
            <span>↓ scroll to discover</span>
          </div>
        </div>
      </div>

      {/* Decorative monochrome blob */}
      <div
        aria-hidden
        className="hero-blob absolute right-[-10vw] top-[6vh] w-[55vw] h-[55vw] max-w-[720px] max-h-[720px] -z-0"
      >
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(10,10,10,1)_0%,rgba(10,10,10,0.85)_35%,rgba(10,10,10,0)_70%)]" />
        <div className="absolute inset-[6%] rounded-full mix-blend-multiply bg-[conic-gradient(from_210deg,rgba(0,0,0,0)_0deg,rgba(0,0,0,0.4)_180deg,rgba(0,0,0,0)_360deg)]" />
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
