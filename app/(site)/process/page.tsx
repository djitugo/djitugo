import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import TickerCTA from "@/components/TickerCTA";

export const metadata: Metadata = {
  title: "Process — Djitugo",
  description:
    "A studio process, run like a system. Four stages, 90-day cycles, predictable outcomes.",
};

type Step = {
  n: string;
  title: string;
  tagline: string;
  body: string;
  deliverables: string[];
  duration: string;
  who: string;
};

const steps: Step[] = [
  {
    n: "01",
    title: "Listen",
    tagline: "Discovery sprint with founders & stakeholders.",
    body:
      "We start with a working session — founders, marketing, product, ops. We map the brand, the audience, the channels and the metric that actually matters. Nothing else moves until we agree on the destination.",
    deliverables: [
      "Stakeholder interviews",
      "Brand & audience audit",
      "Competitor landscape",
      "Metric tree & north star",
    ],
    duration: "Week 1 – 2",
    who: "Strategy lead · Account director",
  },
  {
    n: "02",
    title: "Shape",
    tagline: "Strategy dressed in design.",
    body:
      "Strategy becomes identity, content pillars, channel architecture and a launch system the team can actually run. We design once, but for the system — not the screenshot.",
    deliverables: [
      "Strategy doc",
      "Identity & art direction",
      "Content pillars & calendar v0",
      "Site / channel architecture",
    ],
    duration: "Week 3 – 6",
    who: "Creative director · Designer · Strategist",
  },
  {
    n: "03",
    title: "Ship",
    tagline: "Production, weekly cadence, ruthless feedback.",
    body:
      "We produce, schedule and launch. Creative on schedule, ads optimized weekly, dashboards updated daily. You see what's running, what's working, what's getting cut.",
    deliverables: [
      "Weekly creative sprint",
      "Always-on ads management",
      "Web build / iteration",
      "Live performance dashboard",
    ],
    duration: "Week 7 – 12",
    who: "Producer · Designer · Ads specialist · Engineer",
  },
  {
    n: "04",
    title: "Scale",
    tagline: "Every cycle informs the next.",
    body:
      "End-of-cycle review with the full team. What worked, what didn't, where to double down. We rewrite the next 90 days using data, not opinions — and start again with sharper aim.",
    deliverables: [
      "End-of-cycle review",
      "Performance retrospective",
      "Next-cycle plan",
      "Refreshed roadmap",
    ],
    duration: "Week 13",
    who: "Full team · Founders",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        eyebrow="( How we work )"
        title={
          <>
            A studio process, <em className="not-italic italic font-light">run like a system.</em>
          </>
        }
        lede="Four stages, repeated in 90-day cycles. Predictable for clients, fast for our team, accountable to outcomes. Same rhythm whether you're a Bali MSME or a multinational."
        meta={[
          { label: "Cycle length", value: "90 days" },
          { label: "Stages", value: "04" },
          { label: "Cadence", value: "Weekly" },
          { label: "Reporting", value: "Live + monthly" },
        ]}
      />

      {/* Timeline strip */}
      <section className="border-b hairline bg-[color:var(--color-paper-pure)]">
        <div className="container-x py-16 md:py-24">
          <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)] mb-10">
            A 90-day cycle, visualized
          </p>
          <div className="grid grid-cols-12 gap-3 md:gap-4 items-stretch">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className={`col-span-12 md:col-span-3 relative border-l hairline pl-5 py-2`}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)]">
                  {s.duration}
                </div>
                <div className="font-display text-4xl md:text-5xl mt-2 tracking-tight">
                  {s.title}
                </div>
                <div className="mt-3 h-1 bg-[color:var(--color-ink)] rounded-full" style={{ width: `${(i + 1) * 22}%` }} />
                <div className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-gray-3)]">
                  Step {s.n}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep dive per step */}
      <section className="bg-[color:var(--color-ink)] text-[color:var(--color-paper)] grain relative overflow-hidden">
        <div className="container-x py-20 md:py-32 relative z-10">
          <ol className="divide-y hairline-light">
            {steps.map((s) => (
              <li key={s.n} className="grid grid-cols-12 gap-6 py-12 md:py-20 items-start">
                <div className="col-span-12 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.28em] opacity-60 pt-2">
                  {s.n} / 04
                </div>
                <div className="col-span-12 md:col-span-5">
                  <h2 className="font-display text-5xl md:text-7xl tracking-tight leading-[0.95]">
                    {s.title}
                  </h2>
                  <p className="mt-4 italic font-display text-xl md:text-2xl opacity-70 max-w-md">
                    {s.tagline}
                  </p>
                  <p className="mt-8 text-[15px] leading-relaxed opacity-80 max-w-md">
                    {s.body}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-5 grid grid-cols-1 gap-y-8">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.28em] opacity-60 mb-3">
                      Deliverables
                    </p>
                    <ul className="space-y-2 text-[14.5px]">
                      {s.deliverables.map((d) => (
                        <li key={d} className="flex gap-3">
                          <span className="opacity-40">—</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="border-t hairline-light pt-3">
                      <p className="font-mono text-[10px] uppercase tracking-[0.28em] opacity-60">
                        Duration
                      </p>
                      <p className="mt-1 text-[14.5px]">{s.duration}</p>
                    </div>
                    <div className="border-t hairline-light pt-3">
                      <p className="font-mono text-[10px] uppercase tracking-[0.28em] opacity-60">
                        Team
                      </p>
                      <p className="mt-1 text-[14.5px]">{s.who}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-20 flex flex-col md:flex-row md:items-end md:justify-between gap-8 border-t hairline-light pt-12">
            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.28em] opacity-60">
                After cycle 01
              </p>
              <h3 className="font-display text-4xl md:text-5xl mt-4 max-w-xl">
                Cycle 02 starts <em className="not-italic italic font-light">sharper than the first.</em>
              </h3>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-[color:var(--color-paper)] text-[color:var(--color-ink)] rounded-full pl-6 pr-2 py-2 text-sm tracking-wide w-fit"
            >
              Start a cycle with us
              <span className="h-10 w-10 grid place-items-center rounded-full bg-[color:var(--color-ink)] text-[color:var(--color-paper)] transition-transform group-hover:rotate-45">
                →
              </span>
            </Link>
          </div>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-[5vw] left-0 right-0 font-display text-[clamp(7rem,28vw,28rem)] leading-[0.82] text-center tracking-[-0.06em] text-[color:var(--color-paper)]/[0.05] select-none"
        >
          process.
        </div>
      </section>

      <TickerCTA />
    </>
  );
}
