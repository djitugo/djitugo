"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const team = [
  { name: "Gustu Adi", role: "Co-founder / Strategy" },
  { name: "Komang Joni", role: "Co-founder / Creative" },
];

export default function About() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".about-fade");
      gsap.set(items, { opacity: 0, y: 30 });
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              gsap.to(items, {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.08,
                ease: "expo.out",
              });
              io.disconnect();
            }
          });
        },
        { threshold: 0.15 }
      );
      if (root.current) io.observe(root.current);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={root} className="py-28 md:py-40 bg-[color:var(--color-paper-pure)]">
      <div className="container-x grid grid-cols-12 gap-8 md:gap-12">
        <div className="col-span-12 md:col-span-5">
          <p className="about-fade font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)]">
            ( 05 · The studio )
          </p>
          <h2 className="about-fade text-headline mt-6 font-display">
            An independent studio,<br />
            <em className="not-italic italic font-light">built in Bali.</em>
          </h2>
          <p className="about-fade mt-8 text-[15px] leading-relaxed text-[color:var(--color-gray-4)]">
            Djitugo hadir untuk membantu pelaku UMKM hingga enterprise tumbuh di era digital. Sejak 2018 kami menggabungkan strategi, desain dan teknologi — dengan satu tujuan: <em className="not-italic italic">empowering bisnis anda</em>.
          </p>
          <p className="about-fade mt-4 text-[15px] leading-relaxed text-[color:var(--color-gray-4)]">
            We&apos;re a tight team of strategists, designers, photographers and engineers. Big enough to ship, small enough to care.
          </p>

          <div className="about-fade mt-10 grid grid-cols-2 gap-4">
            {team.map((m) => (
              <div key={m.name} className="border-t hairline pt-4">
                <div className="font-display text-2xl tracking-tight">{m.name}</div>
                <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-gray-3)] mt-1">
                  {m.role}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 md:col-span-6 md:col-start-7">
          <div className="about-fade relative aspect-[4/5] bg-[color:var(--color-ink)] text-[color:var(--color-paper)] rounded-2xl overflow-hidden grain">
            <svg viewBox="0 0 400 500" className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
              <defs>
                <linearGradient id="aboutg" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#0a0a0a" />
                  <stop offset="100%" stopColor="#1c1c1c" />
                </linearGradient>
              </defs>
              <rect width="400" height="500" fill="url(#aboutg)" />
              {Array.from({ length: 40 }).map((_, i) => (
                <line
                  key={i}
                  x1="0"
                  y1={i * 13}
                  x2="400"
                  y2={i * 13 + 6}
                  stroke="rgba(246,245,241,0.05)"
                />
              ))}
              <text x="6%" y="92%" fill="rgba(246,245,241,0.85)" fontFamily="serif" fontSize="72" fontStyle="italic">
                est. 2018
              </text>
            </svg>

            <div className="relative z-10 h-full p-7 md:p-10 flex flex-col justify-between">
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] opacity-70">
                Djitugo HQ · Bali
              </div>
              <blockquote className="font-display text-2xl md:text-3xl leading-[1.15] max-w-md">
                &ldquo;We don&apos;t chase trends. We build brands that <em className="not-italic italic">earn attention</em> on the channels that matter.&rdquo;
              </blockquote>
            </div>
          </div>

          <div className="about-fade mt-6 grid grid-cols-3 gap-4 text-center md:text-left">
            {[
              { k: "2018", v: "Founded" },
              { k: "30+", v: "In-house team" },
              { k: "4.8 / 5", v: "Client rating" },
            ].map((s) => (
              <div key={s.v} className="border-t hairline pt-4">
                <div className="font-display text-3xl tracking-tight">{s.k}</div>
                <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-[color:var(--color-gray-3)] mt-1">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
