import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import TickerCTA from "@/components/TickerCTA";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Six end-to-end services from a Bali studio. Strategy, social, ads, web, branding and commercial photography — engineered to compound.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Services — Djitugo",
    description:
      "Six end-to-end services from a Bali studio. Strategy, social, ads, web, branding and commercial photography.",
    url: "/services",
    type: "website",
  },
};

type Service = {
  num: string;
  slug: string;
  title: string;
  tagline: string;
  body: string;
  deliverables: string[];
  outcomes: string[];
  tone: "dark" | "light";
};

const services: Service[] = [
  {
    num: "01",
    slug: "all-in-one",
    title: "All-in-One Digital Marketing",
    tagline: "One team, one roadmap, one P&L.",
    body:
      "We sit in the operator's seat. Strategy, content, paid media, web and analytics — orchestrated by a single account team toward the metric that matters to your business.",
    deliverables: [
      "Quarterly growth strategy",
      "Channel mix & budget plan",
      "Weekly creative production",
      "Always-on ads management",
      "Monthly executive dashboard",
    ],
    outcomes: [
      "Predictable pipeline",
      "Lower CAC, higher LTV",
      "One source of truth",
    ],
    tone: "dark",
  },
  {
    num: "02",
    slug: "social",
    title: "Social Media Management",
    tagline: "Content that earns attention, not just impressions.",
    body:
      "Instagram, TikTok and Facebook ecosystems built around your brand's point of view. Calendars planned in 30-day sprints, produced in-studio, optimized in flight.",
    deliverables: [
      "Brand voice & visual system",
      "Monthly content calendar",
      "Reels, carousels, statics",
      "Community management",
      "Performance reporting",
    ],
    outcomes: [
      "Follower growth that converts",
      "Higher save & share rates",
      "Consistent on-brand output",
    ],
    tone: "light",
  },
  {
    num: "03",
    slug: "ads",
    title: "Ads Management",
    tagline: "Performance from week one, optimized to scale.",
    body:
      "Meta, Google, TikTok, LinkedIn and YouTube — running on a single creative engine. We test fast, kill what doesn't work, and double the budget on what does.",
    deliverables: [
      "Funnel & audience mapping",
      "Creative variants in bulk",
      "Pixel & conversion tracking",
      "Weekly bid & budget review",
      "Attribution reporting",
    ],
    outcomes: [
      "Scalable cost per result",
      "Higher ROAS over time",
      "Clear attribution",
    ],
    tone: "light",
  },
  {
    num: "04",
    slug: "web",
    title: "Web Development",
    tagline: "Conversion-first sites, engineered like product.",
    body:
      "Next.js, headless CMS, Tailwind systems and modern motion. Optional AI chat & automation integrations so the site sells while you sleep.",
    deliverables: [
      "UX & wireframe sprint",
      "Design system & components",
      "Headless CMS integration",
      "AI chat / agent (optional)",
      "Speed & SEO hardening",
    ],
    outcomes: [
      "Page Speed 90+",
      "Conversion lift",
      "Easy to update in-house",
    ],
    tone: "dark",
  },
  {
    num: "05",
    slug: "branding",
    title: "Branding & Design",
    tagline: "Identity systems for a digital-first world.",
    body:
      "Logo systems, type, color, motion principles and a brand book your team can actually use. Designed to extend cleanly into web, social and packaging.",
    deliverables: [
      "Brand audit & positioning",
      "Logo & wordmark system",
      "Type, color, grid tokens",
      "Brand guidelines book",
      "Asset library handover",
    ],
    outcomes: [
      "Cohesive cross-channel look",
      "Faster creative production",
      "Premium brand equity",
    ],
    tone: "light",
  },
  {
    num: "06",
    slug: "photography",
    title: "Commercial Photography",
    tagline: "Made in Bali by @djitugopictures.",
    body:
      "Product, lifestyle and campaign imagery shot in-studio or on location. Same team handles reels, behind-the-scenes and stills — one cohesive look.",
    deliverables: [
      "Pre-production & shot list",
      "Studio or location shoot",
      "Retouching & finishing",
      "Reels & motion edits",
      "Licensed asset library",
    ],
    outcomes: [
      "On-brand visual library",
      "Faster campaign launches",
      "Story-led, not stock-led",
    ],
    tone: "light",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="( Services )"
        title={
          <>
            Six services. <em className="not-italic italic font-light">One growth engine.</em>
          </>
        }
        lede="Each service is sharp on its own. Together they compound — research informs creative, creative powers ads, ads inform the next sprint. You hire one studio and walk out with a system."
        meta={[
          { label: "Engagements", value: "Retainer / Project" },
          { label: "Min term", value: "3 months" },
          { label: "Discovery", value: "30-min call" },
          { label: "Onboarding", value: "≤ 2 weeks" },
        ]}
      />

      <section className="bg-[color:var(--color-paper)]">
        <div className="container-x py-6 md:py-10">
          <ul className="flex flex-wrap gap-3 font-mono text-[11px] uppercase tracking-[0.22em]">
            {services.map((s) => (
              <li key={s.slug}>
                <a
                  href={`#${s.slug}`}
                  className="inline-flex items-center gap-2 border hairline rounded-full px-4 py-2 hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-paper)] transition-colors"
                >
                  <span className="opacity-50">{s.num}</span>
                  {s.title.split(" ")[0]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <div className="bg-[color:var(--color-paper)]">
        {services.map((s, i) => (
          <ServiceSection key={s.slug} service={s} index={i} />
        ))}
      </div>

      <TickerCTA />
    </>
  );
}

function ServiceSection({ service: s, index }: { service: Service; index: number }) {
  const dark = s.tone === "dark";
  const reversed = index % 2 === 1;
  return (
    <section
      id={s.slug}
      className={`relative py-24 md:py-32 overflow-hidden ${
        dark
          ? "bg-[color:var(--color-ink)] text-[color:var(--color-paper)] grain"
          : "bg-[color:var(--color-paper-pure)] border-t hairline"
      }`}
    >
      <div className="container-x grid grid-cols-12 gap-6 md:gap-10 relative z-10">
        <div className={`col-span-12 md:col-span-7 ${reversed ? "md:order-2 md:col-start-6" : ""}`}>
          <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.28em] opacity-70">
            <span>{s.num} / 06</span>
            <span className="opacity-40">·</span>
            <span>{s.tagline}</span>
          </div>
          <h2 className="text-headline font-display mt-8 max-w-[14ch]">
            {s.title}
          </h2>
          <p
            className={`mt-8 max-w-xl text-[15px] md:text-base leading-relaxed ${
              dark ? "text-[color:var(--color-paper)]/75" : "text-[color:var(--color-gray-4)]"
            }`}
          >
            {s.body}
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-10 max-w-2xl">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] opacity-60 mb-4">
                Deliverables
              </p>
              <ul className="space-y-2.5 text-[14.5px]">
                {s.deliverables.map((d) => (
                  <li key={d} className="flex gap-3">
                    <span className="opacity-40">—</span>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.28em] opacity-60 mb-4">
                Outcomes
              </p>
              <ul className="space-y-2.5 text-[14.5px]">
                {s.outcomes.map((o) => (
                  <li key={o} className="flex gap-3">
                    <span className="opacity-40">+</span>
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Link
              href={`/services/${s.slug}`}
              className={`group inline-flex items-center gap-3 rounded-full pl-6 pr-2 py-2 text-sm tracking-wide ${
                dark
                  ? "bg-[color:var(--color-paper)] text-[color:var(--color-ink)]"
                  : "bg-[color:var(--color-ink)] text-[color:var(--color-paper)]"
              }`}
            >
              Read the full case
              <span
                className={`h-10 w-10 grid place-items-center rounded-full transition-transform group-hover:rotate-45 ${
                  dark
                    ? "bg-[color:var(--color-ink)] text-[color:var(--color-paper)]"
                    : "bg-[color:var(--color-paper)] text-[color:var(--color-ink)]"
                }`}
              >
                →
              </span>
            </Link>
            <Link href="/contact" className="text-sm underline-grow">
              Or request a quote →
            </Link>
          </div>
        </div>

        <div
          className={`col-span-12 md:col-span-4 ${
            reversed ? "md:order-1 md:col-start-1" : "md:col-start-9"
          }`}
        >
          <div
            className={`aspect-[3/4] rounded-2xl overflow-hidden relative ${
              dark
                ? "border border-[color:var(--color-paper)]/15"
                : "bg-[color:var(--color-ink)] text-[color:var(--color-paper)] grain"
            }`}
          >
            <ServiceArt num={s.num} dark={dark} />
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] opacity-70">
                Service {s.num}
              </div>
              <div className="font-display text-[clamp(2.5rem,4vw,4rem)] leading-[0.9]">
                {s.num}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className={`pointer-events-none absolute -bottom-[5vw] left-0 right-0 font-display text-[clamp(7rem,24vw,22rem)] leading-[0.82] text-center tracking-[-0.06em] select-none ${
          dark ? "text-[color:var(--color-paper)]/[0.04]" : "text-[color:var(--color-ink)]/[0.04]"
        }`}
      >
        {s.num}
      </div>
    </section>
  );
}

function ServiceArt({ num, dark }: { num: string; dark: boolean }) {
  const stroke = dark ? "rgba(246,245,241,0.18)" : "rgba(246,245,241,0.18)";
  const idx = parseInt(num, 10);
  return (
    <svg viewBox="0 0 400 540" className="w-full h-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="400" height="540" fill={dark ? "transparent" : "#0a0a0a"} />
      {idx === 1 &&
        Array.from({ length: 22 }).map((_, i) => (
          <circle key={i} cx="200" cy="270" r={20 + i * 12} fill="none" stroke={stroke} strokeWidth="1" />
        ))}
      {idx === 2 &&
        Array.from({ length: 14 }).map((_, i) => (
          <rect key={i} x={40 + i * 24} y={120 + (i % 4) * 80} width="3" height={140 + ((i * 17) % 200)} fill={stroke} />
        ))}
      {idx === 3 && (
        <g stroke={stroke} strokeWidth="1.2" fill="none">
          {Array.from({ length: 8 }).map((_, i) => (
            <path key={i} d={`M0,${i * 70 + 40} Q200,${i * 70 - 20} 400,${i * 70 + 40}`} />
          ))}
        </g>
      )}
      {idx === 4 && (
        <g stroke={stroke} fill="none">
          {Array.from({ length: 16 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 26} y1="0" x2={i * 26} y2="540" />
          ))}
          {Array.from({ length: 22 }).map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 26} x2="400" y2={i * 26} />
          ))}
        </g>
      )}
      {idx === 5 && (
        <g>
          <circle cx="200" cy="270" r="120" fill={stroke.replace("0.18", "0.45")} />
          <circle cx="200" cy="270" r="80" fill="#0a0a0a" />
          <circle cx="200" cy="270" r="40" fill={stroke.replace("0.18", "0.9")} />
        </g>
      )}
      {idx === 6 &&
        Array.from({ length: 6 }).map((_, i) => (
          <rect
            key={i}
            x={50 + (i % 3) * 110}
            y={80 + Math.floor(i / 3) * 200}
            width="90"
            height="180"
            fill="none"
            stroke={stroke}
            strokeWidth="1"
          />
        ))}
    </svg>
  );
}
