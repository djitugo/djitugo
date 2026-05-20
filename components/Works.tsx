"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type Work = {
  client: string;
  category: string;
  services: string[];
  year: string;
  size: "tall" | "wide" | "square";
  art: React.ReactNode;
};

const works: Work[] = [
  {
    client: "The Mesare Resort",
    category: "Hospitality · Bali",
    services: ["Web", "SMM", "SEO"],
    year: "2025",
    size: "tall",
    art: <ArtA />,
  },
  {
    client: "JobStreet Express",
    category: "Recruitment platform",
    services: ["Campaign", "Ads"],
    year: "2024",
    size: "square",
    art: <ArtB />,
  },
  {
    client: "Chandra Bali Villas",
    category: "Luxury villas",
    services: ["Brand", "Photo"],
    year: "2025",
    size: "wide",
    art: <ArtC />,
  },
  {
    client: "Salty Skin",
    category: "Skincare D2C",
    services: ["SMM", "Reels"],
    year: "2024",
    size: "square",
    art: <ArtD />,
  },
  {
    client: "Bali Family Dental",
    category: "Healthcare",
    services: ["Web", "Ads"],
    year: "2024",
    size: "wide",
    art: <ArtE />,
  },
  {
    client: "Love Scooter Bali",
    category: "Mobility · rental",
    services: ["Brand", "Web", "Ads"],
    year: "2023",
    size: "tall",
    art: <ArtF />,
  },
];

const span: Record<Work["size"], string> = {
  tall: "md:col-span-4 md:row-span-2 aspect-[3/4]",
  wide: "md:col-span-8 aspect-[16/9]",
  square: "md:col-span-4 aspect-square",
};

export default function Works() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".work-card");
      gsap.set(cards, { y: 50, opacity: 0 });
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              gsap.to(cards, {
                y: 0,
                opacity: 1,
                duration: 1.1,
                stagger: 0.07,
                ease: "expo.out",
              });
              io.disconnect();
            }
          });
        },
        { threshold: 0.05 }
      );
      if (root.current) io.observe(root.current);
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="works"
      ref={root}
      className="py-28 md:py-40 bg-[color:var(--color-paper)]"
    >
      <div className="container-x">
        <div className="grid grid-cols-12 gap-y-8 items-end mb-14 md:mb-20">
          <div className="col-span-12 md:col-span-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)]">
              ( 04 · Selected works )
            </p>
            <h2 className="text-headline mt-6 font-display">
              Made in Bali. <em className="not-italic italic font-light">Felt everywhere.</em>
            </h2>
          </div>
          <a
            href="#contact"
            className="col-span-12 md:col-span-3 md:col-start-10 md:text-right text-sm underline-grow"
          >
            View the full archive →
          </a>
        </div>

        <div className="grid grid-cols-12 gap-3 md:gap-4 auto-rows-[minmax(220px,auto)]">
          {works.map((w) => (
            <article
              key={w.client}
              className={`work-card col-span-12 ${span[w.size]} group relative overflow-hidden rounded-2xl bg-[color:var(--color-ink)] text-[color:var(--color-paper)] grain`}
            >
              <div className="absolute inset-0">{w.art}</div>

              <div className="relative h-full z-10 p-6 md:p-8 flex flex-col justify-between">
                <div className="flex items-start justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.28em]">
                  <span className="opacity-80">{w.category}</span>
                  <span className="opacity-60">{w.year}</span>
                </div>

                <div>
                  <h3 className="font-display text-[clamp(1.5rem,2.3vw,2.5rem)] tracking-tight leading-[1] transition-transform duration-500 group-hover:-translate-y-1">
                    {w.client}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {w.services.map((s) => (
                      <span
                        key={s}
                        className="text-[10px] font-mono uppercase tracking-[0.22em] px-2.5 py-1 rounded-full border border-[color:var(--color-paper)]/30"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <span
                aria-hidden
                className="absolute top-6 right-6 z-10 h-9 w-9 grid place-items-center rounded-full bg-[color:var(--color-paper)]/15 group-hover:bg-[color:var(--color-paper)] group-hover:text-[color:var(--color-ink)] transition-all"
              >
                →
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- decorative SVG art (pure B&W, abstract) ---------- */
function ArtA() {
  return (
    <svg viewBox="0 0 400 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <defs>
        <linearGradient id="ga" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a0a0a" />
          <stop offset="100%" stopColor="#242424" />
        </linearGradient>
      </defs>
      <rect width="400" height="600" fill="url(#ga)" />
      {Array.from({ length: 18 }).map((_, i) => (
        <circle key={i} cx="200" cy="380" r={20 + i * 14} fill="none" stroke="rgba(246,245,241,0.07)" strokeWidth="1" />
      ))}
      <text x="50%" y="78%" textAnchor="middle" fill="rgba(246,245,241,0.5)" fontFamily="serif" fontSize="48" fontStyle="italic">mesare.</text>
    </svg>
  );
}
function ArtB() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="400" height="400" fill="#111" />
      {Array.from({ length: 22 }).map((_, i) => (
        <rect key={i} x={20 + i * 18} y={50 + (i % 5) * 60} width="2" height={120 + (i * 13) % 200} fill="rgba(246,245,241,0.55)" />
      ))}
    </svg>
  );
}
function ArtC() {
  return (
    <svg viewBox="0 0 800 450" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="800" height="450" fill="#0d0d0d" />
      <g stroke="rgba(246,245,241,0.18)" fill="none">
        {Array.from({ length: 26 }).map((_, i) => (
          <path key={i} d={`M0,${i * 18} Q400,${i * 18 - 60} 800,${i * 18}`} />
        ))}
      </g>
      <text x="6%" y="84%" fill="rgba(246,245,241,0.55)" fontFamily="serif" fontSize="64" fontStyle="italic">chandra.</text>
    </svg>
  );
}
function ArtD() {
  return (
    <svg viewBox="0 0 400 400" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="400" height="400" fill="#0a0a0a" />
      <circle cx="200" cy="180" r="120" fill="rgba(246,245,241,0.9)" />
      <circle cx="200" cy="180" r="120" fill="url(#sg)" />
      <defs>
        <radialGradient id="sg" cx="0.3" cy="0.3" r="0.8">
          <stop offset="0%" stopColor="rgba(10,10,10,0)" />
          <stop offset="100%" stopColor="rgba(10,10,10,0.8)" />
        </radialGradient>
      </defs>
    </svg>
  );
}
function ArtE() {
  return (
    <svg viewBox="0 0 800 450" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="800" height="450" fill="#101010" />
      <g fill="rgba(246,245,241,0.85)">
        <rect x="48" y="80" width="220" height="2" />
        <rect x="48" y="120" width="280" height="2" />
        <rect x="48" y="160" width="180" height="2" />
      </g>
      <text x="6%" y="76%" fill="rgba(246,245,241,0.7)" fontFamily="serif" fontSize="92" fontStyle="italic">smile.</text>
    </svg>
  );
}
function ArtF() {
  return (
    <svg viewBox="0 0 400 600" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="400" height="600" fill="#0a0a0a" />
      <g stroke="rgba(246,245,241,0.5)" strokeWidth="1.5" fill="none">
        <circle cx="120" cy="430" r="50" />
        <circle cx="280" cy="430" r="50" />
        <path d="M120,430 L200,300 L280,430 M200,300 L240,260" />
      </g>
      <text x="50%" y="86%" textAnchor="middle" fill="rgba(246,245,241,0.5)" fontFamily="serif" fontSize="42" fontStyle="italic">scoot.</text>
    </svg>
  );
}
