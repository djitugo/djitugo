"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import TickerCTA from "@/components/TickerCTA";

type Work = {
  client: string;
  industry: string;
  year: string;
  services: string[];
  result: string;
  feature?: boolean;
  size: "tall" | "wide" | "square";
  hue: number;
};

const works: Work[] = [
  {
    client: "The Mesare Resort",
    industry: "Hospitality",
    year: "2025",
    services: ["Web", "Social", "SEO"],
    result: "Bookings doubled in 2 quarters after a brand refresh + always-on social.",
    feature: true,
    size: "wide",
    hue: 12,
  },
  {
    client: "JobStreet Express",
    industry: "Recruitment",
    year: "2024",
    services: ["Campaign", "Ads"],
    result: "Multi-channel launch campaign across Meta + Google with 4.2× ROAS.",
    size: "tall",
    hue: 0,
  },
  {
    client: "Chandra Bali Villas",
    industry: "Luxury Villas",
    year: "2025",
    services: ["Branding", "Photography"],
    result: "Identity system + photo library that scaled to OTAs and direct booking.",
    size: "square",
    hue: 30,
  },
  {
    client: "Salty Skin",
    industry: "Skincare D2C",
    year: "2024",
    services: ["Social", "Reels"],
    result: "Reels engine producing 12 assets/month, 5× higher save rate.",
    size: "square",
    hue: 6,
  },
  {
    client: "Bali Family Dental",
    industry: "Healthcare",
    year: "2024",
    services: ["Web", "Ads"],
    result: "New site + lead funnel cut cost per appointment by 38%.",
    size: "wide",
    hue: 20,
  },
  {
    client: "Love Scooter Bali",
    industry: "Mobility",
    year: "2023",
    services: ["Brand", "Web", "Ads"],
    result: "Full rebrand and booking-first site, ranked top-3 for category search.",
    size: "tall",
    hue: 14,
  },
  {
    client: "I Am Fit Bali",
    industry: "Fitness",
    year: "2024",
    services: ["Branding", "Social"],
    result: "Studio identity + community-first social grew membership 2.7×.",
    size: "square",
    hue: 22,
  },
  {
    client: "BB Resort Nusa Penida",
    industry: "Hospitality",
    year: "2023",
    services: ["Web", "Photography"],
    result: "Site & gallery showcasing the island — direct bookings up 60%.",
    size: "wide",
    hue: 8,
  },
  {
    client: "Ninobu",
    industry: "F&B",
    year: "2024",
    services: ["Brand", "Social"],
    result: "Brand world + content engine for a new dining concept.",
    size: "square",
    hue: 16,
  },
  {
    client: "Ruang Bahasa",
    industry: "Education",
    year: "2024",
    services: ["Web", "Social"],
    result: "Course-led site + Reels strategy that scaled enrollments 3×.",
    size: "tall",
    hue: 4,
  },
];

const filters = ["All", "Brand", "Web", "Social", "Ads", "Photo"] as const;
type Filter = (typeof filters)[number];

const sizeSpan: Record<Work["size"], string> = {
  tall: "md:col-span-4 md:row-span-2 aspect-[3/4]",
  wide: "md:col-span-8 aspect-[16/9]",
  square: "md:col-span-4 aspect-square",
};

export default function WorksPage() {
  const [active, setActive] = useState<Filter>("All");

  const visible = useMemo(() => {
    if (active === "All") return works;
    return works.filter((w) =>
      w.services.some((s) => s.toLowerCase().startsWith(active.toLowerCase()))
    );
  }, [active]);

  const featured = works.find((w) => w.feature);

  return (
    <>
      <PageHero
        eyebrow="( Selected works )"
        title={
          <>
            Made in Bali. <em className="not-italic italic font-light">Felt everywhere.</em>
          </>
        }
        lede="A working archive of brands we've shipped — hospitality, healthcare, D2C, education, mobility and beyond. The constraint is always the same: build something the client could not have built without us."
        meta={[
          { label: "Projects shipped", value: "700+" },
          { label: "Active retainers", value: "40+" },
          { label: "Industries", value: "12" },
          { label: "Avg engagement", value: "18 mo" },
        ]}
      />

      {featured && (
        <section className="border-b hairline bg-[color:var(--color-paper)]">
          <div className="container-x py-16 md:py-24 grid grid-cols-12 gap-8 items-center">
            <div className="col-span-12 lg:col-span-7">
              <FeatureArt hue={featured.hue} />
            </div>
            <div className="col-span-12 lg:col-span-5">
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)]">
                Featured · {featured.year}
              </p>
              <h2 className="text-headline font-display mt-6">{featured.client}</h2>
              <p className="mt-6 text-[15.5px] leading-relaxed text-[color:var(--color-gray-4)] max-w-md">
                {featured.result}
              </p>
              <div className="mt-8 flex flex-wrap gap-2">
                {featured.services.map((s) => (
                  <span
                    key={s}
                    className="text-[11px] font-mono uppercase tracking-[0.22em] px-3 py-1.5 rounded-full border hairline"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-10 inline-flex items-center gap-3 text-sm underline-grow"
              >
                Want results like this? Talk to us →
              </Link>
            </div>
          </div>
        </section>
      )}

      <section className="py-12 md:py-16 bg-[color:var(--color-paper)] border-b hairline">
        <div className="container-x flex flex-wrap items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)] mr-2">
            Filter
          </span>
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`text-[11px] font-mono uppercase tracking-[0.22em] px-4 py-2 rounded-full border transition-colors ${
                active === f
                  ? "bg-[color:var(--color-ink)] text-[color:var(--color-paper)] border-[color:var(--color-ink)]"
                  : "hairline hover:bg-[color:var(--color-ink)]/5"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="py-16 md:py-24 bg-[color:var(--color-paper)]">
        <div className="container-x grid grid-cols-12 gap-3 md:gap-4 auto-rows-[minmax(220px,auto)]">
          {visible.map((w) => (
            <article
              key={w.client}
              className={`col-span-12 ${sizeSpan[w.size]} group relative overflow-hidden rounded-2xl bg-[color:var(--color-ink)] text-[color:var(--color-paper)] grain`}
            >
              <WorkArt hue={w.hue} />
              <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-between">
                <div className="flex items-start justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.28em]">
                  <span className="opacity-80">{w.industry}</span>
                  <span className="opacity-60">{w.year}</span>
                </div>
                <div>
                  <h3 className="font-display text-[clamp(1.5rem,2.2vw,2.5rem)] tracking-tight leading-[1.1] pb-[0.1em] transition-transform duration-500 group-hover:-translate-y-1">
                    {w.client}
                  </h3>
                  <p className="mt-3 text-[13px] leading-relaxed opacity-75 max-w-sm">
                    {w.result}
                  </p>
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
          {visible.length === 0 && (
            <p className="col-span-12 text-center text-[color:var(--color-gray-3)] py-16 font-mono text-sm uppercase tracking-[0.22em]">
              No projects under this filter — try another tag.
            </p>
          )}
        </div>
      </section>

      <TickerCTA />
    </>
  );
}

function WorkArt({ hue }: { hue: number }) {
  const rings = 14 + (hue % 10);
  return (
    <svg
      viewBox="0 0 400 400"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden
    >
      <defs>
        <linearGradient id={`wg-${hue}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0a0a0a" />
          <stop offset="100%" stopColor="#1a1a1a" />
        </linearGradient>
      </defs>
      <rect width="400" height="400" fill={`url(#wg-${hue})`} />
      {Array.from({ length: rings }).map((_, i) => (
        <circle
          key={i}
          cx={200 + (hue % 6) * 8}
          cy={200 + ((hue * 3) % 5) * 10}
          r={18 + i * 13}
          fill="none"
          stroke="rgba(246,245,241,0.07)"
          strokeWidth="0.8"
        />
      ))}
    </svg>
  );
}

function FeatureArt({ hue }: { hue: number }) {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[color:var(--color-ink)] text-[color:var(--color-paper)] grain">
      <svg
        viewBox="0 0 800 500"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <rect width="800" height="500" fill="#0a0a0a" />
        <g stroke="rgba(246,245,241,0.15)" fill="none">
          {Array.from({ length: 32 }).map((_, i) => (
            <path key={i} d={`M0,${i * 17} Q400,${i * 17 - 80} 800,${i * 17}`} />
          ))}
        </g>
        <g fill="none" stroke="rgba(246,245,241,0.12)">
          {Array.from({ length: 8 }).map((_, i) => (
            <circle key={i} cx="640" cy="250" r={30 + i * 30} />
          ))}
        </g>
      </svg>
    </div>
  );
}
