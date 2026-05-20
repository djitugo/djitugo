"use client";

import Link from "next/link";

const items = [
  "Ready to scale?",
  "Let's talk →",
  "Brand audit on us",
  "30-min discovery call",
  "Available Q3 2026",
];

export default function TickerCTA() {
  return (
    <Link
      href="/contact"
      className="block py-6 border-y hairline overflow-hidden group bg-[color:var(--color-paper)] hover:bg-[color:var(--color-ink)] hover:text-[color:var(--color-paper)] transition-colors duration-500"
    >
      <div className="marquee-track flex gap-12 whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span
            key={i}
            className="font-display text-3xl md:text-5xl tracking-tight"
          >
            {t}
            <span className="ml-12 opacity-30">/</span>
          </span>
        ))}
      </div>
    </Link>
  );
}
