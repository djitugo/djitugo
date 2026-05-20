"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type Service = {
  num: string;
  title: string;
  blurb: string;
  bullets: string[];
  span: string;
  tone: "dark" | "light";
  decoration?: React.ReactNode;
};

const services: Service[] = [
  {
    num: "01",
    title: "All-in-One\nDigital Marketing",
    blurb:
      "Strategy, execution and reporting under one roof. We orchestrate every channel toward one metric: business growth.",
    bullets: ["Strategy", "Roadmap", "Reporting"],
    span: "md:col-span-8 md:row-span-2",
    tone: "dark",
    decoration: <BigType label="00" subtitle="Flagship offering" />,
  },
  {
    num: "02",
    title: "Social Media\nManagement",
    blurb:
      "Instagram, TikTok &amp; Facebook content that builds community and converts followers into customers.",
    bullets: ["Content", "Community", "Analytics"],
    span: "md:col-span-4",
    tone: "light",
  },
  {
    num: "03",
    title: "Ads\nManagement",
    blurb:
      "Performance-led campaigns across Meta, Google, TikTok, LinkedIn &amp; YouTube — optimized weekly.",
    bullets: ["Meta", "Google", "TikTok"],
    span: "md:col-span-4",
    tone: "light",
  },
  {
    num: "04",
    title: "Web\nDevelopment",
    blurb:
      "Conversion-first websites engineered with modern stacks, AI chat &amp; automations baked in.",
    bullets: ["Next.js", "Headless", "AI Agents"],
    span: "md:col-span-5",
    tone: "light",
  },
  {
    num: "05",
    title: "Branding &amp;\nDesign",
    blurb:
      "Identity systems, art direction and graphic craft — built for a digital-first world.",
    bullets: ["Identity", "Systems", "Direction"],
    span: "md:col-span-3",
    tone: "dark",
  },
  {
    num: "06",
    title: "Commercial\nPhotography",
    blurb:
      "Product, lifestyle &amp; campaign imagery — shot in Bali by our in-house @djitugopictures team.",
    bullets: ["Product", "Lifestyle", "Reels"],
    span: "md:col-span-4",
    tone: "light",
  },
];

export default function Services() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>(".svc-card");
      gsap.set(cards, { y: 40, opacity: 0 });
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              gsap.to(cards, {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.08,
                ease: "expo.out",
              });
              io.disconnect();
            }
          });
        },
        { threshold: 0.1 }
      );
      if (ref.current) io.observe(ref.current);
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={ref}
      className="py-28 md:py-40 bg-[color:var(--color-paper)]"
    >
      <div className="container-x">
        <div className="grid grid-cols-12 gap-y-6 items-end mb-14 md:mb-20">
          <div className="col-span-12 md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)]">
              ( 02 · Services )
            </p>
            <h2 className="text-headline mt-6 font-display">
              Six services. <em className="not-italic italic font-light">One growth engine.</em>
            </h2>
          </div>
          <p className="col-span-12 md:col-span-4 md:col-start-9 text-[15px] leading-relaxed text-[color:var(--color-gray-4)]">
            Each service is sharp on its own. Together they compound — research informs creative, creative powers ads, ads inform the next sprint.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-3 md:gap-4 auto-rows-[minmax(200px,auto)]">
          {services.map((s) => (
            <ServiceCard key={s.num} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ num, title, blurb, bullets, span, tone, decoration }: Service) {
  const dark = tone === "dark";
  return (
    <article
      className={`svc-card ${span} col-span-12 group relative overflow-hidden rounded-2xl p-7 md:p-10 flex flex-col justify-between ${
        dark
          ? "bg-[color:var(--color-ink)] text-[color:var(--color-paper)] grain"
          : "bg-[color:var(--color-paper-pure)] border hairline text-[color:var(--color-ink)]"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <span className="font-mono text-[11px] uppercase tracking-[0.28em] opacity-70">
          {num}
        </span>
        <span
          aria-hidden
          className={`h-8 w-8 grid place-items-center rounded-full transition-transform group-hover:rotate-45 ${
            dark
              ? "bg-[color:var(--color-paper)]/15"
              : "bg-[color:var(--color-ink)]/5"
          }`}
        >
          →
        </span>
      </div>

      <div>
        <h3 className="text-[clamp(1.75rem,3.4vw,3.25rem)] font-display whitespace-pre-line leading-[1.08] tracking-tight pb-[0.1em]">
          {title}
        </h3>
        <p
          className={`mt-5 max-w-md text-[14.5px] leading-relaxed ${
            dark
              ? "text-[color:var(--color-paper)]/70"
              : "text-[color:var(--color-gray-4)]"
          }`}
          dangerouslySetInnerHTML={{ __html: blurb }}
        />
        <ul className="mt-6 flex flex-wrap gap-2">
          {bullets.map((b) => (
            <li
              key={b}
              className={`text-[11px] font-mono uppercase tracking-[0.22em] px-3 py-1.5 rounded-full border ${
                dark
                  ? "border-[color:var(--color-paper)]/25"
                  : "border-[color:var(--color-ink)]/15"
              }`}
            >
              {b}
            </li>
          ))}
        </ul>
      </div>

      {decoration}

      {/* hover spotlight */}
      <div
        aria-hidden
        className={`pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${
          dark
            ? "bg-[radial-gradient(circle_at_var(--mx,80%)_var(--my,20%),rgba(255,255,255,0.08),transparent_45%)]"
            : "bg-[radial-gradient(circle_at_var(--mx,80%)_var(--my,20%),rgba(0,0,0,0.05),transparent_45%)]"
        }`}
      />
    </article>
  );
}

function BigType({ label, subtitle }: { label: string; subtitle: string }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute -right-2 -bottom-6 md:-right-4 md:-bottom-10 select-none"
    >
      <div className="font-display text-[clamp(7rem,15vw,16rem)] leading-[0.82] text-[color:var(--color-paper)]/8 tracking-[-0.06em]">
        {label}
      </div>
      <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-paper)]/40 -mt-4 md:-mt-6">
        {subtitle}
      </div>
    </div>
  );
}
