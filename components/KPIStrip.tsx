"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const kpis = [
  { value: "700+", label: "Clients trusted", note: "UMKM to multinationals" },
  { value: "37K", label: "Instagram community", note: "@djitugo" },
  { value: "06", label: "Core services", note: "End-to-end" },
  { value: "08", label: "Years of craft", note: "Since 2018, Bali" },
];

export default function KPIStrip() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const els = gsap.utils.toArray<HTMLElement>(".kpi-cell");
      gsap.set(els, { y: 30, opacity: 0 });
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              gsap.to(els, {
                y: 0,
                opacity: 1,
                duration: 0.9,
                stagger: 0.08,
                ease: "expo.out",
              });
              io.disconnect();
            }
          });
        },
        { threshold: 0.25 }
      );
      if (ref.current) io.observe(ref.current);
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="border-y hairline bg-[color:var(--color-paper-pure)]">
      <div className="container-x grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 hairline">
        {kpis.map((k) => (
          <div key={k.label} className="kpi-cell py-10 md:py-14 px-6 md:px-8 first:pl-0">
            <div className="font-display text-5xl md:text-6xl tracking-tight tabular-nums">
              {k.value}
            </div>
            <div className="mt-4 text-sm font-medium">{k.label}</div>
            <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.22em] text-[color:var(--color-gray-3)]">
              {k.note}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
