"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const steps = [
  {
    n: "01",
    title: "Listen",
    body:
      "Discovery sprint with founders &amp; stakeholders. We map the brand, the audience and the metric that matters.",
    deliverables: ["Brand audit", "Audience map", "Channel plan"],
  },
  {
    n: "02",
    title: "Shape",
    body:
      "Strategy is dressed in design — identity, content pillars and a launch system the team can run with.",
    deliverables: ["Identity", "Content pillars", "Production calendar"],
  },
  {
    n: "03",
    title: "Ship",
    body:
      "We produce, schedule and launch. Creative on schedule, ads optimized weekly, dashboards updated daily.",
    deliverables: ["Content", "Ads", "Web build"],
  },
  {
    n: "04",
    title: "Scale",
    body:
      "Every cycle informs the next. Insights from data feed creative, creative compounds reach.",
    deliverables: ["Insights", "Iteration", "Growth"],
  },
];

export default function Process() {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const rows = gsap.utils.toArray<HTMLElement>(".proc-row");
      gsap.set(rows, { opacity: 0, y: 40 });
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              gsap.to(rows, {
                opacity: 1,
                y: 0,
                duration: 0.9,
                stagger: 0.1,
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
    <section
      id="process"
      ref={root}
      className="relative py-28 md:py-40 bg-[color:var(--color-ink)] text-[color:var(--color-paper)] grain overflow-hidden"
    >
      <div className="container-x relative z-10">
        <div className="grid grid-cols-12 gap-y-8 items-end mb-16 md:mb-24">
          <div className="col-span-12 md:col-span-7">
            <p className="font-mono text-[11px] uppercase tracking-[0.28em] opacity-60">
              ( 03 · How we work )
            </p>
            <h2 className="text-headline mt-6 font-display">
              A studio process,<br />
              <em className="not-italic italic font-light">run like a system.</em>
            </h2>
          </div>
          <p className="col-span-12 md:col-span-4 md:col-start-9 text-[15px] leading-relaxed opacity-70">
            Four stages, repeated in 90-day cycles. Predictable for clients, fast for our team, accountable to outcomes.
          </p>
        </div>

        <ol className="divide-y hairline-light">
          {steps.map((s) => (
            <li
              key={s.n}
              className="proc-row grid grid-cols-12 gap-6 py-10 md:py-14 items-start group"
            >
              <div className="col-span-3 md:col-span-2 font-mono text-[11px] uppercase tracking-[0.28em] opacity-60 pt-2">
                {s.n} / 04
              </div>
              <div className="col-span-9 md:col-span-5">
                <h3 className="font-display text-5xl md:text-7xl tracking-tight transition-transform duration-500 group-hover:translate-x-2">
                  {s.title}
                </h3>
              </div>
              <p
                className="col-span-12 md:col-span-3 md:col-start-8 text-[14.5px] leading-relaxed opacity-75"
                dangerouslySetInnerHTML={{ __html: s.body }}
              />
              <div className="col-span-12 md:col-span-2 flex md:flex-col flex-wrap gap-2 md:items-end">
                {s.deliverables.map((d) => (
                  <span
                    key={d}
                    className="text-[11px] font-mono uppercase tracking-[0.22em] px-3 py-1.5 rounded-full border hairline-light"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[6vw] left-0 right-0 font-display text-[clamp(7rem,28vw,28rem)] leading-[0.82] text-center tracking-[-0.06em] text-[color:var(--color-paper)]/[0.05] select-none"
      >
        process.
      </div>
    </section>
  );
}
