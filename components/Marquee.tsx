"use client";

const clients = [
  "JobStreet Express",
  "The Mesare Resort",
  "Chandra Bali Villas",
  "BB Resort Nusa Penida",
  "Love Scooter Bali",
  "Bali Family Dental Care",
  "Salty Skin",
  "I Am Fit Bali",
  "Ruang Bahasa",
  "Ninobu",
  "Sexy Glow",
];

export default function Marquee() {
  return (
    <section className="py-10 md:py-14 border-b hairline overflow-hidden bg-[color:var(--color-paper)]">
      <div className="container-x mb-8 flex items-center justify-between gap-4">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)]">
          ( In partnership with )
        </p>
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-[color:var(--color-gray-3)]">
          Bali · Jakarta · Surabaya · Singapore
        </p>
      </div>

      <div className="relative">
        <div className="marquee-track flex gap-14 whitespace-nowrap">
          {[...clients, ...clients].map((c, i) => (
            <span
              key={i}
              className="font-display text-3xl md:text-5xl text-[color:var(--color-ink)]/85 hover:text-[color:var(--color-ink)] transition-colors"
            >
              {c}
              <span className="ml-14 text-[color:var(--color-gray-3)]">·</span>
            </span>
          ))}
        </div>

        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[color:var(--color-paper)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[color:var(--color-paper)] to-transparent" />
      </div>
    </section>
  );
}
